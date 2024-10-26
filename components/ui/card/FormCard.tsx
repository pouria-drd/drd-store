"use client";

import React from "react";
import { cn } from "@/utils/base";

interface FormCardProps extends React.FormHTMLAttributes<HTMLFormElement> {
    className?: string;
}

const FormCard = (props: FormCardProps) => {
    const { className, ...restProps } = props;
    return (
        <form
            className={cn(
                `bg-drd-light-primary-1/85 glass 
                flex flex-col items-center gap-6
                border border-drd-light-secondary-7 
                rounded-lg mx-auto px-6 py-8 w-full max-w-80`,
                className
            )}
            {...restProps}>
            {props.children}
        </form>
    );
};

export default FormCard;
