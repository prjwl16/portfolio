"use client";
import React, { useState, useEffect } from "react";

export const Footer = () => {
    const [year, setYear] = useState(2024); // Default fallback year

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <>
            <div className="p-4 text-center justify-center text-xs text-neutral-500 border-t border-neutral-100">
                <span className="font-semibold">{year} </span>
                &#8212; Vibe coded By Prajwal
            </div>
        </>
    );
};
