import {
    Fragment
} from "react";

import Img from "./Img";

const Logo = () => {
    return (
        <Fragment>
            <Img
            width={250}
            height={250}
            src="/logo.avif"
            alt="Servis Nebovidy Tomáš Pazourek Logo"
            />
        </Fragment>
    );
};

export default Logo;