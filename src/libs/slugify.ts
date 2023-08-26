type TranslitMap = {
 [key: string]: string;
};

export function slugify(text: string): string {
 if (!text) return "";
 const translit: TranslitMap = {
  А: "A",
  Б: "B",
  В: "V",
  Г: "G",
  Д: "D",
  Е: "E",
  Ё: "E",
  Ж: "Zh",
  З: "Z",
  И: "I",
  Й: "Y",
  К: "K",
  Л: "L",
  М: "M",
  Н: "N",
  О: "O",
  П: "P",
  Р: "R",
  С: "S",
  Т: "T",
  У: "U",
  Ф: "F",
  Х: "H",
  Ц: "Ts",
  Ч: "Ch",
  Ш: "Sh",
  Щ: "Sch",
  Ь: "",
  Ы: "Y",
  Ъ: "",
  Э: "E",
  Ю: "Yu",
  Я: "Ya",
  а: "a",
  б: "b",
  в: "v",
  г: "g",
  д: "d",
  е: "e",
  ё: "e",
  ж: "zh",
  з: "z",
  и: "i",
  й: "y",
  к: "k",
  л: "l",
  м: "m",
  н: "n",
  о: "o",
  п: "p",
  р: "r",
  с: "s",
  т: "t",
  у: "u",
  ф: "f",
  х: "h",
  ц: "ts",
  ч: "ch",
  ш: "sh",
  щ: "sch",
  ь: "",
  ы: "y",
  ъ: "",
  э: "e",
  ю: "yu",
  я: "ya",
 };

 return text
  .split("")
  .map((char) => translit[char] || char)
  .join("")
  .toString()
  .toLowerCase()
  .replace(/\s+/g, "-")
  .replace(/[^\w-]+/g, "")
  .replace(/--+/g, "-")
  .replace(/^-+/, "")
  .replace(/-+$/, "");
}

type ReverseTranslitMap = {
 [key: string]: string;
};

export function deslugify(slug: string): string {
 const reverseTranslitMap: ReverseTranslitMap = {
  "12-shagov": "12 шагов",
  "12-traditsiy": "12 традиций",
  printsipy: "Принципы",
  razrabotka: "Разработка ",
  izuchenie: "Изучение",
  analiz: "Анализ",
  obzor: "Обзор",
  // ivan: "Иван",
  // "kak-poyti-v-zhopu": "как пойти в жопу",
  // Добавьте другие пары транслитерированных строк и русских слов здесь
 };

 return reverseTranslitMap[slug] || slug;
}
