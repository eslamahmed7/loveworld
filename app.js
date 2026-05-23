const LOVE_START_DATE = new Date("2023-07-21T00:00:00+03:00");
const BIRTHDAYS = {
  Mariam: { ar: "مريم", date: "2004-09-04" },
  Mahmoud: { ar: "محمود", date: "2003-07-04" }
};

const LOVE_MESSAGES = [
  "لكل دنيتي مريم ❤️ وجودك بيخلي كل يوم أحن من اللي قبله.",
  "يا مريم، ضحكتك بالنسبالي أحلى موسيقى في الدنيا.",
  "أنا بحبك بطريقة تخلي التفاصيل الصغيرة تبقى عيد.",
  "كل مرة بشوفك فيها بحس إن قلبي رجع بيته.",
  "مريم، إنتي الحتة الحلوة في كل يوم تقيل.",
  "لو الحب بيتقاس بالوقت، أنا عايز عمر تاني أحبك فيه.",
  "إنتي مش ذكرى حلوة، إنتي سبب إن الذكريات تبقى حلوة.",
  "كل ثانية معاكي بتتحط في قلبي كنجمة صغيرة.",
  "بحبك في هدوءك، في كلامك، وفي كل حاجة بين السطور.",
  "مريم، أنا ممتن لوجودك أكتر مما الكلام يقدر يقول.",
  "إنتي أقرب دعوة اتحققتلي.",
  "كل خروجة معاكي بتبقى فيلمي المفضل.",
  "لما بتضحكي، العالم بيهدا جوايا.",
  "حبي ليكي مش لحظة، ده مكان ثابت جوا قلبي.",
  "إنتي بداية اليوم الحلو ونهايته.",
  "بحب إننا إحنا، بكل بساطة وبكل جناننا.",
  "يا مريم، إيدك في إيدي تكفي الدنيا كلها.",
  "أنا شايف فيكي البيت، الصحاب، والحبيبة.",
  "كل يوم بعد 21-07-2023 بقى ليه معنى مختلف.",
  "إنتي الحكاية اللي نفسي أفضل أكتبها طول العمر.",
  "بحب صورتنا وإحنا بنضحك على حاجات محدش فاهمها غيرنا.",
  "مريم، إنتي حبيبة قلبي وكل دنيتي بجد.",
  "في الزحمة، إنتي هدوئي الوحيد.",
  "أنا بحب التفاصيل اللي بتبان عادية منك وتبقى معجزة عندي.",
  "قلبي بيطمن لما يسمع اسمك.",
  "كل مكان روحناه ساب جزء منك جواه.",
  "إنتي أحلى صدفة وأجمل اختيار.",
  "بحبك في الأيام السهلة والصعبة واللي لسه جاية.",
  "معاكي الوقت مش بيعدي، بيتحفظ.",
  "إنتي سبب إن كلمة بكرة تبقى مطمّنة.",
  "مريم، لو قلبي له عنوان، هيبقى اسمك.",
  "أكتر حاجة بحبها إنك إنتي، من غير مجهود.",
  "ذكرياتنا بتلمع في دماغي زي شريط VHS دافي.",
  "كل صورة لينا عندي مش ملف، دي حتة من عمري.",
  "إنتي الأمان لما الدنيا تعمل دوشة.",
  "بحب حبنا لأنه شبهنا، صادق وحقيقي.",
  "أنا محظوظ بيكي بطريقة تخوف من حلاوتها.",
  "إنتي الرسالة اللي بفتحها كل يوم وأبتسم.",
  "لو اليوم وحش، اسمك كفاية ينوّره.",
  "مريم، وجودك بيخليني أحسن من غير ما تطلبي.",
  "بحب إن عيني بتدور عليكي قبل أي حاجة.",
  "كل وعد بينا عندي نجمة متعلقة في السما.",
  "إنتي مش بس حبيبتي، إنتي صاحبتي المفضلة.",
  "معاكي حتى السكوت ليه معنى.",
  "كل مرة أقول بحبك بحسها قليلة عليكي.",
  "إنتي أجمل عادة في يومي.",
  "أنا عايز نفضل نفتكر ونصور ونضحك ونكبر سوا.",
  "يا مريم، حبك عامل زي النور الهادي في آخر اليوم.",
  "إنتي كل دنيتي، والجزء اللي بخاف عليه أكتر من نفسي.",
  "من محمود لمريم: بحبك النهارده، وبكرة، وكل يوم ييجي."
];
const MEEN_QUESTIONS = [
  "مين فينا بيزعل أسرع؟", "مين فينا بيغير أكتر؟", "مين فينا بياكل أكتر؟", 
  "مين فينا كسول أكتر؟", "مين فينا بيصالح التاني الأول؟", "مين فينا رومانسي أكتر؟", 
  "مين فينا بيحب ينام كتير؟", "مين فينا بيصرف فلوس أكتر؟", "مين فينا دمه خفيف أكتر؟", 
  "مين فينا بياخد وقت أطول عشان يجهز؟", "مين فينا بينسى المواعيد؟", "مين فينا مجنون أكتر؟", 
  "مين فينا عنيد أكتر؟", "مين فينا بيبدأ الكلام دايما؟", "مين فينا مدمن موبايل أكتر؟", 
  "مين فينا بيقفل في الكلام أسرع وهو زعلان؟", "مين فينا بيطنش الرسايل أكتر؟", 
  "مين فينا حنين أكتر؟", "مين فينا صوته بيعلى في الخناق؟", "مين فينا بيعرف يراضي التاني أحسن؟"
];

const GAWEBNY_QUESTIONS = [
  "إيه أكتر حاجة بتعجبك فيا؟", "إيه أول حاجة لفتت انتباهك ليا؟", "إيه أكتر موقف بينا مش ممكن تنساه؟", 
  "لو هتوصفني في كلمة واحدة هتبقى إيه؟", "إيه أكتر حاجة مجنونة نفسك نعملها سوا؟", 
  "إمتى حسيت إنك بتحبني بجد؟", "إيه أكتر مكان بتحب نروحه سوا؟", 
  "لو هتوصف علاقتنا في أغنية هتختار أغنية إيه؟", "إيه أكتر رسالة بعتهالك وفرحتك؟", 
  "لو زعلت منك، إيه أحسن طريقة أصالحك بيها؟", "إيه أكتر حاجة بتخاف عليها في علاقتنا؟", 
  "إيه أكتر يوم حسيت فيه إنك أسعد إنسان عشاني؟", "إيه الحاجة اللي بعملها وبتطمنك دايما؟", 
  "لو افترقنا يوم (لا قدر الله)، إيه أول حاجة هتوحشك؟", "تفتكر إيه السر اللي مخلي علاقتنا قوية؟", 
  "نفسك تقولي إيه ومكسوف أو متردد؟", "إيه الموقف اللي حصل بينا وخلاك تتأكد إني الشخص الصح؟"
];
const LAW_KHYAROUK_QUESTIONS = [
  "لو خيروك: نعيش في شاليه عالبحر طول عمرنا ولا فيلا في مدينة زحمة؟",
  "لو خيروك: نسافر المالديف أسبوع ولا نلف أوروبا شهر؟",
  "لو خيروك: ناكل بيتزا كل يوم ولا سوشي كل يوم؟",
  "لو خيروك: نمسح كل صورنا ونحتفظ بالذكريات في دماغنا بس ولا نحتفظ بصورة واحدة بس؟",
  "لو خيروك: نقعد يوم كامل من غير موبايلات ولا يوم كامل من غير كلام؟",
  "لو خيروك: مين يطبخ طول العمر؟ أنا ولا إنت؟",
  "لو خيروك: تلبس نفس الطقم كل يوم ولا ماتقدرش تختار لبسك وأنا اللي أختارلك؟",
  "لو خيروك: نرجع بالزمن لأول يوم اتقابلنا فيه ولا نسرع الزمن ليوم فرحنا؟",
  "لو خيروك: نخرج خروجة مجنونة ومغامرة ولا سهرة رومانسية هادية عالبحر؟",
  "لو خيروك: تسمعني بغني طول اليوم ولا أنا اللي أسمعك بتغني؟",
  "لو خيروك: نبقى بنقرا أفكار بعض ولا نعرف نشوف مستقبلنا سوا؟",
  "لو خيروك: نتفرج على فيلم رعب وإحنا خايفين ولا فيلم رومانسي وإحنا بنعيط؟"
];

const CONFIG = {
  SUPABASE_URL: "",
  SUPABASE_ANON_KEY: "",
  MEDIA_BUCKET: "love-media",
  MUSIC_BUCKET: "love-music",
  GOOGLE_MAPS_API_KEY: "",
  CLOUDINARY_CLOUD_NAME: "",
  CLOUDINARY_UPLOAD_PRESET: "",
  ...(window.LOVE_APP_CONFIG || {})
};

const SUPABASE_READY = Boolean(
  CONFIG.SUPABASE_URL &&
  CONFIG.SUPABASE_ANON_KEY &&
  window.supabase &&
  !CONFIG.SUPABASE_URL.includes("your-project")
);

const sb = SUPABASE_READY
  ? window.supabase.createClient(CONFIG.SUPABASE_URL, CONFIG.SUPABASE_ANON_KEY, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
      realtime: { params: { eventsPerSecond: 10 } }
    })
  : null;

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const state = {
  booted: false,
  view: "home",
  user: null,
  profile: null,
  profiles: [],
  messages: [],
  reactions: [],
  voice_messages: [],
  memories: [],
  media: [],
  locations: [],
  songs: [],
  playlists: [],
  time_capsules: [],
  bucket_lists: [],
  love_messages: [],
  star_memories: [],
  presence: [],
  onlineUsers: {},
  typingBy: null,
  aiLog: [],
  recording: null,
  currentSong: null,
  countersTimer: null,
  refreshTimer: null,
  channels: []
};

const els = {
  loader: $("#loader"),
  authScreen: $("#authScreen"),
  appShell: $("#appShell"),
  loginForm: $("#loginForm"),
  authMessage: $("#authMessage"),
  demoHint: $("#demoHint"),
  viewRoot: $("#viewRoot"),
  bottomNav: $("#bottomNav"),
  pageTitle: $("#pageTitle"),
  userChip: $("#userChip"),
  presenceStrip: $("#presenceStrip"),
  signOutBtn: $("#signOutBtn"),
  modal: $("#modal"),
  modalTitle: $("#modalTitle"),
  modalBody: $("#modalBody"),
  audioPlayer: $("#audioPlayer"),
  playerTrack: $("#playerTrack"),
  playerArtist: $("#playerArtist"),
  volumeSlider: $("#volumeSlider")
};

const navItems = [
  ["home", "الرئيسية", "heart"],
  ["memories", "الذكريات", "images"],
  ["timeline", "الزمن", "calendar-days"],
  ["games", "الألعاب", "gamepad-2"],
  ["chat", "الشات", "message-circle-heart"],
  ["capsules", "الكبسولات", "lock-keyhole"],
  ["music", "المزيكا", "music-2"],
  ["bucket", "الأحلام", "list-checks"],
  ["ai", "AI", "sparkles"],
  ["stats", "الإحصائيات", "bar-chart-3"]
];

document.addEventListener("DOMContentLoaded", boot);

async function boot() {
  createAmbientVisuals();
  renderNav();
  wireEvents();
  els.demoHint.classList.toggle("hidden", SUPABASE_READY);
  await delay(650);

  if (SUPABASE_READY) {
    const { data } = await sb.auth.getSession();
    if (data.session?.user) {
      await enterApp(data.session.user);
    } else {
      showAuth();
    }
  } else {
    const sessionUserId = localStorage.getItem("love-world-session-user-id");
    const sessionUser = localDB().users.find((user) => user.id === sessionUserId);
    if (sessionUser) await enterApp(sessionUser);
    else showAuth();
  }

  els.loader.classList.add("is-done");
  setTimeout(() => els.loader.classList.add("hidden"), 520);
  state.booted = true;
}

function wireEvents() {
  els.loginForm.addEventListener("submit", handleLogin);
  els.signOutBtn.addEventListener("click", signOut);
  els.bottomNav.addEventListener("click", handleNavClick);
  els.appShell.addEventListener("click", handleActionClick);
  els.appShell.addEventListener("submit", handleSubmit);
  els.appShell.addEventListener("input", handleInput);
  els.appShell.addEventListener("change", handleChange);
  els.modal.addEventListener("click", (event) => {
    if (event.target === els.modal) closeModal();
    else handleActionClick(event);
  });
  els.modal.addEventListener("submit", handleSubmit);
  els.modal.addEventListener("input", handleInput);
  els.modal.addEventListener("change", handleChange);
  els.volumeSlider.addEventListener("input", () => {
    els.audioPlayer.volume = Number(els.volumeSlider.value);
  });
  els.audioPlayer.addEventListener("ended", playNextSong);
  document.addEventListener("visibilitychange", () => {
    if (state.user) updatePresence(document.visibilityState === "visible");
  });
  window.addEventListener("beforeunload", () => {
    if (state.user) localPresence(false);
  });
}

