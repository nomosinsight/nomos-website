import { Code, Cloud, Database, Brain, Workflow, Lock } from 'lucide-react';
import Container from './common/Container';
import Section from './common/Section';
import SectionTitle from './common/SectionTitle';

const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and frameworks.',
    icon: Code,
  },
  {
    title: 'Cloud Integration',
    description: 'Seamless cloud solutions using AWS and Google Cloud platforms.',
    icon: Cloud,
  },
  {
    title: 'Backend Solutions',
    description: 'Robust backend systems with Java, Python, and modern frameworks.',
    icon: Database,
  },
  {
    title: 'AI Integration',
    description: 'Advanced AI solutions including ChatGPT and RAG-based implementations.',
    icon: Brain,
  },
  {
    title: 'DevOps & CI/CD',
    description: 'Streamlined development workflows with modern DevOps practices.',
    icon: Workflow,
  },
  {
    title: 'Security Solutions',
    description: 'Enterprise-grade security implementations for your applications.',
    icon: Lock,
  },
];

export default function Services() {
  return (
    <Section id="services" background="light">
      <Container>
        <SectionTitle
          title="Our Services"
          subtitle="We offer a comprehensive range of IT solutions to help your business succeed in the digital age."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow bg-white group"
            >
              <div className="w-12 h-12 bg-[#FFF8E1] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#FFD700] transition-colors">
                <service.icon className="h-6 w-6 text-[#FFD700] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}