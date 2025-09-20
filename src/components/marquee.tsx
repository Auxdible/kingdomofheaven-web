import { cn } from "../lib/utils";

type MarqueeProps = {
  containerClass?: string;
  className?: string;
  children: string | React.ReactNode;
};

export function Marquee({ children, className, containerClass }: MarqueeProps) {
  return (
    <article
      className={cn(
        "whitespace-no-wrap flex w-full overflow-x-hidden",
        containerClass
      )}
    >
      <div className={"relative w-full"}>
        <section
          className={cn(
            `flex w-max min-w-full animate-[marquee_40s_linear_infinite]`,
            className
          )}
        >
          {children}
        </section>
        <section
          className={cn(
            `absolute top-0 flex w-max min-w-full animate-[marquee-reverse_40s_linear_infinite]`,
            className
          )}
        >
          {children}
        </section>
      </div>
    </article>
  );
}
