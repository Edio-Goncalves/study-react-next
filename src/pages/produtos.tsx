import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Card from "@/components/Card";
import produtos from "@/pages/api/_array";

function calcDesc(n1: number, n2: number): number {
  return n1 * (1 - n2);
}

export default function ProdutoPage() {
  return (
    <div>
      <Header />
      <section className="first_product">
        <h2>Inputs Simples</h2>
        <div className="first wrapper">
          <Card
            produto={"Mouse"}
            valor={49.9}
            desconto={0.2}
            funcao={calcDesc}
          />
          <Card
            produto={"Teclado"}
            valor={109.9}
            desconto={0}
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
          <Card
            produto={"Cadeira"}
            valor={349.0}
            desconto={0.07}
            funcao={calcDesc}
          />
          <Card
            produto={"Cadeira"}
            valor={349.0}
            desconto={0.07}
            funcao={calcDesc}
          />
        </div>
      </section>

      <section className="second_product">
        <h2>Inputs por array</h2>
        <div className="second wrapper">
          {produtos.map((item) => {
            if (item.disponivel) {
              return (
                <Card
                  produto={item.produto}
                  valor={item.valor}
                  desconto={item.desconto}
                  funcao={calcDesc}
                />
              );
            }
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
