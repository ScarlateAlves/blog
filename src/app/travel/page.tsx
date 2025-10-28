import { CardInformation, Heading } from "@/components/ui";
import { CardInformationProps } from "@/components/ui/CardInformation";
import Image from "next/image";

const card: CardInformationProps[] = [
  {
    column: true,
    image: {
      src: "/diy.png",
      alt: "image1",
      width: 1280,
    },
    title: { children: "DIY: handmade post cards" },
    description: {
      children:
        "Aside from the cherry blossoms, Japan has a lot to offer in the spring. The weather is mild and pleasant, making it a great time to explore the country's historic temples and lush gardens. You can also experience traditional tea ceremonies, visit vibrant markets, and indulge in delicious Japanese cuisine. Don't forget to visit Kyoto, home to some of Japan's most beautiful temples and gardens, and Tokyo, a bustling metropolis with a mix of modern and traditional attractions.",
    },
  },
  {
    column: true,
    image: {
      src: "/cloud.png",
      alt: "image1",
      width: 1280,
    },
    title: { children: "DIY: handmade post cards" },
    description: {
      children:
        "Aside from the cherry blossoms, Japan has a lot to offer in the spring. The weather is mild and pleasant, making it a great time to explore the country's historic temples and lush gardens. You can also experience traditional tea ceremonies, visit vibrant markets, and indulge in delicious Japanese cuisine. Don't forget to visit Kyoto, home to some of Japan's most beautiful temples and gardens, and Tokyo, a bustling metropolis with a mix of modern and traditional attractions.",
    },
  },
  {
    column: true,
    image: {
      src: "/config.png",
      alt: "image1",
      width: 1280,
    },
    title: { children: "DIY: handmade post cards" },
    description: {
      children:
        "Aside from the cherry blossoms, Japan has a lot to offer in the spring. The weather is mild and pleasant, making it a great time to explore the country's historic temples and lush gardens. You can also experience traditional tea ceremonies, visit vibrant markets, and indulge in delicious Japanese cuisine. Don't forget to visit Kyoto, home to some of Japan's most beautiful temples and gardens, and Tokyo, a bustling metropolis with a mix of modern and traditional attractions.",
    },
  },
  {
    column: true,
    image: {
      src: "/food.png",
      alt: "image1",
      width: 1280,
    },
    title: { children: "DIY: handmade post cards" },
    description: {
      children:
        "Aside from the cherry blossoms, Japan has a lot to offer in the spring. The weather is mild and pleasant, making it a great time to explore the country's historic temples and lush gardens. You can also experience traditional tea ceremonies, visit vibrant markets, and indulge in delicious Japanese cuisine. Don't forget to visit Kyoto, home to some of Japan's most beautiful temples and gardens, and Tokyo, a bustling metropolis with a mix of modern and traditional attractions.",
    },
  },
];

export default function Travel() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-5 items-center mx-5 py-5 lg:p-10">
        <Image
          src="/image1.png"
          alt="uma imagem 1 py-10"
          width="1280"
          height="500"
        />
        <div className="max-w-4xl flex flex-col justify-between items-center gap-5 text-center">
          <Heading>Best place to travel to in Spring</Heading>
        </div>
      </div>
      <div className="flex flex-col gap-10 pt-5">
        {card.map((item, index) => (
          <CardInformation key={index} {...item} />
        ))}
      </div>
      <div className="pt-8">
        <Heading>more from the category</Heading>
        <div className="flex gap-5 pt-5">
          {card.map((item, index) => (
            <CardInformation key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
