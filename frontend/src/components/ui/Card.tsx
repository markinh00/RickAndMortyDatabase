import { Character } from "@/schemas/characters"
import Link from "next/link";

type Props = {
    character: Character
}

export default function Card(props: Props) {
    const { character } = props;

    return (
        <div className="bg-primary-foreground border-2 rounded-xl">
            <div className="flex justify-center items-center p-2">
                <p className="font-semibold">{character.name}</p>
            </div>
            <Link href={`characters/${character.id}`}>
                <img src={character.image} alt={`${character.name}'s photo`} />
            </Link>
            <div className="p-3">
                <div className="flex w-full">
                    <p className="mr-1 font-semibold">Status:</p>
                    <p>{character.status}</p>
                </div>
                <div className="flex w-full">
                    <p className="mr-1 font-semibold">Gender:</p>
                    <p>{character.gender}</p>
                </div>
                {character.seasonAppearances.map(seasonAppearance => (
                    <div
                        key={seasonAppearance.season}
                        className="flex w-full"
                    >
                        <p className="mr-1 font-semibold">{`season ${seasonAppearance.season} appearances:`}</p>
                        <p>{seasonAppearance.appearances}</p>
                    </div>
                ))}
                <div className="flex w-full">
                    <p className="mr-1 font-semibold">Total appearances:</p>
                    <p>{character.totalAppearances}</p>
                </div>
            </div>
        </div>
    )
}