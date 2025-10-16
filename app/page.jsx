import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"
import Social from "@/components/Social"
import Photo from "@/components/Photo"
import Stats  from "@/components/Stats"

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        {/* Text */}
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl">Website Developer</span>
          <h1 className="h1 mb-6">Hello I'm <br/>
          <span className="text-accent">Moh. Alim Nafi' Adiansyah</span>
          </h1>
          <p className="max-w-[500px] mb-9 text-white/80">I am an Informatics Engineering graduate from Universitas Maarif Hasyim Latif. Specializing in the MERN Stack (MongoDB, Express.js, React, Node.js) and holding a GPA of 3.54/4.00 , I possess a deep understanding of application and website development. I have been working as a Freelance Web Developer since 2022 , skilled in designing and developing various functional and responsive websites. My core technical skills include JavaScript, HTML/CSS, and SQL , and I am actively involved in an organization as the Communication and Information Division for Himatika Umaha
          </p>
          {/* Button and Socials */}
          <div className="flex flex-col xl:flex-row items-center gap-8 ">
            <Button asChild variant="outline" size="lg" className="uppercase flex items-center gap-2">
              <a href="https://drive.google.com/file/d/1oDhg0FxlMDlclHftBpOhuytNpPS2vomX/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
              <span>Download CV</span>
              <FiDownload className="text-xl" />
            </a>  
            </Button>
            <div className="mb-8 xl:mb-0">
              <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
            </div>
          </div>
        </div>
        {/* Photo */}
        <div className="order-1 xl:order-none mb-8 xl:mb-0 ">
          <Photo />
        </div>
      </div>
      </div>
      <Stats />
      </section>
  )
}

export default Home
