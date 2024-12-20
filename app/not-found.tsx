import Link from 'next/link';
import { LoaderPinwheelIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[100dvh]">
      <div className="max-w-md space-y-8 p-4 text-center">
        <div className="flex justify-center">
          <LoaderPinwheelIcon className="size-12 text-primary" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-base text-gray-500">
          The page you are looking for might have been removed or is temporarily unavailable.
        </p>
        <Button>
          <Link href="/">Return</Link>
        </Button>
      </div>
    </div>
  );
}
