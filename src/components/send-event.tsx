import { trackEvent } from "@/utils/track";

export default function SendEvent({ eventName }: {eventName: string}) {
    return <button onClick={() => trackEvent(eventName)}>{eventName}</button>
}