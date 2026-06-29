// EXPORTS: IAbout, IHistoryMilestone, IMissionVision, ILeader, IGalleryItem, MOCK_ABOUT, MOCK_HISTORY, MOCK_MISSION, MOCK_LEADERS, MOCK_GALLERY, useAbout, useHistory, useMission, useLeaders, useGallery
import type { Language } from '@/i18n/translations';
import { getLocalizedData, useLocalizedData } from './index';

export interface IAbout {
  title: string;
  description: string;
  positioning: string;
  features: string[];
  achievements: string[];
}

export interface IHistoryMilestone {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface IMissionVision {
  mission: { label: string; content: string };
  vision: { label: string; content: string };
  values: { label: string; content: string };
}

export interface ILeader {
  id: string;
  name: string;
  title: string;
  imageUrl: string;
  bio: string;
}

export interface IGalleryItem {
  id: string;
  imageUrl: string;
  caption: string;
  category: string;
}

// ── 中文 ──
const ABOUT_ZH: IAbout = {
  title: '学校简介',
  description: '中央国际医学院（CMSC）坐落于吉尔吉斯共和国首都比什凯克市，是一所以医学教育为核心的国际化高等医学院校。学院始建于2003年，是中亚地区重要的医学人才培养基地。',
  positioning: '中亚地区知名的国际化医学院校',
  features: [
    '国际化办学：与20余所国际医学院校建立合作关系',
    '多语言教学：提供吉尔吉斯语、俄语、英语三种语言授课',
    '临床实践：5所附属医院提供丰富的临床实习机会',
    '科研创新：拥有3个国际合作科研中心'
  ],
  achievements: [
    '世界医学教育联合会（WFME）认证成员',
    '中亚医学教育联盟创始成员',
    '吉尔吉斯斯坦教育部优秀医学院校',
    '国际学生占比达35%，来自28个国家'
  ]
};

const HISTORY_ZH: IHistoryMilestone[] = [
  {
    id: '1',
    year: '2003',
    title: '学院成立',
    description: '中央国际医学院正式成立，首批招收临床医学专业学生150名，开启了中亚地区医学教育的新篇章。'
  },
  {
    id: '2',
    year: '2008',
    title: '护理学与药学系成立',
    description: '增设护理学和药学两个专业，与多家国际医疗机构建立产学研合作关系，学科体系逐步完善。'
  },
  {
    id: '3',
    year: '2013',
    title: '获得国际医学教育认证',
    description: '通过世界医学教育联合会（WFME）国际认证，成为中亚地区首批获得国际认证的医学院校之一。'
  },
  {
    id: '4',
    year: '2018',
    title: '牙科学系与公共卫生系成立',
    description: '牙科学系和公共卫生系正式成立，学院学科体系更加完整，在校生规模突破1000人。'
  },
  {
    id: '5',
    year: '2023',
    title: '建校20周年',
    description: '学院迎来建校20周年，已培养医学人才超过3000名，遍布中亚及世界各地医疗卫生机构。'
  }
];

const MISSION_ZH: IMissionVision = {
  mission: {
    label: '办学使命',
    content: '培养具有国际视野、人文关怀和专业素养的高素质医学人才，服务全球医疗卫生事业发展，守护人类健康。'
  },
  vision: {
    label: '发展愿景',
    content: '成为中亚地区领先、国际知名的医学院校，引领医学教育创新与医疗卫生事业发展。'
  },
  values: {
    label: '核心价值观',
    content: '仁心、精业、创新、卓越——以仁心守护生命，以精业铸就品质，以创新推动发展，以卓越追求未来。'
  }
};

const LEADERS_ZH: ILeader[] = [
  {
    id: '1',
    name: 'Taaha al Safar',
    title: '校长 / 教授',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    bio: 'Taaha al Safar 教授，医学博士，博士生导师。拥有超过25年的医学教育与临床经验，曾在多所国际知名医学院校担任领导职务。主要研究方向为心血管疾病与公共卫生管理。'
  },
  {
    id: '2',
    name: "Mu'taz el Abdi",
    title: '副校长 / 教授',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
    bio: "Mu'taz el Abdi 教授，内科学专家，主管教学工作。在中东和中亚地区拥有丰富的临床教学经验，专注于心血管疾病的诊断与治疗研究。"
  },
  {
    id: '3',
    name: 'Saara al Faris',
    title: '副校长 / 教授',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    bio: 'Saara al Faris 教授，药剂学专家，主管科研与国际合作。在药物研发与临床药学领域有深厚造诣，推动学院与国际医药机构的深度合作。'
  }
];

const GALLERY_ZH: IGalleryItem[] = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    caption: '主教学楼',
    category: 'teaching'
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    caption: '医学图书馆',
    category: 'library'
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    caption: '体育场',
    category: 'sports'
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
    caption: '科研实验室',
    category: 'lab'
  },
  {
    id: '5',
    imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80',
    caption: '校园全景',
    category: 'campus'
  },
  {
    id: '6',
    imageUrl: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80',
    caption: '学术报告厅',
    category: 'auditorium'
  },
  {
    id: '7',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    caption: '校园林荫道',
    category: 'road'
  },
  {
    id: '8',
    imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80',
    caption: '学生公寓',
    category: 'dorm'
  }
];

