import { ProjectItemProps } from '@/components/main/ProjectSection';

export const getProjects = function (): ProjectItemProps[] {
  let projects: ProjectItemProps[] = [
    {
      projectTitle: 'Weather',
      projectData: {
        githubURL: 'https://github.com/keertihegde002/weather',
      },
      description: [
        'Weather app made using Rapidapi ( API ). A project to visualize weather status of any place.        ',
        'The user can search for any place and get the weather status of that place. The user can also view the weather status of the current location.',
      ],
      tech: [
        'Django',
        'Python',
        'JavaScript',
        'HTML',
        'CSS',
      ],
      techstack: ['JavaScript, CSS, HTML, API'],
    },
    
    {
      projectTitle: 'Photo Album',
      projectData: {
        githubURL: 'https://github.com/keertihegde002/PhotoAlbum',
      },
      description: [
        'Stores and categorizes the images using Django as backend. One can upload the images with description and view them based on categorized classification.        ',
        'The images are stored in the database and can be viewed by the user anytime. The user can also delete the images from the database.',
      ],
      tech: [
        'Django',
        'Python',
        'JavaScript',
        'HTML',
        'CSS',
      ],
      techstack: ['Django, Python, JavaScript, CSS, HTML'],
    },
    {
      projectTitle: 'Learn Together',
      projectData: {
        githubURL: 'https://github.com/keertihegde002/learnTogether',
      },
      description: [
        'learnTogether is a django based project which can be used to find people to study online with, ask queries or help others. The user can either join any pre-existing room or host their own room.', 
        'The user can also create a room and invite others to join the room using the invite link. The user can also create a room and invite others to join the room using the invite link.',
      ],
      tech: ['Django', 'Python', 'JavaScript', 'HTML', 'CSS'],
      techstack: ['Django, Python, JavaScript, CSS, HTML'],
    },

  ];

  return projects.reverse();
};