function createAmbientVisuals() {
  const stars = $("#starsLayer");
  const hearts = $("#heartsLayer");
  const starCount = Math.min(70, Math.max(34, Math.floor(window.innerWidth / 18)));
  const heartCount = Math.min(18, Math.max(9, Math.floor(window.innerWidth / 70)));

  for (let i = 0; i < starCount; i += 1) {
    const star = document.createElement("span");
    star.className = "star-dot";
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDuration = `${12 + Math.random() * 18}s`;
    star.style.animationDelay = `${Math.random() * -20}s`;
    stars.appendChild(star);
  }

  for (let i = 0; i < heartCount; i += 1) {
    const heart = document.createElement("span");
    heart.className = "heart-float";
    heart.textContent = i % 3 === 0 ? "❤️" : i % 3 === 1 ? "💕" : "💗";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${14 + Math.random() * 18}s`;
    heart.style.animationDelay = `${Math.random() * -26}s`;
    heart.style.fontSize = `${14 + Math.random() * 14}px`;
    hearts.appendChild(heart);
  }
}

function showAuth() {
  els.authScreen.classList.remove("hidden");
  els.appShell.classList.add("hidden");
  iconRefresh();
}

async function enterApp(authUser) {
  state.user = authUser;
  window.currentLoveUser = authUser;
  await ensureProfile();
  await refreshAll();
  await ensureLoveMessages();
  await refreshAll();
  els.authScreen.classList.add("hidden");
  els.appShell.classList.remove("hidden");
  renderChrome();
  renderView("home");
  startCounters();
  checkCelebrations(); // <-- السطر اللي هيشغل المفاجأة
  await setupRealtime();
  await updatePresence(true);
}

async function ensureProfile() {
  if (SUPABASE_READY) {
    const { data, error } = await sb.from("users").select("*").eq("id", state.user.id).maybeSingle();
    if (error) throwFriendly(error, "مش قادر أقرأ بروفايل المستخدم من Supabase.");
    if (!data) {
      const guessedName = guessPersonFromEmail(state.user.email);
      const { data: inserted, error: insertError } = await sb
        .from("users")
        .insert({
          id: state.user.id,
          email: state.user.email,
          name: guessedName.en,
          display_name: guessedName.ar,
          last_seen: new Date().toISOString()
        })
        .select()
        .single();
      if (insertError) throwFriendly(insertError, "اعمل صفين في جدول users لمحمود ومريم الأول.");
      state.profile = inserted;
    } else {
      state.profile = data;
    }
    return;
  }

  state.profile = localDB().users.find((user) => user.id === state.user.id);
}

async function handleLogin(event) {
  event.preventDefault();
  const email = $("#emailInput").value.trim();
  const password = $("#passwordInput").value;
  els.authMessage.textContent = "ثواني بنفتح الشريط...";

  try {
    if (SUPABASE_READY) {
      const { data, error } = await sb.auth.signInWithPassword({ email, password });
      if (error) throw error;
      await enterApp(data.user);
    } else {
      const localUser = localLogin(email, password);
      await enterApp(localUser);
    }
    els.authMessage.textContent = "";
  } catch (error) {
    els.authMessage.textContent = friendlyError(error);
  }
}

async function signOut() {
  await updatePresence(false);
  clearRealtime();
  state.user = null;
  state.profile = null;
  window.currentLoveUser = null;
  if (SUPABASE_READY) await sb.auth.signOut();
  else localStorage.removeItem("love-world-session-user-id");
  if (state.countersTimer) clearInterval(state.countersTimer);
  showAuth();
}

async function refreshAll() {
  if (SUPABASE_READY) {
    await loadSupabaseData();
  } else {
    loadLocalData();
  }
  await hydrateStorageUrls();
}

async function loadSupabaseData() {
  const tables = [
    sb.from("users").select("*").order("name"),
    sb.from("messages").select("*").order("created_at", { ascending: true }),
    sb.from("reactions").select("*"),
    sb.from("voice_messages").select("*"),
    sb.from("memories").select("*").order("date", { ascending: false }),
    sb.from("media").select("*").order("created_at", { ascending: false }),
    sb.from("locations").select("*").order("created_at", { ascending: false }),
    sb.from("songs").select("*").order("created_at", { ascending: false }),
    sb.from("playlists").select("*").order("created_at", { ascending: false }),
    sb
      .from("time_capsules")
      .select("id,user_id,creator_name,title,open_date,is_opened,media_type,created_at,updated_at")
      .order("open_date", { ascending: true }),
    sb.from("bucket_lists").select("*").order("target_date", { ascending: true }),
    sb.from("love_messages").select("*").order("created_at", { ascending: true }),
    sb.from("star_memories").select("*"),
    sb.from("presence").select("*")
  ];

  const results = await Promise.all(tables);
  const firstError = results.find((result) => result.error)?.error;
  if (firstError) throwFriendly(firstError, "في مشكلة في قراءة الداتا من Supabase.");

  [
    state.profiles,
    state.messages,
    state.reactions,
    state.voice_messages,
    state.memories,
    state.media,
    state.locations,
    state.songs,
    state.playlists,
    state.time_capsules,
    state.bucket_lists,
    state.love_messages,
    state.star_memories,
    state.presence
  ] = results.map((result) => result.data || []);
}

function loadLocalData() {
  const db = localDB();
  state.profiles = [...db.users];
  state.messages = [...db.messages].sort(byDateAsc);
  state.reactions = [...db.reactions];
  state.voice_messages = [...(db.voice_messages || [])];
  state.memories = [...db.memories].sort(byMemoryDateDesc);
  state.media = [...db.media];
  state.locations = [...db.locations];
  state.songs = [...db.songs];
  state.playlists = [...db.playlists];
  state.time_capsules = [...db.time_capsules].map(({ password, message, media_url, media_path, ...safe }) => safe);
  state.bucket_lists = [...db.bucket_lists];
  state.love_messages = [...db.love_messages];
  state.star_memories = [...db.star_memories];
  state.presence = [...db.presence];
}

async function ensureLoveMessages() {
  if (state.love_messages.length >= 50) return;
  const existing = new Set(state.love_messages.map((item) => item.body));
  const missing = LOVE_MESSAGES.filter((message) => !existing.has(message));
  if (!missing.length) return;

  if (SUPABASE_READY) {
    await sb.from("love_messages").upsert(
      missing.map((body) => ({
        body,
        user_id: state.user.id,
        favorite_by: []
      })),
      { onConflict: "body" }
    );
  } else {
    const db = localDB();
    db.love_messages.push(
      ...missing.map((body) => ({
        id: uid(),
        user_id: state.user.id,
        body,
        favorite_by: [],
        created_at: new Date().toISOString()
      }))
    );
    saveLocalDB(db);
  }
}

async function hydrateStorageUrls() {
  if (!SUPABASE_READY) return;
  const signed = new Map();
  const sign = async (bucket, path) => {
    if (!bucket || !path) return "";
    const key = `${bucket}/${path}`;
    if (signed.has(key)) return signed.get(key);
    const { data, error } = await sb.storage.from(bucket).createSignedUrl(path, 60 * 60 * 8);
    const url = error ? "" : data.signedUrl;
    signed.set(key, url);
    return url;
  };

  await Promise.all([
    ...state.media.map(async (item) => {
      if (item.provider === "supabase" && item.path) item.signed_url = await sign(item.bucket || CONFIG.MEDIA_BUCKET, item.path);
    }),
    ...state.messages.map(async (item) => {
      if (item.voice_path) item.voice_url = await sign(item.voice_bucket || CONFIG.MEDIA_BUCKET, item.voice_path);
    }),
    ...state.songs.map(async (item) => {
      if (item.audio_path) item.audio_url = await sign(item.bucket || CONFIG.MUSIC_BUCKET, item.audio_path);
    })
  ]);
}

function renderNav() {
  els.bottomNav.innerHTML = navItems
    .map(([id, label, icon]) => `
      <button class="nav-btn ${state.view === id ? "active" : ""}" type="button" data-view="${id}" title="${label}">
        <i data-lucide="${icon}"></i>
        <span>${label}</span>
      </button>
    `)
    .join("");
  iconRefresh();
}

function renderChrome() {
  const display = displayName(state.profile);
  els.userChip.innerHTML = `<span class="avatar">${display.slice(0, 1)}</span><span>${display}</span>`;
  renderPresence();
}

function renderPresence() {
  const users = state.profiles.length ? state.profiles : localDB().users;
  const onlineIds = new Set(Object.keys(state.onlineUsers));
  const html = users
    .filter((user) => ["Mahmoud", "Mariam"].includes(user.name) || ["محمود", "مريم"].includes(user.display_name))
    .map((user) => {
      const record = state.presence.find((item) => item.user_id === user.id);
      const online = onlineIds.has(user.id) || record?.is_online;
      const subtitle = online ? "أونلاين" : record?.last_seen ? `آخر ظهور ${timeAgo(record.last_seen)}` : "أوفلاين";
      return `
        <span class="presence-pill">
          <span class="presence-dot ${online ? "online" : ""}"></span>
          <strong>${escapeHTML(displayName(user))}</strong>
          <span>${subtitle}</span>
        </span>
      `;
    })
    .join("");
  els.presenceStrip.innerHTML = html || `<span class="presence-pill">مستنيين محمود ومريم يدخلوا</span>`;
}

function renderView(view = state.view) {
  state.view = view;
  const nav = navItems.find((item) => item[0] === view);
  els.pageTitle.textContent = nav?.[1] || "الرئيسية";
  renderNav();

  const renderers = {
    home: renderHome,
    memories: renderMemories,
    timeline: renderTimeline,
    games: renderGames,
    chat: renderChat,
    capsules: renderCapsules,
    music: renderMusic,
    bucket: renderBucket,
    ai: renderAI,
    stats: renderStats
  };

  els.viewRoot.innerHTML = renderers[view]?.() || renderHome();
  iconRefresh();

  if (view === "chat") {
    markSeenMessages();
    requestAnimationFrame(scrollChatToBottom);
  }
}

function renderHome() {
  const relation = relationCounter();
  const mariamBirthday = birthdayCountdown("Mariam");
  const mahmoudBirthday = birthdayCountdown("Mahmoud");
  const daily = dailyLoveMessage();
  const onThisDay = getOnThisDay();
  const starred = getStarMemories().slice(0, 3);

  return `
    <section class="surface">
      <div class="section-head">
        <h3>عداد حبنا من 21-07-2023</h3>
        <button class="secondary-btn" type="button" data-action="random-memory">
          <i data-lucide="wand-sparkles"></i>
          فكرني بحاجة حلوة ❤️
        </button>
      </div>
      <div class="grid three" id="relationshipCounter">
        ${metric(relation.years, "سنة")}
        ${metric(relation.months, "شهر")}
        ${metric(relation.days, "يوم")}
        ${metric(relation.hours, "ساعة")}
        ${metric(relation.minutes, "دقيقة")}
        ${metric(relation.seconds, "ثانية")}
      </div>
    </section>

    <section class="surface">
      <div class="love-message">
        <p class="eyebrow">لكل دنيتي مريم ❤️</p>
        <blockquote>${escapeHTML(daily.body)}</blockquote>
        <button class="chip-btn" type="button" data-action="toggle-love-favorite" data-id="${daily.id}">
          ${isLoveMessageFavorite(daily) ? "متشالة في المفضلة" : "حفظ الرسالة"}
        </button>
      </div>
    </section>

    <section class="grid two">
      <div class="surface">
        <h3>عيد ميلاد مريم</h3>
        <div class="grid three" id="mariamCountdown">
          ${metric(mariamBirthday.months, "شهر")}
          ${metric(mariamBirthday.days, "يوم")}
          ${metric(`${pad(mariamBirthday.hours)}:${pad(mariamBirthday.minutes)}:${pad(mariamBirthday.seconds)}`, "لـ 04-09")}
        </div>
      </div>
      <div class="surface">
        <h3>عيد ميلاد محمود</h3>
        <div class="grid three" id="mahmoudCountdown">
          ${metric(mahmoudBirthday.months, "شهر")}
          ${metric(mahmoudBirthday.days, "يوم")}
          ${metric(`${pad(mahmoudBirthday.hours)}:${pad(mahmoudBirthday.minutes)}:${pad(mahmoudBirthday.seconds)}`, "لـ 04-07")}
        </div>
      </div>
    </section>

    <section class="surface">
      <div class="section-head">
        <h3>⭐ ذكريات متنجمة</h3>
        <button class="ghost-btn" type="button" data-action="switch-view" data-view="memories">كل الذكريات</button>
      </div>
      <div class="card-grid">
        ${starred.length ? starred.map(renderMemoryCard).join("") : empty("لسه مفيش ذكريات متنجمة. أول نجمة مستنياكم.")}
      </div>
    </section>

    <section class="surface">
      <div class="section-head">
        <h3>في نفس اليوم ده</h3>
        <span class="tag">${formatDate(new Date())}</span>
      </div>
      <div class="card-grid">
        ${onThisDay.length ? onThisDay.slice(0, 3).map(renderMemoryCard).join("") : empty("مفيش ذكرى من نفس اليوم في سنين فاتت.")}
      </div>
    </section>
  `;
}

function renderMemories() {
  const query = (sessionStorage.getItem("memory-query") || "").trim().toLowerCase();
  const year = sessionStorage.getItem("memory-year") || "";
  const who = sessionStorage.getItem("memory-who") || "";
  const type = sessionStorage.getItem("memory-type") || "";
  const filtered = filterMemories({ query, year, who, type });
  const years = [...new Set(state.memories.map((item) => new Date(item.date).getFullYear()).filter(Boolean))].sort((a, b) => b - a);

  return `
    <section class="surface">
      <div class="section-head">
        <h3>ألبوم الذكريات</h3>
        <button class="primary-btn" type="button" data-action="open-memory-form">
          <i data-lucide="plus"></i>
          ذكرى جديدة
        </button>
      </div>
      <div class="toolbar">
        <input type="search" data-filter="memory-query" value="${escapeAttr(query)}" placeholder="دور على ذكرى، مكان، وصف..." />
        <select data-filter="memory-year">
          <option value="">كل السنين</option>
          ${years.map((item) => `<option value="${item}" ${String(item) === year ? "selected" : ""}>${item}</option>`).join("")}
        </select>
        <select data-filter="memory-who">
          <option value="">محمود ومريم</option>
          <option value="Mahmoud" ${who === "Mahmoud" ? "selected" : ""}>محمود</option>
          <option value="Mariam" ${who === "Mariam" ? "selected" : ""}>مريم</option>
        </select>
        <select data-filter="memory-type">
          <option value="">كل الميديا</option>
          <option value="photo" ${type === "photo" ? "selected" : ""}>صور</option>
          <option value="video" ${type === "video" ? "selected" : ""}>فيديو</option>
          <option value="voice" ${type === "voice" ? "selected" : ""}>فويس</option>
        </select>
        <button class="secondary-btn" type="button" data-action="random-memory">
          <i data-lucide="shuffle"></i>
          عشوائي
        </button>
      </div>
      <div class="card-grid">
        ${filtered.length ? filtered.map(renderMemoryCard).join("") : empty("مفيش ذكريات مطابقة للبحث.")}
      </div>
    </section>
  `;
}

function renderTimeline() {
  const year = sessionStorage.getItem("timeline-year") || "";
  const month = sessionStorage.getItem("timeline-month") || "";
  const who = sessionStorage.getItem("timeline-who") || "";
  const type = sessionStorage.getItem("timeline-type") || "";
  const years = [...new Set(state.memories.map((item) => new Date(item.date).getFullYear()).filter(Boolean))].sort((a, b) => b - a);
  const items = filterMemories({ year, month, who, type }).sort((a, b) => new Date(b.date) - new Date(a.date));

  return `
    <section class="surface">
      <div class="section-head"><h3>الخط الزمني</h3><span class="tag">${items.length} ذكرى</span></div>
      <div class="filters">
        <select data-filter="timeline-year">
          <option value="">كل السنين</option>
          ${years.map((item) => `<option value="${item}" ${String(item) === year ? "selected" : ""}>${item}</option>`).join("")}
        </select>
        <select data-filter="timeline-month">
          <option value="">كل الشهور</option>
          ${Array.from({ length: 12 }, (_, i) => i + 1).map((item) => `<option value="${item}" ${String(item) === month ? "selected" : ""}>${arabicMonth(item)}</option>`).join("")}
        </select>
        <select data-filter="timeline-who">
          <option value="">محمود ومريم</option>
          <option value="Mahmoud" ${who === "Mahmoud" ? "selected" : ""}>محمود</option>
          <option value="Mariam" ${who === "Mariam" ? "selected" : ""}>مريم</option>
        </select>
        <select data-filter="timeline-type">
          <option value="">كل الميديا</option>
          <option value="photo" ${type === "photo" ? "selected" : ""}>صور</option>
          <option value="video" ${type === "video" ? "selected" : ""}>فيديو</option>
          <option value="voice" ${type === "voice" ? "selected" : ""}>فويس</option>
        </select>
      </div>
    </section>
    <section class="surface">
      <div class="timeline">
        ${items.length ? items.map(renderTimelineItem).join("") : empty("الخط الزمني فاضي للفلتر ده.")}
      </div>
    </section>
  `;
}

function renderGames() {
  if (state.activeGame) {
    const game = state.activeGame;
    const gameName = game.id === "meen" ? "لعبة مين فينا 🤷‍♂️🤷‍♀️" : (game.id === "gawebny" ? "لعبة جاوبني 💬" : "لعبة لو خيروك ⚖️");
    const amIAsker = game.asker === state.user.id;
    const amIAnswerer = game.answerer === state.user.id;

    let roleText = "";
    if (game.id === "meen") {
      roleText = `السؤال ده ليكوا إنتوا الاتنين.. اختاروا مين فيكوا!`;
    } else {
      if (amIAsker) roleText = `دورك تسأل يا ${escapeHTML(displayName(state.profile))}!`;
      else if (amIAnswerer) roleText = `دورك تجاوب يا ${escapeHTML(displayName(state.profile))}!`;
      else roleText = `${escapeHTML(displayPerson(game.askerName))} بيسأل ${escapeHTML(displayPerson(game.answererName))}`;
    }

    return `
      <section class="surface" style="text-align: center; padding: 40px 20px;">
        <div class="section-head" style="justify-content: center; flex-direction: column;">
          <span class="tag hot">${gameName}</span>
          <h3 style="margin-top: 10px; color: var(--gold);">${roleText}</h3>
        </div>
        <div class="metric" style="margin: 30px 0; min-height: 200px;">
          <strong style="font-size: 2rem; line-height: 1.6; text-wrap: balance;">${escapeHTML(game.question)}</strong>
        </div>
        <div class="actions" style="justify-content: center; gap: 15px;">
          <button class="primary-btn" type="button" data-action="next-game-turn" style="font-size: 1.1rem; padding: 12px 24px;">
            <i data-lucide="dices"></i> السؤال اللي بعده
          </button>
          <button class="secondary-btn" type="button" data-action="end-game">
            <i data-lucide="x"></i> نقفل اللعبة
          </button>
        </div>
      </section>
    `;
  }

  return `
    <section class="surface">
      <div class="section-head">
        <h3>ألعابنا سوا 🎮</h3>
      </div>
      <div class="grid three">
        <button class="surface memory-card" style="text-align:center; padding: 30px; cursor: pointer; transition: 0.2s;" type="button" data-action="start-game" data-id="meen">
          <span style="font-size: 4rem; display: block; margin-bottom: 10px;">🤷‍♂️</span>
          <h3 style="margin: 15px 0;">مين فينا؟</h3>
          <p class="muted">أسئلة عشوائية وتشوفوا مين فيكوا بينطبق عليه الكلام أكتر!</p>
        </button>
        <button class="surface memory-card" style="text-align:center; padding: 30px; cursor: pointer; transition: 0.2s;" type="button" data-action="start-game" data-id="gawebny">
          <span style="font-size: 4rem; display: block; margin-bottom: 10px;">💬</span>
          <h3 style="margin: 15px 0;">جاوبني بصراحة</h3>
          <p class="muted">كل واحد بييجي عليه الدور يسأل التاني سؤال ولازم يجاوب من غير كدب!</p>
        </button>
        <button class="surface memory-card" style="text-align:center; padding: 30px; cursor: pointer; transition: 0.2s;" type="button" data-action="start-game" data-id="law">
          <span style="font-size: 4rem; display: block; margin-bottom: 10px;">⚖️</span>
          <h3 style="margin: 15px 0;">لو خيروك</h3>
          <p class="muted">أسئلة محيرة واختيارات صعبة.. تختار ده ولا ده؟</p>
        </button>
      </div>
    </section>
  `;
}

function renderChat() {
  const otherName = otherPersonName();
  const typing = state.typingBy && state.typingBy !== displayName(state.profile)
    ? `<div class="typing">${escapeHTML(state.typingBy)} بتكتب...</div>`
    : `<div class="typing"></div>`;

  return `
    <section class="surface chat-shell">
      <div class="chat-head">
        <div>
          <h3>الشات</h3>
          <p class="muted">${otherName} ${isOtherOnline() ? "أونلاين دلوقتي" : "مش أونلاين حاليا"}</p>
        </div>
        <button class="secondary-btn" type="button" data-action="refresh-chat">
          <i data-lucide="refresh-cw"></i>
          تحديث
        </button>
      </div>
      <div id="messagesList" class="messages-list">
        ${state.messages.length ? state.messages.map(renderMessage).join("") : empty("ابدأوا أول رسالة في الشات.")}
      </div>
      ${typing}
      <form class="chat-input" id="chatForm">
        <button class="icon-btn" type="button" data-action="voice-record" title="تسجيل فويس">
          <i data-lucide="${state.recording ? "square" : "mic"}"></i>
        </button>
        <input id="chatText" name="text" autocomplete="off" placeholder="اكتب رسالة..." />
        <button class="icon-btn" type="submit" title="إرسال">
          <i data-lucide="send-horizontal"></i>
        </button>
        <button class="icon-btn" type="button" data-action="random-love-message" title="رسالة حب">
          <i data-lucide="heart"></i>
        </button>
      </form>
    </section>
  `;
}

function renderCapsules() {
  return `
    <section class="surface">
      <div class="section-head">
        <h3>كبسولات الزمن</h3>
        <button class="primary-btn" type="button" data-action="open-capsule-form">
          <i data-lucide="package-plus"></i>
          كبسولة جديدة
        </button>
      </div>
      <div class="capsule-list">
        ${state.time_capsules.length ? state.time_capsules.map(renderCapsule).join("") : empty("اكتبوا رسالة للمستقبل واقفلوها بتاريخ وباسورد.")}
      </div>
    </section>
  `;
}

function renderMusic() {
  const playlistOptions = state.playlists.map((item) => `<option value="${item.id}">${escapeHTML(item.name)}</option>`).join("");
  return `
    <section class="surface">
      <div class="section-head">
        <h3>مزيكا الخلفية</h3>
        <button class="primary-btn" type="button" data-action="open-song-form">
          <i data-lucide="upload"></i>
          ارفع أغنية
        </button>
      </div>
      <form class="form-grid" id="playlistForm">
        <label><span>اسم بلاي ليست</span><input name="name" placeholder="playlist الحب" required /></label>
        <button class="secondary-btn" type="submit"><i data-lucide="list-music"></i> إضافة بلاي ليست</button>
      </form>
      <div class="tag-row" style="margin-top:12px">
        <span class="tag hot">Persistent Player</span>
        <span class="tag">${state.songs.length} أغنية</span>
        <span class="tag">${state.playlists.length || 1} بلاي ليست</span>
      </div>
    </section>
    <section class="surface">
      <div class="section-head">
        <h3>الأغاني</h3>
        <select data-filter="music-playlist">
          <option value="">كل الأغاني</option>
          ${playlistOptions}
        </select>
      </div>
      <div class="song-list">
        ${filteredSongs().length ? filteredSongs().map(renderSong).join("") : empty("ارفعوا أول أغنية رومانسية هنا.")}
      </div>
    </section>
  `;
}

function renderBucket() {
  return `
    <section class="surface">
      <div class="section-head">
        <h3>ليستة الأحلام</h3>
        <button class="primary-btn" type="button" data-action="open-bucket-form">
          <i data-lucide="plus"></i>
          هدف جديد
        </button>
      </div>
      <div class="bucket-list">
        ${state.bucket_lists.length ? state.bucket_lists.map(renderBucketItem).join("") : empty("اكتبوا أول حلم عايزين تحققوه سوا.")}
      </div>
    </section>
  `;
}

function renderAI() {
  const starters = [
    "وريني ذكريات 2025",
    "مريم رفعت كام ذكرى؟",
    "إمتى أول خروجة؟",
    "كام يوم بقالنا مع بعض؟"
  ];

  return `
    <section class="surface ai-chat">
      <div class="section-head">
        <h3>مساعد علاقتنا</h3>
        <span class="tag hot">Supabase Search</span>
      </div>
      <div class="tag-row">
        ${starters.map((text) => `<button class="chip-btn" type="button" data-action="ask-ai" data-query="${escapeAttr(text)}">${text}</button>`).join("")}
      </div>
      <div class="ai-log" id="aiLog">
        ${state.aiLog.length ? state.aiLog.map(renderAiBubble).join("") : `<div class="ai-bubble bot">اسألني عن الذكريات، الأماكن، الصور، السنين، أو عداد الحب.</div>`}
      </div>
      <form class="ai-input" id="aiForm">
        <input name="query" placeholder="اكتب سؤالك هنا..." autocomplete="off" required />
        <button class="primary-btn" type="submit"><i data-lucide="send"></i></button>
      </form>
    </section>
  `;
}

function renderStats() {
  const stats = computeStats();
  return `
    <section class="surface">
      <div class="section-head">
        <h3>إحصائيات عالمنا</h3>
        <button class="secondary-btn" type="button" data-action="refresh-all"><i data-lucide="refresh-cw"></i> تحديث</button>
      </div>
      <div class="stat-grid">
        ${Object.entries(stats).map(([label, value]) => `
          <div class="stat-item">
            <div class="metric"><strong>${escapeHTML(String(value))}</strong><span>${escapeHTML(label)}</span></div>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function renderMemoryCard(memory) {
  // بنجيب كل الميديا بتاعت الذكرى عشان نحسب عددهم
  const allMedia = mediaForMemory(memory.id);
  const media = allMedia.slice(0, 4);
  const extraCount = allMedia.length > 4 ? allMedia.length - 4 : 0;
  
  const isStar = memory.is_star || state.star_memories.some((item) => item.memory_id === memory.id);
  const classes = `memory-card ${isStar ? "star-card" : ""}`;
  const isMyMemory = memory.user_id === state.user.id;

  let actionButtons = `
    <button class="chip-btn" type="button" data-action="share-memory" data-id="${memory.id}"><i data-lucide="send"></i> واتساب</button>
  `;
  
  if (isMyMemory) {
    actionButtons = `
      <button class="chip-btn" type="button" data-action="toggle-memory-star" data-id="${memory.id}">${isStar ? "شيل النجمة" : "⭐ Star Memory"}</button>
      <button class="chip-btn" type="button" data-action="toggle-memory-favorite" data-id="${memory.id}">${memory.is_favorite ? "شيل المفضلة" : "مفضلة"}</button>
      <button class="chip-btn" type="button" data-action="share-memory" data-id="${memory.id}"><i data-lucide="send"></i> واتساب</button>
      <button class="chip-btn" type="button" data-action="open-memory-form" data-id="${memory.id}"><i data-lucide="pencil"></i> تعديل</button>
      <button class="chip-btn" type="button" data-action="delete-memory" data-id="${memory.id}"><i data-lucide="trash-2"></i> حذف</button>
    `;
  }

  return `
    <article class="${classes}" data-memory-id="${memory.id}">
      ${renderMemoryMedia(media, memory.id, extraCount)}
      <div class="card-body">
        <div class="card-title-row">
          <h4>${escapeHTML(memory.title)}</h4>
          ${isStar ? `<span class="tag hot">⭐ Star</span>` : ""}
        </div>
        <p class="muted">${escapeHTML(memory.description || "")}</p>
        <div class="tag-row">
          <span class="tag" style="color: var(--pink); border-color: var(--pink);"><i data-lucide="user"></i> رفعها: ${escapeHTML(displayPerson(memory.uploader_name))}</span>
          <span class="tag"><i data-lucide="calendar"></i>${formatDate(memory.date)}</span>
          ${memory.location_text ? `<span class="tag"><i data-lucide="map-pin"></i>${escapeHTML(memory.location_text)}</span>` : ""}
          ${memory.is_favorite ? `<span class="tag hot">مفضلة</span>` : ""}
        </div>
        <div class="actions">
          ${actionButtons}
        </div>
      </div>
    </article>
  `;
}

function renderMemoryMedia(items, memoryId = null, extraCount = 0) {
  if (!items.length) {
    return `
      <div class="memory-media single">
        <div class="audio-tile">
          <span class="tag hot">ذكرى محفوظة بدون ميديا</span>
        </div>
      </div>
    `;
  }
  
  // لو باعتين ID الذكرى، بنخلي المربع كله قابل للضغط عشان يفتح الألبوم
  const clickAttr = memoryId ? `style="cursor: pointer;" data-action="open-memory-gallery" data-id="${memoryId}" title="اضغط لفتح الألبوم"` : "";
  
  return `
    <div class="memory-media ${items.length === 1 ? "single" : ""}" ${clickAttr}>
      ${items.map((item, index) => {
        const url = item.signed_url || item.url || item.media_url || "";
        let content = "";
        
        // بنقفل تفاعل الفيديوهات من برا عشان الضغطة تفتح الألبوم مش تشغل الفيديو وهو صغير
        if (item.type === "video") content = `<video src="${escapeAttr(url)}" muted playsinline style="pointer-events: none;"></video>`;
        else if (item.type === "voice" || item.type === "audio") content = `<div class="audio-tile" style="pointer-events: none;"><audio src="${escapeAttr(url)}" controls></audio></div>`;
        else content = `<img src="${escapeAttr(url)}" alt="${escapeAttr(item.title || "ذكرى")}" loading="lazy" />`;
        
        // لو دي رابع صورة وفي صور تانية مستخبية، بنحط طبقة شفافة مكتوب عليها الرقم
        if (index === 3 && extraCount > 0) {
          return `<div style="position: relative; overflow: hidden; height: 100%;">
                    ${content.replace('<img', '<img style="height: 100%; width: 100%;"').replace('<video', '<video style="height: 100%; width: 100%;"')}
                    <div style="position: absolute; inset: 0; background: rgba(0,0,0,0.65); display: flex; align-items: center; justify-content: center; font-size: 2.2rem; font-weight: bold; color: #fff;">+${extraCount}</div>
                  </div>`;
        }
        return content;
      }).join("")}
    </div>
  `;
}

function renderTimelineItem(memory) {
  const media = mediaForMemory(memory.id);
  return `
    <article class="timeline-item">
      <div class="item-row">
        <h4>${escapeHTML(memory.title)}</h4>
        <span class="tag">${formatDate(memory.date)}</span>
      </div>
      <p class="muted">${escapeHTML(memory.description || "")}</p>
      <div class="tag-row">
        <span class="tag">${escapeHTML(displayPerson(memory.uploader_name))}</span>
        <span class="tag">${media.length} ميديا</span>
        ${memory.location_text ? `<span class="tag">${escapeHTML(memory.location_text)}</span>` : ""}
      </div>
    </article>
  `;
}

function renderMessage(message) {
  const sender = normalizePerson(message.sender_name);
  const side = sender === "Mahmoud" ? "me mahmoud" : "other mariam";
  const reactions = reactionsForMessage(message.id);
  const isMine = message.user_id === state.user.id;
  const ticks = isMine ? `<span class="ticks ${message.is_seen ? "seen" : ""}">${message.is_seen ? "✔✔" : "✔"}</span>` : "";
  return `
    <article class="message-row ${side}" data-id="${message.id}">
      <div class="message-name">${escapeHTML(displayPerson(message.sender_name))}</div>
      ${message.type === "voice"
        ? `<audio class="audio-message" src="${escapeAttr(message.voice_url || "")}" controls></audio>`
        : `<div class="message-text">${escapeHTML(message.text || "")}</div>`}
      <div class="reaction-row">
        ${["❤️", "😂", "😢", "🔥"].map((emoji) => `
          <button type="button" data-action="react-message" data-id="${message.id}" data-emoji="${emoji}">
            ${emoji} ${reactions.filter((item) => item.emoji === emoji).length || ""}
          </button>
        `).join("")}
        ${reactions.length ? `<span class="reaction-pill">${reactionSummary(reactions)}</span>` : ""}
      </div>
      <div class="message-meta"><span>${formatTime(message.created_at)}</span>${ticks}</div>
    </article>
  `;
}

function renderCapsule(capsule) {
  const canOpen = new Date(capsule.open_date) <= new Date();
  const locked = !canOpen || !capsule.is_opened;
  return `
    <article class="capsule-item ${locked ? "locked" : ""}">
      <div class="item-row">
        <h4>${escapeHTML(capsule.title)}</h4>
        <span class="tag ${canOpen ? "hot" : ""}">${canOpen ? "جاهزة تتفتح" : `تتفتح ${formatDate(capsule.open_date)}`}</span>
      </div>
      <p class="muted">من ${escapeHTML(displayPerson(capsule.creator_name))} · ${capsule.media_type || "رسالة"}</p>
      <div class="actions">
        <button class="secondary-btn" type="button" data-action="open-capsule" data-id="${capsule.id}" ${canOpen ? "" : "disabled"}>
          <i data-lucide="unlock"></i>
          افتح بالباسورد
        </button>
        <button class="chip-btn" type="button" data-action="delete-capsule" data-id="${capsule.id}">
          <i data-lucide="trash-2"></i>
          حذف
        </button>
      </div>
    </article>
  `;
}

function renderSong(song) {
  const playlist = state.playlists.find((item) => item.id === song.playlist_id);
  
  // بنشوف لو الأغنية دي بتاعت اليوزر اللي فاتح دلوقتي ولا لأ
  const isMySong = song.user_id === state.user.id;
  
  // زرار التشغيل بيظهر للكل عادي
  let actionButtons = `
    <button class="icon-btn" type="button" data-action="play-song" data-id="${song.id}" title="تشغيل">
      <i data-lucide="play"></i>
    </button>
  `;
  
  // زراير التعديل والمسح بتظهر لصاحب الأغنية بس
  if (isMySong) {
    actionButtons += `
      <button class="icon-btn" type="button" data-action="edit-song" data-id="${song.id}" title="تعديل">
        <i data-lucide="pencil"></i>
      </button>
      <button class="icon-btn" type="button" data-action="delete-song" data-id="${song.id}" title="مسح">
        <i data-lucide="trash-2"></i>
      </button>
    `;
  }

  return `
    <article class="song-item">
      <div class="item-row">
        <div>
          <strong>${escapeHTML(song.title)}</strong>
          <p class="muted">${escapeHTML(song.artist || "محمود ومريم")} · ${escapeHTML(playlist?.name || "playlist الحب")}</p>
        </div>
        <div class="actions">
          ${actionButtons}
        </div>
      </div>
      <audio src="${escapeAttr(song.audio_url || "")}" controls></audio>
    </article>
  `;
}

function renderBucketItem(item) {
  const complete = item.status === "completed" || Number(item.progress) >= 100;
  return `
    <article class="bucket-item">
      <div class="item-row">
        <h4>${escapeHTML(item.title)}</h4>
        <span class="tag ${complete ? "hot" : ""}">${complete ? "اتحقق" : "لسه بنحاول"}</span>
      </div>
      <p class="muted">${escapeHTML(item.description || "")}</p>
      <div class="progress-bar"><span style="width:${Math.min(100, Number(item.progress) || 0)}%"></span></div>
      <div class="tag-row">
        <span class="tag">${Number(item.progress) || 0}%</span>
        ${item.target_date ? `<span class="tag">${formatDate(item.target_date)}</span>` : ""}
        <span class="tag">${escapeHTML(displayPerson(item.creator_name))}</span>
      </div>
      <div class="actions">
        <button class="chip-btn" type="button" data-action="open-bucket-form" data-id="${item.id}"><i data-lucide="pencil"></i> تعديل</button>
        <button class="chip-btn" type="button" data-action="complete-bucket" data-id="${item.id}"><i data-lucide="check"></i> خلصناه</button>
        <button class="chip-btn" type="button" data-action="delete-bucket" data-id="${item.id}"><i data-lucide="trash-2"></i> حذف</button>
      </div>
    </article>
  `;
}

function renderAiBubble(item) {
  return `<div class="ai-bubble ${item.role}">${escapeHTML(item.text)}</div>`;
}

function metric(value, label) {
  return `<div class="metric"><strong>${escapeHTML(String(value))}</strong><span>${escapeHTML(label)}</span></div>`;
}

function empty(text) {
  return `<div class="empty-state">${escapeHTML(text)}</div>`;
}

async function handleNavClick(event) {
  const button = event.target.closest("[data-view]");
  if (!button) return;
  renderView(button.dataset.view);
}

async function handleActionClick(event) {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const { action, id, view, emoji, query } = button.dataset;
  if (action === "record-memory-voice") await toggleMemoryVoiceRecord();
  if (action === "start-game") startGame(id);
  if (action === "next-game-turn") nextGameTurn();
  if (action === "end-game") endGame();
  if (action === "search-memory-map") await searchMemoryMap();
  if (action === "switch-view") renderView(view);
  if (action === "close-modal") closeModal();
  if (action === "open-memory-form") openMemoryForm(id);
  if (action === "delete-memory") await deleteMemory(id);
  if (action === "toggle-memory-star") await toggleMemoryStar(id);
  if (action === "toggle-memory-favorite") await toggleMemoryFavorite(id);
  if (action === "share-memory") shareMemory(id);
  if (action === "open-memory-gallery") openMemoryGallery(id);
  if (action === "random-memory") openRandomMemory();
  if (action === "toggle-love-favorite") await toggleLoveFavorite(id);
  if (action === "open-location-form") openLocationForm();
  if (action === "select-location") selectLocation(id);
  if (action === "voice-record") await toggleVoiceRecording();
  if (action === "react-message") await toggleReaction(id, emoji);
  if (action === "refresh-chat") await refreshAndRender("chat");
  if (action === "random-love-message") fillChatWithLove();
  if (action === "open-capsule-form") openCapsuleForm();
  if (action === "record-capsule-voice") await toggleCapsuleVoiceRecord();
  if (action === "open-capsule") openCapsuleUnlock(id);
  if (action === "delete-capsule") openCapsuleDelete(id);
  if (action === "open-song-form") openSongForm();
  if (action === "edit-song") openSongForm(id);
  if (action === "delete-song") await deleteSong(id);
  if (action === "play-song") playSong(id);
  if (action === "music-toggle") toggleMusic();
  if (action === "music-mute") toggleMute();
  if (action === "open-bucket-form") openBucketForm(id);
  if (action === "complete-bucket") await completeBucket(id);
  if (action === "delete-bucket") await deleteRowAndRefresh("bucket_lists", id, "bucket");
  if (action === "ask-ai") await askAI(query);
  if (action === "refresh-all") await refreshAndRender(state.view);
}

async function handleSubmit(event) {
  const form = event.target;
  if (form.id === "chatForm") {
    event.preventDefault();
    await sendChatMessage(new FormData(form).get("text"));
    form.reset();
  }
  if (form.id === "memoryForm") {
    event.preventDefault();
    await submitMemory(form);
  }
  if (form.id === "locationForm") {
    event.preventDefault();
    await submitLocation(form);
  }
  if (form.id === "capsuleForm") {
    event.preventDefault();
    await submitCapsule(form);
  }
  if (form.id === "capsuleUnlockForm") {
    event.preventDefault();
    await unlockCapsule(form);
  }
  if (form.id === "capsuleDeleteForm") {
    event.preventDefault();
    await deleteCapsuleWithPassword(form);
  }
  if (form.id === "songForm") {
    event.preventDefault();
    await submitSong(form);
  }
  if (form.id === "playlistForm") {
    event.preventDefault();
    await submitPlaylist(form);
  }
  if (form.id === "bucketForm") {
    event.preventDefault();
    await submitBucket(form);
  }
  if (form.id === "aiForm") {
    event.preventDefault();
    const input = form.elements.query;
    await askAI(input.value);
    input.value = "";
  }
}

function handleInput(event) {
  const target = event.target;
  if (target.id === "chatText") sendTypingSignal(true);
  if (target.dataset.filter === "memory-query") {
    sessionStorage.setItem("memory-query", target.value);
    debounceRender("memories");
  }
}

function handleChange(event) {
  const target = event.target;
  if (!target.dataset.filter) return;
  sessionStorage.setItem(target.dataset.filter, target.value);
  if (target.dataset.filter.startsWith("memory")) renderView("memories");
  if (target.dataset.filter.startsWith("timeline")) renderView("timeline");
  if (target.dataset.filter === "music-playlist") renderView("music");
}

let renderDebounce;
function debounceRender(view) {
  clearTimeout(renderDebounce);
  renderDebounce = setTimeout(() => renderView(view), 180);
}

function openModal(title, body) {
  els.modalTitle.textContent = title;
  els.modalBody.innerHTML = body;
  els.modal.showModal();
  iconRefresh();
}

function closeModal() {
  els.modal.close();
  els.modalBody.innerHTML = "";
}

function openMemoryForm(id) {
  const memory = state.memories.find((item) => item.id === id);
  const flagValue = memory?.is_favorite && memory?.is_star ? "both" : memory?.is_favorite ? "favorite" : memory?.is_star ? "star" : "";

  // تصفير الفويس القديم لما نفتح الفورم
  window.currentMemoryVoiceBlob = null;

  openModal(memory ? "تعديل ذكرى" : "ذكرى جديدة", `
    <form id="memoryForm" class="grid" data-id="${memory?.id || ""}">
      <label><span>العنوان</span><input name="title" value="${escapeAttr(memory?.title || "")}" required /></label>
      <label><span>الوصف</span><textarea name="description">${escapeHTML(memory?.description || "")}</textarea></label>
      <div class="form-grid">
        <label><span>التاريخ</span><input name="date" type="date" value="${escapeAttr(toDateInput(memory?.date) || toDateInput(new Date()))}" required /></label>
        <label><span>اختيارات النجمة</span>
          <select name="flags">
            <option value="" ${flagValue === "" ? "selected" : ""}>ذكرى عادية</option>
            <option value="favorite" ${flagValue === "favorite" ? "selected" : ""}>مفضلة</option>
            <option value="star" ${flagValue === "star" ? "selected" : ""}>Star Memory</option>
            <option value="both" ${flagValue === "both" ? "selected" : ""}>مفضلة ومتنجمة</option>
          </select>
        </label>
      </div>

      <div class="form-grid">
        <label><span>صور وفيديوهات</span><input name="files" type="file" multiple accept="image/*,video/*" /></label>
        <label><span>تسجيل صوتي بصوتك</span>
          <div style="display: flex; gap: 8px; align-items: center;">
            <button type="button" class="secondary-btn" id="recordMemoryBtn" data-action="record-memory-voice" style="flex: 1; padding: 12px;">
              <i data-lucide="mic"></i> اضغط وسجل
            </button>
          </div>
          <audio id="memoryVoicePreview" controls style="display: none; height: 38px; width: 100%; margin-top: 8px;"></audio>
        </label>
      </div>

      <label><span>اسم المكان</span><input name="location_text" id="memoryLocText" value="${escapeAttr(memory?.location_text || "")}" placeholder="مثلا: الساحل، أول خروجة..." /></label>
      
      <label><span>ابحث واختار من الخريطة 🗺️</span>
        <div style="display: flex; gap: 8px; margin-bottom: 8px;">
          <input type="text" id="mapSearchInput" placeholder="اكتب اسم المكان للبحث..." style="flex: 1;">
          <button type="button" class="secondary-btn" data-action="search-memory-map"><i data-lucide="search"></i> بحث</button>
        </div>
        <div id="memoryMapPicker" style="height: 220px; border-radius: 8px; border: 1px solid var(--border); background: #111; z-index: 1;"></div>
        <input type="hidden" name="lat" id="memoryLat" value="${escapeAttr(memory?.lat || "")}" />
        <input type="hidden" name="lng" id="memoryLng" value="${escapeAttr(memory?.lng || "")}" />
      </label>

      <div class="split-actions">
        <button class="secondary-btn" type="button" data-action="close-modal">إلغاء</button>
        <button class="primary-btn" type="submit"><i data-lucide="save"></i> حفظ الذكرى</button>
      </div>
    </form>
  `);

  // تشغيل الخريطة بعد ما الشاشة تفتح بـ 100 جزء من الثانية
  setTimeout(() => initMemoryMapPicker(memory?.lat, memory?.lng), 100);
}

async function submitMemory(form) {
  const id = form.dataset.id;
  const fd = new FormData(form);
  const flags = fd.get("flags");
  const payload = {
    title: String(fd.get("title")).trim(),
    description: String(fd.get("description") || "").trim(),
    date: fd.get("date"),
    location_text: String(fd.get("location_text") || "").trim(),
    lat: numericOrNull(fd.get("lat")),
    lng: numericOrNull(fd.get("lng")),
    is_favorite: flags === "favorite" || flags === "both",
    is_star: flags === "star" || flags === "both",
    uploader_name: state.profile.name,
    user_id: state.user.id,
    updated_at: new Date().toISOString()
  };

  setFormBusy(form, true);
  try {
    let saved = null;
    if (id) saved = await updateRow("memories", id, payload);
    else saved = await insertRow("memories", { ...payload, created_at: new Date().toISOString() });

    // 1. رفع الصور والفيديوهات
    const files = [...form.elements.files.files];
    for (const file of files) {
      const upload = await uploadAsset(file, "memories", fileType(file));
      await insertRow("media", {
        memory_id: saved.id, user_id: state.user.id, uploader_name: state.profile.name,
        type: fileType(file), title: file.name, url: upload.url, path: upload.path, bucket: upload.bucket, provider: upload.provider, mime_type: file.type, size: file.size, created_at: new Date().toISOString()
      });
    }

    // 2. رفع الفويس لو كنت سجلت واحد جديد
    if (window.currentMemoryVoiceBlob) {
      const vFile = new File([window.currentMemoryVoiceBlob], `memory-voice-${Date.now()}.webm`, { type: 'audio/webm' });
      const upload = await uploadAsset(vFile, "memories", "voice");
      await insertRow("media", {
        memory_id: saved.id, user_id: state.user.id, uploader_name: state.profile.name,
        type: "voice", title: vFile.name, url: upload.url, path: upload.path, bucket: upload.bucket, provider: upload.provider, mime_type: vFile.type, size: vFile.size, created_at: new Date().toISOString()
      });
      window.currentMemoryVoiceBlob = null; 
    }

    if (payload.is_star) await ensureStar(saved.id);
    else if (id) await deleteStar(saved.id);
    closeModal();
    await refreshAndRender("memories");
  } catch (error) {
    alert("حصلت مشكلة: " + (error.message || error));
  } finally {
    setFormBusy(form, false);
  }
}

async function deleteMemory(id) {
  if (!confirm("متأكدين من حذف الذكرى؟")) return;
  await deleteRow("memories", id);
  await refreshAndRender(state.view);
}

async function toggleMemoryFavorite(id) {
  const memory = state.memories.find((item) => item.id === id);
  if (!memory) return;
  await updateRow("memories", id, { is_favorite: !memory.is_favorite, updated_at: new Date().toISOString() });
  await refreshAndRender(state.view);
}

async function toggleMemoryStar(id) {
  const memory = state.memories.find((item) => item.id === id);
  if (!memory) return;
  const next = !(memory.is_star || state.star_memories.some((item) => item.memory_id === id));
  await updateRow("memories", id, { is_star: next, updated_at: new Date().toISOString() });
  if (next) await ensureStar(id);
  else await deleteStar(id);
  await refreshAndRender(state.view);
}

async function ensureStar(memoryId) {
  if (state.star_memories.some((item) => item.memory_id === memoryId && item.user_id === state.user.id)) return;
  await insertRow("star_memories", {
    memory_id: memoryId,
    user_id: state.user.id,
    created_at: new Date().toISOString()
  });
}

async function deleteStar(memoryId) {
  if (SUPABASE_READY) {
    await sb.from("star_memories").delete().eq("memory_id", memoryId).eq("user_id", state.user.id);
  } else {
    const db = localDB();
    db.star_memories = db.star_memories.filter((item) => !(item.memory_id === memoryId && item.user_id === state.user.id));
    saveLocalDB(db);
  }
}

function shareMemory(id) {
  const memory = state.memories.find((item) => item.id === id);
  if (!memory) return;
  const text = `ذكرى حلوة من عالم محمود ومريم ❤️\n${memory.title}\n${memory.description || ""}\n${formatDate(memory.date)}`;
  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
}

function openRandomMemory() {
  const pool = [
    ...state.memories.map((item) => ({ type: "memory", item })),
    ...state.media.map((item) => ({ type: "media", item })),
    ...state.love_messages.map((item) => ({ type: "love", item }))
  ];
  if (!pool.length) return openModal("حاجة حلوة", empty("لسه مفيش حاجات كفاية للعشوائي."));
  const pick = pool[Math.floor(Math.random() * pool.length)];
  if (pick.type === "memory") {
    openModal("فكرتكوا بحاجة حلوة ❤️", renderMemoryCard(pick.item));
  } else if (pick.type === "media") {
    openModal("ميديا عشوائية ❤️", renderMemoryMedia([pick.item]));
  } else {
    openModal("رسالة حب عشوائية ❤️", `<div class="love-message"><blockquote>${escapeHTML(pick.item.body)}</blockquote></div>`);
  }
}

async function toggleLoveFavorite(id) {
  const message = state.love_messages.find((item) => item.id === id);
  if (!message) return;
  const favs = Array.isArray(message.favorite_by) ? message.favorite_by : [];
  const next = favs.includes(state.user.id) ? favs.filter((item) => item !== state.user.id) : [...favs, state.user.id];
  await updateRow("love_messages", id, { favorite_by: next });
  await refreshAndRender("home");
}

function openLocationForm() {
  openModal("مكان جديد", `
    <form id="locationForm" class="grid">
      <label><span>اسم المكان</span><input name="name" required placeholder="أول خروجة" /></label>
      <label><span>العنوان</span><input name="address" placeholder="اكتب العنوان أو اسم المكان" /></label>
      <div class="form-grid">
        <label><span>Latitude</span><input name="lat" inputmode="decimal" /></label>
        <label><span>Longitude</span><input name="lng" inputmode="decimal" /></label>
      </div>
      <label><span>ملاحظات</span><textarea name="notes"></textarea></label>
      <div class="split-actions">
        <button class="secondary-btn" type="button" data-action="close-modal">إلغاء</button>
        <button class="primary-btn" type="submit"><i data-lucide="save"></i> حفظ</button>
      </div>
    </form>
  `);
}

async function submitLocation(form) {
  const fd = new FormData(form);
  await insertRow("locations", {
    user_id: state.user.id,
    name: String(fd.get("name")).trim(),
    address: String(fd.get("address") || "").trim(),
    lat: numericOrNull(fd.get("lat")),
    lng: numericOrNull(fd.get("lng")),
    notes: String(fd.get("notes") || "").trim(),
    created_at: new Date().toISOString()
  });
  closeModal();
  await refreshAndRender("map");
}

function selectLocation(id) {
  sessionStorage.setItem("selected-location", id);
  renderView("map");
}

async function sendChatMessage(text) {
  const clean = String(text || "").trim();
  if (!clean) return;
  await insertRow("messages", {
    text: clean,
    type: "text",
    user_id: state.user.id,
    sender_name: state.profile.name,
    is_seen: false,
    created_at: new Date().toISOString()
  });
  sendTypingSignal(false);
  await refreshAndRender("chat");
}

function fillChatWithLove() {
  const input = $("#chatText");
  if (!input) return;
  input.value = dailyLoveMessage().body;
  input.focus();
}

async function toggleVoiceRecording() {
  if (state.recording) {
    state.recording.stop();
    return;
  }
  if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
    alert("المتصفح مش داعم تسجيل الصوت.");
    return;
  }
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  const chunks = [];
  const recorder = new MediaRecorder(stream);
  state.recording = recorder;
  recorder.addEventListener("dataavailable", (event) => {
    if (event.data.size) chunks.push(event.data);
  });
  recorder.addEventListener("stop", async () => {
    stream.getTracks().forEach((track) => track.stop());
    const blob = new Blob(chunks, { type: recorder.mimeType || "audio/webm" });
    const file = new File([blob], `voice-${Date.now()}.webm`, { type: blob.type });
    const upload = await uploadAsset(file, "voice-messages", "voice");
    const message = await insertRow("messages", {
      text: "",
      type: "voice",
      voice_url: upload.url,
      voice_path: upload.path,
      voice_bucket: upload.bucket,
      user_id: state.user.id,
      sender_name: state.profile.name,
      is_seen: false,
      created_at: new Date().toISOString()
    });
    await insertRow("voice_messages", {
      message_id: message.id,
      user_id: state.user.id,
      audio_url: upload.url,
      audio_path: upload.path,
      bucket: upload.bucket,
      mime_type: file.type,
      size: file.size,
      created_at: new Date().toISOString()
    });
    state.recording = null;
    await refreshAndRender("chat");
  });
  recorder.start();
  renderView("chat");
}

async function toggleReaction(messageId, emoji) {
  const existing = state.reactions.find((item) => item.message_id === messageId && item.user_id === state.user.id && item.emoji === emoji);
  if (existing) await deleteRow("reactions", existing.id);
  else {
    await insertRow("reactions", {
      message_id: messageId,
      user_id: state.user.id,
      emoji,
      created_at: new Date().toISOString()
    });
  }
  await refreshAndRender("chat");
}

async function markSeenMessages() {
  const ids = state.messages.filter((item) => item.user_id !== state.user.id && !item.is_seen).map((item) => item.id);
  if (!ids.length) return;
  if (SUPABASE_READY) {
    await sb.from("messages").update({ is_seen: true, seen_at: new Date().toISOString() }).in("id", ids);
  } else {
    const db = localDB();
    db.messages = db.messages.map((item) => ids.includes(item.id) ? { ...item, is_seen: true, seen_at: new Date().toISOString() } : item);
    saveLocalDB(db);
  }
  await refreshAll();
  if (state.view === "chat") renderView("chat");
}

function sendTypingSignal(isTyping) {
  clearTimeout(state.typingTimer);
  if (SUPABASE_READY && state.chatChannel) {
    state.chatChannel.send({
      type: "broadcast",
      event: "typing",
      payload: { user_id: state.user.id, sender_name: displayName(state.profile), isTyping }
    });
  }
  if (isTyping) {
    state.typingTimer = setTimeout(() => sendTypingSignal(false), 1000);
  }
}

function openCapsuleForm() {
  // تصفير الفويس القديم لما نفتح الفورم
  window.currentCapsuleVoiceBlob = null;

  openModal("كبسولة زمنية جديدة", `
    <form id="capsuleForm" class="grid">
      <label><span>العنوان</span><input name="title" required /></label>
      <label><span>الرسالة</span><textarea name="message" required></textarea></label>
      
      <div class="form-grid">
        <label><span>تتفتح يوم</span><input name="open_date" type="datetime-local" required /></label>
        <label><span>الباسورد</span><input name="password" type="password" minlength="4" required /></label>
      </div>

      <div class="form-grid">
        <label><span>ميديا للكبسولة (صورة/فيديو)</span><input name="file" type="file" accept="image/*,video/*" /></label>
        <label><span>أو سجل رسالة بصوتك</span>
          <div style="display: flex; gap: 8px; align-items: center;">
            <button type="button" class="secondary-btn" id="recordCapsuleBtn" data-action="record-capsule-voice" style="flex: 1; padding: 12px;">
              <i data-lucide="mic"></i> اضغط وسجل
            </button>
          </div>
          <audio id="capsuleVoicePreview" controls style="display: none; height: 38px; width: 100%; margin-top: 8px;"></audio>
        </label>
      </div>

      <div class="split-actions">
        <button class="secondary-btn" type="button" data-action="close-modal">إلغاء</button>
        <button class="primary-btn" type="submit"><i data-lucide="lock"></i> اقفل الكبسولة</button>
      </div>
    </form>
  `);
}

async function submitCapsule(form) {
  const fd = new FormData(form);
  const file = form.elements.file.files[0];
  let upload = {};

  setFormBusy(form, true);
  try {
    // لو مسجل فويس خده هو، لو مفيش فويس شوف لو رافع ملف (صورة/فيديو)
    if (window.currentCapsuleVoiceBlob) {
      const vFile = new File([window.currentCapsuleVoiceBlob], `capsule-voice-${Date.now()}.webm`, { type: 'audio/webm' });
      upload = await uploadAsset(vFile, "time-capsules", "voice");
    } else if (file) {
      upload = await uploadAsset(file, "time-capsules", fileType(file));
    }

    const payload = {
      title: String(fd.get("title")).trim(),
      message: String(fd.get("message")).trim(),
      open_date: new Date(fd.get("open_date")).toISOString(),
      password: String(fd.get("password")),
      media_url: upload.url || "",
      media_path: upload.path || "",
      media_bucket: upload.bucket || CONFIG.MEDIA_BUCKET,
      media_type: window.currentCapsuleVoiceBlob ? "voice" : (file ? fileType(file) : "text")
    };

    if (SUPABASE_READY) {
      const { error } = await sb.rpc("create_time_capsule", {
        p_title: payload.title,
        p_message: payload.message,
        p_open_date: payload.open_date,
        p_password: payload.password,
        p_media_url: upload.provider === "supabase" ? "" : payload.media_url,
        p_media_path: payload.media_path,
        p_media_bucket: payload.media_bucket,
        p_media_type: payload.media_type
      });
      if (error) throwFriendly(error, "مقدرتش أحفظ الكبسولة.");
    } else {
      await insertRow("time_capsules", {
        ...payload,
        password: payload.password,
        user_id: state.user.id,
        creator_name: state.profile.name,
        is_opened: false,
        created_at: new Date().toISOString()
      });
    }

    window.currentCapsuleVoiceBlob = null; 
    closeModal();
    await refreshAndRender("capsules");
  } catch (error) {
    alert("حصلت مشكلة: " + (error.message || error));
  } finally {
    setFormBusy(form, false);
  }
}

function openCapsuleUnlock(id) {
  openModal("افتح الكبسولة", `
    <form id="capsuleUnlockForm" class="grid" data-id="${id}">
      <label><span>الباسورد</span><input name="password" type="password" required /></label>
      <div class="split-actions">
        <button class="secondary-btn" type="button" data-action="close-modal">إلغاء</button>
        <button class="primary-btn" type="submit"><i data-lucide="unlock"></i> افتح</button>
      </div>
    </form>
  `);
}

async function unlockCapsule(form) {
  const id = form.dataset.id;
  const password = new FormData(form).get("password");
  let capsule;
  if (SUPABASE_READY) {
    const { data, error } = await sb.rpc("open_time_capsule", { p_capsule_id: id, p_password: password });
    if (error) throwFriendly(error, "الباسورد غلط أو الكبسولة لسه مقفولة.");
    capsule = Array.isArray(data) ? data[0] : data;
  } else {
    const db = localDB();
    const item = db.time_capsules.find((row) => row.id === id);
    if (!item || item.password !== password || new Date(item.open_date) > new Date()) {
      alert("الباسورد غلط أو الكبسولة لسه مقفولة.");
      return;
    }
    item.is_opened = true;
    saveLocalDB(db);
    capsule = item;
  }
  if (SUPABASE_READY && !capsule.media_url && capsule.media_path) {
    const { data } = await sb.storage.from(capsule.media_bucket || CONFIG.MEDIA_BUCKET).createSignedUrl(capsule.media_path, 60 * 60 * 2);
    capsule.media_url = data?.signedUrl || "";
  }
  const media = capsule.media_url ? renderMemoryMedia([{ type: capsule.media_type, url: capsule.media_url }]) : "";
  openModal(capsule.title, `<div class="love-message"><blockquote>${escapeHTML(capsule.message)}</blockquote></div>${media}`);
  await refreshAll();
}

function openCapsuleDelete(id) {
  openModal("حذف الكبسولة", `
    <form id="capsuleDeleteForm" class="grid" data-id="${id}">
      <label><span>الباسورد</span><input name="password" type="password" required /></label>
      <div class="split-actions">
        <button class="secondary-btn" type="button" data-action="close-modal">إلغاء</button>
        <button class="danger-btn" type="submit"><i data-lucide="trash-2"></i> حذف</button>
      </div>
    </form>
  `);
}

async function deleteCapsuleWithPassword(form) {
  const id = form.dataset.id;
  const password = new FormData(form).get("password");
  if (SUPABASE_READY) {
    const { error } = await sb.rpc("delete_time_capsule", { p_capsule_id: id, p_password: password });
    if (error) throwFriendly(error, "مقدرتش أحذف الكبسولة. راجع الباسورد.");
  } else {
    const db = localDB();
    const item = db.time_capsules.find((row) => row.id === id);
    if (!item || item.password !== password) return alert("الباسورد غلط.");
    db.time_capsules = db.time_capsules.filter((row) => row.id !== id);
    saveLocalDB(db);
  }
  closeModal();
  await refreshAndRender("capsules");
}

function openSongForm(id = null) {
  const song = state.songs.find((item) => item.id === id);
  openModal(song ? "تعديل الأغنية" : "ارفع أغنية", `
    <form id="songForm" class="grid" data-id="${song?.id || ""}">
      <div class="form-grid">
        <label><span>اسم الأغنية</span><input name="title" value="${escapeAttr(song?.title || "")}" required /></label>
        <label><span>الفنان</span><input name="artist" value="${escapeAttr(song?.artist || "")}" /></label>
      </div>
      <label><span>البلاي ليست</span>
        <select name="playlist_id">
          <option value="">playlist الحب</option>
          ${state.playlists.map((item) => `<option value="${item.id}" ${song?.playlist_id === item.id ? "selected" : ""}>${escapeHTML(item.name)}</option>`).join("")}
        </select>
      </label>
      <label><span>ملف الأغنية ${song ? "(سيبه فاضي لو مش عايز تغير الأغنية نفسها)" : ""}</span><input name="file" type="file" accept="audio/*" ${song ? "" : "required"} /></label>
      <div class="split-actions">
        <button class="secondary-btn" type="button" data-action="close-modal">إلغاء</button>
        <button class="primary-btn" type="submit"><i data-lucide="save"></i> حفظ</button>
      </div>
    </form>
  `);
}

async function submitSong(form) {
  try {
    const id = form.dataset.id;
    const fd = new FormData(form);
    const file = form.elements.file.files[0];

    let payload = {
      title: String(fd.get("title")).trim(),
      artist: String(fd.get("artist") || "").trim(),
      playlist_id: fd.get("playlist_id") || null
    };

    setFormBusy(form, true);

    if (file) {
      const upload = await uploadAsset(file, "songs", "audio", CONFIG.MUSIC_BUCKET);
      payload.audio_url = upload.url;
      payload.audio_path = upload.path;
      payload.bucket = upload.bucket;
      payload.mime_type = file.type;
      payload.size = file.size;
    }

    if (id) {
      await updateRow("songs", id, payload);
    } else {
      payload.user_id = state.user.id;
      payload.created_at = new Date().toISOString();
      await insertRow("songs", payload);
    }

    closeModal();
    await refreshAndRender("music");
  } catch (error) {
    alert("حصلت مشكلة ومش هينفع نعدل: " + (error.message || error));
  } finally {
    setFormBusy(form, false); // عشان لو حصل ايرور الزراير ترجع تشتغل ومتعلقش
  }
}

async function submitPlaylist(form) {
  const name = new FormData(form).get("name").trim();
  if (!name) return;
  await insertRow("playlists", {
    user_id: state.user.id,
    name,
    created_at: new Date().toISOString()
  });
  form.reset();
  await refreshAndRender("music");
}

function playSong(id) {
  const song = state.songs.find((item) => item.id === id);
  if (!song) return;
  state.currentSong = song.id;
  els.audioPlayer.src = song.audio_url || "";
  els.audioPlayer.volume = Number(els.volumeSlider.value);
  els.audioPlayer.play().catch(() => {});
  updatePlayer(song);
}

function playNextSong() {
  if (!state.songs.length) return;
  const index = state.songs.findIndex((item) => item.id === state.currentSong);
  const next = state.songs[(index + 1) % state.songs.length];
  playSong(next.id);
}

function toggleMusic() {
  if (!els.audioPlayer.src && state.songs[0]) playSong(state.songs[0].id);
  else if (els.audioPlayer.paused) els.audioPlayer.play().catch(() => {});
  else els.audioPlayer.pause();
  const song = state.songs.find((item) => item.id === state.currentSong);
  if (song) updatePlayer(song);
}

function toggleMute() {
  els.audioPlayer.muted = !els.audioPlayer.muted;
}

function updatePlayer(song) {
  els.playerTrack.textContent = song?.title || "مفيش أغنية شغالة";
  els.playerArtist.textContent = song?.artist || "playlist الحب";
  iconRefresh();
}

function openBucketForm(id) {
  const item = state.bucket_lists.find((row) => row.id === id);
  openModal(item ? "تعديل هدف" : "هدف جديد", `
    <form id="bucketForm" class="grid" data-id="${item?.id || ""}">
      <label><span>العنوان</span><input name="title" value="${escapeAttr(item?.title || "")}" required /></label>
      <label><span>الوصف</span><textarea name="description">${escapeHTML(item?.description || "")}</textarea></label>
      <div class="form-grid">
        <label><span>تاريخ مستهدف</span><input name="target_date" type="date" value="${escapeAttr(toDateInput(item?.target_date) || "")}" /></label>
        <label><span>التقدم %</span><input name="progress" type="number" min="0" max="100" value="${escapeAttr(item?.progress ?? 0)}" /></label>
      </div>
      <div class="split-actions">
        <button class="secondary-btn" type="button" data-action="close-modal">إلغاء</button>
        <button class="primary-btn" type="submit"><i data-lucide="save"></i> حفظ</button>
      </div>
    </form>
  `);
}

async function submitBucket(form) {
  const id = form.dataset.id;
  const fd = new FormData(form);
  const progress = Math.max(0, Math.min(100, Number(fd.get("progress")) || 0));
  const payload = {
    user_id: state.user.id,
    creator_name: state.profile.name,
    title: String(fd.get("title")).trim(),
    description: String(fd.get("description") || "").trim(),
    target_date: fd.get("target_date") || null,
    progress,
    status: progress >= 100 ? "completed" : "pending",
    updated_at: new Date().toISOString()
  };
  if (id) await updateRow("bucket_lists", id, payload);
  else await insertRow("bucket_lists", { ...payload, created_at: new Date().toISOString() });
  closeModal();
  await refreshAndRender("bucket");
}

async function completeBucket(id) {
  await updateRow("bucket_lists", id, { progress: 100, status: "completed", updated_at: new Date().toISOString() });
  await refreshAndRender("bucket");
}

async function askAI(query) {
  const clean = String(query || "").trim();
  if (!clean) return;
  state.aiLog.push({ role: "user", text: clean });
  renderView("ai");
  const answer = await answerRelationshipQuestion(clean);
  state.aiLog.push({ role: "bot", text: answer });
  renderView("ai");
  requestAnimationFrame(() => {
    const log = $("#aiLog");
    if (log) log.scrollTop = log.scrollHeight;
  });
}

async function answerRelationshipQuestion(query) {
  const q = normalizeArabic(query);
  const yearMatch = q.match(/20\d{2}/);
  if (q.includes("كام يوم") || q.includes("بقالنا")) {
    return `بقالكوا مع بعض ${relationCounter().days} يوم من 21-07-2023، ولسه الشريط مكمل ❤️`;
  }
  if (yearMatch && q.includes("ذكريات")) {
    const year = yearMatch[0];
    const found = state.memories.filter((item) => new Date(item.date).getFullYear() === Number(year));
    return found.length
      ? `لقيت ${found.length} ذكرى في ${year}: ${found.slice(0, 6).map((item) => item.title).join("، ")}.`
      : `ملقتش ذكريات محفوظة في ${year} لسه.`;
  }
  if (q.includes("مريم") && (q.includes("رفعت") || q.includes("كام"))) {
    const count = state.memories.filter((item) => normalizePerson(item.uploader_name) === "Mariam").length;
    return `مريم رفعت ${count} ذكرى لحد دلوقتي.`;
  }
  if (q.includes("محمود") && (q.includes("رفع") || q.includes("كام"))) {
    const count = state.memories.filter((item) => normalizePerson(item.uploader_name) === "Mahmoud").length;
    return `محمود رفع ${count} ذكرى لحد دلوقتي.`;
  }
  if (q.includes("اول خروجه") || q.includes("اول خروجة")) {
    const first = [...state.memories].sort((a, b) => new Date(a.date) - new Date(b.date))[0];
    return first ? `أول خروجة محفوظة هي "${first.title}" يوم ${formatDate(first.date)}${first.location_text ? ` في ${first.location_text}` : ""}.` : "لسه مفيش أول خروجة محفوظة.";
  }
  if (q.includes("اول صوره") || q.includes("اول صورة")) {
    const firstPhoto = state.media
      .filter((item) => item.type === "photo")
      .sort((a, b) => new Date(a.created_at) - new Date(b.created_at))[0];
    const memory = firstPhoto ? state.memories.find((item) => item.id === firstPhoto.memory_id) : null;
    return firstPhoto ? `أول صورة محفوظة مرتبطة بذكرى "${memory?.title || "من غير عنوان"}".` : "لسه مفيش صور محفوظة.";
  }
  if (q.includes("اكتر سنه") || q.includes("اكثر سنة") || q.includes("أكثر سنة")) {
    const grouped = groupBy(state.memories, (item) => new Date(item.date).getFullYear());
    const top = Object.entries(grouped).sort((a, b) => b[1].length - a[1].length)[0];
    return top ? `أكثر سنة فيها ذكريات هي ${top[0]} بعدد ${top[1].length} ذكرى.` : "لسه مفيش ذكريات كفاية للإحصائية دي.";
  }
  if (q.includes("الساحل") || q.includes("مكان") || q.includes("فين")) {
    const term = q.includes("الساحل") ? "الساحل" : clean;
    const found = searchMemories(term);
    return found.length ? `لقيت ${found.length} نتيجة: ${found.slice(0, 6).map((item) => item.title).join("، ")}.` : "ملقتش ذكريات بالمكان أو الوصف ده.";
  }
  if (q.includes("صور") && q.includes("محمود")) {
    const found = state.memories.filter((item) => normalizeArabic(`${item.title} ${item.description}`).includes("محمود"));
    return found.length
      ? `لقيت ${found.length} ذكرى غالبا فيها محمود حسب العنوان والوصف: ${found.slice(0, 6).map((item) => item.title).join("، ")}.`
      : "مش لاقي تاج أو وصف بيقول إن الصور فيها محمود. ضيفوا اسم محمود في وصف الذكرى علشان البحث يبقى أذكى.";
  }

  if (SUPABASE_READY) {
    const { data } = await sb.rpc("match_memories", { query_text: clean, match_count: 5 });
    if (data?.length) return `أقرب ذكريات لسؤالك: ${data.map((item) => item.title).join("، ")}.`;
  }
  const local = searchMemories(clean);
  return local.length
    ? `أقرب حاجة لقيتها: ${local.slice(0, 5).map((item) => item.title).join("، ")}.`
    : "اسألني بطريقة تانية أو ضيفوا تفاصيل أكتر في الذكريات علشان أجاوب أحلى.";
}

async function insertRow(table, payload) {
  if (SUPABASE_READY) {
    const { data, error } = await sb.from(table).insert(payload).select().single();
    if (error) throwFriendly(error, `مقدرتش أضيف في جدول ${table}.`);
    return data;
  }
  const db = localDB();
  const row = { id: uid(), ...payload };
  db[table].push(row);
  saveLocalDB(db);
  return row;
}

async function updateRow(table, id, payload) {
  if (SUPABASE_READY) {
    const { data, error } = await sb.from(table).update(payload).eq("id", id).select().single();
    if (error) throwFriendly(error, `مقدرتش أعدل في جدول ${table}.`);
    return data;
  }
  const db = localDB();
  db[table] = db[table].map((item) => (item.id === id ? { ...item, ...payload } : item));
  saveLocalDB(db);
  return db[table].find((item) => item.id === id);
}

async function deleteRow(table, id) {
  if (SUPABASE_READY) {
    const { error } = await sb.from(table).delete().eq("id", id);
    if (error) throwFriendly(error, `مقدرتش أحذف من جدول ${table}.`);
    return;
  }
  const db = localDB();
  db[table] = db[table].filter((item) => item.id !== id);
  saveLocalDB(db);
}

async function deleteRowAndRefresh(table, id, view) {
  await deleteRow(table, id);
  await refreshAndRender(view);
}

async function refreshAndRender(view = state.view) {
  await refreshAll();
  renderChrome();
  renderView(view);
}

async function uploadAsset(file, folder, type, bucket = CONFIG.MEDIA_BUCKET) {
  if (!file) return {};
  const useCloudinary = CONFIG.CLOUDINARY_CLOUD_NAME && CONFIG.CLOUDINARY_UPLOAD_PRESET && ["photo", "video"].includes(type);
  if (useCloudinary) {
    const resourceType = type === "video" ? "video" : "image";
    const body = new FormData();
    body.append("file", file);
    body.append("upload_preset", CONFIG.CLOUDINARY_UPLOAD_PRESET);
    body.append("folder", `mahmoud-mariam/${folder}`);
    const response = await fetch(`https://api.cloudinary.com/v1_1/${CONFIG.CLOUDINARY_CLOUD_NAME}/${resourceType}/upload`, {
      method: "POST",
      body
    });
    if (!response.ok) throw new Error("Cloudinary upload failed");
    const data = await response.json();
    return { url: data.secure_url, path: data.public_id, provider: "cloudinary", bucket: "cloudinary" };
  }

  if (SUPABASE_READY) {
    const ext = extensionFromFile(file);
    const path = `${state.user.id}/${folder}/${Date.now()}-${slug(file.name || `${type}.${ext}`)}`;
    const { error } = await sb.storage.from(bucket).upload(path, file, { upsert: false, contentType: file.type || undefined });
    if (error) throwFriendly(error, "مقدرتش أرفع الملف على Supabase Storage.");
    const { data } = await sb.storage.from(bucket).createSignedUrl(path, 60 * 60 * 8);
    return { url: data?.signedUrl || "", path, provider: "supabase", bucket };
  }

  return { url: URL.createObjectURL(file), path: "", provider: "local", bucket: "local" };
}

