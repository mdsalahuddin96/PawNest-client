export default function PetCareTips() {
  return (
    <section className="section-padding">
      <div className="container-custom">

        <div className="rounded-[36px] border border-[var(--border-color)] bg-[var(--surface-soft)] p-6 md:p-10 shadow-[var(--shadow-sm)]">

          {/* TOP */}

          <div className="mb-10">

            <p className="text-sm font-semibold uppercase tracking-[3px] text-[#c9a227]">
              Adoption Information
            </p>

            <h2 className="mt-3 max-w-3xl text-4xl font-bold leading-tight text-[var(--text-primary)] md:text-5xl">
              Learn basics before adopting pet
            </h2>

          </div>

          {/* GRID */}

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

            {/* CARD */}

            <div className="rounded-[28px] border border-[#e7d48d] bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-md)]">

              <h3 className="text-lg font-bold text-[var(--text-primary)]">
                Understanding Responsibilities
              </h3>

              <p className="mt-3 leading-relaxed text-[var(--text-secondary)]">
                Adopting a pet means committing to their care for their entire life. Pets require daily attention, regular veterinary visits, and a stable loving home.
              </p>

            </div>

            {/* CARD */}

            <div className="rounded-[28px] border border-[#e7d48d] bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-md)]">

              <h3 className="text-lg font-bold text-[var(--text-primary)]">
                Choosing the Right Pet
              </h3>

              <p className="mt-3 leading-relaxed text-[var(--text-secondary)]">
                Find a pet that matches your lifestyle, activity level, available space, and personality preferences.
              </p>

            </div>

            {/* CARD */}

            <div className="rounded-[28px] border border-[#e7d48d] bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-md)]">

              <h3 className="text-lg font-bold text-[var(--text-primary)]">
                Preparing Your Home
              </h3>

              <p className="mt-3 leading-relaxed text-[var(--text-secondary)]">
                Make your home safe and welcoming. Prepare food bowls, beds, toys, grooming supplies, and a comfortable resting area.
              </p>

            </div>

            {/* CARD */}

            <div className="rounded-[28px] border border-[#e7d48d] bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-md)]">

              <h3 className="text-lg font-bold text-[var(--text-primary)]">
                Training and Socialization
              </h3>

              <p className="mt-3 leading-relaxed text-[var(--text-secondary)]">
                Training helps pets adapt to home life. Basic commands and social interaction improve confidence and behavior.
              </p>

            </div>

            {/* CARD */}

            <div className="rounded-[28px] border border-[#e7d48d] bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-md)]">

              <h3 className="text-lg font-bold text-[var(--text-primary)]">
                Health and Nutrition
              </h3>

              <p className="mt-3 leading-relaxed text-[var(--text-secondary)]">
                Regular vet checkups and balanced nutrition are essential for keeping pets healthy, active, and happy.
              </p>

            </div>

            {/* CARD */}

            <div className="rounded-[28px] border border-[#e7d48d] bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-md)]">

              <h3 className="text-lg font-bold text-[var(--text-primary)]">
                Daily Care
              </h3>

              <p className="mt-3 leading-relaxed text-[var(--text-secondary)]">
                Understand the exercise, grooming, feeding, and emotional needs of your pet to provide proper care every day.
              </p>

            </div>

            {/* CARD */}

            <div className="rounded-[28px] border border-[#e7d48d] bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-md)]">

              <h3 className="text-lg font-bold text-[var(--text-primary)]">
                Building a Bond
              </h3>

              <p className="mt-3 leading-relaxed text-[var(--text-secondary)]">
                Spend quality time with your pet to build trust, strengthen emotional connection, and understand their behavior.
              </p>

            </div>

            {/* CARD */}

            <div className="rounded-[28px] border border-[#e7d48d] bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-md)]">

              <h3 className="text-lg font-bold text-[var(--text-primary)]">
                Adoption Process
              </h3>

              <p className="mt-3 leading-relaxed text-[var(--text-secondary)]">
                Learn about adoption requirements, approval steps, and post-adoption support before bringing a pet home.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}