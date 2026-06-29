// EXPORTS: IFaculty, MOCK_FACULTY, useFaculty, getFacultyById, useFacultyById
import type { Language } from '@/i18n/translations';
import { getLocalizedData, useLocalizedData } from './index';

export interface IFaculty {
  id: string;
  name: string;
  title: string;
  department: string;
  departmentId: string;
  imageUrl: string;
  bio: string;
  researchArea: string[];
  achievements: string[];
  email: string;
}

// ── 中文 ──
const FACULTY_ZH: IFaculty[] = [
  {
    id: '1',
    name: 'Taaha al Safar',
    title: '教授 / 校长',
    department: '临床医学系',
    departmentId: '1',
    imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80',
    bio: 'Taaha al Safar 教授，中央国际医学院校长，医学博士，博士生导师。拥有超过25年的医学教育与临床经验，曾在多所国际知名医学院校担任领导职务。主要研究方向为心血管疾病与公共卫生管理。',
    researchArea: ['心血管疾病', '公共卫生管理', '医学教育'],
    achievements: [
      '发表SCI论文87篇',
      '主持国际合作科研项目12项',
      '获国际医学教育杰出贡献奖',
      '世界医学教育联合会委员'
    ],
    email: 'rector@cmsc.edu.kg'
  },
  {
    id: '2',
    name: "Mu'taz el Abdi",
    title: '教授 / 系主任',
    department: '临床医学系',
    departmentId: '1',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
    bio: "Mu'taz el Abdi 教授，临床医学系主任，内科学专家。在中东和中亚地区拥有丰富的临床教学经验，专注于心血管疾病的诊断与治疗研究。",
    researchArea: ['心血管内科学', '高血压防治', '临床流行病学'],
    achievements: [
      '发表学术论文65篇',
      '主编医学教材3部',
      '国家级优秀教师称号',
      '吉尔吉斯斯坦医学科学院院士'
    ],
    email: 'm.abdi@cmsc.edu.kg'
  },
  {
    id: '3',
    name: 'Shameema el Taheri',
    title: '副教授',
    department: '护理学系',
    departmentId: '2',
    imageUrl: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80',
    bio: 'Shameema el Taheri 副教授，护理学专家。拥有18年护理教育与临床护理经验，专注于重症监护护理与护理管理研究。',
    researchArea: ['重症监护护理', '护理质量管理', '护理教育'],
    achievements: [
      '发表护理学术论文42篇',
      '主持护理科研项目8项',
      '国际护士协会会员',
      '获优秀护理教育者奖'
    ],
    email: 's.taheri@cmsc.edu.kg'
  },
  {
    id: '4',
    name: 'Saara al Faris',
    title: '教授 / 系主任',
    department: '药学系',
    departmentId: '3',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    bio: 'Saara al Faris 教授，药学系主任，药剂学专家。在药物研发与临床药学领域有深厚造诣，曾在多家国际制药企业担任高级研究员。',
    researchArea: ['临床药学', '药物代谢动力学', '天然药物研究'],
    achievements: [
      '发表SCI论文58篇',
      '获药物发明专利15项',
      '国际药学联合会委员',
      '主持国家级科研项目6项'
    ],
    email: 's.faris@cmsc.edu.kg'
  },
  {
    id: '5',
    name: 'Jasra al Munir',
    title: '副教授',
    department: '牙科学系',
    departmentId: '4',
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80',
    bio: 'Jasra al Munir 副教授，口腔医学专家。专注于口腔修复与正畸学研究，拥有丰富的临床经验和教学经验。',
    researchArea: ['口腔修复学', '口腔正畸学', '口腔种植学'],
    achievements: [
      '发表口腔医学论文38篇',
      '获口腔医学技术创新奖',
      '国际牙科研究协会会员',
      '主编口腔医学教材2部'
    ],
    email: 'j.munir@cmsc.edu.kg'
  },
  {
    id: '6',
    name: 'Khalid al Rahman',
    title: '教授 / 系主任',
    department: '公共卫生系',
    departmentId: '5',
    imageUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80',
    bio: 'Khalid al Rahman 教授，公共卫生系主任，流行病学专家。在传染病防控与公共卫生政策研究领域享有国际声誉。',
    researchArea: ['流行病学', '传染病防控', '公共卫生政策'],
    achievements: [
      '发表公共卫生论文72篇',
      'WHO公共卫生专家顾问',
      '主持国际公共卫生项目9项',
      '获公共卫生杰出贡献奖'
    ],
    email: 'k.rahman@cmsc.edu.kg'
  },
  {
    id: '7',
    name: 'Noor el Hassan',
    title: '教授 / 系主任',
    department: '医学技术系',
    departmentId: '6',
    imageUrl: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80',
    bio: 'Noor el Hassan 教授，医学技术系主任，医学检验专家。在医学检验技术与实验室诊断领域有深入研究。',
    researchArea: ['医学检验技术', '实验室诊断', '分子诊断学'],
    achievements: [
      '发表医学技术论文52篇',
      '获检验技术发明专利8项',
      '国际医学检验协会委员',
      '主持医学技术研发项目7项'
    ],
    email: 'n.hassan@cmsc.edu.kg'
  },
  {
    id: '8',
    name: 'Amira el Sayed',
    title: '副教授',
    department: '临床医学系',
    departmentId: '1',
    imageUrl: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&q=80',
    bio: 'Amira el Sayed 副教授，妇产科学专家。在妇产科临床与教学方面有丰富经验，专注于妇幼健康研究。',
    researchArea: ['妇产科学', '妇幼保健', '生殖医学'],
    achievements: [
      '发表妇产科学术论文35篇',
      '获妇幼健康研究奖',
      '国际妇产科学会会员',
      '主持妇幼健康项目4项'
    ],
    email: 'a.sayed@cmsc.edu.kg'
  },
  {
    id: '9',
    name: 'Omar al Jaber',
    title: '讲师',
    department: '护理学系',
    departmentId: '2',
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80',
    bio: 'Omar al Jaber 讲师，护理学专业教师。专注于社区护理与老年护理研究，拥有丰富的临床护理经验。',
    researchArea: ['社区护理', '老年护理', '康复护理'],
    achievements: [
      '发表护理论文18篇',
      '社区护理培训项目负责人',
      '吉尔吉斯斯坦护士协会会员',
      '获青年护理教师奖'
    ],
    email: 'o.jaber@cmsc.edu.kg'
  },
  {
    id: '10',
    name: 'Layla al Qasim',
    title: '副教授',
    department: '药学系',
    departmentId: '3',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    bio: 'Layla al Qasim 副教授，药理学专家。在药物作用机制与临床合理用药研究方面有突出成果。',
    researchArea: ['药理学', '临床药学', '药物不良反应监测'],
    achievements: [
      '发表药理学论文41篇',
      '参与编写临床用药指南',
      '国际药理学会会员',
      '获药理学研究创新奖'
    ],
    email: 'l.qasim@cmsc.edu.kg'
  },
  {
    id: '11',
    name: 'Yousef el Amin',
    title: '教授',
    department: '公共卫生系',
    departmentId: '5',
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80',
    bio: 'Yousef el Amin 教授，环境卫生学专家。在环境与健康关系研究领域有深厚学术积累。',
    researchArea: ['环境卫生学', '职业卫生', '健康风险评估'],
    achievements: [
      '发表环境卫生论文56篇',
      'WHO环境卫生专家',
      '主持环境健康研究项目8项',
      '获环境卫生科学奖'
    ],
    email: 'y.amin@cmsc.edu.kg'
  },
  {
    id: '12',
    name: 'Hana al Khalil',
    title: '讲师',
    department: '医学技术系',
    departmentId: '6',
    imageUrl: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&q=80',
    bio: 'Hana al Khalil 讲师，医学影像技术专家。专注于医学影像诊断技术与影像设备研究。',
    researchArea: ['医学影像技术', '放射诊断', '医学图像处理'],
    achievements: [
      '发表医学影像论文22篇',
      '医学影像技术培训师',
      '国际医学影像协会会员',
      '获青年医学技术奖'
    ],
    email: 'h.khalil@cmsc.edu.kg'
  }
];

