export interface Role {
  date: string;
  role: string;
  company: string;
  current?: boolean;
}

export const ROLES: Role[] = [
  { date: "2025 - Now", role: "Product Designer", company: "Airstride · AI Sales", current: true },
  { date: "2024 - 2025", role: "UX Designer", company: "Dexla · No-code AI Builder" },
  { date: "2023 - 2024", role: "Product Designer", company: "Qoinpal · Crypto wallet" },
  { date: "2023", role: "Product Designer", company: "Approvam · Workflow" },
  { date: "2022 - 2023", role: "Product Designer", company: "Groflex · ERP suite" },
];

export interface BeyondInterest {
  num: string;
  title: string;
  body: string;
}

export const BEYOND: BeyondInterest[] = [
  {
    num: "01",
    title: "Saxophone",
    body: "I play the saxophone. It's the one thing in my life that has nothing to do with screens, and that's exactly why I love it.",
  },
  {
    num: "02",
    title: "Videography",
    body: "I shoot video for my church media crew. Different kind of storytelling, same obsession with getting the details right.",
  },
  {
    num: "03",
    title: "Chess",
    body: "I play chess. Probably why I think five steps ahead in design. Or maybe I just like the game. Either way.",
  },
];

export type PhotoSpan = "tall" | "wide" | "square";

export interface Photo {
  label: string;
  span: PhotoSpan;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const PHOTOS: Photo[] = [
  {
    label: "Studio · 01",
    span: "tall",
    src: "/about/photo-1.jpg",
    alt: "Ayowande working on a laptop at an outdoor cafe",
    width: 2968,
    height: 2860,
  },
  {
    label: "Crew · 02",
    span: "wide",
    src: "/about/photo-3.jpeg",
    alt: "Working session with the team around a dining table, laptops open",
    width: 4032,
    height: 3024,
  },
  {
    label: "Saxophone · 03",
    span: "square",
    src: "/about/photo-7.jpg",
    alt: "Close-up of a saxophone held in performance",
    width: 3024,
    height: 4032,
  },
  {
    label: "Portrait · 04",
    span: "tall",
    src: "/about/photo-4.jpg",
    alt: "Portrait of Ayowande in a brown shirt, mango tree behind",
    width: 3024,
    height: 4032,
  },
  {
    label: "Chess · 05",
    span: "square",
    src: "/about/photo-5.jpg",
    alt: "Chess king piece in focus, terminal glowing behind",
    width: 3024,
    height: 4032,
  },
  {
    label: "Desk · 06",
    span: "wide",
    src: "/about/photo-2.jpg",
    alt: "Home desk with monitor, laptop, and notes",
    width: 3024,
    height: 4032,
  },
];

export const TOOLKIT: string[] = [
  "Figma",
  "FigJam",
  "Framer",
  "ProtoPie",
  "Notion",
  "Linear",
  "Loom",
  "Webflow",
  "Cursor",
  "After Effects",
  "Principle",
  "Maze",
];
