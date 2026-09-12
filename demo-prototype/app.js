/**
 * NyaySetu OS // Sovereign Judicial Workspace Operating System (app.js)
 * High-velocity reactive state store, workspace router, multithreaded worker bridge,
 * audio synthesizer, and multi-method engine controller.
 *
 * STRICT REQUIREMENT: ZERO EMOJIS - 100% BESPOKE SVG VECTOR ICONS
 */

// Comprehensive SVG Vector Icon Registry
const SVG = {
  scales: `<svg class="svg-icon svg-icon-stroke" viewBox="0 0 24 24"><path d="M12 3v18M6 8l6-5 6 5M3 13l3-5 3 5a3 3 0 0 1-6 0zM15 13l3-5 3 5a3 3 0 0 1-6 0zM4 21h16"/></svg>`,
  docket: `<svg class="svg-icon svg-icon-stroke" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  phone: `<svg class="svg-icon svg-icon-stroke" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  shieldCheck: `<svg class="svg-icon svg-icon-stroke" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
  map: `<svg class="svg-icon svg-icon-stroke" viewBox="0 0 24 24"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>`,
  camera: `<svg class="svg-icon svg-icon-stroke" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
  chat: `<svg class="svg-icon svg-icon-stroke" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  sliders: `<svg class="svg-icon svg-icon-stroke" viewBox="0 0 24 24"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>`,
  search: `<svg class="svg-icon svg-icon-stroke" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  checkCircle: `<svg class="svg-icon svg-icon-stroke" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  alertOctagon: `<svg class="svg-icon svg-icon-stroke" viewBox="0 0 24 24"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  play: `<svg class="svg-icon" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
  square: `<svg class="svg-icon" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>`,
  download: `<svg class="svg-icon svg-icon-stroke" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  close: `<svg class="svg-icon svg-icon-stroke" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  chevronLeft: `<svg class="svg-icon svg-icon-stroke" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>`,
  chevronRight: `<svg class="svg-icon svg-icon-stroke" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>`,
  cpu: `<svg class="svg-icon svg-icon-stroke" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>`
};

// Global App State Store
const NyayState = {
  activeWorkspace: 'triage', // triage | voice | fastbail | gis | aruco | whatsapp
  config: {
    theme: 'theme-sovereign',
    triageMethod: 'hybrid',
    cryptoMethod: 'ed25519',
    mapMethod: 'tps',
    speechMethod: 'freeswitch',
    ocrMethod: 'aruco_quad',
    simSpeed: 1.0,
    concurrency: 'worker'
  },
  activeCaseIndex: 0,
  docketSearchQuery: '',
  docketFilterUrgency: 'ALL',
  worker: null,
  workerActive: false,
  pendingTasks: new Map(),
  taskCounter: 0,
  ussdMenuState: 'ROOT',
  ussdInputBuffer: '',
  audioPlaying: false,
  audioTimer: null,
  scanInProgress: false,
  mapSliderPosition: 50,
  audioCtx: null
};

// 10 Hyper-Realistic Grounded Bangladesh Legal Scenarios
const BANGLADESH_CASES = [
  {
    id: 'NLAS-2026-0841',
    category: 'কারাবন্দী জামিন বিলম্ব (Undertrial Delay)',
    urgency: 'URGENT_RED',
    title: 'Kashimpur Undertrial Detained 28 Months Without Framing of Charge',
    applicant: 'মোঃ রফিকুল ইসলাম (৩৫)',
    detainee: 'মোঃ রফিকুল ইসলাম, বন্দি নং- ৮৪১৯/ক',
    prison: 'কাশিমপুর হাই-সিকিউরিটি কেন্দ্রীয় কারাগার, গাজীপুর',
    dispute: 'CrPC §379 (চুরি)। সর্বোচ্চ সাজা ৩ বছর হলেও ইতিমধ্যে ২৮ মাস বিনাবিচারে আটক। শুনানিতে আইনজীবীর অনুপস্থিতির কারণে জামিন আবেদন নিষ্পত্তিতে বিলম্ব।',
    annualIncomeBdt: 42000,
    eligibilityRule: 'প্যারা ২(ছ), আইনগত সহায়তা নীতিমালা ২০১৪ (কারাগারে বিনাবিচারে আটক অসচ্ছল ব্যক্তি)',
    statutoryAction: 'CrPC §497 জামিন আবেদন প্রস্তুতকরণ ও LA Form 23 স্বতঃপ্রণোদিত নোটিশ প্রেরণ',
    panelLawyer: 'Adv. সামিয়া জাহান (এনরোলমেন্ট নং: ৬৮০২, বার কাউন্সিল)',
    recommendedBailBond: 5000,
    court: 'চিফ জুডিসিয়াল ম্যাজিস্ট্রেট আদালত, গাজীপুর',
    district: 'গাজীপুর'
  },
  {
    id: 'NLAS-2026-1102',
    category: 'নদী সিকস্তি ও পয়স্তি ভূমি বিরোধ (River Char Grab)',
    urgency: 'HIGH_YELLOW',
    title: 'Jamalpur River Char Encroachment (CS 1888 vs RS 1970)',
    applicant: 'মোছাঃ রেজিয়া খাতুন (বিধবা)',
    opponent: 'মোঃ রফিকুল ইসলাম মেম্বার ও অন্যান্য',
    location: 'দেওয়ানগঞ্জ, বাহাদুরাবাদ মৌজা, জামালপুর',
    dispute: 'ব্রহ্মপুত্র নদীর জেগে ওঠা চরের ১৪.৮ শতক পৈতৃক ফসলি জমি জোরপূর্বক দখল। ভুয়া জোত খতিয়ান সৃষ্টি করে বিধবা পরিবারকে বাস্তুচ্যুত করার চেষ্টা।',
    annualIncomeBdt: 58000,
    eligibilityRule: 'প্যারা ২(ক), আইনগত সহায়তা নীতিমালা ২০১৪ (অসচ্ছল বিধবা ও নদীভাঙন কবলিত পরিবার)',
    statutoryAction: 'ধারা ১৪৫ ফৌজদারি কার্যবিধি ও দেওয়ানি প্রতিকার বণ্টন মামলা',
    panelLawyer: 'Adv. তানভীর আহমেদ (সিনিয়র ল্যান্ড প্র্যাকটিশনার)',
    encroachmentDecimals: 14.8,
    court: 'সহকারী জজ আদালত, দেওয়ানগঞ্জ',
    district: 'জামালপুর'
  },
  {
    id: 'NLAS-2026-0319',
    category: 'শ্রমিক মজুরি বকেয়া (Garment Wage Deprivation)',
    urgency: 'HIGH_YELLOW',
    title: 'Unlawful Factory Layoff & 4-Month Arrears for 18 Women Workers',
    applicant: 'মোছাঃ মর্জিনা বেগম ও ১৭ জন কর্মী',
    opponent: 'ম্যানেজিং ডিরেক্টর, সানরাইজ অ্যাপারেলস লিমিটেড, টঙ্গী',
    location: 'টঙ্গী শিল্পাঞ্চল, গাজীপুর',
    dispute: 'বাংলাদেশ শ্রম আইন ২০০৬ এর ধারা ২৬ ও ৩৩ লঙ্ঘন করে পূর্ব নোটিশ ব্যতীত ছাঁটাই। ৪ মাসের বকেয়া বেতন, মাতৃত্বকালীন সুবিধা ও গ্র্যাচুইটি আত্মসাৎ।',
    annualIncomeBdt: 96000,
    eligibilityRule: 'প্যারা ২(ঘ), আইনগত সহায়তা নীতিমালা ২০১৪ (অসচ্ছল পোশাক শ্রমিক)',
    statutoryAction: 'শ্রম আদালত ঢাকা-৩ এ ধারা ৩৩(১) মোকাদ্দমা ও বিকল্প বিরোধ নিষ্পত্তি (ADR)',
    panelLawyer: 'Adv. ফারহানা হক (শ্রম আইন বিশেষজ্ঞ)',
    court: '৩য় শ্রম আদালত, ঢাকা',
    district: 'গাজীপুর'
  },
  {
    id: 'NLAS-2026-2490',
    category: 'পারিবারিক সহিংসতা ও যৌতুক (Domestic Abuse)',
    urgency: 'URGENT_RED',
    title: 'Emergency Protection Order & Shelter Placement (Nari-Shield)',
    applicant: 'সুরভী আক্তার (২২)',
    opponent: 'মোঃ জাহিদ হাসান ও শ্বশুরবাড়ির লোকজন',
    location: 'মিরপুর-১, ঢাকা',
    dispute: 'পারিবারিক সহিংসতা (প্রতিরোধ ও সুরক্ষা) আইন ২০১০ এবং যৌতুক নিরোধ আইন ২০১৮। শারীরিক নির্যাতন ও নাবালক সন্তানসহ গৃহচ্যুত করার অপচেষ্টা।',
    annualIncomeBdt: 12000,
    eligibilityRule: 'প্যারা ২(খ), আইনগত সহায়তা নীতিমালা ২০১৪ (সহিংসতার শিকার অসচ্ছল নারী)',
    statutoryAction: 'পারিবারিক সুরক্ষা আদেশ, অন্তর্বর্তীকালীন খোরাকি ও নিরাপদ আশ্রয়কেন্দ্রে রেফারেল',
    panelLawyer: 'Adv. নাসরিন সুলতানা (বাংলাদেশ মহিলা আইনজীবী সমিতি প্যানেল)',
    court: 'নারী ও শিশু নির্যাতন দমন ট্রাইব্যুনাল-২, ঢাকা',
    district: 'ঢাকা'
  },
  {
    id: 'NLAS-2026-1550',
    category: 'হাওর জলমহাল মিথ্যা মামলা (Wetland Fisherman Trap)',
    urgency: 'URGENT_RED',
    title: 'Sunamganj Haor Subsistence Fisherman Falsely Booked by Leaseholder',
    applicant: 'কার্তিক বর্মন (ক্ষুদ্র মৎস্যজীবী)',
    opponent: 'জলমহাল ইজারাদার সিন্ডিকেট',
    location: 'তাহিরপুর, সুনামগঞ্জ',
    dispute: 'উন্মুক্ত জলাশয়ে ঐতিহ্যগত মাছ ধরার সময় মিথ্যা ডাকাতির প্রস্তুতি মামলায় (দণ্ডবিধি ৩৯৯/৪০২) জড়িয়ে গ্রেপ্তার।',
    annualIncomeBdt: 36000,
    eligibilityRule: 'প্যারা ২(ঝ), আইনগত সহায়তা নীতিমালা ২০১৪ (প্রান্তিক মৎস্যজীবী সম্প্রদায়)',
    statutoryAction: 'উচ্চ আদালত হতে নিয়মিত জামিন ও মিথ্যা মামলা প্রত্যাহারের আইনি পদক্ষেপ',
    panelLawyer: 'Adv. দেওয়ান মোবারক হোসেন',
    court: 'দায়রা জজ আদালত, সুনামগঞ্জ',
    district: 'সুনামগঞ্জ'
  },
  {
    id: 'NLAS-2026-0771',
    category: 'পৈতৃক ফারায়েজ সম্পত্তি বণ্টন (Inheritance Feud)',
    urgency: 'STANDARD_GREEN',
    title: 'Ancestral Homestead Partition for 1 Widow, 2 Sons, 3 Daughters',
    applicant: 'শাহানা পারভীন (কন্যা)',
    opponent: 'বড় ভাই ও দখলদার অংশীদার',
    location: 'মুন্সীগঞ্জ সদর, মুন্সীগঞ্জ',
    dispute: 'পিতার মৃত্যুর পর ফারায়েজ মোতাবেক ৮৪ শতক জমির সুষম বণ্টন অস্বীকার। বোনদের পৈতৃক অংশ বঞ্চিত করে একক নামজারি করার অপচেষ্টা।',
    annualIncomeBdt: 72000,
    eligibilityRule: 'প্যারা ২(ক), আইনগত সহায়তা নীতিমালা ২০১৪ (বঞ্চিত নারী ওয়ারিশ)',
    statutoryAction: 'বণ্টন মামলা (Partition Suit) ও প্রি-ট্রায়াল সালিশ বৈঠক',
    panelLawyer: 'Adv. আবুল কাশেম',
    court: 'যুগ্ম জেলা জজ ১ম আদালত, মুন্সীগঞ্জ',
    district: 'মুন্সীগঞ্জ'
  },
  {
    id: 'NLAS-2026-3012',
    category: 'আন্দোলনকালীন বন্দী সহায়তা (Detainee Rights)',
    urgency: 'URGENT_RED',
    title: 'Detained College Student Held in Special Powers Act Case',
    applicant: 'মায়ের পক্ষে আবেদন: মোছাঃ কুলসুম বেগম',
    detainee: 'তানজিম আহমেদ (১৯, শিক্ষার্থী)',
    prison: 'কেরানীগঞ্জ ঢাকা কেন্দ্রীয় কারাগার',
    dispute: 'মিথ্যা বিস্ফোরক দ্রব্য আইনের মামলায় সমাবেশস্থল থেকে আটক। বিশেষ ক্ষমতা আইনে রিমান্ডে নেওয়ার চেষ্টা।',
    annualIncomeBdt: 60000,
    eligibilityRule: 'প্যারা ২(ছ), আইনগত সহায়তা নীতিমালা ২০১৪ (জরুরি আইনি সহায়তা প্রার্থী)',
    statutoryAction: 'জরুরি জামিন আবেদন ও মানবাধিকার সুরক্ষার বিশেষ নোটিশ',
    panelLawyer: 'Adv. খন্দকার আশরাফুল আলম',
    court: 'মহানগর দায়রা জজ আদালত, ঢাকা',
    district: 'ঢাকা'
  },
  {
    id: 'NLAS-2026-0925',
    category: 'পার্বত্য আদিবাসী ভূমি অধিকার (CHT Land Grievance)',
    urgency: 'HIGH_YELLOW',
    title: 'Rangamati Tribal Land Encroachment (CHT Land Commission)',
    applicant: 'উচাই প্রু মারমা',
    opponent: 'প্রভাবশালী রিজার্ভ লিজ গ্রহীতা',
    location: 'কাপ্তাই, রাঙামাটি পার্বত্য জেলা',
    dispute: 'পার্বত্য চট্টগ্রাম ভূমি বিরোধ নিষ্পত্তি কমিশন আইন ২০০১ এর অধীনে প্রথাগত রেকর্ডীয় জুম চাষের জমিতে অনুপ্রবেশ।',
    annualIncomeBdt: 48000,
    eligibilityRule: 'প্যারা ২(ঞ), আইনগত সহায়তা নীতিমালা ২০১৪ (অনগ্রসর ক্ষুদ্র নৃ-গোষ্ঠী সম্প্রদায়)',
    statutoryAction: 'ভূমি কমিশন ট্রাইব্যুনালে আনুষ্ঠানিক অভিযোগ ও অন্তর্বর্তীকালীন স্থগিতাদেশ',
    panelLawyer: 'Adv. সুশান্ত চাকমা',
    court: 'পার্বত্য চট্টগ্রাম ভূমি বিরোধ নিষ্পত্তি কমিশন',
    district: 'রাঙামাটি'
  },
  {
    id: 'NLAS-2026-1899',
    category: 'মানবপাচার ভিকটিম উদ্ধার (Human Trafficking Rescue)',
    urgency: 'URGENT_RED',
    title: 'Rescue & Legal Protection for Cross-Border Trafficked Minor',
    applicant: 'পিতার পক্ষে: মোঃ সোলেমান মিয়া',
    opponent: 'সীমান্তবর্তী মানবপাচারকারী সিন্ডিকেট',
    location: 'শার্শা, যশোর সীমান্ত',
    dispute: 'মানবপাচার প্রতিরোধ ও দমন আইন ২০১২ এর ধারা ৬/৭। চাকরির প্রলোভন দেখিয়ে অপ্রাপ্তবয়স্ক কন্যাকে সীমান্ত পাচারের চেষ্টা।',
    annualIncomeBdt: 30000,
    eligibilityRule: 'প্যারা ২(ট), আইনগত সহায়তা নীতিমালা ২০১৪ (পাচারের শিকার ব্যক্তি ও পরিবার)',
    statutoryAction: 'ভিকটিম প্রটেকশন অর্ডার, সেফহোম সুরক্ষা ও পুলিশ তদন্ত মনিটরিং',
    panelLawyer: 'Adv. সেলিনা বেগম',
    court: 'মানবপাচার অপরাধ দমন ট্রাইব্যুনাল, যশোর',
    district: 'যশোর'
  },
  {
    id: 'NLAS-2026-2150',
    category: 'ইটভাটা বন্ধকী শ্রম ও দাসত্ব (Bonded Brick Kiln Labor)',
    urgency: 'HIGH_YELLOW',
    title: 'Illegal Physical Confinement of 6 Families at Damurhuda Brick Kiln',
    applicant: 'শ্রী অনিল রবিদাস',
    opponent: 'মালিক, মেসার্স স্টার ব্রিকস, চুয়াডাঙ্গা',
    location: 'দামুড়হুদা, চুয়াডাঙ্গা',
    dispute: 'দাদন ঋণের অযুহাতে ৬টি দিনমজুর পরিবারের চলাচলের স্বাধীনতা হরণ। সংবিধানের ৩৪ অনুচ্ছেদ (জবরদস্তিমূলক শ্রম নিষিদ্ধকরণ)।',
    annualIncomeBdt: 40000,
    eligibilityRule: 'প্যারা ২(ঠ), আইনগত সহায়তা নীতিমালা ২০১৪ (দলিত ও বন্ধকী শ্রমিক পরিবার)',
    statutoryAction: 'উপজেলা নির্বাহী ম্যাজিস্ট্রেট আদালতে তল্লাশি পরোয়ানা ও উদ্ধার অভিযান',
    panelLawyer: 'Adv. গোলাম মোস্তফা',
    court: 'উপজেলা নির্বাহী ম্যাজিস্ট্রেট আদালত, দামুড়হুদা',
    district: 'চুয়াডাঙ্গা'
  }
];

// Document Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
  initWebWorker();
  initRouter();
  initTheme();
  initKeyboardShortcuts();
  renderCaseDocketList();
  selectDocketCase(0);
  initSplitScreenMap();
  triggerFarayezCalculation();
  updateHeaderTelemetry();
});

/**
 * 1. WORKSPACE ROUTER & STAGE CONTROLLER
 */
function initRouter() {
  const hash = window.location.hash.replace('#', '');
  const validWorkspaces = ['triage', 'voice', 'fastbail', 'gis', 'aruco', 'whatsapp'];
  if (validWorkspaces.includes(hash)) {
    switchWorkspace(hash, false);
  } else {
    switchWorkspace('triage', false);
  }

  window.addEventListener('hashchange', () => {
    const newHash = window.location.hash.replace('#', '');
    if (validWorkspaces.includes(newHash) && newHash !== NyayState.activeWorkspace) {
      switchWorkspace(newHash, false);
    }
  });
}

function switchWorkspace(workspaceId, updateUrl = true) {
  NyayState.activeWorkspace = workspaceId;

  // Toggle active class on navigation items (Desktop & Mobile)
  document.querySelectorAll('.nav-item-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.workspace === workspaceId);
  });
  document.querySelectorAll('.mobile-dock-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.workspace === workspaceId);
  });

  // Toggle active class on workspace stage panes
  document.querySelectorAll('.workspace-pane').forEach(pane => {
    pane.classList.toggle('active', pane.id === `pane-${workspaceId}`);
  });

  // Update Breadcrumb Text
  const breadcrumbEl = document.getElementById('header-active-workspace-label');
  if (breadcrumbEl) {
    const titles = {
      triage: 'কেস ডকেট ও ট্রায়াজ কনসোল (Tier 3)',
      voice: 'কণ্ঠন্যায় ১৬৪৩০ ও USSD ফোন (Tier 1)',
      fastbail: 'FastBail-BD ডিজিটাল জামিন (Tier 3)',
      gis: 'ভূ-চিত্র মৌজা GIS ও ফারায়েজ (Tier 3)',
      aruco: 'ArUco পেপার স্ক্যানার স্টেশন (Tier 0)',
      whatsapp: 'হোয়াটসঅ্যাপ ও নারী-শিল্ড (Tier 2)'
    };
    breadcrumbEl.textContent = titles[workspaceId] || workspaceId;
  }

  if (updateUrl) {
    window.location.hash = workspaceId;
  }
}

function toggleSidebarCollapse() {
  const shell = document.querySelector('.app-shell');
  if (shell) {
    shell.classList.toggle('sidebar-collapsed');
  }
}

/**
 * 2. MULTITHREADED WEB WORKER BRIDGE
 */
function initWebWorker() {
  if (window.Worker) {
    try {
      NyayState.worker = new Worker('worker-compute.js');
      NyayState.worker.onmessage = handleWorkerMessage;
      NyayState.worker.onerror = (err) => {
        console.warn('Worker thread issue, fallback to async main thread:', err);
        NyayState.workerActive = false;
        updateFooterStatus(false);
      };
      NyayState.workerActive = true;
      updateFooterStatus(true);
      dispatchWorkerTask('benchmark_engine', { iterations: 50000 });
    } catch (e) {
      console.warn('Worker blocked:', e);
      NyayState.workerActive = false;
      updateFooterStatus(false);
    }
  } else {
    NyayState.workerActive = false;
    updateFooterStatus(false);
  }
}

function updateFooterStatus(active) {
  const pill = document.getElementById('footer-worker-status');
  if (!pill) return;
  if (active) {
    pill.innerHTML = `<span class="footer-dot"></span>Worker-Core-01 Active (4 Threads)`;
  } else {
    pill.innerHTML = `<span class="footer-dot" style="background:#f59e0b;box-shadow:0 0 6px #f59e0b;"></span>Main-Thread Fallback`;
  }
}

function dispatchWorkerTask(task, payload) {
  return new Promise((resolve, reject) => {
    const taskId = ++NyayState.taskCounter;
    NyayState.pendingTasks.set(taskId, { resolve, reject, task, start: performance.now() });

    if (NyayState.workerActive && NyayState.config.concurrency === 'worker') {
      NyayState.worker.postMessage({ id: taskId, task, payload });
    } else {
      setTimeout(async () => {
        try {
          const fakeResult = await executeMainThreadFallback(task, payload);
          resolve({ result: fakeResult, durationMs: 4.8 });
        } catch (e) {
          reject(e);
        }
      }, 15);
    }
  });
}

function handleWorkerMessage(e) {
  const { id, success, task, result, error, durationMs } = e.data;
  const pending = NyayState.pendingTasks.get(id);
  if (!pending) return;

  NyayState.pendingTasks.delete(id);

  if (success) {
    const latencyEl = document.getElementById('footer-latency-metric');
    if (latencyEl) {
      latencyEl.textContent = `Latency: ${durationMs}ms (${task})`;
    }
    pending.resolve({ result, durationMs });
  } else {
    console.error('Worker task error:', task, error);
    pending.reject(new Error(error));
  }
}

async function executeMainThreadFallback(task, payload) {
  return { status: 'FALLBACK_OK', payload };
}

/**
 * 3. THEME & HEADER TELEMETRY
 */
function initTheme() {
  document.body.className = NyayState.config.theme;
}

function setTheme(themeName) {
  NyayState.config.theme = themeName;
  document.body.className = themeName;
  updateHeaderTelemetry();
}

function updateHeaderTelemetry() {
  const enginePill = document.getElementById('header-engine-pill');
  if (enginePill) {
    const labels = {
      hybrid: 'Triage: Hybrid Ensemble (Rules + LLM)',
      statutory: 'Triage: Pure 2014 Statutory Rules',
      llm: 'Triage: Generative LLM (Llama 3.3)'
    };
    enginePill.innerHTML = `${SVG.cpu} ${labels[NyayState.config.triageMethod] || NyayState.config.triageMethod}`;
  }
}

/**
 * 4. KEYBOARD SHORTCUTS SYSTEM
 */
function initKeyboardShortcuts() {
  window.addEventListener('keydown', (e) => {
    // If inside an input or textarea, don't trigger number hotkeys
    const isInput = ['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName);

    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      toggleAdminDrawer();
      return;
    }

    if (e.key === 'Escape') {
      toggleAdminDrawer(false);
      closeNariShieldEscape();
      return;
    }

    if (isInput) return;

    if (e.key === '1') switchWorkspace('triage');
    if (e.key === '2') switchWorkspace('voice');
    if (e.key === '3') switchWorkspace('fastbail');
    if (e.key === '4') switchWorkspace('gis');
    if (e.key === '5') switchWorkspace('aruco');
    if (e.key === '6') switchWorkspace('whatsapp');

    if (e.key === 'j' || e.key === 'ArrowDown') {
      if (NyayState.activeWorkspace === 'triage') {
        const next = Math.min(BANGLADESH_CASES.length - 1, NyayState.activeCaseIndex + 1);
        selectDocketCase(next);
      }
    }
    if (e.key === 'k' || e.key === 'ArrowUp') {
      if (NyayState.activeWorkspace === 'triage') {
        const prev = Math.max(0, NyayState.activeCaseIndex - 1);
        selectDocketCase(prev);
      }
    }
    if (e.key === '/') {
      e.preventDefault();
      const searchInput = document.getElementById('docket-search-field');
      if (searchInput) {
        switchWorkspace('triage');
        searchInput.focus();
      }
    }
    if (e.key === ' ') {
      if (NyayState.activeWorkspace === 'voice') {
        e.preventDefault();
        toggleHotlineAudio();
      }
    }
  });
}

/**
 * 5. WORKSPACE 1: DOCKET & NYAY-TRIAGE
 */
function renderCaseDocketList() {
  const container = document.getElementById('docket-cases-list');
  if (!container) return;

  const query = NyayState.docketSearchQuery.toLowerCase().trim();
  const filterUrgency = NyayState.docketFilterUrgency;

  const filtered = BANGLADESH_CASES.filter(c => {
    const matchesQuery = !query ||
      c.id.toLowerCase().includes(query) ||
      c.applicant.toLowerCase().includes(query) ||
      c.title.toLowerCase().includes(query) ||
      c.dispute.toLowerCase().includes(query) ||
      (c.district && c.district.toLowerCase().includes(query)) ||
      (c.court && c.court.toLowerCase().includes(query)) ||
      (c.prison && c.prison.toLowerCase().includes(query)) ||
      (c.location && c.location.toLowerCase().includes(query));

    const matchesUrgency = filterUrgency === 'ALL' || c.urgency === filterUrgency;
    return matchesQuery && matchesUrgency;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div style="padding:1.5rem; text-align:center; color:var(--text-muted); font-size:0.8rem;">কোনো মামলা মেলেনি</div>`;
    return;
  }

  container.innerHTML = filtered.map((c) => {
    const idx = BANGLADESH_CASES.indexOf(c);
    const isActive = idx === NyayState.activeCaseIndex ? 'active' : '';
    const badgeClass = c.urgency === 'URGENT_RED' ? 'badge-red' : c.urgency === 'HIGH_YELLOW' ? 'badge-yellow' : 'badge-green';
    const badgeText = c.urgency === 'URGENT_RED' ? 'রেড অ্যালার্ট' : c.urgency === 'HIGH_YELLOW' ? 'উচ্চ অগ্রাধিকার' : 'সাধারণ সালিশ';

    return `
      <div class="docket-case-item ${isActive}" onclick="selectDocketCase(${idx})">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.25rem;">
          <span class="case-id-tag">${c.id}</span>
          <span class="case-priority-badge ${badgeClass}">${badgeText}</span>
        </div>
        <div style="font-size:0.82rem; font-weight:600; color:var(--text-main); margin-bottom:0.15rem; line-height:1.3;">
          ${c.title}
        </div>
        <div style="font-size:0.72rem; color:var(--text-muted);">
          ${c.category} • ${c.applicant}
        </div>
      </div>
    `;
  }).join('');
}

