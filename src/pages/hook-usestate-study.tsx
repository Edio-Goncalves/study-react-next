import Footer from "@/components/Footer";
import Header from "@/components/Header";
import DisplayState from "@/components/displayState";
import DisplayState2 from "@/components/DisplayState2";
import { useState } from "react";

export default function usestate() {
  const [cont, setCont] = useState<number>(0); //seta useState no valor 0
  const [cont2, setCont2] = useState<number>(0); //seta useState no valor 0

  function adicionar() {
    let c = cont;
    c++;
    setCont(c);
  }
  function subtrair() {
    let c = cont;
    c--;
    setCont(c);
  }

  return (
    <div>
      <Header />

      <div className="study wrapper">
        <section>
          <h3>usestate</h3>
          <p>
            Sempre que seu valor for alterado a página será renderizada
            novamente. Difernte de alteração de uma variável onde a página não é
            alterada.
          </p>
          <h3>usestate - Exemplo com transferencia de função</h3>
          <p>Usar a função do "Pai" em um componente ("filho")</p>
          <div className="box-study">
            <DisplayState
              valor={cont}
              fadicionar={adicionar}
              fsubtrair={subtrair}
            />
          </div>
        </section>

        {/* usestatecom codigo mais modulado */}
        <section>
          <h3>usestate com codigo mais modular</h3>
          <p>
            quando está setado o que o componente tem que fazer podemos colocar
            todas funções no componente para modular melhor e ter um controle
            para refatorar
          </p>
          <div className="box-study">
            <DisplayState2 valor2={cont2} fvalor={setCont2} />
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
