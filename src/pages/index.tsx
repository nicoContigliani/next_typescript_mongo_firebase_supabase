import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Counter from "@/components/TestReduxCounter/Counter";
import { useMongoDbConnection } from "../../hooks/useMongoDbConnection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const { isConnected, error, isLoading, verifyConnection } = useMongoDbConnection();

  const verifiConnection = () => {
    verifyConnection()
  }




  return (
    <>
      <div>
        <button onClick={verifiConnection}>
          prueba de conexión
        </button>
        <Counter />
      </div>
    </>
  );
}
