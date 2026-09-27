import {
  ServiceItem,
  FeatureItem,
  PricingPlan,
  ProjectItem,
  TestimonialItem,
  BlogPost,
} from "./types";

export const navItems = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "SERVICE", href: "#services" },
  { label: "PAGES", href: "#why-us" },
  { label: "PRICING", href: "#pricing" },
  { label: "PROJECTS", href: "#projects" },
  { label: "BLOG", href: "#blog" },
  { label: "CONTACT", href: "#contact" },
];

export const servicesData: ServiceItem[] = [
  {
    id: "web-dev",
    title: "Web Development",
    description: "Website modern dan responsif untuk membangun kehadiran digital bisnis Anda.",
    iconName: "Laptop",
    highlighted: false,
  },
  {
    id: "social-media",
    title: "Digital Marketing",
    description: "Strategi pemasaran digital untuk menjangkau lebih banyak pelanggan.",
    iconName: "Instagram",
    highlighted: true,
  },
  {
    id: "content-writer",
    title: "Content Creation",
    description: "Konten kreatif untuk memperkuat brand dan menarik target audiens.",
    iconName: "PenLine",
    highlighted: false,
  },
  {
    id: "seo-management",
    title: "SEO Optimization",
    description: "Optimasi website untuk meningkatkan visibilitas dan jangkauan di mesin pencari.",
    iconName: "Search",
    highlighted: false,
  },
];

export const whyChooseUsFeatures: FeatureItem[] = [
  {
    title: "Experienced & Skilled",
    description: "Pengalaman dan keahlian untuk menghadirkan solusi digital yang tepat bagi bisnis Anda.",
    iconName: "Globe",
  },
  {
    title: "Affordable Solutions",
    description: "Solusi digital berkualitas dengan harga yang kompetitif dan transparan.",
    iconName: "Wallet",
  },
  {
    title: "Professional Team",
    description: "Tim profesional dengan keahlian di bidang strategi, desain, dan teknologi.",
    iconName: "Users",
  },
  {
    title: "Quality Guaranteed",
    description: "Setiap project dikerjakan dengan standar kualitas dan perhatian terhadap detail.",
    iconName: "ShieldCheck",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Ideal for individuals who need quick access to basic features.",
    price: 0,
    period: "Month",
    highlighted: false,
    features: [
      { text: "20,000+ of PNG & SVG graphics", included: true },
      { text: "Access to 100 million stock images", included: true },
      { text: "Upload custom icons and fonts", included: false },
      { text: "Unlimited Sharing", included: false },
      { text: "Upload graphics & video in up to 4k", included: false },
      { text: "Unlimited Projects", included: false },
      { text: "Instant Access to our design system", included: false },
      { text: "Create teams to collaborate on designs", included: false },
    ],
  },
  {
    id: "elite",
    name: "Elite",
    tagline:
      "Ideal for individuals who need advanced features and team growth.",
    price: 25,
    period: "Month",
    highlighted: false,
    features: [
      { text: "20,000+ of PNG & SVG graphics", included: true },
      { text: "Access to 100 million stock images", included: true },
      { text: "Upload custom icons and fonts", included: true },
      { text: "Unlimited Sharing", included: true },
      { text: "Upload graphics & video in up to 4k", included: true },
      { text: "Unlimited Projects", included: true },
      { text: "Instant Access to our design system", included: false },
      { text: "Create teams to collaborate on designs", included: false },
    ],
  },
  {
    id: "advanced",
    name: "Advanced",
    tagline:
      "Ideal for businesses who need personalized support and enterprise scale.",
    price: 100,
    period: "Month",
    highlighted: false,
    features: [
      { text: "20,000+ of PNG & SVG graphics", included: true },
      { text: "Access to 100 million stock images", included: true },
      { text: "Upload custom icons and fonts", included: true },
      { text: "Unlimited Sharing", included: true },
      { text: "Upload graphics & video in up to 4k", included: true },
      { text: "Unlimited Projects", included: true },
      { text: "Instant Access to our design system", included: true },
      { text: "Create teams to collaborate on designs", included: true },
    ],
  },
];

