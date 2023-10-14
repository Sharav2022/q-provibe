import sgMail from "@sendgrid/mail";
import { OFFICIAL_MAIL } from "../globals/mock";

export const sendEmail = async (to, subject, text, html) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to,
    from: OFFICIAL_MAIL,
    subject,
    text
  };

  try {
    await sgMail.send(msg);
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error(error);
  }
};
