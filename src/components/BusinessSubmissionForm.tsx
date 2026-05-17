'use client';

import { useState } from 'react';

interface BusinessFormData {
  businessName: string;
  contactName: string;
  contactEmail: string;
  phone: string;
  website: string;
  category: string;
  town: string;
  address: string;
  description: string;
  features: string[];
  listingInterest: string;
  message: string;
  consent: boolean;
  honeypot: string;
}

const featureOptions = [
  'Dog-friendly', 'Family-friendly', 'Wheelchair accessible', 'Free parking',
  'Near beach', 'Online booking', 'Open all year', 'Outdoor seating',
  'EV charging', 'Budget-friendly', 'Luxury',
];

const initialFormData: BusinessFormData = {
  businessName: '',
  contactName: '',
  contactEmail: '',
  phone: '',
  website: '',
  category: '',
  town: '',
  address: '',
  description: '',
  features: [],
  listingInterest: '',
  message: '',
  consent: false,
  honeypot: '',
};

export default function BusinessSubmissionForm() {
  const [formData, setFormData] = useState<BusinessFormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<string, string>> = {};
    if (!formData.businessName.trim()) newErrors.businessName = 'Please enter your business name.';
    if (!formData.contactName.trim()) newErrors.contactName = 'Please enter a contact name.';
    if (!formData.contactEmail.trim()) {
      newErrors.contactEmail = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contactEmail)) {
      newErrors.contactEmail = 'Please enter a valid email address.';
    }
    if (formData.website && !/^https?:\/\/.+/.test(formData.website)) {
      newErrors.website = 'Please enter a valid URL starting with http:// or https://.';
    }
    if (!formData.category) newErrors.category = 'Please select a category.';
    if (!formData.town.trim()) newErrors.town = 'Please enter your town or area.';
    if (!formData.description.trim()) newErrors.description = 'Please enter a short description.';
    if (!formData.consent) newErrors.consent = 'Please confirm the information is accurate.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;

    if (!validate()) return;
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/business-submission', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          businessName: formData.businessName,
          contactName: formData.contactName,
          contactEmail: formData.contactEmail,
          phone: formData.phone,
          website: formData.website,
          category: formData.category,
          town: formData.town,
          address: formData.address,
          description: formData.description,
          features: formData.features,
          listingInterest: formData.listingInterest,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData(initialFormData);
      }
    } catch {
      // Silently handle
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleFeatureToggle = (feature: string) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter((f) => f !== feature)
        : [...prev.features, feature],
    }));
  };

  if (isSuccess) {
    return (
      <div className="bg-sage/10 border border-sage/20 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-4">🎉</div>
        <h3 className="font-heading text-xl font-semibold text-charcoal mb-2">Submission received</h3>
        <p className="text-charcoal-muted">
          Thank you for submitting your business. We will review your details and be in touch within a few working days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="hidden" aria-hidden="true">
        <input type="text" id="biz-hp" name="honeypot" value={formData.honeypot} onChange={handleChange} tabIndex={-1} aria-hidden="true" autoComplete="off" />
      </div>

      <fieldset>
        <legend className="font-heading text-lg font-semibold text-charcoal mb-4">Business details</legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="biz-name" className="block text-sm font-medium text-charcoal mb-1.5">Business name <span className="text-red-500">*</span></label>
            <input type="text" id="biz-name" name="businessName" value={formData.businessName} onChange={handleChange} className={`form-input ${errors.businessName ? 'error' : ''}`} required />
            {errors.businessName && <p className="mt-1 text-xs text-red-500">{errors.businessName}</p>}
          </div>

          <div>
            <label htmlFor="biz-category" className="block text-sm font-medium text-charcoal mb-1.5">Category <span className="text-red-500">*</span></label>
            <select id="biz-category" name="category" value={formData.category} onChange={handleChange} className={`form-input ${errors.category ? 'error' : ''}`} required>
              <option value="">Select a category</option>
              <option value="accommodation">Accommodation</option>
              <option value="attraction">Attraction</option>
              <option value="food-drink">Food & Drink</option>
              <option value="event">Event</option>
              <option value="activity">Activity or Experience</option>
              <option value="tour">Tour</option>
              <option value="shop">Local Shop</option>
              <option value="other">Other</option>
            </select>
            {errors.category && <p className="mt-1 text-xs text-red-500">{errors.category}</p>}
          </div>

          <div>
            <label htmlFor="biz-town" className="block text-sm font-medium text-charcoal mb-1.5">Town / Area <span className="text-red-500">*</span></label>
            <input type="text" id="biz-town" name="town" value={formData.town} onChange={handleChange} className={`form-input ${errors.town ? 'error' : ''}`} required />
            {errors.town && <p className="mt-1 text-xs text-red-500">{errors.town}</p>}
          </div>

          <div>
            <label htmlFor="biz-address" className="block text-sm font-medium text-charcoal mb-1.5">Address</label>
            <input type="text" id="biz-address" name="address" value={formData.address} onChange={handleChange} className="form-input" />
          </div>

          <div>
            <label htmlFor="biz-website" className="block text-sm font-medium text-charcoal mb-1.5">Website URL</label>
            <input type="url" id="biz-website" name="website" value={formData.website} onChange={handleChange} className={`form-input ${errors.website ? 'error' : ''}`} placeholder="https://" />
            {errors.website && <p className="mt-1 text-xs text-red-500">{errors.website}</p>}
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="biz-description" className="block text-sm font-medium text-charcoal mb-1.5">Short description <span className="text-red-500">*</span></label>
          <textarea id="biz-description" name="description" value={formData.description} onChange={handleChange} rows={3} className={`form-input resize-y ${errors.description ? 'error' : ''}`} required />
          {errors.description && <p className="mt-1 text-xs text-red-500">{errors.description}</p>}
        </div>
      </fieldset>

      <fieldset>
        <legend className="font-heading text-lg font-semibold text-charcoal mb-4">Contact details</legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="biz-contact-name" className="block text-sm font-medium text-charcoal mb-1.5">Contact name <span className="text-red-500">*</span></label>
            <input type="text" id="biz-contact-name" name="contactName" value={formData.contactName} onChange={handleChange} className={`form-input ${errors.contactName ? 'error' : ''}`} required />
            {errors.contactName && <p className="mt-1 text-xs text-red-500">{errors.contactName}</p>}
          </div>

          <div>
            <label htmlFor="biz-contact-email" className="block text-sm font-medium text-charcoal mb-1.5">Contact email <span className="text-red-500">*</span></label>
            <input type="email" id="biz-contact-email" name="contactEmail" value={formData.contactEmail} onChange={handleChange} className={`form-input ${errors.contactEmail ? 'error' : ''}`} required />
            {errors.contactEmail && <p className="mt-1 text-xs text-red-500">{errors.contactEmail}</p>}
          </div>

          <div>
            <label htmlFor="biz-phone" className="block text-sm font-medium text-charcoal mb-1.5">Phone number</label>
            <input type="tel" id="biz-phone" name="phone" value={formData.phone} onChange={handleChange} className="form-input" />
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend className="font-heading text-lg font-semibold text-charcoal mb-4">Key features</legend>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {featureOptions.map((feature) => (
            <label key={feature} className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-cream/60 cursor-pointer transition-colors">
              <input
                type="checkbox"
                checked={formData.features.includes(feature)}
                onChange={() => handleFeatureToggle(feature)}
                className="w-4 h-4 text-sage border-cream-dark rounded focus:ring-sage"
              />
              <span className="text-sm text-charcoal">{feature}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="biz-listing-interest" className="block text-sm font-medium text-charcoal mb-1.5">Listing interest</label>
        <select id="biz-listing-interest" name="listingInterest" value={formData.listingInterest} onChange={handleChange} className="form-input">
          <option value="">Select an option</option>
          <option value="free">Free listing</option>
          <option value="featured">Featured listing</option>
          <option value="premium">Premium partner</option>
          <option value="unsure">Not sure yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="biz-message" className="block text-sm font-medium text-charcoal mb-1.5">Additional message</label>
        <textarea id="biz-message" name="message" value={formData.message} onChange={handleChange} rows={3} className="form-input resize-y" />
      </div>

      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.consent}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, consent: e.target.checked }));
              if (errors.consent) setErrors((prev) => ({ ...prev, consent: undefined }));
            }}
            className="w-4 h-4 mt-0.5 text-sage border-cream-dark rounded focus:ring-sage"
            required
          />
          <span className="text-sm text-charcoal-muted">
            I confirm that the information provided is accurate and that I have the right to submit these business details &mdash; and any images shared with us later &mdash; for publication on Lincs Staycation Guide. <span className="text-red-500">*</span>
          </span>
        </label>
        {errors.consent && <p className="mt-1 text-xs text-red-500">{errors.consent}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto px-8 py-3 text-base font-semibold text-white bg-sage hover:bg-sage-dark disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-colors"
      >
        {isSubmitting ? 'Submitting...' : 'Submit business'}
      </button>

      <p className="text-xs text-charcoal-muted mt-2">
        All submissions are reviewed before publication. We may edit listing descriptions for clarity, accuracy and editorial quality.
      </p>
    </form>
  );
}
