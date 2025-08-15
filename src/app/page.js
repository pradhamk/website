import HeroCard from "@/components/HeroCard";
import Navbar from "@/components/Navbar";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-items-center min-h-screen pb-24">
      <div className="fixed inset-0 w-full h-full pointer-events-none -z-10 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:50px_50px]"></div>
      
      <Navbar />

      <div className="flex flex-col pt-24 items-center justify-center mb-10">
        <div className="flex flex-col items-center justify-center">
          <span className="uppercase opacity-40 tracking-widest font-sans text-lg pb-2">Portfolio</span>
          <div className="w-full bg-white h-[0.05rem] mb-20"></div>
        </div>
      
        <h1 className="text-5xl font-semibold mb-6">Pradham K.</h1>
        <p className="w-1/2 text-center opacity-50 text-lg">
          University student with a passion for cybersecurity challenges and building innovative solutions through code.
        </p>
      </div>

      {/* Hero Cards */}
      <div className="flex flex-col lg:flex-row space-y-5 lg:space-x-5 lg:space-y-0 w-2/3">
        <HeroCard 
          number={"01"}
          title={"Student"}
          description={
            <>
              <p>
                Currently pursuing my degree in computer science at the <b>University of Michigan</b>.
              </p>
              <br />
              <ul className="list-disc pl-5 marker:text-white text-white">
                <li>Member of MHacks, UpRound Ventures, Michigan Blockchain, &amp; Wolvsec</li>
                <li>Won @ Ross Business+Tech Innovation Jam 2024 &amp; MHacks 2024</li>
              </ul>
            </>
          }
        />
        <HeroCard 
          number={"02"}
          title={"CTF Player"}
          description={
            <>
              <p>Competing in CTFs with <b>L3ak</b>, specializing in web and osint challenges. Currently learning more about hardware hacking and firmware reversing.</p>
            </>
          }
        />
        <HeroCard 
          number={"03"}
          title={"Developer"}
          description={
            <>
              <p>Proficient in JS/TS, Python, Rust, and C++. Developed a variety of Tauri (rust + js) and Next.js projects for hackathons. Explore my GitHub to see some of my work in action.</p>
            </>
          }
        />
      </div>


      {/* Socials */}
      <div className="fixed bottom-5 space-x-20 flex">
        <a
          href="mailto:email@pradhamk.com"
          className="flex items-center text-sm hover:opacity-60 transition-opacity cursor-pointer gap-x-1"
        >
          <Mail size={30} />
        </a>
        <a
          href="https://github.com/pradhamk"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-sm hover:opacity-60 transition-opacity cursor-pointer gap-x-1"
        >
          <Github size={30} />
        </a>
        <a
          href="https://linkedin.com/in/pradhamk"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-sm hover:opacity-60 transition-opacity cursor-pointer gap-x-1"
        >
          <Linkedin size={30} />
        </a>
      </div>
    </div>
  );
}
