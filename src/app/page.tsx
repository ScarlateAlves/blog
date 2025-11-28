import { Button, CardInformation, Heading, Text } from "@/components/ui";
import { CardInformationProps } from "@/components/ui/CardInformation";
import Image from "next/image";

const card: CardInformationProps[] = [
  {
    image: {
      src: "/diy.png",
      alt: "image1",
    },
    title: { children: "DIY: handmade post cards" },
    description: {
      children:
        "Lorem ipsum dolor sit amet consectetur. Non egestas a quisque odio in. Sed sit lacus in nisi proin eu ut. Quis nunc eget aliquam eros at. Nisl convallis ultricies morbi auctor at etiam.",
    },
  },
  {
    reverse: true,
    image: {
      src: "/cloud.png",
      alt: "image1",
    },
    title: { children: "DIY: handmade post cards" },
    description: {
      children:
        "Lorem ipsum dolor sit amet consectetur. Non egestas a quisque odio in. Sed sit lacus in nisi proin eu ut. Quis nunc eget aliquam eros at. Nisl convallis ultricies morbi auctor at etiam.",
    },
  },
  {
    image: {
      src: "/config.png",
      alt: "image1",
    },
    title: { children: "DIY: handmade post cards" },
    description: {
      children:
        "Lorem ipsum dolor sit amet consectetur. Non egestas a quisque odio in. Sed sit lacus in nisi proin eu ut. Quis nunc eget aliquam eros at. Nisl convallis ultricies morbi auctor at etiam.",
    },
  },
  {
    reverse: true,
    image: {
      src: "/food.png",
      alt: "image1",
    },
    title: { children: "DIY: handmade post cards" },
    description: {
      children:
        "Lorem ipsum dolor sit amet consectetur. Non egestas a quisque odio in. Sed sit lacus in nisi proin eu ut. Quis nunc eget aliquam eros at. Nisl convallis ultricies morbi auctor at etiam.",
    },
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-5 items-center mx-5 py-5 lg:p-10">
        <Image
          src="/image1.png"
          alt="uma imagem 1 py-10"
          width="1280"
          height="500"
        />
        <div className="max-w-4xl flex flex-col justify-between items-center gap-5 text-center bg-red-500">
          <Heading>Eu eita teste teste outre </Heading>
          <Text>
            coisa Lorem ipsum dolor sit amet consectetur. Non egestas a quisque
            odio in. Sed sit lacus in nisi proin eu ut. Quis nunc eget aliquam
            eros at. Nisl convallis ultricies morbi auctor at etiam. Tellus in
            at egestas aliquet cras diam. Elementum vivamus cras duis
            condimentum arcu convallis netus eu commodo. Non pellentesque
            feugiat id.
          </Text>
          <Button>Read more</Button>
        </div>
      </div>
      {card.map((item, index) => (
        <CardInformation key={index} {...item} />
      ))}
      <Button>Read more</Button>
    </div>
  );
}
