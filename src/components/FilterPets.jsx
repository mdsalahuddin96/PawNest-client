import { Input, Label, SearchField } from "@heroui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { GiPawPrint } from "react-icons/gi";
import { LuBadgeDollarSign } from "react-icons/lu";

const FilterPets = () => {
  return (
    <section className="mb-10">
      <div className="glass-card p-5 md:p-6 flex flex-col lg:flex-row gap-4 lg:items-center g:justify-between">
        <div>
          <SearchField name="search">
            <Label>Search by name</Label>
            <SearchField.Group className="flex items-center gap-1.5 w-[280px] bg-[var(--surface)]">
              <SearchField.SearchIcon />
              <SearchField.Input placeholder="Search..." />
              <SearchField.ClearButton />
            </SearchField.Group>
          </SearchField>
        </div>
        {/* <div className="flex-1">
          <Input
            type="text"
            placeholder="Search pets by name..."
            startContent={<BsSearch size={18} className="text-[#ff7a59]" />}
            classNames={{
              inputWrapper: `
            h-14
            rounded-2xl

            bg-[var(--surface)]
            dark:bg-[var(--surface-soft)]

            border
            border-[var(--border-color)]

            shadow-none

            group-data-[focus=true]:border-[#ff7a59]
            group-data-[focus=true]:shadow-[0_0_0_4px_rgba(255,122,89,0.15)]

            transition-all
          `,

              input: `
            text-[var(--text-primary)]
            placeholder:text-[var(--text-secondary)]
          `,
            }}
          />
        </div> */}

        {/* ======================================================
          FILTER BY SPECIES
    ====================================================== */}

        {/* <div className="w-full lg:w-60">
          <Select
            placeholder="Filter by species"
            startContent={<GiPawPrint size={18} className="text-[#ff7a59]" />}
            classNames={{
              trigger: `
            h-14

            rounded-2xl

            bg-[var(--surface)]
            dark:bg-[var(--surface-soft)]

            border
            border-[var(--border-color)]

            shadow-none

            data-[hover=true]:border-[#ff7a59]

            data-[open=true]:border-[#ff7a59]
          `,

              value: `
            text-[var(--text-primary)]
          `,
            }}
          >
            <SelectItem key="all">All Pets</SelectItem>

            <SelectItem key="dog">Dogs</SelectItem>

            <SelectItem key="cat">Cats</SelectItem>

            <SelectItem key="bird">Birds</SelectItem>
          </Select>
        </div> */}

        {/* ======================================================
          FILTER BY FEE
    ====================================================== */}

        {/* <div className="w-full lg:w-60">
          <Select
            placeholder="Filter by fee"
            startContent={
              <LuBadgeDollarSign size={18} className="text-[#ff7a59]" />
            }
            classNames={{
              trigger: `
            h-14

            rounded-2xl

            bg-[var(--surface)]
            dark:bg-[var(--surface-soft)]

            border
            border-[var(--border-color)]

            shadow-none

            data-[hover=true]:border-[#ff7a59]

            data-[open=true]:border-[#ff7a59]
          `,

              value: `
            text-[var(--text-primary)]
          `,
            }}
          >
            <SelectItem key="all">All Fees</SelectItem>

            <SelectItem key="low">Under $50</SelectItem>

            <SelectItem key="medium">$50 - $100</SelectItem>

            <SelectItem key="high">Above $100</SelectItem>
          </Select>
        </div> */}
      </div>
    </section>
  );
};

export default FilterPets;
