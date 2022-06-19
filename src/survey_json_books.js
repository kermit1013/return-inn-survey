export var json = {
  title: "週五食夜 - 影響你童年的...",
  description:
    "日期：06/24/2022 (五)</br>時間：6：30 ~ 9:30PM</br>門票：$450/人 (含晚餐、飲品)</br>地點：轉屋（台中市北區英士路62號2樓，從旁邊66巷上樓）</br></br>上週，很多朋友反應錯過了上回主題「影響你童年的一本書」。於是，我們決定在辦一場相似的主題！但這次，我們把主題擴大為「影響你童年的...」。無論是影響你童年的一本書、一個人、一件事或是一個地方，我們都歡迎你來分享。",
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
                  title: "你想分享的是...",
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
      title: "影響你童年的...",
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
