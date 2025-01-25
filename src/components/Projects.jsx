import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles"; // Ensure this is correctly imported
import { projects } from "../constants"; // Ensure the correct data structure in your constants
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ProjectCard = ({ project }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={project.date}
      iconStyle={{ background: project.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={project.icon}
            alt={project.title}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{project.title}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
          {project.company_name}
        </p>
      </div>

      {/* Display the project image */}
      <div className="my-5">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[200px] object-cover rounded-lg"
        />
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {project.points.map((point, index) => (
          <li
            key={`project-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* Fallback styling if styles.sectionSubText or styles.sectionHeadText are not working */}
        <p className={`${styles.sectionSubText || 'text-gray-500'} text-center`}>
          What I have worked on
        </p>
        <h2 className={`${styles.sectionHeadText || 'text-3xl font-bold text-white'} text-center`}>
          My Projects
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} project={project} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
