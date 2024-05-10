import React, { ReactElement } from "react";

type ParamsProp = {
	title?: string
	children?: React.ReactElement
}

const Wrapper = ({title, children}: ParamsProp): ReactElement => {
    return (
        <section className="container mx-auto px-4">
            <h1 className="text-center text-xl mb-8 ">{title}</h1>
            {children}
        </section>
    );
};

export default Wrapper;
