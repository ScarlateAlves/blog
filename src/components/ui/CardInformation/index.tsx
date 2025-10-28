import Image from "next/image";
import { Heading, HeadingProps } from "../Heading";
import { TextProps, Text } from "../Text";

export interface CardInformationProps {
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  title?: HeadingProps;
  description: TextProps;
  reverse?: boolean;
  column?: boolean;
}

export const CardInformation = ({
  title,
  description,
  image,
  reverse,
  column,
}: CardInformationProps) => {
  return (
    <div
      className={`flex flex-col gap-5 items-center ${
        reverse ? "md:flex-row-reverse" : ""
      }
       ${column ? "md:flex-col" : "flex-row p-6 lg:p-10"} 
      
      `}
    >
      <Image
        {...image}
        alt={image.alt}
        width={image.width ?? 588}
        height="420"
        className="max-h-[500px] object-cover"
      />
      <div className="flex flex-col gap-2">
        {title && <Heading {...title} />}
        <Text {...description} />
      </div>
    </div>
  );
};