// ── 英文 ──
const ABOUT_EN: IAbout = {
  title: 'About CMSC',
  description: 'Central International Medical College (CMSC) is located in Bishkek, the capital of the Kyrgyz Republic. It is an international higher medical institution with medical education at its core. Founded in 2003, the college is an important medical talent training base in Central Asia.',
  positioning: 'A renowned international medical college in Central Asia',
  features: [
    'International education: partnerships with 20+ international medical schools',
    'Multilingual teaching: Kyrgyz, Russian, and English language programs',
    'Clinical practice: 5 affiliated hospitals provide rich internship opportunities',
    'Research innovation: 3 international joint research centers'
  ],
  achievements: [
    'Accredited member of World Federation for Medical Education (WFME)',
    'Founding member of Central Asian Medical Education Alliance',
    'Outstanding Medical College Award by Kyrgyz Ministry of Education',
    '35% international students from 28 countries'
  ]
};

const HISTORY_EN: IHistoryMilestone[] = [
  {
    id: '1',
    year: '2003',
    title: 'College Founded',
    description: 'Central International Medical College was officially established, enrolling 150 students in the General Medicine program, opening a new chapter in medical education in Central Asia.'
  },
  {
    id: '2',
    year: '2008',
    title: 'Nursing & Pharmacy Departments Established',
    description: 'Added Nursing and Pharmacy programs, establishing industry-university-research partnerships with multiple international medical institutions.'
  },
  {
    id: '3',
    year: '2013',
    title: 'International Medical Education Accreditation',
    description: 'Received WFME international accreditation, becoming one of the first medical colleges in Central Asia to achieve international accreditation.'
  },
  {
    id: '4',
    year: '2018',
    title: 'Dentistry & Public Health Established',
    description: 'Dentistry and Public Health departments were officially established, completing the academic system with over 1,000 students enrolled.'
  },
  {
    id: '5',
    year: '2023',
    title: '20th Anniversary',
    description: 'The college celebrated its 20th anniversary, having trained over 3,000 medical professionals working in healthcare institutions across Central Asia and worldwide.'
  }
];

const MISSION_EN: IMissionVision = {
  mission: {
    label: 'Mission',
    content: 'To cultivate high-quality medical professionals with international vision, humanistic care, and professional competence, serving global healthcare development and protecting human health.'
  },
  vision: {
    label: 'Vision',
    content: 'To become a leading medical college in Central Asia with international reputation, driving innovation in medical education and healthcare development.'
  },
  values: {
    label: 'Core Values',
    content: 'Compassion, Excellence, Innovation, Distinction — compassion protects life, excellence builds quality, innovation drives development, distinction shapes the future.'
  }
};

const LEADERS_EN: ILeader[] = [
  {
    id: '1',
    name: 'Taaha al Safar',
    title: 'Rector / Professor',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    bio: 'Professor Taaha al Safar, MD, PhD supervisor. With over 25 years of medical education and clinical experience, he has held leadership positions at multiple internationally renowned medical schools. Research focus: cardiovascular diseases and public health management.'
  },
  {
    id: '2',
    name: "Mu'taz el Abdi",
    title: 'Vice Rector / Professor',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
    bio: "Professor Mu'taz el Abdi, internal medicine specialist, overseeing academic affairs. With extensive clinical teaching experience in the Middle East and Central Asia, focusing on cardiovascular disease diagnosis and treatment research."
  },
  {
    id: '3',
    name: 'Saara al Faris',
    title: 'Vice Rector / Professor',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    bio: 'Professor Saara al Faris, pharmaceutical sciences expert, overseeing research and international cooperation. With deep expertise in drug development and clinical pharmacy, driving deep partnerships with international pharmaceutical institutions.'
  }
];

