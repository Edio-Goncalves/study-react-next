import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="header wrapper">
        <div>
          <a href="/">LOGO</a>
        </div>
        <div>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/sobre">Sobre</Link>
            </li>
            <li>
              <Link href="/produtos">Produtos</Link>
            </li>
            <li>
              <Link href="/contato">Contato</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
