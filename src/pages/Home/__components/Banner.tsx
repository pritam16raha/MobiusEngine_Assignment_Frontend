import Button from "../../../components/Button";

const Banner = () => {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center bg-[url('/image/bg.png')] bg-cover bg-center">
      <div className="max-w-secondary_container mx-auto w-full flex items-center justify-between px-6 lg:px-10 mt-20">
        <div className="max-w-xl space-y-6">
          <h1 className="text-5xl font-heading text-white leading-none">
            Land job interviews <br />
            <span className="text-primary">10x</span> <span>faster</span>
          </h1>
          <p className="text-base text-white font-body leading-none py-8">
            Custom-built resumes that match your goals, keywords, and <br />{" "}
            recruiter expectations.
          </p>
          <Button text="Get Started →" />
        </div>
        <div className="relative w-[250px]">
          {/* Book Image */}
          <img
            src="/image/image.png"
            alt="Ebook Cover"
            className="w-full h-auto "
          />

          {/* Floating Book Icon */}
          <div className="absolute bottom-2 -right-5 flex flex-col items-center">
            {/* Circle with Blur */}
            <div className="w-14 h-14 rounded-full border border-white bg-white/20 backdrop-blur flex items-center justify-center">
              <img src="/icons/book.png" alt="Book Icon" className="w-8 h-8" />
            </div>
          </div>
          <p className="text-xs text-white mt-4 font-body text-center">
            Download Free E-Book
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
