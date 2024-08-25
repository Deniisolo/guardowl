import Lesly from "../../pics/Lesly.jpeg";
import Natali from "../../pics/Natali.jpeg";
import Shirley from "../../pics/Shirley.jpeg";
import Jair from "../../pics/Jair.jpeg";
import Christopher from "../../pics/Christopher.jpeg";
import Sofia from "../../pics/Sofia.jpeg";
import Marianela from "../../pics/Marianela.jpeg";
import Angello from "../../pics/Angello.jpeg";
import Denis from "../../pics/Denis.jpeg";
import { FaLinkedinIn } from "react-icons/fa";
import Nav from "../../components/Nav";

export default function Team(){
    return <main className="w-full min-h-screen bg-customBg ">
     <Nav />
     <div className="w-full min-h-screen flex flex-col items-center justify-start gap-10 pt-10 bg-customBg">
    <h1 className="text-4xl font-extrabold leading-none tracking-tight text-customText mt-5 ">
      Team
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <div className="flex items-center gap-8 bg-white h-24 w-80 justify-center rounded-lg shadow-lg">
        <img className="w-14 h-14 rounded-full" src={Lesly.src} alt="" />
        <div className="font-medium text-white font-montserrat">
          <div className="text-customText  font-bold">Lesly Samaritano Ayala</div>
          <div className="text-sm text-white-500 text-customText font-light ">Jr Flutter Developer</div>

          <a
            href="https://www.linkedin.com/in/leslysamaritano/"
            className=" flex  text-sm text-white-500 gap-2 font-montserrat text-customText"
          >
            <FaLinkedinIn size={20} />
            @Leslysamaritano
          </a>
        </div>
      </div>
      <div className="flex items-center gap-8 bg-white h-24 w-80 justify-center rounded-lg shadow-lg">
        <img className="w-14 h-14 rounded-full" src={Natali.src} alt="" />
        <div className="text-customText font-medium font-montserrat">
          <div className="text-customText  font-bold">Lenina Natali Lujan</div>
          <div className="text-sm text-white-500 font-montserrat">
            Data Scientits Specialist
          </div>

          <a
            href="https://www.linkedin.com/in/natali-lujan-allende/"
            className=" flex  text-sm text-white-500 gap-2 font-montserrat"
          >
            <FaLinkedinIn size={20} />
            @natali-lujan-allende
          </a>
        </div>
      </div>
      <div className="flex items-center gap-8 bg-white h-24 w-80 justify-center rounded-lg shadow-lg">
        <img className="w-14 h-14 rounded-full" src={Shirley.src} alt="" />
        <div className="text-customText font-medium font-montserrat">
          <div className="text-customText  font-bold">Shirley Madeley Sosa </div>
          <div className="text-sm text-white-500 font-montserrat">
            UX Designer
          </div>

          <a
            href="https://www.linkedin.com/in/shirsosa/"
            className=" flex  text-sm text-white-500 gap-2 font-montserrat"
          >
            <FaLinkedinIn size={20} />
            @shirsosa
          </a>
        </div>
      </div>
      <div className="flex items-center gap-8 bg-white h-24 w-80 justify-center rounded-lg shadow-lg">
        <img className="w-14 h-14 rounded-full" src={Jair.src} alt="" />
        <div className="text-customText font-medium font-montserrat">
          <div className="text-customText  font-bold">Jair Conislla Bocangel</div>
          <div className="text-sm text-white-500 font-montserrat">
            Sr Software Developer
          </div>

          <a
            href="https://www.linkedin.com/in/jair-pool-conislla-bocangel-a6931579/"
            className=" flex  text-sm text-white-500 gap-2 font-montserrat"
          >
            <FaLinkedinIn size={20} />
            @jair-pool-conislla...
          </a>
        </div>
      </div>
      <div className="flex items-center gap-8 bg-white h-24 w-80 justify-center rounded-lg shadow-lg">
        <img className="w-14 h-14 rounded-full" src={Christopher.src} alt="" />
        <div className="text-customText font-medium font-montserrat">
          <div className="text-customText  font-bold">Christopher Bobadilla P</div>
          <div className="text-sm text-white-500 font-montserrat">
            Flutter Developer
          </div>

          <a
            href="https://www.linkedin.com/in/christopher-bobadilla-plasencia/"
            className=" flex  text-sm text-white-500 gap-2 font-montserrat"
          >
            <FaLinkedinIn size={20} />
            @christopher-bobadilla...
          </a>
        </div>
      </div>
      <div className="flex items-center gap-8 bg-white h-24 w-80 justify-center rounded-lg shadow-lg">
        <img className="w-14 h-14 rounded-full" src={Sofia.src} alt="" />
        <div className="text-customText font-medium font-montserrat">
          <div className="text-customText  font-bold">Sofia Chuquin</div>
          <div className="text-sm text-white-500 font-montserrat">
            Sr Software Engineer
          </div>

          <a
            href="https://www.linkedin.com/in/sofiachuquin/"
            className=" flex  text-sm text-white-500 gap-2 font-montserrat"
          >
            <FaLinkedinIn size={20} />
            @sofiachuquin
          </a>
        </div>
      </div>
      <div className="flex items-center gap-8 bg-white h-24 w-80 justify-center rounded-lg shadow-lg">
        <img className="w-14 h-14 rounded-full" src={Marianela.src} alt="" />
        <div className="text-customText font-medium font-montserrat">
          <div className="text-customText  font-bold">Marianela Araoz Z</div>
          <div className="text-sm text-white-500">UX/UI, UXR Designer</div>

          <a
            href="https://www.linkedin.com/in/marianela-araoz-zambrano-6b8715a2/"
            className=" flex  text-sm text-white-500 gap-2"
          >
            <FaLinkedinIn size={20} />
            @marianela-araoz...
          </a>
        </div>
      </div>
      <div className="flex items-center gap-8 bg-white h-24 w-80 justify-center rounded-lg shadow-lg">
        <img className="w-14 h-14 rounded-full" src={Angello.src} alt="" />
        <div className="text-customText font-medium font-montserrat">
          <div className="text-customText  font-bold">Angello Custodio T</div>
          <div className="text-sm text-white-500">Pricing Insight Specialist</div>

          <a
            href="https://www.linkedin.com/in/angello-custodio/"
            className=" flex  text-sm text-white-500 gap-2"
          >
            <FaLinkedinIn size={20} />
            @angello-custodio
          </a>
        </div>
      </div>
      <div className="flex  gap-8 bg-white h-24 w-80 justify-center items-center rounded-lg shadow-lg">
        <img className="w-14 h-14 rounded-full" src={Denis.src} alt="" />
        <div className="text-customText font-medium font-montserrat">
          <div className="text-customText  font-bold">Denis Alvarez</div>
          <div className="text-sm text-white-500">Jr FrontEnd Developer</div>

          <a
            href="https://www.linkedin.com/in/denisolo/"
            className=" flex  text-sm text-white-500 gap-2"
          >
            <FaLinkedinIn size={20} />
            @Denisolo
          </a>
        </div>
      </div>
    </div>
  </div>
  </main>
}