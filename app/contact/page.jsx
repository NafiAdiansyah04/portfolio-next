'use client';

import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Textarea } from "@components/ui/textarea";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    desc: "+62 857 4346 0518"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    desc: "nafiadiansyah24@gmail.com"
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Location",
    desc: "Sidoarjo, East Java"
  }
]

import {motion} from 'framer-motion';

const Contact = () => {
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
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              {/* 🧠 Hidden inputs for FormSubmit configuration */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value="http://localhost:3000" />
              {/* ganti yourdomain.com dengan domain website kamu nanti */}

              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                I am currently looking for any new opportunities, my inbox is always open.
                Whether you have a question or just want to say hi, I’ll try my best to get back to you!
              </p>

              {/* inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="firstname" type="text" placeholder="Firstname" required />
                <Input name="lastname" type="text" placeholder="Lastname" required />
                <Input name="email" type="email" placeholder="Email address" required />
                <Input name="phone" type="text" placeholder="Phone number" />
              </div>

              <Select name="service">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="Data Entry">Data Entry</SelectItem>
                    <SelectItem value="Data Analysis">Data Analysis</SelectItem>
                    <SelectItem value="IoT Development">IoT Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Type your message here."
                required
              />

              <Button size="md" className="max-w-40" type="submit">
                Send Message
              </Button>
            </form>

          </div>
          {/*info*/}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-nono mb-8 xl:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-6">
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                        <div className="text-[28px]">{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-xl">{item.desc}</h3>
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