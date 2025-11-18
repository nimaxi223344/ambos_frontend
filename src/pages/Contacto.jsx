export default function Contacto() {
  return (
    <section className="bg-[#F0F6F6] md:h-screen h-full px-6 md:px-20 py-12 flex items-center">
      <div className="max-w-6xl mx-auto w-full space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center">
          <div className="space-y-6 mt-12 md:mt-24">
            <header className="space-y-3 text-center md:text-left">
              <h1 className="text-4xl font-bold text-[#084B83] tracking-wider">
                CONTACTO
              </h1>
              <p className="text-sm md:text-base text-gray-700 max-w-2xl">
                Podés encontrarnos en Resistencia y Corrientes.
              </p>
            </header>

            <div className="bg-[#084B83] rounded-2xl p-6 text-white shadow-sm">
              <h2 className="text-lg font-semibold mb-3">
                REDES SOCIALES
              </h2>
              <p className="text-sm text-white/90 mb-4">
                Escribinos por Instagram o unite al canal de WhatsApp
                para recibir novedades, lanzamientos y promos.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://www.instagram.com/ambosoh_nordeste"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-white text-[#2F4858] text-sm font-medium px-4 py-2 hover:bg-gray-100 transition"
                >
                  <span>Instagram</span>
                </a>
                <a
                  href="https://chat.whatsapp.com/FCX2Pm5lgkO6MBVmItgUws?mode=r_t&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnJuazfsu1_StKHl23FjlY1eIHIJBBHHJvHuiHI8TwZajxX1e3W2JGEfdTw4k_aem_RsL_r_BpySMT87dhlp9GWw"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-white/60 text-sm font-medium px-4 py-2 hover:bg-white/10 transition"
                >
                  <span>Canal de WhatsApp</span>
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h2 className="text-lg font-semibold text-[#2F4858] mb-2">
                HORARIOS DE ATENCIÓN
              </h2>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Lunes a viernes de 9:00 a 13:00 y de 17:00 a 21:00.</li>
                <li>Sábados de 9:00 a 13:00 y de 16:00 a 20:00.</li>
              </ul>
            </div>
          </div>
          <div className="space-y-6 mt-10">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200">
              <p className="text-sm font-medium text-[#2F4858] mb-3">
                Local en Resistencia
              </p>
              <div className="aspect-video w-full rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.308296776072!2d-58.98067892366998!3d-27.459659816280197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94450ce5f51b293f%3A0x5154dca77463023b!2sLos%20Hacheros%2055%2C%20H3504EYA%20Resistencia%2C%20Chaco!5e0!3m2!1ses-419!2sar!4v1763292351129!5m2!1ses-419!2sar"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full border-0"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200">
              <p className="text-sm font-medium text-[#2F4858] mb-3">
                Local Corrientes
              </p>
              <div className="aspect-video w-full rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.72452806348!2d-58.83381682366941!3d-27.477834217054486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94456c9dda510f07%3A0x3eb877a2f4595a90!2sLavalle%201612%2C%20W3410BDG%20Corrientes!5e0!3m2!1ses-419!2sar!4v1763292431703!5m2!1ses-419!2sar"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full border-0"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}