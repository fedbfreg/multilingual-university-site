// EXPORTS: ICampusActivity, ICampusFacility, ICampusService, MOCK_CAMPUS_ACTIVITIES, MOCK_CAMPUS_FACILITIES, MOCK_CAMPUS_SERVICES, useCampusActivities, useCampusFacilities, useCampusServices
import type { Language } from '@/i18n/translations';
import { getLocalizedData, useLocalizedData } from './index';

export interface ICampusActivity {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  date: string;
}

export interface ICampusFacility {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  icon: string;
}

export interface ICampusService {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
}

// ── 中文 ──
const CAMPUS_ACTIVITIES_ZH: ICampusActivity[] = [
  {
    id: '1',
    title: '医学生宣誓仪式',
    description: '每年新生入学时举行庄严的医学生宣誓仪式，传承医学精神，树立职业信念。',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    category: '传统活动',
    date: '每年9月'
  },
  {
    id: '2',
    title: '国际文化节',
    description: '来自28个国家的学生共同展示各自国家的文化风情，促进多元文化交流与理解。',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
    category: '文化活动',
    date: '每年10月'
  },
  {
    id: '3',
    title: '春季运动会',
    description: '一年一度的春季运动会，设有田径、球类等多个项目，展现医学生的青春活力。',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    category: '体育活动',
    date: '每年4月'
  },
  {
    id: '4',
    title: '临床技能大赛',
    description: '检验医学生临床实践能力的重要赛事，各院系学生同台竞技，提升专业技能。',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
    category: '学术竞赛',
    date: '每年11月'
  },
  {
    id: '5',
    title: '志愿服务活动',
    description: '学生志愿者深入社区和乡村，开展义诊、健康宣教等志愿服务活动，服务社会。',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80',
    category: '志愿服务',
    date: '全年开展'
  },
  {
    id: '6',
    title: '迎新晚会',
    description: '欢迎新同学的文艺晚会，展示学生才艺，营造温馨和谐的校园氛围。',
    imageUrl: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80',
    category: '文艺活动',
    date: '每年9月'
  }
];

const CAMPUS_FACILITIES_ZH: ICampusFacility[] = [
  {
    id: '1',
    name: '医学图书馆',
    description: '藏书30万余册，拥有丰富的医学文献数据库，提供安静舒适的阅读环境。',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    icon: '📚'
  },
  {
    id: '2',
    name: '临床技能实训中心',
    description: '配备先进的模拟教学设备，包括模拟病房、模拟手术室、心肺复苏训练室等。',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
    icon: '🏥'
  },
  {
    id: '3',
    name: '体育运动中心',
    description: '室内体育馆、室外运动场、游泳池等设施齐全，满足师生运动健身需求。',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    icon: '⚽'
  },
  {
    id: '4',
    name: '学生公寓',
    description: '舒适的住宿环境，配备独立卫浴、空调、无线网络，24小时安保服务。',
    imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80',
    icon: '🏠'
  },
  {
    id: '5',
    name: '学生餐厅',
    description: '提供多样化的餐饮选择，包括吉尔吉斯当地美食、中餐、西餐等，满足不同口味需求。',
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
    icon: '🍽️'
  },
  {
    id: '6',
    name: '学术报告厅',
    description: '可容纳500人的现代化报告厅，配备先进的音视频设备，举办各类学术会议和讲座。',
    imageUrl: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80',
    icon: '🎤'
  }
];

const CAMPUS_SERVICES_ZH: ICampusService[] = [
  {
    id: '1',
    title: '国际学生服务中心',
    description: '为国际学生提供入学指导、签证办理、住宿安排、心理咨询等全方位服务。',
    icon: '🌍',
    link: '#'
  },
  {
    id: '2',
    title: '就业指导中心',
    description: '提供职业规划咨询、招聘会组织、实习推荐等服务，助力学生顺利就业。',
    icon: '💼',
    link: '#'
  },
  {
    id: '3',
    title: '心理咨询中心',
    description: '专业心理咨询师提供一对一心理咨询、团体辅导、心理健康教育等服务。',
    icon: '💚',
    link: '#'
  },
  {
    id: '4',
    title: '校园医疗服务',
    description: '校医院提供日常诊疗、健康体检、疫苗接种等基本医疗服务，保障师生健康。',
    icon: '🩺',
    link: '#'
  }
];

