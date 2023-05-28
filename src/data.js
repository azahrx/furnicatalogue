// import icons
import {
  IoLogoYoutube,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoMdAddCircle,
  IoIosCheckmarkCircle,
  IoIosArrowRoundForward,
} from 'react-icons/io';

// import images
import Features1Img from './assets/img/features-1.png';
import Features2Img from './assets/img/features-2.png';
import ChairImg from './assets/img/chair.png';
import BedImg from './assets/img/bed.png';
import CupboardImg from './assets/img/cupboard.png';
import LightingImg from './assets/img/lighting.png';
import Product1Img from './assets/img/products/product-1.png';
import Product2Img from './assets/img/products/product-2.png';
import Product3Img from './assets/img/products/product-3.png';
import Product4Img from './assets/img/products/product-4.png';
import Product5Img from './assets/img/products/product-5.png';
import Product6Img from './assets/img/products/product-6.png';
import Product7Img from './assets/img/products/product-7.png';
import Product8Img from './assets/img/products/product-8.png';
import Product9Img from './assets/img/products/product-9.png';
import Product10Img from './assets/img/products/product-10.png';
import TestimonialImg from './assets/img/testimonial.png';
import Avatar1Img from './assets/img/avatar-1.png';
import Avatar2Img from './assets/img/avatar-2.png';
import Avatar3Img from './assets/img/avatar-3.png';
// import Avatar4Img from './assets/img/avatar-4.png';

export const navigation = [
  {
    name: 'beranda',
    href: '#',
  },
  {
    name: 'tentang',
    href: 'tentang',
  },
  {
    name: 'fitur',
    href: 'fitur',
  },
  {
    name: 'kontak',
    href: '#section9',
  },
];

export const hero = {
  title: 'Rumah Kreatif dengan Furniture Sederhana',
  subtitle:
    'Zahra Furniture memberi Anda layanan terbaik untuk desain furnitur, pembuatan, distribusi, dan penjualan benda-benda fungsional dan dekoratif peralatan rumah tangga.',
  buttonText: 'Belanja Sekarang',
};

export const stats = [
  {
    value: '28',
    text: 'Tahun Pengalaman',
  },
  {
    value: '1',
    text: 'Dibuka di Indonesia',
  },
  {
    value: '10k+',
    text: 'Furniture terjual',
  },
  {
    value: '260+',
    text: 'Variasi Furniture',
  },
];

export const features = {
  image: <Features1Img />,
  title: 'Kami membuat rumah Anda lebih estetis',
  subtitle:
    'Kekuatan Furniture adalah perangkat sebagai layanan untuk sistem manajemen bisnis multiguna',
  buttonText: 'Tunjukkan sekarang',
  items: [
    {
      icon: <IoIosCheckmarkCircle />,
      title: 'Pelayanan Berharga',
      subtitle:
        'Kami menghargai dan memberikan layanan terbaik kepada semua pelanggan',
    },
    {
      icon: <IoIosCheckmarkCircle />,
      title: 'Pengembangan Model Furniture',
      subtitle:
        'Penyediaan model yang diinginkan akan dikembangkan sesuai dengan kemauan pelanggan',
    },
  ],
  feature2: {
    image: <Features2Img />,
    title: 'Produsen Furniture Terbaik Pilihan Anda',
    subtitle:
      'Dengan pengalaman bertahun-tahun yang berlanjut dan dikenal sebagai produsen terbaik di area lokal',
  },
};

export const newInStore = {
  title: 'Baru Di Toko Sekarang',
  subtitle: 'Dapatkan segera barang terbaru dengan harga promo',
  link: 'Periksa semua',
  icon: <IoIosArrowRoundForward />,
  products: [
    {
      name: 'chair',
      image: <ChairImg />,
    },
    {
      name: 'bed',
      image: <BedImg />,
    },
    {
      name: 'cupboard',
      image: <CupboardImg />,
    },
    {
      name: 'lighting',
      image: <LightingImg />,
    },
  ],
};

