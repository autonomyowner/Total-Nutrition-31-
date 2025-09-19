import clsx from 'clsx';
import Image from 'next/image';

export default function LogoSquare({ size }: { size?: 'sm' | undefined }) {
  return (
    <div
      className={clsx(
        'flex flex-none items-center justify-center overflow-hidden',
        {
          'h-[40px] w-[40px] rounded-xl': !size,
          'h-[30px] w-[30px] rounded-lg': size === 'sm'
        }
      )}
    >
      <Image
        src="/images/logo.jpg"
        alt={`${process.env.SITE_NAME} logo`}
        width={size === 'sm' ? 30 : 40}
        height={size === 'sm' ? 30 : 40}
        className="object-contain"
        priority
      />
    </div>
  );
}
