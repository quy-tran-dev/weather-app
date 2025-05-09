import React from 'react';

interface SemiCircleProgressBarProps {
    progress: number; // Value between 0 and 100
    radius?: number; // Radius of the full circle the semi-circle is based on
    strokeWidth?: number; // Width of the progress bar stroke
    color?: string; // Color of the progress bar (Tailwind text class, e.g., 'text-blue-500')
    bgColor?: string; // Color of the background stroke (Tailwind bg class, e.g., 'bg-gray-200')
    className?: string; // Additional class names for the container div
    showProgressText?: boolean; // Show percentage text
    progressTextSize?: string; // Size of the progress text (Tailwind text class, e.g., 'text-lg')
    progressTextColor?: string; // Color of the progress text (Tailwind text class, e.g., 'text-gray-700')
}

const SemiCircleProgressBar: React.FC<SemiCircleProgressBarProps> = ({
    progress,
    radius = 50,
    strokeWidth = 10,
    color = 'text-main-cloudy-color',
    bgColor = 'bg-gray-200',
    className,
    showProgressText = true,
    progressTextSize = 'text-lg',
    progressTextColor = 'text-gray-700',
}) => {
    const normalizedProgress = Math.max(0, Math.min(progress, 100)); // Ensure progress is within 0-100 range

    // Radius of the arc path itself (center of the stroke)
    const arcRadius = Math.max(0.1, radius - strokeWidth / 2); // Ensure arcRadius is positive
    const semiCircumference = Math.PI * arcRadius;

    // The strokeDashoffset determines how much of the stroke is hidden.
    // 0 progress means the entire stroke is hidden (offset = semiCircumference)
    // 100 progress means the entire stroke is visible (offset = 0)
    const strokeDashoffset = semiCircumference * (1 - normalizedProgress / 100);

    // Convert Tailwind color classes to actual SVG stroke/fill colors
    const getSvgColor = (tailwindClass: string) => {
        // This is a basic mapping. For a production app, consider a more robust solution
        // like parsing the Tailwind config or using a CSS-in-JS approach.

        // case 'text-main-cloudy-color': return 'rgba(181, 216, 254, 1)';
        // case 'text-main-rainy-color': return 'rgba(34, 58, 92, 1)';
        // case 'text-main-sunny-color': return 'rgba(249, 239, 154, 1)';
        // case 'text-main-scorching-sun-color': return 'rgba(255, 191, 97, 1)';
        // Added for text color example
        switch (tailwindClass) {
            case 'text-blue-500': return 'rgba(59, 130, 246, 1)';
            case 'text-green-500': return 'rgba(22, 163, 74, 1)';
            case 'text-red-500': return 'rgba(220, 38, 38, 1)';
            case 'text-yellow-500': return 'rgba(252, 211, 77, 1)';
            case 'text-gray-700': return 'rgba(55, 65, 81, 1)';
            case 'text-gray-500': return 'rgba(107, 114, 128, 1 )';
            case 'text-main-cloudy-color': return 'rgba(181, 216, 254, 1)';
            case 'text-main-rainy-color': return 'rgba(34, 58, 92, 1)';
            case 'text-main-sunny-color': return 'rgba(249, 239, 154, 1)';
            case 'text-main-scorching-sun-color': return 'rgba(255, 191, 97, 1)';
            // Added for text color example
            default: return 'rgba(0, 0, 0, 1)'; // Default to black
        }
    };

    const getSvgBgColor = (tailwindClass: string) => {
        // Basic mapping for background colors
        switch (tailwindClass) {
            case 'bg-gray-200': return 'rgba(229, 231, 235, 1)';
            case 'bg-gray-300': return 'rgba(209, 213, 219, 1)';
            default: return 'rgba(243, 244, 246, 1)'; // Default light gray
        }
    }


    const strokeColor = getSvgColor(color);
    const backgroundStrokeColor = getSvgBgColor(bgColor);
    // const textColor = getSvgColor(progressTextColor);


    // Calculate SVG dimensions and path coordinates
    // The SVG height needs to accommodate the semicircle arc and stroke width.
    // We position the base of the semicircle diameter at the bottom of the SVG.
    // The center of the conceptual full circle is at (radius, radius).
    // The arc starts at (radius - arcRadius, radius) and ends at (radius + arcRadius, radius)
    // which simplifies to (strokeWidth/2, radius) and (2*radius - strokeWidth/2, radius).
    // We draw the upper arc (sweep-flag 1).
    const startX = strokeWidth / 2;
    const startY = radius;
    const endX = 2 * radius - strokeWidth / 2;
    const endY = radius;

    const semiCirclePath = `M ${startX},${startY} A ${arcRadius},${arcRadius} 0 0,1 ${endX},${endY}`;

    // The viewBox should encompass the area where the semicircle and its stroke lie.
    // X goes from 0 to 2*radius.
    // Y goes from (radius - arcRadius - strokeWidth/2) to (radius + strokeWidth/2)
    // (radius - arcRadius - strokeWidth/2) = radius - (radius - strokeWidth/2) - strokeWidth/2 = 0
    // (radius + strokeWidth/2)
    const viewBox = `0 0 ${radius * 2} ${radius + strokeWidth / 2}`;


    return (
        <div className={"flex flex-col items-center justify-center relative" + (className || "")} style={{ width: radius * 2 }}>
            <svg
                width={radius * 2}
                height={radius + strokeWidth / 2}
                viewBox={viewBox} // Use viewBox for better scaling
            >
                {/* Background Arc */}
                <path
                    d={semiCirclePath}
                    stroke={backgroundStrokeColor}
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    strokeLinecap="round"
                    style={{
                        strokeDasharray: semiCircumference,
                        strokeDashoffset: 0, // Background is always fully visible
                    }}
                />

                {/* Progress Arc */}
                <path
                    d={semiCirclePath}
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    strokeLinecap="round"
                    style={{
                        strokeDasharray: semiCircumference,
                        strokeDashoffset: strokeDashoffset,
                        transition: 'stroke-dashoffset 0.3s ease', // Add smooth transition
                    }}
                />
            </svg>
            {/* Đây là div chứa text phần trăm */}

            {showProgressText && (
                <div className={`${progressTextSize} ${progressTextColor} absolute bottom-0 font-medium mt-2`}>
                    {Math.round(normalizedProgress)}%
                </div>
            )}
        </div>
    );
};

export default SemiCircleProgressBar;