import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Card from "@/components/Card";
import produtos from "@/pages/api/_array";

function calcDesc(n1: number, n2: number): number {
  return n1 * (1 - n2);
}

export default function Home() {
  return (
    <div>
      <Header />

      <section className="first_section"></section>

      <Footer />
    </div>
  );
}
