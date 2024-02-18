import   {createClient}  from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "",
  dataset: "production",
  apiVersion: "2024-02-18",
  useCdn: true,
  token:
    "",
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
