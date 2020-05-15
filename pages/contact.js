import { motion } from 'framer-motion'

const PageTransitions = {
  in: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 }
  },
  out: {
      opacity: 0,
      y: "100%"
  }
};

export default function Contact() {
    return (
      <motion.div initial="out" animate="in" exit="out" variants={ PageTransitions } id="contact-content" className="content">
        CONTACT
    </motion.div> 
  )
}