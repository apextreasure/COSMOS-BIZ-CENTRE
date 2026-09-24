import React from 'react';
import {
  Briefcase,
  FileText,
  Users,
  Compass,
  ShieldCheck,
  Plane,
  Printer,
  Layers,
  UserCheck,
  Scale,
  Building2,
  ClipboardList,
} from 'lucide-react';

interface ServiceIconProps {
  name: string;
  className?: string;
}

export const ServiceIcon: React.FC<ServiceIconProps> = ({ name, className = 'w-6 h-6' }) => {
  switch (name) {
    case 'Briefcase':
      return <Briefcase className={className} />;
    case 'FileText':
      return <FileText className={className} />;
    case 'Users':
      return <Users className={className} />;
    case 'Compass':
      return <Compass className={className} />;
    case 'ShieldCheck':
      return <ShieldCheck className={className} />;
    case 'Plane':
      return <Plane className={className} />;
    case 'Printer':
      return <Printer className={className} />;
    case 'Layers':
      return <Layers className={className} />;
    case 'UserCheck':
      return <UserCheck className={className} />;
    case 'Scale':
      return <Scale className={className} />;
    case 'Building2':
      return <Building2 className={className} />;
    case 'ClipboardList':
    default:
      return <ClipboardList className={className} />;
  }
};

export default ServiceIcon;
