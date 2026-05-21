"use client";

import { SubmitButton } from "@/components/SubmitBtn";
import { authClient, useSession } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

const AddPetPage = () => {
  const { data } = useSession();
  const user = data?.user;

  const onSubmit = async (formData) => {
    const petData = Object.fromEntries(formData.entries());
    if (petData?.vaccinated == "true") {
      petData.vaccinated = true;
    } else {
      petData.vaccinated == false;
    }
    petData.status = "Available";
    petData.owner_id = user?.id;
    const {data:tokenData}=await authClient.token()
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/add-pet`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization:`Bearer ${tokenData?.token}`
      },
      body: JSON.stringify(petData),
    });
    const data = await res.json();
    if (data.insertedId) {
      toast.success(`Pet Added Successfully!`);
      redirect("/dashboard/my-listings");
    } else {
      toast.error("Something went wrong");
    }
  };
  return (
    <section className="container mx-auto ">
      <div className="max-w-4xl mx-auto">
        {/* HEADER */}

        <div className="mb-10 text-center">
          <h1 className="section-title">
            Add a New <span className="gradient-text">Pet</span>
          </h1>

          <p className="section-subtitle mt-3">
            Help a lovely animal find a forever home by adding their details
            below.
          </p>
        </div>

        {/* FORM CARD */}

        <div className="glass-card p-6 md:p-10">
          <form
            action={onSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* PET NAME */}
            <div className="form-field">
              <label className="font-medium text-[var(--text-primary)]">
                Pet Name <span className="text-red-500">*</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter pet name"
                className="input-field"
                required
              />
            </div>

            {/* SPECIES */}
            <div className="form-field">
              <label className="font-medium text-[var(--text-primary)]">
                Species <span className="text-red-500">*</span>
              </label>
              <select name="species" className="input-field" required>
                <option value="">Select species</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="bird">Bird</option>
                <option value="rabbit">Rabbit</option>
              </select>
            </div>

            {/* BREED */}
            <div className="form-field">
              <label className="font-medium text-[var(--text-primary)]">
                Breed <span className="text-red-500">*</span>
              </label>
              <input
                name="breed"
                type="text"
                placeholder="Enter breed"
                className="input-field"
                required
              />
            </div>

            {/* AGE */}
            <div className="form-field">
              <label className="font-medium text-[var(--text-primary)]">
                Age <span className="text-red-500">*</span>
              </label>
              <input
                name="age"
                type="number"
                placeholder="Enter age"
                className="input-field"
                required
              />
            </div>

            {/* GENDER */}
            <div className="form-field">
              <label className="font-medium text-[var(--text-primary)]">
                Gender <span className="text-red-500">*</span>
              </label>
              <select name="gender" className="input-field" required>
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            {/* IMAGE URL */}
            <div className="form-field">
              <label className="font-medium text-[var(--text-primary)]">
                Image URL <span className="text-red-500">*</span>
              </label>
              <input
                name="image"
                type="url"
                placeholder="Paste image URL"
                className="input-field"
                required
              />
            </div>

            {/* HEALTH STATUS */}
            <div className="form-field">
              <label className="font-medium text-[var(--text-primary)]">
                Health Status <span className="text-red-500">*</span>
              </label>
              <input
                name="health"
                type="text"
                placeholder="Healthy / Injured / Recovering"
                className="input-field"
                required
              />
            </div>

            {/* VACCINATION STATUS */}
            <div className="form-field">
              <label className="font-medium text-[var(--text-primary)]">
                Vaccination Status <span className="text-red-500">*</span>
              </label>
              <select name="vaccinated" className="input-field" required>
                <option value="">Select vaccination status</option>
                <option value="true">Vaccinated</option>
                <option value="false">Not Vaccinated</option>
              </select>
            </div>

            {/* LOCATION */}
            <div className="form-field">
              <label className="font-medium text-[var(--text-primary)]">
                Location <span className="text-red-500">*</span>
              </label>
              <input
                name="location"
                type="text"
                placeholder="Enter location"
                className="input-field"
                required
              />
            </div>

            {/* ADOPTION FEE */}

            <div className="form-field">
              <label className="font-medium text-[var(--text-primary)]">
                Adoption Fee <span className="text-red-500">*</span>
              </label>

              <input
                name="adoptionFee"
                type="number"
                placeholder="Enter adoption fee"
                className="input-field"
                required
              />
            </div>

            {/* DESCRIPTION */}

            <div className="form-field md:col-span-2">
              <label className="font-medium text-[var(--text-primary)]">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                rows={5}
                placeholder="Write pet description..."
                className="input-field resize-none py-4"
                required
              />
            </div>

            {/* OWNER EMAIL */}

            <div className="form-field md:col-span-2">
              <label className="font-medium text-[var(--text-primary)]">
                Owner Email
              </label>

              <input
                name="owner_email"
                type="email"
                value={user?.email}
                readOnly
                className="input-field cursor-not-allowed opacity-70"
              />
            </div>

            {/* BUTTON */}

            <div className="md:col-span-2">
              <SubmitButton text="🐾 Add Pet" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddPetPage;
