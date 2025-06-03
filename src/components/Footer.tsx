const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    company: [
      { name: 'Sobre Nutinova', href: '#sobre' },
      { name: 'Nuestras Marcas', href: '#marcas' },
      { name: 'Sostenibilidad', href: '#sostenibilidad' },
      { name: 'Contacto', href: '#contacto' }
    ],
    legal: [
      { name: 'Política de Privacidad', href: '#' },
      { name: 'Términos y Condiciones', href: '#' },
      { name: 'Política de Cookies', href: '#' }
    ]
  };

  return (
    <footer className="bg-modern-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12 mb-12">
          
          {/* Company Info */}
          <div className="md:col-span-6 lg:col-span-5">
            <img 
              src="/lovable-uploads/a1ccef5f-b702-4ce4-9eda-66d5cd4ddc24.png" 
              alt="Nutinova Foods" 
              className="h-12 mb-6"
            />
            <p className="text-modern-gray-300 mb-6 leading-relaxed text-lg max-w-md">
              Innovando para un futuro alimentario saludable y sostenible desde Guadalajara, México.
            </p>
            <div className="space-y-2 text-modern-gray-400">
              <p>Guadalajara, Jalisco, México</p>
              <p>contacto@nutinovafoods.com</p>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-lg font-semibold mb-4 text-white">Empresa</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-modern-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3 lg:col-span-4">
            <h4 className="text-lg font-semibold mb-4 text-white">Newsletter</h4>
            <p className="text-modern-gray-300 mb-4 text-sm">
              Recibe noticias sobre productos y sostenibilidad.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Tu email"
                className="flex-1 px-4 py-3 bg-modern-gray-800 border border-modern-gray-700 rounded-l-lg text-white placeholder-modern-gray-400 focus:outline-none focus:border-modern-gray-600"
              />
              <button className="px-6 py-3 bg-white text-modern-gray-900 rounded-r-lg hover:bg-modern-gray-100 transition-colors duration-200 font-medium">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-modern-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            {/* Social Media */}
            <div className="flex space-x-6 mb-6 md:mb-0">
              {['LinkedIn', 'Instagram', 'Facebook', 'Twitter'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="text-modern-gray-400 hover:text-white transition-colors duration-200"
                >
                  {social}
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap space-x-6 text-sm text-modern-gray-400">
              {links.legal.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 text-center text-modern-gray-400 text-sm">
            <p>© {currentYear} Nutinova Foods. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