// ── 英文 ──
const CAMPUS_ACTIVITIES_EN: ICampusActivity[] = [
  {
    id: '1',
    title: 'Medical Student Oath Ceremony',
    description: 'A solemn oath ceremony held annually for new students, inheriting medical spirit and establishing professional beliefs.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    category: 'Traditional Events',
    date: 'Every September'
  },
  {
    id: '2',
    title: 'International Cultural Festival',
    description: 'Students from 28 countries showcase their cultural traditions, promoting multicultural exchange and understanding.',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
    category: 'Cultural Events',
    date: 'Every October'
  },
  {
    id: '3',
    title: 'Spring Sports Meet',
    description: 'Annual spring sports meet with track and field, ball games, and more, showcasing the vitality of medical students.',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    category: 'Sports Events',
    date: 'Every April'
  },
  {
    id: '4',
    title: 'Clinical Skills Competition',
    description: 'An important competition testing medical students\' clinical practice abilities, with students from all departments competing.',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
    category: 'Academic Competition',
    date: 'Every November'
  },
  {
    id: '5',
    title: 'Volunteer Service Activities',
    description: 'Student volunteers go to communities and villages to provide free clinics, health education, and other volunteer services.',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80',
    category: 'Volunteer Service',
    date: 'Year-round'
  },
  {
    id: '6',
    title: 'Welcome Gala',
    description: 'A cultural evening welcoming new students, showcasing student talents and creating a warm and harmonious campus atmosphere.',
    imageUrl: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80',
    category: 'Cultural Events',
    date: 'Every September'
  }
];

const CAMPUS_FACILITIES_EN: ICampusFacility[] = [
  {
    id: '1',
    name: 'Medical Library',
    description: 'Over 300,000 volumes with rich medical literature databases, providing a quiet and comfortable reading environment.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    icon: '📚'
  },
  {
    id: '2',
    name: 'Clinical Skills Training Center',
    description: 'Equipped with advanced simulation teaching equipment, including simulation wards, operating rooms, and CPR training rooms.',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
    icon: '🏥'
  },
  {
    id: '3',
    name: 'Sports Center',
    description: 'Complete facilities including indoor gym, outdoor sports field, and swimming pool to meet fitness needs of faculty and students.',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    icon: '⚽'
  },
  {
    id: '4',
    name: 'Student Dormitory',
    description: 'Comfortable accommodation with private bathroom, air conditioning, Wi-Fi, and 24-hour security service.',
    imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80',
    icon: '🏠'
  },
  {
    id: '5',
    name: 'Student Canteen',
    description: 'Diverse dining options including local Kyrgyz cuisine, Chinese food, and Western food to meet different taste preferences.',
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
    icon: '🍽️'
  },
  {
    id: '6',
    name: 'Academic Auditorium',
    description: 'Modern auditorium seating 500 people with advanced audio-visual equipment for academic conferences and lectures.',
    imageUrl: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80',
    icon: '🎤'
  }
];

const CAMPUS_SERVICES_EN: ICampusService[] = [
  {
    id: '1',
    title: 'International Student Service Center',
    description: 'Comprehensive services for international students including enrollment guidance, visa processing, housing, and counseling.',
    icon: '🌍',
    link: '#'
  },
  {
    id: '2',
    title: 'Career Service Center',
    description: 'Career planning consultation, job fairs, and internship recommendations to help students successfully start their careers.',
    icon: '💼',
    link: '#'
  },
  {
    id: '3',
    title: 'Psychological Counseling Center',
    description: 'Professional counselors provide one-on-one counseling, group therapy, and mental health education services.',
    icon: '💚',
    link: '#'
  },
  {
    id: '4',
    title: 'Campus Medical Service',
    description: 'University hospital provides daily medical care, health check-ups, and vaccinations to ensure health of faculty and students.',
    icon: '🩺',
    link: '#'
  }
];

