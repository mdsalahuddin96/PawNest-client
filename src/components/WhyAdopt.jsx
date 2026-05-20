export default function WhyAdoptPets() {
  return (
    <section className="py-20 px-4 md:px-8 bg-[var(--background)]">
      <div className="container-custom text-center space-y-4 mb-12">
        <h2 className="section-title">
          Why <span className="gradient-text">PawNest?</span>
        </h2>

        <p className="section-subtitle max-w-2xl mx-auto">
          PawNest connects loving families with pets who need a forever home. A
          safe, simple, and caring adoption experience.
        </p>
      </div>

      <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="glass-card p-6 text-center space-y-3 hover:scale-[1.03] transition-all duration-300">
          <div className="text-4xl">🛡️</div>
          <h3 className="text-xl font-bold">Safe Adoption</h3>
          <p className="text-sm text-[var(--text-secondary)]">
            Verified pets and trusted owners ensure secure adoption process.
          </p>
        </div>

        <div className="glass-card p-6 text-center space-y-3 hover:scale-[1.03] transition-all duration-300">
          <div className="text-4xl">💖</div>
          <h3 className="text-xl font-bold">Loving Matches</h3>
          <p className="text-sm text-[var(--text-secondary)]">
            We help you find pets that truly match your lifestyle and heart.
          </p>
        </div>

        <div className="glass-card p-6 text-center space-y-3 hover:scale-[1.03] transition-all duration-300">
          <div className="text-4xl">⚡</div>
          <h3 className="text-xl font-bold">Fast Process</h3>
          <p className="text-sm text-[var(--text-secondary)]">
            Quick and simple adoption request system with instant updates.
          </p>
        </div>

        <div className="glass-card p-6 text-center space-y-3 hover:scale-[1.03] transition-all duration-300">
          <div className="text-4xl">🐾</div>
          <h3 className="text-xl font-bold">Happy Homes</h3>
          <p className="text-sm text-[var(--text-secondary)]">
            Creating joyful homes for pets and families together.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <button className="btn-primary px-10 py-4">Explore Pets</button>
      </div>
    </section>
  );
}