// ── 英文 ──
const FACULTY_EN: IFaculty[] = [
  {
    id: '1',
    name: 'Taaha al Safar',
    title: 'Professor / Rector',
    department: 'General Medicine',
    departmentId: '1',
    imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80',
    bio: 'Professor Taaha al Safar, Rector of Central International Medical College, MD, PhD supervisor. With over 25 years of medical education and clinical experience, he has held leadership positions at multiple internationally renowned medical schools. His main research areas are cardiovascular diseases and public health management.',
    researchArea: ['Cardiovascular Diseases', 'Public Health Management', 'Medical Education'],
    achievements: [
      '87 SCI-indexed publications',
      '12 international research projects',
      'International Medical Education Excellence Award',
      'Member of World Federation for Medical Education'
    ],
    email: 'rector@cmsc.edu.kg'
  },
  {
    id: '2',
    name: "Mu'taz el Abdi",
    title: 'Professor / Department Head',
    department: 'General Medicine',
    departmentId: '1',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
    bio: "Professor Mu'taz el Abdi, Head of General Medicine Department, internal medicine specialist. With extensive clinical teaching experience in the Middle East and Central Asia, he focuses on cardiovascular disease diagnosis and treatment research.",
    researchArea: ['Cardiovascular Medicine', 'Hypertension Prevention', 'Clinical Epidemiology'],
    achievements: [
      '65 academic publications',
      '3 medical textbooks as chief editor',
      'National Excellent Teacher Award',
      'Member of Kyrgyz Academy of Medical Sciences'
    ],
    email: 'm.abdi@cmsc.edu.kg'
  },
  {
    id: '3',
    name: 'Shameema el Taheri',
    title: 'Associate Professor',
    department: 'Nursing',
    departmentId: '2',
    imageUrl: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80',
    bio: 'Associate Professor Shameema el Taheri, nursing specialist. With 18 years of nursing education and clinical experience, she focuses on critical care nursing and nursing management research.',
    researchArea: ['Critical Care Nursing', 'Nursing Quality Management', 'Nursing Education'],
    achievements: [
      '42 nursing academic papers',
      '8 nursing research projects',
      'Member of International Council of Nurses',
      'Excellent Nursing Educator Award'
    ],
    email: 's.taheri@cmsc.edu.kg'
  },
  {
    id: '4',
    name: 'Saara al Faris',
    title: 'Professor / Department Head',
    department: 'Pharmacy',
    departmentId: '3',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    bio: 'Professor Saara al Faris, Head of Pharmacy Department, pharmaceutical sciences expert. With deep expertise in drug development and clinical pharmacy, she has served as senior researcher at multiple international pharmaceutical companies.',
    researchArea: ['Clinical Pharmacy', 'Pharmacokinetics', 'Natural Medicine Research'],
    achievements: [
      '58 SCI-indexed publications',
      '15 pharmaceutical patents',
      'Member of International Pharmaceutical Federation',
      '6 national research projects'
    ],
    email: 's.faris@cmsc.edu.kg'
  },
  {
    id: '5',
    name: 'Jasra al Munir',
    title: 'Associate Professor',
    department: 'Dentistry',
    departmentId: '4',
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80',
    bio: 'Associate Professor Jasra al Munir, dental medicine specialist. Focusing on prosthodontics and orthodontics research, with rich clinical and teaching experience.',
    researchArea: ['Prosthodontics', 'Orthodontics', 'Dental Implantology'],
    achievements: [
      '38 dental medicine papers',
      'Dental Technology Innovation Award',
      'Member of International Association for Dental Research',
      '2 dental textbooks as chief editor'
    ],
    email: 'j.munir@cmsc.edu.kg'
  },
  {
    id: '6',
    name: 'Khalid al Rahman',
    title: 'Professor / Department Head',
    department: 'Public Health',
    departmentId: '5',
    imageUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80',
    bio: 'Professor Khalid al Rahman, Head of Public Health Department, epidemiology expert. With international reputation in infectious disease prevention and public health policy research.',
    researchArea: ['Epidemiology', 'Infectious Disease Control', 'Public Health Policy'],
    achievements: [
      '72 public health publications',
      'WHO Public Health Expert Advisor',
      '9 international public health projects',
      'Public Health Outstanding Contribution Award'
    ],
    email: 'k.rahman@cmsc.edu.kg'
  },
  {
    id: '7',
    name: 'Noor el Hassan',
    title: 'Professor / Department Head',
    department: 'Medical Technology',
    departmentId: '6',
    imageUrl: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80',
    bio: 'Professor Noor el Hassan, Head of Medical Technology Department, medical laboratory science expert. With in-depth research in medical laboratory technology and diagnostic testing.',
    researchArea: ['Medical Laboratory Technology', 'Laboratory Diagnostics', 'Molecular Diagnostics'],
    achievements: [
      '52 medical technology papers',
      '8 laboratory technology patents',
      'Member of International Federation of Clinical Chemistry',
      '7 medical technology R&D projects'
    ],
    email: 'n.hassan@cmsc.edu.kg'
  },
  {
    id: '8',
    name: 'Amira el Sayed',
    title: 'Associate Professor',
    department: 'General Medicine',
    departmentId: '1',
    imageUrl: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&q=80',
    bio: 'Associate Professor Amira el Sayed, obstetrics and gynecology specialist. With rich clinical and teaching experience in obstetrics and gynecology, focusing on maternal and child health research.',
    researchArea: ['Obstetrics & Gynecology', 'Maternal & Child Health', 'Reproductive Medicine'],
    achievements: [
      '35 obstetrics and gynecology papers',
      'Maternal and Child Health Research Award',
      'Member of International Federation of Gynecology',
      '4 maternal health projects'
    ],
    email: 'a.sayed@cmsc.edu.kg'
  },
  {
    id: '9',
    name: 'Omar al Jaber',
    title: 'Lecturer',
    department: 'Nursing',
    departmentId: '2',
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80',
    bio: 'Lecturer Omar al Jaber, nursing faculty. Focusing on community nursing and geriatric nursing research, with extensive clinical nursing experience.',
    researchArea: ['Community Nursing', 'Geriatric Nursing', 'Rehabilitation Nursing'],
    achievements: [
      '18 nursing papers',
      'Community nursing training program director',
      'Member of Kyrgyz Nurses Association',
      'Young Nursing Educator Award'
    ],
    email: 'o.jaber@cmsc.edu.kg'
  },
  {
    id: '10',
    name: 'Layla al Qasim',
    title: 'Associate Professor',
    department: 'Pharmacy',
    departmentId: '3',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    bio: 'Associate Professor Layla al Qasim, pharmacology expert. With outstanding achievements in drug mechanism research and rational clinical drug use.',
    researchArea: ['Pharmacology', 'Clinical Pharmacy', 'Adverse Drug Reaction Monitoring'],
    achievements: [
      '41 pharmacology papers',
      'Clinical medication guideline contributor',
      'Member of International Union of Pharmacology',
      'Pharmacology Research Innovation Award'
    ],
    email: 'l.qasim@cmsc.edu.kg'
  },
  {
    id: '11',
    name: 'Yousef el Amin',
    title: 'Professor',
    department: 'Public Health',
    departmentId: '5',
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80',
    bio: 'Professor Yousef el Amin, environmental health expert. With deep academic accumulation in environment and health relationship research.',
    researchArea: ['Environmental Health', 'Occupational Health', 'Health Risk Assessment'],
    achievements: [
      '56 environmental health papers',
      'WHO Environmental Health Expert',
      '8 environmental health research projects',
      'Environmental Health Science Award'
    ],
    email: 'y.amin@cmsc.edu.kg'
  },
  {
    id: '12',
    name: 'Hana al Khalil',
    title: 'Lecturer',
    department: 'Medical Technology',
    departmentId: '6',
    imageUrl: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&q=80',
    bio: 'Lecturer Hana al Khalil, medical imaging technology specialist. Focusing on medical imaging diagnostic technology and imaging equipment research.',
    researchArea: ['Medical Imaging Technology', 'Radiology', 'Medical Image Processing'],
    achievements: [
      '22 medical imaging papers',
      'Medical imaging technology trainer',
      'Member of International Society of Radiology',
      'Young Medical Technology Award'
    ],
    email: 'h.khalil@cmsc.edu.kg'
  }
];