const GALLERY_EN: IGalleryItem[] = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    caption: 'Main Academic Building',
    category: 'teaching'
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    caption: 'Medical Library',
    category: 'library'
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    caption: 'Sports Stadium',
    category: 'sports'
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
    caption: 'Research Laboratory',
    category: 'lab'
  },
  {
    id: '5',
    imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80',
    caption: 'Campus Panorama',
    category: 'campus'
  },
  {
    id: '6',
    imageUrl: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80',
    caption: 'Academic Auditorium',
    category: 'auditorium'
  },
  {
    id: '7',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    caption: 'Campus Boulevard',
    category: 'road'
  },
  {
    id: '8',
    imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80',
    caption: 'Student Dormitory',
    category: 'dorm'
  }
];

// ── 吉尔吉斯语 ──
const ABOUT_KY: IAbout = {
  title: 'Колледж жөнүндө',
  description: 'Централдык Эл аралык Медицина Колледжи (CMSC) Кыргыз Республикасынын борбору Бишкек шаарында жайгашкан. Медицина билим берүүсүн негизги багыт катары кабыл алган эл аралык жогорку медицина окуу жайы. 2003-жылы негизделген, Орто Азиядагы маанилүү медицина кадрларын даярдоо базасы.',
  positioning: 'Орто Азиядагы таанымал эл аралык медицина колледжи',
  features: [
    'Эл аралык билим берүү: 20дөн ашык эл аралык медицина мектептери менен кызматташуу',
    'Көп тилдүү окутуу: кыргыз, орус жана англис тилдерінде окутуу',
    'Клиникалык практика: 5 тиешелүү оорукана практика мүмкүнчүлүктөрүн берет',
    'Илим-изилдөө инновациясы: 3 эл аралык биргелешкен изилдөө борбору'
  ],
  achievements: [
    'Дүйнөлүк медицина билим берүү федерациясы (WFME) аккредитациясы',
    'Орто Азия медицина билим берүү союзунун негизги мүчөсү',
    'Кыргызстан билим министрлигинин мыкты медицина колледжи',
    'Эл аралык студенттердин үлүшү 35%, 28 өлкөдөн келген'
  ]
};

const HISTORY_KY: IHistoryMilestone[] = [
  {
    id: '1',
    year: '2003',
    title: 'Колледждин негизделиши',
    description: 'Централдык Эл аралык Медицина Колледжи расмий түрдө ачылды, жалпы медицина адистиги боюнча 150 студент кабыл алынды, Орто Азияда медицина билим берүүсүнүн жаңы барагы ачылды.'
  },
  {
    id: '2',
    year: '2008',
    title: 'Сестрачылык жана Дарыгерлик кафедралары ачылды',
    description: 'Сестрачылык жана дарыгерлик адистиктери кошулду, бир нече эл аралык медицина ишканалары менен өнөктөштүк түзүлдү.'
  },
  {
    id: '3',
    year: '2013',
    title: 'Эл аралык медицина билим берүү аккредитациясы',
    description: 'WFME эл аралык аккредитациясын алды, Орто Азияда эл аралык аккредитацияга ээ биринчи медицина колледждеринен бири болду.'
  },
  {
    id: '4',
    year: '2018',
    title: 'Стоматология жана Жалпы ден-соолук кафедралары',
    description: 'Стоматология жана жалпы ден-соолук кафедралары расмий түрдө ачылды, студенттердин саны 1000ден ашты.'
  },
  {
    id: '5',
    year: '2023',
    title: '20-жылдык той',
    description: 'Колледж 20-жылдыгын атап өттү, 3000дөн ашык медицина адисти даярдады, алар Орто Азия жана дүйнүн ар жагында иштейт.'
  }
];

const MISSION_KY: IMissionVision = {
  mission: {
    label: 'Миссия',
    content: 'Эл аралык көз карашка, адамгерчилик көз карашка жана кесиптик сапатка ээ жогорку сапаттагы медицина адистерин даярдоо, дүйнөлүк дене сактоо ишинин өнүгүүсүнө кызмат кылуу, адамдардын ден-соолугун коргоо.'
  },
  vision: {
    label: 'Көз караш',
    content: 'Орто Азияда алдыңкы, эл аралык деңгээлде таанымал медицина колледжи болуу, медицина билим берүүсүнүн инновациясын жана дене сактоо ишинин өнүгүүсүн жетектөө.'
  },
  values: {
    label: 'Негизги баалуулуктар',
    content: 'Жүрөк, жогорку сапат, инновация, мыктылык — жүрөк менен турмушту коргоо, жогорку сапат менен сапатты түзүү, инновация менен өнүгүүнү тийгизүү, мыктылык менен келечекке жетишүү.'
  }
};

