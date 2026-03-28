const PRESETS = [
  {
    key: "tong-hop",
    label: "Tong hop thong minh",
    description: "Câu hỏi ngắn gọn, phù hợp mở màn nhanh trong lớp học.",
    blue: [
      {
        title: "Khởi động STEM",
        subtitle: "Câu hỏi lớn 3 bước kéo",
        question: "Hành tinh nào gần Mặt Trời nhất trong hệ Mặt Trời?",
        options: ["Sao Kim", "Sao Hỏa", "Sao Thủy", "Trái Đất"],
        answer: 2,
        points: 3,
        explanation: "Sao Thủy là hành tinh gần Mặt Trời nhất."
      },
      {
        title: "Toán nhẩm",
        subtitle: "Tăng tốc 2 bước",
        question: "36 chia 6 bằng bao nhiêu?",
        options: ["5", "6", "7", "8"],
        answer: 1,
        points: 2,
        explanation: "36 chia 6 bằng 6."
      },
      {
        title: "Văn học Việt",
        subtitle: "Chốt hạ 1 bước",
        question: "Ai là tác giả của Truyện Kiều?",
        options: ["Nguyễn Du", "Nam Cao", "Tố Hữu", "Xuân Diệu"],
        answer: 0,
        points: 1,
        explanation: "Truyện Kiều là kiệt tác của Nguyễn Du."
      }
    ],
    red: [
      {
        title: "Khoa học xanh",
        subtitle: "Câu hỏi lớn 3 bước kéo",
        question: "Quá trình cây xanh tự tạo thức ăn nhờ ánh sáng gọi là gì?",
        options: ["Hô hấp", "Quang hợp", "Bay hơi", "Nảy mầm"],
        answer: 1,
        points: 3,
        explanation: "Quang hợp giúp cây tạo chất dinh dưỡng từ ánh sáng."
      },
      {
        title: "Địa lý nhanh",
        subtitle: "Tăng tốc 2 bước",
        question: "Thủ đô của Nhật Bản là thành phố nào?",
        options: ["Kyoto", "Osaka", "Tokyo", "Nagoya"],
        answer: 2,
        points: 2,
        explanation: "Tokyo là thủ đô của Nhật Bản."
      },
      {
        title: "Đổi đơn vị",
        subtitle: "Chốt hạ 1 bước",
        question: "1 mét bằng bao nhiêu centimet?",
        options: ["10", "100", "1000", "12"],
        answer: 1,
        points: 1,
        explanation: "1 mét bằng 100 centimet."
      }
    ]
  },
  {
    key: "su-viet",
    label: "Tieng Viet va lich su",
    description: "Phù hợp cho giờ ôn tập tổng hợp kiến thức xã hội và ngôn ngữ.",
    blue: [
      {
        title: "Dấu câu",
        subtitle: "Câu hỏi lớn 3 bước kéo",
        question: "Dấu câu nào thường dùng để kết thúc một câu hỏi?",
        options: ["Dấu chấm", "Dấu phẩy", "Dấu hỏi", "Dấu hai chấm"],
        answer: 2,
        points: 3,
        explanation: "Câu hỏi thường kết thúc bằng dấu hỏi."
      },
      {
        title: "Nhân vật lịch sử",
        subtitle: "Tăng tốc 2 bước",
        question: "Người đọc bản Tuyên ngôn Độc lập ngày 2/9/1945 là ai?",
        options: ["Võ Nguyên Giáp", "Hồ Chí Minh", "Phạm Văn Đồng", "Trường Chinh"],
        answer: 1,
        points: 2,
        explanation: "Chủ tịch Hồ Chí Minh đã đọc bản Tuyên ngôn Độc lập."
      },
      {
        title: "Từ loại",
        subtitle: "Chốt hạ 1 bước",
        question: "Từ 'đẹp' trong câu 'Bông hoa rất đẹp' thuộc từ loại nào?",
        options: ["Danh từ", "Động từ", "Tính từ", "Đại từ"],
        answer: 2,
        points: 1,
        explanation: "'Đẹp' là tính từ vì dùng để miêu tả đặc điểm."
      }
    ],
    red: [
      {
        title: "Sông núi Việt Nam",
        subtitle: "Câu hỏi lớn 3 bước kéo",
        question: "Chiến thắng Bạch Đằng gắn liền với vị tướng nào?",
        options: ["Ngô Quyền", "Lý Thường Kiệt", "Trần Quốc Tuấn", "Quang Trung"],
        answer: 0,
        points: 3,
        explanation: "Ngô Quyền lập nên chiến thắng Bạch Đằng năm 938."
      },
      {
        title: "Đọc hiểu",
        subtitle: "Tăng tốc 2 bước",
        question: "Từ đồng nghĩa với 'siêng năng' là từ nào?",
        options: ["Lười biếng", "Chăm chỉ", "Vội vàng", "Mệt mỏi"],
        answer: 1,
        points: 2,
        explanation: "'Siêng năng' đồng nghĩa với 'chăm chỉ'."
      },
      {
        title: "Thành ngữ",
        subtitle: "Chốt hạ 1 bước",
        question: "Câu 'Có công mài sắt, có ngày nên kim' khuyên con người điều gì?",
        options: ["Biết tiết kiệm", "Kiên trì", "Đoàn kết", "Khiêm tốn"],
        answer: 1,
        points: 1,
        explanation: "Thành ngữ nhấn mạnh giá trị của sự kiên trì."
      }
    ]
  },
  {
    key: "kham-pha",
    label: "Kham pha khoa hoc",
    description: "Bộ câu hỏi thiên về tự nhiên, công nghệ và quan sát đời sống.",
    blue: [
      {
        title: "Thiên nhiên",
        subtitle: "Câu hỏi lớn 3 bước kéo",
        question: "Con vật nào được gọi là loài có vú lớn nhất thế giới?",
        options: ["Voi châu Phi", "Cá voi xanh", "Hà mã", "Tê giác"],
        answer: 1,
        points: 3,
        explanation: "Cá voi xanh là loài động vật lớn nhất trên Trái Đất."
      },
      {
        title: "Công nghệ",
        subtitle: "Tăng tốc 2 bước",
        question: "Thiết bị nào thường dùng để nhập dữ liệu bằng cách gõ chữ?",
        options: ["Màn hình", "Bàn phím", "Loa", "Máy in"],
        answer: 1,
        points: 2,
        explanation: "Bàn phím dùng để nhập văn bản và ký tự."
      },
      {
        title: "Nước và đời sống",
        subtitle: "Chốt hạ 1 bước",
        question: "Nước sôi ở khoảng bao nhiêu độ C trong điều kiện bình thường?",
        options: ["50", "75", "100", "120"],
        answer: 2,
        points: 1,
        explanation: "Nước sôi ở khoảng 100 độ C."
      }
    ],
    red: [
      {
        title: "Bầu trời",
        subtitle: "Câu hỏi lớn 3 bước kéo",
        question: "Ngôi sao ở trung tâm hệ Mặt Trời là gì?",
        options: ["Mặt Trăng", "Sao Hôm", "Mặt Trời", "Sao Bắc Đẩu"],
        answer: 2,
        points: 3,
        explanation: "Mặt Trời là ngôi sao trung tâm của hệ Mặt Trời."
      },
      {
        title: "Âm thanh",
        subtitle: "Tăng tốc 2 bước",
        question: "Tai người dùng để cảm nhận điều gì?",
        options: ["Ánh sáng", "Mùi hương", "Âm thanh", "Nhiệt độ"],
        answer: 2,
        points: 2,
        explanation: "Tai là cơ quan cảm nhận âm thanh."
      },
      {
        title: "Bảo vệ môi trường",
        subtitle: "Chốt hạ 1 bước",
        question: "Hành động nào dưới đây giúp giảm rác thải nhựa?",
        options: ["Dùng nhiều túi nylon", "Vứt chai nhựa xuống sông", "Dùng bình nước cá nhân", "Đốt rác ngoài trời"],
        answer: 2,
        points: 1,
        explanation: "Dùng bình nước cá nhân giúp hạn chế đồ nhựa dùng một lần."
      }
    ]
  }
];

