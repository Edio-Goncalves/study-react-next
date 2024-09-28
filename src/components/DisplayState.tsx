interface DisplayProps {
  valor: number;
  fadicionar: any;
  fsubtrair: any;
}
export default function DisplayState(props: DisplayProps) {
  return (
    <div>
      <div>{props.valor}</div>

      <div>
        <button className="btn-default" onClick={props.fadicionar}>
          Adicionar
        </button>
        <button className="btn-default" onClick={props.fsubtrair}>
          Subtrair
        </button>
      </div>
    </div>
  );
}
