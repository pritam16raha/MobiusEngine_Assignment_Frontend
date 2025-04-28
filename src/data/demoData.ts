export const pricingPlans = [
  {
    id: 1,
    title: "Resume Rebuild",
    subtitle:
      "Crafted for senior to VP–level professionals ready for their next big step.",
    price: "$1000",
    billing: "one time",
    features: [
      "3× 30–min coaching",
      "Focused on storytelling, not just formatting",
      "Analyst + full application team on Pacific hours",
      "Tailored to your target industry, company, or role",
      "Direct work with our co–founder (ex–Google, JP Morgan)",
      "Executive coaching from UC Berkeley alum with 10+ yrs experience",
      "Resume Rebuild portfolio available upon request",
    ],
  },
  {
    id: 2,
    title: "Interview Prep",
    subtitle:
      "End-to-end service for senior leaders looking to maximize their opportunities.",
    price: "$500",
    billing: "one time",
    features: [
      "6× 30–min coaching sessions",
      "Full resume rebuild + LinkedIn update",
      "Custom cover letter creation",
      "1:1 strategy sessions with career experts",
      "Unlimited revisions for 30 days",
    ],
  },
];

export const subscriptionPlans = [
  {
    id: 1,
    title: "April Promo",
    price: "35",
    billingCycle: "week",
    features: [
      "Curated jobs from 1M+ listings, refreshed every 48 hours",
      "Up to 20 human-applied roles per week (no bots, no fluff — just real company sites)",
      "Need more? Add extra apps for just $1.5 each",
      "Your own dedicated application analyst",
      "Personalized with up to 10 filters & 5 job titles",
    ],
    isPopular: false,
  },
  {
    id: 2,
    title: "Starter",
    price: "50",
    billingCycle: "week",
    features: [
      "Everything in Plus",
      "Custom Resumes & Cover Letters",
      "20 fully customized applications/week",
      "Help with complex job searches",
      "Access to senior resume experts, Founder & Exec Coaches",
    ],
    isPopular: true,
  },
  {
    id: 3,
    title: "Plus",
    price: "300",
    billingCycle: "week",
    features: [
      "Unlimited applications",
      "1-on-1 personalized strategy sessions",
      "Priority handling & faster turnaround",
      "Resume review and optimization monthly",
    ],
    isPopular: false,
  },
];

export const chooseUsData = [
  {
    id: 1,
    icon: "/icons/hand.svg",
    title: "Tried, Tested, Trusted",
    description:
      "Built by folks with 40+ years in tech and hiring — we know the game, and we’ve got your back.",
  },
  {
    id: 2,
    icon: "/icons/profile.svg",
    title: "Real People, Real Help",
    description:
      "A hands-on team that actually cares — guiding you through every twist in your career path.",
  },
  {
    id: 3,
    icon: "/icons/star.svg",
    title: "Beat the Line",
    description:
      "We search, shortlist, and apply for you, so your name shows up first — every single day.",
  },
];

export const testimonials = [
  {
    id: 1,
    text: [
      "Holly is a ",
      { bold: "senior executive" },
      " who got over ",
      { bold: "10 job interviews" },
      " and an offer she accepted",
    ],
  },
  {
    id: 2,
    text: [
      "John transitioned into tech with the help of ",
      { bold: "strategic applications" },
      " and ",
      { bold: "expert coaching" },
    ],
  },
  {
    id: 3,
    text: [
      "Maria secured multiple offers after ",
      { bold: "personalized resume" },
      " and ",
      { bold: "interview prep services" },
    ],
  },
];


export const founders = [
  {
    imageSrc: "/image/ceo.png",
    name: "Ashwin",
    description: [
      "is the founder of mobiusengine.ai. He is an accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. With over 2 decades of experience at Google and JP Morgan, Ashwin held various product and GTM roles. Ashwin is an MBA holder from Yale University.",
      "Ashwin’s vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams.",
    ],
    linkedinUrl: "https://www.linkedin.com/in/ashwinprofile",
  },
  {
    imageSrc: "/image/nicole.png",
    name: "Nicole",
    description: [
      "is an Executive coach at Mobius specializing in resume builds and career advisory.",
      "With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, she has seen firsthand how the proper positioning opens doors. She takes a targeted, results-driven approach to help clients confidently stand out and land roles that truly match their skills and potential.",
    ],
    linkedinUrl: "https://www.linkedin.com/in/nicoleprofile",
  },
];