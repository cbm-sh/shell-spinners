import { isKeyframes } from "@/lib/utils";
import { useState } from "react";
import { toast } from "sonner";

export const useCopy = (code: string | string[]) => {
    const [isChecked, setIsChecked] = useState(false);
    const codeString = isKeyframes(code) ? `[${code?.map(keyframe => `'${keyframe}'`).join(',\n')}]` : code;

    const onCopy = () => {
        navigator.clipboard.writeText(codeString);
        setIsChecked(true);
        toast.success(`${isKeyframes(code) ? 'Keyframes' : 'Code'} successfully copied to clipboard!`);
        setTimeout(() => {
            setIsChecked(false);
        }, 1000);
    };

    return { onCopy, isChecked };

};