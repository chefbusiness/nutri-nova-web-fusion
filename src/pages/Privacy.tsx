
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from '@/components/ui/breadcrumb';
import { Card, CardContent } from '@/components/ui/card';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidad - Nutinova Foods</title>
        <meta name="description" content="Política de privacidad de Nutinova Foods. Conoce cómo recopilamos, utilizamos y protegemos tu información personal." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nutinovafoods.com/privacidad" />
      </Helmet>
      
      <div className="min-h-screen bg-modern-gray-50">
        <Header />
        
        <div className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumbs */}
            <div className="mb-8">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/" className="text-nutinova-asparagus hover:text-nutinova-asparagus/80">
                      Inicio
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-modern-gray-600">
                      Política de Privacidad
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            <Card className="bg-white shadow-sm border-0">
              <CardContent className="p-8 lg:p-12">
                <header className="mb-8">
                  <h1 className="text-3xl lg:text-4xl font-bold text-modern-gray-900 mb-4">
                    Política de Privacidad
                  </h1>
                  <p className="text-modern-gray-600 text-lg">
                    Última actualización: 30 de diciembre de 2024
                  </p>
                </header>

                <div className="prose prose-lg max-w-none">
                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-modern-gray-900 mb-4">1. Información que Recopilamos</h2>
                    <p className="text-modern-gray-700 mb-4">
                      En Nutinova Foods, recopilamos información que nos proporcionas directamente, como cuando:
                    </p>
                    <ul className="list-disc list-inside text-modern-gray-700 space-y-2 mb-4">
                      <li>Completas formularios de contacto en nuestro sitio web</li>
                      <li>Te suscribes a nuestro newsletter</li>
                      <li>Participas en encuestas o promociones</li>
                      <li>Nos contactas por email o teléfono</li>
                    </ul>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-modern-gray-900 mb-4">2. Cómo Utilizamos tu Información</h2>
                    <p className="text-modern-gray-700 mb-4">
                      Utilizamos la información recopilada para:
                    </p>
                    <ul className="list-disc list-inside text-modern-gray-700 space-y-2 mb-4">
                      <li>Responder a tus consultas y solicitudes</li>
                      <li>Enviarte información sobre nuestros productos y servicios</li>
                      <li>Mejorar nuestro sitio web y experiencia del usuario</li>
                      <li>Cumplir con obligaciones legales</li>
                    </ul>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-modern-gray-900 mb-4">3. Compartir Información</h2>
                    <p className="text-modern-gray-700 mb-4">
                      No vendemos, alquilamos o compartimos tu información personal con terceros, excepto en las siguientes circunstancias:
                    </p>
                    <ul className="list-disc list-inside text-modern-gray-700 space-y-2 mb-4">
                      <li>Con tu consentimiento explícito</li>
                      <li>Con proveedores de servicios que nos ayudan a operar nuestro negocio</li>
                      <li>Cuando sea requerido por ley</li>
                    </ul>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-modern-gray-900 mb-4">4. Seguridad de Datos</h2>
                    <p className="text-modern-gray-700 mb-4">
                      Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-modern-gray-900 mb-4">5. Tus Derechos</h2>
                    <p className="text-modern-gray-700 mb-4">
                      Tienes derecho a:
                    </p>
                    <ul className="list-disc list-inside text-modern-gray-700 space-y-2 mb-4">
                      <li>Acceder a tu información personal</li>
                      <li>Corregir información inexacta</li>
                      <li>Solicitar la eliminación de tu información</li>
                      <li>Retirar tu consentimiento en cualquier momento</li>
                    </ul>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-modern-gray-900 mb-4">6. Cookies</h2>
                    <p className="text-modern-gray-700 mb-4">
                      Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Puedes configurar tu navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-modern-gray-900 mb-4">7. Contacto</h2>
                    <p className="text-modern-gray-700 mb-4">
                      Si tienes preguntas sobre esta Política de Privacidad, puedes contactarnos en:
                    </p>
                    <div className="bg-modern-gray-50 p-4 rounded-lg">
                      <p className="text-modern-gray-700">
                        <strong>Nutinova Foods</strong><br />
                        Email: privacidad@nutinovafoods.com<br />
                        Teléfono: +52 (33) 1234-5678
                      </p>
                    </div>
                  </section>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default Privacy;
