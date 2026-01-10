export default function Hero() {
  return (
    
      <section
        id="home"
        className="bg-gradient-to-r from-blue-50 to-indigo-100 pb-40 pt-40  w-full z-10" >
        <div className="container mx-auto px-6 text-center w-full">

          <div className="flex justify-center pt-1  pb-8">
            <img
              src="/shiju.jpg"
              alt="Profile Photo"
              className="h-20 w-25 rounded-full object-cover shadow-lg"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 bg-clip-text text-transparent mb-4">
            Hi, I'm Shiju A
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
            Full Stack Developer
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Passionate about solving real-world problems using modern technologies.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
            >
              Get In Touch
            </a>

            <a
              href="#projects"
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg"
            >
              View My Work
            </a>
          </div>

          <div className="mt-10 text-gray-600">
            <p>shijuavtm@gmail.com</p>
            <p>+91 9497192475</p>
            <p>Kerala, India</p>
          </div>
        </div>
      </section>
    
  );
}
