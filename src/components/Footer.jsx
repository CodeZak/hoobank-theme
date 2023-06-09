import { logo } from "../assets";
import styles from "../style";
import { footerLinks, socialMedia } from "../constants";
export const Footer = () => {
    return (
        <div className={`${styles.paddingX} ${styles.paddingY}`}>
            <div className="xl:flex xl:justify-between">
                <div className=" xl:w-[40%]">
                    <img src={logo} className="h-16" alt="" />
                    <p className={`${styles.paragraph}`}>
                        A new way to make the payments easy, reliable and
                        secure.
                    </p>
                </div>

                <div className="xl:w-[60%] xl:pl-12 grid grid-cols-2 gap-6 sm:flex sm:justify-between ">
                    {footerLinks.map((block) => {
                        return (
                            <div>
                                <h2 className=" text-white text-lg font-semibold py-3">
                                    {block.title}
                                </h2>
                                <ul className=" space-y-3">
                                    {block.links.map((e) => {
                                        return (
                                            <li>
                                                <a
                                                    href={e.link}
                                                    className="hover:text-cyan-500"
                                                >
                                                    {e.name}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className=" mt-10  	md:flex md:justify-between md:items-center border-gray-600  border-t-[1px] pt-6 text-center">
                <h2 className=" text-white text-lg">Built by CodeZak.</h2>
                <ul className="flex justify-center space-x-4 mt-4">
                    {socialMedia.map((e) => {
                        return (
                            <li key={e.id}>
                                <a href={e.link}>
                                    <img src={e.icon} alt="" />
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};
