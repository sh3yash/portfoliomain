
import {AppContext, AppContextInterface} from 'providers/application';
import {useContext} from 'react';
// import {useLocation, useNavigate} from 'react-router-dom';
import {TypeAnimation} from 'react-type-animation';


export const Home = () => {
  // const navigate = useNavigate();
  // const {pathname} = useLocation();
  const {setPdfPreviewerOpen} = useContext(AppContext) as AppContextInterface;

  const handleShowCV = () => {
    setPdfPreviewerOpen(true);
    window.open('yash_resume.pdf')
  };

  return (
    <div className="flex flex-col-reverse items-center justify-center sm:px-10 lg:pb-40 xl:flex-row xl:pb-0 xl:pt-20">
      <div className="flex w-full flex-col items-center py-10 text-xl xl:w-1/2 xl:items-end">
        <div className="w-fit">
          <p className="text-xl text-themePrimaryColor">
            <span className="span">{'<'}</span>Hi 👋 my name is
          </p>

          <h1 className="pt-2 text-3xl font-bold text-primaryColor opacity-70 sm:text-5xl">
            Yash Sharma <span className="text-3xl font-extrabold text-themePrimaryColor sm:text-5xl">{'/>'}</span>{' '}
          </h1>
          <TypeAnimation
            sequence={['Full-Stack Developer', 1000, 'React Developer', 1000, 'Software Developer', 1000]}
            wrapper="span"
            speed={1}
            style={{
              paddingTop: '8px',
              fontWeight: '300',
              fontSize: '1.5rem',
              color: '#768390',
              display: 'inline-block',
            }}
            repeat={Infinity}
          />
          <div className="mt-10 flex w-full flex-col sm:flex-row">
            <a
              href="/path-to-your-cv/YourCV.pdf"
              download
              title="Download CV"
              className="w-full sm:w-auto rounded px-12 py-4 text-center bg-sky-500 text-white hover:bg-sky-600"
            >
              Download CV
            </a>
            <button
              title="open cv"
              className="mt-4 sm:mt-0 sm:ml-4 w-full sm:w-auto rounded px-12 py-4 text-center bg-gray-500 text-white hover:bg-gray-600"
              onClick={handleShowCV}
            >
              Open CV
            </button>
          </div>
        </div>
      </div>
      <div className="static: w-ful top-0 flex justify-center xl:relative xl:top-[-64px] xl:w-1/2 xl:pt-10">
        <img
          className="h-[300px] w-[215px] md:h-[400px] md:w-[286px] xl:h-[500px] xl:w-[358px]"
          loading="lazy"
          src="yash_total_remove.png"
          alt="myPhoto"
        />
      </div>
    </div>
  );
};

export default Home;
