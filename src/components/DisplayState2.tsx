interface DisplayProps2 {
  valor2: number;
  fvalor: any;
}

export default function DisplayState2(props: DisplayProps2) {
  function adicionar2() {
    let c = props.valor2;
    c++;
    props.fvalor(c);
  }
  function subtrair2() {
    let c = props.valor2;
    c--;
    props.fvalor(c);
  }

  return (
    <div>
      <div>{props.valor2}</div>

      <div>
        <button className="btn-default" onClick={adicionar2}>
          Adicionar
        </button>
        <button className="btn-default" onClick={subtrair2}>
          Subtrair
        </button>
      </div>
    </div>
  );
}
