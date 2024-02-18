import css from "../styles/Services.module.css";
import Image from "next/image";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";

export default () => {
  return (
    <>
      <div className={css.heading}>
        <span>WHAT WE SERVE</span>
        <span>Your Favourite Food</span>
        <span>Delivery Partner</span>

        <div className={css.services}>
          <div className={css.feature}>
            <div className={css.ImageWrapper}>
              <Image src={s1} objectFit="cover" layout="intrinsic" />
            </div>

            <span>Easy to order</span>
            <span>Few Steps away from ordering</span>
          </div>

          <div className={css.feature}>
            <div className={css.ImageWrapper}>
              <Image src={s2} objectFit="cover" layout="intrinsic" />
            </div>

            <span>Safe Delivery</span>
            <span>Safe to your home</span>
          </div>
          <div className={css.feature}>
            <div className={css.ImageWrapper}>
              <Image src={s3} objectFit="cover" layout="intrinsic" />
            </div>

            <span>Quick Delivery</span>
            <span>In a quickest way possible</span>
          </div>
        </div>
      </div>
    </>
  );
};
