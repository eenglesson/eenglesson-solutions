import { TextEffect } from '@/components/ui/text-effect';
interface SectionTitleProps {
  title: string;
  paragraph?: string;
}

export default function SectionTitle({ title, paragraph }: SectionTitleProps) {
  return (
    <div className='w-full min-h-[150px] flex flex-col justify-start items-center'>
      <TextEffect
        per='char'
        preset='fade'
        triggerInView={true}
        className='text-2xl sm:text-h2 font-semibold text-center text-gray-900 mt-16'
      >
        {title}
      </TextEffect>
      {paragraph && (
        <TextEffect
          per='char'
          preset='fade'
          triggerInView={true}
          className='text-gray-500 max-w-[600px] text-center text-lg'
        >
          {paragraph}
        </TextEffect>
      )}
    </div>
  );
}