// ── 吉尔吉斯语 ──
const FACULTY_KY: IFaculty[] = [
  {
    id: '1',
    name: 'Taaha al Safar',
    title: 'Профессор / Ректор',
    department: 'Жалпы медицина',
    departmentId: '1',
    imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80',
    bio: 'Профессор Тааха аль Сафар, Централдык Эл аралык Медицина Колледжинин ректори, медицина илимдору доктору, доктордук диссертация жетекчиси. 25 жылдан ашуун медицина билим берүү жана клиникалык тажрыйбасы бар, эл аралык таанымал медицина мектептеринде жетекчилдик позицияларында иштеген.',
    researchArea: ['Жүрөк-кан оорулары', 'Жалпы ден-соолук башкаруу', 'Медицина билим берүү'],
    achievements: [
      '87 SCI публикация',
      '12 эл аралык илимий долбоор',
      'Эл аралык медицина билим берүүсүнүн мыкты сыйлыгы',
      'Дүйнөлүк медицина билим берүү федерациясы мүчөсү'
    ],
    email: 'rector@cmsc.edu.kg'
  },
  {
    id: '2',
    name: "Mu'taz el Abdi",
    title: 'Профессор / Факультет башчысы',
    department: 'Жалпы медицина',
    departmentId: '1',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
    bio: "Профессор Мутаз эл Абди, Жалпы медицина факультетинин башчысы, ички оорулар адисти. Жүнүндүк Орто Азияда кең клиникалык окутуу тажрыйбасы бар, жүрөк-кан ооруларын диагноздоо жана дарылоо изилдөөлөрүнө багытталган.",
    researchArea: ['Жүрөк-кан медицинасы', 'Кан басымын алдын алуу', 'Клиникалык эпидемиология'],
    achievements: [
      '65 илимий макала',
      '3 медицина окуу куралынын баш редактору',
      'Улуттук мыкты мугалим сыйлыгы',
      'Кыргызстан медицина илимдер академиясы академиги'
    ],
    email: 'm.abdi@cmsc.edu.kg'
  },
  {
    id: '3',
    name: 'Shameema el Taheri',
    title: 'Доцент',
    department: 'Сестрачылык',
    departmentId: '2',
    imageUrl: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80',
    bio: 'Доцент Шамима эль Тахери, сестрачылык адисти. 18 жылдык сестрачылык билим берүү жана клиникалык тажрыйбасы бар, ауыр бакылап турган бөлүмдөрдүн сестрачылыгына жана сестрачылык башкаруусуна багытталган.',
    researchArea: ['Ауыр пациенттерди бакылап турган сестрачылык', 'Сестрачылык сапатын башкаруу', 'Сестрачылык билим берүү'],
    achievements: [
      '42 сестрачылык илимий макала',
      '8 сестрачылык илимий долбоор',
      'Дүйнөлүк сестрачылык кеңеши мүчөсү',
      'Мыкты сестрачылык билим берүүчүсүнүн сыйлыгы'
    ],
    email: 's.taheri@cmsc.edu.kg'
  },
  {
    id: '4',
    name: 'Saara al Faris',
    title: 'Профессор / Факультет башчысы',
    department: 'Дарыгерлик',
    departmentId: '3',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    bio: 'Профессор Саара аль Фарис, Дарыгерлик факультетинин башчысы, фармацевтика адисти. Дарыларды иштеп чыгуу жана клиникалык фармация тармагында терең тажрыйбасы бар.',
    researchArea: ['Клиникалык фармация', 'Дарылардын кинетикасы', 'Табигый дарыларды изилдөө'],
    achievements: [
      '58 SCI публикация',
      '15 фармацевтикалык патент',
      'Эл аралык фармация федерациясы мүчөсү',
      '6 улуттук илимий долбоор'
    ],
    email: 's.faris@cmsc.edu.kg'
  },
  {
    id: '5',
    name: 'Jasra al Munir',
    title: 'Доцент',
    department: 'Стоматология',
    departmentId: '4',
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80',
    bio: 'Доцент Жасра аль Мунир, стоматология адисти. Протезирлөө жана ортодонтия изилдөөлөрүнө багытталган, бай клиникалык жана окутуу тажрыйбасы бар.',
    researchArea: ['Стоматологиялык протезирлөө', 'Ортодонтия', 'Стоматологиялык имплантология'],
    achievements: [
      '38 стоматология макаласы',
      'Стоматологиялык технология инновациялык сыйлыгы',
      'Эл аралык стоматология изилдөө ассоциациясы мүчөсү',
      '2 стоматология окуу куралы'
    ],
    email: 'j.munir@cmsc.edu.kg'
  },
  {
    id: '6',
    name: 'Khalid al Rahman',
    title: 'Профессор / Факультет башчысы',
    department: 'Жалпы ден-соолук',
    departmentId: '5',
    imageUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80',
    bio: 'Профессор Халид аль Рахман, Жалпы ден-соолук факультетинин башчысы, эпидемиология адисти. Жугунуштуу ооруларды алдын алуу жана жалпы ден-соолук саясаты изилдөөлөрүндө эл аралык таанымалдуулукка ээ.',
    researchArea: ['Эпидемиология', 'Жугунуштуу ооруларды коргоо', 'Жалпы ден-соолук саясаты'],
    achievements: [
      '72 жалпы ден-соолук публикация',
      'КБО жалпы ден-соолук эксперт-кеңешчиси',
      '9 эл аралык жалпы ден-соолук долбоору',
      'Жалпы ден-соолукка эгемен салымын берүү сыйлыгы'
    ],
    email: 'k.rahman@cmsc.edu.kg'
  },
  {
    id: '7',
    name: 'Noor el Hassan',
    title: 'Профессор / Факультет башчысы',
    department: 'Медицина техникасы',
    departmentId: '6',
    imageUrl: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80',
    bio: 'Профессор Нур эль Хассан, Медицина техникасы факультетинин башчысы, медицина текшерүүсү адисти. Медицина лаборатория техникасы жана диагноздоо изилдөөлөрүндө терең тажрыйбасы бар.',
    researchArea: ['Медицина текшерүү техникасы', 'Лаборатория диагнозу', 'Молекулярдык диагноз'],
    achievements: [
      '52 медицина техникасы макаласы',
      '8 лаборатория техникасы патенти',
      'Эл аралык клиникалык химия федерациясы мүчөсү',
      '7 медицина техникасы долбоору'
    ],
    email: 'n.hassan@cmsc.edu.kg'
  },
  {
    id: '8',
    name: 'Amira el Sayed',
    title: 'Доцент',
    department: 'Жалпы медицина',
    departmentId: '1',
    imageUrl: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&q=80',
    bio: 'Доцент Амира эль Сайед, гинекология жана акушерство адисти. Гинекология жана акушерство боюнча бай клиникалык жана окутуу тажрыйбасы бар.',
    researchArea: ['Акушерство жана гинекология', 'Ана жана бала ден-соолугу', 'Репродуктивдик медицина'],
    achievements: [
      '35 гинекология макаласы',
      'Ана жана бала ден-соолугу изилдөө сыйлыгы',
      'Эл аралык гинекология федерациясы мүчөсү',
      '4 ана ден-соолугу долбоору'
    ],
    email: 'a.sayed@cmsc.edu.kg'
  },
  {
    id: '9',
    name: 'Omar al Jaber',
    title: 'Окутуучу',
    department: 'Сестрачылык',
    departmentId: '2',
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80',
    bio: 'Окутуучу Омар аль Жабер, сестрачылык кафедрасы мугалими. Жаңы сестрачылык жана жаштардын сестрачылыгына багытталган, кең клиникалык сестрачылык тажрыйбасы бар.',
    researchArea: ['Жаңы сестрачылык', 'Жаштар сестрачылыгы', 'Калпына келтирүү сестрачылыгы'],
    achievements: [
      '18 сестрачылык макаласы',
      'Жаңы сестрачылык үйрөтүү долбоору',
      'Кыргызстан сестрачылар кеңеши мүчөсү',
      'Жаш сестрачылык мугалими сыйлыгы'
    ],
    email: 'o.jaber@cmsc.edu.kg'
  },
  {
    id: '10',
    name: 'Layla al Qasim',
    title: 'Доцент',
    department: 'Дарыгерлик',
    departmentId: '3',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    bio: 'Доцент Лейла аль Касим, фармакология адисти. Дарылардын таасир механизми жана клиникалык акылды дары колдонуу изилдөөлөрүндө атактуу натыйжаларга ээ.',
    researchArea: ['Фармакология', 'Клиникалык фармация', 'Дардын терс таасирин көзөмөлдөө'],
    achievements: [
      '41 фармакология макаласы',
      'Клиникалык дары колдонуу колдонмосуна катышуучу',
      'Эл аралык фармакология союзу мүчөсү',
      'Фармакология изилдөөнүн инновациялык сыйлыгы'
    ],
    email: 'l.qasim@cmsc.edu.kg'
  },
  {
    id: '11',
    name: 'Yousef el Amin',
    title: 'Профессор',
    department: 'Жалпы ден-соолук',
    departmentId: '5',
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80',
    bio: 'Профессор Юсеф эль Амин, экологиялык ден-соолук адисти. Экология жана ден-соолук байланышын изилдөө тармагында терең академиялык тажрыйбасы бар.',
    researchArea: ['Экологиялык ден-соолук', 'Кесиптик ден-соолук', 'Ден-соолук рискин баалоо'],
    achievements: [
      '56 экологиялык ден-соолук макаласы',
      'КБО экологиялык ден-соолук эксперти',
      '8 экологиялык ден-соолук долбоору',
      'Экологиялык ден-соолук илими сыйлыгы'
    ],
    email: 'y.amin@cmsc.edu.kg'
  },
  {
    id: '12',
    name: 'Hana al Khalil',
    title: 'Окутуучу',
    department: 'Медицина техникасы',
    departmentId: '6',
    imageUrl: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&q=80',
    bio: 'Окутуучу Хана аль Халиль, медицина сүрөт техникасы адисти. Медицина сүрөт диагнозу техникасы жана сүрөт түзүчүлөрүн изилдөөгө багытталган.',
    researchArea: ['Медицина сүрөт техникасы', 'Рентген диагнозу', 'Медицина сүрөтүн иштетүү'],
    achievements: [
      '22 медицина сүрөт макаласы',
      'Медицина сүрөт техникасы үйрөтүүчүсү',
      'Эл аралык радиология коому мүчөсү',
      'Жаш медицина техникасы сыйлыгы'
    ],
    email: 'h.khalil@cmsc.edu.kg'
  }
];

