import Image from "next/image";

export default function PerfectCompanion() {
  return (
    <section className="section-padding">
      <div className="container-custom">

        <div className="relative overflow-hidden rounded-[40px] bg-[var(--gradient-primary)] px-6 py-16 md:px-14">

          {/* BG EFFECT */}

          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

          <div className="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

            {/* LEFT */}

            <div>

              <div className="mb-4 inline-flex rounded-full bg-white/20 px-5 py-2 font-medium text-primary backdrop-blur-xl">
                🐾 Find Your Match
              </div>

              <h2 className="text-4xl font-bold leading-tight text-primary md:text-6xl">
                Every Pet Deserves a Loving Home
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                Explore adorable pets with different personalities and discover the perfect furry friend for your lifestyle.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <button className="rounded-2xl bg-white px-7 py-4 font-semibold text-[#ff7a59] transition-all duration-300 hover:-translate-y-1">
                  Explore Pets
                </button>

                <button className="rounded-2xl border border-white/30 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20">
                  Learn More
                </button>

              </div>

            </div>

            {/* RIGHT */}

            <div className="grid grid-cols-2 gap-5">

              <Image
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop"
                alt="dog"
                height={400}
                width={400}
                className="h-72 w-full rounded-[28px] object-cover shadow-2xl"
              />

              <Image
                src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1200&auto=format&fit=crop"
                alt="cat"
                height={400}
                width={400}
                className="mt-12 h-72 w-full rounded-[28px] object-cover shadow-2xl"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}