import {
    Fragment
} from "react";
import clsx from "clsx";

import Img from "./Img";

const Logo = ({
    className
} : {
    className?: string
}) => {
    return (
        <Fragment>
            <Img
            width={200}
            height={200}
            src="/logo.avif"
            alt="Servis Nebovidy Tomáš Pazourek Logo"
            className={clsx(className, "max-w-[150px] max-h-[150px] md:max-w-[200px] md:max-h-[200px]")}
            />
        </Fragment>
    );
};

export default Logo;