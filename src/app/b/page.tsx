'use client'
import SendEvent from "@/components/send-event";
import { trackEvent } from "@/utils/track";
import Link from "next/link";
import { useEffect } from "react";

export default function B() {
    useEffect(() => {
        trackEvent('page_view_b')
    }, [])
    return <div>
        <h2 style={{fontSize: '20px', borderBottom: '1px solid blue'}}>B</h2>
        <div>
            <Link href="/a">To A</Link>
        </div>
        <hr />
        <SendEvent eventName="button_click_b" />
    </div>
}