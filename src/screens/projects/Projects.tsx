
import ProjectCard from './ProjectCard';
import { customProjects } from './utils';

export const Projects = () => {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center sm:px-1">
        <div className="flex flex-row items-center pb-6 pt-4 align-middle">
          <span className="html-tag">{'<b>'} </span>
          <p className="px-2 pb-2 text-xl font-bold text-primaryColor sm:text-2xl">
            My <span className="text-xl text-themePrimaryColor sm:text-2xl">Projects</span>
          </p>
          <span className="html-tag">{'</b>'}</span>
        </div>
      </div>
      <div className="mb-8">
        <div className="xxl:grid-cols-3 grid grid-cols-1 gap-6 md:grid-cols-2">
          {customProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
      <div className="mt-12 w-full">
        <i className="fond-light pr-4 text-lg text-primaryColor">More information</i>
        <a
          href="yash_resume.pdf"
          download
          title="Download CV"
          className="w-full sm:w-auto rounded px-12 py-4 text-center bg-sky-500 text-white hover:bg-sky-600"
        >
          Download CV
        </a>
      </div>
    </>
  );
};

export default Projects;
