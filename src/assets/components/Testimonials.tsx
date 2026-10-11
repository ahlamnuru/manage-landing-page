import { useRef, useState } from "react";
import Button from "./Button";
import { testimonials } from "../data/content";

function Testimonials() {

  const sliderRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  function getStep() {
    const slider = sliderRef.current;
    if (!slider || !slider.firstElementChild) return 1;
    const card = slider.firstElementChild as HTMLElement;
    return card.offsetWidth + 16;
  }


  function handleScroll() {
    const slider = sliderRef.current;
    if (!slider) return;
    setActiveIndex(Math.round(slider.scrollLeft / getStep()));
  }


  function goTo(index: number) {
    sliderRef.current?.scrollTo({ left: index * getStep(), behavior: "smooth" });
  }

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <h2 className="text-center text-3xl font-bold text-blue-950 md:text-4xl">
        What they’ve said
      </h2>

      <div className="mx-auto mt-8 max-w-6xl px-6 md:mt-12">
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pt-10 scrollbar-width:none [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((person) => (
            <figure
              key={person.id}
              className="relative w-full shrink-0 snap-start bg-gray-50 px-6 pb-10 pt-14 text-center md:w-[calc((100%-2rem)/3)]"
            >
              <img
                src={person.avatar}
                alt=""
                className="absolute -top-8 left-1/2 h-16 w-16 -translate-x-1/2 rounded-full"
              />
              <figcaption className="font-bold text-blue-950">{person.name}</figcaption>
              <blockquote className="mt-4 text-gray-400">“{person.quote}”</blockquote>
            </figure>
          ))}
        </div>

    
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((person, index) => (
            <button
              key={person.id}
              onClick={() => goTo(index)}
              aria-label={`Show testimonial ${index + 1}`}
              className={`h-2.5 w-2.5 rounded-full border border-orange-400 hover:bg-orange-300 ${
                activeIndex === index ? "bg-orange-400" : "bg-transparent"
              }`}
            ></button>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
         <Button href="#newsletter">Get Started</Button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
