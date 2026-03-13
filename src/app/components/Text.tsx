import {
  ReactNode,
  Fragment
} from "react";
import {
    cva
} from "class-variance-authority";
import clsx from "clsx";

const HeadingVariants = cva(["hero-heading", "section-heading, body-text"], {
    variants: {
      intent: {
        heroHeading: "",
        sectionHeading: "",
        bodyText: ""
      }
    }
});

const Text = ({
  className,
  children
} : {
  className?: string,
  children: ReactNode
}) => {
  return (
    <Fragment>
        <p className={clsx(className, "text-base md:text-[16.5px] lg:text-[16.75px] max-w-md md:max-w-3xl")}>
            {children}
        </p>
    </Fragment>
  );
};

export default Text;