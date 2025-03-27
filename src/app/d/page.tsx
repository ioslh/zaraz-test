'use client'
import { trackEvent } from "@/utils/track";
import Link from "next/link";
import { useEffect } from "react";

export default function D() {
    useEffect(() => {
        window.setTimeout(() => {
            trackEvent('page_view_d')
        }, 100)
    }, [])
    return <div>
        <h2 style={{fontSize: '20px', borderBottom: '1px solid red'}}>D</h2>
        <div>
            <Link href="/c">To C</Link>
        </div>
    </div>
}