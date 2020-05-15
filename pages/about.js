import { motion } from 'framer-motion'

const PageTransitions = {
  in: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 1 }
  },
  out: {
      opacity: 0,
      x: "100%",
      y: "100%"
  }
};

export default function About() {
    return (
      <motion.div initial="out" animate="in" exit="out" variants={ PageTransitions } id="about-content" className="content">
        ABOUT
      </motion.div> 
  )
}