export const projectItems: ProjectItem[] = [
  {
    id: "p1",
    title: "Web Design",
    category: "Digital Product",
    description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
    // Code editor / IDE screen matching image
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "p2",
    title: "Mobile App Banking",
    category: "Mobile UX/UI",
    description: "Next-gen fintech banking mobile application UI design.",
    // Hand holding smartphone with app UI
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "p3",
    title: "Creative Agency Brand",
    category: "Brand Identity",
    description:
      "Designer crafting innovative brand systems and digital interactions.",
    // Designer at work with laptop and desk
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "p4",
    title: "Team Strategy Session",
    category: "Strategy & Growth",
    description: "Collaborative workshop driving enterprise strategy forward.",
    // Team meeting around conference table
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop",
  },
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "t1",
    name: "Sarah Wijaya",
    role: "Product Lead",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    comment: "Konsep desain yang diberikan NEXORA terasa modern dan sesuai dengan karakter brand kami. Timnya juga sangat terbuka terhadap feedback selama proses pengerjaan.",
  },
  {
    id: "t2",
    name: "Andi Pratama",
    role: "Marketing Director",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    comment: "NEXORA membantu kami membangun website yang jauh lebih profesional dan mudah digunakan. Proses komunikasinya jelas, dan hasil akhirnya sesuai dengan yang kami harapkan.",
  },
  {
    id: "t3",
    name: "Rizky Maulana",
    role: "Startup Founder",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    comment: "Kami mendapatkan strategi digital yang lebih terarah setelah bekerja sama dengan NEXORA. Timnya tidak hanya fokus pada tampilan, tetapi juga memahami kebutuhan bisnis kami.",
  },
  {
    id: "t4",
    name: "Tubagus Fahmi",
    role: "Creative Director",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    comment: "Rekomendasi untuk pemesanan websie, pelayanan bagus dan hasil sesuai yang diharapkan. Jika ada kendala juga dibantu sampai selesai.",
  },
  {
    id: "t5",
    name: "Azka",
    role: "Tech Lead",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    comment: "Pelayanan disini sangat bagus, bisa request sesuai permintaan kami dan custom. Kemarin kirim draft lalu di realisasikan. Terima kasih NEXORA Agency.",
  },
];

