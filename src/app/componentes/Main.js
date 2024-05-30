import Image from "next/image";
import styles from "./main.module.css";

export default async function Main() {
const response = await fetch("https://fakestoreapi.com/products/");
const data = await response.json();

  return (
    
    <main className={styles.main}>
      
            {data.map((product) => (
            <div className={styles.card}>
                    <Image src={product.image} width={150} height={150}/>
                    <p className={styles.title}>{product.title}</p>
                    <p className={styles.price}>R$: {product.price}</p>
                    <button>adicionar no Carrinho</button>
                    <p className={styles.description}>{product.description}</p>
                    
          </div>  ))} 
            
            </main>
    );}
