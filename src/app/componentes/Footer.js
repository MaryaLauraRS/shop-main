import Styles from "./main.module.css";
import Image from "next/image";
export default async function Footer() {
    return (
      <footer>
        <div className={Styles.footer}>
          <br/>
          <ul className={Styles.redessociais}>
            <a href=""><li><img src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"  width="25" height="25"/></li></a>
            <a href=""><li><img src="https://cdn-icons-png.flaticon.com/512/145/145802.png"  width="25" height="25"/></li></a>
            <a href=""><li><img src="https://logodownload.org/wp-content/uploads/2017/05/ifood-logo.png"  width="40" height="25"/></li></a>
          </ul>
            <img  src="https://static.vecteezy.com/system/resources/previews/009/787/174/original/pink-anthurium-flowers-watercolor-illustration-png.png"  width="25" height="50"/>
            <a  className={Styles.link}>Shop Main</a>
            <a className={Styles.data}>Des de 16/11/2006</a>
            <br/>
        </div>

      </footer>
    );
  }
  