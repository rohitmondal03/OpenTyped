import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { PlusIcon, LucideStopCircle } from "lucide-react";

import { Button } from "@/components/ui/button";


export default function SubmitBtn() {
    const { pending } = useFormStatus();

    return (
        <Button
            type="submit"
            variant={pending ? "destructive" : "default"}
            className="font-bold"
            disabled={pending}
        >
            {pending ? (
                <span className="flex items-center justify-center gap-x-1">
                    Adding... <LucideStopCircle />
                </span>
            ) : (
                <span className="flex items-center justify-center gap-x-1">
                    Add Project <PlusIcon />
                </span>
            )}
        </Button>
    )
}
