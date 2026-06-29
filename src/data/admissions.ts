// EXPORTS: IAdmissionProgram, IAdmissionInfo, IAdmissionRequirement, MOCK_ADMISSION_PROGRAMS, MOCK_ADMISSION_INFO, MOCK_ADMISSION_REQUIREMENTS, useAdmissionPrograms, useAdmissionInfo, useAdmissionRequirements
import type { Language } from '@/i18n/translations';
import { getLocalizedData, useLocalizedData } from './index';

export interface IAdmissionProgram {
  id: string;
  name: string;
  degree: string;
  duration: string;
  department: string;
  departmentId: string;
  description: string;
  features: string[];
  tuition: string;
  language: string;
}

export interface IAdmissionInfo {
  title: string;
  description: string;
  applicationDeadline: string;
  semesterStart: string;
  intake: string;
  steps: { title: string; description: string }[];
}

export interface IAdmissionRequirement {
  id: string;
  category: string;
  requirements: string[];
}

// ── 中文 ──
const ADMISSION_PROGRAMS_ZH: IAdmissionProgram[] = [
  {
    id: '1',
    name: '临床医学',
    degree: '本科',
    duration: '6年',
    department: '临床医学系',
    departmentId: '1',
    description: '培养具备基础医学、临床医学的基本理论和医疗预防的基本技能，能在医疗卫生单位、医学科研等部门从事医疗及预防、医学科研等方面工作的医学高级专门人才。',
    features: [
      'WFME国际认证专业',
      '5所附属医院临床实习',
      '全英文授课项目可选',
      '国际认可医学学位'
    ],
    tuition: '$4,500/年',
    language: '吉尔吉斯语 / 俄语 / 英语'
  },
  {
    id: '2',
    name: '护理学',
    degree: '本科',
    duration: '4年',
    department: '护理学系',
    departmentId: '2',
    description: '培养具备人文社会科学、医学、预防保健的基本知识及护理学的基本理论知识和技能，能在护理领域内从事临床护理、预防保健、护理管理、护理教学和护理科研的高级专门人才。',
    features: [
      '国际护理教育标准课程',
      '模拟病房实训中心',
      '海外实习交换项目',
      '国际护士资格证培训'
    ],
    tuition: '$3,200/年',
    language: '吉尔吉斯语 / 俄语 / 英语'
  },
  {
    id: '3',
    name: '药学',
    degree: '本科',
    duration: '5年',
    department: '药学系',
    departmentId: '3',
    description: '培养具备药学学科基本理论、基本知识和实验技能，能在药品生产、检验、流通、使用和研究与开发领域从事鉴定、药物设计、一般药物制剂及临床合理用药等方面工作的高级科学技术人才。',
    features: [
      'GMP标准药学实验室',
      '天然药物研究中心',
      '临床药学实践基地',
      '国际药学联合培养'
    ],
    tuition: '$3,800/年',
    language: '吉尔吉斯语 / 俄语 / 英语'
  },
  {
    id: '4',
    name: '口腔医学',
    degree: '本科',
    duration: '5年',
    department: '牙科学系',
    departmentId: '4',
    description: '培养具备医学基础理论和临床医学知识，掌握口腔医学的基本理论和临床操作技能，能在医疗卫生机构从事口腔常见病、多发病的诊治、修复和与预防工作的医学高级专门人才。',
    features: [
      '数字化口腔诊疗中心',
      '口腔种植培训基地',
      '国际正畸认证课程',
      '口腔模拟教学系统'
    ],
    tuition: '$4,200/年',
    language: '吉尔吉斯语 / 俄语 / 英语'
  },
  {
    id: '5',
    name: '预防医学',
    degree: '本科',
    duration: '5年',
    department: '公共卫生系',
    departmentId: '5',
    description: '培养具备预防医学基本理论知识和卫生检测技术，能在卫生防疫、环境卫生或食品卫生监测等机构从事预防医学工作的医学高级专门人才。',
    features: [
      'WHO合作中心',
      '流行病学研究中心',
      '公共卫生政策研究所',
      '国际公共卫生实习'
    ],
    tuition: '$3,500/年',
    language: '吉尔吉斯语 / 俄语 / 英语'
  },
  {
    id: '6',
    name: '医学检验技术',
    degree: '本科',
    duration: '4年',
    department: '医学技术系',
    departmentId: '6',
    description: '培养掌握医学检验技术基本理论和基本技能，能在各级医院、血站及防疫等部门从事医学检验及医学类实验室工作的高级技术应用性专门人才。',
    features: [
      '医学检验实训中心',
      '分子诊断实验室',
      '全自动生化分析仪',
      '临床检验实习基地'
    ],
    tuition: '$3,000/年',
    language: '吉尔吉斯语 / 俄语 / 英语'
  }
];

