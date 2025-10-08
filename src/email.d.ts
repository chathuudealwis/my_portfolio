declare module '../email' {
  export interface EmailParams {
    name: string;
    email: string;
    message: string;
  }

  export function sendEmail(params: EmailParams): Promise<boolean>;

  export default sendEmail;
}
