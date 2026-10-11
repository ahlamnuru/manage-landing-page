import Button from "./Button";
import bgMobile from "../images/bg-simplify-section-mobile.svg";
import bgDesktop from "../images/bg-simplify-section-desktop.svg";

function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-orange-400">

      <img src={bgMobile} alt="" className="absolute inset-0 h-full w-full object-cover md:hidden" />
      <img src={bgDesktop} alt="" className="absolute inset-0 hidden h-full w-full object-cover md:block" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-16 text-center md:flex-row md:justify-between md:py-14 md:text-left">
        <h2 className="max-w-sm text-4xl font-bold leading-tight text-white md:text-4xl">
          Simplify how your team works today.
        </h2>
       <Button href="#newsletter">Get Started</Button>
      </div>
    </section>
  );
}

export default CallToAction;
