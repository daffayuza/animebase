import Link from "next/link";
import InputSearch from "./inputSearch";

export default function Navbar(){
    return (
        <header className="bg-color-1">
            <div className="flex md:flex-row flex-col justify-between md:items-center p-4 md:mx-10 mx-1 gap-2">
                <Link href='/' className="font-bold text-color-font text-2xl ">Anime<span className="text-color-coklat">Base🔥</span></Link>
                <InputSearch />
            </div>
        </header>
    )
}   