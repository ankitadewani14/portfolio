import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="mt-12 flex flex-col gap-8">
          <div className="flex flex-col">
            <span className="text-white font-medium mb-4">My Name</span>
            <p className="bg-tertiary py-4 px-6 text-white rounded-lg">{`Ankita Dewani`}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-medium mb-4">My Email</span>
            <p className="bg-tertiary py-4 px-6 text-white rounded-lg">{`ankitadewani01@gmail.com`}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-medium mb-4">My Phone</span>
            <p className="bg-tertiary py-4 px-6 text-white rounded-lg">{`+91 95xxxxxxxx`}</p>
          </div>

          {/* LinkedIn and GitHub links */}
          <div className="flex flex-col">
            <span className="text-white font-medium mb-4">Connect with me</span>
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/ankita-dewani-a95369291/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-tertiary py-3 px-8 rounded-xl outline-none text-white font-bold"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/ankitadewani14"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-tertiary py-3 px-8 rounded-xl outline-none text-white font-bold"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
