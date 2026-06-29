// EXPORTS: IHeroSlide, IMotto, INotice, IGalleryImage, IStatistic, MOCK_HERO_SLIDES, MOCK_MOTTO, MOCK_NOTICES, MOCK_GALLERY, MOCK_STATISTICS, MOCK_HOME, useHeroSlides, useMotto, useNotices, useGallery, useStatistics
import type { Language } from '@/i18n/translations';
import { getLocalizedData, useLocalizedData } from './index';

export interface IHeroSlide {
  id: string;
  imageUrl: string;
  title: string;
  subtitle: string;
}

export interface IMotto {
  text: string;
  description: string;
}

export interface INotice {
  id: string;
  title: string;
  date: string;
  link: string;
}

export interface IGalleryImage {
  id: string;
  imageUrl: string;
  caption: string;
}

export interface IStatistic {
  id: string;
  label: string;
  value: number;
  suffix: string;
}

// ── 中文 ──
const HERO_SLIDES_ZH: IHeroSlide[] = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80',
    title: '中央国际医学院',
    subtitle: '培养具有国际视野的高素质医学人才'
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=80',
    title: '现代化医学实验室',
    subtitle: '探索医学科学的前沿领域'
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=1200&q=80',
    title: '临床实践教学',
    subtitle: '在实践中提升医学专业能力'
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1200&q=80',
    title: '医学知识殿堂',
    subtitle: '沉浸于浓厚的医学学术氛围'
  }
];

const MOTTO_ZH: IMotto = {
  text: '博学济世 医者仁心',
  description: '以医学教育为核心，培养具有国际视野、人文关怀和专业素养的高素质医学人才，服务全球医疗卫生事业发展。'
};

const NOTICES_ZH: INotice[] = [
  {
    id: '1',
    title: '关于2025年秋季学期入学注册通知',
    date: '2025-08-15',
    link: '/news/1'
  },
  {
    id: '2',
    title: 'CMSC 2025年国际学生招生简章发布',
    date: '2025-06-10',
    link: '/news/2'
  },
  {
    id: '3',
    title: '第七届国际医学教育研讨会即将召开',
    date: '2025-09-20',
    link: '/news/3'
  },
  {
    id: '4',
    title: '关于附属医院临床实习安排的公告',
    date: '2025-07-28',
    link: '/news/4'
  }
];

const GALLERY_ZH: IGalleryImage[] = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    caption: '主教学楼'
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    caption: '医学图书馆'
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80',
    caption: '临床技能中心'
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
    caption: '科研实验室'
  },
  {
    id: '5',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    caption: '校园全景'
  },
  {
    id: '6',
    imageUrl: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80',
    caption: '学术报告厅'
  },
  {
    id: '7',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    caption: '校园林荫道'
  },
  {
    id: '8',
    imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80',
    caption: '学生公寓'
  }
];

const STATISTICS_ZH: IStatistic[] = [
  {
    id: '1',
    label: '建校年份',
    value: 2003,
    suffix: '年'
  },
  {
    id: '2',
    label: '院系数量',
    value: 6,
    suffix: '个'
  },
  {
    id: '3',
    label: '在校学生',
    value: 1247,
    suffix: '人'
  },
  {
    id: '4',
    label: '合作医疗机构',
    value: 28,
    suffix: '家'
  }
];

// ── 英文 ──
const HERO_SLIDES_EN: IHeroSlide[] = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80',
    title: 'Central International Medical College',
    subtitle: 'Cultivating high-quality medical professionals with global vision'
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=80',
    title: 'Modern Medical Laboratories',
    subtitle: 'Exploring the frontiers of medical science'
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=1200&q=80',
    title: 'Clinical Practice Training',
    subtitle: 'Enhancing medical expertise through hands-on practice'
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1200&q=80',
    title: 'Temple of Medical Knowledge',
    subtitle: 'Immersed in a rich academic medical atmosphere'
  }
];

const MOTTO_EN: IMotto = {
  text: 'Learning to Heal, Compassion to Serve',
  description: 'With medical education at our core, we cultivate high-quality medical professionals with international vision, humanistic care, and professional competence, serving the development of global healthcare.'
};

const NOTICES_EN: INotice[] = [
  {
    id: '1',
    title: 'Fall Semester 2025 Enrollment Registration Notice',
    date: '2025-08-15',
    link: '/news/1'
  },
  {
    id: '2',
    title: 'CMSC 2025 International Student Admission Brochure Released',
    date: '2025-06-10',
    link: '/news/2'
  },
  {
    id: '3',
    title: '7th International Medical Education Symposium Coming Soon',
    date: '2025-09-20',
    link: '/news/3'
  },
  {
    id: '4',
    title: 'Announcement on Clinical Internship Arrangements',
    date: '2025-07-28',
    link: '/news/4'
  }
];

