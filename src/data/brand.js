import { logoImg, img01, img04, img05, img06, img07, img08 } from "./assets";

export const BRAND = {
  name: "CHOCOBERRY_N1",
  logo: logoImg,
  instagram: "https://www.instagram.com/chocoberry_n1/",
  instagramHandle: "@chocoberry_n1",
  telegram: "https://t.me/chocoberry_n1",
  telegramHandle: "@chocoberry_n1",
  telegramAdmin: "https://t.me/by_rena",
  telegramAdminHandle: "@by_rena",
};

export const CONTACTS = [
  { id: "main", label: "+998 55 588 88 18", href: "tel:+998555888818" },
  { id: "second", label: "+998 95 811 28 28", href: "tel:+998958112828" },
];

export const PRIMARY_PHONE = CONTACTS[0].href;

export const LOCATIONS = [
  {
    id: "chilonzor",
    name: "Chilonzor",
    phone: "95 836 28 28",
    phoneHref: "tel:+998958362828",
    hours: "11:00–24:00",
    maps:
      "https://www.google.com/maps/place/41%C2%B016'29.0%22N+69%C2%B011'13.5%22E/@41.27471,69.187094,16z/data=!4m4!3m3!8m2!3d41.27471!4d69.187094?entry=ttu&g_ep=EgoyMDI2MDkyOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: "yunusobod",
    name: "Yunusobod",
    phone: "95 811 28 28",
    phoneHref: "tel:+998958112828",
    hours: "11:00–01:00",
    maps: "https://www.google.com/maps?q=41.354301,69.335297&ll=41.354301,69.335297&z=16",
  },
];

export const GALLERY = [img01, img04, img05, img06, img07, img08];