async function setupRealtime() {
  clearRealtime();
  if (!SUPABASE_READY) {
    state.refreshTimer = setInterval(async () => {
      await refreshAll();
      renderPresence();
      if (["stats", "chat"].includes(state.view)) renderView(state.view);
    }, 6000);
    return;
  }

  const dbChannel = sb
    .channel("love-db")
    .on("postgres_changes", { event: "*", schema: "public", table: "messages" }, () => refreshAndRender(state.view))
    .on("postgres_changes", { event: "*", schema: "public", table: "reactions" }, () => refreshAndRender(state.view))
    .on("postgres_changes", { event: "*", schema: "public", table: "memories" }, () => refreshAndRender(state.view))
    .on("postgres_changes", { event: "*", schema: "public", table: "media" }, () => refreshAndRender(state.view))
    .on("postgres_changes", { event: "*", schema: "public", table: "presence" }, async () => {
      await refreshAll();
      renderPresence();
    })
    .subscribe();

  const chatChannel = sb
    .channel("love-chat", { config: { presence: { key: state.user.id } } })
    .on("presence", { event: "sync" }, () => {
      state.onlineUsers = chatChannel.presenceState();
      renderPresence();
      if (state.view === "chat") renderView("chat");
    })
    .on("broadcast", { event: "typing" }, ({ payload }) => {
      if (payload.user_id === state.user.id) return;
      state.typingBy = payload.isTyping ? payload.sender_name : null;
      if (state.view === "chat") renderView("chat");
      if (payload.isTyping) {
        clearTimeout(state.typingClearTimer);
        state.typingClearTimer = setTimeout(() => {
          state.typingBy = null;
          if (state.view === "chat") renderView("chat");
        }, 1400);
      }
    })
    .on("broadcast", { event: "game-sync" }, ({ payload }) => {
      state.activeGame = payload;
      if (state.view === "games") renderView("games");
    })
    .subscribe(async (status) => {
      if (status === "SUBSCRIBED") {
        await chatChannel.track({
          user_id: state.user.id,
          name: displayName(state.profile),
          online_at: new Date().toISOString()
        });
      }
    });

  state.channels = [dbChannel, chatChannel];
  state.chatChannel = chatChannel;
}

