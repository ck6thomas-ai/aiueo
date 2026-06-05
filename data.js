// 平假名資料（清音 46 音）
// kana=假名, romaji=羅馬拼音, word=例字, wordKana=例字假名, wordZh=例字中文
const HIRAGANA = [
  { kana: "あ", romaji: "a",   word: "あめ",   wordZh: "雨" },
  { kana: "い", romaji: "i",   word: "いぬ",   wordZh: "狗" },
  { kana: "う", romaji: "u",   word: "うみ",   wordZh: "海" },
  { kana: "え", romaji: "e",   word: "えき",   wordZh: "車站" },
  { kana: "お", romaji: "o",   word: "おに",   wordZh: "鬼" },

  { kana: "か", romaji: "ka",  word: "かさ",   wordZh: "雨傘" },
  { kana: "き", romaji: "ki",  word: "きく",   wordZh: "菊花" },
  { kana: "く", romaji: "ku",  word: "くち",   wordZh: "嘴巴" },
  { kana: "け", romaji: "ke",  word: "けむり", wordZh: "煙" },
  { kana: "こ", romaji: "ko",  word: "こえ",   wordZh: "聲音" },

  { kana: "さ", romaji: "sa",  word: "さかな", wordZh: "魚" },
  { kana: "し", romaji: "shi", word: "しお",   wordZh: "鹽" },
  { kana: "す", romaji: "su",  word: "すし",   wordZh: "壽司" },
  { kana: "せ", romaji: "se",  word: "せかい", wordZh: "世界" },
  { kana: "そ", romaji: "so",  word: "そら",   wordZh: "天空" },

  { kana: "た", romaji: "ta",  word: "たまご", wordZh: "蛋" },
  { kana: "ち", romaji: "chi", word: "ちず",   wordZh: "地圖" },
  { kana: "つ", romaji: "tsu", word: "つき",   wordZh: "月亮" },
  { kana: "て", romaji: "te",  word: "てがみ", wordZh: "信" },
  { kana: "と", romaji: "to",  word: "とり",   wordZh: "鳥" },

  { kana: "な", romaji: "na",  word: "なつ",   wordZh: "夏天" },
  { kana: "に", romaji: "ni",  word: "にく",   wordZh: "肉" },
  { kana: "ぬ", romaji: "nu",  word: "ぬの",   wordZh: "布" },
  { kana: "ね", romaji: "ne",  word: "ねこ",   wordZh: "貓" },
  { kana: "の", romaji: "no",  word: "のり",   wordZh: "海苔" },

  { kana: "は", romaji: "ha",  word: "はな",   wordZh: "花" },
  { kana: "ひ", romaji: "hi",  word: "ひと",   wordZh: "人" },
  { kana: "ふ", romaji: "fu",  word: "ふね",   wordZh: "船" },
  { kana: "へ", romaji: "he",  word: "へや",   wordZh: "房間" },
  { kana: "ほ", romaji: "ho",  word: "ほし",   wordZh: "星星" },

  { kana: "ま", romaji: "ma",  word: "まど",   wordZh: "窗戶" },
  { kana: "み", romaji: "mi",  word: "みみ",   wordZh: "耳朵" },
  { kana: "む", romaji: "mu",  word: "むし",   wordZh: "蟲" },
  { kana: "め", romaji: "me",  word: "め",     wordZh: "眼睛" },
  { kana: "も", romaji: "mo",  word: "もり",   wordZh: "森林" },

  { kana: "や", romaji: "ya",  word: "やま",   wordZh: "山" },
  { kana: "ゆ", romaji: "yu",  word: "ゆき",   wordZh: "雪" },
  { kana: "よ", romaji: "yo",  word: "よる",   wordZh: "夜晚" },

  { kana: "ら", romaji: "ra",  word: "らくだ", wordZh: "駱駝" },
  { kana: "り", romaji: "ri",  word: "りんご", wordZh: "蘋果" },
  { kana: "る", romaji: "ru",  word: "るす",   wordZh: "不在家" },
  { kana: "れ", romaji: "re",  word: "れきし", wordZh: "歷史" },
  { kana: "ろ", romaji: "ro",  word: "ろうそく", wordZh: "蠟燭" },

  { kana: "わ", romaji: "wa",  word: "わに",   wordZh: "鱷魚" },
  { kana: "を", romaji: "wo",  word: "を",     wordZh: "（助詞）" },
  { kana: "ん", romaji: "n",   word: "ほん",   wordZh: "書" },
];

