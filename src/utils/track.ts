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

export function trackPageView() {
  console.log(`[> page view]`);
  try {
    const zaraz = (window as any).zaraz;
    if (zaraz && zaraz.spaPageview) {
      zaraz.spaPageview();
      console.log("page view sent");
    } else {
      console.log("No spaPageview function");
    }
  } catch (e) {
    console.log("Failed send page view", e);
  }
}
