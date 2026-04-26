export default function Contact() {
  return (
    <section id="contato" className="px-20 py-24 text-center">
      <h2 className="text-3xl font-bold mb-6">
        Vamos trabalhar juntos?
      </h2>

      <p className="text-gray-400 mb-8">
        Entre em contato comigo através das redes abaixo
      </p>

      <div className="flex justify-center gap-6">
        <a className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700">
          LinkedIn
        </a>

        <a className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800">
          GitHub
        </a>
      </div>
    </section>
  );
}