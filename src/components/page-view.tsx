'use client'
import { trackPageView } from "@/utils/track"
import { useEffect } from "react"

export default function PageView() {
    useEffect(() => {
        trackPageView()
    }, [])
    return null
}