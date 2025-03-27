'use client'
import { trackEvent } from "@/utils/track";
import Link from "next/link";
import { useEffect } from "react";

export default function A() {
    useEffect(() => {
        trackEvent('page_view_a')
    }, [])
    return <div>
        <h2 style={{fontSize: '20px', borderBottom: '1px solid red'}}>A</h2>
        <div>
            <Link href="/b">To B</Link>
        </div>
    </div>
}