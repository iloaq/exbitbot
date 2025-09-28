import { SVGProps } from "react";

interface MailIconGradientProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

export function MailIconGradient({
  width = 24,
  height = 31,
  ...props
}: MailIconGradientProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 16"
      fill="none"
      {...props}
    >
      <defs>
        <linearGradient
          id="mail-gradient"
          x1="0"
          y1="8"
          x2="20"
          y2="8"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0FDA9A" />
          <stop offset="1" stopColor="#4BC6F6" />
        </linearGradient>
      </defs>
      <path
        d="M18 4L10 9L2 4V2L10 7L18 2V4ZM18 0H2C0.89 0 0 0.89 0 2V14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H18C18.5304 16 19.0391 15.7893 19.4142 15.4142C19.7893 15.0391 20 14.5304 20 14V2C20 0.89 19.1 0 18 0Z"
        fill="url(#mail-gradient)"
      />
    </svg>
  );
}