const ADMISSION_INFO_ZH: IAdmissionInfo = {
  title: '招生信息',
  description: '中央国际医学院欢迎来自世界各地的优秀学子。我们提供多元化的医学教育项目，培养具有国际视野和专业素养的医学人才。',
  applicationDeadline: '2024年7月31日',
  semesterStart: '2024年9月1日',
  intake: '约350人/年',
  steps: [
    { title: '在线申请', description: '填写在线申请表，上传所需申请材料' },
    { title: '材料审核', description: '招生办公室审核申请材料，通知面试安排' },
    { title: '入学考试/面试', description: '参加入学考试或线上面试，评估学术能力' },
    { title: '录取通知', description: '通过审核后发放录取通知书和邀请函' },
    { title: '签证办理', description: '凭录取通知书办理学生签证' },
    { title: '入学报到', description: '按规定时间到校报到，办理入学手续' }
  ]
};

const ADMISSION_REQUIREMENTS_ZH: IAdmissionRequirement[] = [
  {
    id: '1',
    category: '学历要求',
    requirements: [
      '高中毕业或同等学历',
      '高中成绩单（需公证）',
      '毕业证书（需公证）',
      '医学相关专业背景优先'
    ]
  },
  {
    id: '2',
    category: '语言要求',
    requirements: [
      '俄语授课：俄语水平证明或通过入学俄语测试',
      '英语授课：雅思5.5或托福70分以上，或通过入学英语测试',
      '吉尔吉斯语授课：吉尔吉斯语水平证明或通过入学测试'
    ]
  },
  {
    id: '3',
    category: '申请材料',
    requirements: [
      '填写完整的申请表',
      '护照复印件',
      '高中毕业证及成绩单公证件',
      '健康证明及无艾滋病证明',
      '无犯罪记录证明',
      '近期免冠照片8张',
      '个人陈述（英文或俄文）'
    ]
  }
];

// ── 英文 ──
const ADMISSION_PROGRAMS_EN: IAdmissionProgram[] = [
  {
    id: '1',
    name: 'General Medicine',
    degree: 'Bachelor',
    duration: '6 years',
    department: 'Department of General Medicine',
    departmentId: '1',
    description: 'Cultivates advanced medical specialists with basic theories of medicine and clinical skills, capable of working in medical institutions and research centers.',
    features: [
      'WFME accredited program',
      'Clinical practice at 5 affiliated hospitals',
      'English-taught program available',
      'Internationally recognized medical degree'
    ],
    tuition: '$4,500/year',
    language: 'Kyrgyz / Russian / English'
  },
  {
    id: '2',
    name: 'Nursing',
    degree: 'Bachelor',
    duration: '4 years',
    department: 'Department of Nursing',
    departmentId: '2',
    description: 'Cultivates advanced nursing specialists with humanities, medical knowledge, and nursing skills for clinical care, health prevention, and nursing management.',
    features: [
      'International nursing education standards',
      'Simulation ward training center',
      'Overseas internship exchange',
      'International nurse qualification training'
    ],
    tuition: '$3,200/year',
    language: 'Kyrgyz / Russian / English'
  },
  {
    id: '3',
    name: 'Pharmacy',
    degree: 'Bachelor',
    duration: '5 years',
    department: 'Department of Pharmacy',
    departmentId: '3',
    description: 'Cultivates advanced pharmaceutical specialists with pharmaceutical theories and experimental skills for drug production, testing, distribution, and research.',
    features: [
      'GMP-standard pharmaceutical labs',
      'Natural medicine research center',
      'Clinical pharmacy practice base',
      'International pharmacy joint training'
    ],
    tuition: '$3,800/year',
    language: 'Kyrgyz / Russian / English'
  },
  {
    id: '4',
    name: 'Dentistry',
    degree: 'Bachelor',
    duration: '5 years',
    department: 'Department of Dentistry',
    departmentId: '4',
    description: 'Cultivates advanced dental specialists with medical foundations and clinical skills for diagnosis, treatment, and prevention of oral diseases.',
    features: [
      'Digital dental treatment center',
      'Dental implant training base',
      'International orthodontic certification',
      'Dental simulation teaching system'
    ],
    tuition: '$4,200/year',
    language: 'Kyrgyz / Russian / English'
  },
  {
    id: '5',
    name: 'Preventive Medicine',
    degree: 'Bachelor',
    duration: '5 years',
    department: 'Department of Public Health',
    departmentId: '5',
    description: 'Cultivates advanced preventive medicine specialists with public health theories and testing skills for epidemic prevention and environmental health.',
    features: [
      'WHO collaborating center',
      'Epidemiology research center',
      'Public health policy institute',
      'International public health internship'
    ],
    tuition: '$3,500/year',
    language: 'Kyrgyz / Russian / English'
  },
  {
    id: '6',
    name: 'Medical Laboratory Technology',
    degree: 'Bachelor',
    duration: '4 years',
    department: 'Department of Medical Technology',
    departmentId: '6',
    description: 'Cultivates advanced technical specialists with medical laboratory skills for hospitals, blood banks, and epidemic prevention centers.',
    features: [
      'Medical laboratory training center',
      'Molecular diagnostics laboratory',
      'Automatic biochemical analyzers',
      'Clinical laboratory practice base'
    ],
    tuition: '$3,000/year',
    language: 'Kyrgyz / Russian / English'
  }
];

