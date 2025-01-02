import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "./ui/button";

interface TheAlertDialogProps {
    heading: string;
    description: string;
}

export const TheAlertDialog = ({heading, description}: TheAlertDialogProps) => {
    return (
        <div>
            <AlertDialog>
                <AlertDialogTrigger className="bg-custom-color">
                    <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-80">
                        Generate Roadmap
                    </div>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-custom-color">  {/* Updated with custom background color */}
                    <AlertDialogHeader className="bg-custom-color">
                        <AlertDialogTitle className="bg-custom-color">{heading}</AlertDialogTitle>
                        <AlertDialogDescription className="bg-custom-color">
                            {description}
                        </AlertDialogDescription>
                    </AlertDialogHeader >
                    <AlertDialogFooter className="bg-custom-color">
                        <AlertDialogCancel className="bg-custom-color">Cancel</AlertDialogCancel>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}
