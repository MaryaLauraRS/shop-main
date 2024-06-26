'use client'
import styles from "./id.module.css"
import Image from "next/image";


export default async function Produto( {params} ){
    const response = await fetch("https://fakestoreapi.com/products/" + params.id);
    const data = await response.json();
    return(
            <div className={styles.card}>
                  <p className={styles.title}>{data.title}</p>
                    <Image src={data.image} width={150} height={200} className={styles.image}/>
                    <p className={styles.price}>R$: {data.price}</p>
                    <p className={styles.description}>{data.description}</p>
                    <button className={styles.button}>adicionar no Carrinho</button>
                    <br/>
          </div>
            
        )
}