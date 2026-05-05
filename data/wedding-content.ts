import type { StaticImageData } from "next/image";
import { designTokens } from "@/data/design-tokens";
import roseFrame from "@/design/extracted/obj-067_1200x1200.jpg";
import glitterTexture from "@/design/extracted/obj-143_1280x853.jpg";
import heroPortrait from "@/design/extracted/hero-couple-crop.jpg";
import closingPhoto from "@/source/photo_5276421358579554336_y 2.png";
import ribbon from "@/design/cutouts/obj-135_830x1280-cutout.png";
import butterfly from "@/design/extracted/obj-139_712x1266.jpg";
import fingerprintHeart from "@/design/extracted/obj-127_853x1280.jpg";
import cocktail from "@/design/extracted/obj-119_736x736.jpg";
import femaleLookSilverGown from "@/source/photo_5276421358579554500_y 1.png";
import femaleLookBurgundyDress from "@/source/photo_5276421358579554501_y 2.png";
import femaleLookChocolateDress from "@/source/photo_5276421358579554502_y 2.png";
import femaleLookGraphiteDress from "@/source/photo_5278719209032586635_y 1.png";
import femaleLookNavyDress from "@/source/photo_5278719209032586642_y 1.png";
import femaleLookPowderDress from "@/source/photo_5278719209032586644_y 1.png";
import femaleLookWineTop from "@/source/photo_5278719209032586641_x 1.png";
import femaleLookEmeraldDress from "@/source/photo_5278719209032586636_y 1.png";
import femaleLookLavenderDress from "@/source/photo_5278719209032586638_y 1.png";
import femaleLookSteelDress from "@/source/photo_5278719209032586639_y 1.png";
import femaleLookOliveSuit from "@/source/photo_5292272429306681598_y 1.png";
import femaleLookEmeraldSuit from "@/source/photo_5292272429306681603_y 1.png";
import femaleLookBlackSuit from "@/source/photo_5292272429306681604_y 1.png";
import femaleLookWineSuit from "@/source/photo_5292272429306681602_y 1.png";
import maleLookBlackSuit from "@/source/photo_5276421358579554509_y 2.png";
import maleLookOliveSuit from "@/source/photo_5276421358579554510_y 2.png";
import maleLookChocolateSuit from "@/source/photo_5276421358579554511_y 2.png";
import maleLookNavySuit from "@/source/photo_5292272429306681606_y 1.png";
import maleLookClassicBlack from "@/source/photo_5292272429306681610_y 1.png";
import maleLookTuxedo from "@/source/photo_5292272429306681607_y 1.png";
import maleLookGraphiteSuit from "@/source/photo_5292272429306681608_y 1.png";
import maleLookGreenSuit from "@/source/photo_5292272429306681609_y 1.png";

export type OutfitLook = {
  image: StaticImageData;
  label: string;
  tone: string;
};

export const weddingAssets = {
  heroPortrait,
  closingPhoto,
  roseFrame,
  glitterTexture,
  ribbon,
  butterfly,
  fingerprintHeart,
  cocktail,
  figmaHeroUrl: "https://www.figma.com/api/mcp/asset/71b89e53-ef69-4092-9361-80e0766621c3",
  figmaClosingUrl: "https://www.figma.com/api/mcp/asset/f35cb610-abe3-4cc7-b729-c653e5e13413"
} as const;

