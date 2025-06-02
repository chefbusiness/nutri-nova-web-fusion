
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';
import LocationSection from '@/components/LocationSection';

const Contact = () => {
  console.log('Contact component rendered');

  return (
    <section id="contacto" className="py-16 sm:py-24 lg:py-32 bg-modern-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-modern-gray-900 mb-6 leading-tight">
            Contacto
          </h2>
          <p className="text-lg text-modern-gray-600 leading-relaxed">
            Estamos aquí para escucharte. Ya sea que representes una empresa interesada en 
            distribución, un medio de comunicación, o simplemente quieras conocer más sobre nosotros.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Information */}
          <ContactInfo />
        </div>

        {/* Map Section */}
        <LocationSection />
      </div>
    </section>
  );
};

export default Contact;
