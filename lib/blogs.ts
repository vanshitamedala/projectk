import { BlogProps } from '@/pages/blog';

export const getBlogs = function (): BlogProps[] {
  return [
    {
      title: 'Getting started with Design Systems Engineering',
      linkType: 'external',
      link: 'https://keerti hegde.notion.site/Getting-started-with-Design-Systems-Engineering-00f9639dd68f4fd79701eb72ca5a1fec',
      publishedAt: {
        year: 2021,
      },
    },
    {
      title: 'Internship experience Economize.cloud',
      linkType: 'external',
      link: 'https://github.com/keerti hegde/keerti hegde/blob/main/experiences/economize-experience.md#internship-experience-economizecloud',
      publishedAt: {
        year: 2021,
      },
    },
  ];
};
