'use client';

import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Textarea } from "@components/ui/textarea";
import { useTranslations } from 'next-intl';

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

import { motion } from 'framer-motion';

const Contact = () => {
  const t = useTranslations('contact');
  const contactInfo = t.raw('info');

  // Icon mapping for contact info
  const iconMap = [
    <FaPhoneAlt />,
    <FaEnvelope />,
    <FaMapMarkedAlt />
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.5, delay: 2.4, ease: "easeIn" },
      }}
      className="py-6 "
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/*form*/}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              action="https://formsubmit.co/nafiadiansyah24@gmail.com"
              method="POST"
              className="flex flex-col gap-6 p-10 bg-secondary-bg rounded-xl"
            >
              {/* 🧠 Hidden inputs for FormSubmit configuration */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value="https://naffscg.my.id" />
              {/* ganti yourdomain.com dengan domain website kamu nanti */}

              <h3 className="text-4xl text-accent">{t('title')}</h3>
              <p className="text-primary-text/60">
                {t('description')}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="firstname" type="text" placeholder={t('form.firstname')} required />
                <Input name="lastname" type="text" placeholder={t('form.lastname')} required />
                <Input name="email" type="email" placeholder={t('form.email')} required />
                <Input name="phone" type="text" placeholder={t('form.phone')} />
              </div>

              <Select name="service">
                <SelectTrigger className="w-full px-6">
                  <SelectValue placeholder={t('form.selectService')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Web Development">{t('form.services.webDev')}</SelectItem>
                    <SelectItem value="Data Entry">{t('form.services.dataEntry')}</SelectItem>
                    <SelectItem value="Data Analysis">{t('form.services.dataAnalysis')}</SelectItem>
                    <SelectItem value="IoT Development">{t('form.services.iot')}</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                name="message"
                className="h-[200px]"
                placeholder={t('form.message')}
                required
              />

              <Button size="md" className="max-w-40" type="submit">
                {t('form.sendButton')}
              </Button>
            </form>

          </div>
          {/*info*/}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {contactInfo.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-secondary-bg text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{iconMap[index]}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-primary-text/60">{item.title}</p>
                      <h3 className="text-xl text-primary-text">{item.desc}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;