export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8 relative z-10 mt-0">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-[#e60023] mb-4">Alred</div>
            <p className="text-gray-400 mb-4 max-w-md">
              Impulsamos la digitalización de pequeñas empresas y autónomos con soluciones a medida.
            </p>
            <div className="text-sm text-gray-500">© 2025 Alred. Todos los derechos reservados.</div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contacto:</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: alredspd@gmail.com</li>
              <li>Teléfono: +34 683 382 977</li>
              <li>Ubicación: España - Canarias</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces útiles:</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#servicios" className="hover:text-[#e60023] transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#proceso" className="hover:text-[#e60023] transition-colors">
                  Proceso
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#e60023] transition-colors">
                  Preguntas frecuentes
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-[#e60023] transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <p className="text-gray-400 mb-4 max-w-md ">
              ¿Tienes una idea? Escríbenos y te ayudamos a hacerla realidad.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
