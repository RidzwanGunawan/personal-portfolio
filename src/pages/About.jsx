import { skills, experiences } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import CallToAction from "../components/CallToAction";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm {""}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Ridzwan Gunawan
        </span>
      </h1>

      <div>
        <p className="mt-5 flex flex-col gap-3 text-slate-500 text-justify">
          A passionate student with a drive to create extraordinary web
          experiences. I specialize in frontend development, with a focus on
          HTML, CSS, and JavaScript, along with various libraries and
          frameworks. Currently, I'm pursuing my studies at Sangga Buana YPKP
          University in the Computer Science program. I enjoy blending appealing
          designs with intuitive functionality to craft engaging and
          user-friendly interfaces. Continuously enhancing my skills through
          online courses and personal projects is something I'm enthusiastic
          about.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-6 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Course Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Here, you will find the courses I have taken to improve my skills
            and knowledge in various fields. From programming to graphic design,
            I continue to learn and develop myself through these courses.
          </p>
        </div>

        <div className="mt-12 flex ">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium text-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center mr-3 gap-2 ">
                  <Link
                    to={experience.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 font-medium font-base"
                  >
                    See Certificate
                  </Link>
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain "
                  />
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CallToAction />
    </section>
  );
};

export default About;