const ADMISSION_INFO_EN: IAdmissionInfo = {
  title: 'Admissions',
  description: 'Central International Medical College welcomes outstanding students from around the world. We offer diverse medical education programs to cultivate medical talents with international perspectives and professional competence.',
  applicationDeadline: 'July 31, 2024',
  semesterStart: 'September 1, 2024',
  intake: '~350 students/year',
  steps: [
    { title: 'Online Application', description: 'Complete the online application form and upload required documents' },
    { title: 'Document Review', description: 'Admissions office reviews materials and notifies interview schedule' },
    { title: 'Entrance Exam/Interview', description: 'Take entrance exam or online interview to assess academic ability' },
    { title: 'Admission Offer', description: 'Receive admission letter and invitation letter upon approval' },
    { title: 'Visa Application', description: 'Apply for student visa with admission letter' },
    { title: 'Registration', description: 'Arrive on campus and complete enrollment procedures' }
  ]
};

const ADMISSION_REQUIREMENTS_EN: IAdmissionRequirement[] = [
  {
    id: '1',
    category: 'Academic Requirements',
    requirements: [
      'High school diploma or equivalent',
      'High school transcript (notarized)',
      'Graduation certificate (notarized)',
      'Medical-related background preferred'
    ]
  },
  {
    id: '2',
    category: 'Language Requirements',
    requirements: [
      'Russian program: Russian proficiency certificate or pass entrance Russian test',
      'English program: IELTS 5.5 or TOEFL 70+, or pass entrance English test',
      'Kyrgyz program: Kyrgyz proficiency certificate or pass entrance test'
    ]
  },
  {
    id: '3',
    category: 'Application Documents',
    requirements: [
      'Completed application form',
      'Passport copy',
      'Notarized high school diploma and transcript',
      'Health certificate and HIV-negative certificate',
      'Certificate of no criminal record',
      '8 recent passport photos',
      'Personal statement (English or Russian)'
    ]
  }
];

