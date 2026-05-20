import Image from "next/image";

export default function SuccessStories() {
  const stories = [
    {
      name: "Bella & Sarah",
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1",
      story:
        "Bella was rescued from the streets and now lives happily with Sarah’s family. She brings joy every single day.",
    },
    {
      name: "Max & John",
      image: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
      story:
        "Max found his forever home after months in shelter. Now he enjoys morning walks and endless love.",
    },
    {
      name: "Luna & Emma",
      image: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4",
      story:
        "Luna was adopted as a kitten and grew up surrounded by care and affection in Emma’s home.",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-[var(--background)]">

      {/* HEADER */}
      <div className="container-custom text-center space-y-4 mb-12">

        <h2 className="section-title">
          Success <span className="gradient-text">Stories</span>
        </h2>

        <p className="section-subtitle max-w-2xl mx-auto">
          Every adoption tells a beautiful story of love, care, and second chances.
        </p>

      </div>

      {/* GRID */}
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {stories.map((item, index) => (
          <div
            key={index}
            className="glass-card overflow-hidden rounded-[28px] hover:scale-[1.03] transition-all duration-300"
          >

            {/* IMAGE */}
            <div className="relative">
              <Image
                src={item.image}
                alt={item.name}
                height={400}
                width={400}
                className="h-64 w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold heading-font">
                {item.name}
              </h3>
            </div>

            {/* CONTENT */}
            <div className="p-6 space-y-3">

              <p className="text-[var(--text-secondary)] leading-relaxed">
                “{item.story}”
              </p>

              <div className="flex items-center gap-2 text-sm text-[var(--primary)] font-semibold">
                🐾 Happy Adoption
              </div>

            </div>

          </div>
        ))}

      </div>

      {/* CTA */}
      <div className="mt-12 text-center">

        <button className="btn-primary px-10 py-4">
          Share Your Story
        </button>

      </div>

    </section>
  );
}