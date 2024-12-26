import Image from "next/image";
import Link from "next/link";
import Bg from "@/public/images/bg.png";
const Hero = () => {
  return (
    <main className="min-h-screen flex flex-wrap justify-between items-center px-4">
    {/* Text Section */}
    <div className="w-full sm:w-1/2 flex flex-col justify-center items-start text-left p-8 animate-fadeInLeft">
      <h1 className="text-4xl font-bold font-serif text-center sm:text-left dark:text-white text-cyan-800">
        Welcome to the Future Syntax Blog
      </h1>
      <p className="text-center sm:text-left text-cyan-800 dark:text-gray-400 mt-4">
        A blog about programming, web development, and tech.
      </p>
      <div className="flex justify-center sm:justify-start mt-8">
        <Link href="/Blog">
          <button className="bg-cyan-800 p-3 rounded-md text-white hover:bg-cyan-700 transition-all duration-200">
            Explore Blogs
          </button>
        </Link>
      </div>
    </div>

    {/* Image Section */}
    <div className="relative w-full sm:w-1/2 h-96 sm:h-[500px] animate-fadeInRight">
      <Image
        src={Bg}
        alt="hero"
        fill={true}
        style={{ objectFit: "cover" }} 
        className="object-cover"
      />
    </div>
  </main>
  );
};

export default Hero;
