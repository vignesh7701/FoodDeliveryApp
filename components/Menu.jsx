import css from "../styles/Menu.module.css";
import Image from "next/image";
import { urlFor } from "../lib/client";
import Link from "next/link";

export default ({ pizzas }) => {
  return (
    <div className={css.container}>
      <div className={css.heading}>
        <span>OUR MENU</span>
        <span>Menu that will make you drool</span>
      </div>

      <div className={css.menu}>
        {pizzas.map((pizza, id) => {
          const src = urlFor(pizza.image).url();
          return (
            <Link href={`/pizza/${pizza.slug.current}`} key={id}>
              <div className={css.pizza} key={id}>
                <div className={css.ImageWrapper}>
                  <Image
                    loader={() => src}
                    src={src}
                              layout="fill"
                              unoptimized
                    objectFit="cover"
                  />
                </div>
                <span>{pizza.name}</span>
                <span>
                  <span style={{ color: "var(--themeRed)" }}>₹</span>
                  {pizza.price[1]}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
