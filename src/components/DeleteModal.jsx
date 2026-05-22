"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";
import { MdOutlineDeleteForever } from "react-icons/md";

const DeleteModal = ({ isDelOpen, onClose, petName, onConfirm }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!isDelOpen || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      {/* BACKDROP */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* MODAL */}
      <div className="relative w-full max-w-md rounded-3xl border border-[var(--border-color)] bg-[var(--surface)] shadow-2xl text-[var(--text-primary)]">
        {/* HEADER */}
        <div className="flex items-center justify-between p-5 border-b border-[var(--border-color)]">
          <h3 className="text-xl font-bold flex items-center gap-2 text-red-500">
            <MdOutlineDeleteForever /> Confirm Delete
          </h3>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[var(--surface-soft)] transition"
          >
            <IoMdClose size={20} />
          </button>
        </div>

        {/* BODY */}
        <div className="p-6 text-center space-y-3">
          <div className="text-5xl">⚠️</div>

          <h4 className="text-2xl font-bold">Delete This Pet?</h4>

          <p className="text-[var(--text-secondary)]">
            Are you sure you want to delete{" "}
            <span className="font-semibold text-[#ff7a59]">{petName}</span>?
            This action cannot be undone.
          </p>
        </div>

        {/* FOOTER */}
        <div className="flex gap-3 p-5 pt-0">
          <button
            onClick={onClose}
            className="flex-1 rounded-2xl border border-[var(--border-color)] bg-[var(--surface-soft)] px-4 py-3 font-semibold hover:scale-[1.02] transition"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="flex-1 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 px-4 py-3 font-semibold text-white shadow-lg hover:-translate-y-1 transition"
          >
            Confirm Delete
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default DeleteModal;
