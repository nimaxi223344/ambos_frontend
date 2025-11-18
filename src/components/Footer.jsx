import { Instagram, MessageCircle } from "lucide-react";

export default function Footer({ fixed = false }) {
  const year = new Date().getFullYear();

  return (
    <footer
      className={`${fixed ? "fixed bottom-0 left-0" : "relative"} w-full bg-gray-900 text-[#F0F6F6] border-t border-white/10`}>
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row gap-6 md:items-center md:justify-between text-sm">
        <div className="flex flex-col gap-1">
          <p className="text-xl font-semibold tracking-tight">
            Ambos Norte
          </p>
          <p className="text-xs md:text-sm opacity-70">
            Comprá online y recibí tu pedido en tu domicilio.
          </p>
        </div>
          <a
            href="https://www.instagram.com/ambosoh_nordeste"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition"
          >
            <Instagram size={16} className="text-[#F0F6F6]" />
            <span className="text-xs md:text-sm">Instagram</span>
          </a>
        <div className="text-xs md:text-sm opacity-60 md:text-right">
          Ambos Norte © {year}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}