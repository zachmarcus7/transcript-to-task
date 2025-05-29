'use client';

import * as Tooltip from '@radix-ui/react-tooltip';

export default function TooltipContainer({
  children,
  message,
}: {
  children: React.ReactElement; // better to enforce a single element here
  message?: string;
}) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>

        {/* Only render tooltip if message exists */}
        {message && (
          <Tooltip.Portal>
            <Tooltip.Content
              className="bg-black text-white px-3 py-1 rounded text-sm"
              side="top"
              align="center"
            >
              {message}
              <Tooltip.Arrow className="fill-black" />
            </Tooltip.Content>
          </Tooltip.Portal>
        )}
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}