// ── 吉尔吉斯语 ──
const ADMISSION_PROGRAMS_KY: IAdmissionProgram[] = [
  {
    id: '1',
    name: 'Жалпы медицина',
    degree: 'Бакалавр',
    duration: '6 жыл',
    department: 'Жалпы медицина кафедрасы',
    departmentId: '1',
    description: 'Медицина негизги теорияларына жана клиникалык жөндөмдөрүнө ээ жогорку медицина адистерин даярдайт, оорукана жана изилдөө борборлорунда иштей алат.',
    features: [
      'WFME аккредитациясы бар',
      '5 тиешелүү ооруканада практика',
      'Англис тилинде окутуу бар',
      'Эл аралык таанымал медицина диплом'
    ],
    tuition: '$4,500/жыл',
    language: 'Кыргыз / Орус / Англис'
  },
  {
    id: '2',
    name: 'Сестрачылык',
    degree: 'Бакалавр',
    duration: '4 жыл',
    department: 'Сестрачылык кафедрасы',
    departmentId: '2',
    description: 'Клиникалык бакылап турүү, ден-соолук коргоо жана сестрачылык башкаруу үчүн гуманитардык, медициналык билимдерге ээ жогорку сестрачылык адистерин даярдайт.',
    features: [
      'Эл аралык сестрачылык стандарты',
      'Симуляция палата үйрөтүү борбору',
      'Чет өлкөлөрдө стажировка',
      'Эл аралык сестра квалификациясы'
    ],
    tuition: '$3,200/жыл',
    language: 'Кыргыз / Орус / Англис'
  },
  {
    id: '3',
    name: 'Дарыгерлик',
    degree: 'Бакалавр',
    duration: '5 жыл',
    department: 'Дарыгерлик кафедрасы',
    departmentId: '3',
    description: 'Дарыгерлик теорияларына жана эксперимент жөндөмдөрүнө ээ жогорку дарыгерлик адистерин даярдайт, дарыларды өндүрүү, текшерүү, бөлүштүрүү жана изилдөө ишин жүргүзө алат.',
    features: [
      'GMP стандартына ылайыктуу лабораториялар',
      'Табигый дарыларды изилдөө борбору',
      'Клиникалык дарыгерлик практика базасы',
      'Эл аралык дарыгерлик биргелешкен даярдоо'
    ],
    tuition: '$3,800/жыл',
    language: 'Кыргыз / Орус / Англис'
  },
  {
    id: '4',
    name: 'Стоматология',
    degree: 'Бакалавр',
    duration: '5 жыл',
    department: 'Стоматология кафедрасы',
    departmentId: '4',
    description: 'Аңдөй ооруларын диагноздоо, дарылоо жана алдын алуу үчүн медициналык негизге жана клиникалык жөндөмгө ээ жогорку стоматология адистерин даярдайт.',
    features: [
      'Цифралык стоматология дарылоо борбору',
      'Стоматология имплантат үйрөтүү базасы',
      'Эл аралык ортодонтия сертификаты',
      'Стоматология симуляция окутуу системасы'
    ],
    tuition: '$4,200/жыл',
    language: 'Кыргыз / Орус / Англис'
  },
  {
    id: '5',
    name: 'Профилактикалык медицина',
    degree: 'Бакалавр',
    duration: '5 жыл',
    department: 'Жалпы ден-соолук кафедрасы',
    departmentId: '5',
    description: 'Жалпы ден-соолук теорияларына жана текшерүү жөндөмдөрүнө ээ жогорку профилактикалык медицина адистерин даярдайт.',
    features: [
      'КБО өнөктөшүү борбору',
      'Эпидемиология изилдөө борбору',
      'Жалпы ден-соолук саясаты институту',
      'Эл аралык жалпы ден-соолук стажировка'
    ],
    tuition: '$3,500/жыл',
    language: 'Кыргыз / Орус / Англис'
  },
  {
    id: '6',
    name: 'Медицина текшерүү техникасы',
    degree: 'Бакалавр',
    duration: '4 жыл',
    department: 'Медицина техникасы кафедрасы',
    departmentId: '6',
    description: 'Оорукана, кан борбору жана ден-соолук коргоо борборлору үчүн медицина текшерүү жөндөмүнө ээ жогорку техникалык адистерди даярдайт.',
    features: [
      'Медицина текшерүү үйрөтүү борбору',
      'Молекулярдык диагноз лабораториясы',
      'Автоматташтырылган биохимиялык анализатор',
      'Клиникалык текшерүү практика базасы'
    ],
    tuition: '$3,000/жыл',
    language: 'Кыргыз / Орус / Англис'
  }
];

const ADMISSION_INFO_KY: IAdmissionInfo = {
  title: 'Кабыл алуу маалыматы',
  description: 'Централдык Эл аралык Медицина Колледжи дүйнөнүн ар жагынан келген мыкты студенттерди кабыл алат. Биз эл аралык көз карашка жана кесиптик сапатка ээ медицина кадрларын даярдоо үчүн ар түрдүү медицина билим берүү программаларын сунуштайбыз.',
  applicationDeadline: '2024-жылдын 31-июлу',
  semesterStart: '2024-жылдын 1-сентябры',
  intake: '~350 студент/жыл',
  steps: [
    { title: 'Онлайн өткөн жазылуу', description: 'Онлайн формуларды толтуруңуз, керек документтерди жүктөңүз' },
    { title: 'Документтерди текшерүү', description: 'Кабыл алуу идарасы документтерди текшерет, интервью убагын билдирет' },
    { title: 'Кириш экзамени/интервью', description: 'Кириш экзаменине катшыңыз же онлайн интервьюдан өтүңүз' },
    { title: 'Кабыл алуу хаты', description: 'Макулдангандан кийин кабыл алуу хаты жана шақыруу хатын алыңыз' },
    { title: 'Визаны иштетүү', description: 'Кабыл алуу хаты менен студент визасын иштетиңиз' },
    { title: 'Катталуу', description: 'Кампуска келип, катталуу процедураларын аткарыңыз' }
  ]
};

