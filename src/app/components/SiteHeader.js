"use client";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "next-themes";

const SiteHeader = () => {
  const { theme } = useTheme();
  return (
    <header className="flex justify-between mx-4  font-semibold items-center h-20 border-b bg-background">
      <div className="flex gap-4 items-center px-4">
        <a href="/">
          <img
            src="/logolight.svg"
            className={`h-10 w-10 ${theme === "dark" ? "hidden" : "block"}`}
          />
          <img
            src="/logodark.svg"
            className={`h-10 w-10 ${theme === "light" ? "hidden" : "block"}`}
          />
        </a>
        <p>Web Dev Wise</p>
      </div>

      <form className="hidden md:inline-block">
        <input
          id="search"
          name="search"
          type="search"
          autoComplete="off"
          placeholder="search something.."
          className="h-9 lg:w-[300px] bg-background"
        />
      </form>
      <div className="flex gap-4 px-4">
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/vision">Vision</Link>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default SiteHeader;
