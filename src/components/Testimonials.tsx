import { testimonialsData } from '../data/content';

export default function Testimonials() {
  return (
    <section className="py-20 text-center bg-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-dark-blue mb-20">
        What they've said
      </h2>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 mb-12">
        {testimonialsData.map((item, idx) => (
          <div key={idx} className="bg-very-light-gray p-8 rounded-lg relative mt-6 flex flex-col items-center">
            <img src={item.avatar} alt={item.name} className="w-20 h-20 rounded-full absolute -top-10" />
            <h3 className="text-dark-blue font-bold text-lg mt-8 mb-4">{item.name}</h3>
            <p className="text-dark-grayish-blue text-sm leading-relaxed">"{item.text}"</p>
          </div>
        ))}
      </div>

      <button className="bg-bright-red text-white px-8 py-3 rounded-full font-medium shadow-lg shadow-bright-red/30 hover:opacity-80 transition-opacity mt-4">
        Get Started
      </button>
    </section>
  );
}