const ADMISSION_REQUIREMENTS_KY: IAdmissionRequirement[] = [
  {
    id: '1',
    category: 'Билим талаптары',
    requirements: [
      'Орто мектеп дипломи же тең деңгээл',
      'Орто мектеп transcriptи (нотариалдуу ырасталган)',
      'Бүтүргөнүлүк сертификаты (нотариалдуу ырасталган)',
      'Медицинага байланыштуу билимдин артыкчылыгы'
    ]
  },
  {
    id: '2',
    category: 'Тил талаптары',
    requirements: [
      'Орус тилинде окутуу: орус тили билгинин далилдеги же кириш орус тилиндеги тест өтүү',
      'Англис тилинде окутуу: IELTS 5.5 же TOEFL 70+, же кириш англис тилиндеги тест өтүү',
      'Кыргыз тилинде окутуу: кыргыз тили билгинин далилдеги же кириш тест өтүү'
    ]
  },
  {
    id: '3',
    category: 'Кабыл алуу документтери',
    requirements: [
      'Толтурулган кабыл алуу формуляры',
      'Паспорт көчүрмөсү',
      'Нотариалдуу ырасталган орто мектеп дипломи жана transcript',
      'Ден-соолук сертификаты жана ВИЧ-тишүүсүздүк сертификаты',
      'Кылмыш жасоочу эмесдиги туралы маалымат',
      '8 даана жакында түшүрүлгүн паспорт сүрөтү',
      'Жеке баяндама (англис же орус тилинде)'
    ]
  }
];

// ── 俄语 ──
const ADMISSION_PROGRAMS_RU: IAdmissionProgram[] = [
  {
    id: '1',
    name: 'Лечебное дело',
    degree: 'Бакалавриат',
    duration: '6 лет',
    department: 'Кафедра лечебного дела',
    departmentId: '1',
    description: 'Готовит высококвалифицированных медицинских специалистов с базовыми теориями медицины и клиническими навыками для работы в медицинских учреждениях и исследовательских центрах.',
    features: [
      'Программа с аккредитацией WFME',
      'Клиническая практика в 5 больницах-партнёрах',
      'Программа на английском языке',
      'Международно признанный диплом'
    ],
    tuition: '$4,500/год',
    language: 'Киргизский / Русский / Английский'
  },
  {
    id: '2',
    name: 'Сестринское дело',
    degree: 'Бакалавриат',
    duration: '4 года',
    department: 'Кафедра сестринского дела',
    departmentId: '2',
    description: 'Готовит высококвалифицированных сестринских специалистов с гуманитарными и медицинскими знаниями для клинической помощи, профилактики и управления сестринским делом.',
    features: [
      'Международные стандарты сестринского образования',
      'Учебный центр симуляционной палаты',
      'Зарубежные стажировки',
      'Подготовка к международной квалификации'
    ],
    tuition: '$3,200/год',
    language: 'Киргизский / Русский / Английский'
  },
  {
    id: '3',
    name: 'Фармация',
    degree: 'Бакалавриат',
    duration: '5 лет',
    department: 'Кафедра фармации',
    departmentId: '3',
    description: 'Готовит высококвалифицированных фармацевтических специалистов с теориями и практическими навыками для производства, контроля, реализации и исследований лекарственных средств.',
    features: [
      'Лаборатории по стандарту GMP',
      'Центр исследования натуральных лекарств',
      'База клинической фармации',
      'Совместная международная подготовка'
    ],
    tuition: '$3,800/год',
    language: 'Киргизский / Русский / Английский'
  },
  {
    id: '4',
    name: 'Стоматология',
    degree: 'Бакалавриат',
    duration: '5 лет',
    department: 'Кафедра стоматологии',
    departmentId: '4',
    description: 'Готовит высококвалифицированных стоматологических специалистов с медицинской базой и клиническими навыками для диагностики, лечения и профилактики заболеваний полости рта.',
    features: [
      'Цифровой стоматологический центр',
      'База подготовки по дентальной имплантологии',
      'Международная сертификация по ортодонтии',
      'Система симуляционного обучения'
    ],
    tuition: '$4,200/год',
    language: 'Киргизский / Русский / Английский'
  },
  {
    id: '5',
    name: 'Профилактическая медицина',
    degree: 'Бакалавриат',
    duration: '5 лет',
    department: 'Кафедра общественного здоровья',
    departmentId: '5',
    description: 'Готовит высококвалифицированных специалистов по профилактической медицине с теориями общественного здоровья и навыками гигиенической диагностики.',
    features: [
      'Сотрудничающий центр ВОЗ',
      'Центр эпидемиологических исследований',
      'Институт политики общественного здоровья',
      'Международная стажировка по общественному здоровью'
    ],
    tuition: '$3,500/год',
    language: 'Киргизский / Русский / Английский'
  },
  {
    id: '6',
    name: 'Медицинская лабораторная техника',
    degree: 'Бакалавриат',
    duration: '4 года',
    department: 'Кафедра медицинской техники',
    departmentId: '6',
    description: 'Готовит высококвалифицированных технических специалистов с навыками медицинской лабораторной диагностики для больниц, станций переливания крови и санитарно-эпидемиологических станций.',
    features: [
      'Учебный центр медицинской лаборатории',
      'Лаборатория молекулярной диагностики',
      'Автоматические биохимические анализаторы',
      'База клинической лабораторной практики'
    ],
    tuition: '$3,000/год',
    language: 'Киргизский / Русский / Английский'
  }
];

