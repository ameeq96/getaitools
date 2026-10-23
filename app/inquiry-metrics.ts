export const measurementChoiceKey = "getaitools-measurement-choice";
export const inquiryPreparedEvent = "getaitools:inquiry-prepared";

export const measurementEvents = ["tool_view", "whatsapp_click", "email_click", "inquiry_prepared"] as const;
export type MeasurementEvent = typeof measurementEvents[number];

export function notifyInquiryPrepared() {
  if (typeof window !== "undefined") window.dispatchEvent(new Event(inquiryPreparedEvent));
}
