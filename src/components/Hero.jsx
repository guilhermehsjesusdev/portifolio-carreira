import { motion } from "framer-motion";
import Perfil from '../assets/perfil.jpg'
import { redirectWhatsApp, redirectGitHub } from "../utils/redirects";




export default function Hero() {

  return (
    <section id="inicio" className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-16 lg:py-24 gap-12">

      {/* TEXTO */}
      <div className="max-w-xl text-center lg:text-left">
        <p className="text-blue-400 mb-4 uppercase tracking-widest text-sm">
          Desenvolvedor FullStack
        </p>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Transformando ideias em{" "}
          <span className="text-blue-500">soluções reais</span>
        </h1>

        <p className="mt-6 text-gray-400">
          Especialista em Java, Spring Boot, JavaScript, Docker e arquitetura.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button onClick={redirectGitHub}
                  className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Ver Projetos
          </button>

          <button
             onClick={redirectWhatsApp} 
             className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800 transition">
            Contato
          </button>
        </div>
      </div>

      {/* IMAGEM */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        className="relative"
      >
        

        <img
          src={Perfil}
          alt="profile"
          className="w-[250px] md:w-[300px] lg:w-[350px] scale-x-[-1] rounded-2xl border border-gray-800"
        />
      </motion.div>
    </section>
  );
}