import styles from "../style";
import { stats } from "../constants";
export const Stats = () => {
    return (
        <div className={`${styles.paddingX}  space-y-4 md:space-y-0 text-center mt-10 md:flex md:justify-between md:items-center`}>
            {stats.map((e) => {
                return (
                    <div key={e.id} className='px-6'>
                        <span className=" text-3xl lg:text-4xl font-semibold text-white uppercase">
                            {e.value}
                        </span>{" "}
                        <span className=" text-gradient text-2xl uppercase">
                            {e.title}
                        </span>
                    </div>
                );
            })}
        </div>
    );
};
