// EXPORTS: IDepartment, MOCK_DEPARTMENTS, useDepartments, getDepartmentById, useDepartmentById
import type { Language } from '@/i18n/translations';
import { getLocalizedData, useLocalizedData } from './index';

export interface IDepartment {
  id: string;
  name: string;
  englishName: string;
  category: string;
  description: string;
  features: string[];
  researchAreas: string[];
  programs: { name: string; degree: string; duration: string }[];
  imageUrl: string;
  facultyCount: number;
  studentCount: number;
}

// ── 中文 ──
const DEPARTMENTS_ZH: IDepartment[] = [
  {
    id: '1',
    name: '临床医学系',
    englishName: 'Department of General Medicine',
    category: '医学',
    description: '临床医学系是CMSC建校之初设立的核心院系，拥有国家级特色专业，致力于培养具有扎实医学理论基础和卓越临床能力的高素质医学人才。',
    features: [
      '国家级特色专业建设点',
      '5所附属医院临床教学基地',
      '国际医学教育标准认证',
      '全英文授课项目'
    ],
    researchAreas: ['心血管疾病', '内分泌与代谢病', '呼吸系统疾病', '消化系统疾病', '神经系统疾病'],
    programs: [
      { name: '临床医学', degree: '本科', duration: '6年' },
      { name: '内科学', degree: '硕士', duration: '3年' },
      { name: '外科学', degree: '硕士', duration: '3年' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    facultyCount: 47,
    studentCount: 523
  },
  {
    id: '2',
    name: '护理学系',
    englishName: 'Department of Nursing',
    category: '医学',
    description: '护理学系以培养高素质护理人才为目标，注重理论与实践相结合，与多家国际医疗机构建立合作关系，毕业生深受用人单位好评。',
    features: [
      '国际护理教育标准课程体系',
      '模拟病房实训中心',
      '国际护士资格证培训',
      '海外实习交换项目'
    ],
    researchAreas: ['重症监护护理', '老年护理', '社区护理', '护理管理', '儿科护理'],
    programs: [
      { name: '护理学', degree: '本科', duration: '4年' },
      { name: '护理管理学', degree: '硕士', duration: '2年' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80',
    facultyCount: 23,
    studentCount: 287
  },
  {
    id: '3',
    name: '药学系',
    englishName: 'Department of Pharmacy',
    category: '医学',
    description: '药学系培养具备药学学科基本理论、基本知识和实验技能，能在药品生产、检验、流通、使用和研究与开发领域从事鉴定、药物设计、一般药物制剂及临床合理用药等方面工作的高级科学技术人才。',
    features: [
      'GMP标准药学实验室',
      '天然药物研究中心',
      '临床药学实践基地',
      '国际药学联合培养项目'
    ],
    researchAreas: ['药物化学', '药剂学', '药理学', '药物分析', '临床药学'],
    programs: [
      { name: '药学', degree: '本科', duration: '5年' },
      { name: '临床药学', degree: '硕士', duration: '3年' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
    facultyCount: 31,
    studentCount: 198
  },
  {
    id: '4',
    name: '牙科学系',
    englishName: 'Department of Dentistry',
    category: '医学',
    description: '牙科学系是中亚地区重要的口腔医学人才培养基地，拥有先进的口腔诊疗设备和教学模拟系统，培养具有国际视野的口腔医学专业人才。',
    features: [
      '数字化口腔诊疗中心',
      '口腔种植培训基地',
      '国际正畸认证课程',
      '口腔医学模拟教学系统'
    ],
    researchAreas: ['口腔修复学', '口腔正畸学', '口腔种植学', '口腔颌面外科学', '牙体牙髓病学'],
    programs: [
      { name: '口腔医学', degree: '本科', duration: '5年' },
      { name: '口腔临床医学', degree: '硕士', duration: '3年' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b08?w=800&q=80',
    facultyCount: 18,
    studentCount: 124
  },
  {
    id: '5',
    name: '公共卫生系',
    englishName: 'Department of Public Health',
    category: '医学',
    description: '公共卫生系致力于培养具备预防医学基本理论知识和卫生检测技术，能在卫生防疫、环境卫生或食品卫生监测等机构从事预防医学工作的医学高级专门人才。',
    features: [
      'WHO合作中心',
      '流行病学研究中心',
      '公共卫生政策研究所',
      '国际公共卫生实习项目'
    ],
    researchAreas: ['流行病学', '环境卫生学', '营养与食品卫生学', '职业卫生学', '卫生统计学'],
    programs: [
      { name: '预防医学', degree: '本科', duration: '5年' },
      { name: '公共卫生', degree: '硕士', duration: '2年' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=800&q=80',
    facultyCount: 26,
    studentCount: 156
  },
  {
    id: '6',
    name: '医学技术系',
    englishName: 'Department of Medical Technology',
    category: '医学',
    description: '医学技术系培养掌握医学检验技术、医学影像技术等专业知识和技能，能在各级医院、血站及防疫等部门从事医学检验及医学类实验室工作的高级技术应用性专门人才。',
    features: [
      '医学检验实训中心',
      '医学影像诊断中心',
      '分子诊断实验室',
      '医疗设备研发中心'
    ],
    researchAreas: ['临床检验诊断学', '医学影像学', '生物医学工程', '康复治疗学', '视光学'],
    programs: [
      { name: '医学检验技术', degree: '本科', duration: '4年' },
      { name: '医学影像技术', degree: '本科', duration: '4年' },
      { name: '康复治疗学', degree: '本科', duration: '4年' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
    facultyCount: 29,
    studentCount: 179
  }
];

// ── 英文 ──
const DEPARTMENTS_EN: IDepartment[] = [
  {
    id: '1',
    name: 'General Medicine',
    englishName: 'Department of General Medicine',
    category: 'Medicine',
    description: 'The Department of General Medicine is the core department established at CMSC\'s founding, with nationally recognized specialty programs, dedicated to cultivating high-quality medical talents with solid medical theoretical foundations and excellent clinical capabilities.',
    features: [
      'National-level specialty program',
      '5 affiliated hospital clinical teaching bases',
      'International medical education standard accreditation',
      'English-taught programs'
    ],
    researchAreas: ['Cardiovascular Diseases', 'Endocrinology & Metabolism', 'Respiratory Diseases', 'Digestive Diseases', 'Neurological Diseases'],
    programs: [
      { name: 'General Medicine', degree: 'Bachelor', duration: '6 years' },
      { name: 'Internal Medicine', degree: 'Master', duration: '3 years' },
      { name: 'Surgery', degree: 'Master', duration: '3 years' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    facultyCount: 47,
    studentCount: 523
  },
  {
    id: '2',
    name: 'Nursing',
    englishName: 'Department of Nursing',
    category: 'Medicine',
    description: 'The Department of Nursing aims to cultivate high-quality nursing talents, emphasizing the combination of theory and practice, with partnerships with multiple international medical institutions. Graduates are highly praised by employers.',
    features: [
      'International nursing education standard curriculum',
      'Simulation ward training center',
      'International nurse qualification training',
      'Overseas internship exchange programs'
    ],
    researchAreas: ['Critical Care Nursing', 'Geriatric Nursing', 'Community Nursing', 'Nursing Management', 'Pediatric Nursing'],
    programs: [
      { name: 'Nursing', degree: 'Bachelor', duration: '4 years' },
      { name: 'Nursing Management', degree: 'Master', duration: '2 years' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80',
    facultyCount: 23,
    studentCount: 287
  },
  {
    id: '3',
    name: 'Pharmacy',
    englishName: 'Department of Pharmacy',
    category: 'Medicine',
    description: 'The Department of Pharmacy cultivates advanced scientific and technical talents with basic pharmaceutical theories, knowledge, and experimental skills, capable of working in drug production, testing, distribution, use, and research & development.',
    features: [
      'GMP-standard pharmaceutical laboratories',
      'Natural medicine research center',
      'Clinical pharmacy practice base',
      'International pharmacy joint training program'
    ],
    researchAreas: ['Medicinal Chemistry', 'Pharmaceutics', 'Pharmacology', 'Pharmaceutical Analysis', 'Clinical Pharmacy'],
    programs: [
      { name: 'Pharmacy', degree: 'Bachelor', duration: '5 years' },
      { name: 'Clinical Pharmacy', degree: 'Master', duration: '3 years' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
    facultyCount: 31,
    studentCount: 198
  },
  {
    id: '4',
    name: 'Dentistry',
    englishName: 'Department of Dentistry',
    category: 'Medicine',
    description: 'The Department of Dentistry is an important dental medicine training base in Central Asia, with advanced dental treatment equipment and teaching simulation systems, cultivating dental professionals with international perspectives.',
    features: [
      'Digital dental treatment center',
      'Dental implant training base',
      'International orthodontic certification courses',
      'Dental simulation teaching system'
    ],
    researchAreas: ['Prosthodontics', 'Orthodontics', 'Dental Implantology', 'Oral & Maxillofacial Surgery', 'Endodontics'],
    programs: [
      { name: 'Dental Medicine', degree: 'Bachelor', duration: '5 years' },
      { name: 'Clinical Dentistry', degree: 'Master', duration: '3 years' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b08?w=800&q=80',
    facultyCount: 18,
    studentCount: 124
  },
  {
    id: '5',
    name: 'Public Health',
    englishName: 'Department of Public Health',
    category: 'Medicine',
    description: 'The Department of Public Health is committed to cultivating advanced medical specialists with basic preventive medicine theories and health testing technologies, capable of working in health epidemic prevention, environmental health, or food safety monitoring institutions.',
    features: [
      'WHO collaborating center',
      'Epidemiology research center',
      'Public health policy institute',
      'International public health internship program'
    ],
    researchAreas: ['Epidemiology', 'Environmental Health', 'Nutrition & Food Hygiene', 'Occupational Health', 'Health Statistics'],
    programs: [
      { name: 'Preventive Medicine', degree: 'Bachelor', duration: '5 years' },
      { name: 'Public Health', degree: 'Master', duration: '2 years' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=800&q=80',
    facultyCount: 26,
    studentCount: 156
  },
  {
    id: '6',
    name: 'Medical Technology',
    englishName: 'Department of Medical Technology',
    category: 'Medicine',
    description: 'The Department of Medical Technology cultivates advanced technical application talents with professional knowledge and skills in medical laboratory technology and medical imaging technology, capable of working in hospitals, blood banks, and epidemic prevention departments.',
    features: [
      'Medical laboratory training center',
      'Medical imaging diagnosis center',
      'Molecular diagnostics laboratory',
      'Medical equipment R&D center'
    ],
    researchAreas: ['Clinical Laboratory Diagnostics', 'Medical Imaging', 'Biomedical Engineering', 'Rehabilitation Therapy', 'Optometry'],
    programs: [
      { name: 'Medical Laboratory Technology', degree: 'Bachelor', duration: '4 years' },
      { name: 'Medical Imaging Technology', degree: 'Bachelor', duration: '4 years' },
      { name: 'Rehabilitation Therapy', degree: 'Bachelor', duration: '4 years' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
    facultyCount: 29,
    studentCount: 179
  }
];

// ── 吉尔吉斯语 ──
const DEPARTMENTS_KY: IDepartment[] = [
  {
    id: '1',
    name: 'Жалпы медицина',
    englishName: 'Department of General Medicine',
    category: 'Медицина',
    description: 'Жалпы медицина кафедрасы CMSC негизделгенден бери иштеп келген негизги кафедра болуп, улуттук деңгээлдеги адистикке ээ, тыныч медицина теориялык негиздери жана мыкты клиникалык жөндөмгө ээ жогорку сапаттагы медицина адистерин даярдайт.',
    features: [
      'Улуттук деңгээлдеги адистик долбоор',
      '5 тиешелүү оорукана клиникалык окутуу базасы',
      'Эл аралык медицина билим берүү стандарты认证',
      'Англис тилинде окутуу долбоорлору'
    ],
    researchAreas: ['Жүрөк-кан оорулары', 'Эндокринология жана обмен', 'Нефис оорулары', 'Ашказан системасы оорулары', 'Неврология оорулары'],
    programs: [
      { name: 'Жалпы медицина', degree: 'Бакалавр', duration: '6 жыл' },
      { name: 'Ички оорулар', degree: 'Магистр', duration: '3 жыл' },
      { name: 'Жаракат хирургиясы', degree: 'Магистр', duration: '3 жыл' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    facultyCount: 47,
    studentCount: 523
  },
  {
    id: '2',
    name: 'Сестрачылык',
    englishName: 'Department of Nursing',
    category: 'Медицина',
    description: 'Сестрачылык кафедрасы жогорку сапаттагы сестрачылык кадрларын даярдоону максат кылат, теория жана практиканы бириктирүүгө басым жасайт. Көпчүлүк эл аралык медицина ишканалары менен кызматташуу мамилесин түзгөн.',
    features: [
      'Эл аралык сестрачылык билим берүү стандарты',
      'Симуляция палатасына үйрөтүү борбору',
      'Эл аралык сестра квалификациясы үйрөтүү',
      'Чет өлкөлөрдө стажировка алмашуу долбоорлору'
    ],
    researchAreas: ['Ауыр пациенттерди бакылап турган сестрачылык', 'Жаштар сестрачылыгы', 'Жаңы сестрачылык', 'Сестрачылык башкаруу', 'Балдар сестрачылыгы'],
    programs: [
      { name: 'Сестрачылык', degree: 'Бакалавр', duration: '4 жыл' },
      { name: 'Сестрачылык башкаруу', degree: 'Магистр', duration: '2 жыл' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80',
    facultyCount: 23,
    studentCount: 287
  },
  {
    id: '3',
    name: 'Дарыгерлик',
    englishName: 'Department of Pharmacy',
    category: 'Медицина',
    description: 'Дарыгерлик кафедрасы фармацевтика илиминин негизги теориялары, билимдери жана эксперимент жөндөмдөрүнө ээ жогорку сапаттагы адистерди даярдайт.',
    features: [
      'GMP стандартына ылайыктуу фармацевтикалык лабораториялар',
      'Табигый дарыларды изилдөө борбору',
      'Клиникалык фармация практика базасы',
      'Эл аралык фармация биргелешкен даярдоо долбоору'
    ],
    researchAreas: ['Дары химиясы', 'Фармацевтика', 'Фармакология', 'Дарыларды анализдөө', 'Клиникалык фармация'],
    programs: [
      { name: 'Фармация', degree: 'Бакалавр', duration: '5 жыл' },
      { name: 'Клиникалык фармация', degree: 'Магистр', duration: '3 жыл' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
    facultyCount: 31,
    studentCount: 198
  },
  {
    id: '4',
    name: 'Стоматология',
    englishName: 'Department of Dentistry',
    category: 'Медицина',
    description: 'Стоматология кафедрасы Орто Азиядагы маанилүү стоматология кадрларын даярдоо базасы болуп, алдыңкы стоматологиялык дарылоо түзүчүлөрү жана окутуу симуляция системаларына ээ.',
    features: [
      'Цифралык стоматологиялык дарылоо борбору',
      'Стоматологиялык имплантатты үйрөтүү базасы',
      'Эл аралык ортодонтия сертификаттык курстары',
      'Стоматологиялык симуляция окутуу системасы'
    ],
    researchAreas: ['Стоматологиялык протезирлөө', 'Ортодонтия', 'Стоматологиялык имплантология', 'Аңдөй-жүз хирургиясы', 'Тиш дарыгары'],
    programs: [
      { name: 'Стоматология', degree: 'Бакалавр', duration: '5 жыл' },
      { name: 'Клиникалык стоматология', degree: 'Магистр', duration: '3 жыл' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b08?w=800&q=80',
    facultyCount: 18,
    studentCount: 124
  },
  {
    id: '5',
    name: 'Жалпы ден-соолук',
    englishName: 'Department of Public Health',
    category: 'Медицина',
    description: 'Жалпы ден-соолук кафедрасы профилактикалык медицина негизги теориялары жана ден-соолук текшерүү жөндөмдөрүнө ээ жогорку сапаттагы медицина адистерин даярдайт.',
    features: [
      'КБО өнөктөшүү борбору',
      'Эпидемиология изилдөө борбору',
      'Жалпы ден-соолук саясаты институту',
      'Эл аралык жалпы ден-соолук стажировка долбоору'
    ],
    researchAreas: ['Эпидемиология', 'Экологиялык ден-соолук', 'Тарбия жана азык-тамак ден-соолугу', 'Кесиптик ден-соолук', 'Ден-соолук статистикасы'],
    programs: [
      { name: 'Профилактикалык медицина', degree: 'Бакалавр', duration: '5 жыл' },
      { name: 'Жалпы ден-соолук', degree: 'Магистр', duration: '2 жыл' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=800&q=80',
    facultyCount: 26,
    studentCount: 156
  },
  {
    id: '6',
    name: 'Медицина техникасы',
    englishName: 'Department of Medical Technology',
    category: 'Медицина',
    description: 'Медицина техникасы кафедрасы медицина текшерүү техникасы жана медицина сүрөт техникасы кесиптик билимдерине жана жөндөмдөрүнө ээ жогорку сапаттагы техникалык адистерди даярдайт.',
    features: [
      'Медицина текшерүү үйрөтүү борбору',
      'Медицина сүрөт диагнозу борбору',
      'Молекулярдык диагноз лабораториясы',
      'Медицина түзүчүлөрдүн иштеп чыгуу борбору'
    ],
    researchAreas: ['Клиникалык текшерүү диагнозу', 'Медицина сүрөтчүлүк', 'Биомедициналык инженерия', 'Калпына келтирүү терапиясы', 'Оптометрия'],
    programs: [
      { name: 'Медицина текшерүү техникасы', degree: 'Бакалавр', duration: '4 жыл' },
      { name: 'Медицина сүрөт техникасы', degree: 'Бакалавр', duration: '4 жыл' },
      { name: 'Калпына келтирүү терапиясы', degree: 'Бакалавр', duration: '4 жыл' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
    facultyCount: 29,
    studentCount: 179
  }
];

// ── 俄语 ──
const DEPARTMENTS_RU: IDepartment[] = [
  {
    id: '1',
    name: 'Лечебное дело',
    englishName: 'Department of General Medicine',
    category: 'Медицина',
    description: 'Кафедра лечебного дела — основная кафедра, основанная при создании CMSC, с национально признанными специальностями, готовящая высококвалифицированных медицинских специалистов.',
    features: [
      'Национальная специальная программа',
      '5 клинических баз при больницах-партнёрах',
      'Аккредитация по международным стандартам',
      'Программы на английском языке'
    ],
    researchAreas: ['Сердечно-сосудистые заболевания', 'Эндокринология и обмен веществ', 'Болезни органов дыхания', 'Болезни пищеварительной системы', 'Неврологические заболевания'],
    programs: [
      { name: 'Лечебное дело', degree: 'Бакалавриат', duration: '6 лет' },
      { name: 'Терапия', degree: 'Магистратура', duration: '3 года' },
      { name: 'Хирургия', degree: 'Магистратура', duration: '3 года' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    facultyCount: 47,
    studentCount: 523
  },
  {
    id: '2',
    name: 'Сестринское дело',
    englishName: 'Department of Nursing',
    category: 'Медицина',
    description: 'Кафедра сестринского дела готовит высококвалифицированных сестринских специалистов, уделяя особое внимание сочетанию теории и практики.',
    features: [
      'Учебная программа по международным стандартам',
      'Учебный центр симуляционной палаты',
      'Подготовка к международной квалификации',
      'Программы зарубежных стажировок'
    ],
    researchAreas: ['Сестринское дело в реанимации', 'Гериатрическое сестринское дело', 'Общественное сестринское дело', 'Управление сестринским делом', 'Педиатрическое сестринское дело'],
    programs: [
      { name: 'Сестринское дело', degree: 'Бакалавриат', duration: '4 года' },
      { name: 'Управление сестринским делом', degree: 'Магистратура', duration: '2 года' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80',
    facultyCount: 23,
    studentCount: 287
  },
  {
    id: '3',
    name: 'Фармация',
    englishName: 'Department of Pharmacy',
    category: 'Медицина',
    description: 'Кафедра фармации готовит высококвалифицированных специалистов с базовыми фармацевтическими знаниями и практическими навыками.',
    features: [
      'Лаборатории по стандарту GMP',
      'Центр исследования натуральных лекарств',
      'База клинической фармации',
      'Совместная международная программа'
    ],
    researchAreas: ['Медицинская химия', 'Фармацевтика', 'Фармакология', 'Фармацевтический анализ', 'Клиническая фармация'],
    programs: [
      { name: 'Фармация', degree: 'Бакалавриат', duration: '5 лет' },
      { name: 'Клиническая фармация', degree: 'Магистратура', duration: '3 года' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
    facultyCount: 31,
    studentCount: 198
  },
  {
    id: '4',
    name: 'Стоматология',
    englishName: 'Department of Dentistry',
    category: 'Медицина',
    description: 'Кафедра стоматологии — важная база подготовки стоматологических кадров в Центральной Азии, с современным стоматологическим оборудованием и системами симуляционного обучения.',
    features: [
      'Цифровой стоматологический центр',
      'База подготовки по дентальной имплантологии',
      'Международные курсы сертификации',
      'Система симуляционного обучения'
    ],
    researchAreas: ['Ортопедическая стоматология', 'Ортодонтия', 'Дентальная имплантология', 'Челюстно-лицевая хирургия', 'Эндодонтия'],
    programs: [
      { name: 'Стоматология', degree: 'Бакалавриат', duration: '5 лет' },
      { name: 'Клиническая стоматология', degree: 'Магистратура', duration: '3 года' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b08?w=800&q=80',
    facultyCount: 18,
    studentCount: 124
  },
  {
    id: '5',
    name: 'Общественное здоровье',
    englishName: 'Department of Public Health',
    category: 'Медицина',
    description: 'Кафедра общественного здоровья готовит высококвалифицированных специалистов по профилактической медицине с теоретическими знаниями и навыками гигиенической диагностики.',
    features: [
      'Сотрудничающий центр ВОЗ',
      'Центр эпидемиологических исследований',
      'Институт политики общественного здоровья',
      'Международная программа стажировок'
    ],
    researchAreas: ['Эпидемиология', 'Гигиена окружающей среды', 'Питание и гигиена питания', 'Профессиональная гигиена', 'Медицинская статистика'],
    programs: [
      { name: 'Профилактическая медицина', degree: 'Бакалавриат', duration: '5 лет' },
      { name: 'Общественное здоровье', degree: 'Магистратура', duration: '2 года' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=800&q=80',
    facultyCount: 26,
    studentCount: 156
  },
  {
    id: '6',
    name: 'Медицинская техника',
    englishName: 'Department of Medical Technology',
    category: 'Медицина',
    description: 'Кафедра медицинской техники готовит высококвалифицированных технических специалистов с профессиональными знаниями и навыками в области лабораторной диагностики и медицинской визуализации.',
    features: [
      'Учебный центр медицинской лаборатории',
      'Центр медицинской визуальной диагностики',
      'Лаборатория молекулярной диагностики',
      'Центр разработки медицинского оборудования'
    ],
    researchAreas: ['Клиническая лабораторная диагностика', 'Медицинская визуализация', 'Биомедицинская инженерия', 'Реабилитология', 'Оптометрия'],
    programs: [
      { name: 'Медицинская лабораторная техника', degree: 'Бакалавриат', duration: '4 года' },
      { name: 'Медицинская визуальная техника', degree: 'Бакалавриат', duration: '4 года' },
      { name: 'Реабилитология', degree: 'Бакалавриат', duration: '4 года' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
    facultyCount: 29,
    studentCount: 179
  }
];

// ── Exports ──
export const MOCK_DEPARTMENTS: Record<Language, IDepartment[]> = {
  zh: DEPARTMENTS_ZH,
  en: DEPARTMENTS_EN,
  ky: DEPARTMENTS_KY,
  ru: DEPARTMENTS_RU,
};

export function useDepartments(): IDepartment[] {
  return useLocalizedData(MOCK_DEPARTMENTS);
}

export function getDepartmentById(language: Language, id: string): IDepartment | undefined {
  return getLocalizedData(MOCK_DEPARTMENTS, language).find((d) => d.id === id);
}

export function useDepartmentById(id: string): IDepartment | undefined {
  const all = useLocalizedData(MOCK_DEPARTMENTS);
  return all.find((d) => d.id === id);
}
