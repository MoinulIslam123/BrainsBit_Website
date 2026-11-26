export interface TitleLine {
  text: string;
  accent: boolean; // true = brand blue
}

export interface ServiceItem {
  slug: string; // route: /services/<slug>
  navLabel: string;
  icon: string; // Font Awesome class
  short: string; // one-line summary for menus and headers
  titleLines: TitleLine[];
  text: string;
  scene: 'custom' | 'web' | 'mobile' | 'qa'; // which code-built visual to show
}

export interface FeatureItem {
  icon: string; // Font Awesome class
  title: string;
  text: string;
}

export const SERVICES: ServiceItem[] = [
  {
    slug: 'custom-software-development',
    navLabel: 'Custom Software Development',
    icon: 'fa-laptop-code',
    short: 'Software built around your business, from scratch.',
    titleLines: [{ text: 'Custom Software Development', accent: true }],
    text: 'BrainsBit helps you create diverse and complex software solutions for your business needs. Listening to your ideas, we implement and create custom software solutions from scratch, designed especially for your business. With BrainsBit, you get quality software and perfect service every time.',
    scene: 'custom',
  },
  {
    slug: 'web-application-development',
    navLabel: 'Web Application Development',
    icon: 'fa-globe',
    short: 'Modern web products on current frameworks.',
    titleLines: [{ text: 'Web Application Development', accent: true }],
    text: 'BrainsBit looks beyond conventional solutions to develop disruptive web products. Our skilled and dedicated web development team understands your needs and leverages the dynamism of modern web frameworks to create business-valued web applications.',
    scene: 'web',
  },
  {
    slug: 'mobile-application-development',
    navLabel: 'Mobile Application Development',
    icon: 'fa-mobile-screen-button',
    short: 'Native and cross-platform apps for iOS and Android.',
    titleLines: [
      { text: 'Mobile Application', accent: true },
      { text: 'Development', accent: true },
    ],
    text: 'Our expertise in custom mobile app development gives our clients the opportunity to pack incredible functionality into their customer’s hands. We develop apps that perform across different mobile devices and operating systems. We are experts at Swift/Objective-C to build native iOS apps and Java/Kotlin for native Android app development. For cross-platform and hybrid development our expertise include, but are not limited to, Ionic, Xamarin, and React Native.',
    scene: 'mobile',
  },
  {
    slug: 'quality-assurance-testing',
    navLabel: 'Quality Assurance & Testing',
    icon: 'fa-shield-halved',
    short: 'Manual and automated testing on every release.',
    titleLines: [
      { text: 'Quality Assurance &', accent: true },
      { text: 'Testing', accent: true },
    ],
    text: 'Treading on Agile development methodologies and Rational Unified Process practices in testing, BrainsBit ensures highest quality of software solutions to you. Our software testing strategy ensures every component of your software are free of bugs and issues.',
    scene: 'qa',
  },
];

export const findService = (slug: string): ServiceItem =>
  SERVICES.find((s) => s.slug === slug)!;
