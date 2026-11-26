import { FeatureItem } from './services.data';

export interface ServiceDetail {
  imageSide: 'left' | 'right';
  layout: 'grid' | 'steps';
  featuresTitle: string;
  features: FeatureItem[];
}

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  'custom-software-development': {
    imageSide: 'right',
    layout: 'grid',
    featuresTitle: 'Why Work With BrainsBit',
    features: [
      {
        icon: 'fa-award',
        title: 'Experience',
        text: 'A decade of experience in custom software development. We are focused on bringing value to our customers and on helping them succeed in the marketplace.',
      },
      {
        icon: 'fa-arrows-spin',
        title: 'Full-Cycle Development Services',
        text: 'From ideation to maintenance and upgrades, we can be your partner for the entire software development process.',
      },
      {
        icon: 'fa-bolt',
        title: 'Agile Methodology',
        text: 'We make sure that your product runs smoothly at every level, ensuring active participation through agile process.',
      },
      {
        icon: 'fa-eye',
        title: 'Transparent Process',
        text: 'We ensure full transparency and effective communication to help you monitor progress while achieving your target.',
      },
    ],
  },

  'web-application-development': {
    imageSide: 'right',
    layout: 'grid',
    featuresTitle: 'Our Web App Expertise',
    features: [
      {
        icon: 'fa-code',
        title: 'Custom Web App Development',
        text: 'Having years of expertise in the given field, we help businesses avail our best customized web app development solutions catering to a wide range of industry verticals in the most effective manner.',
      },
      {
        icon: 'fa-palette',
        title: 'Redesign Outdated Apps',
        text: 'We can rework or modernize unfriendly and old-fashioned web interfaces in order to align them with the evolving needs of end users and current technologies.',
      },
      {
        icon: 'fa-plug',
        title: 'Third-Party Integrations',
        text: 'Developers at BrainsBit can help in integrating your product with various third-party applications and services.',
      },
      {
        icon: 'fa-building',
        title: 'Enterprise Portal Development',
        text: 'BrainsBit aims at ensuring the overall success of your niche-specific online business, be it hospitality, healthcare, technology, real estate, e-commerce, etc.',
      },
    ],
  },

  'mobile-application-development': {
    imageSide: 'left',
    layout: 'steps',
    featuresTitle: 'App Development Project Life Cycle',
    features: [
      {
        icon: 'fa-clipboard-list',
        title: 'Requirement Analysis',
        text: 'Analyzing your requirements and planning the process of development are the most important parts of our mobile app development program.',
      },
      {
        icon: 'fa-pen-ruler',
        title: 'Prototype',
        text: 'After thorough analysis, the prototype of your app is prepared and sent to you for evaluation and improvement analysis',
      },
      {
        icon: 'fa-mobile-screen',
        title: 'App Development',
        text: 'The App Development gets started on the preferable platforms with complete transparency.',
      },
      {
        icon: 'fa-circle-check',
        title: 'Quality Assurance',
        text: 'No compromise in quality so we make sure you get a 100% bug free app. Testing is performed continuously during each agile sprint, followed by bug fixing.',
      },
      {
        icon: 'fa-cloud-arrow-up',
        title: 'Deployment',
        text: 'App is ready to appear on the online store at this stage of development',
      },
      {
        icon: 'fa-headset',
        title: 'Support & Maintenance',
        text: 'BrainsBit provides full support and regular maintenance as per requirement',
      },
    ],
  },

  'quality-assurance-testing': {
    imageSide: 'right',
    layout: 'grid',
    featuresTitle: 'Our QA & Testing Expertise',
    features: [
      {
        icon: 'fa-user-check',
        title: 'Independent QA',
        text: 'BrainsBit delivers application testing services for your software solutions to give you a better control over application quality and evaluate product compliance.',
      },
      {
        icon: 'fa-puzzle-piece',
        title: 'Integrated Testing',
        text: 'Any development project at BrainsBit has an integral testing scope. Before releasing your software, it goes through rigorous testing to ensure that it is working properly.',
      },
      {
        icon: 'fa-comments',
        title: 'QA Consulting',
        text: 'We do a documented analysis of your project along with facts and experience-oriented recommendations for a proactive process improvement.',
      },
      {
        icon: 'fa-rotate',
        title: 'Full-Cycle Testing',
        text: 'Our QA teams render quality assurance services along with the development lifecycle, be it automated or manual.',
      },
      {
        icon: 'fa-sliders',
        title: 'Custom Testing',
        text: 'From web to desktop and mobile applications, we create a comprehensive mix for testing each application to ensure quality.',
      },
      {
        icon: 'fa-robot',
        title: 'Test Automation',
        text: 'We identify the best automation tool and assist based on our client’s test automation goals.',
      },
    ],
  },
};