// 片假名資料（清音 46 音）
const KATAKANA = [
  { kana: "ア", romaji: "a",   word: "アイス",   wordZh: "冰淇淋" },
  { kana: "イ", romaji: "i",   word: "イルカ",   wordZh: "海豚" },
  { kana: "ウ", romaji: "u",   word: "ウサギ",   wordZh: "兔子" },
  { kana: "エ", romaji: "e",   word: "エビ",     wordZh: "蝦子" },
  { kana: "オ", romaji: "o",   word: "オレンジ", wordZh: "柳橙" },

  { kana: "カ", romaji: "ka",  word: "カメラ",   wordZh: "相機" },
  { kana: "キ", romaji: "ki",  word: "キウイ",   wordZh: "奇異果" },
  { kana: "ク", romaji: "ku",  word: "クマ",     wordZh: "熊" },
  { kana: "ケ", romaji: "ke",  word: "ケーキ",   wordZh: "蛋糕" },
  { kana: "コ", romaji: "ko",  word: "コーヒー", wordZh: "咖啡" },

  { kana: "サ", romaji: "sa",  word: "サラダ",   wordZh: "沙拉" },
  { kana: "シ", romaji: "shi", word: "シカ",     wordZh: "鹿" },
  { kana: "ス", romaji: "su",  word: "スイカ",   wordZh: "西瓜" },
  { kana: "セ", romaji: "se",  word: "セーター", wordZh: "毛衣" },
  { kana: "ソ", romaji: "so",  word: "ソース",   wordZh: "醬汁" },

  { kana: "タ", romaji: "ta",  word: "タオル",   wordZh: "毛巾" },
  { kana: "チ", romaji: "chi", word: "チーズ",   wordZh: "起司" },
  { kana: "ツ", romaji: "tsu", word: "ツル",     wordZh: "鶴" },
  { kana: "テ", romaji: "te",  word: "テレビ",   wordZh: "電視" },
  { kana: "ト", romaji: "to",  word: "トマト",   wordZh: "番茄" },

  { kana: "ナ", romaji: "na",  word: "ナイフ",   wordZh: "刀子" },
  { kana: "ニ", romaji: "ni",  word: "ニンジン", wordZh: "紅蘿蔔" },
  { kana: "ヌ", romaji: "nu",  word: "ヌードル", wordZh: "麵" },
  { kana: "ネ", romaji: "ne",  word: "ネクタイ", wordZh: "領帶" },
  { kana: "ノ", romaji: "no",  word: "ノート",   wordZh: "筆記本" },

  { kana: "ハ", romaji: "ha",  word: "ハート",   wordZh: "愛心" },
  { kana: "ヒ", romaji: "hi",  word: "ヒーロー", wordZh: "英雄" },
  { kana: "フ", romaji: "fu",  word: "フルーツ", wordZh: "水果" },
  { kana: "ヘ", romaji: "he",  word: "ヘア",     wordZh: "頭髮" },
  { kana: "ホ", romaji: "ho",  word: "ホテル",   wordZh: "飯店" },

  { kana: "マ", romaji: "ma",  word: "マスク",   wordZh: "口罩" },
  { kana: "ミ", romaji: "mi",  word: "ミルク",   wordZh: "牛奶" },
  { kana: "ム", romaji: "mu",  word: "ムシ",     wordZh: "蟲" },
  { kana: "メ", romaji: "me",  word: "メガネ",   wordZh: "眼鏡" },
  { kana: "モ", romaji: "mo",  word: "モモ",     wordZh: "桃子" },

  { kana: "ヤ", romaji: "ya",  word: "ヤシ",     wordZh: "椰子" },
  { kana: "ユ", romaji: "yu",  word: "ユリ",     wordZh: "百合" },
  { kana: "ヨ", romaji: "yo",  word: "ヨット",   wordZh: "帆船" },

  { kana: "ラ", romaji: "ra",  word: "ライオン", wordZh: "獅子" },
  { kana: "リ", romaji: "ri",  word: "リボン",   wordZh: "蝴蝶結" },
  { kana: "ル", romaji: "ru",  word: "ルビー",   wordZh: "紅寶石" },
  { kana: "レ", romaji: "re",  word: "レモン",   wordZh: "檸檬" },
  { kana: "ロ", romaji: "ro",  word: "ロボット", wordZh: "機器人" },

  { kana: "ワ", romaji: "wa",  word: "ワイン",   wordZh: "葡萄酒" },
  { kana: "ヲ", romaji: "wo",  word: "ヲ",       wordZh: "（助詞）" },
  { kana: "ン", romaji: "n",   word: "パン",     wordZh: "麵包" },
];

