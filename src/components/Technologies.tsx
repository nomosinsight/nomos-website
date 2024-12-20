import { useState } from 'react';
import Container from './common/Container';
import SectionTitle from './common/SectionTitle';

const techCategories = [
  {
    id: 'frontend',
    label: 'Front End',
    technologies: [
      {
        name: 'Angular',
        logo: 'https://raw.githubusercontent.com/angular/angular/main/aio/src/assets/images/logos/angular/angular.png'
      },
      {
        name: 'React',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
      },
      {
        name: 'Vue',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg'
      },
      {
        name: 'Next.js',
        logo: 'https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png'
      },
      {
        name: 'Nuxt.js',
        logo: 'https://nuxt.com/assets/design-kit/logo/icon-green.svg'
      }
    ]
  },
  {
    id: 'backend',
    label: 'Back End',
    technologies: [
      {
        name: 'Spring',
        logo: 'https://spring.io/img/spring.svg'
      },
      {
        name: 'Django',
        logo: 'https://static.djangoproject.com/img/logos/django-logo-negative.svg'
      },
      {
        name: 'FastAPI',
        logo: 'https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png'
      }
    ]
  },
  {
    id: 'mobile',
    label: 'Mobile',
    technologies: [
      {
        name: 'React Native',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
      },
      {
        name: 'Flutter',
        logo: 'https://storage.googleapis.com/cms-storage-bucket/0dbfcc7a59cd1cf16282.png'
      }
    ]
  },
  {
    id: 'cms',
    label: 'CMS',
    technologies: [
      {
        name: 'WordPress',
        logo: 'https://s.w.org/style/images/about/WordPress-logotype-standard.png'
      },
      {
        name: 'Strapi',
        logo: 'https://strapi.io/assets/strapi-logo-light.svg'
      }
    ]
  },
  {
    id: 'database',
    label: 'Database',
    technologies: [
      {
        name: 'PostgreSQL',
        logo: 'https://www.postgresql.org/media/img/about/press/elephant.png'
      },
      {
        name: 'MongoDB',
        logo: 'https://www.mongodb.com/assets/images/global/leaf.svg'
      }
    ]
  },
  {
    id: 'devops',
    label: 'DevOps and Cloud',
    technologies: [
      {
        name: 'AWS',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg'
      },
      {
        name: 'Google Cloud',
        logo: 'https://www.gstatic.com/devrel-devsite/prod/v2f6fb68338062e7c16672db62c4ab042dcb9bfbacf2fa51b6959426b203a4d8a/cloud/images/cloud-logo.svg'
      },
      {
        name: 'Jenkins',
        logo: 'https://www.jenkins.io/images/logos/jenkins/jenkins.svg'
      }
    ]
  },
  {
    id: 'project',
    label: 'Project Management',
    technologies: [
      {
        name: 'Jira',
        logo: 'https://wac-cdn.atlassian.com/assets/img/favicons/atlassian/favicon.png'
      },
      {
        name: 'Trello',
        logo: 'https://www.trello.com/favicon.ico'
      }
    ]
  }
];

export default function Technologies() {
  const [activeTab, setActiveTab] = useState('frontend');

  return (
    <section id="technologies" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <Container>
        <SectionTitle
          title="Technologies & Platforms We Work With"
          subtitle="We leverage cutting-edge technologies to build robust and scalable solutions"
        />

        {/* Tabs */}
        <div className="mb-12 overflow-x-auto">
          <div className="flex space-x-2 min-w-max">
            {techCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-3 text-sm font-medium rounded-full transition-all ${
                  activeTab === category.id
                    ? 'bg-[#FFD700] text-gray-900'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {techCategories
            .find((cat) => cat.id === activeTab)
            ?.technologies.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-900 text-center">
                  {tech.name}
                </h3>
              </div>
            ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 text-base font-medium rounded-full text-white bg-[#4285f4] hover:bg-[#3367d6] transition-colors"
          >
            Schedule a Developer Interview
          </a>
        </div>
      </Container>
    </section>
  );
}