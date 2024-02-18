import css from "../styles/Hero.module.css";
import Image from "next/image";
import Cherry from "../assets/cherry.png";
import HeroImage from "../assets/heroImage.png";
import { UilPhone } from "@iconscout/react-unicons";
export default () => {
  return (
    <div className={css.container}>
      <div className={css.left}>
        <div className={css.cherryDiv}>
          <span>More than Faster</span>
          <Image src={Cherry} width={40} height={25} />
        </div>
        <div className={css.heroText}>
          <span>Be the Fastest in</span>
          <span>Delivering</span>
          <span>
            Your <span style={{ color: "var(--themeRed" }}>Pizza</span>
          </span>
        </div>

        <span className={css.miniText}>
          Our Mission is to deliver the best pizza in the world.
        </span>

        <button className={`btn ${css.btn}`}>Get Started</button>
      </div>

      <div className={css.right}>
        <div className={css.imageContainer}>
          <Image src={HeroImage} layout="intrinsic" />
        </div>

        <div className={css.ContactUs}>
          <span>Contact Us</span>
          <div>
            <UilPhone color="white"f />
          </div>
        </div>
      </div>
    </div>
  );
};
