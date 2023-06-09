import card from "../assets/card.png";

import styles from "../style";
import { Button } from "./UI/Button";
export const CardDeal = () => {
    return (
        <div id="product" className={`${styles.paddingX}  lg:flex  lg:items-center mt-16 `}>
            <div className=" xl:max-w-xl  md:text-center  lg:text-left lg:w-1/2  lg:space-y-10">
                <h2 className={styles.heading2}>
                    Find a better card deal in few easy steps.
                </h2>
                <p className={styles.paragraph}>
                    Arcu tortor, purus in mattis at sed integer faucibus.
                    Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices
                    ac, ametau.
                </p>
                <div className=" flex md:justify-center lg:justify-start">
                    <Button>Get Started</Button>
                </div>
            </div>

            <div className="mt-6 lg:w-1/2   xl:max-w-xl  lg:ml-20">
                <img src={card} alt="" />
            </div>
        </div>
    );
};
