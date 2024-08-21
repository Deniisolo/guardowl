import Image from "next/image";
import Nav from "@/components/Nav";
import homephone from "../pics/homeimage.png"
import logoguard from "../pics/logoguardowl.png"
import logo from "../pics/logo.png"
import donwload from "../pics/downloadapp.png"
export default function Home() {
  return (
    <main className="bg-customBg min-h-screen p-8">
    <Nav />
    <div className="flex items-center ">
    <section className="mt-8">
      <img src={homephone.src} alt="view phone app" />
      
    </section>
    <section>
    <img src={logo.src} alt="logo name" 
     style={{ width: "100px", display: "block", maxHeight:"100vh"}}/>
    <img src={logoguard.src} alt="logo app" />
    <h2 className=" font-light text-customText text-2xl">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de.</h2>
    <img src={donwload.src} alt="donwload app" />
    </section>
    </div>
  </main>
  );
}
