import { motion } from 'framer-motion';
import { useIntersectionAnimation } from '../hooks';

export const AnimatingDiv = ({ children, ...props }) => {
  const { controls, ref } = useIntersectionAnimation();

  const variant = {
    hidden: { opacity: 0, translateX: -60 },
    visible: (custom) => ({
      opacity: 1,
      translateX: 0,
      duration: 1,
      transition: { delay: custom },
    }),
  };

  return (
    <motion.div
      ref={ref}
      variants={variant}
      initial='hidden'
      animate={controls}
      custom={0.5}
      {...props}
    >
      {children}
    </motion.div>
  );
};
