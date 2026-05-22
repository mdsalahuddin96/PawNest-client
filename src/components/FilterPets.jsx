"use client";

import { usePathname, useRouter } from "next/navigation";

import { useState } from "react";
import { BiSearch } from "react-icons/bi";

const FilterPets = () => {
  const [searchVal, setSearchVal] = useState("");
  const pathName = usePathname();
  const router = useRouter();
  const handleSearch = () => {
    router.push(`${pathName}?search=${searchVal}`)
    router.refresh()
  };
  const handleCategory=(e)=>{
    const species=e.target.value;
    router.push(`${pathName}?species=${species}`)
    router.refresh()
  }
  const handleRange=(e)=>{
    const fee=e.target.value;
    router.push(`${pathName}?fee=${fee}`)
    router.refresh()
  }
  return (
    <section className="my-10">
      <div className="glass-card flex flex-col lg:flex-row gap-4 p-5 md:p-6">
        {/* SEARCH */}
        <div className="flex-1">
          <div className="flex items-center gap-3 h-14 px-5 rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] dark:bg-[var(--surface-soft)] transition-all focus-within:border-[#ff7a59] focus-within:shadow-[0_0_0_4px_rgba(255,122,89,0.15)]">
            <BiSearch size={18} className="text-[#ff7a59]" />

            <input
              type="text"
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              placeholder="Search pets by name..."
              className="w-full bg-transparent outline-none text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />
          </div>
        </div>

        {/* FILTER BY SPECIES */}

        <div className="w-full lg:w-64">
          <select onChange={handleCategory} className="w-full h-14 px-5 rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] dark:bg-[var(--surface-soft)] outline-none text-[var(--text-primary)] transition-all hover:border-[#ff7a59] focus:border-[#ff7a59] focus:shadow-[0_0_0_4px_rgba(255,122,89,0.15)]">
            <option value="">Filter by species</option>
            <option value="dog">Dogs</option>
            <option value="cat">Cats</option>
            <option value="bird">Birds</option>
            <option value="rabbits">Rabbits</option>
          </select>
        </div>

        {/* FILTER BY FEE */}

        <div className="w-full lg:w-64 ">
          <select onChange={handleRange} className="w-full h-14 px-5 rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] dark:bg-[var(--surface-soft)] outline-none text-[var(--text-primary)] transition-all hover:border-[#ff7a59] focus:border-[#ff7a59] focus:shadow-[0_0_0_4px_rgba(255,122,89,0.15)]">
            <option value="">Filter by fee</option>
            <option value="under-50">Under $50</option>
            <option value="50-100">$50 - $100</option>
            <option value="above-100">Above $100</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default FilterPets;
