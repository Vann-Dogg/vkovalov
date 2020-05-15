import { motion } from 'framer-motion'

const PageTransitions = {
    in: {
        opacity: 1,
        x: 0,
        transition: { duration: 1 }
    },
    out: {
        opacity: 0,
        x: "100%"
    }
};

export default function Projects() {
    return (
        <motion.div initial="out" animate="in" exit="out" variants={ PageTransitions } id="projects-content" className="content">
            PROJECTS
        </motion.div> 
    )
}