function selectDocketCase(idx) {
  NyayState.activeCaseIndex = idx;
  renderCaseDocketList();

  const c = BANGLADESH_CASES[idx];
  if (!c) return;

  const briefContainer = document.getElementById('bengali-brief-render-area');
  if (briefContainer) {
    const incomePassed = c.annualIncomeBdt <= 150000;

    briefContainer.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:flex-start; border-bottom:1px solid var(--border-subtle); padding-bottom:0.85rem; margin-bottom:1rem;">
        <div>
          <span class="case-priority-badge badge-green" style="margin-bottom:0.4rem; display:inline-block;">
            NLASO অফিসিয়াল ডিজিটাল ব্রিফ
          </span>
          <h2 style="font-size:1.15rem; color:var(--text-main); font-weight:700;">${c.category}</h2>
          <div style="font-size:0.75rem; color:var(--text-muted);">${c.court}</div>
        </div>
        <div style="text-align:right;">
          <div class="case-id-tag" style="font-size:0.95rem;">${c.id}</div>
          <div style="font-size:0.72rem; color:var(--text-dim);">${c.district} জেলা লিগ্যাল এইড</div>
        </div>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.75rem; margin-bottom:1rem;">
        <div style="background:var(--surface-base); padding:0.6rem 0.8rem; border-radius:var(--radius-sm); border:1px solid var(--border-subtle);">
          <span style="font-size:0.68rem; color:var(--text-muted); display:block;">আবেদনকারী / বন্দি</span>
          <strong style="color:var(--text-main); font-size:0.85rem;">${c.applicant}</strong>
        </div>
        <div style="background:var(--surface-base); padding:0.6rem 0.8rem; border-radius:var(--radius-sm); border:1px solid var(--border-subtle);">
          <span style="font-size:0.68rem; color:var(--text-muted); display:block;">প্রতিপক্ষ / প্রতিষ্ঠান</span>
          <strong style="color:var(--text-main); font-size:0.85rem;">${c.opponent || c.prison}</strong>
        </div>
        <div style="background:var(--surface-base); padding:0.6rem 0.8rem; border-radius:var(--radius-sm); border:1px solid var(--border-subtle);">
          <span style="font-size:0.68rem; color:var(--text-muted); display:block;">বার্ষিক পারিবারিক আয়</span>
          <strong style="color:var(--text-main); font-size:0.85rem;">${c.annualIncomeBdt.toLocaleString()} টাকা (${incomePassed ? 'সচ্ছলতার সীমা উত্তীর্ণ' : 'সীমা বহির্ভূত'})</strong>
        </div>
        <div style="background:var(--surface-base); padding:0.6rem 0.8rem; border-radius:var(--radius-sm); border:1px solid var(--border-subtle);">
          <span style="font-size:0.68rem; color:var(--text-muted); display:block;">অধিকারের আইনি ভিত্তি</span>
          <strong style="color:var(--text-main); font-size:0.85rem;">${c.eligibilityRule}</strong>
        </div>
      </div>

      <div style="background:var(--surface-base); border:1px solid var(--border-subtle); border-radius:var(--radius-sm); padding:0.85rem; margin-bottom:1rem;">
        <div style="font-size:0.75rem; font-weight:700; color:var(--accent-light); margin-bottom:0.35rem; display:flex; align-items:center; gap:0.4rem;">
          ${SVG.scales} ঘটনার বিবরণ ও মামলার সারসংক্ষেপ:
        </div>
        <p style="font-size:0.82rem; color:var(--text-bangla); line-height:1.65;">
          ${c.dispute}
        </p>
      </div>

      <div style="background:var(--surface-elevated); border:1px solid var(--border-strong); border-radius:var(--radius-sm); padding:0.85rem; margin-bottom:1rem;">
        <div style="font-size:0.75rem; font-weight:700; color:var(--text-main); margin-bottom:0.25rem;">
          প্রস্তাবিত সংবিধিবদ্ধ প্রতিকার পদক্ষেপ:
        </div>
        <div style="font-size:0.8rem; color:var(--accent-light);">
          ${c.statutoryAction}
        </div>
      </div>

      <div style="display:flex; justify-content:space-between; align-items:center; padding-top:0.5rem;">
        <div>
          <span style="font-size:0.7rem; color:var(--text-muted); display:block;">মনোনীত প্যানেল আইনজীবী</span>
          <strong style="color:var(--accent-light); font-size:0.82rem;">${c.panelLawyer}</strong>
        </div>
        <button class="btn-header-action btn-header-primary" onclick="generateStatutoryForm('LA_20')">
          ${SVG.download} LA-২০ ফরম এক্সপোর্ট
        </button>
      </div>
    `;
  }

  // Pre-fill FastBail inputs if undertrial
  if (c.prison) {
    const inmateInput = document.getElementById('fastbail-inmate-id');
    const caseInput = document.getElementById('fastbail-case-no');
    if (inmateInput) inmateInput.value = c.detainee;
    if (caseInput) caseInput.value = c.id + ' (' + c.court + ')';
  }
}

function handleDocketSearch(val) {
  NyayState.docketSearchQuery = val;
  renderCaseDocketList();
}

function setDocketUrgencyFilter(urgency) {
  NyayState.docketFilterUrgency = urgency;
  document.querySelectorAll('.filter-chip').forEach(c => {
    c.classList.toggle('active', c.dataset.urgency === urgency);
  });
  renderCaseDocketList();
}

/**
 * 6. WORKSPACE 2: KANLHONYAY 16430 & RETRO PHONE CONSOLE
 */
function playTone(freq1, freq2, duration = 120) {
  try {
    if (!NyayState.audioCtx) {
      NyayState.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    const ctx = NyayState.audioCtx;
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();

    osc1.frequency.value = freq1;
    osc2.frequency.value = freq2;

    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + (duration / 1000));

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(ctx.destination);

    osc1.start();
    osc2.start();
    osc1.stop(ctx.currentTime + (duration / 1000));
    osc2.stop(ctx.currentTime + (duration / 1000));
  } catch (e) {
    // AudioContext blocked or unsupported
  }
}

function pressUssdKey(key) {
  // Realistic DTMF Frequency Matrix for keypad
  const dtmfMap = {
    '1': [697, 1209], '2': [697, 1336], '3': [697, 1477],
    '4': [770, 1209], '5': [770, 1336], '6': [770, 1477],
    '7': [852, 1209], '8': [852, 1336], '9': [852, 1477],
    '*': [941, 1209], '0': [941, 1336], '#': [941, 1477],
    'CALL': [440, 480], 'CLEAR': [400, 400]
  };

  const freqs = dtmfMap[key] || [500, 500];
  playTone(freqs[0], freqs[1], 100);

  const lcd = document.getElementById('ussd-phone-lcd');
  if (!lcd) return;

  if (key === 'CALL') {
    if (NyayState.ussdInputBuffer.trim() === '*16430#' || NyayState.ussdMenuState === 'ROOT') {
      NyayState.ussdMenuState = 'MAIN_MENU';
      lcd.innerHTML = `
        <div style="font-weight:700; border-bottom:1px solid #4d7c0f; padding-bottom:2px; margin-bottom:4px;">জাতীয় আইনি সেবা ১৬৪৩০</div>
        1. আবেদনের অবস্থা<br/>
        2. জরুরি জামিন তথ্য<br/>
        3. ফারায়েজ হিসাব<br/>
        4. কল-ব্যাক অনুরোধ<br/>
        <div style="margin-top:6px; color:#1e3a0f; font-size:0.7rem;">[নং লিখে SEND চাপুন]</div>
      `;
      NyayState.ussdInputBuffer = '';
    } else {
      lcd.innerHTML = `<div style="color:#7f1d1d; font-weight:700;">অবৈধ কোড!</div>দয়া করে *16430# ডায়াল করুন।`;
      NyayState.ussdInputBuffer = '';
    }
    return;
  }

  if (key === 'CLEAR') {
    NyayState.ussdInputBuffer = '';
    NyayState.ussdMenuState = 'ROOT';
    lcd.innerHTML = `ডায়াল করুন:<br/><strong>*16430#</strong><br/><br/>[SEND চাপুন]`;
    return;
  }

  NyayState.ussdInputBuffer += key;

  if (NyayState.ussdMenuState === 'ROOT') {
    lcd.innerHTML = `ডায়াল করছেন:<br/><strong>${NyayState.ussdInputBuffer}</strong><br/><br/>[SEND চাপুন]`;
  } else if (NyayState.ussdMenuState === 'MAIN_MENU') {
    if (key === '1') {
      lcd.innerHTML = `
        <strong>কেস নং: NLAS-2026-0841</strong><br/>
        অবস্থা: শুনানির তারিখ ধার্য<br/>
        আদালত: CJM গাজীপুর<br/>
        আইনজীবী: Adv. সামিয়া জাহান<br/>
        <div style="margin-top:4px; font-size:0.68rem;">[0 চেপে প্রধান মেনু]</div>
      `;
    } else if (key === '2') {
      lcd.innerHTML = `
        <strong>জরুরি জামিন অধিকার</strong><br/>
        গ্রেপ্তারের ২৪ ঘণ্টার মধ্যে ম্যাজিস্ট্রেটের সামনে হাজির ও আইনজীবী পাওয়ার অধিকার রয়েছে।<br/>
        <div style="margin-top:4px; font-size:0.68rem;">[0 চেপে প্রধান মেনু]</div>
      `;
    } else if (key === '3') {
      lcd.innerHTML = `
        <strong>ফারায়েজ হিসাবক</strong><br/>
        আপনার জমির পরিমাণ ও ওয়ারিশের সংখ্যা জানিয়ে ১৬৪৩০ নম্বরে কল করুন।<br/>
        <div style="margin-top:4px; font-size:0.68rem;">[0 চেপে প্রধান মেনু]</div>
      `;
    } else if (key === '4') {
      lcd.innerHTML = `
        <strong>অনুরোধ গৃহীত হয়েছে!</strong><br/>
        ১৫ মিনিটের মধ্যে একজন সরকারি প্যারালিগ্যাল কল ব্যাক করবেন।<br/>
      `;
    } else if (key === '0') {
      pressUssdKey('CALL');
    }
  }
}

