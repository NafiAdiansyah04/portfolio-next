import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"
import Social from "@/components/Social"
import Photo from "@/components/Photo"
import Stats from "@/components/Stats"

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Website Developer</span>
            <h1 className="h1 mb-6">Hello I'm <br />
              <span className="text-accent">Moh. Alim Nafi' Adiansyah</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">Web Developer with experience since 2022, specializing in the MERN Stack and Next.js. Experienced in building functional, responsive, and scalable web applications.
              <br />
              <br />
              In addition to development, I have hands-on experience in Manual Quality Control (QC) Testing, ensuring application quality through test case execution, bug identification, and collaboration with development teams. Proficient in JavaScript, HTML/CSS, SQL, and committed to delivering reliable and high-quality digital solutions.
            </p>
            {/* Button and Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8 ">
              <Button asChild variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <a href="https://drive.google.com/file/d/1kZb4C3Wi9vN9bQRVj-AhjZQXQVaTF3xc/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </a>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
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
