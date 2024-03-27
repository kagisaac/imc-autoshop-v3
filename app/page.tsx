
import { CarDemo, Footer, Hero } from "@/components";
import NavBar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <NavBar/>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Hero/>
     <CarDemo />
    </main>
     <Footer/>
    </>
  );
}
