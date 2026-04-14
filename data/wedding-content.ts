import type { StaticImageData } from "next/image";
import { designTokens } from "@/data/design-tokens";
import maleLookBlack from "@/design/extracted/obj-023_720x1280.jpg";
import maleLookEmerald from "@/design/extracted/obj-027_1028x1280.jpg";
import maleLookChocolate from "@/design/extracted/obj-031_702x1200.jpg";
import maleLookBurgundy from "@/design/extracted/obj-019_720x1280.jpg";
import roseFrame from "@/design/extracted/obj-067_1200x1200.jpg";
import glitterTexture from "@/design/extracted/obj-143_1280x853.jpg";
import ribbon from "@/design/extracted/obj-135_830x1280.jpg";
import butterfly from "@/design/extracted/obj-139_712x1266.jpg";
import fingerprintHeart from "@/design/extracted/obj-127_853x1280.jpg";
import cocktail from "@/design/extracted/obj-119_736x736.jpg";
import lookLavender from "@/design/extracted/obj-071_914x1280.jpg";
import lookBlue from "@/design/extracted/obj-087_914x1280.jpg";
import lookBlack from "@/design/extracted/obj-095_853x1280.jpg";
import lookChocolate from "@/design/extracted/obj-099_852x1280.jpg";
import lookWine from "@/design/extracted/obj-103_914x1280.jpg";
import lookSilver from "@/design/extracted/obj-123_674x1201.jpg";
import lookOlive from "@/design/extracted/obj-075_675x1200.jpg";
import lookPowder from "@/design/extracted/obj-079_961x1280.jpg";

export type OutfitLook = {
  image: StaticImageData;
  label: string;
  tone: string;
};

export const weddingAssets = {
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
      time: "14:45",
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
      { image: lookLavender, label: "Пыльная лаванда", tone: "lavender" },
      { image: lookBlue, label: "Серо-голубой", tone: "steel-blue" },
      { image: lookPowder, label: "Пудра", tone: "powder" },
      { image: lookOlive, label: "Оливковый", tone: "olive" },
      { image: lookWine, label: "Бордовый", tone: "burgundy" },
      { image: lookSilver, label: "Серебро", tone: "blush" },
      { image: lookBlack, label: "Чёрный", tone: "black" },
      { image: lookChocolate, label: "Шоколад", tone: "chocolate" }
    ] as OutfitLook[],
    maleLooks: [
      { image: maleLookEmerald, label: "Изумрудный костюм", tone: "emerald" },
      { image: maleLookBlack, label: "Чёрный костюм", tone: "black" },
      { image: maleLookChocolate, label: "Шоколадный костюм", tone: "chocolate" },
      { image: maleLookBurgundy, label: "Бордовый образ", tone: "burgundy" }
    ] as OutfitLook[]
  },
  rsvp: {
    title: "АНКЕТА",
    lead: "Просим подтвердить свое присутствие",
    deadline: {
      prefix: "ДО",
      day: "1",
      month: "ИЮЛЯ",
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
