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

export const GALLERY = [img01, img04, img05, img06, img07, img08];