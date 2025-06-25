export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8 relative z-10 mt-0">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-[#e60023] mb-4">Alred</div>
            <p className="text-gray-400 mb-4 max-w-md">
              Tu aliado en páginas web, dashboards y automatización con IA. Diseñamos experiencias digitales
              profesionales, modernas y estéticas.
            </p>
            <div className="text-sm text-gray-500">© 2025 Alred. Todos los derechos reservados.</div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#servicios" className="hover:text-[#e60023] transition-colors">
                  Desarrollo Web
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#e60023] transition-colors">
                  Dashboards
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#e60023] transition-colors">
                  Automatización IA
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#sobre" className="hover:text-[#e60023] transition-colors">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="#casos" className="hover:text-[#e60023] transition-colors">
                  Casos de éxito
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-[#e60023] transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
