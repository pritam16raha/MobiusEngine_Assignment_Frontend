const Footer = () => {
  return (
    <footer className="w-full bg-white text-primary font-body">
      <div className="max-w-container mx-auto w-full px-6 lg:px-10 pt-10">
        <img src="/logo/lightblue.svg" alt="MobiusEngine" className="h-18" />
        <div className="w-[360px] my-8">
          <hr className="border border-gray-300 opacity-70" />
        </div>
        <div className="flex flex-wrap gap-40 text-sm">
          <div className="min-w-[200px] ">
            <h4 className="font-medium text-sm mb-2 underline text-primary">
              Address
            </h4>
            <p className="text-primary font-medium text-sm leading-tight">
              1875 Mission St Ste 103 #450
              <br />
              San Francisco, CA 94103
            </p>
          </div>
          <div className="min-w-[200px]">
            <h4 className="font-medium text-sm mb-2 underline text-primary ">
              Email
            </h4>
            <a
              href="mailto:finance@mobiusengine.ai"
              className="hover:underline underline text-primary font-medium text-sm"
            >
              finance@mobiusengine.ai
            </a>
          </div>

          <div className="min-w-[200px]">
            <h4 className="font-medium text-sm mb-2 underline text-primary">
              Telephone
            </h4>
            <a
              href="tel:6508896026"
              className="hover:underline text-primary font-medium text-sm"
            >
              650–889–6026
            </a>
          </div>

          <div className="ml-auto flex flex-col items-start pr-20">
            <h4 className="font-medium text-sm mb-2 underline text-primary">
              Socials
            </h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="border border-primary rounded-full w-8 h-8 flex items-center justify-center hover:bg-primary hover:text-white transition"
              >
                <img
                  src="/icons/linkedin.png"
                  alt="LinkedIn"
                  className="w-4 h-4"
                />
              </a>
              <a
                href="#"
                className="border border-primary rounded-full w-8 h-8 flex items-center justify-center hover:bg-primary hover:text-white transition"
              >
                <img
                  src="/icons/linkedin.png"
                  alt="LinkedIn"
                  className="w-4 h-4"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary text-white text-sm mt-10 py-4">
        <div className="w-full max-w-container mx-auto flex flex-col md:flex-row justify-between items-center px-6 lg:px-10 ">
          <p className="text-white text-sm">© 2023 Mobiusservices LLC</p>
          <div className="flex gap-10 mt-2 md:mt-0">
            <p className="text-white text-sm">Terms & Conditions</p>
            <p className="text-white text-sm">Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
