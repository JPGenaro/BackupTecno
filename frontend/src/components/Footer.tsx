import Link from "next/link";

const InstagramIcon = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Inicio", href: "/" },
    { label: "Sobre Nosotros", href: "/nosotros" },
    { label: "Servicios", href: "#servicios" },
    { label: "Contacto", href: "#contacto" },
  ];


  const contactInfo = [
    { icon: "📧", label: "Email", value: "backup.tecno9@gmail.com" },
    { icon: "📱", label: "Teléfono", value: "+54 9 351 2644334" },
    { icon: "📍", label: "Ubicación", value: "Córdoba, Argentina" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-16 pb-8">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4">
              Backup Tecno
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Soluciones web innovadoras y desarrollo de excelencia para transformar tu negocio digital.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Contacto Rápido</h4>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-lg mt-0.5">{item.icon}</span>
                    <div>
                      <p className="text-gray-500 text-xs">{item.label}</p>
                      <p className="text-gray-400">{item.value}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Networks */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Redes Sociales</h4>
            <div className="flex flex-wrap gap-3">
              <Link
                href="https://www.instagram.com/backuptecno/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 rounded-lg transition-all duration-300 transform hover:scale-110"
              >
                <InstagramIcon />
              </Link>
            </div>
            <p className="text-gray-500 text-xs mt-4">
              Síguenos en Instagram para estar al tanto de nuestras novedades.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            <p>
              © {currentYear} <span className="text-blue-400 font-semibold">Backup Tecno</span>. Todos los derechos reservados.
            </p>
          </div>

          <div className="flex gap-6 text-sm">
            <Link
              href="#"
              className="text-gray-500 hover:text-blue-400 transition-colors duration-300"
            >
              Política de Privacidad
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-blue-400 transition-colors duration-300"
            >
              Términos de Servicio
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-blue-400 transition-colors duration-300"
            >
              Cookies
            </Link>
          </div>
        </div>

        {/* Design Credit */}
        <div className="text-center mt-6 pt-6 border-t border-gray-800">
          <p className="text-gray-600 text-xs">
            Diseñado y desarrollado con ❤️ por <span className="text-blue-400">Backup Tecno</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
