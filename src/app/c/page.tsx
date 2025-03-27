'use client'
import { trackEvent } from "@/utils/track";
import Link from "next/link";
import { useEffect } from "react";

export default function C() {
    useEffect(() => {
        window.setTimeout(() => {
            trackEvent('page_view_c')
        }, 100)
    }, [])
    return <div>
        <h2 style={{fontSize: '20px', borderBottom: '1px solid blue'}}>C</h2>
        <div>
            <Link href="/d">To D</Link>
        </div>
    </div>
}