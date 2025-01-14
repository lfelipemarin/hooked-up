interface LocationType {
  country: string;
  state: string;
  city: string;
}

interface Institution {
  name: string;
  startDate?: string;
  endDate?: string;
  description?: string;
  location?: LocationType;
}

export interface WorkType extends Institution {
  position: string;
}

interface EducationType extends Institution {
  career: string;
}

export interface PersonalProjectType extends Institution {
  projectName: string;
}
export interface DataType {
  id: number;
  name: string;
  phone: string;
  linkedInUrl: string;
  githubUrl: string;
  summary: string;
  skillset: {
    programmingLanguages: Array<string>;
    frameworks: Array<string>;
    databases: Array<string>;
    tools: Array<string>;
    misc: Array<string>;
  };
  careerTitles?: Array<string>;
  work: Array<WorkType>;
  education: Array<EducationType>;
  personalProjects: Array<PersonalProjectType>;
}

export const cVData: Array<DataType> = [
  {
    careerTitles: ['Senior Front End Developer', 'test'],
    education: [
      {
        career: 'BS Systems & Computer Engineering',
        endDate: '01-01-2015',
        location: {
          city: 'Medellin',
          country: 'Colombia',
          state: 'Antioquia'
        },
        name: 'University of Antioquia',
        startDate: '01-01-2018'
      },
      {
        career: 'AA in Computer Engineering',
        endDate: '01-01-2006',
        location: {
          city: 'Miami',
          country: 'United States',
          state: 'Florida'
        },
        name: 'Miami Dade College',
        startDate: '01-01-2004'
      },
      {
        career: 'High School Diploma',
        endDate: '01-01-2003',
        location: {
          city: 'Miami',
          country: 'United States',
          state: 'Florida'
        },
        name: 'Dr Michael Krop Senior High School'
      }
    ],
    githubUrl: 'https://github.com/lfelipemarin',
    id: 1,
    linkedInUrl: 'https://www.linkedin.com/in/fmv85/',
    name: 'Felipe Marin',
    personalProjects: [
      {
        description: `* Standardized clinical history pro pathologies such as
        epilepsy, headaches and movement disorders.
        * Generate standardized information and indicators to
        perform closer monitoring to patients.
        * Java desktop app, integration with MySQL`,
        endDate: '01-01-2012',
        name: 'Neurological Institute of Colombia',
        projectName:
          'Software Development Java Desktop App - Neurological Clinical Reports'
      },
      {
        description: `* Web app made with Vue.js, deployed to Firebase.
        *<a href='https://haz-la-lectio.web.app/' target="_blank">https://haz-la-lectio.web.app/</a>`,
        endDate: '01-01-2021',
        name: 'Personal Venture',
        projectName: 'Haz la Lectio - PWA'
      },
      {
        description: `* Flutter App for religious purposes. Backend made with Firebase.
        * Github repo: <a href='https://github.com/lfelipemarin/lectio-app' target="_blank">https://github.com/lfelipemarin/lectio-app</a>`,
        endDate: '01-01-2025',
        name: 'Personal Venture',
        projectName: 'Haz la Lectio - app'
      },
      {
        description: `* Web app made with ReactJs.
        * React and NestJS web app for a non-profit
        organization to share their businesses between
        community members.
        * Front-end Github repo: <a href='https://github.com/Entrelazos/entrelazos-frontend' target="_blank">https://github.com/Entrelazos/entrelazos-frontend</a>
        * Back-end Github repo: <a href="https://github.com/Entrelazos/nest-entrelazos">https://github.com/Entrelazos/nest-entrelazos</a>`,
        endDate: '12-01-2024',
        name: 'Personal Venture',
        projectName: 'Entrelazos - PWA'
      }
    ],
    phone: '+573014369634',
    skillset: {
      programmingLanguages: ['Java', 'JavaScript', 'Dart', 'HTML', 'CSS'],
      frameworks: [
        'Express.js',
        'Vue.js',
        'Backbone.js',
        'Spring',
        'Bootstrap',
        'Tailwind',
        'React.js',
        'Flutter'
      ],
      databases: ['MySQL', 'MongoDB', 'NeDB', 'Redis'],
      tools: ['Marketo', 'Eloqua', 'HubsPot', 'Pardot', 'WordPress'],
      misc: ['Github', 'Apache HTTP Server, Nginx, Apache Tomcat, Heroku, Firebase, RabbitMQ']
    },
    summary: `Senior Web Developer specializing in front end development. Experienced in all stages of the software development
      life cycle for web/mobile projects. Well-versed in API development and numerous programming languages including
      JavaScript (Vue.js, React.js, Node.js), Dart, CSS, MySQL..., under a variety of frameworks. Strong communication skills
      and solid client requirement gathering, client success and stakeholder management for web development projects.`,
    work: [
      {
        description: `* Maintenance and enhancement of the VEP (Virtual Events
          Platform), which has grown about 1000% in the past year
          * Design, architecture and development of the platform, new
          modules and its full migration to Vue.js`,
        endDate: '',
        name: '6Connex',
        position: 'Application Engineer',
        startDate: '07-01-2018'
      },
      {
        description: `* Company's internal portal development (Front-end: Vue.js,
          Backend: Node.js)
          * Marketing platforms campaigns and assets: emails and
          landing pages
          * Marketing platforms API integrations
          * Development of corporate clients' websites using
          WordPress`,
        endDate: '07-01-2018',
        name: 'Demand Frontier',
        position: 'Software Developer & Marketing Automation',
        startDate: '04-01-2015'
      }
    ]
  },
  {
    careerTitles: ['Senior Front End Developer', 'test'],
    education: [
      {
        career: 'BS Systems & Computer Engineering',
        endDate: '01-01-2015',
        location: {
          city: 'Medellin',
          country: 'Colombia',
          state: 'Antioquia'
        },
        name: 'University of Antioquia',
        startDate: '01-01-2018'
      },
      {
        career: 'AA in Computer Engineering',
        endDate: '01-01-2006',
        location: {
          city: 'Miami',
          country: 'United States',
          state: 'Florida'
        },
        name: 'Miami Dade College',
        startDate: '01-01-2004'
      },
      {
        career: 'High School Diploma',
        endDate: '01-01-2003',
        location: {
          city: 'Miami',
          country: 'United States',
          state: 'Florida'
        },
        name: 'Dr Michael Krop Senior High School'
      }
    ],
    githubUrl: 'https://github.com/lfelipemarin',
    id: 3,
    linkedInUrl: 'https://www.linkedin.com/in/fmv85/',
    name: 'Felipe Marin',
    personalProjects: [
      {
        description: `* Standardized clinical history pro pathologies such as
        epilepsy, headaches and movement disorders.
        * Generate standardized information and indicators to
        perform closer monitoring to patients.
        * Java desktop app, integration with MySQL`,
        endDate: '01-01-2021',
        name: 'Neurological Institute of Colombia',
        projectName: 'Java Desktop App'
      },
      {
        description: `* Web app made with Vue.js, deployed to Firebase and
        Heroku`,
        endDate: '01-01-2012',
        name: 'Personal Venture',
        projectName: 'Lectio Divina PWA'
      }
    ],
    phone: '+573014369634',
    skillset: {
      databases: ['MySQL', 'MongoDB', 'NeDB', 'Redis'],
      frameworks: [
        'Express.js',
        'Vue.js',
        'Backbone.js',
        'Spring',
        'Bootstrap',
        'Tailwind',
        'React.js'
      ],
      programmingLanguages: [
        'Java',
        'JavaScript',
        'Android',
        'PHP',
        'Golang',
        'HTML5',
        'CSS3'
      ],
      tools: ['Marketo', 'Eloqua', 'HubsPot', 'Pardot', 'WordPress'],
      misc: ['Github', 'Apache HTTP Server, Nginx, Apache Tomcat, Heroku, Firebase, RabbitMQ']
    },
    summary: `Senior Web Developer specializing in front end development. Experienced with all stages of
      the software developmentlife cycle for dynamic web projects. Well-versed in API development
      and numerous programming languages including HTML5, Node.js, JavaScript (Vue.js), CSS, MySQL, etc.,
      under a variety of frameworks. Strong communication skills and solid client requirement gathering,
      client success and stakeholder management for web development projects.`,
    work: [
      {
        description: `* Maintenance and enhancement of the VEP (Virtual Events
          Platform), which has grown about 1000% in the past year
          * Design, architecture and development of the platform, new
          modules and its full migration to Vue.js`,
        endDate: '',
        name: '6Connex',
        position: 'Application Engineer',
        startDate: '07-01-2018'
      },
      {
        description: `* Company's internal portal development (Front-end: Vue.js,
          Backend: Node.js)
          * Marketing platforms campaigns and assets: emails and
          landing pages
          * Marketing platforms API integrations
          * Development of corporate clients' websites using
          WordPress`,
        endDate: '07-01-2018',
        name: 'Demand Frontier',
        position: 'Software Developer & Marketing Automation',
        startDate: '04-01-2015'
      }
    ]
  },
  {
    careerTitles: ['Senior Front End Developer'],
    education: [
      {
        career: 'BS Systems & Computer Engineering',
        endDate: '01-01-2015',
        location: {
          city: 'Medellin',
          country: 'Colombia',
          state: 'Antioquia'
        },
        name: 'University of Antioquia',
        startDate: '01-01-2018'
      },
      {
        career: 'AA in Computer Engineering',
        endDate: '01-01-2006',
        location: {
          city: 'Miami',
          country: 'United States',
          state: 'Florida'
        },
        name: 'Miami Dade College',
        startDate: '01-01-2004'
      },
      {
        career: 'High School Diploma',
        endDate: '01-01-2003',
        location: {
          city: 'Miami',
          country: 'United States',
          state: 'Florida'
        },
        name: 'Dr Michael Krop Senior High School'
      }
    ],
    githubUrl: 'https://github.com/lfelipemarin',
    id: 4,
    linkedInUrl: 'https://www.linkedin.com/in/fmv85/',
    name: 'Felipe Marin',
    personalProjects: [
      {
        description: `* Standardized clinical history pro pathologies such as
        epilepsy, headaches and movement disorders.
        * Generate standardized information and indicators to
        perform closer monitoring to patients.
        * Java desktop app, integration with MySQL`,
        endDate: '01-01-2021',
        name: 'Neurological Institute of Colombia',
        projectName: 'Java Desktop App'
      },
      {
        description: `* Web app made with Vue.js, deployed to Firebase and
        Heroku`,
        endDate: '01-01-2012',
        name: 'Personal Venture',
        projectName: 'Lectio Divina PWA'
      }
    ],
    phone: '+573014369634',
    skillset: {
      databases: ['MySQL', 'MongoDB', 'NeDB', 'Redis'],
      frameworks: [
        'Express.js',
        'Vue.js',
        'Backbone.js',
        'Spring',
        'Bootstrap',
        'Tailwind',
        'React.js'
      ],
      programmingLanguages: [
        'Java',
        'JavaScript',
        'Android',
        'PHP',
        'Golang',
        'HTML5',
        'CSS3'
      ],
      tools: ['Marketo', 'Eloqua', 'HubsPot', 'Pardot', 'WordPress'],
      misc: ['Github', 'Apache HTTP Server, Nginx, Apache Tomcat, Heroku, Firebase, RabbitMQ']
    },
    summary: `Senior Web Developer specializing in front end development. Experienced with all stages of
      the software developmentlife cycle for dynamic web projects. Well-versed in API development
      and numerous programming languages including HTML5, Node.js, JavaScript (Vue.js), CSS, MySQL, etc.,
      under a variety of frameworks. Strong communication skills and solid client requirement gathering,
      client success and stakeholder management for web development projects.`,
    work: [
      {
        description: `* Maintenance and enhancement of the VEP (Virtual Events
          Platform), which has grown about 1000% in the past year
          * Design, architecture and development of the platform, new
          modules and its full migration to Vue.js`,
        endDate: '',
        name: '6Connex',
        position: 'Application Engineer',
        startDate: '07-01-2018'
      },
      {
        description: `* Company's internal portal development (Front-end: Vue.js,
          Backend: Node.js)
          * Marketing platforms campaigns and assets: emails and
          landing pages
          * Marketing platforms API integrations
          * Development of corporate clients' websites using
          WordPress`,
        endDate: '07-01-2018',
        name: 'Demand Frontier',
        position: 'Software Developer & Marketing Automation',
        startDate: '04-01-2015'
      }
    ]
  },
  {
    careerTitles: ['Senior Front End Developer'],
    education: [
      {
        career: 'BS Systems & Computer Engineering',
        endDate: '01-01-2015',
        location: {
          city: 'Medellin',
          country: 'Colombia',
          state: 'Antioquia'
        },
        name: 'University of Antioquia',
        startDate: '01-01-2018'
      },
      {
        career: 'AA in Computer Engineering',
        endDate: '01-01-2006',
        location: {
          city: 'Miami',
          country: 'United States',
          state: 'Florida'
        },
        name: 'Miami Dade College',
        startDate: '01-01-2004'
      },
      {
        career: 'High School Diploma',
        endDate: '01-01-2003',
        location: {
          city: 'Miami',
          country: 'United States',
          state: 'Florida'
        },
        name: 'Dr Michael Krop Senior High School'
      }
    ],
    githubUrl: 'https://github.com/lfelipemarin',
    id: 2,
    linkedInUrl: 'https://www.linkedin.com/in/fmv85/',
    name: 'Felipe Marin',
    personalProjects: [
      {
        description: `* Standardized clinical history pro pathologies such as
        epilepsy, headaches and movement disorders.
        * Generate standardized information and indicators to
        perform closer monitoring to patients.
        * Java desktop app, integration with MySQL`,
        endDate: '01-01-2021',
        name: 'Neurological Institute of Colombia',
        projectName: 'Java Desktop App'
      },
      {
        description: `* Web app made with Vue.js, deployed to Firebase and
        Heroku`,
        endDate: '01-01-2012',
        name: 'Personal Venture',
        projectName: 'Lectio Divina PWA'
      }
    ],
    phone: '+573014369634',
    skillset: {
      databases: ['MySQL', 'MongoDB', 'NeDB', 'Redis'],
      frameworks: [
        'Express.js',
        'Vue.js',
        'Backbone.js',
        'Spring',
        'Bootstrap',
        'Tailwind',
        'React.js'
      ],
      programmingLanguages: [
        'Java',
        'JavaScript',
        'Android',
        'PHP',
        'Golang',
        'HTML5',
        'CSS3'
      ],
      tools: ['Marketo', 'Eloqua', 'HubsPot', 'Pardot', 'WordPress'],
      misc: ['Github', 'Apache HTTP Server, Nginx, Apache Tomcat, Heroku, Firebase, RabbitMQ']
    },
    summary: `Senior Web Developer specializing in front end development. Experienced with all stages of
      the software developmentlife cycle for dynamic web projects. Well-versed in API development
      and numerous programming languages including HTML5, Node.js, JavaScript (Vue.js), CSS, MySQL, etc.,
      under a variety of frameworks. Strong communication skills and solid client requirement gathering,
      client success and stakeholder management for web development projects.`,
    work: [
      {
        description: `* Maintenance and enhancement of the VEP (Virtual Events
          Platform), which has grown about 1000% in the past year
          * Design, architecture and development of the platform, new
          modules and its full migration to Vue.js`,
        endDate: '',
        name: '6Connex',
        position: 'Application Engineer',
        startDate: '07-01-2018'
      },
      {
        description: `* Company's internal portal development (Front-end: Vue.js,
          Backend: Node.js)
          * Marketing platforms campaigns and assets: emails and
          landing pages
          * Marketing platforms API integrations
          * Development of corporate clients' websites using
          WordPress`,
        endDate: '07-01-2018',
        name: 'Demand Frontier',
        position: 'Software Developer & Marketing Automation',
        startDate: '04-01-2015'
      }
    ]
  }
];
