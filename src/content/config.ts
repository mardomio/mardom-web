import { z, defineCollection } from "astro:content";

const commonSenseCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    desc: z.string().optional(),
  }),
});

export const collections = {
  "common-sense": commonSenseCollection,
};
