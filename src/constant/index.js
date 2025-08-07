import { FiPhone, FiClock, FiMapPin, FiMail } from "react-icons/fi";
import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLaptopCode,
  FaComputer,
} from "react-icons/fa6";
import {
  IoRocketOutline,
  IoEyeOutline,
  IoPeopleOutline,
} from "react-icons/io5";
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
    gradient: "from-indigo-600 to-blue-600",
  },
  {
    title: "Misi Kami",
    description:
      "Memberdayakan individu dan organisasi melalui pelatihan TI yang relevan, praktis, dan berbasis proyek, guna membantu mereka mencapai potensi penuh di era digital.",
    icon: IoRocketOutline,
    gradient: "from-violet-600 to-indigo-600",
  },
  // {
  //   title: "Prinsip Kami",
  //   description:
  //     "Fokus pada pembelajaran yang aplikatif, materi yang selalu diperbarui, dan hasil nyata yang dirasakan langsung oleh peserta.",
  //   icon: IoPeopleOutline,
  //   gradient: "from-blue-600 to-sky-600",
  // },
];

const stats = [
  { number: "5+ Tahun", label: "Pengalaman di Industri TI" },
  { number: "10+", label: "Proyek Aplikasi & IT Sukses" },
  { number: "20+", label: "Klien dari Berbagai Sektor" },
  { number: "1-on-1", label: "Pendekatan Personal untuk Tiap Klien" },
];

export { menuItems, contactInfo, socialLinks, services, principles, stats };
