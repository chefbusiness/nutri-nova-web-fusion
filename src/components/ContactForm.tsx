
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { trackFormSubmission } from '@/components/Analytics';
import { contactFormSchema, type ContactFormData, sanitizeInput } from '@/utils/validation';
import FormErrorBoundary from '@/components/FormErrorBoundary';

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      department: undefined,
      message: ''
    },
    mode: 'onBlur' // Validación en tiempo real al perder focus
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Sanitizar datos antes de enviar
      const sanitizedData = {
        ...data,
        name: sanitizeInput(data.name),
        company: data.company ? sanitizeInput(data.company) : '',
        message: sanitizeInput(data.message)
      };

      console.log('Form submitted:', sanitizedData);
      
      // Track the form submission
      trackFormSubmission('contact_form', sanitizedData.department);
      
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Mensaje enviado",
        description: "Nos pondremos en contacto contigo pronto.",
      });
      
      form.reset();
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: "Hubo un problema al enviar el mensaje. Inténtalo de nuevo.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormErrorBoundary>
      <Card className="bg-white border-modern-gray-200 shadow-sm">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold text-modern-gray-900 mb-8">
            Envíanos un Mensaje
          </h3>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>
              <div className="grid sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-modern-gray-700">
                        Nombre *
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="border-modern-gray-200 focus:border-modern-gray-400"
                          disabled={isSubmitting}
                          aria-describedby={form.formState.errors.name ? `${field.name}-error` : undefined}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-modern-gray-700">
                        Email *
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          className="border-modern-gray-200 focus:border-modern-gray-400"
                          disabled={isSubmitting}
                          aria-describedby={form.formState.errors.email ? `${field.name}-error` : undefined}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-modern-gray-700">
                      Empresa/Organización
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="border-modern-gray-200 focus:border-modern-gray-400"
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="department"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-modern-gray-700">
                      Departamento de Interés *
                    </FormLabel>
                    <Select onValueChange={field.onChange} disabled={isSubmitting}>
                      <FormControl>
                        <SelectTrigger className="border-modern-gray-200 focus:border-modern-gray-400">
                          <SelectValue placeholder="Selecciona un departamento" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="ventas">Ventas y Distribución</SelectItem>
                        <SelectItem value="prensa">Prensa y Medios</SelectItem>
                        <SelectItem value="rrhh">Recursos Humanos</SelectItem>
                        <SelectItem value="inversores">Relaciones con Inversores</SelectItem>
                        <SelectItem value="general">Consulta General</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-modern-gray-700">
                      Mensaje *
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        rows={4}
                        className="border-modern-gray-200 focus:border-modern-gray-400"
                        placeholder="Cuéntanos cómo podemos ayudarte..."
                        disabled={isSubmitting}
                        aria-describedby={form.formState.errors.message ? `${field.name}-error` : undefined}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full bg-modern-gray-900 hover:bg-modern-gray-800 text-white min-h-[44px]"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </FormErrorBoundary>
  );
};

export default ContactForm;
