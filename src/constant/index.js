import {
  FiPhone,
  FiClock,
  FiMapPin,
  FiMail,
  FiBookOpen,
  FiGlobe,
  FiTool,
} from "react-icons/fi";
import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLaptopCode,
  FaComputer,
  FaChalkboardUser,
} from "react-icons/fa6";
import { IoRocketOutline, IoEyeOutline } from "react-icons/io5";
import { HiOutlineCommandLine } from "react-icons/hi2";

const menuItems = [
  { name: "Beranda", url: "/" },
  { name: "Tentang Kami", url: "/about" },
  { name: "Layanan", url: "/services" },
  { name: "Portofolio", url: "/portfolio" },
  { name: "Kontak", url: "/contact" },
];

const services = [
  {
    icon: FaComputer,
    label: "Kursus Komputer",
    description:
      "Mempelajari dasar komputer untuk menunjang belajar dan kegiatan harian.",
    gradient: "from-blue-500 to-blue-300",
    features: [
      "Dasar komputer",
      "Microsoft Office",
      "Internet & email",
      "Manajemen file",
    ],
    link: "kursus-komputer",
  },
  {
    icon: HiOutlineCommandLine,
    label: "Kursus Pemrograman",
    description:
      "Mengenal dasar pemrograman dan cara berpikir logis dalam menyusun solusi digital.",
    gradient: "from-purple-500 to-indigo-400",
    features: [
      "Logika & algoritma",
      "Bahasa populer",
      "Proyek mini",
      "Latihan praktik",
    ],
    link: "kursus-pemrograman",
  },
  {
    icon: FaLaptopCode,
    label: "Web Development",
    description:
      "Layanan pengembangan website yang responsif, aman, dan mudah diakses untuk berbagai kebutuhan bisnis.",
    gradient: "from-green-500 to-teal-400",
    features: [
      "Desain responsif",
      "Frontend & backend",
      "SEO friendly",
      "Dukungan teknis",
    ],
    link: "web-development",
  },
];

const contactInfo = [
  {
    icon: FiMapPin,
    title: "Alamat Kantor",
    details: [
      "Dusun Jatirejo, Desa Jombok",
      "Kecamatan Ngoro, Kabupaten Jombang",
      "Jawa Timur, 61473",
    ],
    ariaLabel: "Office Location",
  },
  {
    icon: FiPhone,
    title: "Telepon",
    details: ["+6285183103693"],
    ariaLabel: "Phone Number",
  },
  {
    icon: FiMail,
    title: "Surel",
    details: ["digitalalfatech@gmail.com"],
    ariaLabel: "Email",
  },
  {
    icon: FiClock,
    title: "Jam Kerja",
    details: ["Senin - Jumat: 8:00 - 16:00", "Akhir Pekan: Dengan Janji Temu"],
    ariaLabel: "Business Hours",
  },
];

const socialLinks = [
  { name: "X", url: "https://x.com", icon: FaXTwitter },
  { name: "Facebook", url: "https://facebook.com", icon: FaFacebookF },
  { name: "Instagram", url: "https://instagram.com", icon: FaInstagram },
  { name: "LinkedIn", url: "https://linkedin.com", icon: FaLinkedinIn },
];

const principles = [
  {
    title: "Visi Kami",
    description:
      "Menjadi mitra terpercaya dalam pengembangan keterampilan TI, yang mendukung kesuksesan jangka panjang di tengah perubahan teknologi yang cepat.",
    icon: IoEyeOutline,
  },
  {
    title: "Misi Kami",
    description:
      "Memberdayakan individu dan organisasi melalui pelatihan TI yang relevan, praktis, dan berbasis proyek, guna membantu mereka mencapai potensi penuh di era digital.",
    icon: IoRocketOutline,
  },
];

const stats = [
  { number: "5+ Tahun", label: "Pengalaman di Industri TI" },
  { number: "10+", label: "Proyek Aplikasi & IT Sukses" },
  { number: "20+", label: "Klien dari Berbagai Sektor" },
  { number: "1-on-1", label: "Pendekatan Personal untuk Tiap Klien" },
];

const choices = [
  {
    icon: FiBookOpen,
    label: "Pembelajaran Dari Dasar",
    description: "Materi disusun dengan bahasa sederhana dan bertahap.",
  },
  {
    icon: FiTool,
    label: "Pendekatan Praktis",
    description:
      "Langsung praktik! Belajar sambil mengerjakan proyek nyata agar lebih mudah dipahami dan diterapkan.",
  },
  {
    icon: FaChalkboardUser,
    label: "Instruktur Berpengalaman",
    description:
      "Didampingi oleh pengajar yang ahli di bidangnya dan siap membimbing hingga tuntas.",
  },
  {
    icon: FiGlobe,
    label: "Solusi Digital Terpadu",
    description:
      "Selain kursus, kami juga menyediakan layanan pembuatan website untuk kebutuhan bisnis.",
  },
];

export {
  menuItems,
  contactInfo,
  socialLinks,
  services,
  principles,
  stats,
  choices,
};
