import { cn } from "../lib/utils";
export default function Hero() {
  return (
    <section className="relative  h-screen w-full overflow-hidden [--pattern:var(--color-neutral-300)]">
      <div className="max-w-7xl mx-auto w-full h-full flex items-center justify-center relative">
        <HorizontalScale className="absolute top-0 w-screen mx-auto" />
        <HorizontalScale className="absolute bottom-0 w-screen mx-auto" />

        <VerticalScale className="absolute left-0 h-screen mx-auto" />
        <VerticalScale className="absolute right-0 h-screen mx-auto" />
        <div className="p-10 size-full">
          <div className="relative p-10 shadow-2xl size-full flex flex-col justify-between">
            <img
              src="https://assets.aceternity.com/components/mountains-snow.webp"
              className="absolute inset-0 w-full object-cover mask-radial-from-50% mask-b-from-50% mask-t-from-90% select-none pointer-events-none"
            />
            <nav className="flex items-center  justify-between relative z-20 ">
              <div className="flex items-center gap-8">
                <h2 className="tracking-tighter  bg-clip-text text-transparent  bg-gradient-to-b from-blue-400  to-blue-800 text-lg font-bold text-shadow-lg    text-shadow-blue-500/10 px-4">
                  clonely
                </h2>
                <a href="#" className="text-neutral-700 text-xs">
                  Features
                </a>
                <a href="#" className="text-neutral-700 text-xs">
                  Pricing
                </a>
                <a href="#" className="text-neutral-700 text-xs">
                  Changelog
                </a>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-4 py-2  rounded-md bg-gradient-to-t text-neutral-700 text-shadow-lg text-shadow-black/2 text-black text-xs ">
                  Read Documentation
                </button>
                <button className="px-4 py-2  rounded-md bg-gradient-to-t from-blue-700 to-blue-500 text-shadow-lg text-shadow-black/2 text-black text-xs ">
                  Try For Free
                </button>
              </div>
            </nav>
            <div className="flex flex-col pb-10 relative z-20 ">
              <h1 className="tracking-tight text-6xl text-neutral-950 font-medium max-w-4xl">
                The only AI capable of deep cloning voice
              </h1>
              <p className="tracking-tight text-2xl  max-w-2xl mt-6">
                Pass In a url and we will generate content for you
              </p>
              <div className="flex items-center  gap-2 mt-8 relative z-20">
                <button className="px-4 py-2  rounded-md bg-gradient-to-t from-blue-700 to-blue-500 text-neutral-700 text-shadow-lg text-shadow-black/2  cursor-pointer active:scale-98 duration-200 ">
                     Try For Free
                </button>
                <button className="px-4 py-2  rounded-md bg-gradient-to-t  text-shadow-lg text-shadow-black/2 text-black text-xs ">
               Read Documentation  
                </button>
              </div>
            </div>
            <Line className="mask-b-from-10% absolute  inset-x-0  top-0 " />
            <Line className="mask-t-from-10% absolute  inset-x-0   bottom-0" />
          </div>
        </div>
      </div>
    </section>
  );
}

const Line = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "h-14 w-full  bg-[repeating-linear-gradient(to_bottom,var(--pattern)_0,var(--pattern)_1px,transparent_1px,transparent_0.5rem)]",
        className,
      )}
    />
  );
};

const HorizontalScale = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "h-10 w-full bg-[repeating-linear-gradient(315deg,var(--pattern)_0,var(--pattern)_1px,transparent_1px,transparent_50%)] bg-[size:10px_10px] border-y border-[var(--pattern0)]",
        className,
      )}
    />
  );
};
const VerticalScale = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "w-10 h-full bg-[repeating-linear-gradient(315deg,var(--pattern)_0,var(--pattern)_1px,transparent_1px,transparent_50%)] bg-[size:10px_10px] border-y border-[var(--pattern0)]",
        className,
      )}
    />
  );
};
