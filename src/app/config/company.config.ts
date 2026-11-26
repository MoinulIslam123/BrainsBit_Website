const WHATSAPP = '+880 54646541'; // TODO: replace with the real WhatsApp number

export const COMPANY = {
  name: 'BrainsBit',
  legalName: 'BrainsBit Technology Solution',
  tagline: 'The power of data & tech',
  whatsapp: WHATSAPP,
  whatsappLink: `https://wa.me/${WHATSAPP.replace(/\D/g, '')}?text=${encodeURIComponent(
    'Hello BrainsBit, I would like to talk about a project.',
  )}`,
  phones: ['+4121 4465451', '+880 54646541'],
  email: 'info@brainsbitbd.com',
  address: 'House# 22, Road# 4, Block#C, Banani, Dhaka, 1213 Bangladesh',
};

// EmailJS (public client-side keys, same values used by the old script.js)
export const EMAILJS_CONFIG = {
  serviceId: 'service_w2tis7l',
  templateId: 'template_zndpft4',
  publicKey: 'gABXiCzaAYDxgavMN',
};
