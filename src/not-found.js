import Link from "next/link";

export default function NotFound(){
    return(
        <div>
            <h1>pagina não encontrada</h1>
            <Link href="/">voltar para Home</Link>
        </div>
    )
}