import { TextEffect } from '@/components/ui/text-effect';
interface SectionTitleProps {
  title: string;
  paragraph?: string;
}

export default function SectionTitle({ title, paragraph }: SectionTitleProps) {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <TextEffect
        per='char'
        preset='fade'
        className='text-h3 sm:text-h2 font-semibold text-center mt-16'
        triggerInView={true}
      >
        {title}
      </TextEffect>
      {paragraph && (
        <TextEffect
          per='char'
          preset='fade'
          triggerInView={true}
          className='text-gray-500'
        >
          {paragraph}
        </TextEffect>
      )}
    </div>
  );
}
