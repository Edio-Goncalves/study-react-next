import Footer from "@/components/Footer";
import Header from "@/components/Header";
import cursos from "@/pages/api/_cursos";
import { useState } from "react";

export default function inputsPage() {
  const [nome, setNome] = useState<string>("");
  const [sobrenome, setSobrenome] = useState<string>("");
  const [curso, setCurso] = useState<string>("");

  return (
    <div>
      <Header />
      <div className="study wrapper">
        <section>
          <div>#Formulario</div>
          <form action="">
            <div>
              <label>Nome</label>
              <input
                type="text"
                value={nome}
                onChange={(evt) => setNome(evt.target.value)}
              />
            </div>
            <div>
              <label>Sobrenome</label>
              <input
                type="text"
                value={sobrenome}
                onChange={(evt) => setSobrenome(evt.target.value)}
              />
            </div>
            <div>
              <label>Cursos</label>
              <select
                value={curso}
                onChange={(evt) => setCurso(evt.target.value)}
              >
                <option value="HTML">HTML</option>
                <option value="REACT">REACT</option>
                <option value="JS">JS</option>
                <option value="CSS">CSS</option>
                <option value="FIGMA">FIGMA</option>
              </select>
            </div>
          </form>
          <div>Nome: {nome}</div>
          <div>Sobrenome: {sobrenome}</div>
          <div>Curso: {curso}</div>
        </section>
        <section>
          <div>#Lista</div>
          <div>
            <select>
              {cursos.map((e, index) => {
                return (
                  <option key={index} value={e}>
                    {e}
                  </option>
                );
              })}
            </select>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
