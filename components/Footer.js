export default function Footer() {
  return (
    <footer className="border-t border-t-zinc-100 dark:border-t-zinc-800 mt-10">
      <div className="max-w-screen-xl mx-auto px-4 py-5">
        <p className="text-sm font-medium text-zinc-800 dark:text-zinc-400">
          <strong className="font-black">&copy; {new Date().getFullYear()} Anis Khalfaoui</strong>, All rights reserver.
        </p>
      </div>
    </footer>
  );
}
