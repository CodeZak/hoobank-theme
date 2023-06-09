import styles from "../style";
import { Button } from "./UI/Button";
export const CTA = () => {
    return (
        <div className={`${styles.paddingX} ${styles.paddingY}`}>
            <div className="bg-black-gradient-2 px-7 xl:px-16  pt-7 pb-2 lg:py-12 rounded-3xl lg:flex items-center justify-between">
                <div className=" max-w-xl lg:space-y-8 lg:max-w-2xl">
                    <h2 className={`text-white text-4xl font-semibold lg:text-5xl `}>
                        Let’s try our service now!
                    </h2>
                    <p className={`${styles.paragraph}`}>
                        Everything you need to accept card payments and grow
                        your business anywhere on the planet.
                    </p>
                </div>
                <div className=" flex justify-center items-center mb-6 lg:mb-0">
                    <Button>Get Started</Button>
                </div>
            </div>
        </div>
    );
};
