import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";
import FormButton from "./button.form";

const Projects = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleProjects = (e, index) => {
    const newProjects = [...resumeData.projects];
    newProjects[index] = { ...newProjects[index], [e.target.name]: e.target.value };
    setResumeData({ ...resumeData, projects: newProjects });
  };

  const addProject = () => {
    setResumeData({
      ...resumeData,
      projects: [
        ...resumeData.projects,
        {
          name: "",
          link: "",
          description: "",
          keyAchievements: "",
          startYear: "",
          endYear: "",
        },
      ],
    });
  };

  const removeProject = (index) => {
    const newProjects = [...resumeData.projects];
    newProjects.splice(index, 1);
    setResumeData({ ...resumeData, projects: newProjects });
  };

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">Projects</h2>
      {resumeData.projects.map((project, index) => (
        <div key={index} className="f-col">
          {["name", "link", "description", "keyAchievements"].map((field) => (
            <input
              key={field}
              type="text"
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              name={field}
              className={`w-full other-input ${field === "description" ? "h-32" : "h-40"}`}
              value={project[field]}
              onChange={(e) => handleProjects(e, index)}
            />
          ))}
          <div className="flex-wrap-gap-2">
            {["startYear", "endYear"].map((field) => (
              <input
                key={field}
                type="date"
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                name={field}
                className="other-input"
                value={project[field]}
                onChange={(e) => handleProjects(e, index)}
              />
            ))}
          </div>
        </div>
      ))}
      <FormButton size={resumeData.projects.length} add={addProject} remove={removeProject} />
    </div>
  );
};

export default Projects;