function clearRealtime() {
  if (state.refreshTimer) clearInterval(state.refreshTimer);
  state.refreshTimer = null;
  if (SUPABASE_READY) state.channels.forEach((channel) => sb.removeChannel(channel));
  state.channels = [];
  state.chatChannel = null;
}

async function updatePresence(isOnline) {
  const payload = {
    user_id: state.user.id,
    name: state.profile.name,
    display_name: displayName(state.profile),
    is_online: isOnline,
    last_seen: new Date().toISOString()
  };
  if (SUPABASE_READY) {
    await sb.from("presence").upsert(payload, { onConflict: "user_id" });
  } else {
    localPresence(isOnline);
  }
  await refreshAll();
  renderPresence();
}

function localPresence(isOnline) {
  const db = localDB();
  const row = db.presence.find((item) => item.user_id === state.user?.id);
  if (row) {
    row.is_online = isOnline;
    row.last_seen = new Date().toISOString();
  } else if (state.user) {
    db.presence.push({
      id: uid(),
      user_id: state.user.id,
      name: state.profile?.name || "Mahmoud",
      display_name: displayName(state.profile),
      is_online: isOnline,
      last_seen: new Date().toISOString()
    });
  }
  saveLocalDB(db);
}

function startCounters() {
  if (state.countersTimer) clearInterval(state.countersTimer);
  state.countersTimer = setInterval(() => {
    if (state.view !== "home") return;

    const relCounter = $("#relationshipCounter");
    if (relCounter) {
      const relation = relationCounter();
      relCounter.innerHTML = `
        ${metric(relation.years, "سنة")}
        ${metric(relation.months, "شهر")}
        ${metric(relation.days, "يوم")}
        ${metric(relation.hours, "ساعة")}
        ${metric(relation.minutes, "دقيقة")}
        ${metric(relation.seconds, "ثانية")}
      `;
    }

    const mariamCount = $("#mariamCountdown");
    if (mariamCount) {
      const mBday = birthdayCountdown("Mariam");
      mariamCount.innerHTML = `
        ${metric(mBday.months, "شهر")}
        ${metric(mBday.days, "يوم")}
        ${metric(`${pad(mBday.hours)}:${pad(mBday.minutes)}:${pad(mBday.seconds)}`, "لـ 04-09")}
      `;
    }

    const mahmoudCount = $("#mahmoudCountdown");
    if (mahmoudCount) {
      const hBday = birthdayCountdown("Mahmoud");
      mahmoudCount.innerHTML = `
        ${metric(hBday.months, "شهر")}
        ${metric(hBday.days, "يوم")}
        ${metric(`${pad(hBday.hours)}:${pad(hBday.minutes)}:${pad(hBday.seconds)}`, "لـ 04-07")}
      `;
    }
  }, 1000);
}

