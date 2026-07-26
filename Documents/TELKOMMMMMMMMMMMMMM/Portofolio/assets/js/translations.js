// ==========================================================
// KAMUS TERJEMAHAN (ID / EN)
// Setiap key di sini harus cocok dengan atribut data-i18n
// atau data-i18n-html di index.html.
// - Key yang dipakai lewat data-i18n      -> diisi sebagai teks polos.
// - Key yang dipakai lewat data-i18n-html -> boleh berisi tag HTML (mis. <strong>).
// ==========================================================
const translations = {

  id: {
    nav_about: "Tentang",
    nav_skills: "Keahlian",
    nav_projects: "Proyek",
    nav_contact: "Kontak",

    hero_badge: "TERSEDIA UNTUK PELUANG KERJA",
    hero_greeting: "Halo, saya",
    hero_tagline: 'Junior Network Engineer &mdash; fokus pada <strong>infrastruktur jaringan</strong>, <strong>routing</strong>, dan <strong>administrasi server</strong>.',
    btn_view_projects: "Lihat Proyek",
    btn_contact: "Hubungi Saya",
    btn_download_cv: "↓ Download CV",

    about_eyebrow: "01 / Tentang Saya",
    about_title: "Tentang Saya",
    about_paragraph: "Sebagai siswa aktif di bidang Teknik Komputer & Jaringan, saya memfokuskan pengembangan diri saya menjadi seorang Junior Network Engineer. Saya memiliki antusiasme tinggi dalam merancang, mengonfigurasi, dan melakukan troubleshooting pada infrastruktur jaringan. Saya terbiasa mengelola perangkat jaringan seperti MikroTik dan Ruijie, serta melakukan administrasi layanan pada sistem operasi server berbasis Linux (Debian/Ubuntu) maupun Windows Server. Fokus utama saya adalah membangun arsitektur jaringan yang andal, aman, dan efisien untuk memastikan konektivitas komunikasi dan layanan server berjalan dengan optimal.",

    skills_eyebrow: "02 / Keahlian",
    skills_title: "Keahlian",
    skills_cat_networking: "Networking",
    skills_cat_sysadmin: "System Administration",
    skills_cat_tools: "Tools",
    skills_cat_softskill: "Soft Skill",
    skills_topologi: "Topologi Jaringan",

    projects_eyebrow: "03 / Proyek",
    projects_title: "Proyek & Karya",

    project1_placeholder: "Tambahkan screenshot topologi VLAN di sini",
    project1_title: "Implementasi Keamanan & Segmentasi Jaringan Lapis 2",
    project1_desc: "Mengimplementasikan VLAN dan Trunking menggunakan Ruijie Managed Switch untuk segmentasi jaringan lokal (LAN) dan meningkatkan keamanan pada skala kecil-menengah.",

    project2_placeholder: "Tambahkan dokumentasi cable management di sini",
    project2_title: "Manajemen Fisik & Perencanaan Topologi Jaringan",
    project2_desc: "Perancangan cable management dan pemetaan port (port mapping) pada infrastruktur jaringan untuk distribusi fisik yang efisien dan mudah di-maintain.",

    project3_placeholder: "Tambahkan screenshot konfigurasi DHCP/DNS di sini",
    project3_title: "Automasi Pengalamatan IP & Resolusi Nama Domain (DHCP & DNS)",
    project3_desc: "Membangun dan mengonfigurasi layanan DNS serta DHCP Server pada infrastruktur server (Linux & Windows) untuk mengotomatisasi pengalamatan IP dan sistem penamaan domain yang stabil.",

    project4_placeholder: "Tambahkan screenshot web server di sini",
    project4_title: "Deployment Multi-Platform Web Server",
    project4_desc: "Membangun layanan web server menggunakan sistem operasi berbeda (Linux dan Windows Server) dengan Apache/Nginx untuk mensimulasikan ketersediaan layanan internal perusahaan.",

    project5_placeholder: "Tambahkan screenshot FTP/Samba di sini",
    project5_title: "Sistem Penyimpanan Terpusat & Secure File Sharing",
    project5_desc: "Menerapkan layanan FTP dan Samba/File Server untuk sistem penyimpanan data terpusat, memfasilitasi pertukaran file secara aman bagi pengguna dalam jaringan.",

    project6_placeholder: "Tambahkan screenshot konfigurasi MikroTik di sini",
    project6_title: "Konfigurasi Gateway & Wireless AP Bridge via MikroTik",
    project6_desc: "Mengonfigurasi router MikroTik sebagai gateway internet utama dan Wireless AP Bridge, mendistribusikan koneksi secara merata ke seluruh perangkat wireless di jaringan.",

    project7_placeholder: "Tambahkan diagram routing multi-server di sini",
    project7_title: "Routing & Distribusi Trafik Jaringan Multi-Server",
    project7_desc: "Merancang routing MikroTik untuk mendistribusikan IP address ke dua server terpisah dan klien, memastikan akses konten spesifik tanpa tabrakan traffic.",

    project_link_disabled: "Dokumentasi segera hadir",

    contact_eyebrow: "04 / Kontak",
    contact_title: "Hubungi Saya",
    contact_intro: "Punya pertanyaan atau ingin kolaborasi? Kirim pesan langsung lewat form ini.",
    contact_link_email: "Email",

    form_label_name: "Nama",
    form_label_email: "Email",
    form_label_message: "Pesan",
    form_submit: "Kirim Pesan",
    form_feedback_incomplete: "Mohon lengkapi semua kolom terlebih dahulu.",
    form_feedback_sending: "Mengirim pesan...",
    form_feedback_success: "Terima kasih, {name}! Pesan kamu berhasil terkirim.",
    form_feedback_error: "Gagal mengirim pesan. Coba lagi atau hubungi lewat email langsung.",
    form_feedback_not_configured: "⚠ Form belum dikonfigurasi. Silakan hubungi via email langsung."
  },

  en: {
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_contact: "Contact",

    hero_badge: "AVAILABLE FOR OPPORTUNITIES",
    hero_greeting: "Hi, I'm",
    hero_tagline: 'Junior Network Engineer &mdash; focused on <strong>network infrastructure</strong>, <strong>routing</strong>, and <strong>server administration</strong>.',
    btn_view_projects: "View Projects",
    btn_contact: "Contact Me",
    btn_download_cv: "↓ Download CV",

    about_eyebrow: "01 / About Me",
    about_title: "About Me",
    about_paragraph: "As an active student in Computer & Network Engineering, I'm focused on developing myself as a Junior Network Engineer. I have a strong enthusiasm for designing, configuring, and troubleshooting network infrastructure. I'm experienced in managing network devices such as MikroTik and Ruijie, as well as administering services on Linux-based server operating systems (Debian/Ubuntu) and Windows Server. My main focus is building reliable, secure, and efficient network architecture to ensure optimal communication connectivity and server performance.",

    skills_eyebrow: "02 / Skills",
    skills_title: "Skills",
    skills_cat_networking: "Networking",
    skills_cat_sysadmin: "System Administration",
    skills_cat_tools: "Tools",
    skills_cat_softskill: "Soft Skills",
    skills_topologi: "Network Topology",

    projects_eyebrow: "03 / Projects",
    projects_title: "Projects & Work",

    project1_placeholder: "Add VLAN topology screenshot here",
    project1_title: "Layer 2 Network Security & Segmentation Implementation",
    project1_desc: "Implemented VLAN and Trunking using a Ruijie Managed Switch to segment the local network (LAN) and improve security for small-to-medium scale networks.",

    project2_placeholder: "Add cable management documentation here",
    project2_title: "Physical Management & Network Topology Planning",
    project2_desc: "Designed cable management and port mapping for network infrastructure to produce an efficient, easy-to-maintain physical layout.",

    project3_placeholder: "Add DHCP/DNS configuration screenshot here",
    project3_title: "IP Addressing & Domain Name Resolution Automation (DHCP & DNS)",
    project3_desc: "Built and configured DNS and DHCP Server services on server infrastructure (Linux & Windows) to automate IP addressing and ensure stable domain name resolution.",

    project4_placeholder: "Add web server screenshot here",
    project4_title: "Multi-Platform Web Server Deployment",
    project4_desc: "Built web server services across different operating systems (Linux and Windows Server) using Apache/Nginx to simulate internal company service availability accessible to clients.",

    project5_placeholder: "Add FTP/Samba screenshot here",
    project5_title: "Centralized Storage & Secure File Sharing System",
    project5_desc: "Implemented FTP and Samba/File Server services to create a centralized data storage system, enabling secure file exchange for users within the network.",

    project6_placeholder: "Add MikroTik configuration screenshot here",
    project6_title: "Gateway Configuration & Wireless AP Bridge via MikroTik",
    project6_desc: "Configured a MikroTik router as the main internet gateway and Wireless AP Bridge, evenly distributing the connection to all wireless devices on the network.",

    project7_placeholder: "Add multi-server routing diagram here",
    project7_title: "Multi-Server Network Traffic Routing & Distribution",
    project7_desc: "Designed MikroTik routing to distribute IP addresses to two separate servers and clients, ensuring access to specific content from each web server without traffic collisions.",

    project_link_disabled: "Documentation coming soon",

    contact_eyebrow: "04 / Contact",
    contact_title: "Contact Me",
    contact_intro: "Have a question or want to collaborate? Send a message directly through this form.",
    contact_link_email: "Email",

    form_label_name: "Name",
    form_label_email: "Email",
    form_label_message: "Message",
    form_submit: "Send Message",
    form_feedback_incomplete: "Please fill in all fields first.",
    form_feedback_sending: "Sending your message...",
    form_feedback_success: "Thank you, {name}! Your message has been sent successfully.",
    form_feedback_error: "Failed to send message. Please try again or email directly.",
    form_feedback_not_configured: "⚠ Form not configured yet. Please reach out via email directly."
  }
};
