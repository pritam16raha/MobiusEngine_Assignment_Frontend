
const ContactUs = () => {
  return (
    <section className="w-full  flex justify-center py-20 bg-white">
      <div className="w-full max-w-secondary_container min-h-[300px] bg-primary rounded-3xl border-2 border-light flex items-center justify-between px-10 py-12">
        {/* Left side */}
        <div className="flex flex-col items-start">
          <p className="text-white text-3xl font-body uppercase leading-none">
            Still have <br /> doubts?
          </p>
        </div>

        {/* Center Text */}
        <h2 className="text-white text-[4rem] font-heading font-semibold">
          Contact us
        </h2>

        {/* Right side Circle */}
        <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center">
          <img
            src="/icons/arrow.png"
            alt="Arrow Icon"
            className="w-10 h-10 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