// ── 俄语 ──
const FACULTY_RU: IFaculty[] = [
  {
    id: '1',
    name: 'Taaha al Safar',
    title: 'Профессор / Ректор',
    department: 'Лечебное дело',
    departmentId: '1',
    imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80',
    bio: 'Профессор Тааха аль Сафар, ректор Центрального Международного Медицинского Колледжа, доктор медицинских наук, руководитель докторских диссертаций. Более 25 лет опыта в медицинском образовании и клинической практике.',
    researchArea: ['Сердечно-сосудистые заболевания', 'Управление общественным здоровьем', 'Медицинское образование'],
    achievements: [
      '87 публикаций в базах SCI',
      '12 международных исследовательских проектов',
      'Премия за вклад в международное медицинское образование',
      'Член Всемирной федерации медицинского образования'
    ],
    email: 'rector@cmsc.edu.kg'
  },
  {
    id: '2',
    name: "Mu'taz el Abdi",
    title: 'Профессор / Заведующий кафедрой',
    department: 'Лечебное дело',
    departmentId: '1',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
    bio: "Профессор Мутаз эль Абди, заведующий кафедрой лечебного дела, специалист по внутренним болезням. Большой опыт клинического преподавания на Ближнем Востоке и в Центральной Азии.",
    researchArea: ['Сердечно-сосудистая медицина', 'Профилактика артериальной гипертензии', 'Клиническая эпидемиология'],
    achievements: [
      '65 научных публикаций',
      '3 учебника в качестве главного редактора',
      'Звание «Отличный учитель»',
      'Член Академии медицинских наук Кыргызстана'
    ],
    email: 'm.abdi@cmsc.edu.kg'
  },
  {
    id: '3',
    name: 'Shameema el Taheri',
    title: 'Доцент',
    department: 'Сестринское дело',
    departmentId: '2',
    imageUrl: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80',
    bio: 'Доцент Шамима эль Тахери, специалист по сестринскому делу. 18 лет опыта сестринского образования и клинической практики, специализируется на реанимационном сестринском деле.',
    researchArea: ['Реанимационное сестринское дело', 'Управление качеством сестринского дела', 'Сестринское образование'],
    achievements: [
      '42 научные статьи по сестринскому делу',
      '8 исследовательских проектов',
      'Член Международного совета сестёр',
      'Премия «Отличный преподаватель сестринского дела»'
    ],
    email: 's.taheri@cmsc.edu.kg'
  },
  {
    id: '4',
    name: 'Saara al Faris',
    title: 'Профессор / Заведующий кафедрой',
    department: 'Фармация',
    departmentId: '3',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    bio: 'Профессор Саара аль Фарис, заведующая кафедрой фармации, специалист по фармацевтическим наукам. Глубокий опыт в разработке лекарств и клинической фармации.',
    researchArea: ['Клиническая фармация', 'Фармакокинетика', 'Исследование натуральных лекарств'],
    achievements: [
      '58 публикаций в базах SCI',
      '15 фармацевтических патентов',
      'Член Международной фармацевтической федерации',
      '6 национальных исследовательских проектов'
    ],
    email: 's.faris@cmsc.edu.kg'
  },
  {
    id: '5',
    name: 'Jasra al Munir',
    title: 'Доцент',
    department: 'Стоматология',
    departmentId: '4',
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80',
    bio: 'Доцент Жасра аль Мунир, специалист по стоматологии. Специализируется на ортопедической стоматологии и ортодонтии, имеет богатый клинический и преподавательский опыт.',
    researchArea: ['Ортопедическая стоматология', 'Ортодонтия', 'Стоматологическая имплантология'],
    achievements: [
      '38 статей по стоматологии',
      'Премия за инновации в стоматологических технологиях',
      'Член Международной ассоциации стоматологических исследований',
      '2 учебника по стоматологии'
    ],
    email: 'j.munir@cmsc.edu.kg'
  },
  {
    id: '6',
    name: 'Khalid al Rahman',
    title: 'Профессор / Заведующий кафедрой',
    department: 'Общественное здоровье',
    departmentId: '5',
    imageUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80',
    bio: 'Профессор Халид аль Рахман, заведующий кафедрой общественного здоровья, специалист по эпидемиологии. Международная репутация в области профилактики инфекционных заболеваний.',
    researchArea: ['Эпидемиология', 'Профилактика инфекционных заболеваний', 'Политика общественного здоровья'],
    achievements: [
      '72 публикации по общественному здоровью',
      'Эксперт-консультант ВОЗ по общественному здоровью',
      '9 международных проектов',
      'Премия за выдающийся вклад в общественное здоровье'
    ],
    email: 'k.rahman@cmsc.edu.kg'
  },
  {
    id: '7',
    name: 'Noor el Hassan',
    title: 'Профессор / Заведующий кафедрой',
    department: 'Медицинская техника',
    departmentId: '6',
    imageUrl: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80',
    bio: 'Профессор Нур эль Хассан, заведующий кафедрой медицинской техники, специалист по лабораторной диагностике. Глубокие исследования в области медицинских лабораторных технологий.',
    researchArea: ['Медицинские лабораторные технологии', 'Лабораторная диагностика', 'Молекулярная диагностика'],
    achievements: [
      '52 статьи по медицинской технике',
      '8 патентов лабораторных технологий',
      'Член Международной федерации клинической химии',
      '7 проектов по медицинской технике'
    ],
    email: 'n.hassan@cmsc.edu.kg'
  },
  {
    id: '8',
    name: 'Amira el Sayed',
    title: 'Доцент',
    department: 'Лечебное дело',
    departmentId: '1',
    imageUrl: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&q=80',
    bio: 'Доцент Амира эль Сайед, специалист по акушерству и гинекологии. Богатый клинический и преподавательский опыт в области акушерства и гинекологии.',
    researchArea: ['Акушерство и гинекология', 'Здоровье матери и ребёнка', 'Репродуктивная медицина'],
    achievements: [
      '35 статей по акушерству и гинекологии',
      'Премия за исследования в области здоровья матери и ребёнка',
      'Член Международной федерации гинекологов',
      '4 проекта по здоровью матери'
    ],
    email: 'a.sayed@cmsc.edu.kg'
  },
  {
    id: '9',
    name: 'Omar al Jaber',
    title: 'Преподаватель',
    department: 'Сестринское дело',
    departmentId: '2',
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80',
    bio: 'Преподаватель Омар аль Жабер, преподаватель кафедры сестринского дела. Специализируется на общественном сестринском деле и гериатрическом сестринском деле.',
    researchArea: ['Общественное сестринское дело', 'Гериатрическое сестринское дело', 'Реабилитационное сестринское дело'],
    achievements: [
      '18 статей по сестринскому делу',
      'Руководитель программы обучения общественному сестринскому делу',
      'Член Ассоциации сестёр Кыргызстана',
      'Премия «Молодой преподаватель сестринского дела»'
    ],
    email: 'o.jaber@cmsc.edu.kg'
  },
  {
    id: '10',
    name: 'Layla al Qasim',
    title: 'Доцент',
    department: 'Фармация',
    departmentId: '3',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    bio: 'Доцент Лейла аль Касим, специалист по фармакологии. Выдающиеся достижения в исследовании механизмов действия лекарств и рационального клинического применения.',
    researchArea: ['Фармакология', 'Клиническая фармация', 'Мониторинг побочных действий лекарств'],
    achievements: [
      '41 статья по фармакологии',
      'Участник разработки клинических рекомендаций по лекарствам',
      'Член Международного союза фармакологов',
      'Премия за инновации в фармакологических исследованиях'
    ],
    email: 'l.qasim@cmsc.edu.kg'
  },
  {
    id: '11',
    name: 'Yousef el Amin',
    title: 'Профессор',
    department: 'Общественное здоровье',
    departmentId: '5',
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80',
    bio: 'Профессор Юсеф эль Амин, специалист по гигиене окружающей среды. Глубокие академические знания в исследованиях связи окружающей среды и здоровья.',
    researchArea: ['Гигиена окружающей среды', 'Профессиональная гигиена', 'Оценка рисков для здоровья'],
    achievements: [
      '56 статей по гигиене окружающей среды',
      'Эксперт ВОЗ по гигиене окружающей среды',
      '8 проектов по экологическому здоровью',
      'Премия «Наука экологического здоровья»'
    ],
    email: 'y.amin@cmsc.edu.kg'
  },
  {
    id: '12',
    name: 'Hana al Khalil',
    title: 'Преподаватель',
    department: 'Медицинская техника',
    departmentId: '6',
    imageUrl: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&q=80',
    bio: 'Преподаватель Хана аль Халиль, специалист по медицинской визуализации. Специализируется на диагностических технологиях медицинской визуализации и оборудовании.',
    researchArea: ['Технологии медицинской визуализации', 'Рентгенодиагностика', 'Обработка медицинских изображений'],
    achievements: [
      '22 статьи по медицинской визуализации',
      'Тренер по технологиям медицинской визуализации',
      'Член Международного радиологического общества',
      'Премия «Молодой специалист медицинской техники»'
    ],
    email: 'h.khalil@cmsc.edu.kg'
  }
];

// ── Exports ──
export const MOCK_FACULTY: Record<Language, IFaculty[]> = {
  zh: FACULTY_ZH,
  en: FACULTY_EN,
  ky: FACULTY_KY,
  ru: FACULTY_RU,
};

export function useFaculty(): IFaculty[] {
  return useLocalizedData(MOCK_FACULTY);
}

export function getFacultyById(language: Language, id: string): IFaculty | undefined {
  return getLocalizedData(MOCK_FACULTY, language).find((f) => f.id === id);
}

export function useFacultyById(id: string): IFaculty | undefined {
  const all = useLocalizedData(MOCK_FACULTY);
  return all.find((f) => f.id === id);
}
