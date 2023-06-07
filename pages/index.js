import Head from "next/head";
import styles from "../styles/Home.module.css";

import Dashboard from "../components/Dashboard";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    console.log("status", status);
    if (!session && status === "unauthenticated") {
      router.push("/login");
    }
  }, [session, status, router]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{status == "loading" ? <div>Loading...</div> : <Dashboard />}</main>
    </div>
  );
}