const LEADERS_KY: ILeader[] = [
  {
    id: '1',
    name: 'Taaha al Safar',
    title: 'Ректор / Профессор',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    bio: 'Профессор Тааха аль Сафар, медицина илимдору доктору, доктордук диссертация жетекчиси. 25 жылдан ашуун медицина билим берүү жана клиникалык тажрыйбасы бар.'
  },
  {
    id: '2',
    name: "Mu'taz el Abdi",
    title: 'Ректор орунбасары / Профессор',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
    bio: "Профессор Мутаз эл Абди, ички оорулар адисти, окутуу ишин жетектейт. Жүнүндүк Орто Азияда кең клиникалык окутуу тажрыйбасы бар."
  },
  {
    id: '3',
    name: 'Saara al Faris',
    title: 'Ректор орунбасары / Профессор',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    bio: 'Профессор Саара аль Фарис, фармацевтика адисти, илим-изилдөө жана эл аралык кызматташтырууну жетектейт.'
  }
];

const GALLERY_KY: IGalleryItem[] = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    caption: 'Негизги окуу бинасы',
    category: 'teaching'
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    caption: 'Медицина китепканасы',
    category: 'library'
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    caption: 'Спорт стадиону',
    category: 'sports'
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
    caption: 'Илим-изилдөө лабораториясы',
    category: 'lab'
  },
  {
    id: '5',
    imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80',
    caption: 'Кампус панорамасы',
    category: 'campus'
  },
  {
    id: '6',
    imageUrl: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80',
    caption: 'Академиялык акт залы',
    category: 'auditorium'
  },
  {
    id: '7',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    caption: 'Кампустук бульвар',
    category: 'road'
  },
  {
    id: '8',
    imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80',
    caption: 'Студенттик жатакана',
    category: 'dorm'
  }
];

// ── 俄语 ──
const ABOUT_RU: IAbout = {
  title: 'О колледже',
  description: 'Центральный Международный Медицинский Колледж (CMSC) расположен в Бишкеке, столице Кыргызской Республики. Это международное высшее медицинское учебное заведение с медицинским образованием в центре основ. Основан в 2003 году, является важной базой подготовки медицинских кадров в Центральной Азии.',
  positioning: 'Известный международный медицинский колледж в Центральной Азии',
  features: [
    'Международное образование: партнёрство с 20+ международными медицинскими школами',
    'Многоязычное обучение: программы на киргизском, русском и английском языках',
    'Клиническая практика: 5 больниц-партнёров обеспечивают богатую практику',
    'Научные инновации: 3 международных совместных исследовательских центра'
  ],
  achievements: [
    'Аккредитованный член Всемирной федерации медицинского образования (WFME)',
    'Учредительный член Альянса медицинского образования Центральной Азии',
    'Премия «Отличный медицинский колледж» от Минобразования Кыргызстана',
    '35% иностранных студентов из 28 стран'
  ]
};

const HISTORY_RU: IHistoryMilestone[] = [
  {
    id: '1',
    year: '2003',
    title: 'Основание колледжа',
    description: 'Центральный Международный Медицинский Колледж официально открыт, первый набор — 150 студентов по специальности «Лечебное дело», открыв новую главу медицинского образования в Центральной Азии.'
  },
  {
    id: '2',
    year: '2008',
    title: 'Открытие кафедр сестринского дела и фармации',
    description: 'Добавлены специальности «Сестринское дело» и «Фармация», установлены партнёрства с多家 международными медицинскими учреждениями.'
  },
  {
    id: '3',
    year: '2013',
    title: 'Международная аккредитация',
    description: 'Получена международная аккредитация WFME, став одним из первых медицинских колледжей в Центральной Азии с международной аккредитацией.'
  },
  {
    id: '4',
    year: '2018',
    title: 'Стоматология и общественное здоровье',
    description: 'Официально открыты кафедры стоматологии и общественного здоровья, завершена формирование системы дисциплин с численностью студентов более 1000 человек.'
  },
  {
    id: '5',
    year: '2023',
    title: '20-летие',
    description: 'Колледж отпраздновал 20-летие, подготовив более 3000 медицинских специалистов, работающих в медицинских учреждениях Центральной Азии и всего мира.'
  }
];

