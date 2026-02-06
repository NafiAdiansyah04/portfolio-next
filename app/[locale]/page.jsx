'use client';

import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"
import Social from "@/components/Social"
import Photo from "@/components/Photo"
import Stats from "@/components/Stats"
import { useTranslations } from 'next-intl';

const Home = () => {
  const t = useTranslations('home');

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">{t('role')}</span>
            <h1 className="h1 mb-6">{t('greeting')} <br />
              <span className="text-accent">{t('name')}</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-primary-text/80">{t('description')}
              <br />
              <br />
              {t('descriptionPart2')}
            </p>
            {/* Button and Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8 ">
              <Button asChild variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <a href="https://drive.google.com/file/d/1kZb4C3Wi9vN9bQRVj-AhjZQXQVaTF3xc/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{t('downloadCV')}</span>
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
