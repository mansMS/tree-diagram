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
          text: `Шагьидлъана гIолохъанго 1832 соналъ тIоцевесев имам ГъазимухIаммадгун цадахъ генусезул кIкIалахъ.
          Лъимал рукIинчIо.`,
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
            info: {
              text: 'ХIажибегиде абун буго дур яс Сайгибат хъамун гьигин вацасул васас, кьалде бусинабичIго магьариги лъун тейин гьесги абун буго.',
              photos: [
                { src: 'https://rg.ru/uploads/images/2023/08/30/2p_new_sboku_enot_1000_9fd.jpg', label: 'Enchik' },
                { src: 'https://rg.ru/uploads/images/2023/08/30/2p_new_sboku_enot_1000_9fd.jpg', label: 'Enchik' },
              ],
            },
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
                name: 'ИладихIажи (Шираздин)',
                gender: 'male',
                marriage: 'm2',
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
                name: 'Шардин',
                gender: 'male',
                childs: [
                  {
                    name: 'Расул',
                    gender: 'male',
                    info: {
                      text: 'Хвана 1941-1945 соназул рагъулъ.',
                    },
                  },
                ],
              },
              {
                name: 'Дадибика',
                gender: 'female',
                childs: [
                  {
                    name: 'ПатIимат',
                    gender: 'female',
                    childs: [
                      {
                        name: 'ГъазихIма',
                        gender: 'male',
                      },
                      {
                        name: 'МухIаммадзагьир',
                        gender: 'male',
                      },
                      {
                        name: 'МухIаммад',
                        gender: 'male',
                      },
                      {
                        name: 'СайихIат',
                        gender: 'female',
                        info: {
                          text: 'Хвана гьитIинго, 10 сон балелдего.',
                        },
                      },
                    ],
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
            name: 'Хадижат',
            gender: 'female',
            childs: [
              {
                name: 'Сада',
                marriage: 'm3',
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
            name: 'Апи',
            gender: 'female',
            info: {
              text: 'Гьелъул бетIергьанчи чачанав Тим?????в.',
            },
            childs: [
              {
                name: 'Кехурза',
                gender: 'male',
                info: {
                  text: 'Гьесул чIчIужу чачанай Айтула.',
                },
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
            name: 'СайихIат',
            gender: 'female',
            info: {
              text: 'Гелбахъалде рукъалде ана.',
            },
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
                info: {
                  text: 'ГIакълу бугей гIадан гьикIана. Хадуй жундуца ккурай, хасологи рукъ хин гьабулароан.',
                },
                childs: [
                  {
                    name: 'ГъазихIма',
                    gender: 'male',
                    info: {
                      text: '(Петя) Бегавуллъун вукIана.',
                    },
                  },
                  {
                    name: 'ГIаишат',
                    gender: 'female',
                  },
                ],
              },
            ],
          },
          {
            name: 'Аймесе',
            gender: 'female',
            childs: [
              {
                name: 'ГIалихан ????? откуда он тут?????',
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
            gender: 'male',
            childs: [
              {
                name: 'ГIалихIажи',
                gender: 'male',
                info: {
                  text: 'Гьусул чIчIужу Абагъиз.'
                },
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
                    childs: [
                      {
                        name: 'ХIасан',
                        gender: 'male',
                      },
                      {
                        name: 'Бектимер',
                        gender: 'male',
                      },
                      {
                        name: 'Загьи',
                        gender: 'female',
                      },
                      {
                        name: 'ГъаналгьитIинав',
                        gender: 'male',
                      },
                    ],
                  },
                ],
              },
              {
                name: 'Инус',
                gender: 'male',
                childs: [
                  {
                    name: 'Зиявутдин',
                    info: {
                      text: 'Гогоязул рикьи'
                    },
                    gender: 'male',
                  },
                ],
              },
              {
                name: 'ХIада',
                gender: 'male',
                childs: [
                  {
                    name: 'ГIабдулгIазим',
                    gender: 'male',
                  },
                  {
                    name: 'СагIид',
                    marriage: 'm4',
                    gender: 'male',
                  },
                  {
                    name: 'ГIабдулкарим',
                    gender: 'male',
                  },
                  {
                    name: 'Написат',
                    gender: 'female',
                  },
                ],
              },
              {
                name: 'ГIамирилав',
                gender: 'male',
                childs: [
                  {
                    name: 'Абусаид',
                    gender: 'male',
                    info: {
                      text: 'Гьесул чIчIужу Апи.'
                    },
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
            name: '???',
            gender: 'female',
            info: {
              text: 'ГIандалалде рукъалде ана. ХIабихIажил инсул эбел',
            },
          },
          {
            name: 'ГIалихIажи',
            gender: 'male',
            childs: [
              {
                name: 'АхIмадула',
                gender: 'male',
                info: {
                  text: `Гьесул чIчIужу Загьрат.`,
                },
                childs: [
                  {
                    name: 'Расул',
                    info: {
                      text: `АхIмадуласул Аццийин абулаан гьесда.`,
                    },
                    gender: 'male',
                  },
                ],
              },
              {
                name: 'МухIаммадбашир',
                gender: 'male',
                info: {
                  text: `Гьесул чIчIужу Зайгьанат.`,
                },
                childs: [
                  {
                    name: 'Баху',
                    gender: 'female',
                    childs: [
                      {
                        name: 'Хадижат',
                        gender: 'female',
                        marriage: 'm4',
                      },
                    ],
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
                info: {
                  text: `Гьесул чIчIужу буртиналса Ажа. Ажал ХIажи (чачан ХIажи) буртинаялда лъалаан нухал къачIалев чи вукIиналъ. Дилималда кьо балаго прораблъунги вукIана.`,
                },
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
                marriage: 'm3',
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
                name: 'Гьайбат',
                marriage: 'm2',
                gender: 'female',
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
      },
      {
        name: 'Гъамбулат',
        gender: 'male',
        childs: [
          {
            name: 'СурхайхIажи (Лала)',
            gender: 'male',
            childs: [
              {
                name: 'Лала',
                gender: 'male',
              },
              {
                name: 'Чама',
                gender: 'male',
              },
            ],
          },
        ],
      },
    ],
  }],
};

export default tree;