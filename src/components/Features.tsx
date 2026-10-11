import { featuresData } from '../data/content';

export default function Features() {
  return (
    <section className="relative overflow-hidden py-20 bg-[url('/images/bg-tablet-pattern.svg')] bg-no-repeat bg-[length:500px_500px] bg-[position:bottom_left_-250px]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-12">
        <div className="w-full md:w-5/12 text-center md:text-left space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-blue leading-tight">
            What's different about Manage?
          </h2>
          <p className="text-dark-grayish-blue max-w-sm leading-relaxed">
            Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.
          </p>
        </div>

        <div className="w-full md:w-6/12 flex flex-col space-y-8">
          {featuresData.map((item) => (
            <div key={item.id} className="space-y-2">
              <div className="flex items-center space-x-4 bg-very-pale-red md:bg-transparent rounded-l-full">
                <span className="bg-bright-red text-white px-4 py-2 rounded-full font-bold text-sm">
                  {item.id}
                </span>
                <h3 className="text-dark-blue font-bold text-base md:text-lg">{item.title}</h3>
              </div>
              <p className="text-dark-grayish-blue text-sm md:pl-16 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}