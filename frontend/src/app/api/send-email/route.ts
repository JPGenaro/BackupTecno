import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER || 'backup.tecno9@gmail.com',
    pass: process.env.GMAIL_APP_PASSWORD || '', 
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validar que los campos requeridos estén presentes
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    // Preparar el correo
    const mailOptions = {
      from: process.env.GMAIL_USER || 'backup.tecno9@gmail.com',
      to: process.env.GMAIL_USER || 'backup.tecno9@gmail.com',
      replyTo: email,
      subject: `Nuevo Contacto: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5; border-radius: 8px;">
          <div style="background: linear-gradient(to right, #06b6d4, #0891b2); color: white; padding: 20px; border-radius: 8px 8px 0 0; margin-bottom: 20px;">
            <h2 style="margin: 0;">Nuevo Mensaje de Contacto</h2>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 12px 0; font-weight: bold; color: #0b1829; width: 30%;">Nombre:</td>
                <td style="padding: 12px 0; color: #555;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 12px 0; font-weight: bold; color: #0b1829;">Email:</td>
                <td style="padding: 12px 0; color: #555;"><a href="mailto:${email}" style="color: #0891b2; text-decoration: none;">${email}</a></td>
              </tr>
              ${phone ? `
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 12px 0; font-weight: bold; color: #0b1829;">Teléfono:</td>
                <td style="padding: 12px 0; color: #555;">${phone}</td>
              </tr>
              ` : ''}
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 12px 0; font-weight: bold; color: #0b1829;">Asunto:</td>
                <td style="padding: 12px 0; color: #555;">${subject}</td>
              </tr>
            </table>
            
            <div style="margin-top: 20px; padding: 15px; background-color: #f9fafb; border-left: 4px solid #0891b2; border-radius: 4px;">
              <h3 style="margin: 0 0 10px 0; color: #0b1829;">Mensaje:</h3>
              <p style="margin: 0; color: #555; white-space: pre-wrap; line-height: 1.5;">${message}</p>
            </div>
            
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #999; text-align: center;">
              <p>Este mensaje fue enviado desde el formulario de contacto de Backup Tecno</p>
            </div>
          </div>
        </div>
      `,
    };

    // Enviar el correo
    await transporter.sendMail(mailOptions);

    // También enviar un correo de confirmación al cliente
    const confirmationEmail = {
      from: process.env.GMAIL_USER || 'backup.tecno9@gmail.com',
      to: email,
      subject: 'Confirmación de tu mensaje - Backup Tecno',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5; border-radius: 8px;">
          <div style="background: linear-gradient(to right, #06b6d4, #0891b2); color: white; padding: 20px; border-radius: 8px 8px 0 0; margin-bottom: 20px;">
            <h2 style="margin: 0;">¡Hemos Recibido tu Mensaje!</h2>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 0 0 8px 8px;">
            <p style="color: #555; font-size: 14px;">Hola <strong>${name}</strong>,</p>
            
            <p style="color: #555; font-size: 14px; line-height: 1.6;">
              Gracias por ponerte en contacto con nosotros. Hemos recibido tu mensaje y nos comprometemos a responder en las próximas 24 horas.
            </p>
            
            <div style="margin: 20px 0; padding: 15px; background-color: #f0f9ff; border-left: 4px solid #0891b2; border-radius: 4px;">
              <p style="margin: 0; color: #0b1829; font-weight: bold;">Resumen de tu solicitud:</p>
              <p style="margin: 5px 0; color: #555; font-size: 13px;"><strong>Asunto:</strong> ${subject}</p>
              ${phone ? `<p style="margin: 5px 0; color: #555; font-size: 13px;"><strong>Teléfono:</strong> ${phone}</p>` : ''}
            </div>
            
            <p style="color: #555; font-size: 14px; line-height: 1.6;">
              Si tienes alguna pregunta urgente, también puedes contactarnos por WhatsApp: <strong>+54 9 3513021607</strong>
            </p>
            
            <p style="margin-top: 30px; color: #999; font-size: 12px; text-align: center; border-top: 1px solid #e5e7eb; padding-top: 20px;">
              Backup Tecno | Soluciones Web Innovadoras<br>
              Córdoba, Argentina
            </p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(confirmationEmail);

    return NextResponse.json({
      message: 'Email enviado correctamente',
      success: true,
    });
  } catch (error) {
    console.error('Error al enviar email:', error);
    
    return NextResponse.json(
      {
        message: 'Error al enviar el email. Por favor intenta más tarde.',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
