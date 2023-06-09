import { clients } from "../constants/index";
import styles from "../style";

export const Clients = () => {
    return (
        <div className={`${styles.paddingX} grid grid-cols-2 gap-4 place-items-center md:flex md:justify-between xl:px-32 mb-10 `}>
            {clients.map((e) => {
                return <img key={e.id} src={e.logo} alt="" className=" h-6 md:h-8 lg:h-10" />;
            })}
        </div>
    );
};