function toggleHotlineAudio() {
  const playBtn = document.getElementById('voice-play-audio-btn');
  const barsContainer = document.getElementById('waveform-canvas-box');
  const transcriptBox = document.getElementById('live-transcript-terminal');
  const dialectSelect = document.getElementById('voice-dialect-select');
  const dialect = dialectSelect ? dialectSelect.value : 'sylheti';

  if (NyayState.audioPlaying) {
    NyayState.audioPlaying = false;
    if (barsContainer) barsContainer.classList.remove('playing');
    if (playBtn) playBtn.innerHTML = `${SVG.play} অডিও শুনুন ও লাইভ ট্রান্সক্রিপ্ট`;
    clearInterval(NyayState.audioTimer);
    return;
  }

  NyayState.audioPlaying = true;
  if (barsContainer) barsContainer.classList.add('playing');
  if (playBtn) playBtn.innerHTML = `${SVG.square} প্লেব্যাক থামান`;

  const dialectScripts = {
    sylheti: [
      { time: '00:02', speaker: 'Caller (সিলেটি)', text: '“সালামুআলাইকুম বাজান, আমরার সুরমার চরো জমিনটা জোর করি দখল করি লাইসে মেম্বারে...”' },
      { time: '00:06', speaker: 'AI Intake Agent', text: '“ওয়ালাইকুম সালাম। আপনার জমির খতিয়ান বা পরচার কোনো কাগজ আছে কি? জেলা ও উপজেলা বলুন।”' },
      { time: '00:11', speaker: 'Caller (সিলেটি)', text: '“হ, সিএস পরচা আছে। বালাগঞ্জ উপজেলার। আমরা গরীব মানুষ, কোট-কাচারির টেকা নাই।”' },
      { time: '00:15', speaker: 'AI Classifier', text: '[শনাক্ত]: নদী চর ভূমি দখল (CrPC ১৪৫) • আইনগত সহায়তা নীতিমালা ২০১৪ প্যারা ২(ক) উত্তীর্ণ।' }
    ],
    chatgaya: [
      { time: '00:02', speaker: 'Caller (চাটগাঁইয়া)', text: '“আঁরে মেম্বারে ভিডাত্থুন খেদাই দিবা চাঁদ্দে, আঁই এহন খুনহানো যাইয়ুম?”' },
      { time: '00:06', speaker: 'AI Intake Agent', text: '“শান্ত হন। আপনার পরিচয় ও উপজেলার নাম বলুন, আমরা সরকারি বিনামূল্যে আইনজীবী প্রদান করব।”' },
      { time: '00:10', speaker: 'Caller (চাটগাঁইয়া)', text: '“আঁই আনোয়ারা থানার। কাইল রাইতে আঁর ঘরো আগুন লাগাই দিইয়ে।”' },
      { time: '00:14', speaker: 'AI Classifier', text: '[শনাক্ত]: জরুরি ফৌজদারি সহিংসতা • রেড অ্যালার্ট ডকেট তৈরি ও প্যানেল আইনজীবী বরাদ্দ।' }
    ],
    standard: [
      { time: '00:02', speaker: 'Caller (প্রমিত বাংলা)', text: '“হ্যালো, ১৬৪৩০ হটলাইন? আমার স্বামী যৌতুকের জন্য আমাকে বের করে দিয়েছে।”' },
      { time: '00:07', speaker: 'AI Intake Agent', text: '“জি, আপনি নিরাপদ আছেন তো? আপনার নিকটস্থ নারী ও শিশু ট্রাইব্যুনালে আবেদন করা হবে।”' },
      { time: '00:12', speaker: 'Caller (প্রমিত বাংলা)', text: '“আমার সাথে দুই বছরের সন্তান আছে। থাকার কোনো জায়গা নেই।”' },
      { time: '00:16', speaker: 'AI Classifier', text: '[শনাক্ত]: নারী-শিল্ড প্রটোকল সক্রিয় • জরুরি সুরক্ষা আদেশ ও নিরাপদ আশ্রয় কেন্দ্র রেফারেল।' }
    ]
  };

  const script = dialectScripts[dialect] || dialectScripts.sylheti;
  let lineIdx = 0;
  if (transcriptBox) transcriptBox.innerHTML = '';

  NyayState.audioTimer = setInterval(() => {
    if (lineIdx < script.length) {
      const line = script[lineIdx];
      const p = document.createElement('div');
      p.style.cssText = 'margin-bottom:0.5rem; font-size:0.8rem; padding:0.4rem; background:rgba(255,255,255,0.02); border-left:2px solid var(--accent-primary); border-radius:2px;';
      p.innerHTML = `<span style="color:var(--accent-light); font-weight:600; font-family:var(--font-mono); font-size:0.72rem;">[${line.time}] ${line.speaker}:</span> <span style="color:var(--text-bangla);">${line.text}</span>`;
      if (transcriptBox) {
        transcriptBox.appendChild(p);
        transcriptBox.scrollTop = transcriptBox.scrollHeight;
      }
      lineIdx++;
    } else {
      clearInterval(NyayState.audioTimer);
      NyayState.audioPlaying = false;
      if (barsContainer) barsContainer.classList.remove('playing');
      if (playBtn) playBtn.innerHTML = `${SVG.play} পুনরায় শুনুন`;
    }
  }, 1500 * NyayState.config.simSpeed);
}

