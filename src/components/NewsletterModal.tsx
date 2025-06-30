
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { X, Mail, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewsletterModal = ({ isOpen, onClose }: NewsletterModalProps) => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate newsletter subscription
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSuccess(true);
      toast({
        title: "¡Suscripción exitosa!",
        description: "Te has suscrito correctamente a nuestro newsletter.",
      });
      
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setEmail('');
      }, 2000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al suscribirse. Inténtalo de nuevo.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-modern-gray-900">
            {isSuccess ? '¡Bienvenido!' : 'Mantente Informado'}
          </DialogTitle>
        </DialogHeader>

        {isSuccess ? (
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <p className="text-lg text-modern-gray-600">
              ¡Gracias por suscribirte! Pronto recibirás noticias sobre nuestros productos y novedades.
            </p>
          </div>
        ) : (
          <Card className="border-0 shadow-none">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <Mail className="h-12 w-12 text-nutinova-asparagus mx-auto mb-4" />
                <p className="text-modern-gray-600">
                  Suscríbete a nuestro newsletter y recibe:
                </p>
                <ul className="text-sm text-modern-gray-500 mt-4 space-y-2">
                  <li>• Noticias sobre nuevos productos</li>
                  <li>• Consejos de alimentación saludable</li>
                  <li>• Ofertas exclusivas para socios</li>
                  <li>• Actualizaciones de sostenibilidad</li>
                </ul>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="text-center"
                    disabled={isSubmitting}
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-nutinova-asparagus hover:bg-nutinova-asparagus/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Suscribiendo...' : 'Suscribirse'}
                </Button>
              </form>

              <p className="text-xs text-modern-gray-400 text-center mt-4">
                Respetamos tu privacidad. Puedes cancelar la suscripción en cualquier momento.
              </p>
            </CardContent>
          </Card>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterModal;
