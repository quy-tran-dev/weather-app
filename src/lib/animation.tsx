// Định nghĩa các variants cho animation
const sidebarVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: "easeInOut" }
    }
};

const rightContentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: "easeInOut", delay: 0.15 } // Delay nhẹ để xuất hiện sau sidebar
    }
};

const cardListVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3, // Delay sau khi rightContentVariants hoàn thành
        }
    }
};

const cardItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" }
    }
};

 const getLeftSideVariants = (setIsClosing: React.Dispatch<React.SetStateAction<boolean>>) => ({
    open: { x: 0, transition: { type: 'spring', stiffness: 200, damping: 30 } },
    closed: {
        x: '-100%',
        transition: { duration: 0.3 },
        onAnimationComplete: () => setIsClosing(false),
    },
});

export { sidebarVariants, rightContentVariants, cardListVariants, cardItemVariants, getLeftSideVariants };