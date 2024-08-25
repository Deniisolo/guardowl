import Nav from "@/components/Nav";
import homephone from "../pics/homeimage.png";
import logoguard from "../pics/logoguardowl.png";
import logo from "../pics/logo.png";
import donwload from "../pics/downloadapp.png";
import Aboutus from "./aboutus/page";

export default function Home() {
  return (
    <main className="bg-customBg min-h-screen">
      <div className="flex justify-center items-center min-h-screen w-full">
        <section className="hidden md:flex justify-center items-center w-full md:w-3/4 lg:w-2/3">
          <div className="flex justify-center items-center w-full">
          <img
              src={homephone.src}
              alt="view phone app"
              className="block max-h-screen"
              style={{ maxWidth: "100%" }}
            />
          </div>
        </section>

        <section className="flex flex-col justify-center items-center text-center gap-4 w-full md:w-3/4 lg:w-2/3">

          <img
            src={logo.src}
            alt="logo name"
            style={{ width: "100px", display: "block", maxHeight: "100vh" }}
          />
          <img
            src={logoguard.src}
            alt="logo app"
            style={{ width: "200px", display: "block", maxHeight: "100vh" }}
          />
          <h2 className="font-light text-customText text-2xl w-80">
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de.
          </h2>
          <img
            src={donwload.src}
            alt="download app"
            style={{ width: "200px", display: "block", maxHeight: "100vh" }}
          />
        </section>
       
      </div>
      <Aboutus/>
    </main>
  );
}
