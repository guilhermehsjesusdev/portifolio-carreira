import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre", href: "#sobre" },
    { name: "Projetos", href: "#projetos" },
    { name: "Contato", href: "#contato" },
  ];

  return (
<nav className="sticky top-0 z-50 flex justify-between items-center px-6 md:px-12 lg:px-20 py-6 border-b border-gray-800 bg-[#0b0f19]/80 backdrop-blur">
      {/* LOGO */}
      <h1 className="text-lg md:text-xl font-bold text-blue-500">
        {"</> Guilherme"}
      </h1>

      {/* Desktop */}
      <ul className="hidden md:flex gap-8 text-gray-300">
        {links.map((link, i) => (
          <li key={i}>
            <a
              href={link.href}
              className="hover:text-white transition"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile botão */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-2xl"
      >
        ☰
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-20 right-6 bg-[#111827] p-6 rounded-xl border border-gray-800 md:hidden shadow-lg">
          <ul className="flex flex-col gap-4 text-gray-300">
            {links.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-white transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}