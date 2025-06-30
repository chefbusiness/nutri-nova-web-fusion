
import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  const navigation = [
    { name: 'Inicio', href: '/', section: 'inicio' },
    { name: 'Empresa', href: '/', section: 'sobre' },
    { name: 'Productos', href: '/', section: 'marcas' },
    { name: 'Sostenibilidad', href: '/', section: 'sostenibilidad' },
    { name: 'Contacto', href: '/', section: 'contacto' }
  ];

  const handleNavClick = (item: typeof navigation[0]) => {
    if (isHomePage) {
      // Si estamos en la homepage, usar scroll suave a la sección
      const element = document.getElementById(item.section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Si no estamos en homepage, Link se encargará de navegar
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-modern-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img 
                src="/lovable-uploads/d55a074e-3bd5-4880-ad15-bcb83514fe3b.png" 
                alt="Nutinova Foods" 
                className="h-8 lg:h-10 w-auto" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navigation.map((item) => (
              <div key={item.name}>
                {isHomePage ? (
                  <button
                    onClick={() => handleNavClick(item)}
                    className="text-modern-gray-700 hover:text-modern-gray-900 transition-colors duration-200 text-sm lg:text-base font-medium"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    to={`${item.href}#${item.section}`}
                    className="text-modern-gray-700 hover:text-modern-gray-900 transition-colors duration-200 text-sm lg:text-base font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            {isHomePage ? (
              <button
                onClick={() => {
                  const element = document.getElementById('contacto');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-modern-gray-900 hover:bg-modern-gray-800 text-white px-6 py-2 text-sm rounded-lg transition-colors duration-200"
              >
                Contactar
              </button>
            ) : (
              <Link to="/#contacto">
                <Button className="bg-modern-gray-900 hover:bg-modern-gray-800 text-white px-6 py-2 text-sm rounded-lg">
                  Contactar
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-modern-gray-700"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-modern-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {isHomePage ? (
                    <button
                      onClick={() => handleNavClick(item)}
                      className="block w-full text-left px-3 py-2 text-modern-gray-700 hover:text-modern-gray-900 text-base font-medium"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      to={`${item.href}#${item.section}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-3 py-2 text-modern-gray-700 hover:text-modern-gray-900 text-base font-medium"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 pb-2">
                {isHomePage ? (
                  <button
                    onClick={() => {
                      const element = document.getElementById('contacto');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-modern-gray-900 hover:bg-modern-gray-800 text-white px-6 py-2 rounded-lg transition-colors duration-200"
                  >
                    Contactar
                  </button>
                ) : (
                  <Link to="/#contacto" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full bg-modern-gray-900 hover:bg-modern-gray-800 text-white">
                      Contactar
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