// ── 吉尔吉斯语 ──
const CAMPUS_ACTIVITIES_KY: ICampusActivity[] = [
  {
    id: '1',
    title: 'Медицина студенттеринин согуш кесеси',
    description: 'Жаңы студенттер үчүн жыл сайын өткөрүлүүчү салтанаттуу согуш кесеси, медицина рухун улантуу жана кесиптик ишенимди бекемдөө.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    category: 'Дастурдук иш-чаралар',
    date: 'Ар бир сентябрь'
  },
  {
    id: '2',
    title: 'Эл аралык маданият фестивали',
    description: '28 өлкөнүн студенттери өз өлкөлөрүнүн маданиятын көрсөтүп, көп маданияттык алмашууну түзүүгө көмөктөшөт.',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
    category: 'Маданият иш-чаралары',
    date: 'Ар бир октябрь'
  },
  {
    id: '3',
    title: 'Жазгы спорт жарышы',
    description: 'Жыл сайын өткөрүлүүчү жазгы спорт жарышы, атлетика, топтуу спорт жана башка түрлөр камтылган.',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    category: 'Спорт иш-чаралары',
    date: 'Ар бир апрель'
  },
  {
    id: '4',
    title: 'Клиникалык дағдылар байкоосу',
    description: 'Медицина студенттеринин клиникалык практика жөндөмүн текшерүүчү маанилүү байкоо.',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
    category: 'Академиялык байкоо',
    date: 'Ар бир ноябрь'
  },
  {
    id: '5',
    title: 'Коомдук ишчилдик иш-чаралары',
    description: 'Студенттик волонтерлер айылдарга барып акысыз дарылоо, ден-соолук билим берүү иш-чараларын өткөрөт.',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80',
    category: 'Волонтердик иш',
    date: 'Жыл боюнча'
  },
  {
    id: '6',
    title: 'Кош келиңиз вечеринкасы',
    description: 'Жаңы студенттерди кабыл алуу үчүн өткөрүлүүчү сәндиктүү кичээ.',
    imageUrl: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80',
    category: 'Сәндиктүү иш-чаралар',
    date: 'Ар бир сентябрь'
  }
];

const CAMPUS_FACILITIES_KY: ICampusFacility[] = [
  {
    id: '1',
    name: 'Медицина китепканасы',
    description: '300 миңден ашык китап, бай медицина адабияттар базасы, тыныч жана ыңгайлуу окуу орду.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    icon: '📚'
  },
  {
    id: '2',
    name: 'Клиникалык дағдыларды үйрөтүү борбору',
    description: 'Алдыңкы симуляция окутуу жабдыктары менен жабдырылды, симуляция палаталары, операция бөлмөлөрү, КПР үйрөтүү бөлмөлөрү камтылган.',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
    icon: '🏥'
  },
  {
    id: '3',
    name: 'Спорт борбору',
    description: 'Ички спорт залы, сырткы спорт майданы, бассейнин толук жабдыктары.',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    icon: '⚽'
  },
  {
    id: '4',
    name: 'Студенттик жатакана',
    description: 'Ыңгайлуу жатака, жеке ванна, кондиционер, Wi-Fi, 24 сааттык коопсуздук кызматы.',
    imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80',
    icon: '🏠'
  },
  {
    id: '5',
    name: 'Студенттик асхана',
    description: 'Кыргызстандын жергиликтүү тамактары, кытай тамактары, батыс тамактары сыяктуу ар түрдүү тамак-аш тандоолору.',
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
    icon: '🍽️'
  },
  {
    id: '6',
    name: 'Академиялык акт залы',
    description: '500 киши отурган заманбап акт залы, алдыңкы аудио-видео жабдыктары менен жабдырылды.',
    imageUrl: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80',
    icon: '🎤'
  }
];

const CAMPUS_SERVICES_KY: ICampusService[] = [
  {
    id: '1',
    title: 'Эл аралык студенттер кызмат борбору',
    description: 'Эл аралык студенттерге кабыл алуу кеңешмеси, виза иштетүү, жатака орнотуу, психологиялык кеңеш ж.б. кызматтар.',
    icon: '🌍',
    link: '#'
  },
  {
    id: '2',
    title: 'Кесиптик багыттама борбору',
    description: 'Кесиптик планды иштеп чыгуу, иш алуу жарыштары, стажировка сунуштарoo.',
    icon: '💼',
    link: '#'
  },
  {
    id: '3',
    title: 'Психологиялык кеңеш борбору',
    description: 'Профессионалдык консультанттар жеке-жеке кеңеш, топтук терапия, психикалык ден-соолук билим берүү кызматтарын берет.',
    icon: '💚',
    link: '#'
  },
  {
    id: '4',
    title: 'Кампустук дене сактоо кызматы',
    description: 'Университет ооруканастан күнүнө аралык дарылоо, ден-соолук текшерүү, вакцинация кызматтары.',
    icon: '🩺',
    link: '#'
  }
];

