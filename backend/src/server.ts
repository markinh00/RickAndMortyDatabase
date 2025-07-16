import { fastifyCors } from "@fastify/cors";
import { fastifySwagger } from "@fastify/swagger";
import { fastifySwaggerUi } from "@fastify/swagger-ui";
import { fastify } from "fastify";
import { jsonSchemaTransform, serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import { characterRoutes } from "./modules/characters/characters.routes";
import { ZodTypeProvider } from "fastify-type-provider-zod";


const port = 8000;

const app = fastify({ logger: true }).withTypeProvider<ZodTypeProvider>();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(fastifyCors, { origin: "*" });

app.register(fastifySwagger, {
    openapi: {
        info: {
            title: "Rick And Morty Database - Backend",
            version: "1.0.0"
        }
    },
    transform: jsonSchemaTransform,
});

app.register(fastifySwaggerUi, {
    routePrefix: "/docs",
});

app.get("/", () => {
    return { "message": "the see the documentation go to route /docs" }
});

app.register(characterRoutes, { prefix: "/characters" });

app.listen({ port: port }).then(() => {
    console.log(`Server running at port: ${port}`);
});