function relationCounter() {
  const start = LOVE_START_DATE;
  const now = new Date();
  if (now < start) return { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  let days = now.getDate() - start.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  const diff = now - start;
  return {
    years,
    months,
    days,
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60)
  };
}

function birthdayCountdown(person) {
  const base = BIRTHDAYS[person].date;
  const [, month, day] = base.split("-").map(Number);
  const now = new Date();
  let next = new Date(now.getFullYear(), month - 1, day);

  if (next < now && (now.getDate() !== day || now.getMonth() !== month - 1)) {
    next = new Date(now.getFullYear() + 1, month - 1, day);
  }

  let months = next.getMonth() - now.getMonth();
  let days = next.getDate() - now.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(next.getFullYear(), next.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    months += 12;
  }

  const diff = next - now;
  return {
    months,
    days,
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60)
  };
}

function dailyLoveMessage() {
  const source = state.love_messages.length ? state.love_messages : LOVE_MESSAGES.map((body, index) => ({ id: `seed-${index}`, body, favorite_by: [] }));
  const day = Math.floor(new Date().setHours(0, 0, 0, 0) / 86400000);
  return source[day % source.length];
}

function isLoveMessageFavorite(item) {
  return Array.isArray(item.favorite_by) && item.favorite_by.includes(state.user?.id);
}

