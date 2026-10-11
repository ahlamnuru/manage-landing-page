import Button from "./Button";
import illustration from "../images/illustration-intro.svg";
import patternBg from "../images/bg-tablet-pattern.svg";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* the soft orange shape behind the illustration */}
      <img
        src={patternBg}
        alt=""
        className="absolute -right-24 -top-32 -z-10 w-[28rem] md:-right-10 md:-top-40 md:w-[44rem]"
      />

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 pb-16 md:flex-row-reverse md:gap-16 md:pb-28 md:pt-8">
        <img
          src={illustration}
          alt="Charts and statistics from the Manage app"
          className="w-full max-w-sm md:max-w-none md:flex-1 md:basis-1/2"
        />

        <div className="text-center md:flex-1 md:basis-1/2 md:text-left">
          <h1 className="text-4xl font-bold leading-tight text-blue-950 md:text-6xl md:leading-tight">
            Bring everyone together to build better products.
          </h1>
          <p className="mt-6 text-gray-400 md:max-w-sm">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <div className="mt-8">
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