// ── 俄语 ──
const CAMPUS_ACTIVITIES_RU: ICampusActivity[] = [
  {
    id: '1',
    title: 'Церемония клятвы студентов-медиков',
    description: 'Торжественная церемония клятвы для первокурсников, наследующая медицинский дух и формирующая профессиональные убеждения.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    category: 'Традиционные мероприятия',
    date: 'Каждый сентябрь'
  },
  {
    id: '2',
    title: 'Международный фестиваль культур',
    description: 'Студенты из 28 стран демонстрируют культурные традиции своих стран, способствуя межкультурному обмену и взаимопониманию.',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
    category: 'Культурные мероприятия',
    date: 'Каждый октябрь'
  },
  {
    id: '3',
    title: 'Весенняя спартакиада',
    description: 'Ежегодная весенняя спартакиада с лёгкой атлетикой, спортивными играми и другими видами спорта.',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    category: 'Спортивные мероприятия',
    date: 'Каждый апрель'
  },
  {
    id: '4',
    title: 'Конкурс клинических навыков',
    description: 'Важный конкурс, проверяющий клинические практические навыки студентов-медиков, с участием студентов всех факультетов.',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
    category: 'Академический конкурс',
    date: 'Каждый ноябрь'
  },
  {
    id: '5',
    title: 'Волонтёрские акции',
    description: 'Студенты-волонтёры выезжают в общины и сёла для проведения бесплатных приёмов, санитарно-просветительской работы и других волонтёрских акций.',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80',
    category: 'Волонтёрство',
    date: 'Круглый год'
  },
  {
    id: '6',
    title: 'Торжественный вечер встречи первокурсников',
    description: 'Культурный вечер в честь новых студентов, демонстрирующий таланты и создающий тёплую гармоничную атмосферу кампуса.',
    imageUrl: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80',
    category: 'Культурные мероприятия',
    date: 'Каждый сентябрь'
  }
];

const CAMPUS_FACILITIES_RU: ICampusFacility[] = [
  {
    id: '1',
    name: 'Медицинская библиотека',
    description: 'Более 300 тысяч томов с богатыми базами медицинской литературы, тихая и комфортная среда для чтения.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    icon: '📚'
  },
  {
    id: '2',
    name: 'Учебный центр клинических навыков',
    description: 'Оснащён современным симуляционным оборудованием, включая симуляционные палаты, операционные и комнаты СЛР.',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
    icon: '🏥'
  },
  {
    id: '3',
    name: 'Спортивный центр',
    description: 'Полноценные объекты: крытый спортзал, открытые площадки, бассейн — для спортивных потребностей преподавателей и студентов.',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    icon: '⚽'
  },
  {
    id: '4',
    name: 'Студенческое общежитие',
    description: 'Комфортное проживание с отдельным санузлом, кондиционером, Wi-Fi и круглосуточной охраной.',
    imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80',
    icon: '🏠'
  },
  {
    id: '5',
    name: 'Студенческая столовая',
    description: 'Разнообразное питание: местная киргизская кухня, китайская и западная кухня — на любой вкус.',
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
    icon: '🍽️'
  },
  {
    id: '6',
    name: 'Академическая аудитория',
    description: 'Современный актовый зал на 500 мест с современным аудиовизуальным оборудованием для конференций и лекций.',
    imageUrl: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80',
    icon: '🎤'
  }
];

