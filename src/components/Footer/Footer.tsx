const Footer = () => {
  return (
    <div className="w-full lg:wrapper flex flex-col lg:flex-row justify-center items-center">
      <div className="flex-1 mb-10 md:mb-0">
        <img src="/assets/logos/Logo.png" alt="logo" className="h-12 w-50" />
      </div>
      <div className="">
        <address className="text-secondary-text text-xs">
          Copyright since 2024. All rights reserved.
        </address>
      </div>
    </div>
  );
};

export default Footer;
