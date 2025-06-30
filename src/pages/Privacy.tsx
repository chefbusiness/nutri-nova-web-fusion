
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-modern-gray-900 mb-8">
            Política de Privacidad
          </h1>
          
          <div className="prose prose-lg max-w-none text-modern-gray-700">
            <p className="text-xl mb-8 text-modern-gray-600">
              En Nutinova Foods valoramos y respetamos tu privacidad. Esta política describe cómo recolectamos, 
              usamos y protegemos tu información personal.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-modern-gray-900 mb-4">1. Información que Recolectamos</h2>
              <p className="mb-4">
                Recolectamos información que nos proporcionas directamente, como:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Información de contacto (nombre, email, teléfono)</li>
                <li>Información empresarial para distribuidores y socios</li>
                <li>Comunicaciones que envías a través de nuestros formularios</li>
                <li>Información de suscripción al newsletter</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-modern-gray-900 mb-4">2. Cómo Usamos tu Información</h2>
              <p className="mb-4">
                Utilizamos tu información para:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Responder a tus consultas y comunicaciones</li>
                <li>Enviar información sobre nuestros productos y servicios</li>
                <li>Procesar solicitudes de distribución y partnerships</li>
                <li>Mejorar nuestros productos y servicios</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-modern-gray-900 mb-4">3. Cookies y Tecnologías Similares</h2>
              <p className="mb-4">
                Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio web. 
                Puedes controlar el uso de cookies a través de la configuración de tu navegador.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-modern-gray-900 mb-4">4. Compartir Información</h2>
              <p className="mb-4">
                No vendemos, intercambiamos o transferimos tu información personal a terceros sin tu consentimiento, 
                excepto cuando sea necesario para:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Cumplir con la ley o procesos legales</li>
                <li>Proteger nuestros derechos y seguridad</li>
                <li>Trabajar con proveedores de servicios que nos ayudan a operar nuestro negocio</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-modern-gray-900 mb-4">5. Tus Derechos</h2>
              <p className="mb-4">
                Tienes derecho a:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Acceder a tu información personal</li>
                <li>Rectificar información inexacta</li>
                <li>Solicitar la eliminación de tu información</li>
                <li>Oponerte al procesamiento de tu información</li>
                <li>Retirar tu consentimiento en cualquier momento</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-modern-gray-900 mb-4">6. Seguridad</h2>
              <p className="mb-4">
                Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger 
                tu información personal contra acceso no autorizado, alteración, divulgación o destrucción.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-modern-gray-900 mb-4">7. Contacto</h2>
              <p className="mb-4">
                Si tienes preguntas sobre esta política de privacidad o sobre cómo manejamos tu información, 
                puedes contactarnos en:
              </p>
              <p className="mb-2">
                <strong>Email:</strong> privacidad@nutinovafoods.com
              </p>
              <p className="mb-2">
                <strong>Dirección:</strong> Guadalajara, Jalisco, México
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-modern-gray-900 mb-4">8. Cambios a esta Política</h2>
              <p className="mb-4">
                Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos sobre 
                cambios significativos publicando la nueva política en nuestro sitio web.
              </p>
              <p className="text-sm text-modern-gray-500">
                Última actualización: Diciembre 2024
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
