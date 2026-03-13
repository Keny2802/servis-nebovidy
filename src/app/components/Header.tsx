import {
  Fragment
} from "react";
import clsx from "clsx";

import Wrapper from "./Wrapper";
import Logo from "./Logo";
import List from "./List";
import HeaderItem from "./HeaderItem";
import HeaderLink from "./HeaderLink";

const Header = ({
    className
} : {
    className?: string
}) => {
    return (
        <Fragment>
            <Wrapper className={clsx(className, "p-4 bg-[#282828] text-white flex justify-between items-center gap-4 md:gap-6 lg:gap-8")}>
                <Logo />
                <List className="hidden lg:flex justify-center items-center gap-8 md:gap-10 lg:gap-16 text-base md:text-[17px] lg:text-[17.5px]">
                    {
                        [
                            {
                                href: "#uvod",
                                text: "Úvod"
                            },
                            {
                                href: "/sluzby",
                                text: "Služby"
                            },
                            {
                                href: "/cenik",
                                text: "Ceník"
                            },
                            {
                                href: "/kontakt",
                                text: "Kontakt"
                            }
                        ].map((link, idx) => {
                            return (
                                <HeaderItem key={idx}>
                                    <HeaderLink
                                    href={link.href}>
                                        {link.text}
                                    </HeaderLink>
                                </HeaderItem>
                            );
                        })
                    }
                </List>
                <HeaderLink
                href="#kontakt"
                className="p-4 md:p-6 min-w-[180px] md:min-w-[200px] text-center rounded-full cursor-pointer bg-[#fb0404] text-base md:text-[17px] lg:text-[17.5px]">
                    Kde nás najdete
                </HeaderLink>
            </Wrapper>
        </Fragment>
    );
};

export default Header;