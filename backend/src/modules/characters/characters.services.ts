import { groupEpisodesBySeason } from "../../utils/season";
import sortCharacters from "../../utils/sortCharacters";
import { getAll, getById } from "./characters.repositories";
import { Character, CharacterResonse, SeasonAppearance } from "./characters.schemas";

export function getAllCharacters(): CharacterResonse[] {
    const defaultCharacters: Character[] = getAll();
    const livingCharacters = defaultCharacters.filter(character => character.status === "Alive");

    const characters: CharacterResonse[] = livingCharacters.map(character => {
        const seasonAppearances: SeasonAppearance[] = groupEpisodesBySeason(character.episode);
        character.type.length === 0
            ? character.type = "unknown"
            : null;
            
        let totalAppearances = 0;
        seasonAppearances.forEach(season => { totalAppearances = totalAppearances + season.appearances });

        const newCharacter: CharacterResonse = { ...character, seasonAppearances, totalAppearances };

        return newCharacter;
    });


    return sortCharacters(characters);
}

export function getCharacterById(characterId: number): CharacterResonse | undefined {
    const defaultCharacter = getById(characterId);

    if (!defaultCharacter) return
    if (defaultCharacter.status !== "Alive") return

    const seasonAppearances: SeasonAppearance[] = groupEpisodesBySeason(defaultCharacter.episode);

    let totalAppearances = 0;
    seasonAppearances.forEach(season => { totalAppearances = totalAppearances + season.appearances });

    const character: CharacterResonse = { ...defaultCharacter, seasonAppearances, totalAppearances };
    character.type.length === 0
        ? character.type = "unknown"
        : null;

    return character;
}