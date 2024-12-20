import { CircuitBoard } from 'lucide-react';

interface LogoProps {
  variant?: 'light' | 'dark';
}

export default function Logo({ variant = 'dark' }: LogoProps) {
  const textColor = variant === 'dark' ? 'text-gray-900' : 'text-white';
  
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <CircuitBoard className="h-8 w-8 text-[#FFD700]" />
      </div>
      <span className={`text-xl font-bold ${textColor}`}>Nomos Insights</span>
    </div>
  );
}