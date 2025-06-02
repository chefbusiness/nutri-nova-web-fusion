
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    company: [
      { name: 'Sobre Nutinova', href: '#sobre' },
      { name: 'Nuestras Marcas', href: '#marcas' },
      { name: 'Carreras', href: '#' },
      { name: 'Sala de Prensa', href: '#' }
    ],
    values: [
      { name: 'Sostenibilidad', href: '#sostenibilidad' },
      { name: 'Innovación', href: '#innovacion' },
      { name: 'Calidad', href: '#' },
      { name: 'Responsabilidad Social', href: '#' }
    ],
    legal: [
      { name: 'Política de Privacidad', href: '#' },
      { name: 'Términos y Condiciones', href: '#' },
      { name: 'Política de Cookies', href: '#' },
      { name: 'Aviso Legal', href: '#' }
    ]
  };

  return (
    <footer className="bg-nutinova-asparagus text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <img 
              src="/lovable-uploads/399fc273-cf88-4e19-a9d4-e7622dac8d07.png" 
              alt="Nutinova Foods" 
              className="h-12 mb-4 brightness-0 invert"
            />
            <p className="text-green-100 mb-4 leading-relaxed">
              Innovando para un futuro alimentario saludable y sostenible. 
              Productos veganos, sin gluten y sin azúcar desde México para el mundo.
            </p>
            <div className="text-sm text-green-200">
              <p>Guadalajara, Jalisco, México</p>
              <p>contacto@nutinovafoods.com</p>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-nutinova-beige">Empresa</h4>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-green-100 hover:text-nutinova-beige transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Values Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-nutinova-beige">Nuestros Valores</h4>
            <ul className="space-y-2">
              {links.values.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-green-100 hover:text-nutinova-beige transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-nutinova-beige">Mantente Informado</h4>
            <p className="text-green-100 mb-4 text-sm">
              Recibe noticias sobre nuestros productos y iniciativas de sostenibilidad.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Tu email"
                className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-l-md text-white placeholder-green-200 focus:outline-none focus:border-nutinova-beige"
              />
              <button className="px-4 py-2 bg-nutinova-moonstone hover:bg-nutinova-moonstone/90 rounded-r-md transition-colors duration-200">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Social Media and Legal */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Media */}
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-green-100 hover:text-nutinova-beige transition-colors duration-200">
                LinkedIn
              </a>
              <a href="#" className="text-green-100 hover:text-nutinova-beige transition-colors duration-200">
                Instagram
              </a>
              <a href="#" className="text-green-100 hover:text-nutinova-beige transition-colors duration-200">
                Facebook
              </a>
              <a href="#" className="text-green-100 hover:text-nutinova-beige transition-colors duration-200">
                Twitter
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center space-x-4 text-sm text-green-200">
              {links.legal.map((link, index) => (
                <span key={link.name}>
                  <a 
                    href={link.href} 
                    className="hover:text-nutinova-beige transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                  {index < links.legal.length - 1 && <span className="ml-4">|</span>}
                </span>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-6 text-center text-sm text-green-200">
            <p>© {currentYear} Nutinova Foods. Todos los derechos reservados.</p>
            <p className="mt-1">Hecho con 💚 en Guadalajara, México</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
