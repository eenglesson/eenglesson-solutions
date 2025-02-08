// app/data/infoCards.ts

export interface InfoCard {
  iconName: string;
  title: string;
  description: string;
}

export const infoCards: InfoCard[] = [
  {
    iconName: 'Zap',
    title: 'Lightning Fast',
    description:
      'We craft websites optimized for speed, ensuring seamless user experiences that load in a flash.',
  },
  {
    iconName: 'Globe',
    title: 'Global Reach',
    description:
      'Our designs are built to captivate audiences worldwide, making your brand truly unforgettable.',
  },
  {
    iconName: 'Palette',
    title: 'Custom Designs',
    description:
      'Tailored to your vision, we deliver unique, eye-catching designs that elevate your online presence.',
  },
  {
    iconName: 'Settings',
    title: 'Dynamic Functionality',
    description:
      'From e-commerce to interactive features, we build websites that work as beautifully as they look.',
  },
  {
    iconName: 'Shield',
    title: 'Secure & Reliable',
    description:
      'Your site’s safety is our priority. We implement robust security measures to keep your data safe.',
  },
  {
    iconName: 'Users',
    title: 'User-Centered',
    description:
      'Our designs prioritize user experience, ensuring intuitive navigation and engagement across devices.',
  },
];
