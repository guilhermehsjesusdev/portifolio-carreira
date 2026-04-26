import { redirectBlog } from "../utils/projectRedirect";

export default function Projects() {
  const projects = [
    {
      title: "Miniblog",
      desc: "Blog para troca de informações e ideias",
      action: redirectBlog,
    },
    {
      title: "Task Manager",
      desc: "Sistema completo de tarefas com dashboard",
      action: () => window.open("https://seu-taskmanager.com", "_blank"),
    },
    {
      title: "E-commerce API",
      desc: "Backend com pagamentos e microsserviços",
      action: () => window.open("https://github.com/seuusuario/ecommerce", "_blank"),
    },
  ];

  return (
    <section id="projetos" className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-center">
        Projetos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            onClick={p.action}
            className="cursor-pointer bg-[#111827] p-5 md:p-6 rounded-xl border border-gray-800 hover:scale-105 hover:-translate-y-1 transition"
          >
            <h3 className="text-lg md:text-xl font-bold text-blue-400 mb-2">
              {p.title}
            </h3>

            <p className="text-gray-400 text-sm md:text-base">
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}