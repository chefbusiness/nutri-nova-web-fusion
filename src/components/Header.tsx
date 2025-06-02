
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
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-nutinova-beige z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-32">
          {/* Logo - Duplicated size */}
          <div className="flex-shrink-0">
            <img 
              className="h-40 w-auto" 
              src="/lovable-uploads/dac433a0-7e8c-4473-9fb6-6dfab6048f03.png" 
              alt="Nutinova Foods"
            />
          </div>

          {/* Desktop Mega Navigation */}
          <nav className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList className="space-x-6">
                {mainNavigation.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    {item.submenu ? (
                      <>
                        <NavigationMenuTrigger className="text-nutinova-asparagus hover:text-nutinova-moonstone transition-colors duration-200 font-medium bg-transparent hover:bg-nutinova-beige/30 data-[active]:bg-nutinova-beige/50 data-[state=open]:bg-nutinova-beige/50">
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="w-80 p-6 bg-white border border-nutinova-beige rounded-lg shadow-lg">
                            <div className="grid gap-3">
                              {item.submenu.map((subItem) => (
                                <a
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block px-4 py-3 text-nutinova-asparagus hover:text-nutinova-moonstone hover:bg-nutinova-beige/50 rounded-md transition-colors duration-200 font-medium"
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
                        className="px-4 py-2 text-nutinova-asparagus hover:text-nutinova-moonstone transition-colors duration-200 font-medium"
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
              {mainNavigation.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="block px-3 py-2 text-nutinova-asparagus hover:text-nutinova-moonstone hover:bg-nutinova-beige/50 rounded-md transition-colors duration-200 font-medium"
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
                          className="block px-3 py-2 text-sm text-nutinova-asparagus/80 hover:text-nutinova-moonstone hover:bg-nutinova-beige/30 rounded-md transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
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
