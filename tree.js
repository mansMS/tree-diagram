const tree = {
  name: 'ЖанахIажи',
  gender: 'male',
  info: {
    text: `Тухум Билиттайпа - росу гIуцIарал лъабго тухумалъул цояб.
    1. Билиттайпа (чачаназдасан, Нажавюрталда аскIоб бугеб Билит росу) - къурайшиял - гIарабаль ?дельфин?.
    2. Будунисел (сагратлинцаздасан, Гунибский районалъул Согратль росу). Гьездасан: ГIиздин, Ушил МухIаммад, МуртазгIалил Дада (1920-х гIел).
    3. КIежинисел (Ботлихский район). Гьездаса: Эсенбулат, гьесул лъимал Сурхай (гьесул: ГIумар, Бику, Забият - 1940-1950c гIел), ГIабдулмуслим, Расул, Гьанзанхан.`,
  },
  childs: [{
    name: 'ГIали',
    gender: 'male',
    childs: [
      {
        name: 'Даци',
        gender: 'male',
        info: {
          text: 'Шагьидлъана гIолохъанго 1832 соналъ тIоцевесев имам ГъазимухIаммадгун цадахъ генусезул кIкIалахъ.',
        },
      },
      {
        name: 'Султанбег',
        gender: 'male',
        info: {
          text: 'Шагьидлъана 1839 соналъ имам Шамильгун АхIулгохI толаго, имамасда речIчIараб гулида цевеги кIанцIун.',
          photos: [
            { src: 'https://rg.ru/uploads/images/2023/08/30/2p_new_sboku_enot_1000_9fd.jpg', label: 'Enchik' },
            { src: 'https://rg.ru/uploads/images/2023/08/30/2p_new_sboku_enot_1000_9fd.jpg', label: 'Enchik' },
          ],
        },
        childs: [
          {
            name: 'МуртазгIалихIажи',
            gender: 'male',
            marriage: 'm1',
            childs: [
              {
                name: 'Шайихислам',
                gender: 'male',
                childs: [
                  {
                    name: 'Салтанат',
                    gender: 'female',
                  },
                  {
                    name: 'Жагьбат',
                    gender: 'female',
                  },
                  {
                    name: 'Умакусум',
                    gender: 'female',
                  },
                  {
                    name: 'Загьрат',
                    gender: 'female',
                  },
                ],
              },
              {
                name: 'ИладихIажи',
                gender: 'male',
                childs: [
                  {
                    name: 'Агъилав',
                    gender: 'male',
                  },
                  {
                    name: 'Наа',
                    gender: 'female',
                  },
                  {
                    name: 'Усамат',
                    gender: 'male',
                  },
                ],
              },
              {
                name: 'Жамалдин',
                gender: 'male',
                childs: [
                  {
                    name: 'ХIажи',
                    gender: 'male',
                  },
                  {
                    name: 'Зайнаб',
                    gender: 'female',
                  },
                  {
                    name: 'РайхIанат',
                    gender: 'female',
                  },
                  {
                    name: 'МухIаммад',
                    gender: 'male',
                  },
                ],
              },
              {
                name: 'Султанбег',
                gender: 'male',
                childs: [
                  {
                    name: 'ПатIимат',
                    gender: 'female',
                  },
                  {
                    name: 'Гьимат',
                    gender: 'male',
                  },
                  {
                    name: 'Сурхай',
                    gender: 'male',
                  },
                  {
                    name: 'Хадижат',
                    gender: 'female',
                  },
                  {
                    name: 'ГIубайдат',
                    gender: 'female',
                  },
                  {
                    name: 'Баху',
                    gender: 'female',
                  },
                ],
              },
              {
                name: 'Гебек',
                gender: 'male',
                childs: [
                  {
                    name: 'МухIаммад',
                    gender: 'male',
                  },
                  {
                    name: 'Написат',
                    gender: 'female',
                  },
                ],
              },
            ],
          },
          {
            name: 'Хъистаман',
            gender: 'female',
            childs: [
              {
                name: 'Дадибика',
                gender: 'female',
                childs: [
                  {
                    name: 'ПатIимат',
                    gender: 'female',
                  },
                ],
              }
            ],
          },
        ],
      },
      {
        name: 'ХIажибег',
        gender: 'male',
        info: {
          text: 'Шагьидлъана 1845 соналъ Шамилил бищун кIудияб рагъулъ (тIехь Шамиль, стр 105, автор Павленко, 1942с.)',
        },
        childs: [
          {
            name: '???',
          },
          {
            name: '???',
            info: {
              text: 'Неизвестно название и пол.',
            },
            childs: [
              {
                name: 'Сада',
                gender: 'female',
              },
              {
                name: 'ХIабсат',
                gender: 'female',
                childs: [
                  {
                    name: 'МухIаммад',
                    gender: 'male',
                  },
                ],
              },
              {
                name: 'ХIаписат',
                gender: 'female',
                childs: [
                  {
                    name: 'Ханзай',
                    gender: 'female',
                  },
                  {
                    name: 'ХIабибхIажи',
                    gender: 'male',
                  },
                ],
              },
              {
                name: 'Ажи',
                gender: 'female',
                childs: [
                  {
                    name: 'МухIаммадхIабиб',
                    gender: 'male',
                  },
                  {
                    name: 'МухIаммадсагIид',
                    gender: 'male',
                  },
                  {
                    name: 'МухIаммадшапигI',
                    gender: 'male',
                  },
                  {
                    name: 'Багьажат',
                    gender: 'female',
                  },
                ],
              },
            ],
          },
          {
            name: 'СайихIат',
            gender: 'female',
            childs: [
              {
                name: 'ГIабдулгIазиз',
                gender: 'male',
                childs: [
                  {
                    name: 'ГIабдулатIип',
                    gender: 'male',
                  },
                ],
              },
            ],
          },
          {
            name: 'Гебек',
            gender: 'male',
            childs: [
              {
                name: 'Халват',
                gender: 'female',
                childs: [
                  {
                    name: 'ГIаишат',
                    gender: 'female',
                  },
                ],
              },
            ],
          },
          {
            name: '???',
            childs: [
              {
                name: 'ГIалихан',
                gender: 'male',
                childs: [
                  {
                    name: 'ГIумахан',
                    gender: 'male',
                  },
                  {
                    name: 'Загьират',
                    gender: 'female',
                  },
                ],
              },
              {
                name: 'ХIадис',
                gender: 'male',
                childs: [
                  {
                    name: 'Аляся',
                    gender: 'male',
                  },
                  {
                    name: 'ГIалихан',
                    gender: 'male',
                  },
                  {
                    name: 'Зайнап',
                    gender: 'female',
                  },
                  {
                    name: 'Аймисе',
                    gender: 'female',
                  },
                ],
              },
              {
                name: 'ГIабдулмажид',
                gender: 'male',
                childs: [
                  {
                    name: 'Даци',
                    gender: 'male',
                  },
                  {
                    name: 'МухIудин',
                    gender: 'male',
                  },
                  {
                    name: 'ГIумаханхIажи',
                    gender: 'male',
                  },
                ],
              },
            ],
          },
          {
            name: '???',
            childs: [
              {
                name: 'ГIалихIажи',
                gender: 'male',
                childs: [
                  {
                    name: 'МухIаммад',
                    gender: 'male',
                  },
                  {
                    name: 'ГIаза',
                    gender: 'male',
                  },
                  {
                    name: 'ГIабдулзагьид',
                    gender: 'male',
                  },
                  {
                    name: 'МухIаммадрасул',
                    gender: 'male',
                  },
                  {
                    name: 'Пазилат',
                    gender: 'female',
                  },
                  {
                    name: 'ПатIимат',
                    gender: 'female',
                  },
                  {
                    name: 'Хадижат',
                    gender: 'female',
                  },
                ]
              }
            ],
          },
          {
            name: 'МирзабегхIажи',
            gender: 'male',
            childs: [
              {
                name: 'Горо',
                gender: 'female',
                childs: [
                  {
                    name: 'ГIабдулбасир',
                    gender: 'male',
                  },
                  {
                    name: 'Зазай',
                    gender: 'female',
                  },
                ],
              },
              {
                name: 'Инус',
                gender: 'male',
                childs: [
                  {
                    name: 'Зиявутдин',
                    gender: 'male',
                  },
                ],
              },
              {
                name: 'ХIада',
                gender: 'female',
                childs: [
                  {
                    name: 'ГIабдулгIазим',
                    gender: 'male',
                  },
                  {
                    name: 'Саид',
                    gender: 'female',
                  },
                  {
                    name: 'ГIабдулкарим',
                    gender: 'male',
                  },
                  {
                    name: 'Яц',
                    gender: 'female',
                  },
                ],
              },
              {
                name: 'Амирилав',
                gender: 'male',
                childs: [
                  {
                    name: 'Абусаид',
                    gender: 'male',
                  },
                ],
              },
              {
                name: 'Загьи',
                gender: 'male',
                childs: [
                  {
                    name: 'ГIабдулхIапиз',
                    gender: 'male',
                  },
                  {
                    name: 'ГIабдулхIамид',
                    gender: 'male',
                  },
                  {
                    name: 'ГIабдулрашид',
                    gender: 'male',
                  },
                ],
              },
            ],
          },
          {
            name: 'Апи',
            gender: 'female',
            childs: [
              {
                name: 'Кехурза',
                gender: 'male',
                childs: [
                  {
                    name: 'Нажмутдим',
                    gender: 'male',
                  },
                  {
                    name: 'ПатIимат',
                    gender: 'female',
                  },
                  {
                    name: 'Шамсулвара',
                    gender: 'male',
                  },
                  {
                    name: 'Сакинат',
                    gender: 'female',
                  },
                  {
                    name: 'Сарат',
                    gender: 'female',
                  },
                ],
              },
            ],
          },
          {
            name: 'ГIалихIажи',
            gender: 'male',
            childs: [
              {
                name: 'АхIмадула',
                gender: 'male',
                childs: [
                  {
                    name: 'Расул',
                    gender: 'male',
                  },
                ],
              },
              {
                name: 'МухIаммадбашир',
                gender: 'male',
                childs: [
                  {
                    name: 'Баху',
                    gender: 'female',
                  },
                  {
                    name: 'Анар',
                    gender: 'male',
                  },
                  {
                    name: 'Сарат',
                    gender: 'female',
                  },
                ],
              },
              {
                name: 'ГIусман',
                gender: 'male',
                childs: [
                  {
                    name: '???',
                  },
                  {
                    name: 'ГIиса',
                    gender: 'male',
                  },
                  {
                    name: 'Таи-Наа',
                    gender: 'female',
                  },
                ],
              },
              {
                name: 'ГIумар',
                gender: 'male',
                childs: [
                  {
                    name: 'ХIажи',
                    gender: 'male',
                  },
                  {
                    name: 'Юсуп',
                    gender: 'male',
                  },
                ],
              },
              {
                name: 'ХIажибег',
                gender: 'male',
                childs: [
                  {
                    name: 'Асият',
                    gender: 'female',
                  },
                  {
                    gender: 'male',
                    name: 'Мансур',
                  },
                  {
                    name: 'Муи',
                    gender: 'female',
                  },
                  {
                    name: 'Насир',
                    gender: 'male',
                  },
                ],
              },
              {
                name: 'ГьайбатИладихIажи',
                gender: 'male',
                childs: [
                  {
                    name: '???',
                  },
                ],
              },
            ],
          },
          {
            name: 'ГIумар',
            gender: 'male',
            info: {
              text: 'Вукъун вуго чачаналъ Гендерген росдал хабалазда.',
            },
          },
          {
            name: 'Сайгибат',
            gender: 'female',
            marriage: 'm1',
          },
        ],
      }
    ],
  }],
};

export default tree;