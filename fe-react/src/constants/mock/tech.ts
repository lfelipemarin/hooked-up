export interface TechPlatform {
  id: number;
  name: string;
  description: string;
  url: string;
  icon: string;
  category: string;
}
export const TECH_INTERESTS: TechPlatform[] = [
  {
    id: 1,
    name: 'freeCodeCamp',
    description:
      'Offers free coding lessons in web development, data science, and more.',
    url: 'https://www.freecodecamp.org/',
    icon: 'https://www.freecodecamp.org/favicon-32x32.png',
    category: 'Learning & Tutorials'
  },
  {
    id: 2,
    name: 'Codecademy',
    description:
      'Interactive courses for various programming languages and technologies.',
    url: 'https://www.codecademy.com/',
    icon: 'https://www.codecademy.com/favicon.ico',
    category: 'Learning & Tutorials'
  },
  {
    id: 3,
    name: 'W3Schools',
    description: 'Beginner-friendly tutorials for web development.',
    url: 'https://www.w3schools.com/',
    icon: 'https://www.w3schools.com/favicon.ico',
    category: 'Learning & Tutorials'
  },
  {
    id: 4,
    name: 'MDN Web Docs',
    description:
      'Comprehensive documentation on web technologies (HTML, CSS, JavaScript).',
    url: 'https://developer.mozilla.org/',
    icon: 'https://developer.mozilla.org/favicon.ico',
    category: 'Learning & Tutorials'
  },
  {
    id: 5,
    name: 'Hacker News',
    description:
      'A social news website focusing on computer science and entrepreneurship.',
    url: 'https://news.ycombinator.com/',
    icon: 'https://news.ycombinator.com/favicon.ico',
    category: 'Tech News & Articles'
  },
  {
    id: 6,
    name: 'Dev.to',
    description:
      'A community of software developers sharing articles, tips, and projects.',
    url: 'https://dev.to/',
    icon: 'https://dev.to/favicon.ico',
    category: 'Tech News & Articles'
  },
  {
    id: 7,
    name: 'Medium (Tech)',
    description:
      'Tons of articles on software development and emerging technologies.',
    url: 'https://medium.com/',
    icon: 'https://miro.medium.com/v2/5d8de952517e8160e40ef9841c781cdc14a5db313057fa3c3de41c6f5b494b19',
    category: 'Tech News & Articles'
  },
  {
    id: 8,
    name: 'GitHub',
    description:
      'The most popular platform for hosting and collaborating on code projects.',
    url: 'https://github.com/',
    icon: 'https://github.com/favicon.ico',
    category: 'Code Repositories & Examples'
  },
  {
    id: 9,
    name: 'GitLab',
    description: 'An alternative to GitHub with similar features.',
    url: 'https://gitlab.com/',
    icon: 'https://gitlab.com/favicon.ico',
    category: 'Code Repositories & Examples'
  },
  {
    id: 10,
    name: 'Stack Overflow',
    description: 'The go-to Q&A site for programming questions.',
    url: 'https://stackoverflow.com/',
    icon: 'https://stackoverflow.com/favicon.ico',
    category: 'Community Forums'
  },
  {
    id: 11,
    name: 'Reddit - r/programming',
    description: 'A subreddit for tech discussions and updates.',
    url: 'https://www.reddit.com/r/programming/',
    icon: 'https://www.redditstatic.com/desktop2x/img/favicon/favicon-32x32.png',
    category: 'Community Forums'
  },
  {
    id: 12,
    name: 'Hashnode',
    description: 'A blogging platform for developers.',
    url: 'https://hashnode.com/',
    icon: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1611242173172/AOX1gE2jc.png',
    category: 'Community Forums'
  },
  {
    id: 13,
    name: 'CodePen',
    description: 'Online editor for front-end projects.',
    url: 'https://codepen.io/',
    icon: 'https://codepen.io/favicon.ico',
    category: 'Code Repositories & Examples'
  },
  {
    id: 14,
    name: 'JSFiddle',
    description: 'Another front-end code playground.',
    url: 'https://jsfiddle.net/',
    icon: 'https://jsfiddle.net/img/favicon.png',
    category: 'Code Repositories & Examples'
  },
  {
    id: 15,
    name: 'TechCrunch',
    description: 'Covers the latest tech industry news.',
    url: 'https://techcrunch.com/',
    icon: 'https://techcrunch.com/wp-content/uploads/2015/02/cropped-cropped-favicon-gradient.png?w=32',
    category: 'Tech News & Articles'
  },
  {
    id: 16,
    name: 'Traversy Media',
    description: 'Web development tutorials on YouTube.',
    url: 'https://www.youtube.com/@TraversyMedia',
    icon: 'https://www.youtube.com/favicon.ico',
    category: 'Video Tutorials'
  },
  {
    id: 17,
    name: 'The Net Ninja',
    description: 'Tutorials on a wide range of tech stacks.',
    url: 'https://www.youtube.com/@NetNinja',
    icon: 'https://www.youtube.com/favicon.ico',
    category: 'Video Tutorials'
  },
  {
    id: 18,
    name: 'Fireship',
    description: 'Bite-sized coding tutorials with a fun twist.',
    url: 'https://www.youtube.com/@Fireship',
    icon: 'https://www.youtube.com/favicon.ico',
    category: 'Video Tutorials'
  },
  {
    id: 19,
    name: 'HackerRank',
    description: 'Practice coding challenges and interview prep.',
    url: 'https://www.hackerrank.com/',
    icon: 'https://www.hackerrank.com/wp-content/uploads/2020/05/hackerrank_cursor_favicon_480px-150x150.png',
    category: 'Job Boards & Career Platforms'
  },
  {
    id: 20,
    name: 'LeetCode',
    description: 'Coding challenges to prepare for technical interviews.',
    url: 'https://leetcode.com/',
    icon: 'https://leetcode.com/favicon.ico',
    category: 'Job Boards & Career Platforms'
  }
];
