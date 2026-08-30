export const CONTACT_EMAIL = "sales@shakshienterprises.com";

export const WHATSAPP_NUMBER = "919152242077";

export const WHATSAPP_ENQUIRY_MESSAGE =
  "Hello Shakshi Enterprises, I am interested in your storage solutions. Please share product details and quotation.";

export const WHATSAPP_ENQUIRY_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_ENQUIRY_MESSAGE,
)}`;

export const EMAIL_ENQUIRY_URL = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "Storage solutions enquiry",
)}`;
