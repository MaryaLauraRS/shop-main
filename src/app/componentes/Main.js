import Image from "next/image";
import styles from "./main.module.css";

export default async function Main() {
const response = await fetch("https://fakestoreapi.com/products/");
const data = await response.json();

  return (
    
    <main className={styles.main}>
      
            {data.map((product) => (
            <div className={styles.card}>
                  <p className={styles.title}>{product.title}</p>
                    <Image src={product.image} width={150} height={200} className={styles.image}/>
                    <p className={styles.price}>R$: {product.price}</p>
                    <p className={styles.description}>{product.description}</p>
                    <button className={styles.button}>adicionar no Carrinho</button>
                    <br/>
          </div>  ))} 
            
            </main>
    );}
