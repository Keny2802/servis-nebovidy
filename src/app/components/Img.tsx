import {
    Fragment
} from "react";
import Image from "next/image";
import clsx from "clsx";

type fillType = {
    fill?: boolean;
};

type ImgType = {
    width?: number;
    height?: number;
    src: string;
    alt?: string;
    priority?: boolean;
    className?: string;
} & fillType;

const Img = (props: ImgType) => {
    return (
        <Fragment>
            <Image
            {
                ...(props.fill ? {
                    fill: true
                } : {
                    width: props.width,
                    height: props.height,
                })
            }
            {
                ...(
                    props.priority ? (
                        {
                            priority: true
                        }
                    ) : (
                        {
                            priority: false
                        }
                    )
                )
            }
            src={props.src}
            alt={props.alt || "Foto Servis Nebovidy - Tomáš Pazourek"}
            className={clsx(props.className, "img-component")}
            />
        </Fragment>
    );
};

export default Img;