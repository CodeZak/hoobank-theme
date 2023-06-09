import appStore from "../assets/apple.svg";
import googlePlay from "../assets/google.svg";
import billing from "../assets/bill.png";

import styles from "../style";

export const Billing = () => {
    return (
        <div
            className={`${styles.paddingX} lg:flex lg:flex-row-reverse lg:items-center`}
        >
            <div className=" md:text-center lg:text-left lg:w-1/2 lg:px-8 lg:space-y-10">
                <h2 className={styles.heading2}>
                    Easily control your billing & invoicing
                </h2>
                <p className={styles.paragraph}>
                    Elit enim sed massa etiam. Mauris eu adipiscing ultrices
                    ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor
                    integer platea placerat.
                </p>
                <div className=" flex justify-center lg:justify-start">
                    <img src={appStore} alt="" className=" cursor-pointer" />
                    <img src={googlePlay} alt="" className=" cursor-pointer" />
                </div>
            </div>

            <div className=" mt-6 lg:w-1/2 relative">
                <div className="white__gradient w-[50%] h-[50%] rounded-full  absolute -left-1/2 top-0"></div>
                <div className="w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient absolute"></div>
                <img src={billing} alt="" className="relative" />
            </div>
        </div>
    );
};
