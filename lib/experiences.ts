import { ExperienceItemProps } from '@/components/main/ExperienceSection';

export const getExperiences = function (): ExperienceItemProps[] {
  return [
    {
      experienceTitle: 'Vice President',
      experienceDescription: [
        'Conducted regular evaluations and analysis of the contest metrics, identifying areas for improvement and implementing strategies to enhance the overall experience for participants.',
        'Led and mentored a team of competitive programming members, providing guidance and support to enhance their skills and knowledge.',
        'Organized and conducted various events and workshops to promote competitive programming and enhance the skills of the students.',
        'Designed and created questions and answers from scratch, ensuring originality and creativity in each challenge.',
        'Implemented coding contest questions for competitions, spanning from easy to hard difficulty levels.',
      ],
      experienceOrg: {
        name: 'CodeChef Chapter - MREC',
        link: 'https://mrec.club',
        websiteDisplayName: 'mrec.club',
      },
      experienceStatus: {
        startAt: 'Nov, 2021',
        endAt: 'Current',
      },
    },
    
  ];
};
