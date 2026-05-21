export default function PetCareTips() {
  return (
    <section className="section-padding">
      <div className="container-custom">

        {/* HEADER */}

        <div className="mb-12 text-center">

          <h2 className="section-title">
            Pet Care <span className="gradient-text">Tips</span>
          </h2>

          <p className="section-subtitle mx-auto mt-4 max-w-2xl">
            Helpful tips to keep your furry friends healthy, happy, and full of love.
          </p>

        </div>

        {/* CARDS */}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">

          {/* CARD */}

          <div className="glass-card group p-6 transition-all duration-300 hover:-translate-y-2">

            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#ff7a59]/10 text-3xl">
              🍖
            </div>

            <h3 className="text-2xl font-bold text-[var(--text-primary)]">
              Healthy Food
            </h3>

            <p className="mt-4 leading-relaxed text-[var(--text-secondary)]">
              Provide balanced nutrition and fresh water daily for a healthier life.
            </p>

          </div>

          {/* CARD */}

          <div className="glass-card group p-6 transition-all duration-300 hover:-translate-y-2">

            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#4ecdc4]/10 text-3xl">
              🏃
            </div>

            <h3 className="text-2xl font-bold text-[var(--text-primary)]">
              Daily Exercise
            </h3>

            <p className="mt-4 leading-relaxed text-[var(--text-secondary)]">
              Regular walks and playtime help pets stay active and mentally healthy.
            </p>

          </div>

          {/* CARD */}

          <div className="glass-card group p-6 transition-all duration-300 hover:-translate-y-2">

            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#ffd166]/10 text-3xl">
              🩺
            </div>

            <h3 className="text-2xl font-bold text-[var(--text-primary)]">
              Vet Checkups
            </h3>

            <p className="mt-4 leading-relaxed text-[var(--text-secondary)]">
              Schedule regular health checkups and vaccinations for better wellbeing.
            </p>

          </div>

          {/* CARD */}

          <div className="glass-card group p-6 transition-all duration-300 hover:-translate-y-2">

            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-500/10 text-3xl">
              ❤️
            </div>

            <h3 className="text-2xl font-bold text-[var(--text-primary)]">
              Give Love
            </h3>

            <p className="mt-4 leading-relaxed text-[var(--text-secondary)]">
              Spend quality time with your pets to build trust and emotional bonding.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}