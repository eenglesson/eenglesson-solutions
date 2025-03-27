'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader } from './ui/card';

import { ShineBorder } from './magicui/shine-border';
import { desktopVariants } from '@/lib/motionVariants';
import { TextEffect } from './ui/text-effect';
import { toast } from 'sonner';

const FormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: 'First name must be at least 2 characters.' }),
  lastName: z
    .string()
    .min(2, { message: 'Last name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' }),
});

export function ContactForm() {
  // Initialize the form with React Hook Form and Zod resolver
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },
  });

  // Handle form submission
  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      console.log('Service ID:', process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
      console.log('Template ID:', process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
      console.log('Public Key:', process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

      // Validate that environment variables are defined
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Email service configuration is missing');
      }

      await emailjs.send(
        'service_hjyxwlb',
        templateId,
        {
          first_name: data.firstName,
          last_name: data.lastName,
          from_email: data.email,
          message: data.message,
        },
        publicKey
      );

      toast('Thank you for contacting us!', {
        description:
          'We will review your inquiry and get back to you as soon as possible.',
        className: 'bg-background text-primary',
      });

      form.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Oops! Something went wrong.', {
        description: `We couldn't send your message. Please try again later.`,
      });
    }
  };

  return (
    <motion.div
      variants={desktopVariants}
      initial='hidden'
      whileInView='visible'
      custom={0} // Use 0 for the first card, 1 for the second, etc.
      viewport={{ once: true }}
    >
      <Form {...form}>
        <Card className='p-6 sm:p-8 flex flex-col gap-12 border-none shadow z-20 max-w-[500px] sm:w-[500px] w-full relative bg-background'>
          <ShineBorder
            duration={10}
            shineColor={['#A07CFE', '#FE8FB5', '#FFBE7B']}
          />
          <CardHeader className='flex flex-col px-0 items-center gap-4'>
            <TextEffect
              preset='fade-in-blur' // Choose your desired animation preset
              speedSegment={0.2} // Adjust animation speed as needed
              per='line' // Treat the sentence as a single unit
              as='h2' // Render as an h2 element
              className='text-2xl font-semibold' // Additional styling
              style={{
                background:
                  'linear-gradient(to right, #A07CFE, #FE8FB5, #FFBE7B)', // Define your gradient
                WebkitBackgroundClip: 'text', // Clip the gradient to the text shape
                backgroundClip: 'text', // Standard property for broader support
                color: 'transparent', // Make text transparent to show the gradient
              }}
            >
              Let&apos;s get you to the right place
            </TextEffect>

            <TextEffect
              preset='fade-in-blur'
              speedSegment={0.3}
              per='line'
              as='p'
              className='text-base w-fit font-normal text-center'
            >
              Take the first step toward transforming your online presence.
              Let&apos;s discuss how I can help you succeed.
            </TextEffect>
          </CardHeader>
          <form onSubmit={form.handleSubmit(onSubmit)} className=' space-y-8'>
            {/* First Name Field */}
            <div className='flex justify-between w-full items-start gap-6'>
              <motion.div
                variants={desktopVariants}
                initial='hidden'
                whileInView='visible'
                custom={1} // Use 0 for the first card, 1 for the second, etc.
                viewport={{ once: true }}
                className='w-full'
              >
                <FormField
                  control={form.control}
                  name='firstName'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder='John' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
              {/* Last Name Field */}
              <motion.div
                variants={desktopVariants}
                initial='hidden'
                whileInView='visible'
                custom={2} // Use 0 for the first card, 1 for the second, etc.
                viewport={{ once: true }}
                className='w-full'
              >
                <FormField
                  control={form.control}
                  name='lastName'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder='Doe' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
            </div>
            {/* Email Field */}
            <motion.div
              variants={desktopVariants}
              initial='hidden'
              whileInView='visible'
              custom={3} // Use 0 for the first card, 1 for the second, etc.
              viewport={{ once: true }}
            >
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Email</FormLabel>
                    <FormControl>
                      <Input
                        type='email'
                        placeholder='john.doe@gmail.com'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>
            {/* Message Field */}
            <motion.div
              variants={desktopVariants}
              initial='hidden'
              whileInView='visible'
              custom={4} // Use 0 for the first card, 1 for the second, etc.
              viewport={{ once: true }}
            >
              <FormField
                control={form.control}
                name='message'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder='Your message here' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div
              variants={desktopVariants}
              initial='hidden'
              animate='visible'
              custom={5}
              transition={{ delay: 0.5 }}
            >
              <Button
                type='submit'
                className='hover:bg-accent dark:bg-accent dark:text-primary dark:hover:text-background  dark:hover:bg-primary   w-full font-medium hover:text-primary'
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </motion.div>
          </form>
        </Card>
      </Form>
    </motion.div>
  );
}
