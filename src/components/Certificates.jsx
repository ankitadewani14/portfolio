import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { certificates } from "../constants"; // Import certificates from index.js in constants
import { github } from "../assets"; 
import { styles } from "../styles";
import { textVariant } from "../utils/motion";  // Importing textVariant function


// Certificates Component
const Certificates = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Certificates</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following are the certificates I have earned.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {certificates.map((certificate, index) => (
          <motion.div
            key={`certificate-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.5 }}
          >
            <Tilt
              tiltMaxAngleX={45}
              tiltMaxAngleY={45}
              scale={1}
              transitionSpeed={450}
              className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
            >
              <div className="relative w-full h-[230px]">
                <img
                  src={certificate.image}
                  alt="certificate_image"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                  <div
                    onClick={() => window.open(certificate.source_code_link, "_blank")}
                    className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                  >
                    <img
                      src={github}
                      alt="source code"
                      className="w-1/2 h-1/2 object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">{certificate.name}</h3>
                <p className="mt-2 text-secondary text-[14px]">{certificate.description}</p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {certificate.tags.map((tag) => (
                  <p key={`${certificate.name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
                    #{tag.name}
                  </p>
                ))}
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certificates, "certificates");
