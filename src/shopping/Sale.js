import React from 'react'
import styles from '../styles/Sale.module.css'
import {Link} from 'react-router-dom' 
import { CircularProgress } from '@material-ui/core'

function Sale({ products }) {
  return (
    <div className={styles.sale}>
      <header className={styles.header}>
        <dl>
          <dt>
            Sale
          </dt>
          <dd>
            Super sales
          </dd>
          
        </dl>
      </header>
      
      {products ?
      
      <section className={styles.allProducts}>
        {products.map((product) => (
          
        <Link to={product.id} className={styles.link} key={product.id}>

        <figure className={styles.individualFig}>
          <img src={product.image.url} className={styles.product} alt='Product' />
          <figcaption>
            <p className={styles.model}>
              {product.categories[0].name || 'Unspecified'}
            </p>
            <p className={styles.name}>
              {product.name}
            </p>
            <p className={styles.price}>
              {product.price.formatted_with_symbol}
            </p>
          </figcaption>
        </figure>

        </Link>


        ))}
      </section> : <div className={styles.progress}><CircularProgress /></div> }
    </div>
  )
}

export default Sale