const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white  md:py-12 py-6 px-8 font-montserrat">
      <section className="flex md:flex-row flex-col md:items-center justify-between gap-4 items-start">
        <div>
          <h1 className="text-2xl font-bold">TN Treasures</h1>
          <p className="text-sm mt-1">
            Highlighting the state’s historical, natural, and culinary
            treasures.
          </p>
        </div>
        <div className="flex items-center gap-4 text-2xl">
          <a href="">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-facebook "></i>
          </a>
          <a href="">
            <i className="fa-brands fa-instagram"></i>
          </a>

          <a href="">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
