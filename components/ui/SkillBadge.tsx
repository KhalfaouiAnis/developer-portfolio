import Image from "next/image";
import { cn } from "@/lib/utils";
import type { SkillItem } from "@/types";

interface SkillBadgeProps extends SkillItem {
  size?: "sm" | "md";
}

export default function SkillBadge({ name, image, size = "md" }: SkillBadgeProps) {
  const isNext = name.toLowerCase().includes("next");
  return (
    <div
      className={cn(
        "skill-chip flex items-center gap-2 rounded-md border border-border bg-muted/50 font-medium capitalize",
        size === "sm" ? "px-2 py-1 text-xs" : "px-3 py-1.5 text-sm"
      )}
    >
      <div
        className={cn(
          "relative shrink-0",
          size === "sm" ? "w-4 h-4" : "w-5 h-5",
          isNext && "bg-white rounded-full p-0.5"
        )}
      >
        <Image
          src={image}
          fill
          alt={name}
          className="object-contain"
          sizes="20px"
        />
      </div>
      <span className="text-foreground">{name}</span>
    </div>
  );
}