function getOnThisDay() {
  const now = new Date();
  return state.memories.filter((item) => {
    const date = new Date(item.date);
    return date.getDate() === now.getDate() && date.getMonth() === now.getMonth() && date.getFullYear() < now.getFullYear();
  });
}

function getStarMemories() {
  const ids = new Set(state.star_memories.map((item) => item.memory_id));
  return state.memories.filter((item) => item.is_star || ids.has(item.id));
}

function filterMemories({ query = "", year = "", month = "", who = "", type = "" }) {
  return state.memories.filter((memory) => {
    const date = new Date(memory.date);
    const haystack = normalizeArabic(`${memory.title} ${memory.description || ""} ${memory.location_text || ""}`);
    const hasType = !type || mediaForMemory(memory.id).some((item) => item.type === type || (type === "photo" && item.type === "image"));
    return (!query || haystack.includes(normalizeArabic(query))) &&
      (!year || date.getFullYear() === Number(year)) &&
      (!month || date.getMonth() + 1 === Number(month)) &&
      (!who || normalizePerson(memory.uploader_name) === who) &&
      hasType;
  });
}

function searchMemories(query) {
  const normalized = normalizeArabic(query);
  const terms = normalized.split(/\s+/).filter(Boolean);
  return state.memories
    .map((memory) => {
      const haystack = normalizeArabic(`${memory.title} ${memory.description || ""} ${memory.location_text || ""}`);
      const score = terms.reduce((sum, term) => sum + (haystack.includes(term) ? 1 : 0), 0);
      return { memory, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.memory);
}

function mediaForMemory(memoryId) {
  return state.media.filter((item) => item.memory_id === memoryId);
}

function reactionsForMessage(messageId) {
  return state.reactions.filter((item) => item.message_id === messageId);
}

function reactionSummary(reactions) {
  const grouped = groupBy(reactions, (item) => item.emoji);
  return Object.entries(grouped).map(([emoji, rows]) => `${emoji} ${rows.length}`).join(" ");
}

function relatedMemoriesForLocation(place) {
  const key = normalizeArabic(`${place.name} ${place.address || ""}`);
  return state.memories.filter((memory) => {
    const loc = normalizeArabic(memory.location_text || "");
    const distance = place.lat && place.lng && memory.lat && memory.lng ? haversine(place.lat, place.lng, memory.lat, memory.lng) : Infinity;
    return loc && (key.includes(loc) || loc.includes(normalizeArabic(place.name)) || distance < 0.5);
  });
}

function filteredSongs() {
  const playlistId = sessionStorage.getItem("music-playlist") || "";
  return playlistId ? state.songs.filter((item) => item.playlist_id === playlistId) : state.songs;
}

function computeStats() {
  const photos = state.media.filter((item) => item.type === "photo").length;
  const videos = state.media.filter((item) => item.type === "video").length;
  const voices = state.media.filter((item) => ["voice", "audio"].includes(item.type)).length + state.messages.filter((item) => item.type === "voice").length + state.voice_messages.length;
  const activity = groupBy(state.memories, (item) => normalizePerson(item.uploader_name));
  const mostActive = Object.entries(activity).sort((a, b) => b[1].length - a[1].length)[0];
  const latest = [...state.memories].sort((a, b) => new Date(b.created_at || b.date) - new Date(a.created_at || a.date))[0];
  const storageBytes = [...state.media, ...state.songs].reduce((sum, item) => sum + (Number(item.size) || 0), 0);
  return {
    "كل الذكريات": state.memories.length,
    "الصور": photos,
    "الفيديوهات": videos,
    "الفويسات": voices,
    "الأغاني": state.songs.length,
    "رسائل الشات": state.messages.length,
    "الأماكن": state.locations.length,
    "الكبسولات": state.time_capsules.length,
    "الأحلام": state.bucket_lists.length,
    "Star Memories": getStarMemories().length,
    "الأكثر نشاطا": mostActive ? displayPerson(mostActive[0]) : "لسه",
    "آخر ذكرى": latest?.title || "مفيش",
    "استخدام التخزين": formatBytes(storageBytes)
  };
}

function localLogin(email, password) {
  if (password !== "love123456") throw new Error("الباسورد التجريبي هو love123456");
  const person = guessPersonFromEmail(email);
  const db = localDB();
  const user = db.users.find((row) => row.name === person.en) || db.users[0];
  localStorage.setItem("love-world-session-user-id", user.id);
  return user;
}

function localDB() {
  const raw = localStorage.getItem("love-world-db-v1");
  if (raw) return JSON.parse(raw);
  const db = seedLocalDB();
  saveLocalDB(db);
  return db;
}

function saveLocalDB(db) {
  localStorage.setItem("love-world-db-v1", JSON.stringify(db));
}

function seedLocalDB() {
  const mahmoud = { id: "demo-mahmoud", email: "mahmoud@example.com", name: "Mahmoud", display_name: "محمود", created_at: new Date().toISOString() };
  const mariam = { id: "demo-mariam", email: "mariam@example.com", name: "Mariam", display_name: "مريم", created_at: new Date().toISOString() };
  const memoryId = uid();
  const now = new Date().toISOString();
  return {
    users: [mahmoud, mariam],
    messages: [
      { id: uid(), text: "فاكرة أول يوم؟ ❤️", type: "text", user_id: mahmoud.id, sender_name: "Mahmoud", is_seen: true, created_at: new Date(Date.now() - 3600000).toISOString() },
      { id: uid(), text: "طبعا، ده محفوظ في قلبي.", type: "text", user_id: mariam.id, sender_name: "Mariam", is_seen: false, created_at: new Date(Date.now() - 3000000).toISOString() }
    ],
    reactions: [],
    voice_messages: [],
    memories: [
      {
        id: memoryId,
        user_id: mahmoud.id,
        uploader_name: "Mahmoud",
        title: "أول ذكرى في عالمنا",
        description: "مكان خاص، ضحكة حلوة، وبداية شريط طويل.",
        date: "2023-07-21",
        location_text: "أول خروجة",
        lat: 30.0444,
        lng: 31.2357,
        is_favorite: true,
        is_star: true,
        created_at: now,
        updated_at: now
      }
    ],
    media: [
      {
        id: uid(),
        memory_id: memoryId,
        user_id: mahmoud.id,
        uploader_name: "Mahmoud",
        type: "photo",
        title: "retro-love-poster",
        url: "assets/retro-love-poster.svg",
        provider: "local",
        size: 0,
        created_at: now
      }
    ],
    locations: [
      { id: uid(), user_id: mahmoud.id, name: "أول خروجة", address: "Cairo, Egypt", lat: 30.0444, lng: 31.2357, notes: "بداية الحكاية", created_at: now }
    ],
    songs: [],
    playlists: [{ id: uid(), user_id: mahmoud.id, name: "playlist الحب", created_at: now }],
    time_capsules: [],
    bucket_lists: [
      { id: uid(), user_id: mariam.id, creator_name: "Mariam", title: "نسافر مكان على البحر", description: "رحلة هادية وصور كتير.", target_date: "2026-09-04", progress: 35, status: "pending", created_at: now, updated_at: now }
    ],
    love_messages: LOVE_MESSAGES.map((body) => ({ id: uid(), user_id: mahmoud.id, body, favorite_by: [], created_at: now })),
    star_memories: [{ id: uid(), memory_id: memoryId, user_id: mahmoud.id, created_at: now }],
    presence: []
  };
}

function guessPersonFromEmail(email = "") {
  const lower = email.toLowerCase();
  if (lower.includes("mariam") || lower.includes("maryam") || lower.includes("mrym")) return { en: "Mariam", ar: "مريم" };
  return { en: "Mahmoud", ar: "محمود" };
}

function displayName(profile) {
  return profile?.display_name || displayPerson(profile?.name) || "محمود";
}

function displayPerson(name = "") {
  const person = normalizePerson(name);
  if (person === "Mariam") return "مريم";
  if (person === "Mahmoud") return "محمود";
  return name || "محمود";
}

function normalizePerson(name = "") {
  const text = String(name).toLowerCase();
  if (text.includes("mariam") || text.includes("maryam") || text.includes("مريم")) return "Mariam";
  return "Mahmoud";
}

function otherPersonName() {
  return normalizePerson(state.profile?.name) === "Mahmoud" ? "مريم" : "محمود";
}

function isOtherOnline() {
  const other = state.profiles.find((profile) => displayName(profile) === otherPersonName() || normalizePerson(profile.name) !== normalizePerson(state.profile?.name));
  if (!other) return false;
  return Boolean(state.onlineUsers[other.id] || state.presence.find((item) => item.user_id === other.id)?.is_online);
}

function googleMapUrl(place) {
  const query = place.lat && place.lng ? `${place.lat},${place.lng}` : `${place.name} ${place.address || ""}`;
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}

function haversine(lat1, lon1, lat2, lon2) {
  const toRad = (value) => (Number(value) * Math.PI) / 180;
  const r = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return 2 * r * Math.asin(Math.sqrt(a));
}

function fileType(file) {
  if (file.type.startsWith("image/")) return "photo";
  if (file.type.startsWith("video/")) return "video";
  if (file.type.startsWith("audio/")) return "voice";
  return "file";
}

function extensionFromFile(file) {
  return (file.name || "").split(".").pop() || "bin";
}

function slug(value) {
  return String(value)
    .normalize("NFKD")
    .replace(/[^\w.\-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

function numericOrNull(value) {
  const number = Number(value);
  return Number.isFinite(number) && value !== "" ? number : null;
}

function normalizeArabic(value = "") {
  return String(value)
    .toLowerCase()
    .replace(/[أإآ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .replace(/[ًٌٍَُِّْ]/g, "")
    .trim();
}

function formatDate(value) {
  if (!value) return "";
  return new Intl.DateTimeFormat("ar-EG", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(value));
}

function formatTime(value) {
  return new Intl.DateTimeFormat("ar-EG", { hour: "2-digit", minute: "2-digit" }).format(new Date(value));
}

function timeAgo(value) {
  const diff = Date.now() - new Date(value).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "دلوقتي";
  if (mins < 60) return `من ${mins} د`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `من ${hours} س`;
  return formatDate(value);
}

function arabicMonth(month) {
  return new Intl.DateTimeFormat("ar-EG", { month: "long" }).format(new Date(2024, month - 1, 1));
}

function toDateInput(value) {
  if (!value) return "";
  return new Date(value).toISOString().slice(0, 10);
}

function pad(value) {
  return String(value).padStart(2, "0");
}

function formatBytes(bytes) {
  if (!bytes) return "0 MB";
  const units = ["B", "KB", "MB", "GB"];
  let size = bytes;
  let unit = 0;
  while (size >= 1024 && unit < units.length - 1) {
    size /= 1024;
    unit += 1;
  }
  return `${size.toFixed(unit ? 1 : 0)} ${units[unit]}`;
}

function groupBy(items, getKey) {
  return items.reduce((acc, item) => {
    const key = getKey(item);
    acc[key] ||= [];
    acc[key].push(item);
    return acc;
  }, {});
}

function byDateAsc(a, b) {
  return new Date(a.created_at) - new Date(b.created_at);
}

function byMemoryDateDesc(a, b) {
  return new Date(b.date) - new Date(a.date);
}

function scrollChatToBottom() {
  const list = $("#messagesList");
  if (list) list.scrollTop = list.scrollHeight;
}

function setFormBusy(form, busy) {
  $$("button,input,textarea,select", form).forEach((control) => {
    control.disabled = busy;
  });
}

function iconRefresh() {
  if (window.lucide) window.lucide.createIcons();
}

function escapeHTML(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttr(value = "") {
  return escapeHTML(value);
}

function friendlyError(error) {
  const message = error?.message || String(error);
  if (message.includes("Invalid login")) return "الإيميل أو الباسورد غلط.";
  if (message.includes("row-level security")) return "RLS مانع العملية. راجع سياسات Supabase.";
  return message;
}

function throwFriendly(error, prefix) {
  console.error(prefix, error);
  throw new Error(`${prefix} ${friendlyError(error)}`);
}

function uid() {
  return crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function deleteSong(id) {
  if (!confirm("متأكد إنك عايز تمسح الأغنية دي؟")) return;

  try {
    const song = state.songs.find(s => s.id === id);
    
    // تأكيد إضافي: لو الأغنية مش بتاعته نوقفه ونطلعله رسالة
    if (song && song.user_id !== state.user.id) {
       alert("مش هينفع تمسح الأغنية دي عشان مش إنت اللي رافعها!");
       return;
    }

    if (song && song.audio_path && SUPABASE_READY) {
      await sb.storage.from(song.bucket || CONFIG.MUSIC_BUCKET).remove([song.audio_path]);
    }

    await deleteRowAndRefresh("songs", id, "music");
  } catch (error) {
    alert("حصلت مشكلة في المسح: " + (error.message || error));
  }
}
function checkCelebrations() {
  if (sessionStorage.getItem("celebrated_today")) return; 
  const now = new Date();
  const m = now.getMonth() + 1;
  const d = now.getDate();

  let messages = [];
  if (m === 7 && d === 21) messages.push("🎉 كل سنة وإحنا مع بعض يا دنيتي ❤️ (الذكرى السنوية)");
  if (m === 9 && d === 4) messages.push("🎂 كل سنة وإنتي طيبة يا مريم يا أحلى حاجة في حياتي ❤️");
  if (m === 7 && d === 4) messages.push("🎂 كل سنة وأنت طيب يا محمود، ربنا يخليكم لبعض ❤️");

  if (messages.length > 0) {
     sessionStorage.setItem("celebrated_today", "true");
     fireConfetti();
     openModal("يوم مميز جداً! 🥳", `<div class="love-message" style="text-align:center; font-size:1.3rem;"><strong>${messages.join('<br><br>')}</strong></div>`);
  }
}

function fireConfetti() {
  const colors = ['#ff4fa8', '#8b4dff', '#4f7dff', '#f0b86a', '#43d88c'];
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-10px';
    confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    confetti.style.zIndex = '9999';
    confetti.style.pointerEvents = 'none';
    document.body.appendChild(confetti);

    const fallDuration = Math.random() * 3 + 2;
    const spinDuration = Math.random() * 2 + 1;

    confetti.animate([
      { transform: `translate3d(0, 0, 0) rotate(0deg)`, opacity: 1 },
      { transform: `translate3d(${Math.random()*200 - 100}px, 100vh, 0) rotate(${Math.random()*720}deg)`, opacity: 0 }
    ], {
      duration: fallDuration * 1000,
      easing: 'cubic-bezier(.37,0,.63,1)',
      fill: 'forwards'
    });

    setTimeout(() => confetti.remove(), fallDuration * 1000);
  }
}
// ====== برمجة خريطة الذكريات المجانية ======
async function initMemoryMapPicker(lat, lng) {
  if (!window.L) {
    await new Promise((resolve) => {
      const css = document.createElement('link'); css.rel = 'stylesheet'; css.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'; document.head.appendChild(css);
      const js = document.createElement('script'); js.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'; js.onload = resolve; document.head.appendChild(js);
    });
  }
  const mapDiv = document.getElementById('memoryMapPicker');
  if(!mapDiv) return;
  const defaultLat = lat || 30.0444; 
  const defaultLng = lng || 31.2357;

  window.memoryMap = L.map('memoryMapPicker').setView([defaultLat, defaultLng], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© Love App' }).addTo(window.memoryMap);
  window.memoryMarker = L.marker([defaultLat, defaultLng], { draggable: true }).addTo(window.memoryMap);

  window.memoryMarker.on('dragend', function () {
    const position = window.memoryMarker.getLatLng();
    document.getElementById('memoryLat').value = position.lat;
    document.getElementById('memoryLng').value = position.lng;
  });

  window.memoryMap.on('click', function(e) {
    window.memoryMarker.setLatLng(e.latlng);
    document.getElementById('memoryLat').value = e.latlng.lat;
    document.getElementById('memoryLng').value = e.latlng.lng;
  });
  setTimeout(() => window.memoryMap.invalidateSize(), 300);
}

async function searchMemoryMap() {
  const query = document.getElementById('mapSearchInput').value;
  if (!query) return;
  try {
    const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`);
    const data = await res.json();
    if (data && data.length > 0) {
      const lat = data[0].lat;
      const lng = data[0].lon;
      window.memoryMap.setView([lat, lng], 15);
      window.memoryMarker.setLatLng([lat, lng]);
      document.getElementById('memoryLat').value = lat;
      document.getElementById('memoryLng').value = lng;
      if(!document.getElementById('memoryLocText').value) document.getElementById('memoryLocText').value = data[0].display_name.split(',')[0];
    } else alert("مفيش مكان بالاسم ده ع الخريطة!");
  } catch (err) { alert("حصلت مشكلة في البحث."); }
}

// ====== برمجة تسجيل الصوت المباشر للذكرى ======
let memoryRecorderInterval;
async function toggleMemoryVoiceRecord() {
  const btn = document.getElementById('recordMemoryBtn');
  const preview = document.getElementById('memoryVoicePreview');

  if (window.memoryMediaRecorder && window.memoryMediaRecorder.state === "recording") {
    window.memoryMediaRecorder.stop();
    clearInterval(memoryRecorderInterval);
    btn.innerHTML = `<i data-lucide="mic"></i> سجل فويس تاني`;
    btn.style.background = "";
    iconRefresh();
    return;
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    window.memoryMediaRecorder = new MediaRecorder(stream);
    const chunks = [];
    window.memoryMediaRecorder.ondataavailable = e => { if (e.data.size) chunks.push(e.data); };
    window.memoryMediaRecorder.onstop = () => {
      stream.getTracks().forEach(t => t.stop());
      const blob = new Blob(chunks, { type: 'audio/webm' });
      window.currentMemoryVoiceBlob = blob; 
      preview.src = URL.createObjectURL(blob);
      preview.style.display = "block";
    };
    window.memoryMediaRecorder.start();
    let secs = 0;
    btn.style.background = "var(--danger)";
    btn.innerHTML = `<i data-lucide="square"></i> بيسجل... (0s)`;
    iconRefresh();
    memoryRecorderInterval = setInterval(() => {
      secs++;
      btn.innerHTML = `<i data-lucide="square"></i> بيسجل... (${secs}s)`;
      iconRefresh();
    }, 1000);
  } catch (err) { alert("مش قادر أوصل للمايك! اتأكد إنك مدي الصلاحية للمتصفح."); }
}
// ====== برمجة تسجيل الصوت للكبسولة ======
let capsuleRecorderInterval;
async function toggleCapsuleVoiceRecord() {
  const btn = document.getElementById('recordCapsuleBtn');
  const preview = document.getElementById('capsuleVoicePreview');

  if (window.capsuleMediaRecorder && window.capsuleMediaRecorder.state === "recording") {
    window.capsuleMediaRecorder.stop();
    clearInterval(capsuleRecorderInterval);
    btn.innerHTML = `<i data-lucide="mic"></i> سجل فويس تاني`;
    btn.style.background = "";
    iconRefresh();
    return;
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    window.capsuleMediaRecorder = new MediaRecorder(stream);
    const chunks = [];
    window.capsuleMediaRecorder.ondataavailable = e => { if (e.data.size) chunks.push(e.data); };
    window.capsuleMediaRecorder.onstop = () => {
      stream.getTracks().forEach(t => t.stop());
      const blob = new Blob(chunks, { type: 'audio/webm' });
      window.currentCapsuleVoiceBlob = blob;
      preview.src = URL.createObjectURL(blob);
      preview.style.display = "block";
    };
    window.capsuleMediaRecorder.start();
    let secs = 0;
    btn.style.background = "var(--danger)";
    btn.innerHTML = `<i data-lucide="square"></i> بيسجل... (0s)`;
    iconRefresh();
    capsuleRecorderInterval = setInterval(() => {
      secs++;
      btn.innerHTML = `<i data-lucide="square"></i> بيسجل... (${secs}s)`;
      iconRefresh();
    }, 1000);
  } catch (err) { alert("مش قادر أوصل للمايك! اتأكد إنك مدي الصلاحية للمتصفح."); }
}
// ====== برمجة عرض ألبوم الذكريات (Gallery) ======
function openMemoryGallery(id) {
  const memory = state.memories.find((item) => item.id === id);
  if (!memory) return;
  const allMedia = mediaForMemory(id);
  if (!allMedia.length) return;

  let galleryHtml = allMedia.map((item) => {
    const url = item.signed_url || item.url || item.media_url || "";
    if (item.type === "video") {
      return `<video src="${escapeAttr(url)}" controls playsinline style="width: 100%; max-height: 70vh; background: #000; border-radius: 8px; margin-bottom: 16px;"></video>`;
    } else if (item.type === "voice" || item.type === "audio") {
      return `<div class="audio-tile" style="margin-bottom: 16px; border-radius: 8px;"><audio src="${escapeAttr(url)}" controls></audio></div>`;
    } else {
      return `<img src="${escapeAttr(url)}" loading="lazy" style="width: 100%; max-height: 75vh; object-fit: contain; background: #000; border-radius: 8px; margin-bottom: 16px;" />`;
    }
  }).join("");

  openModal(`ألبوم: ${escapeHTML(memory.title)}`, `
    <div style="display: flex; flex-direction: column; text-align: center;">
      ${galleryHtml}
    </div>
  `);
}
// ====== برمجة الألعاب ======
function startGame(gameId) {
  const other = state.profiles.find(p => p.id !== state.user.id) || state.user;
  const pool = gameId === "meen" ? MEEN_QUESTIONS : (gameId === "gawebny" ? GAWEBNY_QUESTIONS : LAW_KHYAROUK_QUESTIONS);
  const question = pool[Math.floor(Math.random() * pool.length)];

  state.activeGame = {
    id: gameId,
    question: question,
    asker: state.user.id,
    askerName: state.profile.name,
    answerer: other.id,
    answererName: other.name
  };

  broadcastGameState();
  renderView("games");
}

function nextGameTurn() {
  if (!state.activeGame) return;
  const gameId = state.activeGame.id;
  const pool = gameId === "meen" ? MEEN_QUESTIONS : GAWEBNY_QUESTIONS;
  const question = pool[Math.floor(Math.random() * pool.length)];

  // التبديل: اللي كان بيسأل يجاوب والعكس
  const newAsker = state.activeGame.answerer;
  const newAskerName = state.activeGame.answererName;
  const newAnswerer = state.activeGame.asker;
  const newAnswererName = state.activeGame.askerName;

  state.activeGame = {
    id: gameId,
    question: question,
    asker: newAsker,
    askerName: newAskerName,
    answerer: newAnswerer,
    answererName: newAnswererName
  };

  broadcastGameState();
  renderView("games");
}

function endGame() {
  state.activeGame = null;
  broadcastGameState();
  renderView("games");
}

function broadcastGameState() {
  if (SUPABASE_READY && state.chatChannel) {
    state.chatChannel.send({
      type: "broadcast",
      event: "game-sync",
      payload: state.activeGame
    });
  }
}