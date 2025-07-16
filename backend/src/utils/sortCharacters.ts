import { CharacterResonse } from "../modules/characters/characters.schemas";

const sortCharacters = (characters: CharacterResonse[]) => {
    return characters.sort((a, b) => {
        if (b.totalAppearances !== a.totalAppearances) {
            return b.totalAppearances - a.totalAppearances;
        }
        return a.name.localeCompare(b.name);
    });
}

export default sortCharacters;