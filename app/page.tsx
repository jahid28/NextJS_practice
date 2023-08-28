import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello</h1>
      <Image
        src="/aa_photo.jpg"
        width={200}
        height={200}
        alt="profile"
      />
      <Link href="/about">About</Link>
      hi there {process.env.SEC}


    </main>
  );
}
