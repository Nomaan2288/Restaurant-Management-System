import { LifeBuoy } from "lucide-react";

export function BrandFooter() {
  return (
    <div className="flex flex-col gap-2 border-t border-sidebar-border px-4 py-3">
      <a
        href="https://github.com/Nomaan2288/Restaurant-Management-System"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-1.5 rounded-lg border border-sidebar-border px-3 py-1.5 text-xs font-medium text-sidebar-foreground/80 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
      >
        <LifeBuoy className="h-3.5 w-3.5" />
        Support & Docs
      </a>
      <div className="flex flex-col text-left">
        <span className="text-xs font-semibold leading-tight text-sidebar-foreground/90">
          OrderRestro
        </span>
        <span className="text-[11px] text-muted-foreground">
          Created By Noman Shaikh
        </span>
      </div>
    </div>
  );
}
