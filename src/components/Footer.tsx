function Footer() {
  return (
    <div className="bg-black-bg text-white w-full">
      <div className="px-8 flex justify-between items-center mx-auto">
        <div className="w-full flex flex-col items-center justify-center font-light">
          <p className="mb-2 mt-10 text-3xs tracking-wider">©2026 GADRIANA.</p>
          <p className="mb-12 text-3xs tracking-wider">
            Website built by{" "}
            <a
              href="https://www.linkedin.com/in/laianavalonarxe/"
              target="_blank"
              className="underline">
              Laia Navalón Arxé
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