/**
 * 7. WORKSPACE 3: FASTBAIL-BD CRYPTOGRAPHIC BENCH
 */
async function issueFastBailOrder() {
  const inmateId = document.getElementById('fastbail-inmate-id')?.value || 'মোঃ রফিকুল ইসলাম (বন্দি নং ৮৪১৯/ক)';
  const caseNumber = document.getElementById('fastbail-case-no')?.value || 'NLAS-2026-0841';
  const courtRef = 'চিফ জুডিসিয়াল ম্যাজিস্ট্রেট আদালত, গাজীপুর';
  const judgeId = 'JUDGE-DH-4401';
  const bailCondition = 'CrPC §497 জামিন মঞ্জুর, ৫,০০০ টাকা বন্ড';

  const outputContainer = document.getElementById('fastbail-judicial-pass-output');
  if (outputContainer) {
    outputContainer.innerHTML = `<div style="color:var(--accent-light); font-size:0.85rem; padding:1.5rem; text-align:center;">${SVG.cpu} ক্রিপ্টোগ্রাফিক কি-মেনিফেস্ট ও ডিজিটাল স্বাক্ষর প্রস্তুত হচ্ছে...</div>`;
  }

  const res = await dispatchWorkerTask('compute_crypto_bail', {
    method: NyayState.config.cryptoMethod,
    inmateId,
    caseNumber,
    courtRef,
    judgeId,
    bailCondition
  });

  const { signature, tokenBytes, verificationSpeedUs, method } = res.result;

  if (outputContainer) {
    outputContainer.innerHTML = `
      <div class="judicial-pass-card">
        <div style="width:125px; height:125px; background:#f1f5f9; border:1px solid #cbd5e1; padding:6px; border-radius:4px; flex-shrink:0;">
          <svg viewBox="0 0 100 100" width="100%" height="100%">
            <rect x="0" y="0" width="100" height="100" fill="#ffffff"/>
            <rect x="5" y="5" width="26" height="26" fill="#0f172a"/>
            <rect x="9" y="9" width="18" height="18" fill="#ffffff"/>
            <rect x="13" y="13" width="10" height="10" fill="#0f172a"/>
            <rect x="69" y="5" width="26" height="26" fill="#0f172a"/>
            <rect x="73" y="9" width="18" height="18" fill="#ffffff"/>
            <rect x="77" y="13" width="10" height="10" fill="#0f172a"/>
            <rect x="5" y="69" width="26" height="26" fill="#0f172a"/>
            <rect x="9" y="73" width="18" height="18" fill="#ffffff"/>
            <rect x="13" y="77" width="10" height="10" fill="#0f172a"/>
            <circle cx="45" cy="18" r="3" fill="#0f172a"/>
            <circle cx="55" cy="28" r="3" fill="#0f172a"/>
            <circle cx="45" cy="50" r="4" fill="#0f172a"/>
            <circle cx="35" cy="65" r="3" fill="#0f172a"/>
            <circle cx="65" cy="65" r="3" fill="#0f172a"/>
            <circle cx="78" cy="45" r="3" fill="#0f172a"/>
            <circle cx="85" cy="85" r="4" fill="#0f172a"/>
          </svg>
        </div>
        <div style="flex:1; display:flex; flex-direction:column; justify-content:space-between;">
          <div style="font-family:var(--font-heading); font-weight:700; color:#047857; font-size:0.9rem; text-transform:uppercase; letter-spacing:0.04em; display:flex; align-items:center; gap:0.4rem;">
            ${SVG.shieldCheck} বাংলাদেশ সুপ্রীম কোর্ট ডিজিটাল বেইল পাস
          </div>
          <div style="font-family:var(--font-bangla); font-size:0.8rem; line-height:1.45; margin:0.35rem 0;">
            <strong>বন্দি:</strong> ${inmateId}<br/>
            <strong>মামলা নং:</strong> ${caseNumber}<br/>
            <strong>আদেশ:</strong> ${bailCondition}
          </div>
          <div style="font-family:var(--font-mono); font-size:0.68rem; color:#475569; word-break:break-all;">
            <strong>সিগনেচার:</strong> ${signature.substring(0, 42)}...<br/>
            <strong>অ্যালগরিদম:</strong> ${method.toUpperCase()} (${tokenBytes} Bytes) • <strong>যাচাই সময়:</strong> ${verificationSpeedUs}µs
          </div>
        </div>
      </div>
      <div style="margin-top:0.75rem;">
        <button class="btn-header-action btn-header-primary" onclick="simulateGateScan('${caseNumber}', '${inmateId}', '${method}')">
          ${SVG.camera} কারাগার ফটক ক্যামেরা স্ক্যান টেস্ট
        </button>
      </div>
    `;
  }
}

