import { Character } from "./characters.schemas";
import fs from "fs";

export function getAll(): Character[] {
    const charactersJson = fs.readFileSync('./characters.json', 'utf-8');
    const characters: Character[] = JSON.parse(charactersJson);

    return characters
}

export function getById(characterId: number): Character | undefined {
    const charactersJson = fs.readFileSync('./characters.json', 'utf-8');
    const characters: Character[] = JSON.parse(charactersJson);

    const character = characters.find(c => c.id === characterId);

    return character;
}