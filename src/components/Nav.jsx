import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import styles from "../style";

import { navLinks } from "../constants";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const Nav = () => {
    const [toggle, setToggle] = useState(false);
    let activeStyle = {
        color: "white",
    };

    return (
        <div
            className={`flex justify-between items-center h-20 relative ${styles.paddingX}`}
        >
            <a href={`#`}>
                <img src={logo} alt="" className=" h-8" />
            </a>

            <ul className=" hidden md:flex justify-between space-x-10">
                {navLinks.map((link) => {
                    return (
                        <li
                            className=" text-lg hover:text-slate-200 duration-300"
                            key={link.id}
                        >
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    );
                })}
            </ul>

            {!toggle && (
                <img
                    src={menu}
                    alt=""
                    className="menu md:hidden h-4 cursor-pointer"
                    onClick={() => setToggle(!toggle)}
                />
            )}
            {toggle && (
                <img
                    src={close}
                    alt=""
                    className="close md:hidden h-6 cursor-pointer"
                    onClick={() => setToggle(!toggle)}
                />
            )}

            {/* Mobile Menu */}
            {toggle && (
                <ul className="md:hidden absolute py-2 rounded-xl right-4 sm:right-16 top-20 bg-black-gradient sidebar">
                    {navLinks.map((link) => {
                        return (
                            <li
                                className=" text-lg pr-16 pl-5 py-3 hover:text-slate-200 duration-300"
                                key={link.id}
                            >
                                <a href={`#${link.id}`}>{link.title}</a>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};
