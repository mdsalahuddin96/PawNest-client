"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { LuHeartHandshake } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";
import { FaRegCircleXmark } from "react-icons/fa6";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const RequestModal = ({ isOpen, onClose, request }) => {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const handleRequestStatus = async (status) => {
    try {
      const {data:tokenData}=await authClient.token()
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/request/status/${request._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            authorization:`Bearer ${tokenData?.token}`
          },
          body: JSON.stringify({
            requested_status: status,
          }),
        },
      );
      const result = await response.json();
      if (result.modifiedCount > 0) {
        toast.success(`Request ${status} successfully`);
        onClose();
      }
    } catch (error) {
      console.error(error);
    }
    if (status === "Approved") {
      const {data:tokenData}=await authClient.token()
      const upDatePetRes = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/upDatePet/status/${request.pet_id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            authorization:`Bearer ${tokenData?.token}`
          },
          body: JSON.stringify({
            status: "Adopted",
          }),
        },
      );
      const result = await upDatePetRes.json();
      if (result.modifiedCount > 0) {
        router.refresh();
      }
    }
  };
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      {/* Backdrop click to close */}

      <div className="absolute inset-0" onClick={onClose} />
      {/* Modal Box */}
      {request ? (
        <div className="relative w-full max-w-md scale-100 transform overflow-hidden rounded-3xl border border-white/10 bg-white p-6 shadow-2xl dark:bg-[#111827] text-[#2d3748] dark:text-white transition-all">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[var(--border-color)]">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <LuHeartHandshake className="text-[#ff7a59]" /> Adoption Requests
            </h3>
            <button
              onClick={onClose}
              className="rounded-full p-1.5 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700 dark:hover:text-white transition-colors"
            >
              <IoMdClose size={22} />
            </button>
          </div>

          {/* Content Area */}
          <div className="mt-4 space-y-4 max-h-[60vh] overflow-y-auto pr-1">
            <p className="text-sm text-[var(--text-secondary)]">
              Here are the recent adoption requests for:{" "}
              <span className="font-semibold text-[#ff7a59]">
                {request.name}
              </span>
            </p>

            <div className="space-y-3">
              <div className="p-3 rounded-2xl border border-[var(--border-color)] bg-[var(--surface-soft)] text-sm">
                <div className="flex justify-between font-semibold">
                  <span>{request.requester_name}</span>
                  <span className="text-yellow-500">
                    {request.requested_status}
                  </span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] mt-1">
                  Email: {request.requester_email}
                </p>
                <p className="text-xs text-[var(--text-secondary)] mt-1">
                  Pickup Date: {request.pickup_date}
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 flex justify-end">
            {request.requested_status === "Pending" ? (
              <div className="flex items-center justify-between">
                <button
                  onClick={() => handleRequestStatus("Approved")}
                  className="flex items-center  gap-1.5 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-400 px-2 py-1 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  <CiCircleCheck /> Approve
                </button>
                <button
                  onClick={() => handleRequestStatus("Rejected")}
                  className="flex items-center gap-1.5 rounded-2xl border border-red-400/30 bg-red-500/10 px-2 py-1 font-semibold text-red-500 backdrop-blur-xl transition-all duration-300  hover:bg-red-500 hover:text-white"
                >
                  <FaRegCircleXmark /> Reject
                </button>
              </div>
            ) : (
              <button
                onClick={onClose}
                className="rounded-full bg-gray-100 dark:bg-gray-800 px-5 py-2.5 text-sm font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                Close
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="relative w-full max-w-md scale-100 transform overflow-hidden rounded-3xl border border-white/10 bg-white p-6 shadow-2xl dark:bg-[#111827] text-[#2d3748] dark:text-white transition-all">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[var(--border-color)]">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <LuHeartHandshake className="text-[#ff7a59]" /> Adoption Requests
            </h3>
            <button
              onClick={onClose}
              className="rounded-full p-1.5 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700 dark:hover:text-white transition-colors"
            >
              <IoMdClose size={22} />
            </button>
          </div>

          {/* Content Area */}
          <div className="mt-4 space-y-4 max-h-[60vh] overflow-y-auto pr-1">
            <p className="text-sm text-[var(--text-secondary)]">
              No one has requested to adopt this pet yet.{" "}
              <span className="font-semibold text-[#ff7a59]">🐾</span>
            </p>
          </div>

          {/* Footer */}
          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="rounded-full bg-gray-100 dark:bg-gray-800 px-5 py-2.5 text-sm font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>,
    document.body,
  );
};

export default RequestModal;
