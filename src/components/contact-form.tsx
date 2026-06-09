'use client';

import { FormEvent, useState } from 'react';

type ContactFormCopy = {
  name: string;
  email: string;
  message: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  submit: string;
  sending: string;
  success: string;
  invalidJson: string;
  invalidName: string;
  invalidEmail: string;
  invalidMessage: string;
  genericError: string;
};

type ContactFormProps = {
  copy: ContactFormCopy;
  locale: 'en' | 'de';
  recipientEmail: string;
};

const defaultCopy: ContactFormCopy = {
  name: 'Name',
  email: 'Email',
  message: 'Message',
  namePlaceholder: 'Your name',
  emailPlaceholder: 'you@example.com',
  messagePlaceholder: 'Tell me about the role, thesis, or project you have in mind.',
  submit: 'Send message',
  sending: 'Sending...',
  success: 'Message sent successfully.',
  invalidJson: 'Something went wrong.',
  invalidName: 'Please share your name.',
  invalidEmail: 'Please enter a valid email address.',
  invalidMessage: 'Please add a short message with a bit more detail.',
  genericError: 'Something went wrong.'
};

export function ContactForm({ copy = defaultCopy, locale, recipientEmail }: Partial<ContactFormProps>) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get('name') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      message: String(formData.get('message') ?? '').trim()
    };

    try {
      if (!recipientEmail) {
        throw new Error(copy.genericError);
      }

      const subject = encodeURIComponent(`Portfolio contact from ${payload.name}`);
      const body = encodeURIComponent(
        [
          `Name: ${payload.name}`,
          `Email: ${payload.email}`,
          `Locale: ${locale}`,
          '',
          payload.message
        ].join('\n')
      );

      window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
      setStatus(copy.success);
      form.reset();
    } catch (error) {
      const message = error instanceof Error ? error.message : copy.genericError;
      setStatus(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-grid">
        <div className="field">
          <label htmlFor="name">{copy.name}</label>
          <input id="name" name="name" type="text" placeholder={copy.namePlaceholder} required minLength={2} />
        </div>
        <div className="field">
          <label htmlFor="email">{copy.email}</label>
          <input id="email" name="email" type="email" placeholder={copy.emailPlaceholder} required />
        </div>
      </div>

      <div className="field">
        <label htmlFor="message">{copy.message}</label>
        <textarea
          id="message"
          name="message"
          placeholder={copy.messagePlaceholder}
          required
          minLength={10}
        />
      </div>

      <div className="button-row">
        <button className="button" type="submit" disabled={isSubmitting}>
          {isSubmitting ? copy.sending : copy.submit}
        </button>
        <p className="form-status" aria-live="polite">
          {status}
        </p>
      </div>
    </form>
  );
}
