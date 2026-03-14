import {
  ReactNode,
  Fragment
} from "react";
import {
    cva
} from "class-variance-authority";
import clsx from "clsx";

interface props {
    type: "heroHeading" | "sectionHeading" | "bodyText";
    className?: string;
    children: ReactNode;
};

const Text = ({ type="bodyText", className, children } : props) => {
  const textVariants = {
      heroHeading: "text-5xl md:text-6xl lg:text-7xl font-black max-w-4xl hero-heading-component",
      sectionHeading: "text-3xl md:text-4xl font-semibold max-w-4xl section-heading-component",
      bodyText: "text-base md:text-[16.5px] lg:text-[16.75px] md:max-w-3xl body-text-component"
  };

  return (
    <Fragment>
        {
            textVariants["heroHeading"] && (
              <h1 className={clsx(className, `${textVariants[type]}`)}>
                  {children}
              </h1>
            )
            || textVariants["sectionHeading"] && (
                <h2 className={clsx(className, `${textVariants[type]}`)}>
                    {children}
                </h2>
            )
            || textVariants["bodyText"] && (
                <p className={clsx(className, `${textVariants[type]}`)}>
                    {children}
                </p>
              )
        }
        {/* {
            textVariants["sectionHeading"] && (
              <h2 className={clsx(className, `${textVariants[type]}`)}>
                  {children}
              </h2>
            )
        }
        {
            textVariants["bodyText"] && (
              <p className={clsx(className, `${textVariants[type]}`)}>
                  {children}
              </p>
            )
        } */}
    </Fragment>
  );
};

export default Text;