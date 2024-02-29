"use client";
import Link from "next/link";
import { useState } from "react";
import Icon from '@mui/material/Icon';
import { motion } from "framer-motion";

// icons
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import NavLink from "./navLink";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      backgroundColor: "#dbe2e9",
      rotate: 38,
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      backgroundColor: "#dbe2e9",
      rotate: -39,

    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className=" h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* links */}
      <div className="hidden md:flex gap-4 w-1/3 ">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
        
      </div>
      {/* logo */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center ">
        <Link
          href="/"
          className="text-sm bg-yellow-400 rounded-md p-1 font-semibold flex items-center justify-center "
        >
          <span className=" text-gray-900 mr-1 font-bold">Gambarov</span>
          <span className="w-12 h-8 rounded bg-gray-900 text-gray-300 flex items-center justify-center  font-bold">
            .dev
          </span>
        </Link>
      </div>

      {/* ICONS */}
      <div className=" hidden md:flex gap-4 w-1/3 ">
        <Link href="https://github.com/qambarov-f">
          <Icon component={GitHubIcon} width={24} height={24} />
        </Link>

        <Link href="https://www.facebook.com/feruz.qemberov/">
          <Icon component={FacebookRoundedIcon} width={24} height={24} />
        </Link>

        <Link href="https://www.instagram.com/qambarov.f/">
          <Icon component={InstagramIcon} width={24} height={24} />
        </Link>

        <Link href="https://www.linkedin.com/in/feyruz-gambarov-3136b5247/">
          <Icon component={LinkedInIcon} width={24} height={24} />
        </Link>

        <Link href="https://wa.me/+994553281949">
          <Icon component={WhatsAppIcon} width={24} height={24} />
        </Link>

        <Link href="https://t.me/@QambarovFF">
          <Icon component={TelegramIcon} width={24} height={24} />
        </Link>
      </div>

      {/* responsive menu */}
      <div className="md:hidden">
        <button
          className="w-9 h-7 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className=" w-10 h-1 bg-yellow-400 rounded origin-left "
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className=" w-10 h-1 bg-yellow-400 rounded "
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className=" w-10 h-1 bg-yellow-400 rounded origin-left"
          ></motion.div>
        </button>

        {/* menu list */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className=" absolute top-0 left-0 w-screen h-screen bg-black text-gray-300 flex flex-col items-center justify-center gap-8 text-4xl  z-40"
          >
            {links.map((link) => (
              <motion.div variants={listItemVariants} key={link.title}>
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
