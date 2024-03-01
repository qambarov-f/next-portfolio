"use client"

import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./navbar";
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Loading from "./Loading/Loading";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();
  const [loadingMessage, setLoadingMessage] = useState('');
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const messages = ["Salam", "Guten tag", "स्वागत हे", "Ciao", "Olá", "おい", "Hallå", "Hallo", "Bonjour"];
    let messageIndex = 0;

    const intervalId = setInterval(() => {
      if (messageIndex < messages.length) {
        setLoadingMessage(messages[messageIndex]);
        messageIndex += 1;
      } else {
        setLoadingComplete(true);
        clearInterval(intervalId);
      }
    }, 350);

    return () => clearInterval(intervalId);
  }, [pathName]); 

  if (!loadingComplete) {
    return <Loading loadingMessage={loadingMessage} />;
  }

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
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-gray-800 text-8xl cursor-default z-50 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {pathName.substring(1)}
        </motion.div>

        <motion.div
          className="fh-screen w-screen fixed bg-yellow-400 rounded-b-[100px] z-30 "
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.6 } }}
        />
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
