import Image from "next/image";
import { StaticImageData } from "next/image";
import Ai from "@/public/images/ai.jpg";
import Web from "./../public/images/wd.jpg";
import Robot from "@/public/images/humanoid.jpg";
import Link from "next/link";
export default function BlogSection() {
  interface IBlog {
    id: number;
    date: string;
    category: string;
    title: string;
    description: string;
    author: string;
    image: StaticImageData;
    role: string;
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
    },
  ];

  return (
    <div className=" mx-6 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            From the blog
          </h2>
          <p className="mt-3 text-lg text-gray-500">

          </p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3 lg:gap-x-5">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <Image
                  className="h-48 w-full object-cover"
                  src={blog.image} // Directly reference the image path
                  alt={blog.title}
                  width={400}
                  height={200}
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white dark:bg-gray-500  p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600 ">
                    {blog.category}
                  </p>
                  <a href="#" className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900 dark:text-white">
                      {blog.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500 dark:text-zinc-200">
                      {blog.description}
                    </p>
                  </a>
                </div>
                <Link href={`/blogpost/${blog.id}`}>
                  <button className="bg-blue-500 hover:border-blue-950 rounded-md m-2 px-4 py-2 text-white">
                    Read More
                  </button>
                </Link>
                <div className="mt-6 flex items-center">
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900 dark:text-zinc-200">
                      {blog.author}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-zinc-400">
                      {blog.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
