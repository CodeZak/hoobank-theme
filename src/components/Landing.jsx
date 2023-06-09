import discount from "../assets/Discount.svg";
import robot from "../assets/robot.png";
import styles from "../style";
import arrowUp from "../assets/arrow-up.svg";
export const Landing = () => {
    return (
        <div className="md:grid lg:flex lg:items-center ">
            {/* Discount and text */}
            <div className={`${styles.paddingX}  md:order-1  `}>
                <div className="flex items-center bg-black-gradient-2 rounded-lg text-xl p-2 mt-6 max-w-[400px]">
                    <img src={discount} alt="" className="rounded-full" />
                    <p>
                        <span className=" text-white">20%</span> Discount For{" "}
                        <span className=" text-white">1 Month</span> Account
                    </p>
                </div>

                <h2 className="text-5xl md:text-7xl lg:text-7xl lg:leading-tight md:leading-tight font-semibold leading-snug text-white mt-4 ">
                    The Next <br />{" "}
                    <span className="text-gradient">
                        Generation <br />
                    </span>{" "}
                    Payment Method
                </h2>
                <p className={styles.paragraph}>
                    Our team of experts uses a methodology to identify the
                    credit cards most likely to fit your needs. We examine
                    annual percentage rates, annual fees.
                </p>
            </div>

            {/* robot */}
            <div
                className={` ${styles.flexCenter}   mt-32 relative md:order-3 md:col-span-2  `}
            >
                <img src={robot} alt="billing" className=" z-[5]" />

                {/* gradient start */}
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                {/* gradient end */}
            </div>

            {/* Get Started button */}

            <div className="cursor-pointer w-36 h-36 lg:flex-none lg:ml-5 xl:ml-0 md:mt-20 lg:mt-0 rounded-full bg-blue-gradient mx-auto my-6 p-[3px] md:order-2 md:absolute lg:relative md:right-20">
                <div className=" rounded-full w-full duration-300 h-full bg-bgColor flex flex-col items-center justify-center">
                    <span className="flex text-gradient text-lg font-semibold">
                        Get <img src={arrowUp} alt="" />
                    </span>
                    <span className="flex text-gradient text-lg font-semibold">
                        Started
                    </span>
                </div>
            </div>
        </div>
    );
};
