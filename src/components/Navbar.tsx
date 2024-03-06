import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <h2>
        <span style={{ color: "#FFB534" }}>Haris&apos;s</span>Portofolio
      </h2>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/project">Project</Link>
        </li>
        <li>
          <Link href="/experient">Experience</Link>
        </li>
        <li className="contact-nav-menu">
          <Link style={{ color: "white" }} href="/contact">
            Contact me!
          </Link>
        </li>
      </ul>
    </nav>
  );
}
