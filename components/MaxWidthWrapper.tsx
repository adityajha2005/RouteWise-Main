import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        `w-full h-full max-w-screen px-4 md:px-20 lg:px-32 ${className}`
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