const MAX_PULL = 8;

const state = {
  blueName: "Đội Xanh",
  redName: "Đội Đỏ",
  duration: 60,
  presetKey: PRESETS[0].key,
  timerRemaining: 60,
  scores: { blue: 0, red: 0 },
  pull: 0,
  currentTurn: "blue",
  cards: [],
  activeCardId: null,
  isRunning: false,
  isFinished: false,
  isMuted: false,
  timerId: null,
  toastId: null,
  modalTimeoutId: null,
  hasStarted: false,
  lastStatus: "Trả lời đúng để kéo dây về phía mình."
};

const dom = {
  blueNameLabel: document.querySelector("#blueNameLabel"),
  redNameLabel: document.querySelector("#redNameLabel"),
  blueScoreLabel: document.querySelector("#blueScoreLabel"),
  redScoreLabel: document.querySelector("#redScoreLabel"),
  timerLabel: document.querySelector("#timerLabel"),
  bluePanelTitle: document.querySelector("#bluePanelTitle"),
  redPanelTitle: document.querySelector("#redPanelTitle"),
  blueTurnChip: document.querySelector("#blueTurnChip"),
  redTurnChip: document.querySelector("#redTurnChip"),
  turnLabel: document.querySelector("#turnLabel"),
  resultLabel: document.querySelector("#resultLabel"),
  pullMeta: document.querySelector("#pullMeta"),
  cardsMeta: document.querySelector("#cardsMeta"),
  pullMeterIndicator: document.querySelector("#pullMeterIndicator"),
  ropeCluster: document.querySelector("#ropeCluster"),
  muteBtn: document.querySelector("#muteBtn"),
  fullscreenBtn: document.querySelector("#fullscreenBtn"),
  exitBtn: document.querySelector("#exitBtn"),
  blueNameInput: document.querySelector("#blueNameInput"),
  redNameInput: document.querySelector("#redNameInput"),
  durationInput: document.querySelector("#durationInput"),
  presetSelect: document.querySelector("#presetSelect"),
  presetPreview: document.querySelector("#presetPreview"),
  setupOverlay: document.querySelector("#setupOverlay"),
  startGameBtn: document.querySelector("#startGameBtn"),
  continueBtn: document.querySelector("#continueBtn"),
  questionModal: document.querySelector("#questionModal"),
  questionTeamLabel: document.querySelector("#questionTeamLabel"),
  questionTitle: document.querySelector("#questionTitle"),
  questionText: document.querySelector("#questionText"),
  answerList: document.querySelector("#answerList"),
  questionNote: document.querySelector("#questionNote"),
  closeQuestionBtn: document.querySelector("#closeQuestionBtn"),
  resultOverlay: document.querySelector("#resultOverlay"),
  winnerHeadline: document.querySelector("#winnerHeadline"),
  winnerSummary: document.querySelector("#winnerSummary"),
  blueResultScore: document.querySelector("#blueResultScore"),
  redResultScore: document.querySelector("#redResultScore"),
  resultPullLabel: document.querySelector("#resultPullLabel"),
  playAgainBtn: document.querySelector("#playAgainBtn"),
  backToSetupBtn: document.querySelector("#backToSetupBtn"),
  toast: document.querySelector("#toast"),
  cards: [...document.querySelectorAll("[data-card-slot]")]
};