// 濁音 / 半濁音（聲音為主，不附例字）
const k = (kana, romaji) => ({ kana, romaji, word: "", wordZh: "" });
const DAKUTEN_HIRA = [
  k("が","ga"),k("ぎ","gi"),k("ぐ","gu"),k("げ","ge"),k("ご","go"),
  k("ざ","za"),k("じ","ji"),k("ず","zu"),k("ぜ","ze"),k("ぞ","zo"),
  k("だ","da"),k("ぢ","ji"),k("づ","zu"),k("で","de"),k("ど","do"),
  k("ば","ba"),k("び","bi"),k("ぶ","bu"),k("べ","be"),k("ぼ","bo"),
  k("ぱ","pa"),k("ぴ","pi"),k("ぷ","pu"),k("ぺ","pe"),k("ぽ","po"),
];
const DAKUTEN_KATA = [
  k("ガ","ga"),k("ギ","gi"),k("グ","gu"),k("ゲ","ge"),k("ゴ","go"),
  k("ザ","za"),k("ジ","ji"),k("ズ","zu"),k("ゼ","ze"),k("ゾ","zo"),
  k("ダ","da"),k("ヂ","ji"),k("ヅ","zu"),k("デ","de"),k("ド","do"),
  k("バ","ba"),k("ビ","bi"),k("ブ","bu"),k("ベ","be"),k("ボ","bo"),
  k("パ","pa"),k("ピ","pi"),k("プ","pu"),k("ペ","pe"),k("ポ","po"),
];

// 拗音（聲音為主）
const YOUON_HIRA = [
  k("きゃ","kya"),k("きゅ","kyu"),k("きょ","kyo"),
  k("しゃ","sha"),k("しゅ","shu"),k("しょ","sho"),
  k("ちゃ","cha"),k("ちゅ","chu"),k("ちょ","cho"),
  k("にゃ","nya"),k("にゅ","nyu"),k("にょ","nyo"),
  k("ひゃ","hya"),k("ひゅ","hyu"),k("ひょ","hyo"),
  k("みゃ","mya"),k("みゅ","myu"),k("みょ","myo"),
  k("りゃ","rya"),k("りゅ","ryu"),k("りょ","ryo"),
  k("ぎゃ","gya"),k("ぎゅ","gyu"),k("ぎょ","gyo"),
  k("じゃ","ja"), k("じゅ","ju"), k("じょ","jo"),
  k("びゃ","bya"),k("びゅ","byu"),k("びょ","byo"),
  k("ぴゃ","pya"),k("ぴゅ","pyu"),k("ぴょ","pyo"),
];
const YOUON_KATA = [
  k("キャ","kya"),k("キュ","kyu"),k("キョ","kyo"),
  k("シャ","sha"),k("シュ","shu"),k("ショ","sho"),
  k("チャ","cha"),k("チュ","chu"),k("チョ","cho"),
  k("ニャ","nya"),k("ニュ","nyu"),k("ニョ","nyo"),
  k("ヒャ","hya"),k("ヒュ","hyu"),k("ヒョ","hyo"),
  k("ミャ","mya"),k("ミュ","myu"),k("ミョ","myo"),
  k("リャ","rya"),k("リュ","ryu"),k("リョ","ryo"),
  k("ギャ","gya"),k("ギュ","gyu"),k("ギョ","gyo"),
  k("ジャ","ja"), k("ジュ","ju"), k("ジョ","jo"),
  k("ビャ","bya"),k("ビュ","byu"),k("ビョ","byo"),
  k("ピャ","pya"),k("ピュ","pyu"),k("ピョ","pyo"),
];

