import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { PropsWithChildren } from "react";

interface BackgroundIconProps extends PropsWithChildren {
  orientation?: "left" | "right";
  iconSRC?: StaticImport | string;
}

export function BackgroundIcon({
  children,
  iconSRC,
  orientation = "right",
}: BackgroundIconProps) {
  return (
    <div
      className={`${
        orientation === "right" ? "border-gradient" : "border-gradient-left"
      }  !p-3 max-w-[3.5rem] max-h-[3.5rem]`}
    >
      {children ?? (
        <Image
          src={iconSRC ?? ""}
          alt="Icon"
          className="w-[2.5rem] h-[2.5rem] "
        />
      )}
    </div>
  );
}
