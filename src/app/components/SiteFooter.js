import Link from "next/link";

const SiteFooter = () => {
  const siteFooterLinks = {
    footer: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Vision", href: "/vision" },
      { name: "Terms & Conditions", href: "/" },
      { name: "FAQ", href: "/" },
    ],
  };

  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl overflow-hidden px-4 py-10 sm:py-16 lg:px-6">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12">
          {siteFooterLinks.footer.map((item, index) => (
            <div key={item.name} className="pb-6">
              <Link href={item.href}>{item.name}</Link>
            </div>
          ))}
        </nav>
        <Link
          href="youtube.com/webdevwise100"
          className="mt-10 block text-center text-xs leading-5"
        >
          Web Dev Wise &copy; {new Date().getFullYear()}
          <p>Enjoy its free</p>
        </Link>
      </div>
    </footer>
  );
};

export default SiteFooter;
