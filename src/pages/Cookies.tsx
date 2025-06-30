
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Cookies = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-modern-gray-900 mb-8">
            Política de Cookies
          </h1>
          
          <div className="prose prose-lg max-w-none text-modern-gray-700">
            <p className="text-xl mb-8 text-modern-gray-600">
              Esta política explica cómo Nutinova Foods utiliza cookies y tecnologías similares 
              en nuestro sitio web.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-modern-gray-900 mb-4">1. ¿Qué son las Cookies?</h2>
              <p className="mb-4">
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando 
                visitas un sitio web. Nos ayudan a recordar tus preferencias y mejorar tu experiencia 
                de navegación.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-modern-gray-900 mb-4">2. Tipos de Cookies que Utilizamos</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-modern-gray-900 mb-3">Cookies Esenciales</h3>
                <p className="mb-4">
                  Estas cookies son necesarias para el funcionamiento básico del sitio web y no se pueden desactivar:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Cookies de sesión para mantener tu navegación</li>
                  <li>Cookies de seguridad para proteger contra ataques</li>
                  <li>Cookies de preferencias de idioma</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-modern-gray-900 mb-3">Cookies de Rendimiento</h3>
                <p className="mb-4">
                  Estas cookies nos ayudan a entender cómo los visitantes interactúan con nuestro sitio:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Google Analytics para estadísticas de uso</li>
                  <li>Métricas de rendimiento del sitio</li>
                  <li>Análisis de comportamiento del usuario</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-modern-gray-900 mb-3">Cookies Funcionales</h3>
                <p className="mb-4">
                  Estas cookies mejoran la funcionalidad y personalización del sitio:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Recordar tus preferencias de idioma</li>
                  <li>Mantener formularios completados</li>
                  <li>Personalizar contenido según tu ubicación</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-modern-gray-900 mb-4">3. Cookies de Terceros</h2>
              <p className="mb-4">
                Utilizamos servicios de terceros que pueden establecer sus propias cookies:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Google Analytics:</strong> Para análisis de tráfico web</li>
                <li><strong>Google Tag Manager:</strong> Para gestión de etiquetas</li>
                <li><strong>Redes Sociales:</strong> Para funciones de compartir contenido</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-modern-gray-900 mb-4">4. Control de Cookies</h2>
              <p className="mb-4">
                Puedes controlar y gestionar las cookies de varias maneras:
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-modern-gray-900 mb-3">Configuración del Navegador</h3>
                <p className="mb-4">
                  La mayoría de los navegadores te permiten:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Ver qué cookies están almacenadas</li>
                  <li>Eliminar cookies individualmente o todas</li>
                  <li>Bloquear cookies de sitios específicos</li>
                  <li>Bloquear cookies de terceros</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-modern-gray-900 mb-3">Enlaces Útiles</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>Google Chrome: Configuración → Privacidad y seguridad → Cookies</li>
                  <li>Firefox: Opciones → Privacidad y seguridad</li>
                  <li>Safari: Preferencias → Privacidad</li>
                  <li>Edge: Configuración → Cookies y permisos del sitio</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-modern-gray-900 mb-4">5. Consecuencias de Desactivar Cookies</h2>
              <p className="mb-4">
                Si desactivas las cookies, algunas funciones del sitio pueden no funcionar correctamente:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Es posible que tengas que volver a introducir información</li>
                <li>Algunas páginas pueden no mostrarse correctamente</li>
                <li>No podremos recordar tus preferencias</li>
                <li>La funcionalidad de formularios puede verse afectada</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-modern-gray-900 mb-4">6. Actualizaciones de esta Política</h2>
              <p className="mb-4">
                Podemos actualizar esta política de cookies ocasionalmente para reflejar cambios en 
                nuestras prácticas o por otros motivos operativos, legales o reglamentarios.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-modern-gray-900 mb-4">7. Contacto</h2>
              <p className="mb-4">
                Si tienes preguntas sobre nuestra política de cookies, puedes contactarnos en:
              </p>
              <p className="mb-2">
                <strong>Email:</strong> privacidad@nutinovafoods.com
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

export default Cookies;
