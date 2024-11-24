import Image from 'next/image';
import backgroundImage from '@/public/background-auth.jpg';
// import backgroundImage from '/public/auth-bg.svg';

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-screen w-full lg:grid lg:grid-cols-2">
      {/* min-h-[100dvh] */}
      <div className="flex items-center justify-center py-12">
        {children}
      </div>
      <div className="h-screen bg-muted hidden lg:block">
        <Image
          src={backgroundImage}
          alt="Image"
          className="h-screen object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}
