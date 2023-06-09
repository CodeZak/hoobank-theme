import React from "react";

export const Button = ({ children }) => {
    return (
        <button className=" py-4 px-6 text-lg  font-medium rounded-lg text-bgColor bg-blue-gradient ">
            {children}
        </button>
    );
};
