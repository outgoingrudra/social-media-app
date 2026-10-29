import nodemailer from 'nodemailer';

// Configure your transporter once
const transporter = nodemailer.createTransport({
  service: 'gmail', // Change this if using a different provider
  auth: {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.ADMIN_PASS  // Remember to use your App Password
  }
});

export async function sendQuickMail(subjectForMail , receiverEmail, msg) {
  const mailOptions = {
    from: `"Social Media App" <${process.env.ADMIN_EMAIL}>`, 
    to: receiverEmail,                                
    subject: subjectForMail,                       // You can change or parameterise this too
    text: msg,                                         // Plain text fallback
    html: `<p>${msg}</p>`,                             // HTML wrapper
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`Email successfully sent to ${receiverEmail}! Message ID: ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error(`Failed to send email to ${receiverEmail}:`, error);
    return { success: false, error: error.message };
  }
}