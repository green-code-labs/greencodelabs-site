import bgCard from "@/assets/bg.png";
import { ReactNode } from "react";

interface HeaderMainBackgroundProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  footerContent?: ReactNode;
}

export function HeaderMainBackground({
  title,
  subtitle,
  icon: Icon,
  footerContent: FooterContent,
}: HeaderMainBackgroundProps) {
  return (
    <header className="relative py-8 md:py-10 border-b border-[#262626] w-full max-h-[41.25rem]">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${bgCard.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          opacity: "47.75%",
        }}
      />
      <div className="container flex flex-col items-center gap-4 relative z-10 text-white text-2xl lg:text-5xl font-semibold text-center">
        {Icon}
        <h2 className="text-md md:text-3xl">{title}</h2>
        {subtitle && (
          <p className="text-sm font-light max-w-[45rem]">{subtitle}</p>
        )}
        {FooterContent}
      </div>
    </header>
  );
}
