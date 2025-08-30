export default function Heading({ children }) {
  return (
    <h3 className="capitalize text-base md:text-lg text-violet-700 dark:text-zinc-400 font-bold mb-3">
      {children}
    </h3>
  );
}
