"use client";
import { SubmitButton } from "@/components/SubmitBtn";
import { authClient, useSession } from "@/lib/auth-client";
import { redirect, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const UpdatePet = () => {
  const [petData, setPetData] = useState();
  const { data } = useSession();
  const user = data?.user;
  const { id } = useParams();
  useEffect(() => {
    document.title="Update Pet-Dashboard"
    const fetchData = async () => {
      try {
        const { data: tokenData } = await authClient.token();
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/petDetails/${id}`,
          {
            headers: {
              authorization: `Bearer ${tokenData?.token}`,
            },
          },
        );
        const result = await response.json();
        setPetData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  const onSubmit = async (formData) => {
    const { data: tokenData } = await authClient.token();
    const petData = Object.fromEntries(formData.entries());
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/update-pet/${id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
        body: JSON.stringify(petData),
      },
    );
    const data = await res.json();
    if (data.modifiedCount > 0 || data.modifiedCount == 0) {
      toast.success(`Pet Data updated Successfully!`);
      redirect("/dashboard/my-listings");
    } else {
      toast.error("Something went wrong");
    }
  };
  if (!petData) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[var(--background)]">
        <div className="h-10 w-10 animate-spin rounded-full border-[6px] border-[#ff7a59]/20 border-t-[#ff7a59] border-r-[#ffd166]"></div>
      </div>
    );
  } else {
    return (
      <section className="container mx-auto ">
        <div className="max-w-4xl mx-auto">
          {/* HEADER */}

          <div className="mb-10 text-center">
            <h1 className="section-title">
              Update<span className="gradient-text">Pet</span>
            </h1>
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
                  defaultValue={petData?.name}
                  required
                />
              </div>

              {/* SPECIES */}
              <div className="form-field">
                <label className="font-medium text-[var(--text-primary)]">
                  Species <span className="text-red-500">*</span>
                </label>
                <select
                  name="species"
                  defaultValue={petData?.species}
                  className="input-field"
                  required
                >
                  {/* <option value="">Select species</option> */}
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
                  defaultValue={petData?.breed}
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
                  defaultValue={petData?.age}
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
                <select
                  defaultValue={petData?.gender}
                  name="gender"
                  className="input-field"
                  required
                >
                  {/* <option value="">Select gender</option> */}
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
                  defaultValue={petData?.image}
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
                  defaultValue={petData?.health}
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
                <select
                  name="vaccinated"
                  defaultValue={petData?.vaccinated}
                  className="input-field"
                  required
                >
                  {/* <option value="">Select vaccination status</option> */}
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
                  defaultValue={petData?.location}
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
                  defaultValue={petData?.adoptionFee}
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
                  defaultValue={petData?.description}
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
                <SubmitButton text="Update Pet" />
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
};

export default UpdatePet;
