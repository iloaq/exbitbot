import { iconRegistry, type IconName } from './index';

interface IconProps {
  name: IconName;
  width?: number;
  height?: number;
  className?: string;
}

export function Icon({ name, width = 24, height = 24, className }: IconProps) {
  const IconComponent = iconRegistry[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in registry`);
    return null;
  }
  
  return (
    <IconComponent 
      width={width} 
      height={height} 
      className={className}
    />
  );
}
