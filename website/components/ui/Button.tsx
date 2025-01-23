import { cx } from "@/lib/utils";
import { memo, useState } from 'react';
import { HiArrowLeft } from "react-icons/hi";

type ButtonProps = {
    variant: ButtonVariant;
    state: 'idle' | 'hover' | 'clicked' | 'disabled' | 'focus' | 'focusVisible' | 'active' | 'focusWithin';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonVariant = 'back' | 'copy_keyframes' | 'copy_code' | 'copy_npm' | 'code_view' | 'forward';

const buttonVariants: Record<ButtonVariant, { styles: Record<ButtonProps['state'], string> }> = {
    back: {
        styles: {
            idle: 'relative top-0 left-0',
            hover: 'relative top-0 left-0',
            clicked: 'relative top-0 left-0',
            disabled: 'relative top-0 left-0',
            focus: 'relative top-0 left-0',
            focusVisible: 'relative top-0 left-0',
            active: 'relative top-0 left-0',
            focusWithin: 'relative top-0 left-0',
        },
    },
    copy_keyframes: {
        styles: {
            idle: 'absolute top-3 right-14',
            hover: 'absolute top-3 right-14',
            clicked: 'absolute top-3 right-14',
            disabled: 'absolute top-3 right-14',
            focus: 'absolute top-3 right-14',
            focusVisible: 'absolute top-3 right-14',
            active: 'absolute top-3 right-14',
            focusWithin: 'absolute top-3 right-14',
        },
    },
    copy_code: {
        styles: {
            idle: 'absolute top-3 right-3',
            hover: 'absolute top-3 right-3',
            clicked: 'absolute top-3 right-3',
            disabled: 'absolute top-3 right-3',
            focus: 'absolute top-3 right-3',
            focusVisible: 'absolute top-3 right-3',
            active: 'absolute top-3 right-3',
            focusWithin: 'absolute top-3 right-3',
        },
    },
    copy_npm: {
        styles: {
            idle: 'relative top-0 -right-2',
            hover: 'relative top-0 -right-2',
            clicked: 'relative top-0 -right-2',
            disabled: 'relative top-0 -right-2',
            focus: 'relative top-0 -right-2',
            focusVisible: 'relative top-0 -right-2',
            active: 'relative top-0 -right-2',
            focusWithin: 'relative top-0 -right-2',
        },
    },
    code_view: {
        styles: {
            idle: 'absolute top-3 right-3',
            hover: 'absolute top-3 right-3',
            clicked: 'absolute top-3 right-3',
            disabled: 'absolute top-3 right-3',
            focus: 'absolute top-3 right-3',
            focusVisible: 'absolute top-3 right-3',
            active: 'absolute top-3 right-3',
            focusWithin: 'absolute top-3 right-3',
        },
    },
    forward: {
        styles: {
            idle: 'relative top-0 right-0',
            hover: 'relative top-0 right-0',
            clicked: 'relative top-0 right-0',
            disabled: 'relative top-0 right-0',
            focus: 'relative top-0 right-0',
            focusVisible: 'relative top-0 right-0',
            active: 'relative top-0 right-0',
            focusWithin: 'relative top-0 right-0',
        },
    },
};

const getButtonStyles = (variant: ButtonVariant, state: ButtonProps['state']) => {
    return buttonVariants[variant]?.styles[state] || '';
};

export const Button: React.FC<ButtonProps> = memo(({ variant, state, ...props }) => {
    const className = getButtonStyles(variant, state);

    return (
        <button
            className={cx(className, 'inline-flex cursor-pointer items-center justify-center p-2 overflow-hidden text-neutral-50 transition duration-300 ease-in-out border border-neutral-800 group')}
            {...props}
        >
            {props.children}
        </button>
    );
});

Button.displayName = 'Button';

export const BackButton = () => {
    const [state, setState] = useState<ButtonProps['state']>('idle');

    return (
        <Button
            state={state}
            variant="back"
            onFocus={() => setState('focus')}
            onMouseOver={() => setState('hover')}
            onMouseDown={() => setState('clicked')}
            aria-label="Back to Home"
            onClick={() => history.go(-1)}
        >
            <HiArrowLeft size={16} />
        </Button>
    );
}

BackButton.displayName = 'BackButton';