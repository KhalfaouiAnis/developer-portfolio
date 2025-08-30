import Image from "next/image";

export default function Skill({ id, name, image }) {
  return (
    <div
      key={id}
      className="flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-800 px-3 py-2"
    >
      <div className={`relative w-[25px] h-[25px] ${name === 'next' ? 'bg-white rounded-full' : ''}`}>
        <Image src={image} fill className="w-full h-full object-cover" alt="Skill logo" />
      </div>
      <span className="text-zinc-700 dark:text-white capitalize text-sm md:text-base font-bold">
        {name}
      </span>
    </div>
  );
}
