import { useState, FormEvent } from 'react';
import { validateEmail } from '../utils/validateEmail';

export default function CallToAction() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setSuccess(true);
      setError(false);
      setEmail('');
    } else {
      setError(true);
      setSuccess(false);
    }
  };

  return (
    <section className="bg-bright-red py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Banner Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center md:text-left max-w-xl">
          Simplify how your team works today.
        </h2>

        {/* Signup Form with Validation */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 w-full md:w-auto relative">
          <div className="flex flex-col w-full sm:w-auto">
            <input
              type="text"
              placeholder="Updates in your inbox..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`bg-white px-6 py-3 rounded-full text-sm focus:outline-none w-full sm:w-85 ${
                error ? 'border-2 border-white' : ''
              }`}
            />
            {error && (
              <span className="text-white text-xs italic mt-1 ml-6">
                Please insert a valid email address
              </span>
            )}
            {success && (
              <span className="text-white text-xs italic mt-1 ml-6">
                Thank you for subscribing!
              </span>
            )}
          </div>
          <button
            type="submit"
            className="bg-dark-blue text-white px-8 py-3 rounded-full font-medium hover:bg-dark-blue/90 transition-all shadow-md cursor-pointer"
          >
            Go
          </button>
        </form>

      </div>
    </section>
  );
}