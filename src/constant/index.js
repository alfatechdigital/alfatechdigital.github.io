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
  FaPaintbrush,
} from "react-icons/fa6";
import { IoRocketOutline, IoEyeOutline } from "react-icons/io5";
import { HiOutlineCommandLine } from "react-icons/hi2";
import { MdOutlineDiscount } from "react-icons/md";
import { LuMonitorSmartphone } from "react-icons/lu";
import {
  academia,
  elearning,
  hoobank,
  hyperdrive,
  jadoo,
  picto,
  rosa2,
  sakeenah,
  smk,
  bazario,
} from "../assets";

const menuItems = [
  { name: "Beranda", url: "/" },
  { name: "Tentang Kami", url: "/about" },
  { name: "Layanan", url: "/services" },
  // { name: "Portofolio", url: "/portfolio" },
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
  {
    icon: FaLaptopCode,
    link: "web-development",
    label: "Pembuatan Website",
    heading: "Wujudkan Website Profesional yang Mengangkat Bisnis Anda",
    shortDescription:
      "Layanan pengembangan website yang responsif, aman, dan mudah diakses untuk berbagai kebutuhan bisnis.",
    gradient: "from-green-500 to-teal-400",
    features: [
      "Desain responsif",
      "Frontend & backend",
      "SEO friendly",
      "Dukungan teknis",
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
];

const whychooseUsWeb = [
  {
    icon: MdOutlineDiscount,
    label: "Harga Bersahabat",
    description: "Kualitas premium dengan harga paling kompetitif di pasaran.",
  },
  {
    icon: LuMonitorSmartphone,
    label: "Mobile Responsive",
    description: "Tampilan sempurna di semua perangkat smartphone dan tablet.",
  },
  {
    icon: FaPaintbrush,
    label: "Desain Premium & Modern",
    description:
      "Website tampil profesional dengan desain terkini dan menarik.",
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

const websiteCategories = [
  "Semua",
  "Bisnis",
  "E-Commerce",
  "Landing Page",
  "Portfolio",
  "Edukasi",
  "Lainnya",
];

const websiteTemplates = [
  {
    title: `Hoobank`,
    demoUrl: `https://business-website-template.onrender.com/`,
    description:
      "Landing page untuk startup dengan desain clean & profesional.",
    category: "Landing Page",
    img: hoobank,
  },
  {
    title: `Rosa2 Lite`,
    demoUrl: `https://demos.pixelgrade.com/rosa2-lite/`,
    description:
      "Restaurant WordPress theme, built to help small businesses shape an appealing online experience.",
    category: "Bisnis",
    img: rosa2,
  },
  {
    title: `Jadoo`,
    demoUrl: `https://jadoo-travels.vercel.app/`,
    description: "A travel agency landing web page",
    category: "Landing Page",
    img: jadoo,
  },
  {
    title: `HyperDrive`,
    demoUrl: `https://astro-hyperdrive.netlify.app/`,
    description:
      "Designed to provide a beautiful and functional starting point for your next car dealer website.",
    category: "E-Commerce",
    img: hyperdrive,
  },
  {
    title: `Bazario`,
    demoUrl: `https://bazario-omega.vercel.app/`,
    description: "Simple online shop.",
    category: "E-Commerce",
    img: bazario,
  },
  {
    title: `Sakeenah`,
    demoUrl: `https://sakeenah.pages.dev/`,
    description:
      "A beautiful, modern, and interactive Islamic Wedding Invitation Website.",
    category: "Lainnya",
    img: sakeenah,
  },
  {
    title: `Picto`,
    demoUrl: `https://themewagon.github.io/picto/`,
    description:
      "Portfolio template designed for developers, freelancers, or any creative professionals.",
    category: "Portfolio",
    img: picto,
  },
  {
    title: `E-Learning`,
    demoUrl: `https://themewagon.github.io/E-learning/`,
    description: "One-page educational website template with a minimal design.",
    category: "Edukasi",
    img: elearning,
  },
  {
    title: `Academia`,
    demoUrl: `https://scintillating-smakager-860376.netlify.app/`,
    description: "Educational website template with a minimal design.",
    category: "Edukasi",
    img: academia,
  },
  {
    title: `SMK School Website Template`,
    demoUrl: `https://miawwh.github.io/smk-school-website-template/`,
    description:
      "Open‑source HTML/CSS/Bootstrap 5 template designed for vocational high schools (SMK)",
    category: "Edukasi",
    img: smk,
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
  whychooseUsWeb,
  websiteCategories,
  websiteTemplates,
};