function simulateGateScan(caseNo, inmate, method) {
  const logBox = document.getElementById('fastbail-gate-log-box');
  if (!logBox) return;

  logBox.innerHTML = `
    <div style="color:var(--accent-light); font-size:0.75rem; font-family:var(--font-mono); line-height:1.5;">
      [${new Date().toLocaleTimeString()}] QR Scanner Camera Activated...<br/>
      [${new Date().toLocaleTimeString()}] Decoding Payload: ${caseNo}...<br/>
      [${new Date().toLocaleTimeString()}] Fetching Supreme Court Judicial CA Root...<br/>
      [${new Date().toLocaleTimeString()}] Cryptographic Verification: SUCCESS (Valid ${method.toUpperCase()} Seal).<br/>
      <span style="color:#34d399; font-weight:700;">[STATUS]: বন্দি মুক্তির বৈধতা নিশ্চিত। কারাগার ফটক খোলার অনুমোদন প্রদান করা হলো।</span>
    </div>
  `;
}

/**
 * 8. WORKSPACE 4: BHOO-CHITRA GIS & FARAYEZ
 */
function initSplitScreenMap() {
  const container = document.getElementById('gis-map-viewport');
  const divider = document.getElementById('gis-slider-divider');
  const satLayer = document.getElementById('gis-sat-layer');

  if (!container || !divider || !satLayer) return;

  let isDragging = false;

  const onMove = (clientX) => {
    const rect = container.getBoundingClientRect();
    let x = clientX - rect.left;
    if (x < 10) x = 10;
    if (x > rect.width - 10) x = rect.width - 10;
    const percent = (x / rect.width) * 100;

    divider.style.left = `${percent}%`;
    satLayer.style.clipPath = `polygon(0 0, ${percent}% 0, ${percent}% 100%, 0 100%)`;
    NyayState.mapSliderPosition = percent;
  };

  divider.addEventListener('mousedown', () => { isDragging = true; });
  window.addEventListener('mouseup', () => { isDragging = false; });
  window.addEventListener('mousemove', (e) => {
    if (isDragging) onMove(e.clientX);
  });

  divider.addEventListener('touchstart', () => { isDragging = true; });
  window.addEventListener('touchend', () => { isDragging = false; });
  window.addEventListener('touchmove', (e) => {
    if (isDragging && e.touches[0]) onMove(e.touches[0].clientX);
  });
}

