import Image from "next/image";
import Styles from "./main.module.css";

export default function Spinner(){
    return (

        <Image style={{backgroundColor: "red"}} src="/3-dots-scale-middle.svg" alt='Imagem carregando' width={100} height={100} className={Styles.Spinner}/>
    );
}