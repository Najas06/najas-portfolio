import Globe from "react-globe.gl";
import Button from "../components/Button";
const About = () => {
  return (
    <section className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full ">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I'm Najas Nazar</p>
              <p className="grid-subtext">
                With 1 year of experience, I have honed my skills in front end
                and back end development, with a focus on UI/UX design websites.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I Specialize in JavaScript/TypeScript with a focus on React and
                Next.js.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>
            <div>
              <p className="grid-headtext">
                I'm currently working on the following projects
              </p>
              <p className="grid-subtext">I'm based in India, with remote work.</p>
              <Button name={'Contact Me'} isBeam containerClass={`w-full mt-10`}/>
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
        <div className="grid-container">
        <img src="/assets/grid3.png" alt="grid-3" className="" />
        </div>
        </div>
      </div>
    </section>
  );
};

export default About;
