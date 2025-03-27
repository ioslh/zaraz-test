'use client'
import { trackEvent } from "@/utils/track";
import Link from "next/link";
import { useEffect } from "react";

export default function B() {
    useEffect(() => {
        trackEvent('enter_b')
    }, [])
    return <div>
        <h2 style={{fontSize: '20px', borderBottom: '1px solid blue'}}>B</h2>
        <div>
            <Link href="/a">To A</Link>
        </div>
    </div>
}