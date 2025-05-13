import React from 'react'

export default function CardHeader({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={`w-full ${className}`}>{children}</div>
    )
}
