import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="header wrapper">
        <div>
          <a href="/">LOGO</a>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/produtos">Produtos</Link>
            </li>
            <li>
              <Link href="/hook-study">hook-study</Link>
            </li>
            <li>
              <Link href="/inputs-study">inputs-study</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
