'use client';

import { SocialMediaButtons } from './social-media-buttons';

export function FloatingSocialButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-white dark:bg-neutral-800 rounded-full p-3 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <SocialMediaButtons />
      </div>
    </div>
  );
}
