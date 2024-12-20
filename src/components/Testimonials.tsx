import { Star } from 'lucide-react';
import { testimonials } from '../constants/content';
import Container from './common/Container';
import Section from './common/Section';
import SectionTitle from './common/SectionTitle';

export default function Testimonials() {
  return (
    <Section background="light">
      <Container>
        <SectionTitle
          title="Client Testimonials"
          subtitle="What our clients say about working with us"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-primary fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">{testimonial.text}</p>
              <p className="font-medium text-gray-900">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}