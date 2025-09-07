import { useState } from 'react';
import { ContactFormData } from '@/types';
import { supabase } from '@/integrations/supabase/client';

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitForm = async (formData: ContactFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const { data, error: submitError } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            company: formData.company || null,
            project_type: formData.projectType || null,
            description: formData.description || null,
            status: 'new',
            submitted_at: new Date().toISOString(),
            ip_address: null, // Will be handled by Supabase function
            user_agent: navigator.userAgent
          }
        ]);

      if (submitError) {
        throw submitError;
      }

      setIsSubmitted(true);
      return { success: true, data };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setError(null);
  };

  return {
    isSubmitting,
    isSubmitted,
    error,
    submitForm,
    resetForm
  };
};
