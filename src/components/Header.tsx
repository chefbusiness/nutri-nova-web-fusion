
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre Nutinova', href: '#sobre' },
    { name: 'Nuestras Marcas', href: '#marcas' },
    { name: 'Sostenibilidad', href: '#sostenibilidad' },
    { name: 'Innovación', href: '#innovacion' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-nutinova-beige z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              className="h-10 w-auto" 
              src="/lovable-uploads/399fc273-cf88-4e19-a9d4-e7622dac8d07.png" 
              alt="Nutinova Foods"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-nutinova-asparagus hover:text-nutinova-moonstone transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Search and Language */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-nutinova-asparagus">
              <Search className="h-5 w-5" />
            </Button>
            <div className="text-sm text-nutinova-asparagus">
              <span className="font-medium">ES</span> | <span className="text-gray-400">EN</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-nutinova-asparagus"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-nutinova-beige">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-nutinova-asparagus hover:text-nutinova-moonstone hover:bg-nutinova-beige/50 rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2 text-sm text-nutinova-asparagus border-t border-nutinova-beige mt-2">
                <span className="font-medium">ES</span> | <span className="text-gray-400">EN</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