const MISSION_RU: IMissionVision = {
  mission: {
    label: 'Миссия',
    content: 'Подготовка высококвалифицированных медицинских специалистов с международным кругозором, гуманистическими ценностями и профессиональной компетентностью, служащих развитию мирового здравоохранения.'
  },
  vision: {
    label: 'Видение',
    content: 'Стать ведущим медицинским колледжем в Центральной Азии с международной репутацией, движущим инновации медицинского образования и развитие здравоохранения.'
  },
  values: {
    label: 'Ценности',
    content: 'Сострадание, мастерство, инновации, превосходство — сострадание защищает жизнь, мастерство создаёт качество, инновации движут развитие, превосходство формирует будущее.'
  }
};

const LEADERS_RU: ILeader[] = [
  {
    id: '1',
    name: 'Taaha al Safar',
    title: 'Ректор / Профессор',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    bio: 'Профессор Тааха аль Сафар, доктор медицинских наук, руководитель докторских диссертаций. Более 25 лет опыта медицинского образования и клинической практики.'
  },
  {
    id: '2',
    name: "Mu'taz el Abdi",
    title: 'Проректор / Профессор',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
    bio: "Профессор Мутаз эль Абди, специалист по внутренним болезням, курирует учебную работу. Большой опыт клинического преподавания на Ближнем Востоке и в Центральной Азии."
  },
  {
    id: '3',
    name: 'Saara al Faris',
    title: 'Проректор / Профессор',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    bio: 'Профессор Саара аль Фарис, специалист по фармацевтическим наукам, курирует научную работу и международное сотрудничество.'
  }
];

const GALLERY_RU: IGalleryItem[] = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    caption: 'Главный учебный корпус',
    category: 'teaching'
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    caption: 'Медицинская библиотека',
    category: 'library'
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    caption: 'Стадион',
    category: 'sports'
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
    caption: 'Научная лаборатория',
    category: 'lab'
  },
  {
    id: '5',
    imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80',
    caption: 'Панорама кампуса',
    category: 'campus'
  },
  {
    id: '6',
    imageUrl: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80',
    caption: 'Академическая аудитория',
    category: 'auditorium'
  },
  {
    id: '7',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    caption: 'Кампусный бульвар',
    category: 'road'
  },
  {
    id: '8',
    imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80',
    caption: 'Студенческое общежитие',
    category: 'dorm'
  }
];

// ── Exports ──
export const MOCK_ABOUT: Record<Language, IAbout> = {
  zh: ABOUT_ZH,
  en: ABOUT_EN,
  ky: ABOUT_KY,
  ru: ABOUT_RU,
};

export const MOCK_HISTORY: Record<Language, IHistoryMilestone[]> = {
  zh: HISTORY_ZH,
  en: HISTORY_EN,
  ky: HISTORY_KY,
  ru: HISTORY_RU,
};

export const MOCK_MISSIONS: Record<Language, IMissionVision> = MOCK_MISSION;
export const MOCK_MISSION: Record<Language, IMissionVision> = {
  zh: MISSION_ZH,
  en: MISSION_EN,
  ky: MISSION_KY,
  ru: MISSION_RU,
};

export const MOCK_LEADERS: Record<Language, ILeader[]> = {
  zh: LEADERS_ZH,
  en: LEADERS_EN,
  ky: LEADERS_KY,
  ru: LEADERS_RU,
};

export const MOCK_GALLERY: Record<Language, IGalleryItem[]> = {
  zh: GALLERY_ZH,
  en: GALLERY_EN,
  ky: GALLERY_KY,
  ru: GALLERY_RU,
};

export function useAbout(): IAbout {
  return useLocalizedData(MOCK_ABOUT);
}

export function useHistory(): IHistoryMilestone[] {
  return useLocalizedData(MOCK_HISTORY);
}

export function useMission(): IMissionVision {
  return useLocalizedData(MOCK_MISSION);
}

export function useLeaders(): ILeader[] {
  return useLocalizedData(MOCK_LEADERS);
}

export function useGallery(): IGalleryItem[] {
  return useLocalizedData(MOCK_GALLERY);
}
