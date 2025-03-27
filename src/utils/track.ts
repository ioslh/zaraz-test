/* eslint-disable @typescript-eslint/no-explicit-any */
export function trackEvent(
  eventName: string,
  parameters?: Record<string, any>
) {
  console.log(`[> ${eventName}]`, parameters);
  const zaraz = (window as any).zaraz;
  if (zaraz && zaraz.track) {
    try {
      zaraz.track(eventName, parameters);
      console.log("zaraz track sent done: ", eventName);
    } catch (e) {
      console.log("error sending through zaraz track: ", eventName, e);
    }
  } else {
    console.log("zaraz track not found, fail to send: ", eventName);
  }
}
