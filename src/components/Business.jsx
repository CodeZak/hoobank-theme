import { features } from "../constants/index.js";
import styles from "../style";
import { Button } from "./UI/Button";

export const Business = () => {
    return (
        <div
            id="features"
            className={`${styles.paddingX} ${styles.paddingY} md:text-center xl:text-left xl:flex `}
        >
            <div className="flex-1 xl:max-w-xl xl:space-y-8 mb-8">
                <h2 className={styles.heading2}>
                    You do the business, we’ll handle the money.
                </h2>
                <p className={styles.paragraph}>
                    With the right credit card, you can improve your financial
                    life by building credit, earning rewards and saving money.
                    But with hundreds of credit cards on the market.
                </p>

                <Button>Get Started</Button>
            </div>

            <div className="xl:w-1/2 xl:ml-auto xl:space-y-8 md:flex xl:block">
                {features.map((e) => {
                    return (
                        <div
                            className="business flex items-center p-4 my-4 rounded-2xl md:flex-col  xl:flex-row"
                            key={e.id}
                        >
                            <img
                                className=" p-4 bg-dimBlue rounded-full mr-3 md:mb-1 xl:mb-0 "
                                src={e.icon}
                                alt=""
                            />
                            <div>
                                <h2 className=" font-semibold text-white text-lg md:mb-3 xl:mb-0">
                                    {e.title}
                                </h2>
                                <p>{e.content} </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
