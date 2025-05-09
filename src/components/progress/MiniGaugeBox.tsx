import React, { useEffect, useRef, useState } from "react";

interface MiniGaugeProps {
    value: number; // current wind speed
    max?: number;
}

const MiniGauge: React.FC<MiniGaugeProps> = ({ value, max = 40 }) => {
    const needleRef = useRef<HTMLDivElement>(null);
    const [angle, setAngle] = useState(-90); // 🟢 Start từ -90° = value = 0

    useEffect(() => {
        const targetAngle = (value / max) * 180 - 90; // Scale về [-90, 90]
        setTimeout(() => {
            setAngle(targetAngle); // Animate từ -90 đến target
        }, 100);
    }, []);

    const ticks = [0, 5, 10, 20, 30, 40];

    return (
        <div className="bg-white rounded-xl p-4 shadow w-56 text-center relative">
            <div className="text-left text-sm text-gray-700 font-medium mb-1">Wind</div>
            <div className="relative flex items-center justify-center">
                {/* Gauge background */}
                <svg viewBox="0 0 200 100" className="w-48 h-24">
                    <path
                        d="M20 100 A80 80 0 0 1 180 100"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="10"
                    />
                    {/* Blue progress arc (static for now) */}
                    <path
                        d={`M20 100 A80 80 0 ${value > max / 2 ? 1 : 0} 1 ${100 + 80 * Math.cos((Math.PI * value) / max)} ${100 - 80 * Math.sin((Math.PI * value) / max)}`}
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="10"
                        strokeLinecap="round"
                    />
                    {/* Tick labels */}
                    {ticks.map((tick) => {
                        const rad = (tick / max) * Math.PI;
                        const x = 100 + Math.cos(rad - Math.PI) * 90;
                        const y = 100 + Math.sin(rad - Math.PI) * 90;
                        return (
                            <text
                                key={tick}
                                x={x}
                                y={y}
                                fontSize="10"
                                textAnchor="middle"
                                fill="#6b7280"
                            >
                                {tick}
                            </text>
                        );
                    })}
                </svg>

                {/* Needle */}
                <div
                    ref={needleRef}
                    className="absolute w-1 h-20 bg-blue-600 origin-bottom rounded-full transition-transform duration-1000 ease-out"
                    style={{ transform: `rotate(${angle}deg)` }}
                />

                {/* Center dot */}
                <div className="absolute w-3 h-3 bg-blue-600 rounded-full" />
            </div>

            {/* Value */}
            <div className="text-xl font-semibold mt-2">
                {value} <span className="text-sm text-gray-600">km/h</span>
            </div>
        </div>
    );
};

export default MiniGauge;
