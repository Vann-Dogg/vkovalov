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

export default function About() {
    return (
      <motion.div initial="out" animate="in" exit="out" transition={ PageTransition } variants={ PageVariants } id="about-content" className="content">
        ABOUT
      </motion.div> 
  )
}