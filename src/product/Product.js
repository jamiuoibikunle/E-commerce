import React, { useEffect, useState } from 'react'
import styles from '../styles/Product.module.css'
import { commerce } from '../commerce/commerce'
import { useParams } from 'react-router-dom'

const Product = () => {

  let { productID } = useParams()
  let [ prodName, setProdName ] = useState()
  let [ prodImg, setProdImg ] = useState()
  let [ prodDesc, setProdDesc ] = useState()
  let [ prodPrice, setProdPrice ] = useState()

  useEffect(() => {

    const fetchData = async () => {
      await commerce.products.retrieve(productID).then((data) => {
        setProdName(data.name)
        setProdPrice(data.price.formatted_with_symbol);
        setProdImg(data.image.url);
        setProdDesc(data.description)
      }); 
    }
    
    fetchData()

  }, [])

  const addCart = () => {
    commerce.cart.retrieve().then((cart) => console.log(cart));
    commerce.cart.add(productID, 1).then((response) => console.log(response));
  }

  return (
    <div className={styles.container}>
      <figure className={styles.wrapper}>
        <img src={prodImg} className={styles.productImage} />
        </figure>

      <main className={styles.desc}>
        <dl className={styles.name}>
        <dt className={styles.nameFlex}>
          {prodName}

        <aside className={styles.addToCart} onClick={addCart} />

        </dt>
        <dd>
          {prodPrice}
        </dd>
        </dl>
        <p className={styles.shortdesc} dangerouslySetInnerHTML={{ __html: prodDesc }} />
      </main>

    </div>
  )
}

export default Product