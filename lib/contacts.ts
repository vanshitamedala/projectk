import { ContactItemProps } from '@/components/main/ContactSection';

export const getContacts = function (): ContactItemProps[] {
  return [
    {
      title: 'GitHub',
      link: {
        display: '@keertihegde002',
        url: 'https://github.com/keertihegde002',
      },
    },
    {
      title: 'LeetCode',
      link: {
        display: '@keerti_hegde',
        url: 'https://leetcode.com/keerti_hegde',
      },
    },
    {
      title: 'CodeChef',
      link: {
        display: '@keertihegde002',
        url: 'https://www.codechef.com/users/keertihegde002',
      },  
    },
    {
      title: 'LinkedIn',
      link: {
        display: '@keerti-hegde',
        url: 'https://www.linkedin.com/in/keerti-hegde/',
      },
    },

    {
      title: 'Resume',
      link: {
        display: 'preview',
        url: 'https://drive.google.com/file/d/1UCENWjzhmESw4hitgzOq6QbwJv3OPy8o/view?usp=sharing',
      },
    },
  ];
};
