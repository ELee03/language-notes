window.JAPANESE_DATA = {
  grammar: [
    {
      id: "wa-topic",
      level: "N5",
      function: "particle",
      pattern: "は",
      kana: "は",
      korean: "은/는",
      english: "topic, contrast, as for",
      attach: "noun or noun phrase + は",
      explanation: "Marks what the sentence is about or sets up contrast. Often maps cleanly to Korean 은/는.",
      example: {
        japanese: "私[わたし]は学生[がくせい]です。",
        korean: "저는 학생입니다.",
        english: "I am a student."
      },
      tags: ["topic", "contrast", "particle", "sentence architecture"]
    },
    {
      id: "ga-subject",
      level: "N5",
      function: "particle",
      pattern: "が",
      kana: "が",
      korean: "이/가",
      english: "subject, focus, new information",
      attach: "noun or noun phrase + が",
      explanation: "Marks the subject or the focused/new information. Especially common with existence, ability, and discovery.",
      example: {
        japanese: "猫[ねこ]がいます。",
        korean: "고양이가 있습니다.",
        english: "There is a cat."
      },
      tags: ["subject", "focus", "particle", "existence"]
    },
    {
      id: "wo-object",
      level: "N5",
      function: "particle",
      pattern: "を",
      kana: "を",
      korean: "을/를",
      english: "direct object",
      attach: "noun or noun phrase + を",
      explanation: "Marks the thing directly acted on by the verb.",
      example: {
        japanese: "水[みず]を飲[の]みます。",
        korean: "물을 마십니다.",
        english: "I drink water."
      },
      tags: ["object", "particle"]
    },
    {
      id: "ni-target",
      level: "N5",
      function: "particle",
      pattern: "に",
      kana: "に",
      korean: "에, 에게/한테",
      english: "destination, time point, indirect object, existence location",
      attach: "noun, time expression, destination, or recipient + に",
      explanation: "Marks where something exists, where motion lands, a time point, or a recipient.",
      example: {
        japanese: "学校[がっこう]に行[い]きます。",
        korean: "학교에 갑니다.",
        english: "I go to school."
      },
      tags: ["destination", "time", "location", "particle"]
    },
    {
      id: "de-location-means",
      level: "N5",
      function: "particle",
      pattern: "で",
      kana: "で",
      korean: "에서, (으)로",
      english: "action location, means",
      attach: "noun for place/tool/method + で",
      explanation: "Marks where an action happens or what tool/means is used.",
      example: {
        japanese: "学校[がっこう]で勉強[べんきょう]します。",
        korean: "학교에서 공부합니다.",
        english: "I study at school."
      },
      tags: ["location", "means", "particle"]
    },
    {
      id: "te-kudasai",
      level: "N5",
      function: "request",
      pattern: "てください",
      kana: "てください",
      korean: "아/어 주세요",
      english: "please do",
      attach: "verb て-form + ください",
      explanation: "A polite request built on the て-form.",
      example: {
        japanese: "見[み]てください。",
        korean: "봐 주세요.",
        english: "Please look."
      },
      tags: ["te-form", "request", "dialogue"]
    },
    {
      id: "te-mo-ii",
      level: "N5",
      function: "permission",
      pattern: "てもいい",
      kana: "てもいい",
      korean: "아/어도 된다",
      english: "may do, it is okay to do",
      attach: "verb/adjective て-form + もいい",
      explanation: "Gives permission. Built from て-form + も + いい.",
      example: {
        japanese: "ここで写真[しゃしん]を撮[と]ってもいいです。",
        korean: "여기서 사진을 찍어도 됩니다.",
        english: "You may take photos here."
      },
      tags: ["te-form", "permission", "dialogue"]
    },
    {
      id: "te-wa-ikenai",
      level: "N5",
      function: "prohibition",
      pattern: "てはいけない",
      kana: "てはいけない",
      korean: "(으)면 안 된다",
      english: "must not do",
      attach: "verb て-form + はいけない",
      explanation: "Prohibits an action. In speech this often contracts to ちゃいけない or ちゃだめ.",
      example: {
        japanese: "ここで写真[しゃしん]を撮[と]ってはいけません。",
        korean: "여기서 사진을 찍으면 안 됩니다.",
        english: "You must not take photos here."
      },
      tags: ["te-form", "prohibition", "dialogue"]
    },
    {
      id: "nakereba-naranai",
      level: "N5",
      function: "obligation",
      pattern: "なければならない",
      aliases: ["なければなりません", "なきゃ", "ないといけない"],
      kana: "なければならない",
      korean: "해야 한다",
      english: "must do, have to do",
      attach: "verb ない-form without final い + ければならない",
      explanation: "Literally close to 'if not, it will not become'; functionally obligation. Common in formal/basic learning Japanese.",
      example: {
        japanese: "宿題[しゅくだい]を出[だ]さなければなりません。",
        korean: "숙제를 내야 합니다.",
        english: "I have to submit the homework."
      },
      tags: ["obligation", "negative", "dialogue"]
    },
    {
      id: "tai",
      level: "N5",
      function: "desire",
      pattern: "たい",
      kana: "たい",
      korean: "고 싶다",
      english: "want to do",
      attach: "verb ます-stem + たい",
      explanation: "Attaches to the verb stem to express the speaker's desire.",
      example: {
        japanese: "日本[にほん]に行[い]きたいです。",
        korean: "일본에 가고 싶습니다.",
        english: "I want to go to Japan."
      },
      tags: ["desire", "verb stem"]
    },
    {
      id: "koto-ga-dekiru",
      level: "N5",
      function: "ability",
      pattern: "ことができる",
      aliases: ["ことができます"],
      kana: "ことができる",
      korean: "(으)ㄹ 수 있다",
      english: "can do",
      attach: "dictionary/plain verb phrase + ことができる",
      explanation: "Turns a verb phrase into a noun-like unit with こと, then says it is possible.",
      example: {
        japanese: "日本語[にほんご]を話[はな]すことができます。",
        korean: "일본어를 말할 수 있습니다.",
        english: "I can speak Japanese."
      },
      tags: ["ability", "nominalization"]
    },
    {
      id: "ta-koto-ga-aru",
      level: "N5",
      function: "experience",
      pattern: "たことがある",
      aliases: ["たことがあります"],
      kana: "たことがある",
      korean: "아/어 본 적이 있다",
      english: "have done before",
      attach: "plain past verb + ことがある",
      explanation: "Expresses previous experience of doing something.",
      example: {
        japanese: "日本[にほん]へ行[い]ったことがあります。",
        korean: "일본에 가 본 적이 있습니다.",
        english: "I have been to Japan."
      },
      tags: ["experience", "past", "nominalization"]
    },
    {
      id: "to-omou",
      level: "N4",
      function: "thought",
      pattern: "と思う",
      aliases: ["と思います"],
      kana: "とおもう",
      korean: "다고 생각하다",
      english: "I think that",
      attach: "plain clause + と思う",
      explanation: "Quotes a thought or judgment. The と marks the content being thought.",
      example: {
        japanese: "彼[かれ]は来[く]ると思[おも]います。",
        korean: "그는 올 것이라고 생각합니다.",
        english: "I think he will come."
      },
      tags: ["quotation", "thought", "dialogue"]
    },
    {
      id: "kamoshirenai",
      level: "N4",
      function: "possibility",
      pattern: "かもしれない",
      aliases: ["かもしれません"],
      kana: "かもしれない",
      korean: "지도 모른다",
      english: "might, may",
      attach: "plain clause + かもしれない",
      explanation: "Marks uncertainty or possibility.",
      example: {
        japanese: "明日[あした]は雨[あめ]かもしれません。",
        korean: "내일은 비가 올지도 모릅니다.",
        english: "It might rain tomorrow."
      },
      tags: ["possibility", "sentence ending", "dialogue"]
    },
    {
      id: "tara",
      level: "N4",
      function: "conditional",
      pattern: "たら",
      kana: "たら",
      korean: "(으)면",
      english: "if, when",
      attach: "plain past form + ら",
      explanation: "A flexible if/when conditional based on the past form.",
      example: {
        japanese: "雨[あめ]が降[ふ]ったら、行[い]きません。",
        korean: "비가 오면 가지 않습니다.",
        english: "If it rains, I will not go."
      },
      tags: ["conditional", "time", "dialogue"]
    },
    {
      id: "ba",
      level: "N4",
      function: "conditional",
      pattern: "ば",
      kana: "ば",
      korean: "(으)면",
      english: "if",
      attach: "conditional base: godan e-row + ば, ichidan stem + れば, い-adj ければ",
      explanation: "A more logical conditional. Often used when a condition produces a result.",
      example: {
        japanese: "時間[じかん]があれば、行[い]きます。",
        korean: "시간이 있으면 갑니다.",
        english: "If I have time, I will go."
      },
      tags: ["conditional"]
    },
    {
      id: "you-ni",
      level: "N4",
      function: "purpose",
      pattern: "ように",
      kana: "ように",
      korean: "도록",
      english: "so that, in order to",
      attach: "dictionary form, potential form, or ない-form + ように",
      explanation: "Often used for goals involving states, potential forms, or avoiding something.",
      example: {
        japanese: "忘[わす]れないように、メモします。",
        korean: "잊지 않도록 메모합니다.",
        english: "I write a note so I do not forget."
      },
      tags: ["purpose", "result"]
    },
    {
      id: "sou-appearance",
      level: "N4",
      function: "appearance",
      pattern: "そうだ",
      aliases: ["そうです"],
      kana: "そうだ",
      korean: "아/어 보이다",
      english: "looks like",
      attach: "verb ます-stem, い-adj stem, or な-adj stem + そうだ",
      explanation: "Attaches to stems to express appearance based on what you can see.",
      example: {
        japanese: "雨[あめ]が降[ふ]りそうです。",
        korean: "비가 올 것 같습니다.",
        english: "It looks like it will rain."
      },
      tags: ["appearance", "evidence", "dialogue"]
    },
    {
      id: "sou-hearsay",
      level: "N4",
      function: "hearsay",
      pattern: "そうだ",
      aliases: ["そうです"],
      kana: "そうだ",
      korean: "다고 한다",
      english: "I hear that",
      attach: "plain clause + そうだ",
      explanation: "After a plain sentence, reports information heard from someone/somewhere else.",
      example: {
        japanese: "明日[あした]は休[やす]みだそうです。",
        korean: "내일은 쉰다고 합니다.",
        english: "I hear tomorrow is a day off."
      },
      tags: ["hearsay", "reporting"]
    },
    {
      id: "mitai",
      level: "N4",
      function: "appearance",
      pattern: "みたいだ",
      aliases: ["みたいです"],
      kana: "みたいだ",
      korean: "같다",
      english: "seems like, looks like",
      attach: "noun, な-adj stem, or plain clause + みたいだ",
      explanation: "Casual appearance/comparison pattern. Very common in dialogue.",
      example: {
        japanese: "彼[かれ]は学生[がくせい]みたいです。",
        korean: "그는 학생 같습니다.",
        english: "He seems like a student."
      },
      tags: ["appearance", "comparison", "dialogue"]
    },
    {
      id: "noni",
      level: "N4",
      function: "concession",
      pattern: "のに",
      kana: "のに",
      korean: "는데도",
      english: "even though",
      attach: "plain clause + のに",
      explanation: "Marks a violated expectation: despite X, Y.",
      example: {
        japanese: "雨[あめ]が降[ふ]っているのに、出[で]かけました。",
        korean: "비가 오고 있는데도 나갔습니다.",
        english: "Even though it was raining, I went out."
      },
      tags: ["contrast", "concession"]
    },
    {
      id: "tame-ni",
      level: "N4",
      function: "purpose-reason",
      pattern: "ために",
      kana: "ために",
      korean: "위해서, 때문에",
      english: "for, because of",
      attach: "dictionary verb + ために, noun + のために",
      explanation: "Can express purpose or cause depending context.",
      example: {
        japanese: "日本語[にほんご]を勉強[べんきょう]するために、本[ほん]を買[か]いました。",
        korean: "일본어를 공부하기 위해 책을 샀습니다.",
        english: "I bought a book to study Japanese."
      },
      tags: ["purpose", "reason"]
    },
    {
      id: "wake-da",
      level: "N3",
      function: "explanation",
      pattern: "わけだ",
      aliases: ["わけです"],
      kana: "わけだ",
      korean: "셈이다, 것이다",
      english: "that means, no wonder",
      attach: "plain clause + わけだ",
      explanation: "Explains a conclusion that follows naturally from known information.",
      example: {
        japanese: "彼[かれ]は十年[じゅうねん]日本[にほん]に住[す]んでいた。日本語[にほんご]が上手[じょうず]なわけだ。",
        korean: "그는 10년 일본에 살았다. 일본어를 잘하는 셈이다.",
        english: "He lived in Japan for ten years. No wonder his Japanese is good."
      },
      tags: ["explanation", "inference", "media"]
    },
    {
      id: "wake-dewa-nai",
      level: "N3",
      function: "partial-negation",
      pattern: "わけではない",
      aliases: ["わけではありません", "わけじゃない"],
      kana: "わけではない",
      korean: "것은 아니다",
      english: "it is not that",
      attach: "plain clause + わけではない",
      explanation: "Softens or limits a statement by denying a total interpretation.",
      example: {
        japanese: "嫌[きら]いなわけではありません。",
        korean: "싫어하는 것은 아닙니다.",
        english: "It is not that I dislike it."
      },
      tags: ["negation", "nuance", "dialogue"]
    },
    {
      id: "hazu-da",
      level: "N3",
      function: "expectation",
      pattern: "はずだ",
      aliases: ["はずです"],
      kana: "はずだ",
      korean: "것이다, 분명하다",
      english: "should be, expected to",
      attach: "plain clause + はずだ",
      explanation: "Expresses expectation based on evidence or assumptions.",
      example: {
        japanese: "彼[かれ]は来[く]るはずです。",
        korean: "그는 올 것입니다.",
        english: "He should come."
      },
      tags: ["expectation", "evidence"]
    },
    {
      id: "rashii",
      level: "N3",
      function: "appearance-hearsay",
      pattern: "らしい",
      aliases: ["らしいです"],
      kana: "らしい",
      korean: "답다, 인 것 같다",
      english: "apparently, seems like, typical of",
      attach: "noun, な-adj stem, い-adj, or plain clause + らしい",
      explanation: "Can mark hearsay-like inference or typical qualities.",
      example: {
        japanese: "彼[かれ]は学生[がくせい]らしいです。",
        korean: "그는 학생인 것 같습니다.",
        english: "Apparently he is a student."
      },
      tags: ["appearance", "hearsay", "media"]
    },
    {
      id: "ppoi",
      level: "N3",
      function: "appearance",
      pattern: "っぽい",
      kana: "っぽい",
      korean: "스럽다, 같다",
      english: "-ish, tends to",
      attach: "noun, verb ます-stem, adjective stem + っぽい",
      explanation: "A casual suffix for appearance, tendency, or quality.",
      example: {
        japanese: "この服[ふく]は子供[こども]っぽいです。",
        korean: "이 옷은 아이 같습니다 / 유치합니다.",
        english: "These clothes are childish."
      },
      tags: ["appearance", "casual", "media"]
    },
    {
      id: "sae-ba",
      level: "N3",
      function: "condition",
      pattern: "さえ...ば",
      kana: "さえ...ば",
      korean: "만 ... 하면",
      english: "if only",
      attach: "noun/particle slot + さえ + conditional",
      explanation: "Marks a minimum necessary condition.",
      example: {
        japanese: "時間[じかん]さえあれば、できます。",
        korean: "시간만 있으면 할 수 있습니다.",
        english: "If only I have time, I can do it."
      },
      tags: ["condition", "limitation"]
    },
    {
      id: "ni-chigai-nai",
      level: "N3",
      function: "certainty",
      pattern: "に違いない",
      aliases: ["に違いありません"],
      kana: "にちがいない",
      korean: "임에 틀림없다",
      english: "must be, no doubt",
      attach: "plain clause + に違いない",
      explanation: "Strong inference or certainty.",
      example: {
        japanese: "彼[かれ]は本当[ほんとう]のことを知[し]っているに違[ちが]いありません。",
        korean: "그는 진실을 알고 있음에 틀림없습니다.",
        english: "He must know the truth."
      },
      tags: ["certainty", "evidence"]
    },
    {
      id: "you-ni-suru",
      level: "N3",
      function: "habit-control",
      pattern: "ようにする",
      kana: "ようにする",
      korean: "도록 하다",
      english: "make sure to",
      attach: "dictionary form or ない-form + ようにする",
      explanation: "Expresses intentional effort to make something happen regularly or reliably.",
      example: {
        japanese: "毎日[まいにち]日本語[にほんご]を聞[き]くようにしています。",
        korean: "매일 일본어를 들으려고 하고 있습니다.",
        english: "I make sure to listen to Japanese every day."
      },
      tags: ["habit", "control", "media"]
    },
    {
      id: "ni-tsuite",
      level: "N3",
      function: "topic-about",
      pattern: "について",
      kana: "について",
      korean: "에 대해서",
      english: "about, concerning",
      attach: "noun + について",
      explanation: "Marks the topic being discussed or considered.",
      example: {
        japanese: "日本語[にほんご]について話[はな]しましょう。",
        korean: "일본어에 대해서 이야기합시다.",
        english: "Let's talk about Japanese."
      },
      tags: ["topic", "formal", "discussion"]
    },
    {
      id: "yappari",
      level: "N3",
      function: "discourse",
      pattern: "やっぱり / やはり",
      kana: "やっぱり / やはり",
      korean: "역시",
      english: "as expected, after all",
      attach: "adverb; usually appears near the start of the clause",
      explanation: "Common dialogue marker for expectation confirmation or returning to a prior judgment.",
      example: {
        japanese: "やっぱり彼[かれ]は来[き]ませんでした。",
        korean: "역시 그는 오지 않았습니다.",
        english: "As expected, he did not come."
      },
      tags: ["discourse", "media", "dialogue"]
    }
  ],
  dictionary: [
    { japanese: "日本語", reading: "にほんご", korean: "일본어", english: "Japanese language", pos: "noun", tags: ["language"] },
    { japanese: "私", reading: "わたし", korean: "저, 나", english: "I, me", pos: "pronoun", tags: ["basic"] },
    { japanese: "今日", reading: "きょう", korean: "오늘", english: "today", pos: "noun/adverb", tags: ["time"] },
    { japanese: "明日", reading: "あした", korean: "내일", english: "tomorrow", pos: "noun/adverb", tags: ["time"] },
    { japanese: "昨日", reading: "きのう", korean: "어제", english: "yesterday", pos: "noun/adverb", tags: ["time"] },
    { japanese: "学校", reading: "がっこう", korean: "학교", english: "school", pos: "noun", tags: ["place"] },
    { japanese: "勉強", reading: "べんきょう", korean: "공부", english: "study", pos: "noun/suru-verb", tags: ["study"] },
    { japanese: "本", reading: "ほん", korean: "책", english: "book", pos: "noun", tags: ["object"] },
    { japanese: "水", reading: "みず", korean: "물", english: "water", pos: "noun", tags: ["basic"] },
    { japanese: "飲む", reading: "のむ", korean: "마시다", english: "to drink", pos: "godan verb", tags: ["verb"] },
    { japanese: "食べる", reading: "たべる", korean: "먹다", english: "to eat", pos: "ichidan verb", tags: ["verb"] },
    { japanese: "読む", reading: "よむ", korean: "읽다", english: "to read", pos: "godan verb", tags: ["verb"] },
    { japanese: "行く", reading: "いく", korean: "가다", english: "to go", pos: "godan verb", tags: ["verb"] },
    { japanese: "来る", reading: "くる", korean: "오다", english: "to come", pos: "irregular verb", tags: ["verb"] },
    { japanese: "見る", reading: "みる", korean: "보다", english: "to see, watch", pos: "ichidan verb", tags: ["verb"] },
    { japanese: "話す", reading: "はなす", korean: "말하다", english: "to speak", pos: "godan verb", tags: ["verb"] },
    { japanese: "聞く", reading: "きく", korean: "듣다, 묻다", english: "to listen, ask", pos: "godan verb", tags: ["verb"] },
    { japanese: "雨", reading: "あめ", korean: "비", english: "rain", pos: "noun", tags: ["weather"] },
    { japanese: "猫", reading: "ねこ", korean: "고양이", english: "cat", pos: "noun", tags: ["animal"] },
    { japanese: "部屋", reading: "へや", korean: "방", english: "room", pos: "noun", tags: ["place"] },
    { japanese: "机", reading: "つくえ", korean: "책상", english: "desk", pos: "noun", tags: ["object"] },
    { japanese: "上", reading: "うえ", korean: "위", english: "above, top", pos: "noun", tags: ["position"] },
    { japanese: "宿題", reading: "しゅくだい", korean: "숙제", english: "homework", pos: "noun", tags: ["school"] },
    { japanese: "出す", reading: "だす", korean: "내다", english: "to submit, put out", pos: "godan verb", tags: ["verb"] },
    { japanese: "高い", reading: "たかい", korean: "비싸다, 높다", english: "expensive, tall/high", pos: "i-adjective", tags: ["adjective"] },
    { japanese: "静か", reading: "しずか", korean: "조용하다", english: "quiet", pos: "na-adjective", tags: ["adjective"] },
    { japanese: "難しい", reading: "むずかしい", korean: "어렵다", english: "difficult", pos: "i-adjective", tags: ["adjective"] },
    { japanese: "好き", reading: "すき", korean: "좋아하다", english: "liked, fond of", pos: "na-adjective", tags: ["emotion"] },
    { japanese: "学生", reading: "がくせい", korean: "학생", english: "student", pos: "noun", tags: ["person"] },
    { japanese: "友達", reading: "ともだち", korean: "친구", english: "friend", pos: "noun", tags: ["person"] }
  ]
};
