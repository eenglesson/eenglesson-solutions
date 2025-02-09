// app/data/infoCards.ts

export interface InfoCard {
  iconName: string;
  title: string;
  description: string;
}

export const infoCards: InfoCard[] = [
  {
    iconName: 'Pencil',
    title: 'Modern Design',
    description:
      "Sleek, minimalist aesthetics that let your brand's personality shine through.",
  },
  {
    iconName: 'Smartphone',
    title: 'Responsive & Mobile-First',
    description:
      'Websites that look and work flawlessly on any device, ensuring an optimal user experience.',
  },
  {
    iconName: 'Users',
    title: 'User-Centric Experience',
    description:
      'Intuitive designs focused on user engagement and seamless navigation.',
  },
  {
    iconName: 'Megaphone',
    title: 'Brand-Driven Strategy',
    description:
      'Your brand is unique—our designs are tailored to reflect its values and vision.',
  },
  {
    iconName: 'Gauge',
    title: 'Technical Excellence',
    description:
      'Optimized for performance and SEO, ensuring fast load times and high search rankings.',
  },
  {
    iconName: 'PuzzlePiece',
    title: 'Tailored Solutions',
    description:
      'Custom website solutions that are as unique as your business.',
  },
];
