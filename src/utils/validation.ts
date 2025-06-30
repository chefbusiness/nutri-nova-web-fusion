
import { z } from 'zod';

// Schema para el formulario de contacto
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(50, 'El nombre no puede exceder 50 caracteres')
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, 'El nombre solo puede contener letras y espacios'),
  
  email: z
    .string()
    .email('Por favor, introduce un email válido')
    .min(5, 'El email debe tener al menos 5 caracteres')
    .max(100, 'El email no puede exceder 100 caracteres'),
  
  company: z
    .string()
    .max(100, 'El nombre de la empresa no puede exceder 100 caracteres')
    .optional(),
  
  department: z
    .enum(['ventas', 'prensa', 'rrhh', 'inversores', 'general'])
    .refine((val) => val !== undefined, 'Por favor, selecciona un departamento'),
  
  message: z
    .string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(1000, 'El mensaje no puede exceder 1000 caracteres')
});

// Schema para newsletter
export const newsletterSchema = z.object({
  email: z
    .string()
    .email('Por favor, introduce un email válido')
    .min(5, 'El email debe tener al menos 5 caracteres')
    .max(100, 'El email no puede exceder 100 caracteres')
});

// Tipos TypeScript generados desde los schemas
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type NewsletterData = z.infer<typeof newsletterSchema>;

// Función para sanitizar inputs (prevenir XSS)
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remover < y >
    .replace(/javascript:/gi, '') // Remover javascript:
    .replace(/on\w+=/gi, '') // Remover event handlers
    .trim();
};

// Validar si un string contiene solo caracteres seguros
export const isSafeString = (input: string): boolean => {
  const dangerousPatterns = [
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi,
    /<iframe/gi,
    /<object/gi,
    /<embed/gi
  ];
  
  return !dangerousPatterns.some(pattern => pattern.test(input));
};
