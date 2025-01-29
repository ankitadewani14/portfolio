import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      className="flex justify-between items-center p-6 text-white z-20"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <ul className="flex gap-6">
        <li className="hover:text-blue-300 cursor-pointer">Home</li>
        <li className="hover:text-blue-300 cursor-pointer">Projects</li>
        <li className="hover:text-blue-300 cursor-pointer">Contact</li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