const ADMISSION_INFO_RU: IAdmissionInfo = {
  title: 'Приёмная кампания',
  description: 'Центральный Международный Медицинский Колледж приглашает талантливых студентов со всего мира. Мы предлагаем разнообразные программы медицинского образования для подготовки специалистов с международным кругозором.',
  applicationDeadline: '31 июля 2024 г.',
  semesterStart: '1 сентября 2024 г.',
  intake: '~350 студентов/год',
  steps: [
    { title: 'Онлайн-заявка', description: 'Заполните онлайн-форму и загрузите необходимые документы' },
    { title: 'Проверка документов', description: 'Приёмная комиссия проверяет документы и сообщает расписание собеседования' },
    { title: 'Вступительные испытания', description: 'Пройдите вступительный экзамен или онлайн-собеседование' },
    { title: 'Зачисление', description: 'Получите письмо о зачислении и приглашение после одобрения' },
    { title: 'Оформление визы', description: 'Оформите студенческую визу по письму о зачислении' },
    { title: 'Зачисление в колледж', description: 'Прибытие в кампус и оформление процедур зачисления' }
  ]
};

const ADMISSION_REQUIREMENTS_RU: IAdmissionRequirement[] = [
  {
    id: '1',
    category: 'Требования к образованию',
    requirements: [
      'Аттестат о среднем образовании или эквивалент',
      'Табель успеваемости (нотариально заверенный)',
      'Свидетельство об окончании (нотариально заверенное)',
      'Медицинский профиль — преимущество'
    ]
  },
  {
    id: '2',
    category: 'Требования к языку',
    requirements: [
      'Русскоязычная программа: сертификат или вступительный тест по русскому языку',
      'Англоязычная программа: IELTS 5.5 или TOEFL 70+, либо вступительный тест по английскому',
      'Киргизскоязычная программа: сертификат или вступительный тест по киргизскому языку'
    ]
  },
  {
    id: '3',
    category: 'Документы для поступления',
    requirements: [
      'Заполненная анкета',
      'Копия паспорта',
      'Нотариально заверенные аттестат и табель',
      'Медицинская справка и справка об отсутствии ВИЧ',
      'Справка о несудимости',
      '8 фотографий паспортного размера',
      'Личное заявление (на русском или английском)'
    ]
  }
];

// ── Exports ──
export const MOCK_ADMISSION_PROGRAMS: Record<Language, IAdmissionProgram[]> = {
  zh: ADMISSION_PROGRAMS_ZH,
  en: ADMISSION_PROGRAMS_EN,
  ky: ADMISSION_PROGRAMS_KY,
  ru: ADMISSION_PROGRAMS_RU,
};

export const MOCK_ADMISSION_INFO: Record<Language, IAdmissionInfo> = {
  zh: ADMISSION_INFO_ZH,
  en: ADMISSION_INFO_EN,
  ky: ADMISSION_INFO_KY,
  ru: ADMISSION_INFO_RU,
};

export const MOCK_ADMISSION_REQUIREMENTS: Record<Language, IAdmissionRequirement[]> = {
  zh: ADMISSION_REQUIREMENTS_ZH,
  en: ADMISSION_REQUIREMENTS_EN,
  ky: ADMISSION_REQUIREMENTS_KY,
  ru: ADMISSION_REQUIREMENTS_RU,
};

export function useAdmissionPrograms(): IAdmissionProgram[] {
  return useLocalizedData(MOCK_ADMISSION_PROGRAMS);
}

export function useAdmissionInfo(): IAdmissionInfo {
  return useLocalizedData(MOCK_ADMISSION_INFO);
}