const CAMPUS_SERVICES_RU: ICampusService[] = [
  {
    id: '1',
    title: 'Центр обслуживания иностранных студентов',
    description: 'Комплексные услуги для иностранных студентов: ориентация, оформление виз, расселение, психологическое консультирование.',
    icon: '🌍',
    link: '#'
  },
  {
    id: '2',
    title: 'Центр трудоустройства',
    description: 'Консультации по карьерному планированию, ярмарки вакансий, рекомендации по стажировкам — для успешного старта карьеры.',
    icon: '💼',
    link: '#'
  },
  {
    id: '3',
    title: 'Психологический центр',
    description: 'Профессиональные психологи проводят индивидуальные консультации, групповые тренинги и просветительскую работу.',
    icon: '💚',
    link: '#'
  },
  {
    id: '4',
    title: 'Медицинский пункт кампуса',
    description: 'Студенческая поликлиника: амбулаторный приём, медосмотры, вакцинация — для охраны здоровья всех обучающихся и сотрудников.',
    icon: '🩺',
    link: '#'
  }
];

// ── Exports ──
export const MOCK_CAMPUS_ACTIVITIES: Record<Language, ICampusActivity[]> = {
  zh: CAMPUS_ACTIVITIES_ZH,
  en: CAMPUS_ACTIVITIES_EN,
  ky: CAMPUS_ACTIVITIES_KY,
  ru: CAMPUS_ACTIVITIES_RU,
};

export const MOCK_CAMPUS_FACILITIES: Record<Language, ICampusFacility[]> = {
  zh: CAMPUS_FACILITIES_ZH,
  en: CAMPUS_FACILITIES_EN,
  ky: CAMPUS_FACILITIES_KY,
  ru: CAMPUS_FACILITIES_RU,
};

export const MOCK_CAMPUS_SERVICES: Record<Language, ICampusService[]> = {
  zh: CAMPUS_SERVICES_ZH,
  en: CAMPUS_SERVICES_EN,
  ky: CAMPUS_SERVICES_KY,
  ru: CAMPUS_SERVICES_RU,
};

export function useCampusActivities(): ICampusActivity[] {
  return useLocalizedData(MOCK_CAMPUS_ACTIVITIES);
}

export function useCampusFacilities(): ICampusFacility[] {
  return useLocalizedData(MOCK_CAMPUS_FACILITIES);
}

export function useCampusServices(): ICampusService[] {
  return useLocalizedData(MOCK_CAMPUS_SERVICES);
}


// Additional exports for page compatibility
export function useActivities(): ICampusActivity[] {
  return useCampusActivities();
}

export function useFacilities(): ICampusFacility[] {
  return useCampusFacilities();
}

export interface IClub {
  id: string;
  name: string;
  icon: string;
  memberCount: number;
  description: string;
}

const CLUBS_ZH: IClub[] = [
  { id: '1', name: '医学志愿者协会', icon: '❤️', memberCount: 156, description: '组织义诊、健康宣教等志愿服务活动，服务社区和乡村。' },
  { id: '2', name: '科研创新俱乐部', icon: '🔬', memberCount: 89, description: '开展医学科研兴趣培养，指导学生参与科研项目和竞赛。' },
  { id: '3', name: '国际文化交流社', icon: '🌍', memberCount: 124, description: '促进各国学生文化交流，举办国际文化节和语言角活动。' },
  { id: '4', name: '临床医学技能社', icon: '🩺', memberCount: 203, description: '开展临床技能培训和竞赛，提升医学生实践能力。' },
  { id: '5', name: '体育运动协会', icon: '⚽', memberCount: 178, description: '组织各类体育活动和赛事，丰富学生课余生活。' },
  { id: '6', name: '音乐艺术社', icon: '🎵', memberCount: 67, description: '培养学生艺术素养，举办音乐会和文艺演出。' },
];

const CLUBS_EN: IClub[] = [
  { id: '1', name: 'Medical Volunteer Association', icon: '❤️', memberCount: 156, description: 'Organizes free clinics, health education and volunteer services for communities.' },
  { id: '2', name: 'Research Innovation Club', icon: '🔬', memberCount: 89, description: 'Cultivates medical research interest, guides students in research projects and competitions.' },
  { id: '3', name: 'International Culture Exchange', icon: '🌍', memberCount: 124, description: 'Promotes cultural exchange among international students, hosts cultural festivals.' },
  { id: '4', name: 'Clinical Skills Society', icon: '🩺', memberCount: 203, description: 'Conducts clinical skills training and competitions to enhance practical abilities.' },
  { id: '5', name: 'Sports Association', icon: '⚽', memberCount: 178, description: 'Organizes various sports activities and events to enrich student life.' },
  { id: '6', name: 'Music & Art Club', icon: '🎵', memberCount: 67, description: 'Cultivates artistic literacy, hosts concerts and cultural performances.' },
];

