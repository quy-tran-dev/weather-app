import React from 'react'

export default function CardContent({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={`w-full ${className}`}>{children}</div>
    )
}