export function useAdmissionRequirements(): IAdmissionRequirement[] {
  return useLocalizedData(MOCK_ADMISSION_REQUIREMENTS);
}

// Additional exports for page compatibility
export function usePrograms(): IAdmissionProgram[] {
  return useAdmissionPrograms();
}

export function useAdmissionsGuide() {
  return useAdmissionInfo();
}

export interface IPartner {
  id: string;
  name: string;
  type: string;
  logo: string;
  description: string;
}

const PARTNERS_ZH: IPartner[] = [
  { id: '1', name: '比什凯克国立医院', type: '教学医院', logo: '🏥', description: '吉尔吉斯斯坦最大的综合性医院' },
  { id: '2', name: '国家医学科学中心', type: '科研合作', logo: '🔬', description: '国家级医学研究机构' },
  { id: '3', name: '世界卫生组织', type: '国际合作', logo: '🌍', description: '公共卫生项目合作' },
  { id: '4', name: '土耳其医疗协会', type: '国际合作', logo: '🇹🇷', description: '学术交流合作' },
  { id: '5', name: '俄罗斯人民友谊大学', type: '校际合作', logo: '🇷🇺', description: '联合培养项目' },
  { id: '6', name: '新疆医科大学', type: '校际合作', logo: '🇨🇳', description: '学生交换项目' },
];

const PARTNERS_EN: IPartner[] = [
  { id: '1', name: 'Bishkek National Hospital', type: 'Teaching Hospital', logo: '🏥', description: 'Largest general hospital in Kyrgyzstan' },
  { id: '2', name: 'National Medical Science Center', type: 'Research Partner', logo: '🔬', description: 'National medical research institution' },
  { id: '3', name: 'World Health Organization', type: 'International Partner', logo: '🌍', description: 'Public health collaboration' },
  { id: '4', name: 'Turkish Medical Association', type: 'International Partner', logo: '🇹🇷', description: 'Academic exchange partnership' },
  { id: '5', name: 'Peoples Friendship University', type: 'University Partner', logo: '🇷🇺', description: 'Joint training programs' },
  { id: '6', name: 'Xinjiang Medical University', type: 'University Partner', logo: '🇨🇳', description: 'Student exchange programs' },
];

const PARTNERS_KY: IPartner[] = [
  { id: '1', name: 'Бишкек улуттук оорукана', type: 'Окутуучу оорукана', logo: '🏥', description: 'Кыргызстандын эң чоң оорукана' },
  { id: '2', name: 'Улуттук медицина илим борбору', type: 'Илим өнөктөшү', logo: '🔬', description: 'Улуттук медицина илим институту' },
  { id: '3', name: 'Дүйнө ден-соолук уюму', type: 'Эл аралык өнөктөш', logo: '🌍', description: 'Жалпы ден-соолук кызматташуу' },
  { id: '4', name: 'Түркия медицина ассоциациясы', type: 'Эл аралык өнөктөш', logo: '🇹🇷', description: 'Академиялык алмашуу' },
  { id: '5', name: 'Орусия достук университети', type: 'Университет өнөктөшү', logo: '🇷🇺', description: 'Бирге окутуу долбоорлору' },
  { id: '6', name: 'Шинжаң медицина университети', type: 'Университет өнөктөшү', logo: '🇨🇳', description: 'Студент алмашуу долбоорлору' },
];

const PARTNERS_RU: IPartner[] = [
  { id: '1', name: 'Бишкекская больница', type: 'Клиническая база', logo: '🏥', description: 'Крупнейшая больница Кыргызстана' },
  { id: '2', name: 'Национальный медцентр', type: 'Научный партнёр', logo: '🔬', description: 'Государственный НИИ' },
  { id: '3', name: 'ВОЗ', type: 'Международный партнёр', logo: '🌍', description: 'Сотрудничество в области здравоохранения' },
  { id: '4', name: 'Турецкая медассоциация', type: 'Международный партнёр', logo: '🇹🇷', description: 'Академический обмен' },
  { id: '5', name: 'Университет РУДН', type: 'Университет-партнёр', logo: '🇷🇺', description: 'Совместные программы' },
  { id: '6', name: 'Синьцзянский медуниверситет', type: 'Университет-партнёр', logo: '🇨🇳', description: 'Студенческий обмен' },
];

export const MOCK_PARTNERS: Record<Language, IPartner[]> = {
  zh: PARTNERS_ZH,
  en: PARTNERS_EN,
  ky: PARTNERS_KY,
  ru: PARTNERS_RU,
};

export function usePartners(): IPartner[] {
  return useLocalizedData(MOCK_PARTNERS);
}

