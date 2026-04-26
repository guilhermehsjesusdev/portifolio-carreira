export default function Tech() {
  const techs = [
    "Java",
    "Spring Boot",
    "Docker",
    "Linux",
    "PostgreSQL",
    "MongoDB",
  ];

  return (
    <section id="sobre" className="px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-[#0d1322]">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-center">
        Tecnologias
      </h2>

      <div className="flex flex-wrap justify-center gap-3 md:gap-6">
        {techs.map((tech, i) => (
          <span
            key={i}
            className="px-4 md:px-6 py-2 md:py-3 text-sm md:text-base bg-[#111827] border border-gray-800 rounded-lg hover:bg-blue-600 hover:scale-105 transition"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}