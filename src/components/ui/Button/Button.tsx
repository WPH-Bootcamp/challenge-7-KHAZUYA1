import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'outline';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = "", 
  variant = 'primary', 
  ...props 
}) => {
  
  const baseStyles = "rounded-full font-medium transition-all duration-300 px-6 py-3 flex items-center justify-center cursor-pointer";
  
  const variants = {
    primary: "bg-primary hover:bg-orange-600 text-white border border-transparent",
    outline: "bg-transparent border border-white text-white hover:bg-white hover:text-black"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;