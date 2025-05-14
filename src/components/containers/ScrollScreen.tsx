import React, { type ReactNode, useRef, useEffect } from 'react';
import { motion, useInView, useAnimation, type Variants } from 'framer-motion';

interface ScrollItemProps {
  children: ReactNode;
  variants?: Variants;
}

const ScrollItem: React.FC<ScrollItemProps> = ({ children, variants }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const animationControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationControls.start('visible');
    } else {
      animationControls.start('hidden');
    }
  }, [isInView, animationControls]);

  return (
    <motion.div
      ref={ref}
      className="h-full w-full p-2"
      variants={variants}
      initial="hidden"
      animate={animationControls}
    >
      {children}
    </motion.div>
  );
};

interface ScrollScreenProps {
  children: ReactNode[];
  height?: string;
  snap?: 'mandatory' | 'proximity' | boolean; // Đảm bảo prop 'snap' vẫn còn
}

const ScrollScreen: React.FC<ScrollScreenProps> = ({ children, height = 'h-screen', snap = true }) => {
  return (
    <div
      className={`${height} overflow-y-scroll snap-y [&::-webkit-scrollbar]:hidden`}
      style={{ scrollSnapType: snap ? (typeof snap === 'boolean' ? 'y mandatory' : `y ${snap}`) : 'none' }}
    >
      {React.Children.map(children, (child, index) => {
        let childVariants: Variants | undefined;
        if (
          React.isValidElement(child) &&
          typeof child.props === 'object' &&
          child.props !== null &&
          'variants' in child.props
        ) {
          childVariants = child.props.variants as Variants;
        }

        return (
          <div key={index} className="h-full w-full snap-start">
            <ScrollItem variants={childVariants}>
              {child}
            </ScrollItem>
          </div>
        );
      })}
    </div>
  );
};

export default ScrollScreen;