// 主題單字（type=vocab：正面日文，背面中文意思）
const v = (jp, romaji, zh) => ({ jp, romaji, zh });
const VOCAB_NUM = [
  v("いち","ichi","一 (1)"), v("に","ni","二 (2)"), v("さん","san","三 (3)"),
  v("よん","yon","四 (4)"), v("ご","go","五 (5)"), v("ろく","roku","六 (6)"),
  v("なな","nana","七 (7)"), v("はち","hachi","八 (8)"), v("きゅう","kyuu","九 (9)"),
  v("じゅう","juu","十 (10)"),
];
const VOCAB_COLOR = [
  v("あか","aka","紅色"), v("あお","ao","藍色"), v("きいろ","kiiro","黃色"),
  v("みどり","midori","綠色"), v("しろ","shiro","白色"), v("くろ","kuro","黑色"),
  v("ちゃいろ","chairo","咖啡色"), v("ピンク","pinku","粉紅色"),
];
const VOCAB_FOOD = [
  v("ごはん","gohan","飯"), v("みず","mizu","水"), v("おちゃ","ocha","茶"),
  v("たまご","tamago","蛋"), v("さかな","sakana","魚"), v("にく","niku","肉"),
  v("やさい","yasai","蔬菜"), v("くだもの","kudamono","水果"),
  v("パン","pan","麵包"), v("ラーメン","raamen","拉麵"),
];
const VOCAB_GREET = [
  v("おはよう","ohayou","早安"), v("こんにちは","konnichiwa","你好／午安"),
  v("こんばんは","konbanwa","晚安(見面)"), v("ありがとう","arigatou","謝謝"),
  v("すみません","sumimasen","不好意思"), v("さようなら","sayounara","再見"),
  v("おやすみ","oyasumi","晚安(睡前)"), v("はじめまして","hajimemashite","初次見面"),
];
const VOCAB_DAILY = [
  v("はい","hai","是／好"), v("いいえ","iie","不是"),
  v("おねがいします","onegaishimasu","麻煩你了／拜託"),
  v("だいじょうぶ","daijoubu","沒關係／沒問題"),
  v("わかりました","wakarimashita","我懂了"),
  v("わかりません","wakarimasen","我不懂"),
  v("もういちど","mou ichido","再一次"),
  v("ちょっとまって","chotto matte","等一下"),
  v("いくらですか","ikura desu ka","多少錢？"),
  v("これください","kore kudasai","請給我這個"),
  v("トイレはどこ","toire wa doko","廁所在哪？"),
  v("たすけて","tasukete","救命／幫幫我"),
  v("おいしい","oishii","好吃"),
  v("たのしい","tanoshii","好玩／開心"),
  v("すごい","sugoi","厲害／好棒"),
  v("かわいい","kawaii","可愛"),
  v("げんきですか","genki desu ka","你好嗎？"),
  v("おなかすいた","onaka suita","肚子餓了"),
  v("つかれた","tsukareta","累了"),
  v("がんばって","ganbatte","加油"),
  v("いってきます","ittekimasu","我出門了"),
  v("ただいま","tadaima","我回來了"),
  v("おつかれさま","otsukaresama","辛苦了"),
];

