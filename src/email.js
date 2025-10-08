/**
 * sendEmail helper using EmailJS REST API
 * Exports: sendEmail({ name, email, message }) -> Promise
 *
 * Environment (Vite):
 * - import.meta.env.VITE_EMAILJS_SERVICE_ID
 * - import.meta.env.VITE_EMAILJS_TEMPLATE_ID
 * - import.meta.env.VITE_EMAILJS_PUBLIC_KEY
 *
 * The function returns a promise that resolves on success and rejects with
 * an Error containing a helpful message on failure.
 */

async function sendEmail({ name, email, message }) {
  // Check if we're running in production (Netlify) by checking the hostname
  const isProduction = 
    typeof window !== 'undefined' && 
    (window.location.hostname !== 'localhost' && 
     window.location.hostname !== '127.0.0.1');

  // If in production, use the Netlify function
  if (isProduction) {
    try {
      const res = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        let errorText;
        try {
          const errorData = await res.json();
          errorText = errorData.error || res.statusText || 'Unknown error';
        } catch (e) {
          errorText = res.statusText || 'Unknown error';
        }
        throw new Error(`Failed to send email: ${errorText}`);
      }

      return true;
    } catch (error) {
      console.error('Error sending email via serverless function:', error);
      throw error;
    }
  }

  // Otherwise use the client-side approach for local development
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error('Email service not configured. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY in your environment.');
  }

  const url = 'https://api.emailjs.com/api/v1.0/email/send';

  const payload = {
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    template_params: {
      from_name: name,
      from_email: email,
      message: message,
    },
  };

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    let text;
    try {
      text = await res.text();
    } catch (e) {
      text = res.statusText || 'Unknown error';
    }
    throw new Error(`Failed to send email: ${res.status} ${text}`);
  }

  return true;
}

export { sendEmail };
export default sendEmail;