export const blogPostsData: BlogPost[] = [
  {
    id: "b1",
    title: "E-commerce Sales Surge to Record High Amid Digital Transformation",
    excerpt:
      "Bagaimana transformasi digital membantu bisnis e-commerce menciptakan pengalaman pelanggan yang lebih cepat, personal, dan terintegrasi.",
    content:
      "Perkembangan teknologi digital telah mengubah cara bisnis berinteraksi dengan pelanggan. E-commerce tidak lagi hanya berfokus pada transaksi online, tetapi juga pada bagaimana menciptakan pengalaman digital yang mudah, cepat, dan relevan.",
    date: "Sep 18, 2026",
    category: "E-commerce",
    image:
      "https://images.unsplash.com/photo-1556742049-0a67e557224c?q=80&w=1200&auto=format&fit=crop",

    sections: [
      {
        type: "paragraph",
        content:
          "Industri e-commerce terus mengalami perubahan seiring meningkatnya ekspektasi konsumen terhadap pengalaman berbelanja secara digital. Pelanggan saat ini menginginkan proses yang sederhana, informasi produk yang jelas, pembayaran yang praktis, serta pengalaman yang konsisten di berbagai perangkat.",
      },
      {
        type: "heading",
        content: "Pengalaman Pengguna Menjadi Faktor Penting",
      },
      {
        type: "paragraph",
        content:
          "Website e-commerce bukan hanya sebuah katalog produk. Website menjadi bagian penting dari perjalanan pelanggan, mulai dari menemukan produk hingga menyelesaikan pembelian. Karena itu, desain antarmuka, kecepatan website, struktur navigasi, dan kemudahan checkout perlu dirancang secara terpadu.",
      },
      {
        type: "list",
        content: "Beberapa elemen penting dalam pengalaman e-commerce meliputi:",
        items: [
          "Navigasi produk yang sederhana dan mudah dipahami.",
          "Tampilan website yang responsif pada desktop maupun perangkat mobile.",
          "Proses checkout yang singkat dan tidak membingungkan.",
          "Informasi produk yang lengkap dan mudah dibandingkan.",
          "Integrasi metode pembayaran dan sistem pemesanan yang efisien.",
        ],
      },
      {
        type: "heading",
        content: "Personalisasi dan Data Pelanggan",
      },
      {
        type: "paragraph",
        content:
          "Data pelanggan dapat membantu bisnis memahami kebutuhan dan perilaku pengguna. Dengan pendekatan yang tepat, data tersebut dapat digunakan untuk memberikan rekomendasi produk, membuat kampanye yang lebih relevan, serta meningkatkan komunikasi dengan pelanggan.",
      },
      {
        type: "quote",
        content:
          "Pengalaman digital yang baik bukan hanya membuat pelanggan membeli, tetapi juga membuat mereka ingin kembali.",
      },
      {
        type: "heading",
        content: "Membangun E-commerce yang Siap Berkembang",
      },
      {
        type: "paragraph",
        content:
          "Bisnis perlu membangun fondasi digital yang dapat berkembang mengikuti kebutuhan. Arsitektur website, sistem pengelolaan konten, integrasi pihak ketiga, analytics, dan strategi digital sebaiknya dipertimbangkan sejak awal agar pengembangan berikutnya dapat dilakukan secara lebih efisien.",
      },
      {
        type: "paragraph",
        content:
          "Bagi brand yang ingin berkembang di pasar digital, e-commerce bukan sekadar tempat menjual produk. Platform tersebut merupakan bagian dari identitas brand dan salah satu titik utama hubungan antara bisnis dengan pelanggan.",
      },
    ],
  },

  {
    id: "b2",
    title: "Tech Giants Battle for Dominance in the Digital Age",
    excerpt:
      "Perkembangan teknologi digital mendorong perusahaan untuk terus beradaptasi dengan AI, automation, cloud technology, dan perubahan perilaku pengguna.",
    content:
      "Perubahan teknologi berlangsung semakin cepat. Bisnis dari berbagai skala perlu memahami bagaimana teknologi baru dapat digunakan untuk meningkatkan efisiensi sekaligus menciptakan pengalaman digital yang lebih baik.",
    date: "Sep 15, 2026",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",

    sections: [
      {
        type: "paragraph",
        content:
          "Transformasi digital telah membuat teknologi menjadi bagian penting dari hampir setiap proses bisnis. Cloud computing, artificial intelligence, automation, dan data analytics memberikan peluang baru bagi perusahaan untuk mengembangkan produk dan layanan.",
      },
      {
        type: "heading",
        content: "AI Mengubah Cara Bisnis Bekerja",
      },
      {
        type: "paragraph",
        content:
          "Artificial intelligence semakin banyak digunakan untuk membantu perusahaan menganalisis data, mengotomatisasi pekerjaan tertentu, memahami pelanggan, dan menghasilkan insight yang dapat digunakan dalam pengambilan keputusan.",
      },
      {
        type: "list",
        content: "Beberapa area yang dapat memperoleh manfaat dari teknologi AI antara lain:",
        items: [
          "Customer service dan conversational experience.",
          "Analisis data dan business intelligence.",
          "Personalisasi konten dan rekomendasi.",
          "Otomatisasi proses bisnis yang berulang.",
          "Optimasi strategi pemasaran digital.",
        ],
      },
      {
        type: "heading",
        content: "Cloud dan Infrastruktur Digital",
      },
      {
        type: "paragraph",
        content:
          "Cloud technology memungkinkan bisnis membangun infrastruktur yang lebih fleksibel. Perusahaan dapat menyesuaikan kapasitas teknologi dengan kebutuhan tanpa harus selalu melakukan investasi besar pada infrastruktur fisik.",
      },
      {
        type: "quote",
        content:
          "Teknologi memberikan peluang besar, tetapi nilai sebenarnya muncul ketika teknologi tersebut mampu menyelesaikan masalah nyata.",
      },
      {
        type: "heading",
        content: "Teknologi Harus Berorientasi pada Pengguna",
      },
      {
        type: "paragraph",
        content:
          "Pengembangan teknologi tidak seharusnya hanya berfokus pada fitur terbaru. Kebutuhan pengguna tetap menjadi dasar utama. Produk digital yang berhasil biasanya memiliki keseimbangan antara teknologi, desain, performa, dan kemudahan penggunaan.",
      },
      {
        type: "paragraph",
        content:
          "Bagi bisnis, mengikuti perkembangan teknologi bukan berarti harus menggunakan semua teknologi terbaru. Strategi yang lebih efektif adalah memilih teknologi yang benar-benar relevan dengan kebutuhan bisnis dan memberikan dampak yang dapat diukur.",
      },
    ],
  },

  {
    id: "b3",
    title: "Digital Payments Revolutionize the Business Landscape",
    excerpt:
      "Ekosistem pembayaran digital berkembang pesat dan membuka peluang baru bagi bisnis untuk menghadirkan transaksi yang lebih cepat, praktis, dan terintegrasi.",
    content:
      "Pembayaran digital menjadi bagian penting dalam perkembangan ekonomi digital. Integrasi payment gateway, mobile payment, dan sistem transaksi digital membantu bisnis menciptakan pengalaman pembayaran yang lebih sederhana.",
    date: "Sep 12, 2026",
    category: "Fintech",
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200&auto=format&fit=crop",

    sections: [
      {
        type: "paragraph",
        content:
          "Perubahan perilaku konsumen mendorong bisnis untuk menyediakan metode pembayaran yang semakin praktis. Transaksi digital memungkinkan pelanggan melakukan pembayaran tanpa harus bergantung pada proses manual atau pembayaran tunai.",
      },
      {
        type: "heading",
        content: "Pembayaran Digital dan Pengalaman Pelanggan",
      },
      {
        type: "paragraph",
        content:
          "Proses pembayaran merupakan salah satu bagian penting dalam customer journey. Sistem pembayaran yang lambat atau rumit dapat membuat pelanggan meninggalkan transaksi sebelum selesai. Sebaliknya, proses yang sederhana dapat membantu menciptakan pengalaman yang lebih baik.",
      },
      {
        type: "list",
        content: "Sistem pembayaran digital yang baik perlu memperhatikan beberapa aspek:",
        items: [
          "Kemudahan penggunaan bagi pelanggan.",
          "Kecepatan proses transaksi.",
          "Keamanan data dan informasi pembayaran.",
          "Dukungan terhadap berbagai metode pembayaran.",
          "Integrasi dengan sistem bisnis dan laporan transaksi.",
        ],
      },
      {
        type: "heading",
        content: "Keamanan Menjadi Prioritas",
      },
      {
        type: "paragraph",
        content:
          "Semakin banyak transaksi dilakukan secara digital, semakin penting pula aspek keamanan. Bisnis perlu memperhatikan perlindungan data, keamanan komunikasi, autentikasi, serta integrasi dengan penyedia pembayaran yang memiliki sistem keamanan yang memadai.",
      },
      {
        type: "quote",
        content:
          "Kemudahan transaksi harus berjalan bersama dengan keamanan dan kepercayaan pelanggan.",
      },
      {
        type: "heading",
        content: "Masa Depan Ekosistem Fintech",
      },
      {
        type: "paragraph",
        content:
          "Perkembangan fintech membuka peluang bagi bisnis untuk mengintegrasikan pembayaran dengan berbagai layanan digital lainnya. Data transaksi, sistem loyalty, invoicing, analytics, dan customer relationship management dapat menjadi bagian dari ekosistem digital yang lebih terhubung.",
      },
      {
        type: "paragraph",
        content:
          "Bagi bisnis yang sedang membangun produk digital, sistem pembayaran sebaiknya dipandang sebagai bagian dari keseluruhan pengalaman pengguna, bukan sekadar fitur tambahan di halaman checkout.",
      },
    ],
  },
];