'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  reason: string;
  message: string;
  honeypot: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  subject: '',
  reason: 'general',
  message: '',
  honeypot: '',
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please enter a subject.';
    if (!formData.message.trim()) newErrors.message = 'Please enter your message.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // Anti-spam

    if (!validate()) return;
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          reason: formData.reason,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData(initialFormData);
      }
    } catch {
      // Silently handle - form will show as not submitted
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-sage/10 border border-sage/20 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="font-heading text-xl font-semibold text-charcoal mb-2">Message sent</h3>
        <p className="text-charcoal-muted">
          Thank you for getting in touch. We aim to respond within a few working days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          id="contact-hp"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          aria-hidden="true"
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-charcoal mb-1.5">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="contact-name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`form-input ${errors.name ? 'error' : ''}`}
          required
        />
        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-charcoal mb-1.5">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="contact-email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`form-input ${errors.email ? 'error' : ''}`}
          required
        />
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="contact-reason" className="block text-sm font-medium text-charcoal mb-1.5">
          Reason for contact
        </label>
        <select
          id="contact-reason"
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          className="form-input"
        >
          <option value="general">General enquiry</option>
          <option value="listing">Add or update a listing</option>
          <option value="advertising">Advertising</option>
          <option value="partnership">Partnership</option>
          <option value="report">Report incorrect information</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="contact-subject" className="block text-sm font-medium text-charcoal mb-1.5">
          Subject <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="contact-subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`form-input ${errors.subject ? 'error' : ''}`}
          required
        />
        {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-charcoal mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`form-input resize-y ${errors.message ? 'error' : ''}`}
          required
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto px-8 py-3 text-base font-semibold text-white bg-sage hover:bg-sage-dark disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-colors"
      >
        {isSubmitting ? 'Sending...' : 'Send message'}
      </button>
    </form>
  );
}
