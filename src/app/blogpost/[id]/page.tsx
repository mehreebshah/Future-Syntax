import React from "react";
import Ai from "@/public/images/ai.jpg";
import Web from "@/public/images/wd.jpg";
import Robot from "@/public/images/humanoid.jpg";
import { StaticImageData } from "next/image";
import Image from "next/image";
import AiBlog from "@/components/Ai";
import WebBlog from "@/components/web";
import RobotBlog from "@/components/Robort";
interface IBlog {
  id: number;
  date: string;
  category: string;
  title: string;
  description: string;
  author: string;
  image: StaticImageData;
  role: string;
  content?: () => React.JSX.Element;	
}
const blogs: IBlog[] = [
  {
    id: 1,
    date: "Mar 16, 2020",
    category: "AI",
    title: "AI Is the Future: Transforming the World as We Know It",
    description: `AI is not just a technological trend; it is a paradigm shift that will define the future of humanity...`,
    author: "Michael Foster",
    role: "Co-Founder / CTO",
    image: Ai,
    content : AiBlog,
  },
  {
    id: 2,
    date: "Mar 10, 2020",
    category: "Web Development",
    title: "Web Development: Crafting the Digital Future",
    description: `Web development is the backbone of the digital age, powering the websites, applications, and platforms that shape our online experiences....`,
    author: "Lindsay Walton",
    role: "Front-end Developer",
    image: Web,
    content : WebBlog,
  },
  {
    id: 3,
    date: "Feb 12, 2020",
    category: "Humaniod Robots",
    title: "The Intersection of Technology and Human Form",
    description: `Humanoid robots have long been a fascinating concept in the world of robotics and artificial intelligence (AI). These machines,..... `,
    author: "Tom Cook",
    role: "Director of Product",
    image: Robot,
    content : RobotBlog,
  },
];
const id = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const post = blogs.find((post) => post.id === parseInt(id));

  if (!post) {
    return (
      <div className="text-2xl font-bold text-center mt-10">Post not found</div>
    );
  }
  return (
    <div>
      <div className="max-w-5xl mx-auto p4">
        <h1 className="text-3xl font-bold mb-4 text-cyan-900">{post.title}</h1>
        <p className="text-base mb-2 border-l-4 border-cyan-700 pl-4 italic text-cyan-900">
          {post.description}
        </p>
        <div className="flex gap-2">
          <p className="text-sm text-cyan-600 mb-4 italic">{post.author}</p>
          <p className="text-sm text-cyan-600 mb-4 italic">{post.date}</p>
        </div>
        <Image
          src={post.image}
          alt={post.title}
          className="w-full h-auto rounded-md mt-4"
        />
        <div>
          {post.content && <post.content />}
        </div>
      </div>
    </div>
  );
};

export default id;
