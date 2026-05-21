"use client";
import { SubmitButton } from "@/components/SubmitBtn";
import { useState } from "react";
import { toast } from "react-toastify";
const AdoptPetForm = ({ user, pet }) => {
  const [pickupDate, setPickupDate] = useState(null);
  const [dateError, setDateError] = useState(false);
  const {owner_email, owner_id, _id,status}=pet
  console.log(status)
  const onSubmit = async (formData) => {
    const requestData = Object.fromEntries(formData.entries());
    requestData.owner_email = owner_email;
    requestData.owner_id = owner_id;
    requestData.pet_id = _id;
    requestData.requested_date = new Date();
    if (pickupDate !== null) {
        if(owner_email===user?.email){
            toast.error("You are the owner of this pet!")
            return null
        }
        if(status==="Adopted"){
          toast.error("This pet already adopted!")
          return null;
        }
      const res = await fetch("http://localhost:8000/adoptRequest", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(requestData),
      });
      const data = await res.json();
      if (data.success) {
        toast.success(`Adopt request submit successfully!`);
      } else {
        toast.error(data.message);
      }
      setDateError(false);
    } else {
      setDateError(true)
    }
  };
  return (
    <div className="glass-card p-8">
      {/* HEADER */}
      <div className="mb-6">
        <div className="badge-primary px-4 py-2">🐾 Adoption Request</div>
        <h2 className="mt-4 text-3xl font-bold heading-font">
          Adopt {pet?.name}
        </h2>
        <p className="section-subtitle mt-2">
          Fill out the form to begin the adoption process.
        </p>
      </div>

      {/* FORM */}
      <form action={onSubmit} className="space-y-5">
        {/* PET NAME */}
        <div className="form-field">
          <label className="text-sm font-medium">Pet Name</label>
          <input
            name="name"
            type="text"
            value={pet?.name}
            readOnly
            className="input-field opacity-80 cursor-not-allowed"
          />
        </div>

        {/* USER NAME */}
        <div className="form-field">
          <label className="text-sm font-medium">User Name</label>

          <input
            name="requester_name"
            type="text"
            value={user?.name}
            readOnly
            className="input-field opacity-80 cursor-not-allowed"
          />
        </div>

        {/* USER EMAIL */}
        <div className="form-field">
          <label className="text-sm font-medium">User Email</label>

          <input
            name="requester_email"
            type="email"
            value={user?.email}
            readOnly
            className="input-field opacity-80 cursor-not-allowed"
          />
        </div>

        {/* PICKUP DATE */}
        <div className="form-field">
          <label className="text-sm font-medium">Pickup Date</label>
          <input
            name="pickup_date"
            type="date"
            onChange={(e) => setPickupDate(e.target.value)}
            className="input-field"
          />
          {dateError && (
            <p className="text-red-500 text-sm">Pickup Date Required!</p>
          )}
        </div>

        {/* MESSAGE */}
        <div className="form-field">
          <label className="text-sm font-medium">Message</label>

          <textarea
            name="message"
            rows={5}
            placeholder="Why do you want to adopt this pet?"
            className="input-field resize-none py-4"
          />
        </div>

        {/* STATUS */}
        <input name="requested_status" type="hidden" value="Pending" />

        {/* BUTTON */}
        <SubmitButton text="Adopt Now" />
      </form>
    </div>
  );
};

export default AdoptPetForm;