const CLUBS_KY: IClub[] = [
  { id: '1', name: 'Медицина Volunteериндик Коому', icon: '❤️', memberCount: 156, description: 'Акыркы клиникаларды, ден-соолук окутууларды уюштуруп, коомдоруга кызмат кылуу.' },
  { id: '2', name: 'Илим-изилдөө Инновация Клубу', icon: '🔬', memberCount: 89, description: 'Медицина илиминдеги кызыкчылыктарды өстүрүү, студенттерди изилдөө долбоорлоруна башкарoo.' },
  { id: '3', name: 'Эл аралык Маданият Алмашуу', icon: '🌍', memberCount: 124, description: 'Эл аралык студенттердин маданият алмашуусун promote кылуу, маданият фестивалдерин өткөрүү.' },
  { id: '4', name: 'Клиникалык Көз Караш Жамагы', icon: '🩺', memberCount: 203, description: 'Клиникалык көз караш тренингдерин жана конкурсдорду өткөрүү.' },
  { id: '5', name: 'Спорт Коому', icon: '⚽', memberCount: 178, description: 'Ар түрдүү спорт иш-чараларын өткөрүү, студенттердин өмүрүн байытуу.' },
  { id: '6', name: 'Музыка жана Санат Клубу', icon: '🎵', memberCount: 67, description: 'Санаттык сапатты өстүрүү, концерттерди жана мәдени көрсөтүүлөрдү өткөрүү.' },
];

const CLUBS_RU: IClub[] = [
  { id: '1', name: 'Медицинская волонтёрская ассоциация', icon: '❤️', memberCount: 156, description: 'Организует бесплатные приёмы, санитарное просвещение и волонтёрские акции.' },
  { id: '2', name: 'Клуб научных инноваций', icon: '🔬', memberCount: 89, description: 'Развивает интерес к медицинским исследованиям, руководит проектами и конкурсами.' },
  { id: '3', name: 'Клуб международного культурного обмена', icon: '🌍', memberCount: 124, description: 'Содействует культурному обмену между студентами из разных стран.' },
  { id: '4', name: 'Общество клинических навыков', icon: '🩺', memberCount: 203, description: 'Проводит тренинг и конкурсы по клиническим навыкам.' },
  { id: '5', name: 'Спортивная ассоциация', icon: '⚽', memberCount: 178, description: 'Организует спортивные мероприятия для студентов.' },
  { id: '6', name: 'Музыкально-художественный клуб', icon: '🎵', memberCount: 67, description: 'Развивает творческие способности, проводит концерты и выставки.' },
];

export const MOCK_CLUBS: Record<Language, IClub[]> = {
  zh: CLUBS_ZH,
  en: CLUBS_EN,
  ky: CLUBS_KY,
  ru: CLUBS_RU,
};

export function useClubs(): IClub[] {
  return useLocalizedData(MOCK_CLUBS);
}

export interface IAccommodation {
  id: string;
  name: string;
  type: string;
  capacity: string;
  facilities: string[];
  imageUrl: string;
  description: string;
}

const ACCOMMODATION_ZH: IAccommodation[] = [
  {
    id: '1',
    name: '一号学生公寓',
    type: '本科生公寓',
    capacity: '4人间',
    facilities: ['独立卫浴', '空调', '无线网络', '24小时安保'],
    imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80',
    description: '现代化学生公寓，提供舒适的住宿环境，配备完善的生活设施。'
  },
  {
    id: '2',
    name: '二号学生公寓',
    type: '研究生公寓',
    capacity: '2人间',
    facilities: ['独立卫浴', '空调', '书桌', '厨房', '无线网络'],
    imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80',
    description: '研究生专属公寓，空间更宽敞，配备独立学习区域和公共厨房。'
  },
  {
    id: '3',
    name: '国际学生公寓',
    type: '留学生公寓',
    capacity: '单人间/双人间',
    facilities: ['独立卫浴', '空调', '家具齐全', '公共休息区', '健身房'],
    imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80',
    description: '专为国际学生设计的公寓，提供多元化的居住环境和社交空间。'
  },
];

