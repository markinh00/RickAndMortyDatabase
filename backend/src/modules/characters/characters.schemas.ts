import z from "zod/v4";

const coreCharacter = z.object({
    id: z.number(),
    name: z.string(),
    gender: z.enum(["Male", "Female", "unknown"]),
    status: z.enum(["Alive", "Dead", "unknown"]),
    type: z.string(),
    species: z.string(),
    origin: z.object({
        name: z.string(),
        url: z.string(),
    }),
    location: z.object({
        name: z.string(),
        url: z.string(),
    }),
    image: z.string(),
    url: z.string(),
    created: z.string(),
});

export const characterSchema = coreCharacter.extend({
    episode: z.array(z.string()),
});

export type Character = z.infer<typeof characterSchema>;

export const seasonAppearance = z.object({
    season: z.number(),
    appearances: z.number(),
});

export type SeasonAppearance = z.infer<typeof seasonAppearance>;

export const characterResponseSchema = coreCharacter.extend({
    seasonAppearances: z.array(seasonAppearance),
    totalAppearances: z.number(),
});

export type CharacterResonse = z.infer<typeof characterResponseSchema>;

export const characterParamsSchema = z.object({
    characterId: z.coerce.number({
        error: (issue) => issue.input === undefined
            ? "Field 'characterId' is required"
            : "Field 'characterId' must be a number"
    }),
})

export type CharacterParams = z.infer<typeof characterParamsSchema>;