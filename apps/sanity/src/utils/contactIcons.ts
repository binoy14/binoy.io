import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export const contactIcons = {
  Twitter: FaTwitter,
  Youtube: FaYoutube,
  Email: MdEmail,
  Github: FaGithub,
  Linkedin: FaLinkedin,
} as const;

export const getIcon = (name: string) => contactIcons[name as keyof typeof contactIcons] ?? null;
