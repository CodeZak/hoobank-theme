import styles from "../style";
import quotes from "../assets/quotes.svg";
import { feedback } from "../constants/index";
export function Testimonials() {
    return (
        <div id="clients" className={`${styles.paddingX} ${styles.paddingY} relative 		`}>
            <div className="absolute  blue__gradient w-[60%] h-[60%] rounded-full top-1/2 -translate-y-1/2 -right-1/2 "></div>
            <h2
                className={`${styles.heading2} text-center mt-20 mb-10 relative`}
            >
                What People are saying about us?
            </h2>
            <div className=" lg:flex justify-between relative">
                {feedback.map((e) => {
                    return (
                        <div
                            key={e.id}
                            className=" space-y-8 flex flex-col mb-10 hover:bg-black-gradient p-10 rounded-2xl flex-1 "
                        >
                            <img src={quotes} className="h-7 w-fit" alt="" />
                            <p className=" text-white text-lg flex-1 leading-8 mb-11 ">
                                {e.content}
                            </p>
                            <div className=" flex items-center ">
                                <img src={e.img} className="h-12 mr-4" alt="" />
                                <div>
                                    <h2 className=" text-white text-xl font-semibold">
                                        {e.name}
                                    </h2>
                                    <span>{e.title}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
