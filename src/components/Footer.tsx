
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
    <footer className="bg-gradient-to-br from-nutinova-asparagus to-nutinova-moonstone text-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <img 
              src="/lovable-uploads/76b5f10b-ae4d-4fe4-a9f1-1bda97f5a009.png" 
              alt="Nutinova Foods" 
              className="h-16 mb-6 drop-shadow-lg"
            />
            <p className="text-green-100 mb-6 leading-relaxed font-light text-lg">
              Innovando para un futuro alimentario saludable y sostenible. 
              Productos veganos, sin gluten y sin azúcar desde México para el mundo.
            </p>
            <div className="text-sm text-green-200 space-y-2">
              <p className="font-medium">Guadalajara, Jalisco, México</p>
              <p className="font-medium">contacto@nutinovafoods.com</p>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-nutinova-beige font-nilland">Empresa</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-green-100 hover:text-nutinova-beige transition-all duration-300 hover:translate-x-1 block font-light"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Values Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-nutinova-beige font-nilland">Nuestros Valores</h4>
            <ul className="space-y-3">
              {links.values.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-green-100 hover:text-nutinova-beige transition-all duration-300 hover:translate-x-1 block font-light"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-nutinova-beige font-nilland">Mantente Informado</h4>
            <p className="text-green-100 mb-6 text-sm font-light leading-relaxed">
              Recibe noticias sobre nuestros productos y iniciativas de sostenibilidad.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Tu email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-l-xl text-white placeholder-green-200 focus:outline-none focus:border-nutinova-beige backdrop-blur-sm font-poppins"
              />
              <button className="px-6 py-3 bg-nutinova-moonstone hover:bg-nutinova-moonstone/90 rounded-r-xl transition-all duration-300 hover:scale-105 font-medium">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Social Media and Legal */}
        <div className="border-t border-white/20 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Media */}
            <div className="flex space-x-8 mb-6 md:mb-0">
              <a href="#" className="text-green-100 hover:text-nutinova-beige transition-all duration-300 hover:scale-110 font-medium">
                LinkedIn
              </a>
              <a href="#" className="text-green-100 hover:text-nutinova-beige transition-all duration-300 hover:scale-110 font-medium">
                Instagram
              </a>
              <a href="#" className="text-green-100 hover:text-nutinova-beige transition-all duration-300 hover:scale-110 font-medium">
                Facebook
              </a>
              <a href="#" className="text-green-100 hover:text-nutinova-beige transition-all duration-300 hover:scale-110 font-medium">
                Twitter
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center space-x-6 text-sm text-green-200">
              {links.legal.map((link, index) => (
                <span key={link.name}>
                  <a 
                    href={link.href} 
                    className="hover:text-nutinova-beige transition-colors duration-300 font-light"
                  >
                    {link.name}
                  </a>
                  {index < links.legal.length - 1 && <span className="ml-6">|</span>}
                </span>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 text-center text-sm text-green-200 space-y-2">
            <p className="font-light">© {currentYear} Nutinova Foods. Todos los derechos reservados.</p>
            <p className="font-playwrite text-nutinova-beige">Hecho con 💚 en Guadalajara, México</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