async function triggerFarayezCalculation() {
  const landInput = document.getElementById('farayez-land-decimals');
  const widowInput = document.getElementById('farayez-widows-count');
  const sonInput = document.getElementById('farayez-sons-count');
  const daughterInput = document.getElementById('farayez-daughters-count');

  const totalLand = parseFloat(landInput?.value) || 84.0;
  const relations = {
    widow: parseInt(widowInput?.value, 10) || 1,
    sons: parseInt(sonInput?.value, 10) || 2,
    daughters: parseInt(daughterInput?.value, 10) || 3
  };

  const res = await dispatchWorkerTask('compute_farayez_shares', {
    totalLandDecimals: totalLand,
    relations
  });

  const outputContainer = document.getElementById('farayez-shares-list');
  if (outputContainer && res.result && res.result.shares) {
    outputContainer.innerHTML = `
      <div style="font-size:0.75rem; font-weight:700; color:var(--accent-light); margin-bottom:0.5rem; display:flex; justify-content:space-between;">
        <span>মোট জমি: ${totalLand} শতক</span>
        <span style="color:var(--text-muted);">${res.result.totalHeirsCount} জন ওয়ারিশ</span>
      </div>
      <div style="display:flex; flex-direction:column; gap:0.35rem;">
        ${res.result.shares.map(s => `
          <div style="display:flex; align-items:center; justify-content:space-between; background:var(--surface-base); padding:0.45rem 0.65rem; border-radius:4px; border:1px solid var(--border-subtle); font-size:0.75rem;">
            <div>
              <strong style="color:var(--text-main);">${s.relation}</strong>
              <span style="color:var(--text-muted); font-size:0.68rem; margin-left:0.25rem;">(${s.quranicClass})</span>
            </div>
            <div style="text-align:right;">
              <span style="color:var(--accent-light); font-weight:700; font-family:var(--font-mono);">${s.landDecimals} শতক</span>
              <span style="color:var(--text-muted); font-size:0.68rem; margin-left:0.25rem;">(${s.shareFraction})</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }
}

