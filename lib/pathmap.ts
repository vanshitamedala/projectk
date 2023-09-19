import { PathMapProps } from '@/components/layout/Navbar';

export const getPathMap = function (): PathMapProps[] {
  return [
    {
      pathType: 'external',
      title: 'linkedin',
      link: 'https://www.linkedin.com/in/keerti-hegde/',
      isAvailable: true,
    },
    {
      pathType: 'external',
      title: 'github',
      link: 'https://github.com/keertihegde002',
      isAvailable: true,
    },
  ];
};
