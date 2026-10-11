// one numbered feature in the "What's different about Manage?" section
export type Feature = {
  number: string;
  title: string;
  description: string;
};

// one person's quote in the testimonials slider
export type Testimonial = {
  id: number;
  name: string;
  avatar: string;
  quote: string;
};
