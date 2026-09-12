/**
 * NyaySetu Interactive Demo Prototype & Architecture Control Center (app.js)
 * High-velocity reactive state store, Web Worker bridge, and multi-method simulator.
 *
 * STRICT REQUIREMENT: ZERO EMOJIS - 100% PURE SVG VECTOR ICONS
 */

// SVG Icon Dictionary for clean vector rendering
const SVG_ICONS = {
  scales: `<svg class="svg-icon svg-icon-stroke" viewBox="0 0 24 24"><path d="M12 3v18M6 8l6-5 6 5M3 13l3-5 3 5a3 3 0 0 1-6 0zM15 13l3-5 3 5a3 3 0 0 1-6 0zM4 21h16"/></svg>`,
  gavel: `<svg class="svg-icon svg-icon-stroke" viewBox="0 0 24 24"><path d="m14 13-7.5 7.5a2.12 2.12 0 1 1-3-3L11 10M16 16l6-6M8 8l6-6M9 7l8 8M21 11l-8-8"/></svg>`,
  shieldCheck: `<svg class="svg-icon svg-icon-stroke" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
  cpu: `<svg class="svg-icon svg-icon-stroke" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>`,
  phone: `<svg class="svg-icon svg-icon-stroke" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  mapPin: `<svg class="svg-icon svg-icon-stroke" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  fileText: `<svg class="svg-icon svg-icon-stroke" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  qrCode: `<svg class="svg-icon svg-icon-stroke" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
  sliders: `<svg class="svg-icon svg-icon-stroke" viewBox="0 0 24 24"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>`,
  checkCircle: `<svg class="svg-icon svg-icon-stroke" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  alertOctagon: `<svg class="svg-icon svg-icon-stroke" viewBox="0 0 24 24"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  camera: `<svg class="svg-icon svg-icon-stroke" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
  mic: `<svg class="svg-icon svg-icon-stroke" viewBox="0 0 24 24"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>`,
  zap: `<svg class="svg-icon svg-icon-stroke" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  play: `<svg class="svg-icon" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
  square: `<svg class="svg-icon" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>`,
  close: `<svg class="svg-icon svg-icon-stroke" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  users: `<svg class="svg-icon svg-icon-stroke" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  download: `<svg class="svg-icon svg-icon-stroke" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  messageSquare: `<svg class="svg-icon svg-icon-stroke" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`
};

// Architecture State Store
const NyayState = {
  config: {
    theme: 'theme-sovereign',
    triageMethod: 'hybrid', // hybrid | statutory | llm
    cryptoMethod: 'ed25519', // ed25519 | rsa4096 | p256
    mapMethod: 'tps', // tps | homography | delaunay
    speechMethod: 'freeswitch', // freeswitch | asterisk | webrtc
    ocrMethod: 'aruco_quad', // aruco_quad | segmented | wasm
    simSpeed: 1.0, // 0 (instant) | 1 (realtime) | 2.5 (slow-mo debug)
    concurrency: 'worker' // worker | main_thread
  },
  activeCaseIndex: 0,
  worker: null,
  workerActive: false,
  pendingTasks: new Map(),
  taskCounter: 0,
  ussdMenuState: 'ROOT',
  ussdInputBuffer: '',
  audioPlaying: false,
  audioTimer: null,
  scanInProgress: false,
  mapSliderPosition: 50
};

// 10 Hyper-Realistic Grounded Bangladesh Legal Scenarios
const BANGLADESH_CASES = [
  {
    id: 'NLAS-2026-0841',
    category: 'Undertrial Detention (কারাবন্দী জামিন বিলম্বে)',
    urgency: 'URGENT_RED',
    title: 'Kashimpur Undertrial Detained 28 Months Without Framing of Charge',
    applicant: 'মোঃ রফিকুল ইসলাম (৩৫)',
    detainee: 'মোঃ রফিকুল ইসলাম, বন্দি নং- ৮৪১৯/ক',
    prison: 'কাশিমপুর হাই-সিকিউরিটি কেন্দ্রীয় কারাগার, গাজীপুর',
    dispute: 'CrPC §379 (চুরি)। সর্বোচ্চ সম্ভাব্য শাস্তি ৩ বছর। ইতিমধ্যে ২৮ মাস বিনা বিচারে আটক। জামিন শুনানিতে আইনজীবীর অনুপস্থিতি।',
    annualIncomeBdt: 42000,
    eligibilityRule: 'Para 2(Cha), Legal Aid Policy 2014 (কারাগারে বিনা বিচারে আটক অসচ্ছল ব্যক্তি)',
    statutoryAction: 'CrPC §497 জামিন আবেদন প্রস্তুতকরণ ও LA Form 23 স্বতঃপ্রণোদিত নোটিশ প্রেরণ',
    panelLawyer: 'Adv. সামিয়া জাহান (এনরোলমেন্ট নং: ৬৮০২, বাংলাদেশ বার কাউন্সিল)',
    recommendedBailBond: 5000,
    court: 'চিফ জুডিসিয়াল ম্যাজিস্ট্রেট আদালত, গাজীপুর'
  },
  {
    id: 'NLAS-2026-1102',
    category: 'Riverine Char Land Dispute (নদী সিকস্তি ও পয়স্তি ভূমি)',
    urgency: 'HIGH_YELLOW',
    title: 'Jamalpur River Char Encroachment (CS 1888 vs RS 1970)',
    applicant: 'মোছাঃ রেজিয়া খাতুন (বিধবা)',
    opponent: 'মোঃ রফিকুল ইসলাম মেম্বার ও অন্যান্য',
    location: 'দেওয়ানগঞ্জ, বাহাদুরাবাদ মৌজা, জামালপুর',
    dispute: 'ব্রহ্মপুত্র নদীর জেগে ওঠা চরের ১৪.৮ শতক পৈতৃক ফসলি জমি জোরপূর্বক দখল। ভুয়া খতিয়ান সৃষ্টি।',
    annualIncomeBdt: 58000,
    eligibilityRule: 'Para 2(Ka), Legal Aid Policy 2014 (অসচ্ছল বিধবা ও নদীভাঙন কবলিত পরিবার)',
    statutoryAction: 'ধারা ১৪৫ ফৌজদারি কার্যবিধি ও দেওয়ানি প্রতিকার বণ্টন মামলা',
    panelLawyer: 'Adv. তানভীর আহমেদ (সিনিয়র রিট ও ল্যান্ড প্র্যাকটিশনার)',
    encroachmentDecimals: 14.8,
    court: 'সহকারী জজ আদালত, দেওয়ানগঞ্জ'
  },
  {
    id: 'NLAS-2026-0319',
    category: 'Garment Worker Wage Deprivation (শ্রমিক বেতন বকেয়া)',
    urgency: 'HIGH_YELLOW',
    title: 'Unlawful Factory Layoff & 4-Month Arrears for 18 Women Workers',
    applicant: 'মোছাঃ মর্জিনা বেগম ও ১৭ জন কর্মী',
    opponent: 'ম্যানেজিং ডিরেক্টর, সানরাইজ অ্যাপারেলস লিমিটেড, টঙ্গী',
    location: 'টঙ্গী শিল্পাঞ্চল, গাজীপুর',
    dispute: 'বাংলাদেশ শ্রম আইন ২০০৬ এর ধারা ২৬ ও ৩৩ লঙ্ঘন করে নোটিশ ব্যতীত ছাঁটাই। ৪ মাসের বকেয়া বেতন ও সার্ভিস বেনিফিট আত্মসাৎ।',
    annualIncomeBdt: 96000,
    eligibilityRule: 'Para 2(Gha), Legal Aid Policy 2014 (অসচ্ছল পোশাক শ্রমিক)',
    statutoryAction: 'শ্রম আদালত ঢাকা-৩ এ ধারা ৩৩(১) মোকাদ্দমা ও বিকল্প বিরোধ নিষ্পত্তি (ADR)',
    panelLawyer: 'Adv. ফারহানা হক (শ্রম আইন বিশেষজ্ঞ)',
    court: '৩য় শ্রম আদালত, ঢাকা'
  },
  {
    id: 'NLAS-2026-2490',
    category: 'Domestic & Dowry Violence (যৌতুক ও পারিবারিক সহিংসতা)',
    urgency: 'URGENT_RED',
    title: 'Emergency Protection Order & Shelter Placement (Nari-Shield Protocol)',
    applicant: 'সুরভী আক্তার (২২)',
    opponent: 'মোঃ জাহিদ হাসান ও শ্বশুরবাড়ির লোকজন',
    location: 'মিরপুর-১, ঢাকা',
    dispute: 'পারিবারিক সহিংসতা (প্রতিরোধ ও সুরক্ষা) আইন ২০১০ এবং যৌতুক নিরোধ আইন ২০১৮। শারীরিক নির্যাতন ও গৃহচ্যুত করার হুমকি।',
    annualIncomeBdt: 12000,
    eligibilityRule: 'Para 2(Kha), Legal Aid Policy 2014 (সহিংসতার শিকার নারী ও সুরক্ষাপ্রার্থী)',
    statutoryAction: 'পারিবারিক সুরক্ষা আদেশ, অন্তর্বর্তীকালীন খোরাকি ও নিরাপদ আশ্রয়কেন্দ্রে স্থানান্তর',
    panelLawyer: 'Adv. নাসরিন সুলতানা (বাংলাদেশ জাতীয় মহিলা আইনজীবী সমিতি প্যানেল)',
    court: 'নারী ও শিশু নির্যাতন দমন ট্রাইব্যুনাল-২, ঢাকা'
  },
  {
    id: 'NLAS-2026-1550',
    category: 'Wetland Fisherman False Imprisonment (হাওর জলমহাল ষড়যন্ত্র)',
    urgency: 'URGENT_RED',
    title: 'Sunamganj Haor Subsistence Fisherman Falsely Booked by Leaseholder',
    applicant: 'কার্তিক বর্মন (মৎস্যজীবী)',
    opponent: 'জলমহাল ইজারাদার সিন্ডিকেট',
    location: 'তাহিরপুর, সুনামগঞ্জ',
    dispute: 'হাওরে উন্মুক্ত জলাশয়ে ঐতিহ্যগত মাছ ধরার সময় মিথ্যা ডাকাতির প্রস্তুতি মামলায় (দণ্ডবিধি ৩৯৯/৪০২) জড়ানো।',
    annualIncomeBdt: 36000,
    eligibilityRule: 'Para 2(Ja), Legal Aid Policy 2014 (প্রান্তিক ক্ষুদ্র মৎস্যজীবী সম্প্রদায়)',
    statutoryAction: 'উচ্চ আদালত হতে জামিন ও মামলা প্রত্যাহারের আইনি পদক্ষেপ',
    panelLawyer: 'Adv. দেওয়ান মোবারক হোসেন',
    court: 'দায়রা জজ আদালত, সুনামগঞ্জ'
  },
  {
    id: 'NLAS-2026-0771',
    category: 'Farayez Inheritance Partition (পৈতৃক ফারায়েজ সম্পত্তি বণ্টন)',
    urgency: 'STANDARD_GREEN',
    title: 'Ancestral Homestead Partition for 1 Widow, 2 Sons, 3 Daughters',
    applicant: 'শাহানা পারভীন (কন্যা)',
    opponent: 'বড় ভাই ও দখলদার পক্ষ',
    location: 'মুন্সীগঞ্জ সদর, মুন্সীগঞ্জ',
    dispute: 'পিতার মৃত্যুর পর ফারায়েজ অনুযায়ী ৮৪ শতক জমির বণ্টন অস্বীকার। কন্যাদের অংশ দিতে অস্বীকৃতি।',
    annualIncomeBdt: 72000,
    eligibilityRule: 'Para 2(Ka), Legal Aid Policy 2014 (সম্পত্তি থেকে বঞ্চিত নারী ওয়ারিশ)',
    statutoryAction: 'বণ্টন মামলা (Partition Suit) ও প্রি-ট্রায়াল সালিশ বৈঠক',
    panelLawyer: 'Adv. আবুল কাশেম',
    court: 'যুগ্ম জেলা জজ ১ম আদালত, মুন্সীগঞ্জ'
  },
  {
    id: 'NLAS-2026-3012',
    category: 'July Movement Detainee (আন্দোলনকালীন বন্দী সহায়তা)',
    urgency: 'URGENT_RED',
    title: 'Detained College Student Held in Special Powers Act / CrPC 144 Case',
    applicant: 'মায়ের পক্ষে আবেদন: মোছাঃ কুলসুম বেগম',
    detainee: 'তানজিম আহমেদ (১৯, শিক্ষার্থী)',
    prison: 'কেরানীগঞ্জ ঢাকা কেন্দ্রীয় কারাগার',
    dispute: 'গত জুলাই আন্দোলনের সময় সমাবেশস্থলে থাকা অবস্থায় গ্রেপ্তার। মিথ্যা বিস্ফোরক দ্রব্য আইনের মামলায় আটক।',
    annualIncomeBdt: 60000,
    eligibilityRule: 'Para 2(Chha), Legal Aid Policy 2014 (বিশেষ পরিস্থিতির শিকার অসচ্ছল নাগরিক)',
    statutoryAction: 'জরুরি জামিন আবেদন ও মানবাধিকার লঙ্ঘনের বিশেষ রিট নোটিশ',
    panelLawyer: 'Adv. খন্দকার আশরাফুল আলম',
    court: 'মহানগর দায়রা জজ আদালত, ঢাকা'
  },
  {
    id: 'NLAS-2026-0925',
    category: 'Indigenous Land Dispute (পার্বত্য জেলা ক্ষুদ্র নৃগোষ্ঠী ভূমি অধিকার)',
    urgency: 'HIGH_YELLOW',
    title: 'Rangamati Tribal Land Grievance (CHT Land Commission)',
    applicant: 'উচাই প্রু মারমা',
    opponent: 'প্রভাবশালী রিজার্ভ লিজ গ্রহীতা',
    location: 'কাপ্তাই, রাঙামাটি পার্বত্য জেলা',
    dispute: 'পার্বত্য চট্টগ্রাম ভূমি বিরোধ নিষ্পত্তি কমিশন আইন ২০০১ এর অধীনে রেকর্ডীয় প্রথাগত জুম ভূমিতে অনুপ্রবেশ।',
    annualIncomeBdt: 48000,
    eligibilityRule: 'Para 2(Jha), Legal Aid Policy 2014 (অনগ্রসর ক্ষুদ্র নৃ-গোষ্ঠী সম্প্রদায়)',
    statutoryAction: 'ভূমি কমিশন ট্রাইব্যুনালে আনুষ্ঠানিক অভিযোগ ও অন্তর্বর্তীকালীন স্থগিতাদেশ',
    panelLawyer: 'Adv. সুশান্ত চাকমা',
    court: 'পার্বত্য চট্টগ্রাম ভূমি বিরোধ নিষ্পত্তি কমিশন'
  },
  {
    id: 'NLAS-2026-1899',
    category: 'Human Trafficking Victim Recovery (মানবপাচার ভিকটিম উদ্ধার ও পুনর্বাসন)',
    urgency: 'URGENT_RED',
    title: 'Rescue & Legal Protection for Cross-Border Trafficked Minor',
    applicant: 'পিতার পক্ষে: মোঃ সোলেমান মিয়া',
    opponent: 'সীমান্তবর্তী পাচারকারী চক্র',
    location: 'শার্শা, যশোর সীমান্ত',
    dispute: 'মানবপাচার প্রতিরোধ ও দমন আইন ২০১২ এর ধারা ৬/৭। চাকরির প্রলোভন দেখিয়ে অপ্রাপ্তবয়স্ক কন্যাকে সীমান্ত পার করা।',
    annualIncomeBdt: 30000,
    eligibilityRule: 'Para 2(Ta), Legal Aid Policy 2014 (পাচারের শিকার ব্যক্তি ও তার পরিবার)',
    statutoryAction: 'ভিকটিম প্রটেকশন আদেশ, সরকারি শেল্টারে সুরক্ষা ও পুলিশি চার্জশিট মনিটরিং',
    panelLawyer: 'Adv. সেলিনা বেগম',
    court: 'মানবপাচার অপরাধ দমন ট্রাইব্যুনাল, যশোর'
  },
  {
    id: 'NLAS-2026-2150',
    category: 'Brick Kiln Bonded Labor (ইটভাটা বন্ধকী শ্রম ও মানবাধিকার লঙ্ঘন)',
    urgency: 'HIGH_YELLOW',
    title: 'Illegal Physical Confinement of 6 Families at Damurhuda Brick Kiln',
    applicant: 'শ্রী অনিল রবিদাস',
    opponent: 'মালিক, মেসার্স স্টার ব্রিকস, চুয়াডাঙ্গা',
    location: 'দামুড়হুদা, চুয়াডাঙ্গা',
    dispute: 'দাদন বা অগ্রিম ঋণের অযুহাতে ৬টি দিনমজুর পরিবারের চলাচলের স্বাধীনতা হরণ। সংবিধানের ধারা ৩৪ (জবরদস্তিমূলক শ্রম নিষিদ্ধকরণ)।',
    annualIncomeBdt: 40000,
    eligibilityRule: 'Para 2(Tha), Legal Aid Policy 2014 (দাসত্বতুল্য বন্ধকী শ্রমের শিকার দলিত পরিবার)',
    statutoryAction: 'নির্বাহী ম্যাজিস্ট্রেট আদালতে তল্লাশি পরোয়ানা ও উদ্ধার অভিযান পরিচালনা',
    panelLawyer: 'Adv. গোলাম মোস্তফা',
    court: 'উপজেলা নির্বাহী ম্যাজিস্ট্রেট আদালত, দামুড়হুদা'
  }
];

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initWebWorker();
  initTheme();
  initEventListeners();
  renderCaseQueue();
  selectCase(0);
  initSplitScreenMap();
  triggerFarayezCalculation();
  updateTelemetry();
});

/**
 * 1. Web Worker Engine Initialization
 */
function initWebWorker() {
  const telemetryPill = document.getElementById('worker-telemetry-pill');

  if (window.Worker) {
    try {
      NyayState.worker = new Worker('worker-compute.js');
      NyayState.worker.onmessage = handleWorkerResponse;
      NyayState.worker.onerror = (err) => {
        console.warn('Worker error, fallback to async main thread:', err);
        NyayState.workerActive = false;
        updateWorkerStatus(false);
      };
      NyayState.workerActive = true;
      updateWorkerStatus(true);

      // Run initial benchmark
      dispatchWorkerTask('benchmark_engine', { iterations: 50000 });
    } catch (e) {
      console.warn('Web Worker initialization blocked or unsupported:', e);
      NyayState.workerActive = false;
      updateWorkerStatus(false);
    }
  } else {
    NyayState.workerActive = false;
    updateWorkerStatus(false);
  }
}

function updateWorkerStatus(active) {
  const pill = document.getElementById('worker-telemetry-pill');
  if (!pill) return;
  if (active) {
    pill.innerHTML = `<span class="indicator-dot"></span>Worker-Core-01 Active (4 Threads)`;
    pill.style.borderColor = 'var(--border-strong)';
  } else {
    pill.innerHTML = `<span class="indicator-dot" style="background:#f59e0b;box-shadow:0 0 8px #f59e0b"></span>Main Thread Async (Fallback)`;
  }
}

function dispatchWorkerTask(task, payload) {
  return new Promise((resolve, reject) => {
    const taskId = ++NyayState.taskCounter;
    NyayState.pendingTasks.set(taskId, { resolve, reject, task, timestamp: performance.now() });

    if (NyayState.workerActive && NyayState.config.concurrency === 'worker') {
      NyayState.worker.postMessage({ id: taskId, task, payload });
    } else {
      // Async main-thread fallback emulation
      setTimeout(async () => {
        try {
          const fakeResult = await executeMainThreadFallback(task, payload);
          resolve({ result: fakeResult, durationMs: 4.2 });
        } catch (e) {
          reject(e);
        }
      }, 20);
    }
  });
}

function handleWorkerResponse(e) {
  const { id, success, task, result, error, durationMs, workerThreadId } = e.data;
  const pending = NyayState.pendingTasks.get(id);
  if (!pending) return;

  NyayState.pendingTasks.delete(id);

  if (success) {
    // Update live benchmark indicator
    const perfIndicator = document.getElementById('last-compute-ms');
    if (perfIndicator) {
      perfIndicator.textContent = `${durationMs}ms (${task})`;
    }
    pending.resolve({ result, durationMs, workerThreadId });
  } else {
    console.error('Worker task failed:', task, error);
    pending.reject(new Error(error));
  }
}

async function executeMainThreadFallback(task, payload) {
  if (task === 'compute_crypto_bail') {
    return {
      method: payload.method,
      hashHex: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
      signature: 'ASYNC_FALLBACK_SIG_' + Math.random().toString(16).substring(2),
      tokenBytes: 420,
      verificationSpeedUs: 450,
      status: 'AUTHENTIC_JUDICIAL_SEAL'
    };
  }
  return { status: 'MAIN_THREAD_OK' };
}

/**
 * 2. Theme & Method Configuration
 */
function initTheme() {
  document.body.className = NyayState.config.theme;
}

function setTheme(themeName) {
  NyayState.config.theme = themeName;
  document.body.className = themeName;
  updateTelemetry();
}

function updateTelemetry() {
  const themePill = document.getElementById('telemetry-theme-label');
  if (themePill) {
    const labels = {
      'theme-sovereign': 'Sovereign Justice',
      'theme-slate': 'High Court Slate',
      'theme-midnight': 'Midnight Judicial',
      'theme-amber': 'Legal Aid Amber'
    };
    themePill.textContent = labels[NyayState.config.theme] || 'Sovereign';
  }

  const methodBadge = document.getElementById('active-triage-method-badge');
  if (methodBadge) {
    const map = {
      'hybrid': 'Triage: Hybrid Ensemble (Rules + LLM)',
      'statutory': 'Triage: Pure 2014 Statutory Rules',
      'llm': 'Triage: Generative Legal LLM (Llama 3.3)'
    };
    methodBadge.textContent = map[NyayState.config.triageMethod] || NyayState.config.triageMethod;
  }
}

/**
 * 3. Case Queue & Docket Controller
 */
function renderCaseQueue() {
  const container = document.getElementById('case-queue-container');
  if (!container) return;

  container.innerHTML = BANGLADESH_CASES.map((c, idx) => {
    const urgencyClass = c.urgency === 'URGENT_RED' ? 'urgency-red' : c.urgency === 'HIGH_YELLOW' ? 'urgency-yellow' : 'urgency-green';
    const urgencyText = c.urgency === 'URGENT_RED' ? 'জরুরি রেড অ্যালার্ট' : c.urgency === 'HIGH_YELLOW' ? 'মধ্যম অগ্রাধিকার' : 'সাধারণ সালিশ';
    const isActive = idx === NyayState.activeCaseIndex ? 'active' : '';

    return `
      <div class="case-queue-item ${isActive}" onclick="selectCase(${idx})">
        <div class="case-item-header">
          <span class="case-id-badge">${c.id}</span>
          <span class="case-urgency-badge ${urgencyClass}">${urgencyText}</span>
        </div>
        <div class="case-title-text">${c.title}</div>
        <div class="case-snippet">${c.category} • ${c.applicant}</div>
      </div>
    `;
  }).join('');
}

function selectCase(idx) {
  NyayState.activeCaseIndex = idx;
  renderCaseQueue();

  const c = BANGLADESH_CASES[idx];
  if (!c) return;

  // Update Bengali Case Brief Sheet
  const briefSheet = document.getElementById('bengali-brief-container');
  if (briefSheet) {
    const meansPassed = c.annualIncomeBdt <= 150000;

    briefSheet.innerHTML = `
      <div class="brief-header-row">
        <div>
          <div class="tier-badge" style="margin-bottom:0.35rem;">
            ${SVG_ICONS.fileText} জাতীয় আইনগত সহায়তা প্রদান সংস্থা (NLASO)
          </div>
          <h3 style="font-size:1.15rem; color:var(--text-main);">${c.category}</h3>
        </div>
        <div style="text-align:right;">
          <span class="case-id-badge" style="font-size:0.9rem;">${c.id}</span>
          <div style="font-size:0.75rem; color:var(--text-muted);">${c.court}</div>
        </div>
      </div>

      <div class="brief-meta-grid">
        <div class="brief-meta-item">
          <span class="brief-meta-label">আবেদনকারী / বন্দি</span>
          <span class="brief-meta-val">${c.applicant}</span>
        </div>
        <div class="brief-meta-item">
          <span class="brief-meta-label">প্রতিপক্ষ / প্রতিষ্ঠান</span>
          <span class="brief-meta-val">${c.opponent || c.prison}</span>
        </div>
        <div class="brief-meta-item">
          <span class="brief-meta-label">বার্ষিক পারিবারিক আয়</span>
          <span class="brief-meta-val">${c.annualIncomeBdt.toLocaleString()} টাকা (${meansPassed ? 'সচ্ছলতার সীমা উত্তীর্ণ' : 'সীমা বহির্ভূত'})</span>
        </div>
        <div class="brief-meta-item">
          <span class="brief-meta-label">আইনগত অধিকারের বিধান</span>
          <span class="brief-meta-val">${c.eligibilityRule}</span>
        </div>
      </div>

      <div style="background:rgba(0,0,0,0.25); padding:1rem; border-radius:var(--radius-sm); border:1px solid var(--border-subtle); margin-bottom:1rem;">
        <div style="font-size:0.75rem; color:var(--accent-light); font-weight:700; margin-bottom:0.35rem;">
          ${SVG_ICONS.scales} বিরোধের সারসংক্ষেপ ও আইনি প্রেক্ষাপট:
        </div>
        <p style="font-size:0.85rem; color:var(--text-bangla); line-height:1.6;">
          ${c.dispute}
        </p>
      </div>

      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem; background:var(--bg-tertiary); padding:0.85rem; border-radius:var(--radius-sm);">
        <div>
          <span class="brief-meta-label">ধারা ১৫ প্যানেল আইনজীবী সুপারিশ</span>
          <span class="brief-meta-val" style="color:var(--accent-light);">${c.panelLawyer}</span>
        </div>
        <button class="btn-telemetry btn-telemetry-primary" onclick="generateStatutoryForm('LA_20')">
          ${SVG_ICONS.download} LA-২০ ফরম প্রস্তুত করুন
        </button>
      </div>
    `;
  }

  // Pre-fill FastBail module if it's an undertrial case
  if (c.prison) {
    const inmateInput = document.getElementById('fastbail-inmate-id');
    const caseInput = document.getElementById('fastbail-case-no');
    if (inmateInput) inmateInput.value = c.detainee;
    if (caseInput) caseInput.value = c.id + ' (CrPC §497)';
  }
}

/**
 * 4. ArUco Paper Scanner & Perspective Warp
 */
async function triggerArucoScan() {
  if (NyayState.scanInProgress) return;
  NyayState.scanInProgress = true;

  const viewport = document.getElementById('aruco-viewport');
  const scanBtn = document.getElementById('aruco-scan-btn');
  const resultCard = document.getElementById('aruco-extracted-fields');

  if (viewport) {
    viewport.classList.add('scanning');
    viewport.classList.remove('scanned');
  }
  if (scanBtn) {
    scanBtn.disabled = true;
    scanBtn.innerHTML = `${SVG_ICONS.cpu} অপটিক্যাল স্ক্যানিং ও কোয়াড ডিটেকশন চলমান...`;
  }

  // Offload OCR binarization to worker
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
      scanBtn.innerHTML = `${SVG_ICONS.checkCircle} স্ক্যান সম্পন্ন (${res.durationMs}ms)`;
    }

    if (resultCard && res.result && res.result.detectedFields) {
      resultCard.innerHTML = `
        <div style="font-size:0.8rem; font-weight:700; color:var(--accent-light); margin-bottom:0.5rem; display:flex; justify-content:space-between;">
          <span>${SVG_ICONS.checkCircle} এক্সট্র্যাক্ট করা ডাটা ফিল্ড (${res.result.detectedFields.length}টি)</span>
          <span style="color:var(--text-muted); font-family:var(--font-mono);">${res.result.recognizedConfidence}% আত্মবিশ্বাস</span>
        </div>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:0.5rem;">
          ${res.result.detectedFields.map(f => `
            <div style="background:var(--bg-secondary); padding:0.45rem 0.65rem; border-radius:4px; border:1px solid var(--border-subtle); font-size:0.75rem;">
              <span style="color:var(--text-muted); display:block; font-size:0.7rem;">${f.bangla} (${f.label})</span>
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
 * 5. KanthoNyay 16430 Voice AI Stream & Dialect Playout
 */
function toggleHotlineAudio() {
  const playBtn = document.getElementById('voice-play-btn');
  const barsContainer = document.getElementById('audio-visualizer-bars');
  const transcriptBox = document.getElementById('voice-transcript-stream');
  const dialectSelect = document.getElementById('voice-dialect-select');
  const dialect = dialectSelect ? dialectSelect.value : 'sylheti';

  if (NyayState.audioPlaying) {
    // Stop
    NyayState.audioPlaying = false;
    if (barsContainer) barsContainer.classList.remove('playing');
    if (playBtn) playBtn.innerHTML = `${SVG_ICONS.play} কল অডিও শুনুন ও রিয়েলটাইম ট্রান্সক্রিপ্ট`;
    clearInterval(NyayState.audioTimer);
    return;
  }

  // Start
  NyayState.audioPlaying = true;
  if (barsContainer) barsContainer.classList.add('playing');
  if (playBtn) playBtn.innerHTML = `${SVG_ICONS.square} প্লেব্যাক থামান`;

  const dialectScripts = {
    sylheti: [
      { speaker: 'Caller (সিলেটি ডায়ালেক্ট)', time: '00:02', text: '“সালামুআলাইকুম বাজান, আমরার সুরমার চরো জমিনটা জোর করি দখল করি লাইসে মেম্বারে...”' },
      { speaker: 'AI Intake Agent', time: '00:06', text: '“ওয়ালাইকুম সালাম। আপনার জমির খতিয়ান বা পরচার কোনো কাগজ আছে কি? জেলা ও উপজেলা বলুন।”' },
      { speaker: 'Caller (সিলেটি ডায়ালেক্ট)', time: '00:11', text: '“হ, সিএস পরচা আছে। বালাগঞ্জ উপজেলার। আমরা গরীব মানুষ, কোট-কাচারির টেকা নাই।”' },
      { speaker: 'AI Intent Classifier', time: '00:15', text: '[শনাক্তকরণ]: জমি বিরোধ (CrPC ১৪৫ / দেওয়ানি প্রতিকার) • আইনি সহায়তা নীতি ২০১৪ ধারা ২(ক) উত্তীর্ণ।' }
    ],
    chatgaya: [
      { speaker: 'Caller (চাটগাঁইয়া ডায়ালেক্ট)', time: '00:02', text: '“আঁরে মেম্বারে ভিডাত্থুন খেদাই দিবা চাঁদ্দে, আঁই এহন খুনহানো যাইয়ুম?”' },
      { speaker: 'AI Intake Agent', time: '00:06', text: '“শান্ত হন। আপনার পরিচয় ও উপজেলার নাম বলুন, আমরা বিনামূল্যে আইনজীবী প্রদান করব।”' },
      { speaker: 'Caller (চাটগাঁইয়া ডায়ালেক্ট)', time: '00:10', text: '“আঁই আনোয়ারা থানার। কাইল রাইতে আঁর ঘরো আগুন লাগাই দিইয়ে।”' },
      { speaker: 'AI Intent Classifier', time: '00:14', text: '[শনাক্তকরণ]: জরুরি ফৌজদারি সহায়তা • রেড অ্যালার্ট ডকেট তৈরি ও প্যানেল আইনজীবী নিয়োগ।' }
    ],
    standard: [
      { speaker: 'Caller (প্রমিত বাংলা)', time: '00:02', text: '“হ্যালো, ১৬৪৩০ আইনি সহায়তা হটলাইন? আমার স্বামী যৌতুকের জন্য আমাকে বের করে দিয়েছে।”' },
      { speaker: 'AI Intake Agent', time: '00:07', text: '“জি, আপনি নিরাপদ আছেন তো? আপনার নিকটস্থ নারী ও শিশু নির্যাতন দমন ট্রাইব্যুনালে আবেদন করা হবে।”' },
      { speaker: 'Caller (প্রমিত বাংলা)', time: '00:12', text: '“আমার সাথে আমার দুই বছরের সন্তান আছে। আমার কোনো থাকার জায়গা নেই।”' },
      { speaker: 'AI Intent Classifier', time: '00:16', text: '[শনাক্তকরণ]: নারী-শিল্ড প্রটোকল সক্রিয় • জরুরি সুরক্ষা আদেশ ও নিরাপদ আশ্রয় কেন্দ্র রেফারেল।' }
    ]
  };

  const script = dialectScripts[dialect] || dialectScripts.sylheti;
  let lineIdx = 0;
  if (transcriptBox) transcriptBox.innerHTML = '';

  NyayState.audioTimer = setInterval(() => {
    if (lineIdx < script.length) {
      const line = script[lineIdx];
      const p = document.createElement('div');
      p.style.cssText = 'margin-bottom:0.5rem; font-size:0.82rem; padding:0.4rem; background:rgba(255,255,255,0.02); border-left:2px solid var(--accent-primary); border-radius:2px;';
      p.innerHTML = `<span style="color:var(--accent-light); font-weight:600; font-family:var(--font-mono); font-size:0.75rem;">[${line.time}] ${line.speaker}:</span> <span style="color:var(--text-bangla);">${line.text}</span>`;
      if (transcriptBox) {
        transcriptBox.appendChild(p);
        transcriptBox.scrollTop = transcriptBox.scrollHeight;
      }
      lineIdx++;
    } else {
      clearInterval(NyayState.audioTimer);
      NyayState.audioPlaying = false;
      if (barsContainer) barsContainer.classList.remove('playing');
      if (playBtn) playBtn.innerHTML = `${SVG_ICONS.play} পুনরায় শুনুন`;
    }
  }, 1600 * NyayState.config.simSpeed);
}

/**
 * 6. Retro USSD Feature Phone Simulator (*16430#)
 */
function pressUssdKey(key) {
  const lcd = document.getElementById('ussd-lcd-screen');
  if (!lcd) return;

  if (key === 'CALL') {
    if (NyayState.ussdInputBuffer.trim() === '*16430#' || NyayState.ussdMenuState === 'ROOT') {
      NyayState.ussdMenuState = 'MAIN_MENU';
      lcd.innerHTML = `
        <div style="font-weight:700; border-bottom:1px solid #4d7c0f; padding-bottom:2px; margin-bottom:4px;">জাতীয় আইনি সেবা ১৬৪৩০</div>
        1. আবেদনের বর্তমান অবস্থা<br/>
        2. জরুরি জামিন/আইনি তথ্য<br/>
        3. ফারায়েজ হিসাব ক্যালকুলেটর<br/>
        4. কল-ব্যাক অনুরোধ<br/>
        <div style="margin-top:6px; color:#1e3a0f; font-size:0.7rem;">[নং লিখে SEND চাপুন]</div>
      `;
      NyayState.ussdInputBuffer = '';
    } else {
      lcd.innerHTML = `
        <div style="color:#7f1d1d; font-weight:700;">ত্রুটি: অবৈধ কোড!</div>
        দয়া করে *16430# ডায়াল করুন।
      `;
      NyayState.ussdInputBuffer = '';
    }
    return;
  }

  if (key === 'CLEAR') {
    NyayState.ussdInputBuffer = '';
    NyayState.ussdMenuState = 'ROOT';
    lcd.innerHTML = `ডায়াল করুন:<br/>*16430#<br/><br/>[SEND চাপুন]`;
    return;
  }

  // Numerical inputs
  NyayState.ussdInputBuffer += key;

  if (NyayState.ussdMenuState === 'ROOT') {
    lcd.innerHTML = `ডায়াল করছেন:<br/><strong>${NyayState.ussdInputBuffer}</strong><br/><br/>[SEND চাপুন]`;
  } else if (NyayState.ussdMenuState === 'MAIN_MENU') {
    if (key === '1') {
      lcd.innerHTML = `
        <strong>কেস নং: NLAS-2026-0841</strong><br/>
        অবস্থা: শুনানি ধার্য<br/>
        আদালত: CJM গাজীপুর<br/>
        আইনজীবী: Adv. সামিয়া জাহান<br/>
        <div style="margin-top:4px; font-size:0.68rem;">[0 চেপে প্রধান মেনু]</div>
      `;
    } else if (key === '2') {
      lcd.innerHTML = `
        <strong>জরুরি আইনি তথ্য</strong><br/>
        গ্রেপ্তারের ২৪ ঘণ্টার মধ্যে ম্যাজিস্ট্রেটের সামনে হাজির ও আইনজীবী পাওয়ার অধিকার রয়েছে।<br/>
        <div style="margin-top:4px; font-size:0.68rem;">[0 চেপে প্রধান মেনু]</div>
      `;
    } else if (key === '3') {
      lcd.innerHTML = `
        <strong>ফারায়েজ সেবা</strong><br/>
        আপনার জমির পরিমাণ ও ওয়ারিশের তথ্য দিয়ে ১৬৪৩০ নম্বরে সরাসরি কথা বলুন।<br/>
        <div style="margin-top:4px; font-size:0.68rem;">[0 চেপে প্রধান মেনু]</div>
      `;
    } else if (key === '4') {
      lcd.innerHTML = `
        <strong>অনুরোধ গৃহীত হয়েছে!</strong><br/>
        ১৫ মিনিটের মধ্যে একজন প্যারালিগ্যাল আপনার এই নম্বরে কল ব্যাক করবেন।<br/>
        ধন্যবাদ।
      `;
    } else if (key === '0') {
      pressUssdKey('CALL');
    }
  }
}

/**
 * 7. FastBail-BD Cryptographic Signing & Gate Scanner
 */
async function issueFastBailOrder() {
  const inmateId = document.getElementById('fastbail-inmate-id')?.value || 'মোঃ রফিকুল ইসলাম (বন্দি নং ৮৪১৯/ক)';
  const caseNumber = document.getElementById('fastbail-case-no')?.value || 'NLAS-2026-0841';
  const courtRef = 'চিফ জুডিসিয়াল ম্যাজিস্ট্রেট আদালত, গাজীপুর';
  const judgeId = 'JUDGE-DH-4401';
  const bailCondition = 'CrPC §497 জামিন মঞ্জুর, ৫,০০০ টাকা বন্ড';

  const outputContainer = document.getElementById('fastbail-seal-output');
  if (outputContainer) {
    outputContainer.innerHTML = `<div style="color:var(--accent-light); font-size:0.85rem;">${SVG_ICONS.cpu} ক্রিপ্টোগ্রাফিক ডিজিটাল স্বাক্ষর ও কি-মেনিফেস্ট তৈরি হচ্ছে (${NyayState.config.cryptoMethod.toUpperCase()})...</div>`;
  }

  const res = await dispatchWorkerTask('compute_crypto_bail', {
    method: NyayState.config.cryptoMethod,
    inmateId,
    caseNumber,
    courtRef,
    judgeId,
    bailCondition
  });

  const { hashHex, signature, keyFingerprint, tokenBytes, verificationSpeedUs, method } = res.result;

  if (outputContainer) {
    outputContainer.innerHTML = `
      <div class="bail-pass-container">
        <div class="bail-pass-qr">
          <svg viewBox="0 0 100 100" width="100%" height="100%">
            <!-- High-density simulated judicial QR matrix -->
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
            <!-- Data Grid Dots -->
            <circle cx="45" cy="18" r="3" fill="#0f172a"/>
            <circle cx="55" cy="28" r="3" fill="#0f172a"/>
            <circle cx="45" cy="50" r="4" fill="#0f172a"/>
            <circle cx="35" cy="65" r="3" fill="#0f172a"/>
            <circle cx="65" cy="65" r="3" fill="#0f172a"/>
            <circle cx="78" cy="45" r="3" fill="#0f172a"/>
            <circle cx="85" cy="85" r="4" fill="#0f172a"/>
          </svg>
        </div>
        <div class="bail-pass-details">
          <div class="court-seal-badge">
            ${SVG_ICONS.shieldCheck} বাংলাদেশ সুপ্রীম কোর্ট ডিজিটাল বেইল পাস
          </div>
          <div style="margin:0.35rem 0; font-family:var(--font-bangla); line-height:1.4;">
            <strong>বন্দি:</strong> ${inmateId}<br/>
            <strong>মামলা নং:</strong> ${caseNumber} (${courtRef})<br/>
            <strong>শর্ত:</strong> ${bailCondition}
          </div>
          <div style="font-family:var(--font-mono); font-size:0.68rem; color:#475569; word-break:break-all;">
            <strong>পাবলিক কি সিগনেচার:</strong> ${signature.substring(0, 48)}...<br/>
            <strong>অ্যালগরিদম:</strong> ${method.toUpperCase()} (${tokenBytes} Bytes) • <strong>যাচাই গতি:</strong> ${verificationSpeedUs}µs
          </div>
        </div>
      </div>
      <div style="margin-top:0.75rem; display:flex; gap:0.5rem;">
        <button class="btn-telemetry" onclick="simulateGateScan('${caseNumber}', '${inmateId}', '${method}')">
          ${SVG_ICONS.camera} কারাগার ফটক ক্যামেরা স্ক্যান টেস্ট
        </button>
      </div>
    `;
  }
}

function simulateGateScan(caseNo, inmate, method) {
  const logBox = document.getElementById('fastbail-gate-log');
  if (!logBox) return;

  logBox.innerHTML = `
    <div style="color:var(--accent-light); font-size:0.78rem; font-family:var(--font-mono); line-height:1.5;">
      [${new Date().toLocaleTimeString()}] QR Scanner Camera Activated...<br/>
      [${new Date().toLocaleTimeString()}] Decoding Payload: ${caseNo} (${inmate})...<br/>
      [${new Date().toLocaleTimeString()}] Fetching Supreme Court Judicial CA Root...<br/>
      [${new Date().toLocaleTimeString()}] Cryptographic Verification: SUCCESS (Valid ${method.toUpperCase()} Seal).<br/>
      <span style="color:#34d399; font-weight:700;">[STATUS]: বন্দি মুক্তির বৈধতা নিশ্চিত। ফটক খোলার অনুমোদন প্রদান করা হলো।</span>
    </div>
  `;
}

/**
 * 8. Bhoo-Chitra Split-Screen Map & Farayez Inheritance Calculator
 */
function initSplitScreenMap() {
  const container = document.getElementById('bhoo-chitra-slider-container');
  const divider = document.getElementById('map-divider-bar');
  const satLayer = document.getElementById('map-layer-sat');

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

  // Touch support
  divider.addEventListener('touchstart', () => { isDragging = true; });
  window.addEventListener('touchend', () => { isDragging = false; });
  window.addEventListener('touchmove', (e) => {
    if (isDragging && e.touches[0]) onMove(e.touches[0].clientX);
  });
}

async function triggerFarayezCalculation() {
  const landInput = document.getElementById('farayez-land-amount');
  const widowInput = document.getElementById('farayez-widow-count');
  const sonInput = document.getElementById('farayez-son-count');
  const daughterInput = document.getElementById('farayez-daughter-count');
  const motherInput = document.getElementById('farayez-mother-count');
  const fatherInput = document.getElementById('farayez-father-count');

  const totalLand = parseFloat(landInput?.value) || 84.0;
  const relations = {
    widow: parseInt(widowInput?.value, 10) || 1,
    sons: parseInt(sonInput?.value, 10) || 2,
    daughters: parseInt(daughterInput?.value, 10) || 3,
    mother: parseInt(motherInput?.value, 10) || 0,
    father: parseInt(fatherInput?.value, 10) || 0
  };

  const res = await dispatchWorkerTask('compute_farayez_shares', {
    totalLandDecimals: totalLand,
    relations
  });

  const outputContainer = document.getElementById('farayez-results-container');
  if (outputContainer && res.result && res.result.shares) {
    outputContainer.innerHTML = `
      <div style="font-size:0.8rem; font-weight:700; color:var(--accent-light); margin-bottom:0.6rem; display:flex; justify-content:space-between;">
        <span>${SVG_ICONS.scales} মোট জমি: ${totalLand} শতক (${res.result.totalHeirsCount} জন ওয়ারিশ)</span>
        <span style="color:var(--text-muted);">${res.result.isPartitionFeasible ? 'বণ্টনযোগ্য খতিয়ান' : 'খণ্ড জমি'}</span>
      </div>
      <div style="display:flex; flex-direction:column; gap:0.4rem;">
        ${res.result.shares.map(s => `
          <div style="display:flex; align-items:center; justify-content:space-between; background:var(--bg-secondary); padding:0.45rem 0.75rem; border-radius:4px; border:1px solid var(--border-subtle); font-size:0.78rem;">
            <div>
              <strong style="color:var(--text-main);">${s.relation}</strong>
              <span style="color:var(--text-muted); font-size:0.7rem; margin-left:0.35rem;">(${s.quranicClass})</span>
            </div>
            <div style="text-align:right;">
              <span style="color:var(--accent-light); font-weight:700; font-family:var(--font-mono);">${s.landDecimals} শতক</span>
              <span style="color:var(--text-muted); font-size:0.7rem; margin-left:0.35rem;">(${s.shareFraction} অংশ • ${s.sharePercentage}%)</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }
}

/**
 * 9. Nari-Shield Panic Escape System
 */
function triggerPanicEscape() {
  const screen = document.getElementById('panic-overlay-screen');
  if (screen) {
    screen.classList.add('active');
  }
}

function closePanicEscape() {
  const screen = document.getElementById('panic-overlay-screen');
  if (screen) {
    screen.classList.remove('active');
  }
}

/**
 * 10. Admin Configuration Drawer Toggle (Ctrl + K)
 */
function toggleAdminDrawer(forceOpen) {
  const overlay = document.getElementById('admin-drawer-overlay');
  if (!overlay) return;

  if (typeof forceOpen === 'boolean') {
    if (forceOpen) overlay.classList.add('active');
    else overlay.classList.remove('active');
  } else {
    overlay.classList.toggle('active');
  }
}

function initEventListeners() {
  // Global Shortcut Ctrl + K for Admin Config Drawer
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      toggleAdminDrawer();
    }
    if (e.key === 'Escape') {
      toggleAdminDrawer(false);
      closePanicEscape();
    }
  });

  // Method selector changes
  const triageSelect = document.getElementById('config-triage-method');
  if (triageSelect) {
    triageSelect.addEventListener('change', (e) => {
      NyayState.config.triageMethod = e.target.value;
      updateTelemetry();
    });
  }

  const cryptoSelect = document.getElementById('config-crypto-method');
  if (cryptoSelect) {
    cryptoSelect.addEventListener('change', (e) => {
      NyayState.config.cryptoMethod = e.target.value;
      issueFastBailOrder();
    });
  }

  const mapSelect = document.getElementById('config-map-method');
  if (mapSelect) {
    mapSelect.addEventListener('change', (e) => {
      NyayState.config.mapMethod = e.target.value;
      const label = document.getElementById('active-map-method-label');
      if (label) label.textContent = `পদ্ধতি: ${e.target.value.toUpperCase()}`;
    });
  }

  const themeSelect = document.getElementById('config-theme-select');
  if (themeSelect) {
    themeSelect.addEventListener('change', (e) => {
      setTheme(e.target.value);
    });
  }
}

/**
 * 11. Statutory Form Generator Modal
 */
function generateStatutoryForm(formCode) {
  const c = BANGLADESH_CASES[NyayState.activeCaseIndex];
  alert(`[অফিসিয়াল ফরম জেনারেটর - ${formCode}]\n\nবাংলাদেশ গেজেট অনুমোদিত আইনি ফরম প্রস্তুত হয়েছে:\n\nমামলা নং: ${c.id}\nআবেদনকারী: ${c.applicant}\nআদালত: ${c.court}\nপ্যানেল আইনজীবী: ${c.panelLawyer}\n\n(প্রিন্ট ও স্বাক্ষরের জন্য রেন্ডার করা হয়েছে)`);
}
