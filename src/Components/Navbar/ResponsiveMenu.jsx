import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"


export const ResponsiveMenu = ({open}) => {
  return <AnimatePresence mode="wait">
       {
        open && 
        <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
       transition={{ duration: 0.2 }}
        className="absolute top-28 left-0 w-full h-screen z-20 "
        >
            <div className="text-ul font-semibold uppercase bg-amber-700 text-amber-50 py-10 m-6 rounded-3xl">
                <ul className="flex flex-col items-center gap-11">
                    <Link to="/">Home</Link>
                    <Link to="/trainer">Trainer</Link>
                    <li>Program</li>
                    <li>Blogs</li>
                    <Link to="/pricing">Pricing</Link>
                </ul>
            </div>
        </motion.div>
       }
    </AnimatePresence>
    
  
}