/**
 * 9. WORKSPACE 5: ARUCO OPTICAL SCANNER
 */
async function triggerArucoOpticalScan() {
  if (NyayState.scanInProgress) return;
  NyayState.scanInProgress = true;

  const viewport = document.getElementById('aruco-camera-viewport');
  const scanBtn = document.getElementById('aruco-start-scan-btn');
  const resultCard = document.getElementById('aruco-detected-data-table');

  if (viewport) {
    viewport.classList.add('scanning');
    viewport.classList.remove('scanned');
  }
  if (scanBtn) {
    scanBtn.disabled = true;
    scanBtn.innerHTML = `${SVG.cpu} অপটিক্যাল পার্সপেক্টিভ ওয়ার্প ও OCR চলমান...`;
  }

  const res = await dispatchWorkerTask('simulate_ocr_extraction', {
    pipelineMethod: NyayState.config.ocrMethod,
    documentType: 'LA_FORM_1_APPLICATION'
  });

  setTimeout(() => {
    if (viewport) {
      viewport.classList.remove('scanning');
      viewport.classList.add('scanned');
    }
    if (scanBtn) {
      scanBtn.disabled = false;
      scanBtn.innerHTML = `${SVG.checkCircle} স্ক্যান সম্পন্ন (${res.durationMs}ms)`;
    }

    if (resultCard && res.result && res.result.detectedFields) {
      resultCard.innerHTML = `
        <div style="font-size:0.8rem; font-weight:700; color:var(--accent-light); margin-bottom:0.5rem; display:flex; justify-content:space-between;">
          <span>${SVG.checkCircle} এক্সট্র্যাক্ট করা ফিল্ড (${res.result.detectedFields.length}টি)</span>
          <span style="color:var(--text-muted); font-family:var(--font-mono);">${res.result.recognizedConfidence}% আত্মবিশ্বাস</span>
        </div>
        <div style="display:grid; grid-template-columns:1fr; gap:0.45rem;">
          ${res.result.detectedFields.map(f => `
            <div style="background:var(--surface-base); padding:0.45rem 0.65rem; border-radius:4px; border:1px solid var(--border-subtle); font-size:0.75rem; display:flex; justify-content:space-between;">
              <span style="color:var(--text-muted);">${f.bangla} (${f.label})</span>
              <strong style="color:var(--text-main); font-family:var(--font-bangla);">${f.value}</strong>
            </div>
          `).join('')}
        </div>
      `;
    }

    NyayState.scanInProgress = false;
  }, 1200 * NyayState.config.simSpeed);
}

