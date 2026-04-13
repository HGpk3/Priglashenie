import type { StaticImageData } from "next/image";
import { designTokens } from "@/data/design-tokens";
import heroPhoto from "@/design/extracted/obj-163_2332x3498.jpg";
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
  heroPhoto,
  roseFrame,
  glitterTexture,
  ribbon,
  butterfly,
  fingerprintHeart,
  cocktail
} as const;

export const weddingContent = {
  couple: {
    names: "Имя и Имя",
    monogram: "ИИ"
  },
  event: {
    dateIso: "2026-08-13T15:00:00+03:00",
    dateLabel: "13.08.2026",
    dateFull: "13 августа 2026",
    venue: "Four Seasons Lion Palace",
    address: "Адрес и финальная запись площадки будут подставлены после подтверждения."
  },
  hero: {
    eyebrow: "Wedding day",
    tagline: "Лето 2026. Санкт-Петербург.",
    lead:
      "Dark romantic editorial invitation с крупной фотографией, драматичной типографикой и мягкими декоративными акцентами вместо шаблонной свадебной эстетики.",
    note: "Мы будем счастливы разделить этот день вместе с вами."
  },
  invitation: {
    title: "Приглашаем вас стать частью самого важного дня в нашей жизни.",
    body: [
      "Мы мечтаем о тёплом, красивом и очень личном празднике, наполненном светом, музыкой, смехом и любимыми людьми рядом.",
      "Будем счастливы, если именно вы разделите с нами этот день, его волнение, нежность и радость."
    ],
    asideTitle: "О событии",
    asideText:
      "Вся страница уже строится mobile-first и держится на семантических блоках: invitation, timeline, dress code, galleries, RSVP, details и countdown."
  },
  timeline: [
    {
      time: "14:45",
      title: "Сбор гостей",
      description: "Предварительно это сбор гостей у Петроградского ЗАГСа. Точную формулировку можно ещё перепроверить по финальному макету."
    },
    {
      time: "15:00",
      title: "Торжественная церемония",
      description: "Ключевой момент дня, который должен считываться с первого взгляда даже на мобильном экране."
    },
    {
      time: "16:00",
      title: "Трансфер",
      description: "После церемонии предусмотрен трансфер до места празднования для тех гостей, кому это будет удобно."
    },
    {
      time: "17:00",
      title: "Праздничный вечер",
      description: "Ужин, тосты, музыка и всё, ради чего мы собираем этот день в одну красивую историю."
    }
  ],
  dressCode: {
    title: "Dress code",
    description:
      "Будем благодарны, если в своих образах вы поддержите палитру вечера. Важнее не буквальное совпадение оттенка, а общее настроение: глубокие, мягкие и элегантные тона.",
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
    title: "Outfit galleries",
    description:
      "Референсы из макета собраны как отдельная секция, чтобы dress code ощущался частью общей арт-дирекции, а не просто технической памяткой.",
    looks: [
      { image: lookLavender, label: "Пыльная лаванда", tone: "lavender" },
      { image: lookBlue, label: "Серо-голубой", tone: "steel-blue" },
      { image: lookBlack, label: "Чёрный", tone: "black" },
      { image: lookChocolate, label: "Шоколад", tone: "chocolate" },
      { image: lookWine, label: "Бордовый", tone: "burgundy" },
      { image: lookSilver, label: "Серебро", tone: "blush" },
      { image: lookOlive, label: "Глубокий оливковый", tone: "olive" },
      { image: lookPowder, label: "Пудра", tone: "powder" }
    ] as OutfitLook[]
  },
  rsvp: {
    title: "RSVP",
    description:
      "Пожалуйста, подтвердите ваше присутствие и заполните короткую анкету. Это поможет нам позаботиться о каждом госте и сделать вечер комфортным для всех.",
    deadline: "Будем благодарны за ответ заранее. Точную дату дедлайна можно добавить после согласования.",
    buttonLabel: "Отправить ответ",
    questions: [
      "Ваши имя и фамилия",
      "Планируете ли вы присутствовать?",
      "Какой напиток вам ближе?",
      "Что предпочитаете: рыбу, мясо или любой вариант?",
      "Есть ли аллергии?",
      "Нужен ли вам трансфер?"
    ],
    attendanceOptions: ["Да", "Нет"],
    alcoholPreferences: ["Игристое", "Белое вино", "Красное вино", "Коктейли", "Без алкоголя"],
    mealOptions: ["Рыба", "Мясо", "Любой вариант"],
    transferOptions: ["Да", "Нет"]
  },
  details: {
    title: "Details",
    items: [
      {
        title: "Подарки",
        text: "Если вы захотите порадовать нас подарком, нам будет особенно приятно получить вклад в наши будущие совместные мечты."
      },
      {
        title: "Цветы",
        text: "Мы будем благодарны, если вместо цветов вы выберете что-то, что сохранит воспоминание об этом дне дольше."
      },
      {
        title: "Контакты",
        text: "Если у вас появятся вопросы по локации, дресс-коду или логистике, можно будет связаться с нами или с человеком, который будет помогать гостям."
      }
    ],
    contactCardTitle: "На связи",
    contactCardText:
      "Сейчас здесь оставлено место под реальные контакты пары или координатора. Блок уже встроен в композицию и не требует отдельной переработки."
  },
  countdown: {
    title: "Countdown",
    description:
      "До дня свадьбы осталось совсем немного. Счётчик ниже обновляется в реальном времени и завершает страницу мягким, эмоциональным финалом."
  }
} as const;
