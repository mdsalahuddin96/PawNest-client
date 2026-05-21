"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoEyeSharp } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { toast } from "react-toastify";

const MyRequestCard = ({ request }) => {
  const router=useRouter()
  const handleCancel = async () => {
    const res = await fetch(`http://localhost:8000/deleteReq/${request._id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    const result = await res.json();
    if (result.deletedCount > 0) {
      toast.error("Request Canceled!");
      router.refresh();
    }
  };
  return (
    <div className="pet-card p-6">
      {/* TOP */}

      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <h2 className="pet-card-title">{request.name}</h2>

          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            Request Date:
            <span className="ml-2 font-medium text-[var(--text-primary)]">
              {new Date(request.requested_date).toLocaleDateString("en-BD", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
          </p>

          <p className="mt-1 text-sm text-[var(--text-secondary)]">
            Pickup Date:
            <span className="ml-2 font-medium text-[var(--text-primary)]">
              {new Date(request.pickup_date).toLocaleDateString("en-BD", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
          </p>
        </div>

        <div
          className={`${request.requested_status === "Approved" ? "badge-success" : "badge-primary w-fit"}`}
        >
          {request.requested_status}
        </div>
      </div>

      {/* ACTIONS */}

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Link href={`/petDetails/${request.pet_id}`}>
          <button className=" flex items-center gap-1.5 rounded-2xl border border-[var(--border-color)] bg-[var(--surface-soft)] px-5 py-3 font-semibold text-[var(--text-primary)] transition-all duration-300 hover:border-[#ff7a59] hover:text-[#ff7a59]">
            <IoEyeSharp /> View Details
          </button>
        </Link>

        {request.requested_status !== "Approved" && (
          <button
            onClick={handleCancel}
            className=" flex items-center gap-1.5 rounded-2xl bg-red-500 px-5 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-600"
          >
            <MdCancel /> Cancel Request
          </button>
        )}
      </div>
    </div>
  );
};

export default MyRequestCard;
