import Image from "next/image";

const data = {
  image: "/images/profile.jpg",
  name: "Anis Khalfaoui",
  jobTitle: "Software Engineer",
  address: "Tunis, Tunisia",
  experience: "5+ years of experience",
  education: "Software engineering",
  languages: {
    arab: {
      label: "Arabic: Native",
      icon: (
        <Image src="/flags/tunisia.png" alt="lang" height={15} width={15} className="scale-up" />
      ),
    },
    english: {
      label: "English: Fluent",
      icon: (
        <Image src="/flags/english.png" alt="lang" height={15} width={15} className="scale-up" />
      ),
    },
    frensh: {
      label: "Frensh: Fluent",
      icon: <Image src="/flags/france.png" alt="lang" height={15} width={15} className="scale-up" />,
    },
  },
};

export default data;
