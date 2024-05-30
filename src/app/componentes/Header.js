import Image from "next/image";
import Styles from "./main.module.css"

export default async function Header() {
    return (
      <header>
        <div className={Styles.nav}>
        <Image className={Styles.img} src="" width="50" height="50"/>
    <a className={Styles.aa} >Shop Main</a>
  <a className={Styles.a} href=""> Home </a>
  <a className={Styles.a} href=""> Carrinho </a>
</div>
      </header>
    );
  }
  