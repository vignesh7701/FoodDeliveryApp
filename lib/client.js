import  {createClient}  from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "b5cnwan0",
  dataset: "production",
  apiVersion: "2024-02-18",
  useCdn: true,
  token:
    "skW0NSYAdmdz8ZA5V0bMdhclarQ5GEtN3bN15TeTs8asmBW21UGwlwIZNZ3ckW2wuT1SMAfy2lKr9JM8wJca4P6HEBE7aElGtHwmnjf9gE8mqC5ma3egbyIj0T9th6Q3sMpqBOcxCtT58iefPqWmPC8yvhEX1cSHbyeZPFGuyRHc8bOK4fV4",
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
