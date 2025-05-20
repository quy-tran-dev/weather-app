import React, { useRef, useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
interface HorizontalScrollSideProps {
    children: React.ReactNode;
}


const HorizontalScrollSide: React.FC<HorizontalScrollSideProps> = ({ children }) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    const childrenArray = React.Children.toArray(children);
    const numberOfChildren = childrenArray.length;
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const pin = gsap.fromTo(
            sectionRef.current,
            {
                translateX: 0,
            },
            {
                translateX: "-300vw",
                ease: "none",
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "2000 top",
                    scrub: 0.6,
                    pin: true,
                },
            }
        );
        return () => {
            pin.kill();
        };
    }, [children]);

    return (
        <div className="relative w-full overflow-hidden h-full">
            <div ref={triggerRef} className="relative w-full h-full overflow-hidden bg-white">
                <div
                    ref={sectionRef}
                    className={`flex flex-row absolute h-full  w-[calc(100vw*${numberOfChildren>0?numberOfChildren:1})]`}
                    style={{ willChange: 'transform' }}
                >
                    {React.Children.map(children, (child, index) => (
                        <div key={index} className="w-full flex-shrink-0 h-full">
                            {child}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HorizontalScrollSide;