let audioContext;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function otherTeam(team) {
  return team === "blue" ? "red" : "blue";
}

function getTeamName(team) {
  return team === "blue" ? state.blueName : state.redName;
}

function getPreset() {
  return PRESETS.find((preset) => preset.key === state.presetKey) || PRESETS[0];
}

function normalizeName(value, fallback) {
  const cleaned = value.trim().replace(/\s+/g, " ");
  return cleaned || fallback;
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(totalSeconds % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function buildCards() {
  const preset = getPreset();
  return ["blue", "red"].flatMap((team) =>
    preset[team].map((card, index) => ({
      ...card,
      id: `${team}-${index}`,
      team,
      used: false,
      selected: null,
      wasCorrect: null
    }))
  );
}

function syncInputsFromState() {
  dom.blueNameInput.value = state.blueName;
  dom.redNameInput.value = state.redName;
  dom.durationInput.value = state.duration;
  dom.presetSelect.value = state.presetKey;
}

function populatePresets() {
  dom.presetSelect.innerHTML = PRESETS.map(
    (preset) => `<option value="${escapeHtml(preset.key)}">${escapeHtml(preset.label)}</option>`
  ).join("");
}

function updatePresetPreview() {
  state.presetKey = dom.presetSelect.value || PRESETS[0].key;
  const preset = getPreset();
  const blueTitles = preset.blue.map((card) => card.title).join(" • ");
  const redTitles = preset.red.map((card) => card.title).join(" • ");

  dom.presetPreview.innerHTML = `
    <strong>${escapeHtml(preset.label)}</strong>
    <p>${escapeHtml(preset.description)}</p>
    <p><strong>Đội xanh:</strong> ${escapeHtml(blueTitles)}</p>
    <p><strong>Đội đỏ:</strong> ${escapeHtml(redTitles)}</p>
  `;
}

function getCard(cardId) {
  return state.cards.find((card) => card.id === cardId);
}

function showToast(message) {
  if (state.toastId) {
    window.clearTimeout(state.toastId);
  }

  dom.toast.textContent = message;
  dom.toast.classList.add("show");

  state.toastId = window.setTimeout(() => {
    dom.toast.classList.remove("show");
  }, 2200);
}

function safeResumeAudio() {
  if (!audioContext) {
    const AudioContextRef = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextRef) {
      return null;
    }
    audioContext = new AudioContextRef();
  }

  if (audioContext.state === "suspended") {
    audioContext.resume().catch(() => {});
  }

  return audioContext;
}

function playTone(frequency, duration, type = "sine", gainValue = 0.028, startDelay = 0) {
  if (state.isMuted) {
    return;
  }

  const ctx = safeResumeAudio();
  if (!ctx) {
    return;
  }

  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();
  const startTime = ctx.currentTime + startDelay;

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, startTime);
  gain.gain.setValueAtTime(0.0001, startTime);
  gain.gain.exponentialRampToValueAtTime(gainValue, startTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

  oscillator.connect(gain);
  gain.connect(ctx.destination);
  oscillator.start(startTime);
  oscillator.stop(startTime + duration + 0.02);
}

function playFeedbackSound(kind) {
  if (kind === "correct") {
    playTone(620, 0.12, "triangle", 0.03, 0);
    playTone(780, 0.14, "triangle", 0.03, 0.12);
    return;
  }

  if (kind === "wrong") {
    playTone(260, 0.16, "sawtooth", 0.025, 0);
    playTone(190, 0.2, "sawtooth", 0.025, 0.12);
    return;
  }

  if (kind === "finish") {
    playTone(520, 0.14, "triangle", 0.03, 0);
    playTone(680, 0.14, "triangle", 0.03, 0.16);
    playTone(860, 0.18, "triangle", 0.03, 0.32);
  }
}

function updateTopLabels() {
  dom.blueNameLabel.textContent = state.blueName;
  dom.redNameLabel.textContent = state.redName;
  dom.bluePanelTitle.textContent = state.blueName;
  dom.redPanelTitle.textContent = state.redName;
  dom.blueScoreLabel.textContent = state.scores.blue;
  dom.redScoreLabel.textContent = state.scores.red;
  dom.timerLabel.textContent = formatTime(state.timerRemaining);
}

function updateTurnIndicators() {
  const blueActive = state.currentTurn === "blue" && state.isRunning && !state.isFinished;
  const redActive = state.currentTurn === "red" && state.isRunning && !state.isFinished;

  dom.blueTurnChip.textContent = blueActive ? "Đang kéo" : "Chờ lượt";
  dom.redTurnChip.textContent = redActive ? "Đang kéo" : "Chờ lượt";

  dom.blueTurnChip.className = `turn-chip${blueActive ? " active-blue" : ""}`;
  dom.redTurnChip.className = `turn-chip${redActive ? " active-red" : ""}`;

  if (state.isFinished) {
    dom.turnLabel.textContent = "Trận đấu đã kết thúc";
    dom.turnLabel.className = "status-badge";
  } else if (blueActive) {
    dom.turnLabel.textContent = `Lượt ${state.blueName}`;
    dom.turnLabel.className = "status-badge active-blue";
  } else if (redActive) {
    dom.turnLabel.textContent = `Lượt ${state.redName}`;
    dom.turnLabel.className = "status-badge active-red";
  } else {
    dom.turnLabel.textContent = "Sẵn sàng bắt đầu";
    dom.turnLabel.className = "status-badge";
  }

  dom.resultLabel.textContent = state.lastStatus;
}

function renderCards() {
  dom.cards.forEach((button) => {
    const cardId = button.dataset.cardSlot;
    const card = getCard(cardId);
    if (!card) {
      return;
    }

    const isTurn = card.team === state.currentTurn;
    const isLocked = Boolean(state.activeCardId && state.activeCardId !== card.id);
    const disabled = !state.isRunning || state.isFinished || card.used || !isTurn || Boolean(state.activeCardId);

    button.disabled = disabled;
    button.className = "question-card";
    if (cardId.endsWith("-0")) {
      button.classList.add("question-card-large");
    }
    if (card.used) {
      button.classList.add("is-used", card.wasCorrect ? "is-correct" : "is-wrong");
    } else if (!isTurn || isLocked) {
      button.classList.add("is-locked");
    }

    const footerText = card.used
      ? card.wasCorrect
        ? `+${card.points} điểm và ${card.points} bước kéo`
        : "Sai rồi, đối thủ được kéo 1 bước"
      : isTurn
        ? "Nhấn để mở câu hỏi"
        : `Chờ lượt ${getTeamName(card.team)}`;

    button.innerHTML = `
      <span class="card-badge">${card.points} bước</span>
      <span class="card-title">${escapeHtml(card.title)}</span>
      <span class="card-subtitle">${escapeHtml(card.used ? card.explanation : card.subtitle)}</span>
      <span class="card-footer">${escapeHtml(footerText)}</span>
    `;
  });
}

function updateArena() {
  const remainingCards = state.cards.filter((card) => !card.used).length;
  const ratio = clamp(state.pull / MAX_PULL, -1, 1);
  let pullText = "Thế kéo cân bằng";

  if (state.pull < 0) {
    pullText = `${state.blueName} đang chiếm ưu thế`;
  } else if (state.pull > 0) {
    pullText = `${state.redName} đang chiếm ưu thế`;
  }

  dom.pullMeta.textContent = pullText;
  dom.cardsMeta.textContent = `${remainingCards} ô chưa mở`;
  dom.pullMeterIndicator.style.left = `${50 + ratio * 45}%`;
  dom.ropeCluster.style.setProperty("--pull-offset", `${ratio * 155}px`);
}

function renderQuestionModal() {
  const card = state.activeCardId ? getCard(state.activeCardId) : null;

  if (!card) {
    dom.questionModal.hidden = true;
    return;
  }

  dom.questionModal.hidden = false;
  dom.questionTeamLabel.textContent = getTeamName(card.team);
  dom.questionTitle.textContent = `${card.title} • ${card.points} bước kéo`;
  dom.questionText.textContent = card.question;

  dom.answerList.innerHTML = card.options
    .map((option, index) => {
      const isCorrect = card.answer === index;
      const isSelected = card.selected === index;
      const classes = ["answer-btn"];

      if (card.used && isCorrect) {
        classes.push("correct");
      }
      if (card.used && isSelected && !isCorrect) {
        classes.push("wrong");
      }

      return `
        <button class="${classes.join(" ")}" type="button" data-answer-index="${index}" ${card.used ? "disabled" : ""}>
          <span class="answer-key">${String.fromCharCode(65 + index)}</span>
          <span>${escapeHtml(option)}</span>
        </button>
      `;
    })
    .join("");

  dom.questionNote.textContent = card.used
    ? card.wasCorrect
      ? `${card.explanation} ${getTeamName(card.team)} ghi được ${card.points} điểm.`
      : `${card.explanation} ${getTeamName(otherTeam(card.team))} kéo lại 1 bước.`
    : "Chọn một đáp án để khóa câu trả lời.";
}

function renderResultOverlay(summary) {
  if (!summary) {
    dom.resultOverlay.hidden = true;
    return;
  }

  dom.resultOverlay.hidden = false;
  dom.winnerHeadline.textContent = summary.headline;
  dom.winnerSummary.textContent = summary.body;
  dom.blueResultScore.textContent = state.scores.blue;
  dom.redResultScore.textContent = state.scores.red;
  dom.resultPullLabel.textContent = summary.pullLabel;
}

function renderSetupState() {
  const showContinue = state.hasStarted && !state.isFinished && !state.isRunning;
  dom.continueBtn.hidden = !showContinue;
}

function renderAll() {
  updateTopLabels();
  updateTurnIndicators();
  renderCards();
  updateArena();
  renderQuestionModal();
  renderSetupState();
}

function stopTimer() {
  if (state.timerId) {
    window.clearInterval(state.timerId);
    state.timerId = null;
  }
}

function clearModalTimeout() {
  if (state.modalTimeoutId) {
    window.clearTimeout(state.modalTimeoutId);
    state.modalTimeoutId = null;
  }
}

function startTimer() {
  stopTimer();

  if (!state.isRunning || state.isFinished) {
    return;
  }

  state.timerId = window.setInterval(() => {
    state.timerRemaining -= 1;
    dom.timerLabel.textContent = formatTime(Math.max(0, state.timerRemaining));

    if (state.timerRemaining <= 0) {
      finishGame("time");
    }
  }, 1000);
}

function openSetupOverlay() {
  state.isRunning = false;
  stopTimer();
  dom.setupOverlay.hidden = false;
  renderSetupState();
}

function closeSetupOverlay() {
  dom.setupOverlay.hidden = true;
}

function closeQuestionModal() {
  clearModalTimeout();
  state.activeCardId = null;
  renderAll();
}

function openQuestion(cardId) {
  const card = getCard(cardId);
  if (!card || card.used || state.isFinished || !state.isRunning || card.team !== state.currentTurn) {
    return;
  }

  state.activeCardId = card.id;
  renderAll();
}

function finishGame(reason, forcedWinner = null) {
  if (state.isFinished) {
    return;
  }

  state.isRunning = false;
  state.isFinished = true;
  stopTimer();
  clearModalTimeout();
  closeQuestionModal();

  let winner = forcedWinner;
  let headline = "Hai đội hòa nhau";

  if (!winner) {
    if (state.scores.blue > state.scores.red) {
      winner = "blue";
    } else if (state.scores.red > state.scores.blue) {
      winner = "red";
    } else if (state.pull < 0) {
      winner = "blue";
    } else if (state.pull > 0) {
      winner = "red";
    }
  }

  if (winner) {
    headline = `${getTeamName(winner)} chiến thắng`;
  }

  const reasonText =
    reason === "pull"
      ? "đã kéo dây áp đảo"
      : reason === "cards"
        ? "đã giữ lợi thế sau khi mở hết ô câu hỏi"
        : "đã giữ phong độ tốt hơn khi hết giờ";

  const body = winner
    ? `${getTeamName(winner)} ${reasonText}. Tỉ số chung cuộc là ${state.scores.blue} - ${state.scores.red}.`
    : `Hai đội bất phân thắng bại với tỉ số ${state.scores.blue} - ${state.scores.red}.`;

  const pullLabel = state.pull < 0 ? `Nghiêng về ${state.blueName}` : state.pull > 0 ? `Nghiêng về ${state.redName}` : "Cân bằng";

  state.lastStatus = body;
  renderAll();
  renderResultOverlay({
    headline,
    body,
    pullLabel
  });

  playFeedbackSound("finish");
  showToast(winner ? `${getTeamName(winner)} thắng rồi!` : "Hai đội hòa nhau.");
}

function handleAnswer(cardId, selectedIndex) {
  const card = getCard(cardId);
  if (!card || card.used || state.isFinished) {
    return;
  }

  card.used = true;
  card.selected = selectedIndex;
  card.wasCorrect = card.answer === selectedIndex;

  if (card.wasCorrect) {
    state.scores[card.team] += card.points;
    state.pull = clamp(state.pull + (card.team === "blue" ? -card.points : card.points), -MAX_PULL, MAX_PULL);
    state.lastStatus = `${getTeamName(card.team)} trả lời đúng và kéo ${card.points} bước.`;
    playFeedbackSound("correct");
  } else {
    const opponent = otherTeam(card.team);
    state.pull = clamp(state.pull + (card.team === "blue" ? 1 : -1), -MAX_PULL, MAX_PULL);
    state.lastStatus = `${getTeamName(card.team)} chưa đúng, ${getTeamName(opponent)} kéo lại 1 bước.`;
    playFeedbackSound("wrong");
  }

  state.currentTurn = otherTeam(card.team);
  renderAll();

  const forcedWinner = state.pull <= -MAX_PULL ? "blue" : state.pull >= MAX_PULL ? "red" : null;
  if (forcedWinner) {
    finishGame("pull", forcedWinner);
    return;
  }

  if (state.cards.every((item) => item.used)) {
    finishGame("cards");
    return;
  }

  clearModalTimeout();
  state.modalTimeoutId = window.setTimeout(() => {
    closeQuestionModal();
  }, 1700);
}

function applySettingsFromInputs() {
  state.blueName = normalizeName(dom.blueNameInput.value, "Đội Xanh");
  state.redName = normalizeName(dom.redNameInput.value, "Đội Đỏ");
  state.duration = clamp(Number(dom.durationInput.value) || 60, 30, 600);
  state.presetKey = dom.presetSelect.value || PRESETS[0].key;
}

function startNewGame() {
  clearModalTimeout();
  stopTimer();
  applySettingsFromInputs();

  state.timerRemaining = state.duration;
  state.scores = { blue: 0, red: 0 };
  state.pull = 0;
  state.currentTurn = "blue";
  state.cards = buildCards();
  state.activeCardId = null;
  state.isRunning = true;
  state.isFinished = false;
  state.hasStarted = true;
  state.lastStatus = `${state.blueName} mở câu hỏi trước tiên.`;

  dom.resultOverlay.hidden = true;
  closeSetupOverlay();
  renderAll();
  startTimer();
  showToast(`Bắt đầu trận mới với bộ câu hỏi ${getPreset().label}.`);
}

function continueGame() {
  if (!state.hasStarted || state.isFinished) {
    return;
  }

  state.isRunning = true;
  closeSetupOverlay();
  renderAll();
  startTimer();
  showToast("Trận đấu tiếp tục.");
}

function toggleMute() {
  state.isMuted = !state.isMuted;
  dom.muteBtn.textContent = state.isMuted ? "Bật Âm" : "Tắt Âm";
  showToast(state.isMuted ? "Đã tắt âm thanh." : "Đã bật âm thanh.");
}

async function toggleFullscreen() {
  try {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  } catch (error) {
    showToast("Trình duyệt này không hỗ trợ toàn màn hình.");
  }
}

function updateFullscreenLabel() {
  dom.fullscreenBtn.textContent = document.fullscreenElement ? "Thu Nhỏ" : "Toàn Màn Hình";
}

function updateLiveNames() {
  state.blueName = normalizeName(dom.blueNameInput.value, "Đội Xanh");
  state.redName = normalizeName(dom.redNameInput.value, "Đội Đỏ");
  renderAll();
}

function bindEvents() {
  dom.cards.forEach((button) => {
    button.addEventListener("click", () => openQuestion(button.dataset.cardSlot));
  });

  dom.answerList.addEventListener("click", (event) => {
    const answerButton = event.target.closest("[data-answer-index]");
    if (!answerButton || !state.activeCardId) {
      return;
    }

    handleAnswer(state.activeCardId, Number(answerButton.dataset.answerIndex));
  });

  dom.closeQuestionBtn.addEventListener("click", closeQuestionModal);
  dom.questionModal.addEventListener("click", (event) => {
    if (event.target instanceof HTMLElement && event.target.dataset.close === "question") {
      closeQuestionModal();
    }
  });

  dom.startGameBtn.addEventListener("click", startNewGame);
  dom.playAgainBtn.addEventListener("click", startNewGame);
  dom.continueBtn.addEventListener("click", continueGame);

  dom.backToSetupBtn.addEventListener("click", () => {
    dom.resultOverlay.hidden = true;
    openSetupOverlay();
  });

  dom.exitBtn.addEventListener("click", () => {
    if (state.isRunning && !state.isFinished) {
      state.lastStatus = "Trận đấu đang tạm dừng.";
      renderAll();
    }
    openSetupOverlay();
  });

  dom.muteBtn.addEventListener("click", toggleMute);
  dom.fullscreenBtn.addEventListener("click", toggleFullscreen);
  document.addEventListener("fullscreenchange", updateFullscreenLabel);

  dom.presetSelect.addEventListener("change", updatePresetPreview);
  dom.blueNameInput.addEventListener("input", updateLiveNames);
  dom.redNameInput.addEventListener("input", updateLiveNames);
}

function init() {
  populatePresets();
  syncInputsFromState();
  updatePresetPreview();
  state.cards = buildCards();
  bindEvents();
  renderAll();
  renderResultOverlay(null);
  updateFullscreenLabel();
  openSetupOverlay();
}

init();
