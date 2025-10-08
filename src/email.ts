import rawSend from './email';

export interface EmailParams {
  name: string;
  email: string;
  message: string;
}

/**
 * Typed wrapper around the JS implementation in email.js
 */
export async function sendEmail(params: EmailParams): Promise<boolean> {
  return await rawSend(params as any);
}

export default sendEmail;