// 文法句型（給文法頁閱讀用）
const GRAMMAR = [
  {
    title: "〜は〜です（A 是 B）",
    desc: "最基本的句型。「は」當主題標記時念作 wa。です 是禮貌的「是」。",
    examples: [
      { jp: "わたしは がくせいです。", romaji: "watashi wa gakusei desu", zh: "我是學生。" },
      { jp: "これは ペンです。", romaji: "kore wa pen desu", zh: "這是筆。" },
    ],
  },
  {
    title: "助詞 は・が・を・に・で",
    desc: "助詞放在詞後面，標示它在句子裡的角色：は主題、が主格、を受詞、に時間/方向、で地點/方法。",
    examples: [
      { jp: "ごはんを たべます。", romaji: "gohan wo tabemasu", zh: "吃飯。(を=受詞)" },
      { jp: "がっこうに いきます。", romaji: "gakkou ni ikimasu", zh: "去學校。(に=方向)" },
      { jp: "うちで たべます。", romaji: "uchi de tabemasu", zh: "在家吃。(で=地點)" },
    ],
  },
  {
    title: "これ・それ・あれ（指示詞）",
    desc: "これ=這個(靠近我)、それ=那個(靠近你)、あれ=那個(都遠)。問「哪個」用 どれ。",
    examples: [
      { jp: "これは ほんです。", romaji: "kore wa hon desu", zh: "這是書。" },
      { jp: "それは なんですか。", romaji: "sore wa nan desu ka", zh: "那是什麼？" },
    ],
  },
  {
    title: "動詞 ます形（禮貌現在式）",
    desc: "句尾用 〜ます 就是禮貌說法，表示現在或未來。否定是 〜ません。",
    examples: [
      { jp: "たべます。", romaji: "tabemasu", zh: "吃。" },
      { jp: "のみます。", romaji: "nomimasu", zh: "喝。" },
      { jp: "いきません。", romaji: "ikimasen", zh: "不去。" },
    ],
  },
];

// 卡片組登錄表（學習/測驗/寫字/一覽 都讀這裡）
const DECK_REG = [
  { id: "hira",    label: "平假名",   type: "kana",  items: HIRAGANA },
  { id: "hira_d",  label: "平假濁音", type: "kana",  items: DAKUTEN_HIRA },
  { id: "hira_y",  label: "平假拗音", type: "kana",  items: YOUON_HIRA },
  { id: "kata",    label: "片假名",   type: "kana",  items: KATAKANA },
  { id: "kata_d",  label: "片假濁音", type: "kana",  items: DAKUTEN_KATA },
  { id: "kata_y",  label: "片假拗音", type: "kana",  items: YOUON_KATA },
  { id: "v_num",   label: "🔢數字",   type: "vocab", items: VOCAB_NUM },
  { id: "v_color", label: "🎨顏色",   type: "vocab", items: VOCAB_COLOR },
  { id: "v_food",  label: "🍙食物",   type: "vocab", items: VOCAB_FOOD },
  { id: "v_greet", label: "👋招呼",   type: "vocab", items: VOCAB_GREET },
  { id: "v_daily", label: "💬日常用語", type: "vocab", items: VOCAB_DAILY },
];

// 把不同來源統一成卡片格式
function normalizeDeck(reg) {
  return reg.items.map((it) => {
    if (reg.type === "vocab") {
      return { front: it.jp, main: it.zh, sub: it.romaji, ans: it.zh, say: it.jp, sayFlip: it.jp };
    }
    const ex = it.word ? `${it.word}（${it.wordZh}）` : "";
    return { front: it.kana, main: it.romaji, sub: ex, ans: it.romaji, say: it.kana, sayFlip: it.word || it.kana };
  });
}
