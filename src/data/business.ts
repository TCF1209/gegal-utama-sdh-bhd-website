import type { BusinessData } from '@/types/business';

export const business: BusinessData = {
  schemaOrgType: "FinancialService",
  siteUrl: "https://gegal-utama-sdh-bhd.vercel.app",
  theme: {
    primary: "#974222",
    primaryDark: "#6B2F8C",
    accent: "#556390",
    surface: "#ACBCC9",
    textTitle: "#414d48",
    textBody: "#524942",
    onPrimary: "#ffffff",
    onPrimaryDark: "#ffffff",
    accentText: "#3c4974",
    fontDisplay: "DM Serif Display",
    fontBody: "Plus Jakarta Sans",
  },
  assets: {
    heroImage: "/images/maps-2-960.webp",
    galleryImages: ["/images/maps-1-960.webp", "/images/maps-3-960.webp"],
  },
  content: {
    "en": {
      meta: {
        title: "Gegal Utama Sdn Bhd",
        description: "Trusted community credit service in Ipoh, Perak. Providing personal loans, business financing, and emergency funds with transparent terms and fast approval.",
      },
      hero: {
        title: "Your Trusted Community Credit Partner",
        subtitle: "Reliable financial solutions for individuals and businesses in Ipoh — transparent terms, fast approval, and personalised service since day one.",
        cta: "Apply Now",
        image: "/images/maps-2-960.webp",
      },
      hours: {
        "Monday": "9:00 AM – 5:30 PM",
        "Tuesday": "9:00 AM – 5:30 PM",
        "Wednesday": "9:00 AM – 5:30 PM",
        "Thursday": "9:00 AM – 5:30 PM",
        "Friday": "9:00 AM – 5:30 PM",
        "Saturday": "9:00 AM – 2:30 PM",
        "Sunday": "Closed",
      },
      location: {
        address: "162, Jalan Tasek Timur, Taman Tasek Indra, 31400 Ipoh, Perak, Malaysia",
        mapsUrl: "https://maps.google.com/?cid=8590680050710605161",
        coordinates: { lat: 4.627587699999999, lng: 101.1157305 },
      },
      contact: {
        phone: "05-543 0348",
        whatsapp: "601121228224",
      },
      reviews: {
        rating: 5,
        count: 4,
        featured: [
          { author: "Customer", text: "Very helpful and professional staff. Fast loan processing and transparent terms.", rating: 5 },
          { author: "Customer", text: "Friendly service. They explain everything clearly before you sign anything.", rating: 5 },
        ],
      },
      trustBar: {
        items: [
          { icon: "shield", label: "KPKT Registered", value: "Licensed" },
          { icon: "star", label: "Google Rating", value: "5.0/5" },
          { icon: "clock", label: "Fast Processing", value: "Same Day" },
          { icon: "users", label: "Community Service", value: "Trusted" },
        ],
      },
      loanServices: [
        {
          title: "Personal Loan",
          description: "Flexible personal loans with competitive rates. Whether it's for education, medical expenses, or home improvements — we've got you covered.",
          price: "Competitive Rates",
        },
        {
          title: "Business Financing",
          description: "Working capital and business expansion loans for small and medium enterprises. Grow your business with confidence.",
          price: "Flexible Terms",
        },
        {
          title: "Emergency Fund",
          description: "Quick access to funds when you need them most. Same-day processing for urgent financial needs.",
          price: "Fast Approval",
        },
        {
          title: "Debt Consolidation",
          description: "Simplify your finances by combining multiple debts into a single manageable payment with lower interest.",
          price: "Lower Interest",
        },
      ],
      qualifications: [
        { label: "Licensed under KPKT (Ministry of Housing and Local Government)" },
        { label: "Registered Community Credit Service Provider" },
        { label: "Transparent Terms — No Hidden Charges" },
        { label: "Serving Ipoh and Perak Communities" },
      ],
      faqs: [
        {
          title: "What documents do I need to apply?",
          content: "You'll need your IC (MyKad), latest 3 months salary slip, bank statements, and proof of address. Our staff will guide you through the process.",
        },
        {
          title: "How long does approval take?",
          content: "Most applications are processed within the same business day. We strive to give you a decision as quickly as possible.",
        },
        {
          title: "What is the interest rate?",
          content: "Our rates are competitive and comply with KPKT regulations. The exact rate depends on the loan amount and tenure. Visit us for a personalised quote.",
        },
        {
          title: "Can I repay early?",
          content: "Yes, early repayment is allowed. Contact us to discuss the terms and any applicable adjustments.",
        },
        {
          title: "Is my information kept confidential?",
          content: "Absolutely. We follow strict data protection practices. Your personal and financial information is kept strictly confidential.",
        },
      ],
    },
    "ms": {
      meta: {
        title: "Gegal Utama Sdn Bhd",
        description: "Perkhidmatan kredit komuniti yang dipercayai di Ipoh, Perak. Menyediakan pinjaman peribadi, pembiayaan perniagaan, dan dana kecemasan dengan syarat telus dan kelulusan pantas.",
      },
      hero: {
        title: "Rakan Kredit Komuniti Anda yang Dipercayai",
        subtitle: "Penyelesaian kewangan yang boleh dipercayai untuk individu dan perniagaan di Ipoh — syarat telus, kelulusan pantas, dan perkhidmatan peribadi sejak hari pertama.",
        cta: "Mohon Sekarang",
        image: "/images/maps-2-960.webp",
      },
      hours: {
        "Isnin": "9:00 PG – 5:30 PTG",
        "Selasa": "9:00 PG – 5:30 PTG",
        "Rabu": "9:00 PG – 5:30 PTG",
        "Khamis": "9:00 PG – 5:30 PTG",
        "Jumaat": "9:00 PG – 5:30 PTG",
        "Sabtu": "9:00 PG – 2:30 PTG",
        "Ahad": "Tutup",
      },
      location: {
        address: "162, Jalan Tasek Timur, Taman Tasek Indra, 31400 Ipoh, Perak, Malaysia",
        mapsUrl: "https://maps.google.com/?cid=8590680050710605161",
        coordinates: { lat: 4.627587699999999, lng: 101.1157305 },
      },
      contact: {
        phone: "05-543 0348",
        whatsapp: "601121228224",
      },
      reviews: {
        rating: 5,
        count: 4,
        featured: [
          { author: "Pelanggan", text: "Kakitangan sangat membantu dan profesional. Proses pinjaman pantas dan syarat yang telus.", rating: 5 },
          { author: "Pelanggan", text: "Perkhidmatan mesra. Mereka jelaskan segala-galanya dengan jelas sebelum anda menandatangani apa-apa.", rating: 5 },
        ],
      },
      trustBar: {
        items: [
          { icon: "shield", label: "Berdaftar KPKT", value: "Berlesen" },
          { icon: "star", label: "Penilaian Google", value: "5.0/5" },
          { icon: "clock", label: "Proses Pantas", value: "Hari Sama" },
          { icon: "users", label: "Khidmat Komuniti", value: "Dipercayai" },
        ],
      },
      loanServices: [
        {
          title: "Pinjaman Peribadi",
          description: "Pinjaman peribadi yang fleksibel dengan kadar yang kompetitif. Sama ada untuk pendidikan, perbelanjaan perubatan, atau penambahbaikan rumah — kami sedia membantu.",
          price: "Kadar Kompetitif",
        },
        {
          title: "Pembiayaan Perniagaan",
          description: "Modal kerja dan pinjaman pengembangan perniagaan untuk perusahaan kecil dan sederhana. Kembangkan perniagaan anda dengan yakin.",
          price: "Syarat Fleksibel",
        },
        {
          title: "Dana Kecemasan",
          description: "Akses pantas kepada dana apabila anda paling memerlukannya. Pemprosesan pada hari yang sama untuk keperluan kewangan mendesak.",
          price: "Kelulusan Pantas",
        },
        {
          title: "Penyatuan Hutang",
          description: "Permudahkan kewangan anda dengan menggabungkan pelbagai hutang ke dalam satu pembayaran yang mudah diuruskan dengan faedah yang lebih rendah.",
          price: "Faedah Rendah",
        },
      ],
      qualifications: [
        { label: "Berlesen di bawah KPKT (Kementerian Perumahan dan Kerajaan Tempatan)" },
        { label: "Penyedia Perkhidmatan Kredit Komuniti Berdaftar" },
        { label: "Syarat Telus — Tiada Caj Tersembunyi" },
        { label: "Berkhidmat untuk Komuniti Ipoh dan Perak" },
      ],
      faqs: [
        {
          title: "Apakah dokumen yang diperlukan untuk memohon?",
          content: "Anda memerlukan IC (MyKad), slip gaji 3 bulan terkini, penyata bank, dan bukti alamat. Kakitangan kami akan membimbing anda melalui prosesnya.",
        },
        {
          title: "Berapa lama masa kelulusan?",
          content: "Kebanyakan permohonan diproses dalam hari perniagaan yang sama. Kami berusaha untuk memberikan keputusan secepat mungkin.",
        },
        {
          title: "Berapakah kadar faedah?",
          content: "Kadar kami kompetitif dan mematuhi peraturan KPKT. Kadar tepat bergantung pada jumlah pinjaman dan tempoh. Lawati kami untuk sebut harga peribadi.",
        },
        {
          title: "Bolehkah saya membayar awal?",
          content: "Ya, pembayaran awal dibenarkan. Hubungi kami untuk membincangkan syarat dan sebarang pelarasan yang berkenaan.",
        },
        {
          title: "Adakah maklumat saya dirahsiakan?",
          content: "Sudah tentu. Kami mengamalkan perlindungan data yang ketat. Maklumat peribadi dan kewangan anda disimpan dengan sulit sepenuhnya.",
        },
      ],
    },
  },
};