export interface ICareerGuide {
  id: string;
  title: string;
  description: string;
  icon: string;
  salary: string;
  demand: string;
}

const CAREER_ZH: ICareerGuide[] = [
  { id: '1', title: '临床医生', description: '在医院从事临床诊疗工作', icon: '👨‍⚕️', salary: '中等偏上', demand: '高需求' },
  { id: '2', title: '护士', description: '提供医疗护理服务', icon: '👩‍⚕️', salary: '中等', demand: '高需求' },
  { id: '3', title: '药剂师', description: '从事药学相关工作', icon: '💊', salary: '中等', demand: '稳定' },
  { id: '4', title: '牙医', description: '口腔疾病诊治', icon: '🦷', salary: '较高', demand: '增长中' },
  { id: '5', title: '公共卫生专家', description: '疾病防控工作', icon: '🏥', salary: '中等', demand: '增长中' },
  { id: '6', title: '医学研究员', description: '医学科研工作', icon: '🔬', salary: '中等偏上', demand: '稳定' },
];

const CAREER_EN: ICareerGuide[] = [
  { id: '1', title: 'Clinical Doctor', description: 'Clinical diagnosis and treatment', icon: '👨‍⚕️', salary: 'Medium-high', demand: 'High demand' },
  { id: '2', title: 'Nurse', description: 'Medical nursing services', icon: '👩‍⚕️', salary: 'Medium', demand: 'High demand' },
  { id: '3', title: 'Pharmacist', description: 'Pharmacy related work', icon: '💊', salary: 'Medium', demand: 'Stable' },
  { id: '4', title: 'Dentist', description: 'Dental care', icon: '🦷', salary: 'High', demand: 'Growing' },
  { id: '5', title: 'Public Health Specialist', description: 'Disease prevention', icon: '🏥', salary: 'Medium', demand: 'Growing' },
  { id: '6', title: 'Medical Researcher', description: 'Medical research', icon: '🔬', salary: 'Medium-high', demand: 'Stable' },
];

const CAREER_KY: ICareerGuide[] = [
  { id: '1', title: 'Клиникалык дарыгер', description: 'Клиникалык диагноз жана дарылоо', icon: '👨‍⚕️', salary: 'Орточо-юкары', demand: 'Жогорку талап' },
  { id: '2', title: 'Сестра', description: 'Медициналык кызмат', icon: '👩‍⚕️', salary: 'Орточо', demand: 'Жогорку талап' },
  { id: '3', title: 'Фармацевт', description: 'Дарыкана иши', icon: '💊', salary: 'Орточо', demand: 'Талдуу' },
  { id: '4', title: 'Стоматолог', description: 'Стоматологиялык дарылоо', icon: '🦷', salary: 'Жогору', demand: 'Өсүүдө' },
  { id: '5', title: 'Жалпы ден-соолук специалист', description: 'Ооруларды алдын алуу', icon: '🏥', salary: 'Орточо', demand: 'Өсүүдө' },
  { id: '6', title: 'Медицина илимкер', description: 'Медицина илимий изилдөө', icon: '🔬', salary: 'Орточо-юкары', demand: 'Талдуу' },
];

const CAREER_RU: ICareerGuide[] = [
  { id: '1', title: 'Врач-клиницист', description: 'Диагностика и лечение', icon: '👨‍⚕️', salary: 'Средне-высокая', demand: 'Высокий спрос' },
  { id: '2', title: 'Медсестра', description: 'Медицинский уход', icon: '👩‍⚕️', salary: 'Средняя', demand: 'Высокий спрос' },
  { id: '3', title: 'Фармацевт', description: 'Фармацевтическая работа', icon: '💊', salary: 'Средняя', demand: 'Стабильный' },
  { id: '4', title: 'Стоматолог', description: 'Лечение зубов', icon: '🦷', salary: 'Высокая', demand: 'Растущий' },
  { id: '5', title: 'Врач по общественному здоровью', description: 'Профилактика заболеваний', icon: '🏥', salary: 'Средняя', demand: 'Растущий' },
  { id: '6', title: 'Медицинский исследователь', description: 'Научные исследования', icon: '🔬', salary: 'Средне-высокая', demand: 'Стабильный' },
];

export const MOCK_CAREER_GUIDE: Record<Language, ICareerGuide[]> = {
  zh: CAREER_ZH,
  en: CAREER_EN,
  ky: CAREER_KY,
  ru: CAREER_RU,
};

export function useCareerGuide(): ICareerGuide[] {
  return useLocalizedData(MOCK_CAREER_GUIDE);
}
