"use client";

import { useSession } from "@/lib/auth-client";
import { useEffect, useState } from "react";

const MyListingsPage = () => {
  const [pets, setPets] = useState([]);
  const { data } = useSession();
  const user = data?.user;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/petsBy-userId/${user?.id}`);
        const result = await response.json();
        
        setPets(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } 
    };
    fetchData();
  }, [user?.id]);
//   console.log(pets)
  return (
    <section>
      <div className="container mx-auto">
        {/* HEADER */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-10">
          <div>
            <h1 className="section-title">
              My <span className="gradient-text">Listings</span>
            </h1>
            <p className="section-subtitle mt-2">
              Manage your listed pets, track adoption requests, and update pet
              information easily.
            </p>
          </div>

          <button className="btn-primary">+ Add New Pet</button>
        </div>

        {/* STATS */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div className="glass-card p-6">
            <p className="text-sm text-[var(--text-secondary)]">
              Total Listings
            </p>

            <h2 className="mt-2 text-4xl font-bold text-[var(--text-primary)]">
              {pets.length}
            </h2>
          </div>

          <div className="glass-card p-6">
            <p className="text-sm text-[var(--text-secondary)]">
              Available Pets
            </p>

            <h2 className="mt-2 text-4xl font-bold text-[var(--success)]">8</h2>
          </div>

          <div className="glass-card p-6">
            <p className="text-sm text-[var(--text-secondary)]">Adopted Pets</p>

            <h2 className="mt-2 text-4xl font-bold text-[#ff7a59]">4</h2>
          </div>
        </div>

        {/* PET CARDS */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* CARD */}

          <div className="pet-card">
            {/* IMAGE */}

            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
                alt="pet"
                className="h-72 w-full object-cover transition-all duration-500 hover:scale-110"
              />

              <div className="absolute top-4 right-4 badge-success">
                Available
              </div>
            </div>

            {/* BODY */}

            <div className="pet-card-body">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="pet-card-title">Bella</h2>

                  <p className="mt-1 text-[var(--text-secondary)]">
                    Golden Retriever
                  </p>
                </div>

                <div className="rounded-full bg-[#ff7a59]/10 px-4 py-2 text-sm font-semibold text-[#ff7a59]">
                  $120
                </div>
              </div>

              {/* ACTIONS */}

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button className="rounded-2xl bg-[var(--gradient-secondary)] px-4 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1">
                  Requests
                </button>

                <button className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-soft)] px-4 py-3 font-semibold text-[var(--text-primary)] transition-all duration-300 hover:border-[#ff7a59] hover:text-[#ff7a59]">
                  Edit
                </button>

                <button className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-soft)] px-4 py-3 font-semibold text-[var(--text-primary)] transition-all duration-300 hover:border-[#ff7a59] hover:text-[#ff7a59]">
                  View
                </button>

                <button className="rounded-2xl bg-red-500 px-4 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-600">
                  Delete
                </button>
              </div>
            </div>
          </div>

          {/* CARD */}

          <div className="pet-card">
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1574158622682-e40e69881006"
                alt="pet"
                className="h-72 w-full object-cover transition-all duration-500 hover:scale-110"
              />

              <div className="absolute top-4 right-4 badge-primary">
                Adopted
              </div>
            </div>

            <div className="pet-card-body">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="pet-card-title">Luna</h2>

                  <p className="mt-1 text-[var(--text-secondary)]">
                    Persian Cat
                  </p>
                </div>

                <div className="rounded-full bg-[#ff7a59]/10 px-4 py-2 text-sm font-semibold text-[#ff7a59]">
                  $90
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button className="rounded-2xl bg-[var(--gradient-secondary)] px-4 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1">
                  Requests
                </button>

                <button className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-soft)] px-4 py-3 font-semibold text-[var(--text-primary)] transition-all duration-300 hover:border-[#ff7a59] hover:text-[#ff7a59]">
                  Edit
                </button>

                <button className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-soft)] px-4 py-3 font-semibold text-[var(--text-primary)] transition-all duration-300 hover:border-[#ff7a59] hover:text-[#ff7a59]">
                  View
                </button>

                <button className="rounded-2xl bg-red-500 px-4 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-600">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyListingsPage;
