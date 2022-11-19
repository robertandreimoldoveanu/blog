import Link from "next/link";

export default function Header() {
  return (
    <header className="header flex flex-row place-content-between items-center">
      <Link className="text-3sm text-3xs font-bold m-2 justify-self-start block" href="/">
        robert&apos;s digital garden
      </Link>
      <div className="menu flex flex-row">
        <Link href="/about" className="block">
          About
        </Link>
      </div>
    </header>
  );
}
