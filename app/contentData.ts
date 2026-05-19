// app/contentData.ts

export const clientContent = {
  brand: {
    logoText: "EloMotions",
    languages: "Available in English & Finnish",
    location: "Online Worldwide",
  },
  hero: {
    greeting: "Hi, I'm Eveliina,",
    headline: "I create space for you to breathe, grow, and align your life.",
    descriptionParagraphs: [
      "I partner with intuitive individuals, creatives, and professionals who are ready to navigate major life transitions, cultivate emotional intelligence, and build deeper internal clarity.",
      "Like the gentle, intentional transitions we practice at EloMotions, this collaborative coaching container is designed entirely around your pace. No rigid structures—just honest, powerful spaces for reflection.",
    ],
    profileImage: {
      // Maps correctly to /prototype/images/main.png on production build
      src: process.env.NODE_ENV === 'production' ? '/prototype/images/main.png' : '/images/main.png',
      alt: "Eveliina Elomaa - EloMotions Founder",
    },
  },
  coachingSection: {
    title: "Coaching",
    description: "We offer coaching for individuals and groups who want to elevate their quality of life, succeed in their goals and feel healthier and happier. Our top coaching services include Brave You -course and 1 on 1 Life Coaching.",
    tagline: "Explore your options and book your free discovery call!",
  },
  aboutMe: {
    name: "Eveliina Elomaa",
    title: "Founder & Coach",
    headingText: "The Mother of the 'Brave You' Concept",
    storyParagraphs: [
      "I've been through insecurities, rejections, and rebuilding my life — that's why I know what it feels like to be at that point where you ask: do I dare?",
      "In my coaching, I don't offer ready-made answers. I create a space where you can find yours. My work is based on both my professional education and the lessons life has taught me — both are needed."
    ],
    image: {
      // Maps correctly to /prototype/images/secondmain.png on production build
      src: process.env.NODE_ENV === 'production' ? '/prototype/images/secondmain.png' : '/images/secondmain.png',
      alt: "Eveliina Elomaa - Meditation and Reflection Space"
    }
  },
  booking: {
    tagline: "Limited Availability",
    title: "Book a 1-1 Strategy Session",
    description: "A private, 60-minute deep dive tailored entirely to your personal journey, growth, and alignment. Let's create your path forward together.",
    buttonText: "Secure Your Time Slot",
    subtext: "Free consultation • Instantly added to your calendar",
    calendlyUrl: "https://calendly.com/your-username/1-1-session"
  },
};