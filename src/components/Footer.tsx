export default function Footer() {
  return (
    <footer className="bg-black  py-10 text-white/50 px-20 gap-5 flex flex-col items-center">
      <div className="justify-between items-center w-full  flex">
        <p>Simfort</p>
        <a href="https://github.com/Simfort">
          <img
            src="/github.png"
            width={50}
            className="bg-white opacity-50 hover:opacity-100 rounded-full"
          />
        </a>{" "}
      </div>{" "}
      <div className="justify-between items-center w-full  flex">
        <div className=" w-full flex flex-col">
          <a href="#projects" className="text-blue-500 visited:text-blue-300">
            Projects
          </a>

          <a href="#home" className="text-blue-500  visited:text-blue-300">
            Home
          </a>
        </div>{" "}
        <a href="https://t.me/simfart">
          <img
            src="/telegram.png"
            width={50}
            className="bg-white opacity-50 hover:opacity-100 rounded-full"
          />
        </a>
      </div>
    </footer>
  );
}
