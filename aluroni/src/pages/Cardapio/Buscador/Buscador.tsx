import IBuscador from "interfaces/IBuscador"
import styles from './Buscador.module.scss';
import { CgSearch } from 'react-icons/cg';

const Buscador = ({ busca, setBusca }: IBuscador) => {
  return (
    <div className={styles.buscador}>
      <input
        value={busca}
        onChange={ evento => setBusca(evento.target.value)}
        placeholder="Buscar"
      />
      <CgSearch size={20} color="#4C4D5E"/>
    </div>
  )
}

export default Buscador