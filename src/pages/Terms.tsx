
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-modern-gray-900 mb-8">
            Términos y Condiciones
          </h1>
          
          <div className="prose prose-lg max-w-none text-modern-gray-700">
            <p className="text-xl mb-8 text-modern-gray-600">
              Estos términos y condiciones rigen el uso de nuestro sitio web y servicios. 
              Al usar nuestro sitio, aceptas estos términos.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-modern-gray-900 mb-4">1. Aceptación de los Términos</h2>
              <p className="mb-4">
                Al acceder y usar este sitio web, aceptas estar sujeto a estos términos y condiciones 
                y a todas las leyes y regulaciones aplicables. Si no estás de acuerdo con alguno de 
                estos términos, no debes usar este sitio.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-modern-gray-900 mb-4">2. Uso del Sitio Web</h2>
              <p className="mb-4">
                Este sitio web está destinado a proporcionar información sobre Nutinova Foods y sus productos. 
                Puedes usar este sitio para:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Obtener información sobre nuestros productos y servicios</li>
                <li>Contactar con nosotros para consultas comerciales</li>
                <li>Acceder a recursos y materiales informativos</li>
                <li>Solicitar información sobre distribución y partnerships</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-modern-gray-900 mb-4">3. Restricciones de Uso</h2>
              <p className="mb-4">
                Está prohibido:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Usar el sitio para fines ilegales o no autorizados</li>
                <li>Intentar obtener acceso no autorizado a cualquier parte del sitio</li>
                <li>Transmitir virus, malware o código malicioso</li>
                <li>Interferir con el funcionamiento del sitio</li>
                <li>Copiar, distribuir o modificar el contenido sin autorización</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-modern-gray-900 mb-4">4. Propiedad Intelectual</h2>
              <p className="mb-4">
                Todo el contenido de este sitio web, incluyendo textos, gráficos, logos, imágenes, 
                y software, es propiedad de Nutinova Foods o sus licenciantes y está protegido por 
                las leyes de derechos de autor y propiedad intelectual.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-modern-gray-900 mb-4">5. Información del Producto</h2>
              <p className="mb-4">
                Nos esforzamos por proporcionar información precisa sobre nuestros productos, pero no 
                garantizamos que toda la información sea completa, precisa o actualizada. Las especificaciones 
                del producto pueden cambiar sin previo aviso.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-modern-gray-900 mb-4">6. Limitación de Responsabilidad</h2>
              <p className="mb-4">
                Nutinova Foods no será responsable por daños directos, indirectos, incidentales, 
                especiales o consecuentes que resulten del uso o la imposibilidad de usar este sitio web.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-modern-gray-900 mb-4">7. Enlaces a Terceros</h2>
              <p className="mb-4">
                Este sitio puede contener enlaces a sitios web de terceros. No somos responsables del 
                contenido o las prácticas de privacidad de estos sitios externos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-modern-gray-900 mb-4">8. Modificaciones</h2>
              <p className="mb-4">
                Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. 
                Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-modern-gray-900 mb-4">9. Ley Aplicable</h2>
              <p className="mb-4">
                Estos términos se regirán e interpretarán de acuerdo con las leyes de México. 
                Cualquier disputa será resuelta en los tribunales competentes de Guadalajara, Jalisco.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-modern-gray-900 mb-4">10. Contacto</h2>
              <p className="mb-4">
                Si tienes preguntas sobre estos términos y condiciones, puedes contactarnos en:
              </p>
              <p className="mb-2">
                <strong>Email:</strong> legal@nutinovafoods.com
              </p>
              <p className="mb-2">
                <strong>Dirección:</strong> Guadalajara, Jalisco, México
              </p>
            </section>

            <p className="text-sm text-modern-gray-500 mt-8">
              Última actualización: Diciembre 2024
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
