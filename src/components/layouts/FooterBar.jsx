import Logo from "../../assets/logo/Logo.png";

export default function FooterBar() {
  const handleNavigation = (linkName) => {
    console.log(`Navigating to: ${linkName}`);
    alert(`Redirecting to ${linkName}...`);
  };

  return (
    <footer className="bg-(--color-primary-text) text-(--color-bg)">
      {/* Top Section */}
      <div className="bg-(--color-bg) text-(--color-primary-text) flex flex-wrap items-start justify-between px-13 py-7">
        {/* LOGO */}
        <div className="footer-logo">
          <img
            src={Logo}
            alt="Lumé Logo"
            className="h-17 w-auto cursor-pointer block"
          />
        </div>

        {/* CONTACT INFO */}
        <div className="flex flex-col gap-4 text-[15px]">
          <p className="cursor-pointer">Lumé@gmail.com</p>
          <p className="cursor-pointer">09123456789</p>
          <p className="cursor-pointer">Lucena City, Quezon Province</p>
        </div>

        {/* INFO */}
        <div className="flex flex-col gap-4 text-[15px]">
          <p
            className="cursor-pointer"
            onClick={() => handleNavigation("Privacy Policy")}
          >
            Privacy Policy
          </p>
          <p
            className="cursor-pointer"
            onClick={() => handleNavigation("Terms & Conditions")}
          >
            Terms & Conditions
          </p>
        </div>

        {/* LINKS */}
        <div className="footer-links flex flex-col gap-4 text-[15px]">
          <p
            className="cursor-pointer"
            onClick={() => handleNavigation("Web Design")}
          >
            Web Design
          </p>
          <p
            className="cursor-pointer"
            onClick={() => handleNavigation("Support")}
          >
            Support
          </p>
          <p
            className="cursor-pointer"
            onClick={() => handleNavigation("FAQs")}
          >
            FAQs
          </p>
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex justify-between px-13 py-13">
        <div className="flex flex-col gap-2 text-[14px]">
          <p
            className="cursor-pointer hover:"
            onClick={() => handleNavigation("About Us")}
          >
            ABOUT US
          </p>
          <p
            className="cursor-pointer"
            onClick={() => handleNavigation("Contact Us")}
          >
            CONTACT US
          </p>
        </div>

        <div className="flex flex-col gap-2 text-[14px] footer-column">
          {["BAROTEA, J", "AGUILERA, JK", "CAMUNAG, DI", "CAPISTRANO, C"].map(
            (name) => (
              <p key={name} className="text-[14px] cursor-pointer">
                {name}
              </p>
            ),
          )}
        </div>

        <div className="flex flex-col gap-2 text-[14px] footer-column">
          {["CHUA, C", "DALUMPINES, GB", "DE GUZMAN, MV", "DOMANICO, EP"].map(
            (name) => (
              <p key={name} className="text-[14px]">
                {name}
              </p>
            ),
          )}
        </div>

        <div className="flex flex-col gap-2 text-[14px] footer-column">
          {["ELUMBA, A", "ENDOZO, CJ", "GUIRUELA, AM", "HUFANA, AM"].map(
            (name) => (
              <p key={name} className="text-[14px]">
                {name}
              </p>
            ),
          )}
        </div>

        <div className="flex flex-col gap-2 text-[14px] footer-column">
          {["LACUESTA, ZL", "OABEL, KI", "RANCES, FJ", "SEPILLO, CK"].map(
            (name) => (
              <p key={name} className="text-[14px]">
                {name}
              </p>
            ),
          )}
        </div>
      </div>

      {/* Divider */}
      <hr className="border-2 border-bs-neutral-600 mr-10 ml-10" />

      <div className="py-6 flex flex-col justify-center">
        {/* Social Icons */}
        <div className="flex gap-3 justify-center">
          {[
            { label: "f", href: "https://facebook.com" },
            { label: "t", href: "https://twitter.com" },
            { label: "r", href: "https://reddit.com" },
            { label: "g+", href: "https://google.com" },
            { label: "•", href: "#" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 border border-zinc-400 rounded-full flex items-center justify-center text-xs transition duration-300 icon mb-4 hover:bg-white hover:text-black"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-[#aaa] self-center text-xs">
          © Copyright. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
