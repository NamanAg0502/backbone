import React from "react";
import {
  IconCapRounded,
  IconUser,
  IconPhone,
  IconTarget,
  IconDiscount,
  IconClipboardList,
  IconInbox,
  IconUserCheck,
  IconCompass,
  IconFileText,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandWhatsapp,
  IconMail,
  IconMapPin,
  IconExternalLink,
  IconArrowRight,
  IconChevronRight,
  IconChevronDown,
  IconMenu2,
  IconX,
  IconStar,
  IconCheckbox,
  IconBulb,
  IconChartBar,
  IconBook,
  IconMap,
  IconLock,
  IconHeartHandshake,
  IconLogin2,
  IconScript,
} from "@tabler/icons-react";

// Define icon type
export type IconType =
  | "GraduationCap"
  | "User"
  | "Phone"
  | "Target"
  | "Discount"
  | "ClipboardList"
  | "Info"
  | "UserCheck"
  | "Compass"
  | "FileText"
  | "Facebook"
  | "Instagram"
  | "Twitter"
  | "Whatsapp"
  | "Mail"
  | "MapPin"
  | "ExternalLink"
  | "ArrowRight"
  | "ChevronRight"
  | "ChevronDown"
  | "Menu"
  | "Close"
  | "Star"
  | "Checkbox"
  | "LightBulb"
  | "ChartBar"
  | "Book"
  | "Map"
  | "Lock"
  | "HeartHandshake"
  | "Login2"
  | "Script";

interface DynamicIconProps {
  name: IconType;
  className?: string;
  size?: number;
  stroke?: number;
}

// Map icon names to components
const iconComponents: Record<IconType, React.FC<any>> = {
  GraduationCap: IconCapRounded,
  User: IconUser,
  Phone: IconPhone,
  Target: IconTarget,
  Discount: IconDiscount,
  ClipboardList: IconClipboardList,
  Info: IconInbox,
  UserCheck: IconUserCheck,
  Compass: IconCompass,
  FileText: IconFileText,
  Facebook: IconBrandFacebook,
  Instagram: IconBrandInstagram,
  Twitter: IconBrandTwitter,
  Whatsapp: IconBrandWhatsapp,
  Mail: IconMail,
  MapPin: IconMapPin,
  ExternalLink: IconExternalLink,
  ArrowRight: IconArrowRight,
  ChevronRight: IconChevronRight,
  ChevronDown: IconChevronDown,
  Menu: IconMenu2,
  Close: IconX,
  Star: IconStar,
  Checkbox: IconCheckbox,
  LightBulb: IconBulb,
  ChartBar: IconChartBar,
  Book: IconBook,
  Map: IconMap,
  Lock: IconLock,
  HeartHandshake: IconHeartHandshake,
  Login2: IconLogin2,
  Script: IconScript,
};

/**
 * Dynamic Icon Component
 * Renders a specific icon based on the name prop
 */
export const DynamicIcon: React.FC<DynamicIconProps> = ({
  name,
  className = "",
  size = 24,
  stroke = 2,
}) => {
  const IconComponent = iconComponents[name];

  if (!IconComponent) {
    console.warn(`Icon ${name} not found`);
    return null;
  }

  return <IconComponent className={className} size={size} stroke={stroke} />;
};
