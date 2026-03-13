import {
    Fragment
} from "react";
import clsx from "clsx";

import Wrapper from "../components/Wrapper";
import Img from "../components/Img";
import HeroHeading from "../components/HeroHeading";
import Text from "../components/Text";
import HeaderLink from "../components/HeaderLink";

const Hero = ({
    className
} : {
    className?: string
}) => {
    return (
        <Fragment>
            <Wrapper className={clsx(className, "relative min-h-screen p-4 md:p-6 lg:p-8 bg-[#cdcdcd] text-white")}>
                <Img
                fill={true}
                src="/hero.avif"
                alt="Servis nebovidy úvodní foto - servis se zaměřením na Japonské vozy"
                className="aspect-square object-cover"
                />
                <Wrapper className="absolute inset-0 bg-black/40 flex justify-center items-center flex-col gap-2 md:gap-3 lg:gap-4 text-center">
                    <HeroHeading className="uppercase">
                        Servis se zaměřením na Japonské vozy
                    </HeroHeading>
                    <Text>
                        Přijeďte nás poctít Vaší návštěvou! Sídlíme na adrese Nebovidy 155, 280 02 Nebovidy.
                    </Text>
                    <Wrapper className="flex justify-center items-center gap-4 md:gap-6 lg:gap-8">
                        {
                            [
                                {
                                    href: "/sluzby",
                                    text: "Naše služby"
                                },
                                {
                                    href: "/cenik",
                                    text: "Zjistit cenu"
                                }
                            ].map((link, idx) => {
                                return (
                                    <HeaderLink
                                    key={idx}
                                    href={link.href}
                                    className="p-4 md:p-6 min-w-[180px] md:min-w-[200px] text-center rounded-full cursor-pointer first:bg-[#ffffff] last:bg-[#fb0404] first:text-black text-base md:text-[17px] lg:text-[17.5px]">
                                        {link.text}
                                    </HeaderLink>
                                );
                            })
                        }
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default Hero;