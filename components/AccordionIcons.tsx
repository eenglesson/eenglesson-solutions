'use client';
import { useState } from 'react';
import {
  CheckCircle,
  ChevronUp,
  Code,
  Kanban,
  Lightbulb,
  Mail,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { desktopVariants } from '@/lib/motionVariants';
import { motion } from 'framer-motion';
import { TextEffect } from './ui/text-effect';

const items = [
  {
    id: '1',
    icon: Code,
    title: 'What web development services do you provide?',
    content:
      'We specialize in frontend development with React and TypeScript, backend development, and full-stack solutions. Our services include building responsive web applications, API integrations, performance optimization, and ongoing maintenance to make your website work seamlessly.',
  },
  {
    id: '2',
    icon: CheckCircle,
    title: 'How do you guarantee the quality of your work?',
    content:
      'We follow industry best practices, conduct thorough testing (unit, integration, and end-to-end), perform code reviews, and use CI/CD pipelines. We also incorporate client feedback and offer post-launch support to ensure your project is reliable and meets your expectations.',
  },
  {
    id: '3',
    icon: Kanban,
    title: 'What is your project management approach?',
    content:
      'We use agile methodologies with sprints, provide a dedicated project manager, hold regular update meetings, and offer transparent progress tracking. This keeps you informed and involved, ensuring the project aligns with your goals.',
  },
  {
    id: '4',
    icon: Mail,
    title: 'How can I request a quote for my project?',
    content:
      'Simply contact us through our form, email, or phone. We’ll arrange a consultation to understand your requirements and provide a detailed proposal with scope, timeline, and cost estimates to get your project started.',
  },
  {
    id: '5',
    icon: Lightbulb,
    title:
      'How do you handle changes or additional requirements that arise during the project?',
    content:
      'Projects often evolve, and this question clarifies how flexible and adaptable the team is when new needs or adjustments come up. Understanding their process for managing changes ensures that your project can stay on track, even if your requirements shift, without derailing the timeline or budget.',
  },
];

export function AccordionIcons() {
  const [openItem, setOpenItem] = useState<React.Key | null>('');

  return (
    <div className='flex flex-col w-full max-w-[500px] gap-6'>
      <TextEffect
        preset='fade-in-blur'
        per='char'
        className='text-xl font-medium'
        speedSegment={0.2}
        as='h2'
      >
        Typical questions
      </TextEffect>
      <Accordion
        expandedValue={openItem}
        onValueChange={setOpenItem}
        className='flex w-full flex-col divide-y'
        transition={{ duration: 0.2, ease: 'easeInOut' }}
      >
        {items.map((item) => (
          <motion.div
            key={item.id}
            variants={desktopVariants}
            initial='hidden'
            whileInView='visible'
            custom={1} // Use 0 for the first card, 1 for the second, etc.
            viewport={{ once: true }}
          >
            <AccordionItem value={item.id} key={item.id} className='py-4'>
              <AccordionTrigger className='w-full text-left'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-3'>
                    <item.icon className='h-5 w-5 shrink-0' strokeWidth={2} />
                    <span className='text-sm sm:text-base'>{item.title}</span>
                  </div>
                  <ChevronUp className='shrink-0 h-4 w-4 transition-transform duration-200 group-data-[state=open]:-rotate-180 text-foreground' />
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className='pt-2 text-sm text-muted-foreground'>
                  {item.content}
                </p>
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  );
}