export const products = {
  title: 'Semua Produk',
  subtitle:
    'Produk yang kami sediakan hanya untuk Anda, layanan kami dipilih dari produk terbaik dengan kualitas nomor 1 di dunia',
  pages: [
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: 'Ceiling Light',
          price: '750.000',
          oldPrice: '820.000',
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: 'Wood Chair',
          price: '500.000',
          oldPrice: '700.000',
        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: 'Paper Cupboard',
          price: '350.000',
          oldPrice: '400.000',
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: 'Ole Gundorse Spring',
          price: '750.000',
          oldPrice: '800.000',
        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: 'Treos Seroes 911',
          price: '180.000',
          oldPrice: '210.000',
        },
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: 'Multi bilderman slibber',
          price: '450.000',
          oldPrice: '500.000',
        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: 'XORA corner desk',
          price: '320.000',
          oldPrice: '360.000',
        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: 'Black Forest Series Wood',
          price: '225.000',
          oldPrice: '270.000',
        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: 'Paper Cupboard',
          price: '105.000',
          oldPrice: '130.000',
        },
        {
          image: <Product10Img />,
          icon: <IoMdAddCircle />,
          name: 'Ole Gundorse Spring',
          price: '80.000',
          oldPrice: '110.000',
        },
      ],
    },
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: 'Ceiling Light',
          price: '750.000',
          oldPrice: '820.000',
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: 'Wood Chair',
          price: '500.000',
          oldPrice: '700.000',
        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: 'Paper Cupboard',
          price: '350.000',
          oldPrice: '400.000',
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: 'Ole Gundorse Spring',
          price: '750.000',
          oldPrice: '800.000',
        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: 'Treos Seroes 911',
          price: '180.000',
          oldPrice: '210.000',
        },
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: 'Multi bilderman slibber',
          price: '450.000',
          oldPrice: '500.000',
        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: 'XORA corner desk',
          price: '320.000',
          oldPrice: '360.000',
        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: 'Black Forest Series Wood',
          price: '225.000',
          oldPrice: '270.000',
        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: 'Paper Cupboard',
          price: '105.000',
          oldPrice: '130.000',
        },
        {
          image: <Product10Img />,
          icon: <IoMdAddCircle />,
          name: 'Ole Gundorse Spring',
          price: '80.000',
          oldPrice: '110.000',
        },
      ],
    },
  ],
};

export const testimonial = {
  title: 'Apa kata orang tentang kita',
  image: <TestimonialImg />,
  persons: [
    {
      avatar: <Avatar1Img />,
      name: 'Josh Smith',
      occupation: 'Manager dari Bank BRI',
      message:
        '“Mereka memiliki sentuhan yang sempurna untuk membuat sesuatu yang profesional dan menarik bagi banyak orang.”',
    },
    {
      avatar: <Avatar2Img />,
      name: 'Brandi Johns',
      occupation: 'Sales Supervisor dari PT. Sukajaya',
      message:
        '“Mereka memiliki sentuhan yang sempurna untuk membuat sesuatu yang profesional dan menarik bagi banyak orang.”',
    },
    {
      avatar: <Avatar3Img />,
      name: 'Paula Pfeffer',
      occupation: 'Dokter dari RSI. Duren Sawit',
      message:
        '“Mereka memiliki sentuhan yang sempurna untuk membuat sesuatu yang profesional dan menarik bagi banyak orang.”',
    },
  ],
};

export const newsletter = {
  title: 'Dapatkan lebih banyak diskon dari pesanan Anda!',
  subtitle: 'Bergabunglah dengan mailing list kami',
  placeholder: 'Masukkan email',
  buttonText: 'Belanja Sekarang',
};

export const footer = {
  social: [
    {
      icon: <IoLogoYoutube />,
      href: '#',
    },
    {
      icon: <IoLogoInstagram />,
      href: '#',
    },
    {
      icon: <IoLogoGithub />,
      href: '#',
    },
    {
      icon: <IoLogoFacebook />,
      href: '#',
    },
  ],
  copyright: 'Zahra Furniture 2023 - All Rights Reserved.',
};
