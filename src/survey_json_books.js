export var json = {
  title: "週五食夜 - 影響你童年的一本書",
  description:
    "日期：06/17/2022 (五)</br>時間：6：30 ~ 9:30PM</br>門票：$350/人 (含晚餐)</br>地點：轉屋（台中市北區英士路62號2樓，從旁邊66巷上樓）</br></br>週五食夜的第二場活動出爐嘍！這次的主題為...影響你童年的一本書 </br>- 童年不限特定年齡，只要是過去的時光。</br>- 接受繪本、漫畫、小說等各種文字載體。 </br>- 影響可以是任何層面、輕重等。</br></br>本次主題「影響你童年的一本書」想法源自於上回活動來賓對於「繪本讀書會」的提案。我們好奇大家在童年接觸到什麼樣的書籍，進而影響了讀者的處事、價值觀。我們相信在不同年紀、不同認知下同一本書時常會帶來不同的感受與解讀。於是，轉屋想和大家討論一本書對一個人的影響是如何隨著時間變化的。另外，經過第一場活動的學習，未來將加強防疫措施；同時，也會在討論的橋段加以安排，目的是希望彼此能更深入地討論。",
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
                  type: "comment",
                  name: "info",
                  title: "書籍資訊 (書名或連結等)",
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
      title: "影響你童年的一本書",
      description: "請各位於活動當晚帶上書籍，如果手邊正好沒有實體書籍的朋友，請幫我們留下書籍的相關資料/連結，方便轉屋為你提前準備。",
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
                  type: "boolean",
                  name: "isUpgrade",
                  title: "升級套餐",
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
  completedHtml: "<p><h2>謝謝你的報名，我們將以Line官方帳號與你聯絡！</h2></p>"
};
