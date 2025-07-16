import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export default function Header() {
    return (
        <header className="p-3 flex justify-between items-center bg-primary-foreground border-b-2">
            <Link href="/characters">
                <h1 className="text-xl sm:text-2xl font-semibold">Rick and Morty Database</h1>
            </Link>
            <ThemeToggle />
        </header>
    )
}