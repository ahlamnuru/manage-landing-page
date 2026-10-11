export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-6 pb-20 bg-[url('/images/bg-tablet-pattern.svg')] bg-no-repeat bg-[length:600px_600px] bg-[position:top_-100px_right_-150px]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-dark-blue leading-tight tracking-tight">
            Bring everyone together to build better products.
          </h1>
          <p className="text-dark-grayish-blue max-w-sm leading-relaxed">
            Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
          </p>
          <button className="bg-bright-red text-white px-8 py-3 rounded-full font-medium shadow-lg shadow-bright-red/30 hover:opacity-80 transition-opacity">
            Get Started
          </button>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img src="/images/illustration-intro.svg" alt="Intro Graphic" className="w-full max-w-lg" />
        </div>
      </div>
    </section>
  );
}