export default function HeaderInfo({ Icon, text }) {
  return (
    <div className="flex items-center space-x-2">
      {Icon}
      <span className="capitalize text-sm md:text-base font-semibold text-zinc-900 dark:text-zinc-400">
        {text}
      </span>
    </div>
  );
}