/**
 * 10. WORKSPACE 6: WHATSAPP & NARI-SHIELD ESCAPE
 */
function triggerNariShieldEscape() {
  const disguise = document.getElementById('nari-disguise-screen');
  if (disguise) {
    disguise.classList.add('active');
  }
}

function closeNariShieldEscape() {
  const disguise = document.getElementById('nari-disguise-screen');
  if (disguise) {
    disguise.classList.remove('active');
  }
}

function sendWhatsAppMessage() {
  const input = document.getElementById('whatsapp-chat-input');
  const stream = document.getElementById('whatsapp-chat-messages');
  if (!input || !stream) return;

  const txt = input.value.trim();
  if (!txt) return;

  // Append user message
  const userBubble = document.createElement('div');
  userBubble.style.cssText = 'align-self:flex-end; background:#005c4b; color:#e9edef; padding:0.6rem 0.85rem; border-radius:8px 0 8px 8px; max-width:82%; font-size:0.82rem;';
  userBubble.textContent = txt;
  stream.appendChild(userBubble);
  input.value = '';
  stream.scrollTop = stream.scrollHeight;

  // Simulate instant NLASO AI Triage response
  setTimeout(() => {
    const trackingId = `NLAS-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const botBubble = document.createElement('div');
    botBubble.style.cssText = 'align-self:flex-start; background:#202c33; color:#d1d7db; padding:0.6rem 0.85rem; border-radius:0 8px 8px 8px; max-width:82%; font-size:0.82rem; border-left:3px solid #00a884;';
    botBubble.innerHTML = `<strong>NLASO সহায়তা স্বয়ংক্রিয় উত্তর:</strong> আপনার তথ্য গ্রহণ করা হয়েছে এবং নিকটস্থ জেলা লিগ্যাল এইড অফিসার ও প্যানেল আইনজীবীকে অবহিত করা হয়েছে। কেস ট্র্যাকিং আইডি: <strong style="color:#34d399;">${trackingId}</strong>`;
    stream.appendChild(botBubble);
    stream.scrollTop = stream.scrollHeight;
  }, 500);
}

/**
 * 11. ADMIN HUB & STATUTORY FORMS
 */
function toggleAdminDrawer(forceOpen) {
  const overlay = document.getElementById('admin-drawer-overlay');
  if (!overlay) return;
  if (typeof forceOpen === 'boolean') {
    overlay.classList.toggle('active', forceOpen);
  } else {
    overlay.classList.toggle('active');
  }
}

function generateStatutoryForm(code) {
  const c = BANGLADESH_CASES[NyayState.activeCaseIndex];
  alert(`[অফিসিয়াল ফরম প্রস্তুত - ${code}]\n\nবাংলাদেশ আইন ও বিচার বিভাগ অনুমোদিত সংবিধিবদ্ধ ফরম:\n\nমামলা নং: ${c.id}\nআবেদনকারী: ${c.applicant}\nআদালত: ${c.court}\nমনোনীত আইনজীবী: ${c.panelLawyer}\n\n(ডিজিটাল ফরম প্রিন্ট ও ডাউনলোডের জন্য প্রস্তুত করা হয়েছে)`);
}
