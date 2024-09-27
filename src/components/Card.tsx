interface CardProps {
  produto: string;
  valor: number;
  desconto: number;
  funcao: any;
}

export default function Card(props: CardProps) {
  return (
    <div className={`card ${props.desconto <= 0 ? "border-red" : ""}`}>
      <div>Produto:{props.produto}</div>
      <div>Valor: R$ {props.valor.toFixed(2)}</div>
      {props.desconto > 0 && (
        <div>Desconto: {(props.desconto * Math.floor(100)).toFixed(2)}%</div>
      )}
      <div>
        Preço Venda: R$ {props.funcao(props.valor, props.desconto).toFixed(2)}
      </div>
    </div>
  );
}
