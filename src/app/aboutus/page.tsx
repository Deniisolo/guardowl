import { YouTubeEmbed } from "@next/third-parties/google";
export default function Aboutus() {
  return (
    <main className="w-full min-h-screen bg-customBg ">
      <div className="flex flex-col lg:flex-row w-full min-h-screen ">
        <div className="flex flex-col p-20 justify-center items-center gap-11 order-1 lg:order-1">
          <h1 className="text-4xl leading-none tracking-tight text-customText mt-5 font-semibold ">¿Qué es Lorem Ipsum?</h1>
          <p className="font-light text-customText text-2xl">
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
            persona que se dedica a la imprenta) desconocido usó una galería de
            textos
          </p>
        </div>
        <div className="flex flex-col p-10 justify-center items-center w-full min-h-screen order-2 lg:order-2" >
          <YouTubeEmbed videoid="HxLwfq-ncdw" height={400} width={720} />
        </div>
      </div>
    </main>
  );
}
