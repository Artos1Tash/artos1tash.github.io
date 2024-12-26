import Link from "next/link";
import styles from "./page.module.css";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Home() {
  return (
    <div>
      {/* Welcome Section - Full Screen */}
      <div className={styles.main}>
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Hello, I&apos;m Artur
        </h1>
        <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
          Passionate photographer, cs student and rock climber with creative talents
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            href="/photography"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            View Photography
          </Link>
          <Link
            href="/portfolio"
            className="bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white font-bold py-2 px-4 rounded border border-blue-600"
          >
            See Portfolio
          </Link>
        </div>
        
        <div className="flex space-x-8 m-6">
          <a
            href="https://github.com/Artos1Tash"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            <FaGithub size={48} />
            <span className="block mt-2 text-sm"></span>
          </a>
          <a
            href="https://instagram.com/artur_tashbolotov"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300"
          >
            <FaInstagram size={48} />
            <span className="block mt-2 text-sm"></span>
          </a>
          <a
            href="https://leetcode.com/_Artos_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-300"
          >
            <SiLeetcode size={48} />
            <span className="block mt-2 text-sm"></span>
          </a>
        </div>
      </div>

    </div>
  );
}