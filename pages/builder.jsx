import React, { useState, createContext, useContext } from "react";
import Language from "../components/form/lang.form";
import Meta from "../components/meta/tag";
import FormCP from "../components/form/panel.form";
import LoadUnload from "../components/form/cast-loader.form";
import Preview from "../components/preview/render.preview";
import SetDataSeed from "../components/utility/dataseed";
import SocialMedia from "../components/form/socialMedia.form";
import WorkExperience from "../components/form/experiences.form";
import Skill from "../components/form/skills.form";
import PersonalInformation from "../components/form/personal-info.form";
import Summary from "../components/form/summary.form";
import Projects from "../components/form/projects.form";
import Education from "../components/form/edu.form";
import dynamic from "next/dynamic";
import Certification from "../components/form/certs.form";

const ResumeContext = createContext(SetDataSeed);

// server side rendering
const Print = dynamic(() => import("../components/utility/renderPrint"), {
  ssr: false,
});

export default function Builder(props) {
  // resume data
  const [resumeData, setResumeData] = useState(SetDataSeed);

  // form hide/show
  const [formClose, setFormClose] = useState(false);

  // profile picture
  const handleProfilePicture = (e) => {
    const file = e.target.files[0];

    if (file instanceof Blob) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setResumeData({ ...resumeData, profilePicture: event.target.result });
      };
      reader.readAsDataURL(file);
    } else {
      console.error("Invalid file type");
    }
  };

  const handleChange = (e) => {
    setResumeData({ ...resumeData, [e.target.name]: e.target.value });
    console.log(resumeData);
  };

  return (
    <>
      <ResumeContext.Provider
        value={{
          resumeData,
          setResumeData,
          handleProfilePicture,
          handleChange,
        }}
      >
        <Meta
          title="NextJS Resume Builder"
          description="Coba NextJS"
          keywords="NextJS, WebPack, Bundle, TypeScript, JavaScript, Resume Builder"
        />
        <div className="f-col gap-4 md:flex-row justify-evenly max-w-7xl md:mx-auto md:h-screen">
          {!formClose && (
            <form className="p-2 bg-blue-600 exclude-print md:max-w-[40%] md:h-screen md:overflow-y-scroll">
              <LoadUnload/>
              <PersonalInformation />
              <SocialMedia />
              <Summary />
              <Education />
              <WorkExperience />
              <Projects />
              {
                resumeData.skills.map((skill, index) => (
                  <Skill
                    title={skill.title}
                    key={index}
                  />
                ))
              }
              <Language />
              <Certification />
            </form>
          )}
          <Preview />
        </div>
        <FormCP formClose={formClose} setFormClose={setFormClose} />
        <Print />
      </ResumeContext.Provider>
    </>
  );
}
export { ResumeContext };
