"use client";

import { useToast } from "@/hooks/use-toast";
import { isKeyframes, isNpm } from "@/lib/utils";
import { useState } from "react";

export const useCopy = (code: string | string[]) => {
    const [isChecked, setIsChecked] = useState(false);
    const { success } = useToast();
    const codeString = isKeyframes(code) ? `[${code?.map(keyframe => `'${keyframe}'`).join(',\n')}]` : code;

    const onCopy = () => {
        navigator.clipboard.writeText(codeString);
        setIsChecked(true);
        success(`${isKeyframes(code) ? 'Keyframes' : isNpm(code) ? 'Npm command' : 'Code'} successfully copied to clipboard!`);
        setTimeout(() => {
            setIsChecked(false);
        }, 1000);
    };

    return [onCopy, isChecked] as const;
};