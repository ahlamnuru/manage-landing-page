import type { Feature, Testimonial } from "../types";
import avatarAnisha from "../images/avatar-anisha.png";
import avatarAli from "../images/avatar-ali.png";
import avatarRichard from "../images/avatar-richard.png";
import avatarShanai from "../images/avatar-shanai.png";

// the links in the top menu
export const navLinks = ["Pricing", "Product", "About Us", "Careers", "Community"];

// the links in the footer, split in two columns
export const footerLinksLeft = ["Home", "Pricing", "Products", "About Us"];
export const footerLinksRight = ["Careers", "Community", "Privacy Policy"];

export const features: Feature[] = [
  {
    number: "01",
    title: "Track company-wide progress",
    description:
      "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
  },
  {
    number: "02",
    title: "Advanced built-in reports",
    description:
      "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
  },
  {
    number: "03",
    title: "Everything you need in one place",
    description:
      "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Anisha Li",
    avatar: avatarAnisha,
    quote:
      "Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
  },
  {
    id: 2,
    name: "Ali Bravo",
    avatar: avatarAli,
    quote:
      "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
  },
  {
    id: 3,
    name: "Richard Watts",
    avatar: avatarRichard,
    quote:
      "Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!",
  },
  {
    id: 4,
    name: "Shanai Gough",
    avatar: avatarShanai,
    quote:
      "Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.",
  },
];
