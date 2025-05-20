import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import type { ReactNode } from 'react';

interface DynamicPopupProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    direction: 'bottom-top' | 'top-bottom' | 'left-right' | 'right-left';
    hasOverlay?: boolean; // Thêm prop tùy chọn cho lớp phủ
    overlayClassName?: string; // Thêm prop tùy chọn cho class của lớp phủ
}

const DynamicPopup: React.FC<DynamicPopupProps> = ({
    isOpen,
    onClose,
    children,
    direction,
    hasOverlay = true, // Mặc định có lớp phủ
    overlayClassName = 'fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)] bg-opacity-50 z-40', // Class mặc định cho lớp phủ
}) => {
    const popupVariants = {
        'bottom-top': {
            initial: { y: '100%', opacity: 0 },
            animate: { y: '0%', opacity: 1 },
            exit: { y: '100%', opacity: 0 },
        },
        'top-bottom': {
            initial: { y: '-100%', opacity: 0 },
            animate: { y: '0%', opacity: 1 },
            exit: { y: '-100%', opacity: 0 },
        },
        'left-right': {
            initial: { x: '-100%', opacity: 0 },
            animate: { x: '0%', opacity: 1 },
            exit: { x: '-100%', opacity: 0 },
        },
        'right-left': {
            initial: { x: '100%', opacity: 0 },
            animate: { x: '0%', opacity: 1 },
            exit: { x: '100%', opacity: 0 },
        },
    };

    const selectedVariants = popupVariants[direction] || popupVariants['bottom-top'];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {hasOverlay && (
                        <motion.div
                            className={overlayClassName}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={onClose} // Đóng popup khi click vào lớp phủ
                        />
                    )}
                    <motion.div
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-md z-50 overflow-auto"
                        style={{ width: '90vw', height: '70vh' }}
                        variants={selectedVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ type: 'spring', damping: 20, stiffness: 100 }}
                        // onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-2 right-2 z-20 text-gray-500 hover:text-gray-700 focus:outline-none"
                        >
                           <button className="text-lg text-gray-600 transition-colors duration-300 hover:scale-110">
                                <X className=" cursor-pointer hover:scale-110 hover:text-red-400 transition duration-300" />
                            </button>
                        </button>
                        <div className="p-6 h-full">
                            {children}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default DynamicPopup;