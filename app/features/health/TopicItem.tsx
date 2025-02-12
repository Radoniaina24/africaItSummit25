"use client";
import Image from "next/image";
import Link from "next/link";
type Topic = {
  title: string;
  description?: string;
  image?: any;
};
interface TopicProps {
  topic: Topic;
  titleColor?: string;
  textColor?: string;
  buttonColors?: {
    from: string;
    to: string;
  };
}
const TopicItem = ({
  topic,
  titleColor = "#000",
  textColor = "#333",
}: TopicProps) => {
  const { image, title, description } = topic;

  return (
    <div className="animate_top rounded-lg pb-9 hover:cursor-pointer">
      {/* Topic Image */}
      <div className="relative block aspect-[368/239]">
        <Image src={image} alt={title} fill />
      </div>

      {/* Topic Title and Metadata */}
      <div>
        <h3
          className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium duration-300 xl:text-lg"
          style={{ color: titleColor }}
        >
          <span>{title}</span>
        </h3>
        <p className="line-clamp-5" style={{ color: textColor }}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default TopicItem;
