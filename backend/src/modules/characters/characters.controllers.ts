import { FastifyReply, FastifyRequest } from "fastify";
import { getAllCharacters, getCharacterById } from "./characters.services";
import { CharacterParams } from "./characters.schemas";

export async function getAllCharactersHandler(
    request: FastifyRequest,
    reply: FastifyReply
) {
    const characters = getAllCharacters();

    return reply.code(200).send(characters);
}

export async function getCharacterByIdHandler(
    request: FastifyRequest<{ Params: CharacterParams }>,
    reply: FastifyReply
) {
    const { characterId } = request.params;
    const character = getCharacterById(characterId);

    if (!character) {
        return reply.code(404).send({ "message": `Character with ID ${characterId} not found` })
    }

    return reply.code(200).send(character);
}