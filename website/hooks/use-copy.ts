import { useToast } from "@/hooks/use-toast";
import { getCodeCategory } from "@/lib/utils";
import { useState } from "react";

export const useCopy = (code: string | string[], copyText: string) => {
    const [isChecked, setIsChecked] = useState(false);
    const { addToast } = useToast();
    const codeString = getCodeCategory(code) === 'Keyframes' && Array.isArray(code) ? `[${code.map(keyframe => `'${keyframe}'`).join(',\n')}]` : String(code);

    const onCopy = () => {
        navigator.clipboard.writeText(codeString);
        setIsChecked(true);
        addToast(copyText);
        setTimeout(() => {
            setIsChecked(false);
        }, 1000);
    };

    return [onCopy, isChecked] as const;
};