
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { trackFormSubmission } from '@/components/Analytics';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    department: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log('Form submitted:', formData);
      
      // Track the form submission
      trackFormSubmission('contact_form', formData.department);
      
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Mensaje enviado",
        description: "Nos pondremos en contacto contigo pronto.",
      });
      
      setFormData({ name: '', email: '', company: '', department: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar el mensaje. Inténtalo de nuevo.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="bg-white border-modern-gray-200 shadow-sm">
      <CardContent className="p-8">
        <h3 className="text-2xl font-bold text-modern-gray-900 mb-8">
          Envíanos un Mensaje
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-modern-gray-700 mb-2">
                Nombre *
              </label>
              <Input
                required
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="border-modern-gray-200 focus:border-modern-gray-400"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-modern-gray-700 mb-2">
                Email *
              </label>
              <Input
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="border-modern-gray-200 focus:border-modern-gray-400"
                disabled={isSubmitting}
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-modern-gray-700 mb-2">
              Empresa/Organización
            </label>
            <Input
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              className="border-modern-gray-200 focus:border-modern-gray-400"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-modern-gray-700 mb-2">
              Departamento de Interés *
            </label>
            <Select 
              onValueChange={(value) => handleInputChange('department', value)}
              disabled={isSubmitting}
            >
              <SelectTrigger className="border-modern-gray-200 focus:border-modern-gray-400">
                <SelectValue placeholder="Selecciona un departamento" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ventas">Ventas y Distribución</SelectItem>
                <SelectItem value="prensa">Prensa y Medios</SelectItem>
                <SelectItem value="rrhh">Recursos Humanos</SelectItem>
                <SelectItem value="inversores">Relaciones con Inversores</SelectItem>
                <SelectItem value="general">Consulta General</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-modern-gray-700 mb-2">
              Mensaje *
            </label>
            <Textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              className="border-modern-gray-200 focus:border-modern-gray-400"
              placeholder="Cuéntanos cómo podemos ayudarte..."
              disabled={isSubmitting}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-modern-gray-900 hover:bg-modern-gray-800 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
