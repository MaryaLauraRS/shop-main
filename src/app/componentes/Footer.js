import Styles from "./main.module.css"
import Image from "next/image";
export default async function Footer() {
    return (
      <footer>
        <div className={Styles.footer}>
            <Image className={Styles.img} src="" width="50" height="50"/>
            <a  className={Styles.link}>Shop Main</a>
        </div>

      </footer>
    );
  }
  