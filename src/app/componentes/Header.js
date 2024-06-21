import Styles from "./main.module.css"

export default async function Header() {
    return (
      <header>
        <div className={Styles.nav}>
        <img className={Styles.img} src="https://static.vecteezy.com/system/resources/previews/009/787/174/original/pink-anthurium-flowers-watercolor-illustration-png.png" width="25" height="50"/>
    <a className={Styles.titulo} >Shop Main</a>
  <a className={Styles.link} href=""> Home </a>
  <a className={Styles.link} href=""> Adicionar Produto </a>
  <a className={Styles.carrinho} href=""> 
  <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#e8eaed"><path d="M263.79-96Q234-96 213-117.21t-21-51Q192-198 213.21-219t51-21Q294-240 315-218.79t21 51Q336-138 314.79-117t-51 21Zm432 0Q666-96 645-117.21t-21-51Q624-198 645.21-219t51-21Q726-240 747-218.79t21 51Q768-138 746.79-117t-51 21ZM253-696l83 192h301l82-192H253Zm-31-72h570q14 0 20.5 11t1.5 23L702.63-476.14Q694-456 676.5-444T637-432H317l-42 72h493v72H276q-43 0-63.5-36.15-20.5-36.16.5-71.85l52-90-131-306H48v-72h133l41 96Zm114 264h301-301Z"/></svg>
   </a>
</div>
<br/>
<a className={Styles.markit} > Compre os melhores produtos com a gente!!! </a>
<br/>
      </header>
    );
  }
  