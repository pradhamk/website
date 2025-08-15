"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => setTime(
            new Date().toLocaleTimeString([], {
                hour: "numeric",
                minute: "2-digit",
            })
        );

        updateTime()
        const updateInterval = setInterval(updateTime, 1000);

        return () => clearInterval(updateInterval);
    }, [])

    return (
        <div className="w-full flex items-center justify-between px-10 sm:px-20 pt-8">
            <div className="space-x-2">
                <a href="/">
                    <span className="font-extrabold tracking-widest text-xl">PK.</span>
                </a>
                <span className="opacity-65 text-sm">{time}</span>
            </div>
            <a href="#" className="relative text-gray-400 cursor-not-allowed group">
                Blog
                <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 opacity-0 group-hover:opacity-100
                    bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg
                    transition-opacity whitespace-nowrap z-10"
                >
                    Coming Soon
                </span>
            </a>
        </div>
    )
}