import { ProjectPackage, WorkflowStep, GuaranteeItem } from './types';

export const PHONE_NUMBER = "6282318736775"; // WhatsApp Contact Number

export const PROJECT_PACKAGES: ProjectPackage[] = [
  {
    id: "umkm",
    name: "Paket Website UMKM",
    target: "UMKM & Toko Online Pemula",
    priceOriginal: 2000000,
    pricePromo: 999000,
    discountBadge: "Diskon 50%",
    imageUrl: "https://images.unsplash.com/photo-1751725154557-b10ab73f1564?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      "1 Halaman Landing Page Premium",
      "Katalog Produk (Maksimal 15 Item)",
      "Integrasi Tombol Order WhatsApp Langsung",
      "Sematkan Google Maps Lokasi Toko",
      "Desain 100% Mobile Friendly & Responsif"
    ],
    whatsAppName: "Paket Website UMKM",
    demoUrl: "https://umkm-digihan.vercel.app/",
    demoContent: {
      title: "Warung Kopi Nusantara",
      subtitle: "Cita Rasa Kopi Asli Indonesia, Dipanggang Segar & Diseduh dengan Cinta.",
      colorTheme: "amber",
      layoutType: "catalog",
      features: [
        "Kopi Gayo Arabica - Rp 35.000",
        "Kopi Toraja Robusta - Rp 30.000",
        "Kopi Luwak Premium - Rp 75.000",
        "Croissant Almond - Rp 22.000"
      ],
      mockStats: [
        { label: "Cabang", value: "3 Outlet" },
        { label: "Biji Kopi Pilihan", value: "10+ Varian" },
        { label: "Rating Google", value: "4.9/5.0" }
      ],
      accentColor: "from-amber-500 to-amber-750"
    }
  },
  {
    id: "bisnis",
    name: "Paket Website Bisnis",
    target: "Bisnis Lokal, Klinik & Jasa Profesional",
    priceOriginal: 2500000,
    pricePromo: 1500000,
    discountBadge: "Diskon 40%",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
    features: [
      "3 - 5 Halaman",
      "Galeri Portfolio / Jasa",
      "Formulir Booking Online Interaktif",
      "Fitur Testimoni Pelanggan",
      "Konfigurasi SEO Dasar",
      "Mobile Friendly & Desain Eksklusif"
    ],
    whatsAppName: "Paket Website Bisnis",
    demoUrl: "https://tkbimba-digihan.vercel.app/",
    demoContent: {
      title: "DentalCare Center",
      subtitle: "Senyum Cemerlang, Gigi Sehat. Pelayanan Dokter Gigi Spesialis Profesional & Ramah.",
      colorTheme: "cyan",
      layoutType: "landing",
      features: [
        "Pembersihan Karang Gigi (Scaling)",
        "Tambal Gigi Komposit Estetik",
        "Pemasangan Behel (Orthodontic)",
        "Pemutihan Gigi (Teeth Whitening)"
      ],
      mockStats: [
        { label: "Dokter Gigi", value: "5 Spesialis" },
        { label: "Pasien Puas", value: "10,000+" },
        { label: "Jam Operasional", value: "09:00 - 21:00" }
      ],
      accentColor: "from-cyan-500 to-cyan-750",
    },
    isPopular: true
  },
  {
    id: "company",
    name: "Paket Company Profile",
    target: "Instansi, Startup & Perusahaan Menengah",
    priceOriginal: 3000000,
    pricePromo: 2000000,
    discountBadge: "Diskon 33,3%",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600",
    features: [
      "5 - 7 Halaman Formal",
      "Halaman Visi Misi",
      "Fitur Download PDF / Company Profile",
      "Akses Email Profesional Perusahaan (nama@bisnis.com)",
      "SSL & Speed Optimization (Lighthouse Score 90+)",
      "Terintegrasi Dengan Backend standart"
    ],
    whatsAppName: "Paket Company Profile",
    demoUrl: "https://company-digihan.vercel.app/",
    demoContent: {
      title: "PT Nusantara Energi Mandiri",
      subtitle: "Menyediakan Solusi Energi Terbarukan yang Berkelanjutan untuk Masa Depan Industri Indonesia.",
      colorTheme: "emerald",
      layoutType: "corporate",
      features: [
        "Instalasi Panel Surya Skala Industri",
        "Konsultasi Efisiensi Energi Hijau",
        "Pembangkit Listrik Mikrohidro",
        "Distribusi Energi Bersih Terintegrasi"
      ],
      mockStats: [
        { label: "Pengurangan CO2", value: "12K Ton/Thn" },
        { label: "Proyek Selesai", value: "45+ Lokasi" },
        { label: "Tenaga Ahli", value: "120+ Insinyur" }
      ],
      accentColor: "from-emerald-500 to-emerald-750"
    }
  }
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    stepNumber: 1,
    title: "Konsultasi & Deal",
    description: "Ngobrol santai mengenai kebutuhan bisnis, fitur website yang diinginkan, dan persiapan data isi website.",
    iconName: "HelpCircle"
  },
  {
    stepNumber: 2,
    title: "DP 50% & Mulai Project",
    description: "Website impian Anda mulai kami kembangkan menggunakan teknologi modern, dipastikan super cepat dan responsif.",
    iconName: "Cpu"
  },
  {
    stepNumber: 3,
    title: "Review Klien",
    description: "Klien mengecek dan mereview progress website. Jika ada yang kurang pas, langsung kami perbaiki saat itu juga.",
    iconName: "Eye"
  },
  {
    stepNumber: 4,
    title: "Serah Terima & Launching",
    description: "Website online secara resmi menggunakan domain pilihan Anda. Source code dan akses kami berikan sepenuhnya.",
    iconName: "Rocket"
  }
];

export const GUARANTEES: GuaranteeItem[] = [
  {
    title: "Garansi 1 Bulan Penuh",
    badge: "Bebas Khawatir",
    description: "Bebas biaya untuk perubahan minor seperti ganti teks, ganti warna, atau ganti foto jika ada kekeliruan setelah website Anda online secara resmi.",
    iconName: "ShieldCheck"
  },
  {
    title: "Kepemilikan Penuh",
    badge: "100% Hak Milik",
    description: "Source code, kredensial hosting, dan akses administrasi website 100% diserahkan ke tangan Anda tanpa biaya bulanan tersembunyi.",
    iconName: "Key"
  }
];
