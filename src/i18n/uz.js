import { img01, img04, img05, img06, img07, img08 } from "../data/assets";

export default {
  code: "uz",
  htmlLang: "uz",

  brand: {
    city: "TOSHKEHT",
    tagline: "Shokoladli qulupnay • maxsus taʻm",
    followers: "49,9 ming",
    posts: "419",
  },

  nav: {
    home: "Bosh sahifa",
    catalog: "Katalog",
    reviews: "Sharhlar",
    delivery: "Yetkazib berish",
    contacts: "Kontaktlar",
    order: "Buyurtma berish",
    call: "Qoʻngʻiroq qilish",
    telegram: "Telegram",
    homeAria: "CHOCOBERRY — bosh sahifaga",
    callAria: "CHOCOBERRY ga qoʻngʻiroq qilish",
    telegramAria: "CHOCOBERRY Telegram kanaliga oʻtish",
    openMenu: "Menyuni ochish",
    closeMenu: "Menyuni yopish",
    language: "Til",
    languageAria: "Tilni oʻzgartirish",
  },

  hero: {
    highlights: ["20 000+ sharh", "1,5 soatda yetkazib berish", "Yunusobod • Chilanzar"],
    title: "Shokoladli qulupnay",
    titleAccent: "maxsus taʻm bilan",
    subtitle:
      "Darhol tatib koʻrmoqchi boʻladigan sovgʻa. Yumshoq shokoladli yangi qulupnay, chiroyli qadoq va 1,5 soatda yetkazib berish.",
    orderNow: "Hozir buyurtma berish",
    viewCatalog: "Katalogni koʻrish",
    giftBadge: "Tayyor sovgʻa",
    ribbon: "Lenta + ochilish",
    reviewsBadge: "20 000+ sharh",
    mainAlt: "CHOCOBERRY shokoladli qulupnay",
    accentAlt: "Shokoladli qulupnay sovgʻ qadoqlanishi",
  },

  stats: [
    { id: "reviews", value: "20 000+", label: "Sharhlar", emoji: "🍓" },
    { id: "followers", value: "49,9K", label: "Obunachilar", emoji: "📸" },
    { id: "delivery", value: "1,5 soat", label: "Eng tez yetkazib berish", emoji: "🛵" },
    { id: "districts", value: "2", label: "Yetkazib berish hududi", emoji: "📍" },
  ],

  catalog: {
    eyebrow: "Katalog",
    title: "Bizning shirin sovgʻlarimiz",
    subtitle: "Kimni xursand qilishni xohlaganlar uchun shokoladli yangi qulupnay.",
    notFoundTitle: "Kerakli toʻplamni topolmadingizmi?",
    notFoundText: "Sabab va byudjetingizga mos individual buyurtma yigʻamiz.",
    discuss: "Buyurtmani muhokama qilish",
    orderAria: "Buyurtma berish",
    orderCta: "Buyurtma berish",
  },

  products: [
    {
      id: 1,
      title: "Sutli shokolad klassikasi",
      description: "Yumshoq sutli shokolad bilan qoplangan yangi qulupnay. Eng mashhur tanlov.",
      badge: "Hit",
      image: img01,
    },
    {
      id: 2,
      title: "Qorongʻi shokolad",
      description: "70% achlik shokoladi va pishgan mevalar — eslab qoladigan taʻm.",
      badge: null,
      image: img04,
    },
    {
      id: 3,
      title: "Mevalar aralashmasi",
      description: "Qulupnay, koʻkrizak va malina bir qutida — har bir mevada bayram.",
      badge: "Yangilik",
      image: img05,
    },
    {
      id: 4,
      title: "Sovgʻa toʻplami",
      description: "Lenta va ochilish bilan katta quti. Qoʻshimcha xarajatlarsiz tayyor sovgʻa.",
      badge: null,
      image: img06,
    },
    {
      id: 5,
      title: "Gulli kompozitsiya",
      description: "Mevalar, shokolad va kichik gul toʻplami chiroyli qadoqda. Maxsus holatlar uchun.",
      badge: "Premium",
      image: img07,
    },
    {
      id: 6,
      title: "Ikki xil meva",
      description: "Ikki xil taʻmni bir vaqtda sinab koʻrish uchun 12 ta mevalik ikki qadoq.",
      badge: null,
      image: img08,
    },
  ],

  benefits: {
    eyebrow: "Nega biz",
    title: "Nega CHOCOBERRY tanlanadi",
    subtitle: "Bizga qaytib kelishning toʻrtta oddiy sababi.",
    items: [
      {
        id: "strawberry",
        emoji: "🍓",
        title: "Yangi qulupnay",
        text: "Har kuni suvli, yirik va pishgan, taʻmi yorugʻ mevalarni tanlaymiz.",
      },
      {
        id: "chocolate",
        emoji: "🍫",
        title: "Haqiqiy shokolad",
        text: "Tabiiy shokoladdan yumshoq qatlam — u maydalab ketmaydi va erimaydi.",
      },
      {
        id: "gift",
        emoji: "🎀",
        title: "Chiroyli bezak",
        text: "Har bir buyurtma — tayyor sovgʻa: ip lenta, quti va ochilish.",
      },
      {
        id: "delivery",
        emoji: "🚚",
        title: "Tez yetkazib berish",
        text: "Qadoqlashni saqlab, Yunusobod va Chilanzordan 1,5 soatdan boshlab yetkazamiz.",
      },
    ],
    statValue: "49,9K",
    statLabel: "Instagram obunachilari",
    alt: "Shokoladli mevalar — yangi qulupnay CHOCOBERRY",
  },

  reviews: {
    eyebrow: "Sharhlar",
    title: "20 000+ sharh",
    subtitle: "Bizni doʻstlariga tavsiya qilishadi — va ular yana shirinlik uchun qaytadi.",
    rating: "Reyting 5.0",
    posts: "419 post",
    swipeHint: "Koʻproq sharhlarni koʻrish uchun suring →",
    items: [
      {
        id: 1,
        name: "Xaridor sharhi",
        source: "Yandex Xaritalar",
        rating: 5,
        text: "Tugʻilgan kunga buyurtma berdik — quti bir necha daqiqada tugadi. Qulupnay yangi, shokolad yetkazilganda erimagan.",
      },
      {
        id: 2,
        name: "Xaridor sharhi",
        source: "2GIS",
        rating: 5,
        text: "Chilanzarda bir soatda yetkazdilar, qadoqlash chiroyli va ozoda. Detallarga masʼuliyat bilan yondashish koʻrinadi.",
      },
      {
        id: 3,
        name: "Xaridor sharhi",
        source: "Instagram",
        rating: 5,
        text: "Sovgʻa qadoqlash — alohida sevim. Qutidan ham, taʼmidan ham xotinam juda xursand boʻldi.",
      },
      {
        id: 4,
        name: "Xaridor sharhi",
        source: "Yandex Xaritalar",
        rating: 5,
        text: "Ikki marta oldik: tugʻilgan kuni va 8 martga. Taʼm doimiy, mevalar har doim yangi boʻldi.",
      },
      {
        id: 5,
        name: "Xaridor sharhi",
        source: "Google",
        rating: 5,
        text: "Toʻy uchun mehmonlar uchun sovgʻa sifatida buyurtma berdik. Bitta ham buzilgan meva yoʻq edi, hammasi ozoda terilgan.",
      },
      {
        id: 6,
        name: "Xaridor sharhi",
        source: "Telegram",
        rating: 5,
        text: "Qisqasi: mazali, chiroyli, tez. Keyingi bayr buyurtmasini kutamiz.",
      },
    ],
  },

  instagram: {
    eyebrow: "Instagram",
    title: "Instagramda koʻproq shirin daqiqalar",
    postsLabel: "post",
    followersLabel: "obunachi",
    freshLabel: "har kuni yangi qutilar",
    open: "Instagrumni ochish",
    tileAria: "Instagramdagi CHOCOBERRY postlari",
  },

  delivery: {
    eyebrow: "Yetkazib berish",
    title: "Yetkazib berish 1,5 soatdan",
    subtitle: "Har kuni ishlaymiz va shokoladli qulupnayni siz kutayotgan joyga yetkazamiz.",
    districts: ["Yunusobod", "Chilanzar"],
    points: [
      { id: "yunusabad", title: "Yunusobod", text: "Butun boʻylab yetkazib beramiz" },
      { id: "chilanzar", title: "Chilanzar", text: "Tez va ozoda qadoqlaymiz" },
      {
        id: "speed",
        title: "Tez yetkazib berish · 1,5 soatdan",
        text: "Shokolad erimagandan oldin yangi yetkazamiz",
      },
      {
        id: "gift",
        title: "Chiroyli bezak",
        text: "Har bir buyurtmada quti, lenta va ochilish",
      },
    ],
    ordersTitle: "Buyurtmalar har kuni qabul qilinadi",
    ordersText: "Qadoqlash va ochilishni sovgʻa qilib qoʻshamiz",
    askTime: "Vaqtni aniqlash",
    cardTitle: "Yangisini toʻgʻri eshikka yetkazamiz",
    cardNote: "20 000+ sharh · yetkazib berish 1,5 soatdan",
    alt: "Yetkazib berish uchun shokoladli qulupnay sovgʻ qadoqlanishi",
  },

  cta: {
    title: "Bugun yaqinlaringizni xursand qiling",
    text: "Shokoladli qulupnay buyurtma qilib, his-tuygʻ sovgʻa qiling. 1,5 soatdan keyin Yunusobod va Chilanzarga yetkazamiz.",
    order: "Buyurtma berish",
    call: "Qoʻngʻiroq qilish",
    telegram: "Telegram kanal",
  },

  contact: {
    eyebrow: "Kontaktlar",
    title: "Biz bilan bogʻlaning",
    subtitle: "Qoʻngʻiroq qiling, Telegram yoki Instagramda yozing — toʻplam tanlashda yordam beramiz va vaqtida yetkazamiz.",
    header: "CHOCOBERRY | TOSHKEHT",
    phoneLabel: "Telefon",
    districtsLabel: "Hududlar",
    deliveryLabel: "Yetkazib berish",
    deliveryValue: "1,5 soatdan",
    instagramBtn: "Instagramda yozish",
    telegramBtn: "Telegramda yozish",
    channelLabel: "Telegram kanal",
    adminLabel: "Admin",
  },

  locations: {
    eyebrow: "Filialar",
    title: "Filiallarimiz",
    subtitle: "Bizga eng yaqin filialni tanlang",
    branchLabel: "Filial",
    phoneLabel: "Telefon",
    hoursLabel: "Ish vaqti",
    mapsBtn: "Google Maps",
    callBtn: "Qoʻngʻiroq qilish",
  },

  footer: {
    madeIn: "🍓 bilan Toshkentda yasalgan",
    channel: "Telegram kanal",
    admin: "Admin",
  },

  common: {
    scrollTop: "Yuqoriga",
  },
};