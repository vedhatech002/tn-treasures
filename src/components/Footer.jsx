const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white mt-10 py-12 px-8 font-montserrat">
      <section className="flex items-center justify-between">
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
