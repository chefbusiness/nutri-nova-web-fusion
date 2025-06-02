
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mainNavigation = [
    { name: 'Inicio', href: '#inicio' },
    { 
      name: 'Empresa', 
      href: '#empresa',
      submenu: [
        { name: 'Sobre Nutinova', href: '#sobre' },
        { name: 'Nuestra Historia', href: '#historia' },
        { name: 'Equipo', href: '#equipo' },
        { name: 'Valores', href: '#valores' }
      ]
    },
    { 
      name: 'Productos & Servicios', 
      href: '#productos',
      submenu: [
        { name: 'Nuestras Marcas', href: '#marcas' },
        { name: 'Catálogo', href: '#catalogo' },
        { name: 'Innovación', href: '#innovacion' },
        { name: 'Sostenibilidad', href: '#sostenibilidad' }
      ]
    },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-nutinova-beige z-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24 lg:h-32">
          {/* Logo */}
          <div className="flex-shrink-0 hover:scale-105 transition-transform duration-300">
            <img 
              className="h-16 sm:h-20 lg:h-28 w-auto drop-shadow-lg" 
              src="/lovable-uploads/dac433a0-7e8c-4473-9fb6-6dfab6048f03.png" 
              alt="Nutinova Foods"
            />
          </div>

          {/* Desktop Mega Navigation */}
          <nav className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList className="space-x-4 lg:space-x-8">
                {mainNavigation.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    {item.submenu ? (
                      <>
                        <NavigationMenuTrigger className="text-nutinova-asparagus hover:text-nutinova-moonstone transition-colors duration-300 font-medium bg-transparent hover:bg-nutinova-beige/30 data-[active]:bg-nutinova-beige/50 data-[state=open]:bg-nutinova-beige/50 text-sm lg:text-lg font-poppins">
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="w-72 lg:w-80 p-4 lg:p-6 bg-white/95 backdrop-blur-md border border-nutinova-beige rounded-xl shadow-2xl">
                            <div className="grid gap-3">
                              {item.submenu.map((subItem) => (
                                <a
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block px-3 lg:px-4 py-2 lg:py-3 text-nutinova-asparagus hover:text-nutinova-moonstone hover:bg-nutinova-beige/50 rounded-lg transition-all duration-300 font-medium font-poppins hover:translate-x-1 text-sm lg:text-base"
                                >
                                  {subItem.name}
                                </a>
                              ))}
                            </div>
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <a
                        href={item.href}
                        className="px-2 lg:px-4 py-2 text-nutinova-asparagus hover:text-nutinova-moonstone transition-colors duration-300 font-medium text-sm lg:text-lg font-poppins hover:scale-105"
                      >
                        {item.name}
                      </a>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Search and Language */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <Button variant="ghost" size="icon" className="text-nutinova-asparagus hover:bg-nutinova-beige/30 hover:scale-110 transition-all duration-300">
              <Search className="h-4 w-4 lg:h-5 lg:w-5" />
            </Button>
            <div className="text-xs lg:text-sm text-nutinova-asparagus font-poppins font-medium">
              <span className="font-semibold">ES</span> | <span className="text-gray-400">EN</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-nutinova-asparagus hover:bg-nutinova-beige/30 transition-all duration-300"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md border-t border-nutinova-beige rounded-b-xl">
              {mainNavigation.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="block px-3 py-2 text-nutinova-asparagus hover:text-nutinova-moonstone hover:bg-nutinova-beige/50 rounded-md transition-colors duration-300 font-medium font-poppins text-base"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                  {item.submenu && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-3 py-2 text-sm text-nutinova-asparagus/80 hover:text-nutinova-moonstone hover:bg-nutinova-beige/30 rounded-md transition-colors duration-300 font-poppins"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-3 py-2 text-sm text-nutinova-asparagus border-t border-nutinova-beige mt-2 font-poppins">
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
