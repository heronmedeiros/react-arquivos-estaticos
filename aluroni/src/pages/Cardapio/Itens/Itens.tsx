import cardapio from './itens.json';
import Item from './Item';
import styles from './Itens.module.scss';

const Itens = () => {
  return (
    <div className={styles.itens}>
      {
        cardapio.map( item => (
          <div>
            <Item key={item.id} {...item}/>
          </div>
        ))
      }
    </div>
  )
}

export default Itens;