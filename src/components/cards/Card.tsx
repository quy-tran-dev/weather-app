import React from 'react'

export default function Card({ children ,className}: { children: React.ReactNode; className?: string | null }) {
    return (
        <div className={`bg-white rounded-xl shadow-md p-4 ${className}`}>{children}</div>
    )
}
