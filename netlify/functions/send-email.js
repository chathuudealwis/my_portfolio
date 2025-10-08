/**
 * Netlify serverless function to handle email sending
 * 
 * This function uses EmailJS REST API just like the client-side code,
 * but can be used when the client-side approach fails or for added security.
 */

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { name, email, message } = JSON.parse(event.body);
    
    // Validate input
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Name, email, and message are required' })
      };
    }
    
    const serviceId = process.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = process.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('Missing environment variables for email service');
      return {
        statusCode: 500,
        body: JSON.stringify({ 
          error: 'Email service configuration is missing on the server' 
        })
      };
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

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('EmailJS error response:', errorText);
      return {
        statusCode: 500,
        body: JSON.stringify({ 
          error: `EmailJS service failed: ${response.status} ${response.statusText}` 
        })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully!' }),
    };
  } catch (error) {
    console.error('Email sending function error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to process email request' })
    };
  }
};