export const weddingContent = {
  couple: {
    groom: "ДАНИЛ",
    bride: "ЭЛЕНА",
    initials: ["Д", "Э"]
  },
  event: {
    dateIso: "2026-08-13T15:00:00+03:00",
    dateLabel: "13.08.2026",
    dateFull: "13 августа 2026",
    venue: "Four Seasons Lion Palace",
    address: "Вознесенский, 1"
  },
  hero: {
    day: "13",
    month: "августа",
    year: "2026"
  },
  invitation: {
    title: "ДОРОГИЕ",
    scriptLine: "родные и близкие!",
    body: [
      "Мы хотим, чтобы в этот особенный и самый важный день, вы были рядом с нами и стали свидетелями рождения новой семьи.",
      "С радостью и трепетом приглашаем вас на нашу свадьбу!"
    ],
    meta: [
      { label: "дата свадьбы:", value: "13.08.2026" },
      { label: "место проведения:", value: "Вознесенский, 1\nОтель Four Seasons Lion Palace" }
    ]
  },
  timeline: [
    {
      time: "14:30",
      title: "сбор гостей у Петроградского ЗАГСа"
    },
    {
      time: "15:00",
      title: "Торжественная церемония"
    },
    {
      time: "16:00",
      title: "Трансфер до ресторана"
    },
    {
      time: "17:00",
      title: "Праздничный банкет"
    }
  ],
  dressCode: {
    title: "ДРЕСС-КОД",
    description:
      "Мы долго готовились, будет здорово, если своими нарядами вы поддержите палитру нашей свадьбы!",
    warning:
      "Милые дамы, просим вас не надевать белый и похожие оттенки, ведь, на свадьбе в белом только невеста!",
    looksTitle: "Примеры образов:",
    femaleTitle: "Женские",
    maleTitle: "Мужские",
    palette: [
      { key: "emerald", label: "Тёмный изумруд", hex: designTokens.colors.emerald },
      { key: "graphite", label: "Тёплый графит", hex: designTokens.colors.graphite },
      { key: "lavender", label: "Пыльная лаванда", hex: designTokens.colors.lavender },
      { key: "steel-blue", label: "Серо-голубой", hex: designTokens.colors.steelBlue },
      { key: "olive", label: "Глубокий оливковый", hex: designTokens.colors.olive },
      { key: "dusty-rose", label: "Пепельная роза", hex: designTokens.colors.dustyRose },
      { key: "powder", label: "Пудра", hex: designTokens.colors.powder },
      { key: "burgundy", label: "Бордовый", hex: designTokens.colors.burgundy },
      { key: "navy", label: "Тёмно-синий", hex: designTokens.colors.navy },
      { key: "chocolate", label: "Шоколад", hex: designTokens.colors.chocolate },
      { key: "black", label: "Чёрный", hex: designTokens.colors.black },
      { key: "blush", label: "Серебристо-розовый", hex: designTokens.colors.blush }
    ]
  },
  outfitGalleries: {
    title: "Примеры образов:",
    femaleLooks: [
      { image: femaleLookSilverGown, label: "Серебристое платье", tone: "blush" },
      { image: femaleLookBurgundyDress, label: "Бордовое платье", tone: "burgundy" },
      { image: femaleLookChocolateDress, label: "Шоколадное платье", tone: "chocolate" },
      { image: femaleLookGraphiteDress, label: "Графитовое платье", tone: "graphite" },
      { image: femaleLookNavyDress, label: "Тёмно-синее платье", tone: "navy" },
      { image: femaleLookPowderDress, label: "Пудровое платье", tone: "powder" },
      { image: femaleLookWineTop, label: "Винный топ", tone: "burgundy" },
      { image: femaleLookEmeraldDress, label: "Изумрудное платье", tone: "emerald" },
      { image: femaleLookLavenderDress, label: "Лавандовое платье", tone: "lavender" },
      { image: femaleLookSteelDress, label: "Серо-голубое платье", tone: "steel-blue" },
      { image: femaleLookOliveSuit, label: "Оливковый костюм", tone: "olive" },
      { image: femaleLookEmeraldSuit, label: "Изумрудный костюм", tone: "emerald" },
      { image: femaleLookBlackSuit, label: "Чёрный костюм", tone: "black" },
      { image: femaleLookWineSuit, label: "Винный костюм", tone: "burgundy" }
    ] as OutfitLook[],
    maleLooks: [
      { image: maleLookBlackSuit, label: "Чёрный костюм", tone: "black" },
      { image: maleLookOliveSuit, label: "Оливковый костюм", tone: "olive" },
      { image: maleLookChocolateSuit, label: "Шоколадный костюм", tone: "chocolate" },
      { image: maleLookNavySuit, label: "Тёмно-синий костюм", tone: "navy" },
      { image: maleLookClassicBlack, label: "Классический чёрный костюм", tone: "black" },
      { image: maleLookTuxedo, label: "Смокинг", tone: "black" },
      { image: maleLookGraphiteSuit, label: "Графитовый костюм", tone: "graphite" },
      { image: maleLookGreenSuit, label: "Зелёный костюм", tone: "olive" }
    ] as OutfitLook[]
  },
  rsvp: {
    title: "АНКЕТА",
    lead: "Просим подтвердить свое присутствие",
    deadline: {
      prefix: "ДО",
      day: "20",
      month: "ИЮНЯ",
      year: "2026"
    },
    nameLabel: "Ваши имя и фамилия:",
    attendanceLabel: "Планируете ли вы присутствовать?",
    alcoholLabel: "Алкогольные предпочтения:",
    mealLabel: "Предпочитаете рыбу или мясо?",
    allergyLabel: "Есть ли у вас аллергия на что-то?",
    transferLabel: "Требуется ли трансфер до ресторана?",
    buttonLabel: "Отправить",
    attendanceOptions: ["Да", "Нет"],
    alcoholPreferences: [
      "Шампанское",
      "Красное вино сладкое",
      "Красное вино сухое",
      "Белое вино сладкое",
      "Белое вино сухое",
      "Не буду пить"
    ],
    mealOptions: ["Рыба", "Мясо", "Без разницы"],
    transferOptions: ["Да", "Нет"]
  },
  details: {
    title: "ДЕТАЛИ",
    items: [
      "Мы очень ценим вашу заботу и внимание, поэтому в качестве подарка были бы рады получить деньги",
      "Мы просим вас не дарить цветы, но будем рады любой бутылке алкоголя для коллекции",
      "В самом зале просим вас отказаться от курения, для этого у нас будет отдельное место"
    ],
    extraLine: "Нам надо делать ремонт)))",
    closingLine: "Благодарим за понимание!"
  },
  countdown: {
    title: "ДО ВСТРЕЧИ!",
    description: ""
  }
} as const;
