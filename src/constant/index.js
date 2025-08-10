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
    link: "kursus-komputer",
    icon: FaComputer,
    label: "Kursus Komputer",
    heading: "Pelajari Komputer dari Dasar hingga Mahir",
    shortDescription:
      "Mempelajari dasar komputer untuk menunjang belajar dan kegiatan harian.",
    longDescription:
      "Mulai dari pengenalan dasar hingga pembuatan dokumen, presentasi, dan pengolahan data dengan percaya diri.",
    gradient: "from-blue-500 to-blue-300",
    features: [
      "Dasar komputer",
      "Microsoft Office",
      "Dasar Internet",
      "Manajemen file",
    ],
    featuresDetail: [
      {
        title: "Mengenal Perangkat Komputer",
        desc: "Belajar mengenal monitor, keyboard, mouse, dan fungsi masing-masing.",
      },
      {
        title: "Penggunaan Dasar Komputer",
        desc: "Membuka, menutup, dan berpindah aplikasi dengan mudah.",
      },
      {
        title: "Microsoft Word",
        desc: "Mengetik, mengatur teks, dan menyimpan dokumen.",
      },
      {
        title: "Microsoft Excel",
        desc: "Membuat tabel, menghitung otomatis, dan membuat grafik sederhana.",
      },
      {
        title: "Microsoft PowerPoint",
        desc: "Membuat slide presentasi menarik dengan gambar dan animasi.",
      },
      {
        title: "Dasar Internet",
        desc: "Mencari informasi di Google dan tips aman berselancar.",
      },
    ],
  },
  {
    link: "kursus-pemrograman",
    icon: HiOutlineCommandLine,
    label: "Kursus Pemrograman",
    heading: "Memulai Perjalanan Menjadi Programmer",
    shortDescription:
      "Belajar cara berpikir logis, memahami konsep dasar pemrograman, dan membuat program sederhana.",
    longDescription:
      "Kursus ini membantu kamu memahami apa itu pemrograman, bagaimana komputer memproses perintah, serta logika yang digunakan untuk menyelesaikan masalah.",

    gradient: "from-purple-500 to-indigo-400",
    features: [
      "Logika & algoritma",
      "Struktur program",
      "Latihan praktik",
      "Membuat program sederhana",
    ],
    featuresDetail: [
      {
        title: "Computational Thinking",
        desc: "Latihan mengubah masalah sehari-hari menjadi langkah-langkah logis.",
      },
      {
        title: "Konsep Dasar Pemrograman",
        desc: "Memahami apa itu perintah, alur eksekusi, dan output.",
      },
      {
        title: "Variabel & Tipe Data",
        desc: "Cara menyimpan dan mengolah informasi di dalam program.",
      },
      {
        title: "Percabangan & Perulangan",
        desc: "Membuat program yang bisa mengambil keputusan dan mengulang proses.",
      },
      {
        title: "Program Mini",
        desc: "Membuat program sederhana seperti kalkulator atau game tebak angka.",
      },
      {
        title: "Langkah Menuju Proyek Nyata",
        desc: "Pengenalan cara mengembangkan ide menjadi aplikasi sederhana.",
      },
    ],
  },
  // {
  //   icon: FaLaptopCode,
  //   label: "Web Development",
  //   description:
  //     "Layanan pengembangan website yang responsif, aman, dan mudah diakses untuk berbagai kebutuhan bisnis.",
  //   gradient: "from-green-500 to-teal-400",
  //   features: [
  //     "Desain responsif",
  //     "Frontend & backend",
  //     "SEO friendly",
  //     "Dukungan teknis",
  //   ],
  //   link: "web-development",
  // },
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
