import {useMediaQuery} from 'react-responsive';
import {mediaBreakpoints} from 'responsive';

export const About = () => {
  const mobileAndTablet = useMediaQuery({
    query: `(max-width: ${mediaBreakpoints.xl}px)`,
  });

  return (
      <div className="flex h-auto w-full items-center overflow-hidden text-primaryColor">
        <div className="w-full xl:w-2/3">
          <span className="html-tag">{'<html>'}</span>
          <br />
          <span className="html-tag pl-4">{'<body>'}</span>
          <br />
          <span className="html-tag pl-8">{'<h1>'}</span>

          <h1 className="pb-2 pl-10 text-3xl font-bold text-primaryColor opacity-70 sm:text-5xl">Hello,</h1>

          <span className="html-tag pl-8">{'</h1>'}</span>
          <br />
          <span className="html-tag pl-8">{'<p>'}</span>
          <p className="pb-4 pl-10 text-lg">
            My name is <span className="text-lg text-themePrimaryColor">Yash Sharma</span> and I am a{' '}
            <span className="text-lg text-themePrimaryColor">Fresher Web and Software Developer</span>.
          </p>
          <p className="pb-4 pl-10 text-lg">
            I have a solid foundation in{' '}
            <span className="text-lg text-themePrimaryColor">JavaScript, HTML, CSS, and basic React and Node.js</span> technologies.
          </p>
          <p className="pb-4 pl-10 text-lg">
            Additionally, I have knowledge of programming languages such as{' '}
            <span className="text-lg text-themePrimaryColor">C++, Python basics, and Java core</span>.
          </p>
          <p className="pb-4 pl-10 text-lg">
            During my academic projects and internships, I have gained experience in developing{' '}
            <span className="text-lg text-themePrimaryColor">
              responsive and user-friendly web applications
            </span>
            . I am eager to apply my skills in a professional setting and continue learning.
          </p>
          <p className="pb-4 pl-10 text-lg">
            I am passionate about{' '}
            <span className="text-lg text-themePrimaryColor">
              creating impactful software solutions
            </span>{' '}
            and am dedicated to enhancing my skills through continuous learning and hands-on experience.
          </p>
          <span className="html-tag pl-8">{'</p>'}</span>
          <br />
          <span className="html-tag pl-4">{'</body>'}</span>
          <br />
          <span className="html-tag pl-2">{'</html>'}</span>
          {mobileAndTablet && (
            <div className="m-auto h-[200px] w-[300px] bg-about bg-cover sm:h-[400px] sm:w-[500px]"></div>
          )}
        </div>
        {!mobileAndTablet && <div className="h-[300px] w-[300px] bg-about bg-cover sm:h-[400px] sm:w-[400px]"></div>}
      </div>


  );
};

export default About;
