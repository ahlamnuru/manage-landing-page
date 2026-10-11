import { features } from "../data/content";
import patternBg from "../images/bg-tablet-pattern.svg";

function Features() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* soft orange shape on the left side (desktop only) */}
      <img
        src={patternBg}
        alt=""
        className="absolute -left-72 top-40 -z-10 hidden w-[36rem] rotate-180 md:block"
      />

      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:gap-16">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-blue-950 md:text-4xl">
            What’s different about Manage?
          </h2>
          <p className="mt-6 text-gray-400 md:max-w-sm">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>

        <ul className="flex flex-col gap-10">
          {features.map((feature) => (
            <li key={feature.number} className="grid gap-4 md:grid-cols-[auto_1fr] md:gap-x-6 md:gap-y-3">
              {/* on mobile the number + title sit together in one pill-shaped bar,
                  on desktop they become two separate grid items */}
              <div className="flex items-center rounded-full bg-orange-50 md:contents">
                <span className="rounded-full bg-orange-400 px-6 py-2 font-bold text-white md:self-start">
                  {feature.number}
                </span>
                <h3 className="px-4 font-bold text-blue-950 md:self-center md:px-0">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-400 md:col-start-2">{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Features;
