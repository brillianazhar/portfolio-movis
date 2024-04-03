const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="h-1 bg-blue-500 mt-5"></div>
      <div className="flex flex-col lg:flex-row w-full bg-black text-white px-2 py-1 justify-center items-center">
        <p className="lg:relative text-base lg:text-lg font-bold text-center">
          MovIs
        </p>
        <p className="lg:absolute right-0 text-[10px] lg:text-xs px-2 py-1">
          ©️ {year} design by Brillian A. D.
        </p>
      </div>
    </>
  );
};

export default Footer;
