export const redirectToWhatsAppChat = ({
  whatsappNumber = "+5519991259896",
  message = "Olá! Tudo bem? Vim pelo seu site e gostaria de saber mais sobre os seus atendimentos.",
}: {
  whatsappNumber?: string;
  message?: string;
}) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${whatsappNumber.replace(
    /\D/g,
    ""
  )}?text=${encodedMessage}`;

  window.open(whatsappURL, "_blank");
};
