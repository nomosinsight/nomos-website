import { ArrowRight } from 'lucide-react';
import Button from './common/Button';
import Container from './common/Container';

export default function Hero() {
  return (
    <div id="home" className="relative bg-gradient-to-br from-[#FFF8E1] via-white to-[#FFF8E1] pt-20">
      <Container>
        <div className="py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transforming Businesses Through
              <span className="text-[#FFD700]"> Innovation</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Nomos Insights is your trusted partner in digital transformation. We deliver cutting-edge IT solutions
              that empower businesses to thrive in the modern world.
            </p>
            <div className="flex justify-center gap-4">
              <Button href="#contact" variant="primary">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button href="#services" variant="secondary">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </Container>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white"></div>
    </div>
  );
}