import { getAllCharactersHandler, getCharacterByIdHandler } from "./characters.controllers";
import { characterParamsSchema, characterResponseSchema } from "./characters.schemas";
import { FastifyTypedInstance } from "../../types";
import z from "zod/v4";

export async function characterRoutes(app: FastifyTypedInstance) {
    app.get(
        "/",
        {
            schema: {
                tags: ["Characters"],
                summary: "Get All characters",
                response: {
                    200: z.array(characterResponseSchema),
                }
            }
        },
        getAllCharactersHandler
    );

    app.get(
        "/:characterId",
        {
            schema: {
                tags: ["Characters"],
                summary: "Get a character by ID",
                params: characterParamsSchema,
                response: {
                    200: characterResponseSchema,
                }
            }
        },
        getCharacterByIdHandler
    );
}