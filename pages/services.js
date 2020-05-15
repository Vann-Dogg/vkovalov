import { motion } from 'framer-motion'

const PageVariants = {
    in: {
        opacity: 1,
        x: 0
    },
    out: {
        opacity: 0,
        x: "100%"
    }
  };
  
  const PageTransition = {
    type: "tween",
    ease: "circInOut",
    duration: 1
  }

export default function Services() {
    return (
        <motion.div initial="out" animate="in" exit="out" transition={ PageTransition } variants={ PageVariants } id="services-content" className="content">
            SERVICES
        </motion.div> 
    )
}