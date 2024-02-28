"use client"

import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";


const TransitionProvider = ({ children }) => {

    const pathName = usePathname();

    return (
      <AnimatePresence mode="wait">
        <div
          key={pathName}
          className="w-screen h-screen bg-gray-900 text-yellow-400"
        >
          <motion.div
            className="h-screen w-screen fixed bg-yellow-400 rounded-b-[100px] z-40"
            animate={{ height: "0vh" }}
            exit={{ height: "140vh" }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          <motion.div
            className="h-screen w-screen fixed bg-gray-400 rounded-t-[100px] bottom-0 z-30"
            initial={{ height: "140vh" }}
            animate={{ height: "0vh", transition: { delay: 2 } }}
          />
          <div className="h-24">
            <Navbar />
          </div>
          <div className="h-[calc(100vh-6rem)]">{children}</div>
        </div>
      </AnimatePresence>
    );
};

export default TransitionProvider