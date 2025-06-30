
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

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Términos y Condiciones - Nutinova Foods</title>
        <meta name="description" content="Términos y condiciones de uso del sitio web de Nutinova Foods. Conoce las condiciones que rigen el uso de nuestros servicios." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nutinovafoods.com/terminos" />
      </Helmet>
      
      <div className="min-h-screen bg-modern-gray-50">
        <Header />
        
        <div className="pt-20 pb-16">
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
                      Términos y Condiciones
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            <Card className="bg-white shadow-sm border-0">
              <CardContent className="p-8 lg:p-12">
                <header className="mb-8">
                  <h1 className="text-3xl lg:text-4xl font-bold text-modern-gray-900 mb-4">
                    Términos y Condiciones
                  </h1>
                  <p className="text-modern-gray-600 text-lg">
                    Última actualización: 30 de diciembre de 2024
                  </p>
                </header>

                <div className="prose prose-lg max-w-none">
                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-modern-gray-900 mb-4">1. Aceptación de los Términos</h2>
                    <p className="text-modern-gray-700 mb-4">
                      Al acceder y usar este sitio web, aceptas estar sujeto a estos términos y condiciones 
                      y a todas las leyes y regulaciones aplicables. Si no estás de acuerdo con alguno de 
                      estos términos, no debes usar este sitio.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-modern-gray-900 mb-4">2. Uso del Sitio Web</h2>
                    <p className="text-modern-gray-700 mb-4">
                      Este sitio web está destinado a proporcionar información sobre Nutinova Foods y sus productos. 
                      Puedes usar este sitio para:
                    </p>
                    <ul className="list-disc list-inside text-modern-gray-700 space-y-2 mb-4">
                      <li>Obtener información sobre nuestros productos y servicios</li>
                      <li>Contactar con nosotros para consultas comerciales</li>
                      <li>Acceder a recursos y materiales informativos</li>
                      <li>Solicitar información sobre distribución y partnerships</li>
                    </ul>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-modern-gray-900 mb-4">3. Restricciones de Uso</h2>
                    <p className="text-modern-gray-700 mb-4">
                      Está prohibido:
                    </p>
                    <ul className="list-disc list-inside text-modern-gray-700 space-y-2 mb-4">
                      <li>Usar el sitio para fines ilegales o no autorizados</li>
                      <li>Intentar obtener acceso no autorizado a cualquier parte del sitio</li>
                      <li>Transmitir virus, malware o código malicioso</li>
                      <li>Interferir con el funcionamiento del sitio</li>
                      <li>Copiar, distribuir o modificar el contenido sin autorización</li>
                    </ul>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-modern-gray-900 mb-4">4. Propiedad Intelectual</h2>
                    <p className="text-modern-gray-700 mb-4">
                      Todo el contenido de este sitio web, incluyendo textos, gráficos, logos, imágenes, 
                      y software, es propiedad de Nutinova Foods o sus licenciantes y está protegido por 
                      las leyes de derechos de autor y propiedad intelectual.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-modern-gray-900 mb-4">5. Información del Producto</h2>
                    <p className="text-modern-gray-700 mb-4">
                      Nos esforzamos por proporcionar información precisa sobre nuestros productos, pero no 
                      garantizamos que toda la información sea completa, precisa o actualizada. Las especificaciones 
                      del producto pueden cambiar sin previo aviso.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-modern-gray-900 mb-4">6. Limitación de Responsabilidad</h2>
                    <p className="text-modern-gray-700 mb-4">
                      Nutinova Foods no será responsable por daños directos, indirectos, incidentales, 
                      especiales o consecuentes que resulten del uso o la imposibilidad de usar este sitio web.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-modern-gray-900 mb-4">7. Enlaces a Terceros</h2>
                    <p className="text-modern-gray-700 mb-4">
                      Este sitio puede contener enlaces a sitios web de terceros. No somos responsables del 
                      contenido o las prácticas de privacidad de estos sitios externos.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-modern-gray-900 mb-4">8. Modificaciones</h2>
                    <p className="text-modern-gray-700 mb-4">
                      Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. 
                      Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-modern-gray-900 mb-4">9. Ley Aplicable</h2>
                    <p className="text-modern-gray-700 mb-4">
                      Estos términos se regirán e interpretarán de acuerdo con las leyes de México. 
                      Cualquier disputa será resuelta en los tribunales competentes de Guadalajara, Jalisco.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-modern-gray-900 mb-4">10. Contacto</h2>
                    <p className="text-modern-gray-700 mb-4">
                      Si tienes preguntas sobre estos términos y condiciones, puedes contactarnos en:
                    </p>
                    <div className="bg-modern-gray-50 p-4 rounded-lg">
                      <p className="text-modern-gray-700">
                        <strong>Nutinova Foods</strong><br />
                        Email: legal@nutinovafoods.com<br />
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

export default Terms;
