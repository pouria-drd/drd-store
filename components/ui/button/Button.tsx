"use client";

import Link from "next/link";
import { cn } from "@/utils/base";
import { Spinner } from "..";
import styles from "./button.module.css";
import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

// Define button props when 'as' is 'button'
interface AsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    as?: "button";
}

// Define link props when 'as' is 'link' (and 'href' is required)
interface AsLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    as: "link";
    href: string;
}

// Define shared props
interface BaseButtonProps {
    waiting?: boolean;
    className?: string;
    children?: ReactNode;
}

// Union of the two types for Button
type ButtonProps = BaseButtonProps & (AsButtonProps | AsLinkProps);

const Button = (props: ButtonProps) => {
    const {
        children,
        className,
        as = "button", // Default is 'button'
        waiting = false, // Default is false
        ...restProps
    } = props;

    // Render button if 'as' is 'button'
    if (as === "button")
        return (
            <button
                disabled={waiting}
                className={cn(`${styles.drdButton} w-full`, className)}
                {...(restProps as AsButtonProps)}>
                {waiting ? (
                    <Spinner borderSize="2" className="text-white w-6" />
                ) : (
                    children
                )}
            </button>
        );

    // Render anchor if 'as' is 'link'
    if (as === "link") {
        const { href, ...linkProps } = restProps as AsLinkProps;
        return (
            <Link
                href={href}
                {...linkProps}
                className={cn(`${styles.drdButton}`, className)}>
                {waiting ? (
                    <Spinner borderSize="2" className="text-white w-6" />
                ) : (
                    children
                )}
            </Link>
        );
    }
};

export default Button;
