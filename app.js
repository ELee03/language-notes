(function () {
  function normalize(value) {
    return String(value || "").toLowerCase().trim();
  }

  function stripReading(value) {
    return String(value || "").replace(/\[[^\]]+\]/g, "");
  }

  function expandReadings(value) {
    return String(value || "").replace(/([\u3400-\u9fff々〆ヶ]+)\[([^\]]+)\]/g, "$2");
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function renderJapanese(value) {
    return escapeHtml(value).replace(/([\u3400-\u9fff々〆ヶ]+)\[([^\]]+)\]/g, "<ruby>$1<rt>$2</rt></ruby>");
  }

  function kanaSuffixLength(word, reading) {
    let count = 0;
    let wi = word.length - 1;
    let ri = reading.length - 1;
    while (wi >= 0 && ri >= 0 && /[\u3040-\u309fー]/.test(word[wi]) && word[wi] === reading[ri]) {
      count += 1;
      wi -= 1;
      ri -= 1;
    }
    return count;
  }

  function renderWordWithReading(word, reading) {
    if (!reading) return renderJapanese(word);
    const hasKanji = /[\u3400-\u9fff々〆ヶ]/.test(word);
    if (!hasKanji) return escapeHtml(word);
    const suffixLength = kanaSuffixLength(word, reading);
    const wordBase = suffixLength ? word.slice(0, -suffixLength) : word;
    const readingBase = suffixLength ? reading.slice(0, -suffixLength) : reading;
    const suffix = suffixLength ? word.slice(-suffixLength) : "";
    if (!wordBase || !readingBase) return renderJapanese(`${word}[${reading}]`);
    return renderJapanese(`${wordBase}[${readingBase}]${suffix}`);
  }

  function preferredJapaneseVoice(voices) {
    const japaneseVoices = voices.filter(voice => voice.lang && voice.lang.toLowerCase().startsWith("ja"));
    const maleNameHints = [
      "keita",
      "ichiro",
      "otoya",
      "takumi",
      "male",
      "man"
    ];
    const savedVoice = localStorage.getItem("languageNotesJapaneseVoice");
    return japaneseVoices.find(voice => voice.name === savedVoice)
      || japaneseVoices.find(voice => {
      const name = voice.name.toLowerCase();
      return maleNameHints.some(hint => name.includes(hint));
    }) || japaneseVoices.find(voice => voice.lang === "ja-JP") || japaneseVoices[0] || null;
  }

  function japaneseVoices() {
    return window.speechSynthesis
      ? window.speechSynthesis.getVoices().filter(voice => voice.lang && voice.lang.toLowerCase().startsWith("ja"))
      : [];
  }

  function initVoicePicker() {
    if (!("speechSynthesis" in window) || document.getElementById("voice-picker")) return;
    const control = document.createElement("div");
    control.className = "voice-picker";
    control.innerHTML = `
      <label for="voice-picker">Voice</label>
      <select id="voice-picker" class="voice-select">
        <option value="">Auto Japanese voice</option>
      </select>
    `;
    document.body.appendChild(control);
    const select = control.querySelector("select");

    function populate() {
      const current = select.value || localStorage.getItem("languageNotesJapaneseVoice") || "";
      const voices = japaneseVoices();
      select.innerHTML = `<option value="">Auto Japanese voice</option>`;
      voices.forEach(voice => {
        const option = document.createElement("option");
        option.value = voice.name;
        option.textContent = `${voice.name} (${voice.lang})`;
        select.appendChild(option);
      });
      select.value = voices.some(voice => voice.name === current) ? current : "";
    }

    select.addEventListener("input", () => {
      if (select.value) localStorage.setItem("languageNotesJapaneseVoice", select.value);
      else localStorage.removeItem("languageNotesJapaneseVoice");
    });
    populate();
    window.speechSynthesis.addEventListener("voiceschanged", populate);
  }

  function speakJapanese(text) {
    const clean = expandReadings(text).trim();
    if (!clean || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(clean);
    const voices = window.speechSynthesis.getVoices();
    utterance.voice = preferredJapaneseVoice(voices);
    utterance.lang = "ja-JP";
    utterance.rate = 0.88;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  }

  function speakButton(text, label = "Speak") {
    return `<button class="speak-button" type="button" data-speak="${escapeHtml(text)}" aria-label="${escapeHtml(label)}">▶</button>`;
  }

  function bindSpeakButtons(root = document) {
    root.querySelectorAll("[data-speak]").forEach(button => {
      if (button.dataset.boundSpeak) return;
      button.dataset.boundSpeak = "true";
      button.addEventListener("click", event => {
        event.preventDefault();
        event.stopPropagation();
        speakJapanese(button.dataset.speak);
      });
    });
  }

  function includesAnyText(item, query) {
    if (!query) return true;
    const haystack = [
      item.level,
      item.function,
      item.pattern,
      item.kana,
      item.korean,
      item.english,
      item.attach,
      item.explanation,
      item.example && item.example.japanese,
      item.example && item.example.korean,
      item.example && item.example.english,
      (item.tags || []).join(" ")
    ].join(" ").toLowerCase();
    return haystack.includes(query.toLowerCase());
  }

  function renderGrammarCard(item) {
    const tags = (item.tags || []).map(tag => `<span class="tag">${tag}</span>`).join("");
    return `
      <article class="pattern-card">
        <div class="pattern-head">
          <div class="pattern-title">
            <span class="jp">${item.pattern}</span>
            <span class="level-pill ${item.level.toLowerCase()}">${item.level}</span>
            <span class="tag">${item.function}</span>
          </div>
          <span class="meta">${item.kana || ""}</span>
        </div>
        <p><strong>Korean:</strong> ${item.korean}</p>
        <p><strong>English:</strong> ${item.english}</p>
        ${item.attach ? `<p><strong>Attaches to:</strong> ${item.attach}</p>` : ""}
        <p>${item.explanation}</p>
        <div class="example">
          <div class="jp line-with-action">${renderJapanese(item.example.japanese)} ${speakButton(item.example.japanese, `Speak ${expandReadings(item.example.japanese)}`)}</div>
          <div class="kr">${item.example.korean}</div>
          <div class="en">${item.example.english}</div>
        </div>
        <div class="tag-row">${tags}</div>
      </article>
    `;
  }

  function initGrammar() {
    const data = window.JAPANESE_DATA.grammar;
    const search = document.getElementById("grammar-search");
    const levelFilter = document.getElementById("level-filter");
    const functionFilter = document.getElementById("function-filter");
    const results = document.getElementById("grammar-results");
    const functions = Array.from(new Set(data.map(item => item.function))).sort();

    functions.forEach(fn => {
      const option = document.createElement("option");
      option.value = fn;
      option.textContent = fn;
      functionFilter.appendChild(option);
    });

    function render() {
      const query = normalize(search.value);
      const level = levelFilter.value;
      const fn = functionFilter.value;
      const filtered = data.filter(item => {
        const levelOk = level === "all" || item.level === level;
        const fnOk = fn === "all" || item.function === fn;
        return levelOk && fnOk && includesAnyText(item, query);
      });

      results.innerHTML = filtered.length
        ? filtered.map(renderGrammarCard).join("")
        : `<div class="empty">No grammar patterns matched that search.</div>`;
      bindSpeakButtons(results);
    }

    [search, levelFilter, functionFilter].forEach(el => el.addEventListener("input", render));
    render();
  }

  function renderDictionaryCard(item) {
    const tags = (item.tags || []).map(tag => `<span class="tag">${tag}</span>`).join("");
    return `
      <article class="pattern-card">
        <div class="pattern-head">
          <div class="pattern-title">
            <span class="jp line-with-action">${renderWordWithReading(item.japanese, item.reading)} ${speakButton(item.reading || item.japanese, `Speak ${item.reading || item.japanese}`)}</span>
            <span class="tag">${item.pos}</span>
          </div>
          <span class="meta">${item.reading}</span>
        </div>
        <p><strong>Korean:</strong> ${item.korean}</p>
        <p><strong>English:</strong> ${item.english}</p>
        <div class="tag-row">${tags}</div>
      </article>
    `;
  }

  function initDictionary() {
    const data = window.JAPANESE_DATA.dictionary;
    const search = document.getElementById("dict-search");
    const pos = document.getElementById("dict-pos");
    const clear = document.getElementById("dict-clear");
    const results = document.getElementById("dict-results");
    const posValues = Array.from(new Set(data.map(item => item.pos))).sort();

    posValues.forEach(value => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      pos.appendChild(option);
    });

    function render() {
      const query = normalize(search.value);
      const posValue = pos.value;
      const filtered = data.filter(item => {
        const haystack = [
          item.japanese,
          item.reading,
          item.korean,
          item.english,
          item.pos,
          (item.tags || []).join(" ")
        ].join(" ").toLowerCase();
        return (posValue === "all" || item.pos === posValue) && (!query || haystack.includes(query));
      });

      results.innerHTML = filtered.length
        ? filtered.map(renderDictionaryCard).join("")
        : `<div class="empty">No dictionary entries matched that search.</div>`;
      bindSpeakButtons(results);
    }

    search.addEventListener("input", render);
    pos.addEventListener("input", render);
    clear.addEventListener("click", () => {
      search.value = "";
      pos.value = "all";
      render();
    });
    render();
  }

  const particleInfo = {
    "は": "Topic/contrast marker. Korean bridge: 은/는.",
    "が": "Subject/focus marker. Korean bridge: 이/가.",
    "を": "Direct object marker. Korean bridge: 을/를.",
    "に": "Destination, time point, recipient, or existence location. Korean bridge: 에, 에게/한테.",
    "で": "Action location or means. Korean bridge: 에서, (으)로.",
    "へ": "Direction toward. Korean bridge: 에, 쪽으로.",
    "と": "And, with, or quotation. Korean bridge: 와/과, 하고, 라고/다고.",
    "も": "Also/even. Korean bridge: 도.",
    "の": "Possession or noun link. Korean bridge: 의 or modifier structure.",
    "から": "From or because. Korean bridge: 부터, 에서, 니까/어서.",
    "まで": "Until/up to. Korean bridge: 까지.",
    "より": "Than/from. Korean bridge: 보다."
  };

  function findDictionaryMatches(sentence) {
    const plain = stripReading(sentence);
    return window.JAPANESE_DATA.dictionary.filter(entry => plain.includes(entry.japanese));
  }

  function findGrammarMatches(sentence) {
    const plain = stripReading(sentence);
    return window.JAPANESE_DATA.grammar.filter(item => {
      const candidates = [item.pattern, item.kana, ...(item.aliases || [])]
        .filter(Boolean)
        .map(value => value.split("/")[0].replace(/\s/g, ""));
      return candidates.some(pattern => {
        if (pattern.includes("...")) {
          return pattern.split("...").every(part => plain.includes(part));
        }
        return plain.includes(pattern);
      });
    });
  }

  function tokenize(sentence) {
    const plain = stripReading(sentence);
    const particles = Object.keys(particleInfo).sort((a, b) => b.length - a.length);
    const words = findDictionaryMatches(sentence).map(entry => entry.japanese);
    const grammar = findGrammarMatches(sentence).map(item => item.pattern.replace(/\s/g, ""));
    return Array.from(new Set([...words, ...grammar, ...particles.filter(p => plain.includes(p))]));
  }

  function initParser() {
    const input = document.getElementById("sentence-input");
    const parseButton = document.getElementById("parse-button");
    const sampleButton = document.getElementById("sample-button");
    const speakSentenceButton = document.getElementById("speak-sentence-button");
    const tokenLine = document.getElementById("token-line");
    const tokenDetail = document.getElementById("token-detail");
    const results = document.getElementById("parse-results");
    const samples = [
      "明日[あした]までに宿題[しゅくだい]を出[だ]さなければなりません。",
      "雨[あめ]が降[ふ]ったら、行[い]きません。",
      "彼[かれ]は本当[ほんとう]のことを知[し]っているに違[ちが]いありません。",
      "日本語[にほんご]について話[はな]しましょう。"
    ];
    let sampleIndex = 0;

    function parse() {
      const sentence = input.value.trim();
      const plain = stripReading(sentence);
      const dictMatches = findDictionaryMatches(sentence);
      const grammarMatches = findGrammarMatches(sentence);
      const particles = Object.keys(particleInfo).filter(p => plain.includes(p));
      const tokens = tokenize(sentence);

      tokenLine.innerHTML = tokens.length
        ? tokens.map(token => `<button class="token" type="button" data-token="${escapeHtml(token)}">${token}</button>`).join("")
        : `<span class="empty">No known tokens detected yet.</span>`;

      tokenLine.querySelectorAll(".token").forEach(button => {
        button.addEventListener("click", () => {
          tokenLine.querySelectorAll(".token").forEach(item => item.classList.remove("active"));
          button.classList.add("active");
          showTokenDetail(button.dataset.token, dictMatches, grammarMatches);
        });
      });

      const blocks = [];
      blocks.push(`
        <div class="analysis-item">
          <h3>Parsing order</h3>
          <p>Find the final predicate, identify particles, notice omitted context, recognize the sentence ending, use Korean to confirm structure, then check English.</p>
        </div>
      `);

      if (particles.length) {
        blocks.push(`
          <div class="analysis-item">
            <h3>Particles</h3>
            ${particles.map(p => `<p><strong>${p}</strong>: ${particleInfo[p]}</p>`).join("")}
          </div>
        `);
      }

      if (grammarMatches.length) {
        blocks.push(`
          <div class="analysis-item">
            <h3>Grammar patterns</h3>
            ${grammarMatches.map(item => `<p><strong>${item.pattern}</strong> (${item.level}, ${item.function}): ${item.korean}; ${item.english}</p>`).join("")}
          </div>
        `);
      }

      if (dictMatches.length) {
        blocks.push(`
          <div class="analysis-item">
            <h3>Dictionary hits</h3>
            ${dictMatches.map(item => `<p><strong>${item.japanese}</strong> [${item.reading}]: ${item.korean}; ${item.english}</p>`).join("")}
          </div>
        `);
      }

      if (!particles.length && !grammarMatches.length && !dictMatches.length) {
        blocks.push(`<div class="empty">No known particles, grammar patterns, or dictionary entries detected. Add this sentence to the data file later.</div>`);
      }

      results.innerHTML = blocks.join("");
    }

    function showTokenDetail(token, dictMatches, grammarMatches) {
      const dict = dictMatches.find(item => item.japanese === token);
      const grammar = grammarMatches.find(item => {
        const forms = [item.pattern, item.kana, ...(item.aliases || [])].filter(Boolean);
        return forms.includes(token);
      });
      const particle = particleInfo[token];

      if (dict) {
        tokenDetail.innerHTML = `
          <h3 class="jp line-with-action">${renderWordWithReading(dict.japanese, dict.reading)} ${speakButton(dict.reading || dict.japanese, `Speak ${dict.reading || dict.japanese}`)}</h3>
          <p><strong>Korean:</strong> ${dict.korean}</p>
          <p><strong>English:</strong> ${dict.english}</p>
          <p><strong>Part:</strong> ${dict.pos}</p>
        `;
        bindSpeakButtons(tokenDetail);
        return;
      }

      if (grammar) {
        tokenDetail.innerHTML = `
          <h3 class="jp line-with-action">${renderJapanese(grammar.pattern)} ${speakButton(grammar.example.japanese, `Speak ${expandReadings(grammar.example.japanese)}`)}</h3>
          <p><strong>Level/function:</strong> ${grammar.level}, ${grammar.function}</p>
          <p><strong>Korean:</strong> ${grammar.korean}</p>
          <p><strong>English:</strong> ${grammar.english}</p>
          ${grammar.attach ? `<p><strong>Attaches to:</strong> ${grammar.attach}</p>` : ""}
          <p>${grammar.explanation}</p>
        `;
        bindSpeakButtons(tokenDetail);
        return;
      }

      if (particle) {
        tokenDetail.innerHTML = `
          <h3 class="jp line-with-action">${renderJapanese(token)} ${speakButton(token, `Speak ${token}`)}</h3>
          <p>${particle}</p>
        `;
        bindSpeakButtons(tokenDetail);
        return;
      }

      tokenDetail.innerHTML = `
        <h3 class="jp line-with-action">${renderJapanese(token)} ${speakButton(token, `Speak ${token}`)}</h3>
        <p>No detailed entry yet. Add it to the grammar or dictionary data when it becomes useful.</p>
      `;
      bindSpeakButtons(tokenDetail);
    }

    parseButton.addEventListener("click", parse);
    input.addEventListener("input", parse);
    sampleButton.addEventListener("click", () => {
      sampleIndex = (sampleIndex + 1) % samples.length;
      input.value = samples[sampleIndex];
      parse();
    });
    speakSentenceButton.addEventListener("click", () => speakJapanese(input.value));
    parse();
  }

  window.LanguageNotes = {
    initGrammar,
    initDictionary,
    initParser,
    initVoicePicker,
    speakJapanese,
    expandReadings,
    renderJapanese,
    renderWordWithReading
  };
})();
