'use client'
import clsx from 'clsx';

interface ButtonProps {
    type?: 'button' |'submit' | 'reset'| undefined;
    fullWidth?: boolean;
    children?: React.ReactNode;
    secondary?:boolean;
    danger?:boolean;
    disabled?:boolean;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
    type,
    fullWidth,
    children,
    secondary,
    danger,
    disabled,
    onClick
}) => {

    return (
        <button
            type={type}
            className={clsx(`
                flex
                justify-center
                rounded-md
                px-2
                py-3
                text-sm
                font-semibold
                focus-visible:outline
                focus-visible:outline-1
                focus-visible:outline-offset-2`,
                disabled && "cursor-default opacity-50",
                fullWidth && "w-full",
                secondary ? "text-gray-900" : "text-white",
                danger && "bg-rose-500 hover:bg-red-600 focus-visible:outline-rose-600",
                !secondary && !danger && "bg-sky-500 hover: bg-sky-600 focus-visible:ouline-sky-600"
                )}
                 onClick={onClick}>
            {children}
        </button>
    )

}

export default Button;