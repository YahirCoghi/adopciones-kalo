import { defineCollection, z } from 'astro:content';

const perritos = defineCollection({
  type: 'content',
  schema: z.object({
    foto: z.string(),
    nombre: z.string(),
    edad: z.string(),
    historia_situacion: z.string(),
    estado: z.enum(['Disponible', 'Reservado', 'Adoptado']),
    fecha_publicacion: z.coerce.date(),
    destacado: z.boolean().default(false)
  })
});

export const collections = { perritos };