const GALLERY_EN: IGalleryImage[] = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    caption: 'Main Academic Building'
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    caption: 'Medical Library'
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80',
    caption: 'Clinical Skills Center'
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
    caption: 'Research Laboratory'
  },
  {
    id: '5',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    caption: 'Campus Panorama'
  },
  {
    id: '6',
    imageUrl: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80',
    caption: 'Academic Auditorium'
  },
  {
    id: '7',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    caption: 'Campus Boulevard'
  },
  {
    id: '8',
    imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80',
    caption: 'Student Dormitory'
  }
];

const STATISTICS_EN: IStatistic[] = [
  {
    id: '1',
    label: 'Founded',
    value: 2003,
    suffix: ''
  },
  {
    id: '2',
    label: 'Departments',
    value: 6,
    suffix: ''
  },
  {
    id: '3',
    label: 'Students',
    value: 1247,
    suffix: ''
  },
  {
    id: '4',
    label: 'Partner Hospitals',
    value: 28,
    suffix: ''
  }
];

// ── 吉尔吉斯语 ──
const HERO_SLIDES_KY: IHeroSlide[] = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80',
    title: 'Централдык Эл аралык Медицина Колледжи',
    subtitle: 'Эл аралык көз карашка ээ жогорку сапаттагы медицина адистерин даярдоо'
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=80',
    title: 'Заманбап Медицина Лабораториялары',
    subtitle: 'Медицина илиминин алдыңкы багыттарын изилдөө'
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=1200&q=80',
    title: 'Клиникалык Практика Окутуу',
    subtitle: 'Практика аркылуу медицина боюнча кесиптик жөндөмдүн жогортуусу'
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1200&q=80',
    title: 'Медицина Билим Сарайы',
    subtitle: 'Күчтүү медицина академиялык атмосферага батып'
  }
];

const MOTTO_KY: IMotto = {
  text: 'Билим менен дарылоо, жүрөк менен кызмат кылуу',
  description: 'Медицина билим берүүсүн негизги багыт катары кабыл алып, эл аралык көз карашка, адамгерчилик көз карашка жана кесиптик сапатка ээ жогорку сапаттагы медицина адистерин даярдайбыз, дүйнөлүк дене сактоо ишинин өнүгүүсүнө кызмат кылабыз.'
};

const NOTICES_KY: INotice[] = [
  {
    id: '1',
    title: '2025-жылдын күзү семестринин катталуу билдирүүсү',
    date: '2025-08-15',
    link: '/news/1'
  },
  {
    id: '2',
    title: 'CMSC 2025-жылдык эл аралык студенттер кабыл алуу брошюрасы жарыяланды',
    date: '2025-06-10',
    link: '/news/2'
  },
  {
    id: '3',
    title: '7-чи эл аралык медицина билим берүү симпозиуму жакын арада өтөт',
    date: '2025-09-20',
    link: '/news/3'
  },
  {
    id: '4',
    title: 'Клиникалык стажировка тартиби жөнүндө жарыялоо',
    date: '2025-07-28',
    link: '/news/4'
  }
];

const GALLERY_KY: IGalleryImage[] = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    caption: 'Негизги окуу бинасы'
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    caption: 'Медицина китепканасы'
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80',
    caption: 'Клиникалык көз караш борбору'
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
    caption: 'Илим-изилдөө лабораториясы'
  },
  {
    id: '5',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    caption: 'Кампус панорамасы'
  },
  {
    id: '6',
    imageUrl: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80',
    caption: 'Академиялык акт залы'
  },
  {
    id: '7',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    caption: 'Кампустук бульвар'
  },
  {
    id: '8',
    imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80',
    caption: 'Студенттик жатакана'
  }
];

const STATISTICS_KY: IStatistic[] = [
  {
    id: '1',
    label: 'Негизделген жыл',
    value: 2003,
    suffix: '-ж.'
  },
  {
    id: '2',
    label: 'Факультеттер',
    value: 6,
    suffix: 'дан'
  },
  {
    id: '3',
    label: 'Студенттер',
    value: 1247,
    suffix: 'ден'
  },
  {
    id: '4',
    label: 'Кызматташкан оорукана',
    value: 28,
    suffix: 'ден'
  }
];

