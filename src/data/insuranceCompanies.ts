export interface Branch {
  city: string;
  address: string;
  phone: string[];
}

export interface InsuranceCompany {
  id: number;
  name: string;
  phones: string[];
  mainOffice: string;
  branches: Branch[];
  website: string;
}

export const insuranceCompanies: InsuranceCompany[] = [
  {
    id: 1,
    name: "ОАО «Государственная Страховая Организация»",
    phones: ["0(312) 65-08-53", "0(312) 65-08-51", "0(312) 65-08-52"],
    mainOffice: "г. Бишкек, ул. Киевская, 218 (пересекает ул. Калыка Акиева)",
    branches: [
      {
        city: "Ош",
        address: "ул. Ленина 221, каб.62,64",
        phone: ["0 (3222) 5-52-31"]
      },
      {
        city: "Каракол",
        address: "ул. Московская, 120 А",
        phone: ["0 (3922) 5-49-10"]
      },
      {
        city: "Талас",
        address: "ул. Бердике-Баатыра 287",
        phone: ["0 (3422) 5-20-60"]
      },
      {
        city: "Джалал-Абад",
        address: "ул. Эркиндик 11",
        phone: ["0 (3722) 2-41-01"]
      },
      {
        city: "Нарын",
        address: "ул. Ленина 76",
        phone: ["0 (3522) 5-71-01"]
      },
      {
        city: "Кадамжай",
        address: "ул. Орозбекова 1",
        phone: ["0 (3655) 5-15-58"]
      }
    ],
    website: "https://gos.kg"
  },
  {
    id: 2,
    name: "ЗАО СК «Алма Иншуренс»",
    phones: ["0(312) 43-33-33", "+996 509 372037"],
    mainOffice: "г. Бишкек, ул. Огонбаева, 222 (пересекает ул. Ибраимова)",
    branches: [],
    website: "https://alma.kg"
  },
  {
    id: 3,
    name: "ЗАО СК «АТН Полис»",
    phones: ["0(312) 34-37-30", "+996 552 255-999"],
    mainOffice: "г. Бишкек, ул. Токтогула, 230 (пересекает ул. Тимирязева)",
    branches: [
      {
        city: "Ош",
        address: "ул. Курманжан-Датка 244/3",
        phone: ["+996 (3222) 77-027", "+996 555 255-289"]
      }
    ],
    website: "https://atn.kg"
  },
  {
    id: 4,
    name: "ЗАО «НСК»",
    phones: ["+996 997 910 888", "+996 777 904 888", "+996 312 644 555"],
    mainOffice: "г. Бишкек, ул. Аалы Токомбаева 9г",
    branches: [
      {
        city: "Бишкек",
        address: "ул. Логвиненко 10",
        phone: ["+996 555 904 888"]
      },
      {
        city: "Бишкек",
        address: "ул. Ахунбаева 165",
        phone: ["+996 555 641 888"]
      },
      {
        city: "Бишкек",
        address: "ул. Ибраимова 108",
        phone: ["+996 995 888 180"]
      },
      {
        city: "Нарын",
        address: "ул. Сагынбай Орозбакова 46А",
        phone: ["+996 223 904 888"]
      },
      {
        city: "Джалал-Абад",
        address: "Пр. Тумонбай Байзаков 46",
        phone: ["+996 998 904 888"]
      },
      {
        city: "Ош",
        address: "ул. Ленина 159",
        phone: ["+996 555 838 222"]
      },
      {
        city: "Ош",
        address: "ул. Ленина 302/5",
        phone: ["+996 558 838 222"]
      },
      {
        city: "Ош",
        address: "ул. Касымбекова 27/1",
        phone: ["+996 550 838 222"]
      },
      {
        city: "Талас",
        address: "ул. Сарыгулова 59",
        phone: ["+996 503 031 393"]
      },
      {
        city: "Кадамжай",
        address: "ул. Орозбекова 48а",
        phone: ["+996 755 124 888"]
      },
      {
        city: "Каракол",
        address: "ул. Тыныстанова 16",
        phone: ["+996 771 888 123"]
      }
    ],
    website: "https://nsc.kg"
  },
  {
    id: 5,
    name: "ЗАО СК «Арсеналъ-Кыргызстан»",
    phones: ["0(312) 39-82-78", "0(312) 39 82 24", "+996 706 98 56 56", "+996 999 12 21 36"],
    mainOffice: "г. Бишкек, ул. Орозбекова, 26 (пересекает ул. Московская)",
    branches: [],
    website: "https://arsenal.kg"
  },
  {
    id: 6,
    name: "ЗАО СК «Аю Гарант»",
    phones: ["0(312) 66-17-84", "0 (312) 299 009", "+996 550 29 90 09", "+996 776 29 90 09"],
    mainOffice: "г. Бишкек, ул. Токтогула, 126 (между ул. Логвиненко и Панфилова)",
    branches: [
      {
        city: "Ош",
        address: "ул. Ленина 272/1",
        phone: ["+996 (772) 52 90 09"]
      },
      {
        city: "Талас",
        address: "ул. Сарыгулова 12",
        phone: ["+996 (706) 441 158", "+996 (550) 755 807"]
      },
      {
        city: "Нарын",
        address: "автовокзал",
        phone: ["+996 550 29 90 09"]
      }
    ],
    website: "https://aiugarant.kg"
  },
  {
    id: 7,
    name: "ЗАО «САКБОЛ»",
    phones: ["5858", "0(312) 68 08 22"],
    mainOffice: "г. Бишкек, ул. Токтогула 47",
    branches: [],
    website: "https://sakbol.kg"
  },
  {
    id: 8,
    name: "ЗАО «Jubilee Kyrgyzstan Insurance Company»",
    phones: ["0(312) 66-00-44", "0(312) 54-13-73"],
    mainOffice: "г. Бишкек, ул. Панфилова, 178 (между пр. Чуй и ул. Киевская)",
    branches: [
      {
        city: "Ош",
        address: "ул. Разакова 48/а",
        phone: ["+996 553 07-98-81"]
      },
      {
        city: "Бишкек",
        address: "бульвар Эркиндик 21",
        phone: ["+996 312 97-67-97", "+996 555 66-04-50"]
      }
    ],
    website: "https://jubilee.kg"
  },
  {
    id: 9,
    name: "ЗАО СК «Кыргызстан»",
    phones: ["0(312) 38-31-31"],
    mainOffice: "г. Бишкек, ул. Московская, 37 а (пересекает ул. Гоголя)",
    branches: [
      {
        city: "Нарын",
        address: "ул. Ленина 78, 3 этаж 304",
        phone: ["+ 996 707 71 99 62", "+996 3522 5 71 71"]
      },
      {
        city: "Ош",
        address: "ул. Ленина 289 а",
        phone: ["+996 550 04 43 93", "+996 03222 7 05 30", "+996 03222 7 03 63"]
      },
      {
        city: "Талас",
        address: "ул. Бердике-Баатыра 287",
        phone: ["+996 774 61 11 18", "+996 3422 5 64 44", "+996 554 61 11 18"]
      }
    ],
    website: "https://insurance.kg"
  },
  {
    id: 10,
    name: "ЗАО СК «А Плюс»",
    phones: ["0(312) 90-15-33", "+996 704 93 73 78", "+996 555 93 73 78"],
    mainOffice: "г. Бишкек, ул. Абдрахманова 176/1 (пересекает ул. Киевская)",
    branches: [],
    website: "https://aplus.kg"
  },
  {
    id: 11,
    name: "ЗАО СК «Али-Гарант»",
    phones: ["+996 558 90 05 22"],
    mainOffice: "г. Бишкек, ул. Жумабека 105/1",
    branches: [],
    website: "https://aligarant.kg"
  },
  {
    id: 12,
    name: "ЗАО СК «Здоровье»",
    phones: ["+996 770 70 11 71"],
    mainOffice: "г. Бишкек, ул. Тыныстанова 138",
    branches: [],
    website: "https://zdorovie.kg"
  },
  {
    id: 13,
    name: "ЗАО «Дордой-Страхование»",
    phones: ["+996 709 06 07 09"],
    mainOffice: "г. Бишкек, Кожевенная 1",
    branches: [],
    website: "https://dordoi-insurance.kg"
  },
  {
    id: 14,
    name: "ЗАО «Ингосстрах»",
    phones: ["+996 (312) 98 67 68"],
    mainOffice: "г. Бишкек, пр. Чуй 219",
    branches: [],
    website: "https://ingos.kg"
  },
  {
    id: 15,
    name: "ЗАО «Бакай Иншуренс»",
    phones: ["+996 555 301 530"],
    mainOffice: "г. Бишкек, ул. Турусбекова 109/1, 1-Этаж, 116-Офис",
    branches: [],
    website: "https://bakai-insurance.kg"
  }
];
