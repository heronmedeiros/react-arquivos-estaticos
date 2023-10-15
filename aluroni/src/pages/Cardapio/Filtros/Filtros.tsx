import classNames from "classnames";

import filtros from "./filtros.json";
import IOpcao from "interfaces/IOpcao";
import IFiltros from "interfaces/IFiltros";
import styles from "./Filtros.module.scss"

// type algumaCoisa =string;
// type opcao = typeof filtros[0];



const Filtros  = ({ filtro, setFiltro }: IFiltros) => {
  const selecionarFiltro = (opcao: IOpcao) => {
    if (filtro === opcao.id) {
      return setFiltro(null);
    }
    return setFiltro(opcao.id);
  }

  return (
    <div className={styles.filtros}>
      {filtros.map( opcao => (
      <button className={classNames({
        [styles.filtros__filtro] :true,
        [styles['filtros__filtro--ativo']]: (filtro === opcao.id )
      })} key={opcao.id} onClick={() => selecionarFiltro(opcao)}>
        { opcao.label }
      </button>))}
    </div>
  )
}

export default Filtros;