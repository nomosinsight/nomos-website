interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  href?: string;
  onClick?: () => void;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  className = '',
  href,
  onClick
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center px-6 py-3 border text-base font-medium rounded-md transition-colors';
  const variants = {
    primary: 'border-transparent text-gray-900 bg-[#FFD700] hover:bg-[#FFC000]',
    secondary: 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}