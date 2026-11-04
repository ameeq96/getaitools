export const businessEmail = "info@getaitools.shop";
export const whatsappNumber = "923122114325";
export const whatsappLabel = "+92 312 2114325";

export function whatsappUrl(message?: string) {
  return `https://wa.me/${whatsappNumber}${message ? `?text=${encodeURIComponent(message)}` : ""}`;
}

export function emailInquiryUrl(subject: string, body?: string) {
  return `mailto:${businessEmail}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ""}`;
}
