export default function MeetOurRescueHero() {
  return (
    <section className="section-padding">
      <div className="container-custom">

        {/* HEADER */}

        <div className="mb-12 text-center">

          <h2 className="section-title">
            Meet Our <span className="gradient-text">Rescue Heroes</span>
          </h2>

          <p className="section-subtitle mx-auto mt-4 max-w-2xl">
            Amazing people working every day to rescue, protect, and care for homeless pets.
          </p>

        </div>

        {/* HEROES */}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* CARD */}

          <div className="glass-card group overflow-hidden">

            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop"
                alt="hero"
                className="h-80 w-full object-cover transition-all duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-6">

              <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                Emma Watson
              </h3>

              <p className="mt-1 text-[#ff7a59]">
                Senior Rescue Volunteer
              </p>

              <p className="mt-4 leading-relaxed text-[var(--text-secondary)]">
                Helped rescue and rehome more than 200 abandoned pets across the city.
              </p>

            </div>

          </div>

          {/* CARD */}

          <div className="glass-card group overflow-hidden">

            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop"
                alt="hero"
                className="h-80 w-full object-cover transition-all duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-6">

              <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                James Carter
              </h3>

              <p className="mt-1 text-[#4ecdc4]">
                Animal Care Specialist
              </p>

              <p className="mt-4 leading-relaxed text-[var(--text-secondary)]">
                Provides medical care and emotional support for rescued animals.
              </p>

            </div>

          </div>

          {/* CARD */}

          <div className="glass-card group overflow-hidden">

            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop"
                alt="hero"
                className="h-80 w-full object-cover transition-all duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-6">

              <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                Sophia Lee
              </h3>

              <p className="mt-1 text-[#ffd166]">
                Pet Foster Coordinator
              </p>

              <p className="mt-4 leading-relaxed text-[var(--text-secondary)]">
                Connects foster families with pets needing temporary loving homes.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}