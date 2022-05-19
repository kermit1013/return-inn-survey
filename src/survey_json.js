export var json = {
  title: "週五食夜 - 對於「家」的想像",
  description:
    "日期：05/27/2022 (五)</br>時間：6 ~ 11PM</br>門票：$350/人 (含晚餐)</br>地點：轉屋（台中市北區英士路62號2樓，從旁邊66巷上樓）</br></br>轉屋的開幕活動「週五食夜」來囉！我們邀請大家來共進晚餐。晚餐由我們的老朋友掌廚，希望帶給大家回家的溫馨滋味。共進晚餐之餘，我們這次活動主題為 - 對於「家」的想像。我們將透過有趣的媒介（例如：食材、書畫等），來討論與分享大家對於「家」的各種想法。未來的每週五，我們都會舉辦週五食夜，並在每次活動中帶入不同主題。期待每回當你需要充電時，別忘的轉屋的週五食夜！",
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
            "https://images.unsplash.com/photo-1520756977789-ebed5554fb70?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170",
          imageFit: "none",
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
                  name: "question9",
                  title: "我們該如何稱呼你",
                  minWidth: "40%",
                  isRequired: true,
                },
                {
                  type: "text",
                  name: "question10",
                  title: "Line Id",
                  minWidth: "40%",
                  isRequired: true,
                },
                {
                  type: "text",
                  name: "question11",
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
      name: "page3",
      elements: [
        {
          type: "image",
          name: "question8",
          width: "40%",
          imageLink:
            "https://images.unsplash.com/photo-1520756977789-ebed5554fb70?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170",
          imageFit: "none",
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
                  type: "radiogroup",
                  name: "question6",
                  title: "餐點選擇",
                  isRequired: true,
                  choices: [
                    {
                      value: "item1",
                      text: "奶油海鮮起司烏龍麵",
                    },
                    {
                      value: "item2",
                      text: "時蔬炒烏龍（五辛素）",
                    },
                  ],
                  hasOther: true,
                  otherText: "其他（請描述過敏原或其他需求）",
                  hideNumber: true,
                },
                {
                  type: "boolean",
                  name: "question5",
                  title: "升級套餐 +$150",
                  description:
                    "套餐含飲料及甜點</br>本週飲料：桂花紅茶（可以補差價換飲品）</br>本週甜點：重乳酪蛋糕（原味/紅茶/蘭姆）（當天在確認口味即可）",
                  isRequired: true,
                  labelTrue: "好的",
                  labelFalse: "不用",
                  hideNumber: true,
                },
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
            "https://images.unsplash.com/photo-1520756977789-ebed5554fb70?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170",
          imageFit: "none",
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
  completedHtml: "<p><h4>謝謝你的報名，我們將以Line官方帳號與你聯絡！</h4></p>"
};
