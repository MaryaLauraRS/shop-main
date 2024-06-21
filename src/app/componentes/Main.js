'use client'
import Image from "next/image";
import styles from "./main.module.css";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";


export default function Main() {

const [listProduct, setListProduct] = useState([]);
const [listcomplete, steListcomplete] = useState([]);
const [search, setSearch] = useState ('');

useEffect( ()=>{
  const getProduct = async ()=> {
    const response = await fetch("https://fakestoreapi.com/products/");
    const data = await response.json();
    setListProduct(data);
    steListcomplete(data);
  }
  getProduct();
}, []);

const orderAz = () =>{
  const newList = [...listProduct].sort( (a, b) =>
    a.title.localeCompare(b.title)
);
  setListProduct(newList);
};

const orderZa = () =>{
  const newList = [...listProduct].reverse( (a, b) =>
    a.title.localeCompare(b.title)
);
  setListProduct(newList);
};
const orderMaisMenos = () =>{
  const newList = [...listProduct].sort ( (a, b) =>
  a.price - b.price
  );
  setListProduct(newList)
};
const orderMenosMais = () =>{
  const newList = [...listProduct].reverse ( (a, b) =>
  a.price - b.price
  );
  setListProduct(newList)
};

const SearchText = (text) => {
  setSearch(text);
  
  if( text.trim() === ""){
    setListProduct(listcomplete);
    return
  }
  const newList = listProduct.filter((product) => 
    product.title.toUpperCase().trim().includes(search.toUpperCase().trim()));

    setListProduct(newList);
}

if(listProduct[0] == null){
  return <Spinner/>
}

  return (
    <>
    <div>
      <input type="text" value={search} placeholder="Pesquise o Produto" onChange={(event)=> SearchText( event.target.value)}/>
      <button className={styles.button} onClick={orderAz}>az</button>
      <button className={styles.button} onClick={orderZa}>za</button>
      <button className={styles.button} onClick={orderMaisMenos}>menor preço</button>
      <button className={styles.button} onClick={orderMenosMais}>maior preço</button>
    </div>
    <main className={styles.main}>
      
            {listProduct.map((product) => (
            <div className={styles.card}>
                  <p className={styles.title}>{product.title}</p>
                    <Image src={product.image} width={150} height={200} className={styles.image}/>
                    <p className={styles.price}>R$: {product.price}</p>
                    <p className={styles.description}>{product.description}</p>
                    <button className={styles.button}>adicionar no Carrinho</button>
                    <br/>
          </div>  ))} 
            
            </main>
            </>
    );}
