import { client } from "../../lib/client";
import Layout from "../../components/Layout";
import css from "../../styles/Pizza.module.css";
import Image from "next/image";
import { urlFor } from "../../lib/client";
export default function Pizza({ pizza }) {
  // console.log(urlFor(pizza.image))
  var src = urlFor(pizza.image).url();
  return (
    <Layout>
      <div className={css.container}>
        <div className={css.imageWrapper}>
          <Image
            loader={() => src}
            src={src}
            layout="fill"
            unoptimized
            objectFit="cover"
          />
        </div>
        <div className={css.right}>
          <span>{pizza.name}</span>
          <span>{pizza.details}</span>
          <span>₹{pizza.price[1]}</span>
          <div className={css.size}>
            <span>Size</span>
            <div className={css.SizeVariant}>
              <div>Small</div>
              <div>Medium</div>
              <div>Large</div>
            </div>
          </div>

          <div className={css.quantity}>
            <span>Quantity</span>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "pizza" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const pizza = await client.fetch(
    `*[_type == "pizza" && slug.current == '${slug}'][0]`
  );

  return {
    props: { pizza },
  };
}
