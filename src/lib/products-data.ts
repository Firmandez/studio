// lib/products-data.ts

import { features } from "process";

export interface Product {
    name: string;
    slug: string;
    description: string;
    price: string;
    image: string;
    hint: string;
  }
  
  export interface ProductVariety {
    name: string;
    description: string;
    price: string;
    features: string[];
    image: string;
  }
  
  export interface ProductDetail {
    name: string;
    description: string;
    varieties: ProductVariety[];
  }
  
  export const products: Product[] = [
    { 
      name: "Alpukat", 
      slug: "alpukat",
      description: "Bibit alpukat unggul yang siap tanam, tumbuh cepat, dan cocok di berbagai iklim tropis. Hasil buah lembut dan gurih.", 
      price: "Mulai dari $4.50", 
      image: "/img/Alpukat/Alpukat-Aligator.jpg",
      hint: "tanaman alpukat" 
    },
    { 
      name: "Anggur", 
      slug: "anggur",
      description: "Bibit anggur manis yang cocok ditanam di pot maupun tanah langsung. Tahan panas dan mudah berbuah.", 
      price: "Mulai dari $3.75", 
      image: "https://picsum.photos/400/300?random=2", 
      hint: "tanaman anggur" 
    },
    { 
      name: "Apel", 
      slug: "apel",
      description: "Bibit apel lokal yang cocok untuk dataran tinggi. Buahnya renyah, segar, dan kaya vitamin C.", 
      price: "Mulai dari $5.00", 
      image: "/img/Apel/Apel-Futsa2.jpg", 
      hint: "tanaman apel" 
    },
    { 
      name: "Durian", 
      slug: "durian",
      description: "Bibit durian berkualitas tinggi, tumbuh cepat, dan berbuah lebat.", 
      price: "Mulai dari $7.50", 
      image: "/img/Durian/Bawor.jpg", 
      hint: "tanaman durian" 
    },
    { 
      name: "Jambu", 
      slug: "jambu",
      description: "Bibit jambu manis, cepat berbuah, dan mudah dirawat di pekarangan rumah.", 
      price: "Mulai dari $3.25", 
      image: "https://picsum.photos/400/300?random=5", 
      hint: "tanaman jambu" 
    },
    { 
      name: "Jeruk", 
      slug: "jeruk",
      description: "Bibit jeruk siap tanam, aroma segar dan rasa manis asam yang seimbang.", 
      price: "Mulai dari $3.99", 
      image: "https://picsum.photos/400/300?random=6", 
      hint: "tanaman jeruk" 
    },
    { 
      name: "Kelapa", 
      slug: "kelapa",
      description: "Bibit kelapa cepat berbuah dan cocok untuk daerah tropis. Daging buah tebal dan air segar.", 
      price: "Mulai dari $4.25", 
      image: "https://picsum.photos/400/300?random=7", 
      hint: "tanaman kelapa" 
    },
    { 
      name: "Klengkeng", 
      slug: "klengkeng",
      description: "Bibit kelengkeng super, cepat berbuah dan rasanya manis legit.", 
      price: "Mulai dari $6.00", 
      image: "https://picsum.photos/400/300?random=8", 
      hint: "tanaman klengkeng" 
    },
    { 
      name: "Mangga", 
      slug: "mangga",
      description: "Bibit mangga unggulan, cepat tumbuh dan berbuah lebat dengan aroma khas.", 
      price: "Mulai dari $3.50", 
      image: "/img/Mangga/Miyazaki.jpg", 
      hint: "tanaman mangga" 
    },
    { 
      name: "Manggis", 
      slug: "manggis",
      description: "Bibit manggis premium yang cocok untuk dataran rendah maupun tinggi, berbuah manis dan segar.", 
      price: "Mulai dari $5.75", 
      image: "https://picsum.photos/400/300?random=10", 
      hint: "tanaman manggis" 
    },
    { 
      name: "Miracle Fruit", 
      slug: "miracle-fruit",
      description: "Bibit miracle fruit unik yang membuat makanan asam terasa manis. Cocok ditanam dalam pot.", 
      price: "Mulai dari $6.50", 
      image: "/img/MiracleFruit/MiracleFruit.jpeg", 
      hint: "tanaman miracle fruit" 
    },
    { 
      name: "Nanas", 
      slug: "nanas",
      description: "Bibit nanas yang manis segar dan mudah tumbuh di berbagai kondisi tanah.", 
      price: "Mulai dari $2.99", 
      image: "/img/Nanas/Medusa2.jpg", 
      hint: "tanaman nanas" 
    },
    { 
      name: "Nangka", 
      slug: "nangka",
      description: "Bibit nangka cepat berbuah, aroma harum dan daging buah tebal.", 
      price: "Mulai dari $4.25", 
      image: "/img/Nangka/Madu.jpg", 
      hint: "tanaman nangka" 
    },
    { 
      name: "Pepaya", 
      slug: "pepaya",
      description: "Bibit pepaya produktif, manis dan cocok untuk lahan sempit atau pekarangan rumah.", 
      price: "Mulai dari $2.50", 
      image: "https://picsum.photos/400/300?random=14", 
      hint: "tanaman pepaya" 
    },
    { 
      name: "Sawo", 
      slug: "sawo",
      description: "Bibit sawo unggul, berbuah cepat dengan rasa manis legit dan tekstur lembut.", 
      price: "Mulai dari $3.75", 
      image: "/img/Sawo/BlackSapote.jpg", 
      hint: "tanaman sawo" 
    },    
  ];
  
  export const productVarieties: Record<string, ProductDetail> = {
    "alpukat": {
      name: "Bibit Alpukat",
      description: "Bibit alpukat unggul yang siap tanam, tumbuh cepat, dan cocok di berbagai iklim tropis. Hasil buah lembut dan gurih.",
      varieties: [
        {
          name: "Alpukat Aligator",
          description: "Varietas alpukat dengan bentuk lonjong besar dan daging buah lembut seperti mentega. Populer karena rasanya yang gurih dan tekstur creamy.",
          price: "$5.50",
          features: ["Daging buah tebal", "Rasa creamy", "Cocok untuk jus", "Tahan penyakit"],
          image: "/img/Alpukat/Alpukat-Aligator.jpg"
        },
        {
          name: "Alpukat Kendil",
          description: "Alpukat lokal berukuran jumbo dengan daging tebal dan rasa gurih khas. Cocok untuk konsumsi keluarga maupun dijual.",
          price: "$4.99",
          features: ["Ukuran buah besar", "Produktivitas tinggi", "Adaptasi baik", "Rasa gurih"],
          image: "/img/Alpukat/Alpukat-Kendil.jpg"
        },
        {
          name: "Alpukat Hass",
          description: "Varietas premium asal Meksiko dengan kulit kasar berwarna hitam keunguan saat matang. Dikenal memiliki rasa terbaik di dunia.",
          price: "$6.50",
          features: ["Kualitas ekspor", "Rasa premium", "Tahan lama", "Nutrisi tinggi"],
          image: "/img/Alpukat/Alpukat-hass.jpg"
        },
        {
          name: "Alpukat Miki",
          description: "Alpukat unggulan dengan ukuran jumbo dan daging buah yang sangat tebal. Tumbuh cepat dan mudah berbuah.",
          price: "$6.75",
          features: ["Ukuran jumbo", "Produktif", "Cepat berbuah", "Daging tebal"],
          image: "/img/Alpukat/Alpukat-Miki.jpg"
        },
        {
          name: "Alpukat Pluwang",
          description: "Varietas alpukat lokal unggul dengan tekstur lembut dan rasa manis gurih. Cocok untuk tabulampot dan mudah dirawat.",
          price: "$5.25",
          features: ["Cepat berbuah", "Rasa manis gurih", "Cocok di pot", "Tahan hama"],
          image: "/img/Alpukat/Alpukat-Pluwang.jpg"
        },
        {
          name: "Alpukat Red Vietnam",
          description: "Varietas langka dengan kulit buah merah keunguan dan rasa gurih lembut. Banyak dicari karena tampilannya unik.",
          price: "$7.50",
          features: ["Kulit merah keunguan", "Rasa gurih lembut", "Unik dan langka", "Nilai jual tinggi"],
          image: "/img/Alpukat/Alpukat-Red-Vietnam.jpg"
        },
        {
          name: "Alpukat Roro",
          description: "Varietas alpukat lokal unggulan hasil persilangan, dengan daging tebal dan rasa creamy. Cocok untuk konsumsi harian.",
          price: "$5.75",
          features: ["Rasa creamy", "Cepat berbuah", "Daging tebal", "Cocok di dataran rendah"],
          image: "/img/Alpukat/Alpukat-Roro"
        },
        {
          name: "Alpukat Wina",
          description: "Varietas alpukat favorit karena cepat berbuah dan rasa manis gurihnya. Cocok untuk pekarangan rumah.",
          price: "$5.25",
          features: ["Cepat berbuah", "Rasa manis gurih", "Produktivitas tinggi", "Tahan cuaca panas"],
          image: "/img/Alpukat/Alpukat-Wina"
        }        
      ]
    },
    "anggur": {
      name: "Bibit Anggur",
      description: "Bibit anggur manis yang cocok ditanam di pot maupun tanah langsung. Tahan panas dan mudah berbuah.",
      varieties: [
        {
          name: "Sweet Basil",
          description: "Basil klasik dengan aroma manis",
          price: "$3.25",
          features: ["Aroma kuat", "Cocok untuk pasta", "Mudah tumbuh", "Serbaguna"],
          image: "https://picsum.photos/400/300?random=21"
        },
        {
          name: "Thai Basil",
          description: "Basil dengan aroma adas manis khas Thailand",
          price: "$3.75",
          features: ["Aroma unik", "Tahan panas", "Cocok masakan Asia", "Dekoratif"],
          image: "https://picsum.photos/400/300?random=22"
        },
        {
          name: "Lemon Basil",
          description: "Basil dengan aroma lemon yang menyegarkan",
          price: "$3.50",
          features: ["Aroma lemon", "Cocok untuk teh", "Segar", "Insect repellent"],
          image: "https://picsum.photos/400/300?random=23"
        }
      ]
    },
    "apel": {
      name: "Bibit Apel",
      description: "Bibit apel yang cocok untuk dataran tinggi. Buahnya renyah, segar, dan kaya vitamin C.",
      varieties: [
        {
          name: "Apel Futsa",
          description: "Varietas apel unggulan dengan rasa manis segar dan aroma khas. Cocok ditanam di dataran tinggi dengan hasil buah besar dan renyah.",
          price: "$4.50",
          features: ["Rasa manis segar", "Buah besar", "Produktif", "Cocok dataran tinggi"],
          image: "/img/Apel/Apel-Futsa.jpg"
        }, 
      ]
    },
    "durian": {
      name: "Bibit Durian",
      description: "Bibit durian berkualitas tinggi, tumbuh cepat dan berbuah lebat.",
      varieties: [
        {
          name: "Durian Bawor",
          description: "Varietas durian unggulan asal Banyumas dengan ukuran buah besar, rasa manis legit, dan cepat berbuah. Cocok untuk budidaya maupun koleksi pribadi.",
          price: "$7.50",
          features: ["Buah besar", "Cepat berbuah", "Rasa manis legit", "Tahan penyakit"],
          image: "/img/Durian/Bawor.jpg"
        },
        {
          name: "Durian Duri Hitam",
          description: "Durian premium asal Malaysia dengan rasa lembut dan aroma khas. Dikenal sebagai salah satu varietas terbaik di dunia.",
          price: "$9.00",
          features: ["Rasa premium", "Daging lembut", "Aroma khas", "Nilai jual tinggi"],
          image: "/img/Durian/DuriHitam.jpg"
        },
        {
          name: "Durian Merah",
          description: "Durian khas Banyuwangi dengan warna daging merah jingga alami dan rasa manis gurih yang unik.",
          price: "$8.50",
          features: ["Daging merah alami", "Rasa unik", "Langka", "Aroma lembut"],
          image: "/img/Durian/Merah.jpg"
        },
        {
          name: "Durian Montong",
          description: "Durian asal Thailand yang populer karena ukurannya besar, biji kecil, dan daging tebal bertekstur lembut.",
          price: "$7.25",
          features: ["Daging tebal", "Biji kecil", "Ukuran besar", "Rasa manis lembut"],
          image: "/img/Durian/Montong.jpg"
        },
        {
          name: "Durian Musang King",
          description: "Varietas paling dicari di Asia Tenggara dengan cita rasa manis pahit seimbang dan tekstur sangat lembut.",
          price: "$9.25",
          features: ["Rasa manis pahit seimbang", "Daging lembut", "Kualitas ekspor", "Aroma kuat"],
          image: "/img/Durian/Musangking.jpg"
        },
        {
          name: "Durian Namlung",
          description: "Durian lokal unggulan dari Kalimantan Selatan dengan rasa manis gurih dan tekstur halus.",
          price: "$6.75",
          features: ["Asal Kalimantan", "Rasa manis gurih", "Tekstur halus", "Produktif"],
          image: "/img/Durian/Namlung.jpg"
        },
        {
          name: "Durian Pelangi",
          description: "Durian langka dengan daging berwarna gradasi kuning ke merah muda, rasa manis legit, dan aroma khas ringan.",
          price: "$8.75",
          features: ["Daging gradasi warna", "Rasa manis legit", "Langka", "Estetis"],
          image: "/img/Durian/Pelangi.jpg"
        },
        {
          name: "Durian Super Tembaga",
          description: "Varietas unggul dengan daging buah oranye keemasan, rasa manis lembut, dan kadar alkohol alami yang rendah.",
          price: "$8.00",
          features: ["Daging oranye keemasan", "Rasa manis lembut", "Biji kecil", "Aroma ringan"],
          image: "/img/Durian/SuperTembaga.jpg"
        }        
      ]
    },
    "jambu": {
      name: "Bibit Jambu",
      description: "Bibit jambu manis, cepat berbuah, dan mudah dirawat di pekarangan rumah.",
      varieties: [
        {
          name: "Jambu Air",
          description: "Buah segar berair dengan rasa manis dan menyegarkan.",
          price: "$3.75",
          features: ["Rasa manis", "Kandungan air tinggi", "Cocok dimakan langsung", "Menyegarkan"],
          image: "https://picsum.photos/400/300?random=51"
        },
        {
          name: "Jambu Kristal",
          description: "Varietas jambu tanpa biji dengan daging tebal dan renyah.",
          price: "$3.00",
          features: ["Tanpa biji", "Renyah", "Mudah ditanam", "Populer di pasar lokal"],
          image: "https://picsum.photos/400/300?random=52"
        },
        {
          name: "Jambu Madu Deli",
          description: "Jambu unggulan dengan rasa sangat manis seperti madu.",
          price: "$4.00",
          features: ["Manis seperti madu", "Ukuran sedang", "Renyah", "Cocok untuk budidaya"],
          image: "https://picsum.photos/400/300?random=53"
        },
        {
          name: "Jambu Merah",
          description: "Jambu dengan daging buah berwarna merah dan aroma khas.",
          price: "$3.25",
          features: ["Daging merah", "Aroma harum", "Rasa manis", "Kaya vitamin C"],
          image: "https://picsum.photos/400/300?random=54"
        }        
      ]
    },
    "jeruk": {
      name: "Bibit Jeruk",
      description: "Bibit jeruk manis siap tanam, aroma segar dan rasa manis asam yang seimbang.",
      varieties: [
        {
          name: "Jeruk Dekopon",
          description: "Jeruk premium asal Jepang dengan ukuran besar dan rasa manis menyegarkan.",
          price: "$5.50",
          features: ["Buah besar", "Sangat manis", "Sedikit biji", "Tahan penyakit"],
          image: "https://picsum.photos/400/300?random=61"
        },
        {
          name: "Jeruk Keprok Siem",
          description: "Jeruk lokal populer dengan rasa manis segar dan kulit mudah dikupas.",
          price: "$3.75",
          features: ["Kulit mudah dikupas", "Manis segar", "Produktif", "Cocok iklim tropis"],
          image: "https://picsum.photos/400/300?random=62"
        },
        {
          name: "Jeruk Lemon",
          description: "Jeruk dengan rasa asam kuat dan aroma segar, cocok untuk minuman atau masakan.",
          price: "$4.25",
          features: ["Aroma segar", "Kaya vitamin C", "Serbaguna", "Tahan panas"],
          image: "https://picsum.photos/400/300?random=63"
        },
        {
          name: "Jeruk Nagami",
          description: "Varietas kumquat kecil yang bisa dimakan beserta kulitnya dengan rasa manis-asam seimbang.",
          price: "$4.75",
          features: ["Bisa dimakan dengan kulit", "Rasa manis-asam", "Tanaman hias", "Produktif"],
          image: "https://picsum.photos/400/300?random=64"
        },
        {
          name: "Jeruk Nipis",
          description: "Jeruk kecil berwarna hijau dengan rasa asam kuat, cocok untuk bumbu dan minuman.",
          price: "$3.50",
          features: ["Asam segar", "Mudah tumbuh", "Cocok tropis", "Serbaguna"],
          image: "https://picsum.photos/400/300?random=65"
        },
        {
          name: "Jeruk Pamelo",
          description: "Jeruk bali berukuran besar dengan daging buah manis dan segar.",
          price: "$5.00",
          features: ["Buah besar", "Rasa manis", "Daya simpan lama", "Aroma segar"],
          image: "https://picsum.photos/400/300?random=66"
        },
        {
          name: "Jeruk Purut",
          description: "Jeruk berkulit bergelombang dengan aroma kuat, daunnya sering digunakan untuk bumbu masakan.",
          price: "$3.25",
          features: ["Daun aromatik", "Tahan panas", "Mudah dirawat", "Serbaguna"],
          image: "https://picsum.photos/400/300?random=67"
        },
        {
          name: "Jeruk Santang",
          description: "Jeruk manis dengan kulit tipis dan ukuran sedang, populer untuk budidaya rumahan.",
          price: "$4.00",
          features: ["Kulit tipis", "Rasa manis", "Mudah berbuah", "Tahan penyakit"],
          image: "https://picsum.photos/400/300?random=68"
        },
        {
          name: "Jeruk Sunkist",
          description: "Jeruk impor dengan rasa manis segar dan kandungan air tinggi, cocok untuk jus.",
          price: "$4.75",
          features: ["Rasa manis", "Banyak air", "Kulit tebal", "Kualitas ekspor"],
          image: "https://picsum.photos/400/300?random=69"
        }        
      ]
    },
    "kelapa": {
      name: "Bibit Kelapa",
      description: "Bibit kelapa cepat berbuah dan cocok untuk daerah tropis. Daging buah tebal dan air segar.",
      varieties: [
        {
          name: "Kelapa Gading",
          description: "Varietas kelapa berbatang pendek dengan buah berwarna kuning keemasan yang manis dan segar.",
          price: "$4.00",
          features: ["Air manis segar", "Batang pendek", "Dekoratif", "Cepat berbuah"],
          image: "https://picsum.photos/400/300?random=71"
        },
        {
          name: "Kelapa Gajah Entok",
          description: "Kelapa berukuran besar dengan air melimpah dan daging tebal, cocok untuk konsumsi dan industri.",
          price: "$4.50",
          features: ["Buah besar", "Air banyak", "Daging tebal", "Tahan lama"],
          image: "https://picsum.photos/400/300?random=72"
        },
        {
          name: "Kelapa Kopyor",
          description: "Kelapa langka dengan daging lembut seperti jelly dan cita rasa gurih khas.",
          price: "$6.00",
          features: ["Daging lembut", "Rasa gurih", "Langka", "Bernilai tinggi"],
          image: "https://picsum.photos/400/300?random=73"
        },
        {
          name: "Kelapa Wulung",
          description: "Kelapa dengan air beraroma harum dan warna buah agak kemerahan, khas daerah Jawa.",
          price: "$4.25",
          features: ["Aroma harum", "Warna menarik", "Air manis", "Cocok konsumsi langsung"],
          image: "https://picsum.photos/400/300?random=74"
        }        
      ]
    },
    "klengkeng": {
      name: "Bibit Klengkeng",
      description: "Bibit kelengkeng super, cepat berbuah dan rasanya manis legit.",
      varieties: [
        {
          name: "Klengkeng Matalada",
          description: "Varietas unggulan asal Thailand dengan daging buah tebal, rasa sangat manis, dan biji kecil.",
          price: "$5.00",
          features: ["Daging tebal", "Rasa sangat manis", "Biji kecil", "Produktif"],
          image: "https://picsum.photos/400/300?random=81"
        },
        {
          name: "Klengkeng Merah",
          description: "Lengkeng unik berwarna merah dengan cita rasa manis segar dan tampilan eksotis.",
          price: "$5.50",
          features: ["Warna merah unik", "Rasa manis segar", "Langka", "Dekoratif"],
          image: "https://picsum.photos/400/300?random=82"
        },
        {
          name: "Klengkeng New Kristal",
          description: "Varietas modern hasil persilangan, tanpa biji, sangat produktif, dan mudah berbuah di dataran rendah.",
          price: "$6.00",
          features: ["Tanpa biji", "Berbuah cepat", "Cocok dataran rendah", "Produktif"],
          image: "https://picsum.photos/400/300?random=83"
        },
        {
          name: "Klengkeng Ping-Pong",
          description: "Lengkeng dengan ukuran buah besar seperti bola ping-pong dan rasa manis legit.",
          price: "$5.25",
          features: ["Buah besar", "Rasa manis", "Daging tebal", "Tahan hama"],
          image: "https://picsum.photos/400/300?random=84"
        },
        {
          name: "Klengkeng Puangray",
          description: "Varietas populer dari Thailand dengan rasa manis, ukuran buah besar, dan produktivitas tinggi.",
          price: "$5.75",
          features: ["Rasa manis", "Buah besar", "Produktif", "Tahan cuaca"],
          image: "https://picsum.photos/400/300?random=85"
        }
        
      ]
    },
    "mangga": {
      name: "Bibit Mangga",
      description: "Bibit mangga harum manis unggulan, cepat tumbuh dan berbuah lebat dengan aroma khas.",
      varieties: [
        {
          name: "Mangga Chokanan",
          description: "Varietas mangga asal Thailand yang dikenal berbuah sepanjang tahun dengan rasa manis seperti madu.",
          price: "$5.50",
          features: ["Berbuah sepanjang tahun", "Rasa manis madu", "Aroma kuat", "Daging lembut"],
          image: "https://picsum.photos/400/300?random=91"
        },
        {
          name: "Mangga Golek",
          description: "Mangga lokal Indonesia dengan bentuk lonjong dan rasa manis segar yang khas.",
          price: "$4.50",
          features: ["Rasa manis segar", "Produktif", "Aroma harum", "Tahan penyakit"],
          image: "https://picsum.photos/400/300?random=92"
        },
        {
          name: "Mangga Harum Manis",
          description: "Mangga populer di Indonesia dengan rasa sangat manis, daging tebal, dan aroma harum kuat.",
          price: "$5.25",
          features: ["Rasa manis pekat", "Aroma harum", "Daging tebal", "Kualitas premium"],
          image: "https://picsum.photos/400/300?random=93"
        },
        {
          name: "Mangga Irwin",
          description: "Mangga asal Australia dengan kulit berwarna merah keunguan dan rasa manis segar.",
          price: "$5.75",
          features: ["Warna menarik", "Rasa manis segar", "Cocok dataran rendah", "Nilai jual tinggi"],
          image: "https://picsum.photos/400/300?random=94"
        },
        {
          name: "Mangga Kiojay",
          description: "Mangga jumbo asal Thailand dengan ukuran besar dan rasa manis segar yang nikmat.",
          price: "$6.00",
          features: ["Ukuran jumbo", "Daging tebal", "Rasa manis segar", "Produktif"],
          image: "https://picsum.photos/400/300?random=95"
        },
        {
          name: "Mangga Madu",
          description: "Varietas dengan rasa sangat manis menyerupai madu dan tekstur daging lembut tanpa serat.",
          price: "$5.25",
          features: ["Rasa manis madu", "Tanpa serat", "Lembut", "Berbuah cepat"],
          image: "https://picsum.photos/400/300?random=96"
        },
        {
          name: "Mangga Mahatir",
          description: "Mangga unggulan asal Malaysia dengan ukuran besar, warna cerah, dan rasa manis khas tropis.",
          price: "$6.25",
          features: ["Buah besar", "Rasa manis tropis", "Warna cerah", "Tahan cuaca"],
          image: "https://picsum.photos/400/300?random=97"
        },
        {
          name: "Mangga Manalagi",
          description: "Mangga favorit Indonesia dengan rasa manis legit dan aroma kuat, cocok untuk konsumsi langsung.",
          price: "$4.75",
          features: ["Rasa legit", "Aroma kuat", "Tahan lama", "Cocok semua iklim"],
          image: "https://picsum.photos/400/300?random=98"
        },
        {
          name: "Mangga Miyazaki",
          description: "Mangga premium asal Jepang dengan rasa sangat manis, tekstur lembut, dan kualitas ekspor tinggi.",
          price: "$9.00",
          features: ["Kualitas ekspor", "Sangat manis", "Tekstur lembut", "Harga tinggi"],
          image: "/img/Mangga/Miyazaki.jpg"
        }        
      ]
    },
    "manggis": {
      name: "Bibit Manggis",
      description: "Bibit manggis premium yang cocok untuk dataran rendah maupun tinggi, berbuah manis dan segar.",
      varieties: [
        {
          name: "Manggis Variegata",
          description: "Varietas langka manggis dengan kulit dan daun bercorak unik. Rasanya manis segar dengan sedikit rasa asam khas manggis.",
          price: "$5.50",
          features: ["Rasa manis segar", "Varian langka", "Kulit unik", "Kaya antioksidan"],
          image: "https://picsum.photos/400/300?random=101"
        },
        {
          name: "Manggis Mini",
          description: "Buah manggis berukuran kecil dengan daging tebal dan biji kecil. Cocok untuk camilan sehat atau jus segar.",
          price: "$4.50",
          features: ["Ukuran kecil", "Daging tebal", "Biji kecil", "Manis alami"],
          image: "https://picsum.photos/400/300?random=102"
        },
        {
          name: "Manggis Giant",
          description: "Varietas manggis berukuran besar dengan kulit tebal dan rasa manis kuat. Sering dijadikan buah premium di pasar ekspor.",
          price: "$6.50",
          features: ["Ukuran besar", "Rasa manis pekat", "Cocok ekspor", "Bernutrisi tinggi"],
          image: "https://picsum.photos/400/300?random=103"
        }        
      ]
    },
    "miracle-fruit": {
      name: "Bibit Miracle Fruit",
      description: "Bibit miracle fruit unik yang membuat makanan asam terasa manis. Cocok ditanam dalam pot.",
      varieties: [
        {
          name: "Miracle Fruit",
          description: "Tanaman miracle fruit dengan warna hijau",
          price: "$4.00",
          features : ["Kompak", "Cocok indoor", "Low maintenance", "Cantik"],
          image : "/img/MiracleFruit/MiracleFruit.jpeg"
        }
      ]
    },
    "nanas": {
      name: "Bibit Nanas",
      description: "Bibit nanas madu yang manis segar dan mudah tumbuh di berbagai kondisi tanah.",
      varieties: [
        {
          name: "Nanas Medusa",
          description: "Varietas nanas eksotis dengan bentuk mahkota menyerupai rambut Medusa. Daging buahnya manis dengan aroma yang kuat dan menyegarkan.",
          price: "$4.00",
          features: ["Rasa manis segar", "Aroma kuat", "Tekstur juicy", "Tampilan unik"],
          image: "/img/Nanas/Medusa.jpg"
        }        
      ]
    },
    "nangka": {
      name: "Bibit Nangka",
      description: "Bibit nangka cepat berbuah, aroma harum dan daging buah tebal.",
      varieties: [
        {
          name: "Nangka Cempedak",
          description: "Varietas hasil persilangan antara nangka dan cempedak dengan aroma khas dan rasa legit. Teksturnya lembut dan lebih manis dari nangka biasa.",
          price: "$4.00",
          features: ["Rasa manis legit", "Aroma kuat", "Tekstur lembut", "Mudah dikupas"],
          image: "https://picsum.photos/400/300?random=101"
        },
        {
          name: "Nangka Merah",
          description: "Nangka dengan daging berwarna jingga kemerahan yang eksotis. Rasanya lebih manis dan lembut dibanding varietas biasa.",
          price: "$4.25",
          features: ["Warna menarik", "Rasa manis pekat", "Aroma harum", "Kaya vitamin A"],
          image: "https://picsum.photos/400/300?random=102"
        },
        {
          name: "Nangka Mini",
          description: "Varietas nangka berukuran kecil dengan buah yang cepat matang. Cocok untuk pekarangan rumah karena pohonnya tidak terlalu besar.",
          price: "$3.75",
          features: ["Ukuran kecil", "Cepat berbuah", "Cocok pekarangan", "Manis segar"],
          image: "https://picsum.photos/400/300?random=103"
        },
        {
          name: "Nangka Madu",
          description: "Nangka unggulan dengan daging buah bertekstur renyah dan rasa manis seperti madu. Sering jadi favorit untuk dimakan langsung.",
          price: "$4.50",
          features: ["Rasa super manis", "Tekstur renyah", "Aroma wangi", "Favorit pasar"],
          image: "/img/Nangka/Madu.jpg"
        }
        
      ]
    },
    "pepaya": {
      name: "Bibit Pepaya",
      description: "Bibit pepaya produktif, manis dan cocok untuk lahan sempit atau pekarangan rumah.",
      varieties: [
        {
          name: "Pepaya California",
          description: "Pepaya unggulan dengan ukuran sedang, daging tebal berwarna jingga cerah, dan rasa manis segar. Cocok untuk konsumsi harian maupun jualan buah potong.",
          price: "$4.00",
          features: ["Rasa manis segar", "Cepat berbuah", "Daging tebal", "Tahan simpan"],
          image: "https://picsum.photos/400/300?random=101"
        },
        {
          name: "Pepaya Thailand",
          description: "Varietas pepaya berukuran besar dengan daging lembut dan rasa manis legit. Umumnya digunakan untuk olahan jus dan makanan penutup.",
          price: "$4.25",
          features: ["Buah besar", "Manis legit", "Daging lembut", "Cocok untuk olahan"],
          image: "https://picsum.photos/400/300?random=102"
        }        
      ]
    },
    "sawo": {
      name: "Bibit Sawo",
      description: "Bibit sawo unggul, berbuah cepat dengan rasa manis legit dan tekstur lembut.",
      varieties: [
        {
          name: "Sawo Black Sapote",
          description: "Varietas sawo unik asal Meksiko dengan daging buah hitam lembut menyerupai puding cokelat. Rasanya manis lembut dan sering dijuluki 'chocolate pudding fruit'.",
          price: "$4.50",
          features: ["Daging hitam lembut", "Rasa manis khas", "Kaya vitamin C", "Unik dan eksotis"],
          image: "/img/Sawo/BlackSapote.jpg"
        },
        {
          name: "Sawo Mamey Sapote",
          description: "Sawo berukuran besar dengan daging berwarna oranye kemerahan dan rasa manis legit seperti ubi madu. Cocok untuk jus, es krim, dan dessert.",
          price: "$4.25",
          features: ["Buah besar", "Rasa manis legit", "Aromatis", "Kaya beta karoten"],
          image: "https://picsum.photos/400/300?random=102"
        },
        {
          name: "Sawo Jumbo",
          description: "Varietas lokal unggulan dengan buah besar, kulit halus, dan daging tebal berwarna cokelat muda. Cocok untuk konsumsi segar maupun dijual di pasar.",
          price: "$3.75",
          features: ["Ukuran jumbo", "Manis alami", "Produktif", "Daging tebal"],
          image: "/img/Sawo/Jumbo.jpg"
        }        
      ]
    }
  };
  
  // Helper function untuk mendapatkan product berdasarkan slug
  export function getProductBySlug(slug: string): Product | undefined {
    return products.find(product => product.slug === slug);
  }
  
  // Helper function untuk mendapatkan detail varieties berdasarkan slug
  export function getProductVarieties(slug: string): ProductDetail | undefined {
    return productVarieties[slug];
  }