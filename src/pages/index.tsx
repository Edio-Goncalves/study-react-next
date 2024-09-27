import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Card from "@/components/Card";

function calcDesc(n1: number, n2: number): number {
  return n1 * (1 - n2);
}

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <div className="main wrapper">
          <Card
            produto={"Mouse"}
            valor={49.9}
            desconto={0.2}
            funcao={calcDesc}
          />
          <Card
            produto={"Teclado"}
            valor={109.9}
            desconto={0.1}
            funcao={calcDesc}
          />
          <Card
            produto={"Monitor"}
            valor={749.9}
            desconto={0.5}
            funcao={calcDesc}
          />
          <Card
            produto={"Cadeira"}
            valor={349.0}
            desconto={0.07}
            funcao={calcDesc}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
