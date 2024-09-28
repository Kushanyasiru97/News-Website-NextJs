import Link from "next/link";

export default function MainHeader(){
    return(
        <header>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/news">News</Link></li>
                <li><Link href="/about">About</Link></li>
            </ul>
        </header>
    )
}