"use client";

import { redirectSecurity } from "@/functions/redirectSecurity";

export default function Stats() {
  const items = [
    {
      title: "Desenvolvimento",
      action: () => console.log("Desenvolvimento"),
    },
    {
      title: "Segurança da Informação",
      action: redirectSecurity,
    },
    {
      title: "Banco de Dados",
      action: () => console.log("Banco"),
    },
    {
      title: "Redes e Sistemas",
      action: () => console.log("Infra"),
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-6 md:px-12 lg:px-20 pb-16">
      {items.map((item, i) => (
        <div
          key={i}
          onClick={item.action}
          className="cursor-pointer bg-[#111827] p-5 md:p-6 rounded-xl border border-gray-800 text-center hover:scale-105 transition"
        >
          <h3 className="text-lg md:text-xl font-bold text-blue-400">
            {item.title}
          </h3>
        </div>
      ))}
    </div>
  );
}