const ACCOMMODATION_EN: IAccommodation[] = [
  {
    id: '1',
    name: 'Student Dormitory 1',
    type: 'Undergraduate',
    capacity: '4-bed room',
    facilities: ['Private bathroom', 'Air conditioning', 'WiFi', '24/7 security'],
    imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80',
    description: 'Modern student dormitory with comfortable accommodation and complete facilities.'
  },
  {
    id: '2',
    name: 'Student Dormitory 2',
    type: 'Graduate',
    capacity: '2-bed room',
    facilities: ['Private bathroom', 'Air conditioning', 'Desk', 'Kitchen', 'WiFi'],
    imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80',
    description: 'Graduate dormitory with more spacious rooms and study areas.'
  },
  {
    id: '3',
    name: 'International Student Dorm',
    type: 'International',
    capacity: 'Single/Double',
    facilities: ['Private bathroom', 'Air conditioning', 'Furnished', 'Lounge', 'Gym'],
    imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80',
    description: 'Dormitory designed for international students with diverse living environment.'
  },
];

const ACCOMMODATION_KY: IAccommodation[] = [
  {
    id: '1',
    name: '1-студенттик жатакана',
    type: 'Бакалавриат',
    capacity: '4-кишилик бөлмө',
    facilities: ['Жеке жууана', 'Кылуу', 'WiFi', '24/7 коопсуздук'],
    imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80',
    description: 'Заманбап студенттик жатакана, жайылымды жана толуку жабдыктарды берет.'
  },
  {
    id: '2',
    name: '2-студенттик жатакана',
    type: 'Магистратура',
    capacity: '2-кишилик бөлмө',
    facilities: ['Жеке жууана', 'Кылуу', 'Иш столу', 'Ашпазана', 'WiFi'],
    imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80',
    description: 'Магистранттар үчүн жатакана, кеңейтилген бөлмөлөр жана окуу аймактары бар.'
  },
  {
    id: '3',
    name: 'Эл аралык студенттер жатаканасы',
    type: 'Эл аралык',
    capacity: 'Жеке/Эки киши',
    facilities: ['Жеке жууана', 'Кылуу', 'Жабдыктар', 'Дамыруу бөлмө', 'Спорт залы'],
    imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80',
    description: 'Эл аралык студенттер үчүн арналган жатакана, түрдүү жашоо ортоосун берет.'
  },
];

const ACCOMMODATION_RU: IAccommodation[] = [
  {
    id: '1',
    name: 'Общежитие №1',
    type: 'Бакалавриат',
    capacity: '4-местная комната',
    facilities: ['Отдельный санузел', 'Кондиционер', 'WiFi', 'Круглосуточная охрана'],
    imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80',
    description: 'Современное общежитие с комфортным проживанием и всеми удобствами.'
  },
  {
    id: '2',
    name: 'Общежитие №2',
    type: 'Магистратура',
    capacity: '2-местная комната',
    facilities: ['Отдельный санузел', 'Кондиционер', 'Письменный стол', 'Кухня', 'WiFi'],
    imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80',
    description: 'Общежитие для магистрантов с более просторными комнатами и учебными зонами.'
  },
  {
    id: '3',
    name: 'Общежитие для иностранных студентов',
    type: 'Международное',
    capacity: 'Одноместная/Двухместная',
    facilities: ['Отдельный санузел', 'Кондиционер', 'Мебель', 'Гостиная', 'Спортзал'],
    imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80',
    description: 'Общежитие для иностранных студентов с разнообразной средой проживания.'
  },
];

export const MOCK_ACCOMMODATION: Record<Language, IAccommodation[]> = {
  zh: ACCOMMODATION_ZH,
  en: ACCOMMODATION_EN,
  ky: ACCOMMODATION_KY,
  ru: ACCOMMODATION_RU,
};

export function useAccommodation(): IAccommodation[] {
  return useLocalizedData(MOCK_ACCOMMODATION);
}