// ── 俄语 ──
const HERO_SLIDES_RU: IHeroSlide[] = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80',
    title: 'Центральный Международный Медицинский Колледж',
    subtitle: 'Подготовка высококвалифицированных медицинских специалистов с международным кругозором'
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=80',
    title: 'Современные медицинские лаборатории',
    subtitle: 'Исследование передовых направлений медицинской науки'
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=1200&q=80',
    title: 'Клиническая практика',
    subtitle: 'Совершенствование профессиональных навыков на практике'
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1200&q=80',
    title: 'Храм медицинских знаний',
    subtitle: 'Погружение в богатую академическую медицинскую атмосферу'
  }
];

const MOTTO_RU: IMotto = {
  text: 'Учиться исцелять, служить с состраданием',
  description: 'В центре нашего внимания — медицинское образование. Мы готовим высококвалифицированных медицинских специалистов с международным кругозором, гуманистическими ценностями и профессиональной компетентностью, служащих развитию здравоохранения во всём мире.'
};

const NOTICES_RU: INotice[] = [
  {
    id: '1',
    title: 'Уведомление о регистрации на осенний семестр 2025',
    date: '2025-08-15',
    link: '/news/1'
  },
  {
    id: '2',
    title: 'Опубликован брошюра приёма иностранных студентов CMSC 2025',
    date: '2025-06-10',
    link: '/news/2'
  },
  {
    id: '3',
    title: 'Скоро состоится 7-й международный симпозиум по медицинскому образованию',
    date: '2025-09-20',
    link: '/news/3'
  },
  {
    id: '4',
    title: 'Объявление о порядке клинической стажировки',
    date: '2025-07-28',
    link: '/news/4'
  }
];

const GALLERY_RU: IGalleryImage[] = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    caption: 'Главный учебный корпус'
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    caption: 'Медицинская библиотека'
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80',
    caption: 'Центр клинических навыков'
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
    caption: 'Научно-исследовательская лаборатория'
  },
  {
    id: '5',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    caption: 'Панорама кампуса'
  },
  {
    id: '6',
    imageUrl: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80',
    caption: 'Академическая аудитория'
  },
  {
    id: '7',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    caption: 'Кампусный бульвар'
  },
  {
    id: '8',
    imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80',
    caption: 'Студенческое общежитие'
  }
];

const STATISTICS_RU: IStatistic[] = [
  {
    id: '1',
    label: 'Год основания',
    value: 2003,
    suffix: ' г.'
  },
  {
    id: '2',
    label: 'Факультетов',
    value: 6,
    suffix: ''
  },
  {
    id: '3',
    label: 'Студентов',
    value: 1247,
    suffix: ''
  },
  {
    id: '4',
    label: 'Больниц-партнёров',
    value: 28,
    suffix: ''
  }
];

// ── Exports ──
export const MOCK_HERO_SLIDES: Record<Language, IHeroSlide[]> = {
  zh: HERO_SLIDES_ZH,
  en: HERO_SLIDES_EN,
  ky: HERO_SLIDES_KY,
  ru: HERO_SLIDES_RU,
};

export const MOCK_MOTTO: Record<Language, IMotto> = {
  zh: MOTTO_ZH,
  en: MOTTO_EN,
  ky: MOTTO_KY,
  ru: MOTTO_RU,
};

export const MOCK_NOTICES: Record<Language, INotice[]> = {
  zh: NOTICES_ZH,
  en: NOTICES_EN,
  ky: NOTICES_KY,
  ru: NOTICES_RU,
};

export const MOCK_GALLERY: Record<Language, IGalleryImage[]> = {
  zh: GALLERY_ZH,
  en: GALLERY_EN,
  ky: GALLERY_KY,
  ru: GALLERY_RU,
};

export const MOCK_STATISTICS: Record<Language, IStatistic[]> = {
  zh: STATISTICS_ZH,
  en: STATISTICS_EN,
  ky: STATISTICS_KY,
  ru: STATISTICS_RU,
};

export const MOCK_HOME = {
  heroSlides: MOCK_HERO_SLIDES,
  motto: MOCK_MOTTO,
  notices: MOCK_NOTICES,
  gallery: MOCK_GALLERY,
  statistics: MOCK_STATISTICS
};

export function useHeroSlides(): IHeroSlide[] {
  return useLocalizedData(MOCK_HERO_SLIDES);
}

export function useMotto(): IMotto {
  return useLocalizedData(MOCK_MOTTO);
}

export function useNotices(): INotice[] {
  return useLocalizedData(MOCK_NOTICES);
}

export function useGallery(): IGalleryImage[] {
  return useLocalizedData(MOCK_GALLERY);
}

export function useStatistics(): IStatistic[] {
  return useLocalizedData(MOCK_STATISTICS);
}
