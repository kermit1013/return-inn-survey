export var json = {
  title: "週五食夜 - 七月聊音樂",
  description:
    "日期：七月每週五</br>時間：6：30 ~ 10：00PM</br>門票：$450/人 (含晚餐、飲品 ※兩人同行送一杯調酒。)</br>地點：轉屋（台中市北區英士路62號2樓，從旁邊66巷上樓）</br></br> - 07/01/2022 (五) 酒精音樂夜 </br> - 07/08/2022 (五) 懷舊黑膠 </br> - 07/15/2022 (五) 說書的藝術</br> - 07/22/2022 (五) 畫出音符</br> - 07/29/2022 (五) Open Jam",
  logoPosition: "right",
  pages: [
    {
      name: "page4",
      elements: [
        {
          type: "image",
          name: "question8",
          width: "40%",
          imageLink:
            "images/july-min.png",
          imageFit: "true",
        },
        {
          type: "panel",
          name: "panel5",
          elements: [
            {
              type: "panel",
              name: "panel6",
              elements: [
                {
                  type: "text",
                  name: "name",
                  title: "我們該如何稱呼你",
                  minWidth: "40%",
                  isRequired: true,
                },
                {
                  type: "text",
                  name: "lineId",
                  title: "Line Id",
                  minWidth: "40%",
                  isRequired: true,
                },
                {
                  type: "text",
                  name: "tel",
                  title: "聯絡手機",
                  isRequired: true,
                  minWidth: "40%",
                  inputType: "tel",
                },
              ],

              showNumber: false,
              showQuestionNumbers: "off",
            },
          ],
          startWithNewLine: false,
        },
      ],
      title: "基本資料",
      description: "我們將會透過轉屋官方Line與你確認報名。",
    },
    {
      name: "page4",
      elements: [
        {
          type: "image",
          name: "question8",
          width: "40%",
          imageLink:
            "images/july-event-list-min.png",
          imageFit: "true",
        },
        {
          type: "panel",
          name: "panel5",
          elements: [
            {
              type: "panel",
              name: "panel6",
              elements: [
                {
                  "type": "checkbox",
                  "name": "events",
                  "isRequired": true,
                  "title": "我想要參加",
                  "choices": [
                   {
                    "value": 1,
                    "text": "07/01/2022 (五) 酒精音樂夜"
                   },
                   {
                    "value": 2,
                    "text": "07/08/2022 (五) 懷舊黑膠"
                   },
                   {
                    "value": 3,
                    "text": "07/15/2022 (五) 說書的藝術"
                   },
                   {
                    "value": 4,
                    "text": "07/22/2022 (五) 畫出音符"
                   },
                   {
                    "value": 5,
                    "text": "07/29/2022 (五) Open Jam"
                   }
                  ]
                 },
                {
                  type: "comment",
                  name: "info",
                  title: "我想要與轉屋分享...",
                  minWidth: "40%",
                  isRequired: false,
                }
              ],

              showNumber: false,
              showQuestionNumbers: "off",
            },
          ],
          startWithNewLine: false,
        },
      ],
      title: "七月聊音樂",
      description: "請各位於活動當晚帶上任何你想和大家分享的東西(沒有實體物品也沒關係)，如果需要轉屋為你提前準備，請留下相關資訊。",
    },
    {
      name: "page3",
      elements: [
        {
          type: "image",
          name: "question8",
          width: "40%",
          imageLink:
            "images/dinner-min.jpg",
          imageFit: "true",
        },
        {
          type: "panel",
          name: "panel5",
          elements: [
            {
              type: "panel",
              name: "panel6",
              elements: [
        
                {
                  type: "boolean",
                  name: "isVegan",
                  title: "是否有素食需求",
                  description:
                    "",
                  isRequired: true,
                  labelTrue: "是",
                  labelFalse: "否",
                  hideNumber: true,
                },
                {
                  type: "comment",
                  name: "allergy",
                  title: "如果有特殊食物需求，如過敏原或全素飲食，請註明",
                  minWidth: "40%",
                  isRequired: false,
                }
              ],

              showNumber: false,
              showQuestionNumbers: "off",
            },
          ],
          startWithNewLine: false,
        },
      ],
      title: "轉屋菜單",
      description:
        "週五食夜是由我們的私廚朋友 - 阿哲來掌廚。他將於每週提供不一樣的家常美食。由阿哲親自研發的食譜，希望帶給大家回家的滋味。如果有特殊食物需求，如過敏原或全素飲食，請註明。我們會與你聯絡並討論調整方案。轉屋另外還有供應甜點、飲料與酒類。",
    },

    {
      name: "page3",
      elements: [
        {
          type: "image",
          name: "question1",
          width: "40%",
          imageLink:
            "images/july-min.png",
          imageFit: "true",
        },
        {
          type: "panel",
          name: "panel3",
          elements: [
            {
              type: "panel",
              name: "panel4",
              elements: [
                {
                  type: "image",
                  minWidth: "40%",
                  imageLink: "images/google-map.png",
                },
              ],
              title: "地圖",
              description: "轉屋（台中市北區英士路62號2樓，從旁邊66巷上樓）",
              showNumber: false,
              showQuestionNumbers: "off",
            },
            {
              type: "panel",
              name: "panel2",
              elements: [
                {
                  type: "image",
                  name: "question12",
                  minWidth: "40%",
                  imageLink: "images/line-qr-code.png",
                  text: "Line",
                },
                {
                  type: "image",
                  name: "question13",
                  minWidth: "40%",
                  imageLink: "images/ig-qr-code.jpg",
                },
              ],
              title: "聯絡我們",
              description: "如果有額外問題，可以先私訊我們Line或IG官方帳號",
              showNumber: false,
              showQuestionNumbers: "off",
            },
          ],
          startWithNewLine: false,
        },
      ],
      title: "其他資訊",
      description:
        "轉屋將以Line官方帳號與你確認報名 </br>費用請於當天以現金支付",
    },
  ],
  showTitle: true,
  completedHtml: "<p><h2>謝謝你的報名，我們將以Line官方帳號與你聯絡！</h2></p>"
};
