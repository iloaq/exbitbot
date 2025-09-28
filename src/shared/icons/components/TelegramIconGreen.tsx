import { SVGProps } from "react";

interface TelegramIconGreenProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

export function TelegramIconGreen({
  width = 24,
  height = 31,
  ...props
}: TelegramIconGreenProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 22 19"
      fill="none"
      {...props}
    >
      <path
        d="M8.2764 17.8505L8.61818 12.5365L17.9926 3.84302C18.4076 3.45357 17.9071 3.26513 17.3578 3.60433L5.78633 11.1294L0.781774 9.49627C-0.292374 9.1822 -0.304581 8.41587 1.0259 7.86311L20.5193 0.124434C21.4103 -0.290138 22.2647 0.350564 21.923 1.7576L18.6029 17.8505C18.371 18.9937 17.6996 19.2701 16.7719 18.7425L11.7186 14.8983L9.28952 17.3229C9.00877 17.6118 8.77686 17.8505 8.2764 17.8505Z"
        fill="#0FDA9A"
      />
    </svg>
  );
}
