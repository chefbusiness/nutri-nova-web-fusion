
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navigation = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Empresa', href: '#sobre' },
    { name: 'Productos', href: '#marcas' },
    { name: 'Sostenibilidad', href: '#sostenibilidad' },
    { name: 'Contacto', href: '#contacto' }
  ];

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-modern-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/d55a074e-3bd5-4880-ad15-bcb83514fe3b.png" 
              alt="Nutinova Foods" 
              className="h-8 lg:h-10 w-auto" 
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-modern-gray-700 hover:text-modern-gray-900 transition-colors duration-200 text-sm lg:text-base font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-modern-gray-900 hover:bg-modern-gray-800 text-white px-6 py-2 text-sm rounded-lg">
              Contactar
            </Button>
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
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-modern-gray-700 hover:text-modern-gray-900 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 pb-2">
                <Button
                  className="w-full bg-modern-gray-900 hover:bg-modern-gray-800 text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contactar
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
