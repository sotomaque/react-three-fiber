import { styles } from '../styles';
import { ComputersCanvas } from '.';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] mx-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        {/* Circle / Line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* My Info */}
        <div className={`${styles.heroHeadText} text-white`}>
          <h1>
            Hi, I am <span className="text-[#915eff]">Enrique</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop web applications, <br className="sm:block hidden" />
            mobile apps, and backend services
          </p>
        </div>
      </div>

      {/* Computer Canvas */}
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
