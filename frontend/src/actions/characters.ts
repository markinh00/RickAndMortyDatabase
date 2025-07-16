"use server"

import { api } from "@/lib/api";
import { Character } from "@/schemas/characters";


export async function getAllCharacters() {
    const response = await api.get("/characters");

    return response.data as Character[];
}

export async function getCharacterById(characterId: string) {
    const response = await api.get(`/characters/${characterId}`);

    if (response.status === 404) return

    return response.data as Character;
}

