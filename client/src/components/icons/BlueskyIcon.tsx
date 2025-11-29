import * as React from "react";

export function BlueskyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      {/* Simple butterfly silhouette */}
      <path d="M12 2c-1.6 0-3 1.2-3.4 2.7-.4 1.5.4 3 1.8 3.6-1.4.6-2.2 2.1-1.8 3.6.4 1.5 1.8 2.7 3.4 2.7s3-1.2 3.4-2.7c.4-1.5-.4-3-1.8-3.6 1.4-.6 2.2-2.1 1.8-3.6C15 3.2 13.6 2 12 2zM6 8c-2 0-4 1.6-4 3.6S4 15.2 6 15.2c1.6 0 2.6-1.1 3-2.6S7.6 8 6 8zm12 0c-1.6 0-2.6 1.1-3 2.6s.4 2.6 3 2.6c2 0 4-1.6 4-3.6S20 8 18 8zM8 16c-1.6 0-2.6 1.1-3 2.6S6.4 21.2 8 21.2c1.6 0 2.6-1.1 3-2.6S9.6 16 8 16zm8 0c-1.6 0-2.6 1.1-3 2.6s1.4 2.6 3 2.6c1.6 0 2.6-1.1 3-2.6S17.6 16 16 16z" />
    </svg>
  );
}
