"use server"

import { getAllCharacters } from "@/actions/characters";
import Card from "@/components/ui/Card";

export default async function CharactersPage() {
    const characters = await getAllCharacters();

    return (
        <div className="p-3">
            <div className="flex items-center justify-center">
                <h2 className="font-semibold text-xl">Living Characters</h2>
            </div>
            <div className="p-3 grid [grid-template-columns:repeat(auto-fit,300px)] gap-3 justify-center">
                {characters.map(character => <Card key={character.id} character={character} />)}
            </div>
        </div>
    );
}
