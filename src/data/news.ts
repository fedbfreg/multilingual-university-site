// EXPORTS: INews, MOCK_NEWS, useNews, getNewsById, useNewsById
import type { Language } from '@/i18n/translations';
import { getLocalizedData, useLocalizedData } from './index';

export interface INews {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  coverImage: string;
  date: string;
  author: string;
  views: number;
}

// ── 中文 ──
const NEWS_ZH: INews[] = [
  {
    id: '1',
    title: 'CMSC与世界卫生组织签署合作协议，共同推动中亚地区公共卫生发展',
    summary: '中央国际医学院与世界卫生组织欧洲区域办事处正式签署合作备忘录，将在公共卫生人才培养、疾病防控研究等领域开展深度合作。',
    content: '近日，中央国际医学院（CMSC）与世界卫生组织（WHO）欧洲区域办事处在比什凯克正式签署合作备忘录。根据协议，双方将在公共卫生人才培养、传染病防控研究、医疗卫生体系建设等领域开展深度合作。\n\n校长Taaha al Safar教授表示，此次合作将进一步提升学院在公共卫生领域的教学和科研水平，为中亚地区培养更多高素质的公共卫生专业人才。WHO欧洲区域办事处负责人对CMSC在医学教育方面的成就给予高度评价。\n\n合作项目包括：联合培养公共卫生硕士项目、传染病监测技术培训、基层医疗卫生人员能力建设等。首批合作项目将于今年秋季正式启动。',
    category: '合作交流',
    coverImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    date: '2024-03-15',
    author: '国际合作处',
    views: 1247
  },
  {
    id: '2',
    title: '吉尔吉斯斯坦教育部表彰CMSC为年度优秀医学院校',
    summary: '在吉尔吉斯斯坦教育部年度评估中，中央国际医学院凭借出色的教学质量和国际化办学特色，荣获"年度优秀医学院校"称号。',
    content: '吉尔吉斯斯坦教育部近日公布2023年度高等院校评估结果，中央国际医学院（CMSC）在全国医学院校综合评估中名列前茅，荣获"年度优秀医学院校"称号。\n\n评估专家组对CMSC的教学质量、师资队伍、科研水平、国际化程度等方面给予了高度评价。特别指出学院在国际医学教育标准认证、多语言教学、学生临床实践能力培养等方面的突出成就。\n\n校长Taaha al Safar教授表示，这一荣誉是对学院全体师生努力的肯定，学院将继续秉承"仁心、精业、创新、卓越"的校训，为中亚地区培养更多优秀医学人才。',
    category: '学院要闻',
    coverImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
    date: '2024-02-28',
    author: '宣传部',
    views: 986
  },
  {
    id: '3',
    title: '第12届中亚医学教育国际研讨会在CMSC成功举办',
    summary: '来自28个国家的300余名医学教育专家齐聚比什凯克，围绕"后疫情时代的医学教育创新"主题展开深入研讨。',
    content: '第12届中亚医学教育国际研讨会近日在中央国际医学院成功举办。本届研讨会以"后疫情时代的医学教育创新"为主题，吸引了来自28个国家的300余名医学教育专家、学者和临床医生参会。\n\n研讨会期间，共举办了12场主旨演讲、36场分会场报告和6场工作坊。与会专家就医学教育模式创新、线上教学与线下教学融合、临床实践教学改革、医学生职业素养培养等议题进行了深入交流和探讨。\n\n大会发布了《比什凯克医学教育宣言》，呼吁各国医学院校加强国际合作，共同推动医学教育质量提升，培养适应未来医疗卫生需求的高素质医学人才。',
    category: '学术活动',
    coverImage: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80',
    date: '2024-02-10',
    author: '学术交流中心',
    views: 1523
  },
  {
    id: '4',
    title: 'CMSC临床医学专业通过WFME国际认证，教学质量获国际认可',
    summary: '中央国际医学院临床医学专业正式通过世界医学教育联合会（WFME）国际认证，标志着学院医学教育质量达到国际先进水平。',
    content: '经过严格的国际评估程序，中央国际医学院（CMSC）临床医学专业正式通过世界医学教育联合会（World Federation for Medical Education, WFME）的国际认证。这是中亚地区少数获得此项认证的医学院校之一。\n\nWFME认证是全球医学教育领域最具权威性的认证体系之一，认证标准涵盖医学教育的各个方面，包括办学理念、课程体系、师资队伍、教学资源、临床实践、学生评价、质量管理等。\n\n获得WFME认证后，CMSC临床医学专业毕业生将获得更广泛的国际认可，便于在全球范围内从事医学工作和继续深造。同时，也为学院与国际知名医学院校开展更深层次的合作奠定了基础。',
    category: '教学质量',
    coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    date: '2024-01-20',
    author: '教务处',
    views: 2156
  },
  {
    id: '5',
    title: 'CMSC新增医学技术专业，适应现代医疗卫生发展需求',
    summary: '为适应现代医疗卫生事业发展需求，学院2024年秋季学期将新增医学检验技术和医学影像技术两个本科专业。',
    content: '为适应现代医疗卫生事业发展对医学技术人才的需求，中央国际医学院经吉尔吉斯斯坦教育部批准，2024年秋季学期将新增医学检验技术和医学影像技术两个本科专业。\n\n医学检验技术专业旨在培养掌握现代医学检验基本理论和技术，能在各级医院、血站、疾控中心等机构从事医学检验工作的高级技术人才。医学影像技术专业则培养掌握医学影像技术基本理论和操作技能，能从事医学影像检查技术工作的专门人才。\n\n学院已建成设备先进的医学检验实训中心和医学影像实训中心，配备了全自动生化分析仪、血细胞分析仪、CT模拟机、DR数字X线机等现代化教学设备，为新专业人才培养提供了坚实保障。',
    category: '专业建设',
    coverImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
    date: '2024-01-08',
    author: '招生办公室',
    views: 1834
  },
  {
    id: '6',
    title: 'CMSC学生在国际医学生临床技能大赛中荣获佳绩',
    summary: '在第8届国际医学生临床技能大赛中，CMSC代表队凭借扎实的临床基本功和出色的团队协作，荣获团体二等奖。',
    content: '第8届国际医学生临床技能大赛近日在阿拉木图举行，来自中亚及周边国家16所医学院校的代表队参加了比赛。中央国际医学院（CMSC）选派的6名临床医学专业学生组成的代表队表现出色，荣获团体二等奖。\n\n本次大赛设内科、外科、妇产科、儿科、急救等多个站点，全面考核医学生的临床基本技能、临床思维能力和团队协作能力。CMSC学生在比赛中展现了扎实的临床基本功和良好的职业素养，得到了评委专家的一致好评。\n\n带队教师表示，优异成绩的取得得益于学院长期以来对临床实践教学的高度重视和持续投入。学院将继续加强临床实践教学，不断提高学生的临床技能水平。',
    category: '学生风采',
    coverImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
    date: '2023-12-15',
    author: '学生工作处',
    views: 1672
  }
];

// ── 英文 ──
const NEWS_EN: INews[] = [
  {
    id: '1',
    title: 'CMSC Signs Cooperation Agreement with WHO to Advance Public Health in Central Asia',
    summary: 'Central International Medical College and WHO Regional Office for Europe have signed a memorandum of understanding for deep cooperation in public health talent training and disease prevention research.',
    content: 'Recently, Central International Medical College (CMSC) and the World Health Organization (WHO) Regional Office for Europe officially signed a memorandum of understanding in Bishkek. Under the agreement, both parties will conduct in-depth cooperation in public health talent training, infectious disease prevention research, and healthcare system development.\n\nProfessor Taaha al Safar, Rector of CMSC, stated that this cooperation will further enhance the college\'s teaching and research capabilities in public health, cultivating more high-quality public health professionals for the Central Asian region. The WHO representative highly praised CMSC\'s achievements in medical education.\n\nCooperation projects include: joint Master of Public Health programs, infectious disease surveillance technology training, and primary healthcare personnel capacity building. The first batch of projects will officially launch this autumn.',
    category: 'International Cooperation',
    coverImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    date: '2024-03-15',
    author: 'International Cooperation Office',
    views: 1247
  },
  {
    id: '2',
    title: 'CMSC Honored as Outstanding Medical College of the Year by Kyrgyz Ministry of Education',
    summary: 'In the annual evaluation by the Kyrgyz Ministry of Education, CMSC was awarded "Outstanding Medical College of the Year" for its excellent teaching quality and international education features.',
    content: 'The Kyrgyz Ministry of Education recently announced the 2023 annual higher education evaluation results. Central International Medical College (CMSC) ranked among the top medical schools nationwide and was awarded "Outstanding Medical College of the Year".\n\nThe evaluation expert group highly praised CMSC for its teaching quality, faculty team, research level, and internationalization. Special recognition was given to the college\'s outstanding achievements in international medical education standard accreditation, multilingual teaching, and clinical practice training.\n\nProfessor Taaha al Safar, Rector, stated that this honor recognizes the efforts of all faculty and students. The college will continue to uphold its motto of "Compassion, Excellence, Innovation, Distinction" to cultivate more outstanding medical talents for Central Asia.',
    category: 'College News',
    coverImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
    date: '2024-02-28',
    author: 'Public Relations Office',
    views: 986
  },
  {
    id: '3',
    title: '12th Central Asian International Medical Education Symposium Successfully Held at CMSC',
    summary: 'Over 300 medical education experts from 28 countries gathered in Bishkek to discuss "Medical Education Innovation in the Post-Pandemic Era".',
    content: 'The 12th Central Asian International Medical Education Symposium was successfully held at Central International Medical College. With the theme "Medical Education Innovation in the Post-Pandemic Era", the symposium attracted over 300 medical education experts, scholars, and clinicians from 28 countries.\n\nDuring the symposium, 12 keynote speeches, 36 parallel session presentations, and 6 workshops were held. Participants engaged in in-depth discussions on medical education model innovation, online-offline teaching integration, clinical practice teaching reform, and professional ethics training.\n\nThe conference released the "Bishkek Declaration on Medical Education", calling on medical schools worldwide to strengthen international cooperation, jointly promote medical education quality, and cultivate high-quality medical professionals adapted to future healthcare needs.',
    category: 'Academic Events',
    coverImage: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80',
    date: '2024-02-10',
    author: 'Academic Exchange Center',
    views: 1523
  },
  {
    id: '4',
    title: 'CMSC General Medicine Program Receives WFME International Accreditation',
    summary: 'CMSC\'s General Medicine program has officially received WFME international accreditation, marking that the college\'s medical education quality has reached international advanced standards.',
    content: 'After a rigorous international evaluation process, the General Medicine program of Central International Medical College (CMSC) has officially received international accreditation from the World Federation for Medical Education (WFME). This makes CMSC one of the few medical schools in Central Asia to achieve this recognition.\n\nWFME accreditation is one of the most authoritative certification systems in global medical education. The standards cover all aspects of medical education, including educational philosophy, curriculum system, faculty, teaching resources, clinical practice, student assessment, and quality management.\n\nWith WFME accreditation, CMSC General Medicine graduates will receive broader international recognition, facilitating medical practice and further study worldwide. It also lays the foundation for deeper cooperation with internationally renowned medical schools.',
    category: 'Teaching Quality',
    coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    date: '2024-01-20',
    author: 'Academic Affairs Office',
    views: 2156
  },
  {
    id: '5',
    title: 'CMSC Adds Medical Technology Programs to Meet Modern Healthcare Needs',
    summary: 'To meet the demands of modern healthcare development, the college will add two new undergraduate programs: Medical Laboratory Technology and Medical Imaging Technology in Fall 2024.',
    content: 'To meet the demand for medical technology talents in modern healthcare development, Central International Medical College has been approved by the Kyrgyz Ministry of Education to add two new undergraduate programs: Medical Laboratory Technology and Medical Imaging Technology, starting in Fall 2024.\n\nThe Medical Laboratory Technology program aims to cultivate advanced technical talents with modern medical laboratory theories and skills, capable of working in hospitals, blood banks, and CDC centers. The Medical Imaging Technology program cultivates specialists with medical imaging technology theories and operational skills.\n\nThe college has built advanced medical laboratory and medical imaging training centers, equipped with automatic biochemical analyzers, blood cell analyzers, CT simulators, and DR digital X-ray machines, providing solid support for the new programs.',
    category: 'Program Development',
    coverImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
    date: '2024-01-08',
    author: 'Admissions Office',
    views: 1834
  },
  {
    id: '6',
    title: 'CMSC Students Achieve Excellent Results in International Clinical Skills Competition',
    summary: 'At the 8th International Medical Students Clinical Skills Competition, the CMSC team won the second prize with solid clinical skills and excellent teamwork.',
    content: 'The 8th International Medical Students Clinical Skills Competition was recently held in Almaty, with teams from 16 medical schools in Central Asia and neighboring countries participating. The CMSC team of 6 General Medicine students performed excellently and won the second prize.\n\nThe competition included multiple stations in internal medicine, surgery, obstetrics and gynecology, pediatrics, and emergency medicine, comprehensively assessing medical students\' basic clinical skills, clinical thinking ability, and teamwork. CMSC students demonstrated solid clinical fundamentals and good professional ethics, receiving unanimous praise from the judges.\n\nThe team supervisor stated that the excellent results are due to the college\'s long-term emphasis on and continuous investment in clinical practice teaching. The college will continue to strengthen clinical practice education and continuously improve students\' clinical skills.',
    category: 'Student Achievements',
    coverImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
    date: '2023-12-15',
    author: 'Student Affairs Office',
    views: 1672
  }
];

// ── 吉尔吉斯语 ──
const NEWS_KY: INews[] = [
  {
    id: '1',
    title: 'CMSC КБО менен кызматташуу меморандумун имзалады, Орто Азияда жалпы ден-соолук өнүгүшүнө көмөктөшөт',
    summary: 'Централдык Эл аралык Медицина Колледжи жана КБОнун Европа аймактык кеңеши жалпы ден-соолук кадрларын даярдоо жана ооруларды коргоо изилдөө тармагында терең кызматташуу үчүн меморандум имзалады.',
    content: 'Жакында Централдык Эл аралык Медицина Колледжи (CMSC) жана Дүйнөлүк ден-соолук уюмунун (КБО) Европа аймактык кеңеши Бишкекте расмий түрдө кызматташуу меморандумун имзалады. Келишим боюнча эки тарап жалпы ден-соолук кадрларын даярдоо, жугунуштуу ооруларды коргоо изилдөө, дене сактоо системасын өнүктүрүү тармактарында терең кызматташат.\n\nКолледждин ректори профессор Тааха аль Сафар бул кызматташуу колледждин жалпы ден-соолук тармагындагы окутуу жана изилдөө жөндөмдөрүнө көбөйтүшүндүрүп, Орто Азия аймагына көбүрөөк жогорку сапаттагы жалпы ден-соолук адистерин даярдайт, дегенди билдирди. КБОнун өкүлү CMSCнин медицина билим берүүсүндөгү жетишкендиктерин жогору баалады.\n\nКызматташуу долбоорлоруна жалпы ден-соолук магистрди биргелешкен даярдоо долбоору, жугунуштуу ооруларды байкоо техникасын үйрөтүү, негизги дене сактоо ишчилеринин жөндөмүн жогорулатуу кирет. Биринчи топтом долбоорлар бул кузду расмий түрдө башталат.',
    category: 'Эл аралык кызматташуу',
    coverImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    date: '2024-03-15',
    author: 'Эл аралык кызматташуу идарасы',
    views: 1247
  },
  {
    id: '2',
    title: 'CMSC Кыргызстан Билим министрлиги тарабынан жылдын мыкты медицина колледжи деп аталды',
    summary: 'Кыргызстан Билим министрлигинин жылдык баалоосунда CMSC жогорку сапаттагы окутуусу жана эл аралык билим берүү өзгөчөлүгү үчүн "жылдын мыкты медицина колледжи" наамын алды.',
    content: 'Кыргызстан Билим министрлиги жакында 2023-жылдын жогорку окуу жайларынын жылдык баалоо натыйжаларын жарыклады. Централдык Эл аралык Медицина Колледжи (CMSC) өлкөдөгү медицина мектептеринин综合 баалоосунда алдыңкы орунду ээлеп, "жылдын мыкты медицина колледжи" наамын алды.\n\nБаалоо эксперттер тобу CMSCнин окутуу сапаты, мугалимдер тобу, изилдөө деңгээли, эл аралашуу деңгээли жагынан жогору баалады. Колледждин эл аралык медицина билим берүү стандарты аккредитациясы, көп тилдүү окутуу, студенттердин клиникалык практика жөндөмүн даярдоо жагынан атактуу жетишкендиктери айрыкча белгиленди.\n\nРектор профессор Тааха аль Сафар бул сыйлык бардык мугалимдер жана студенттердин жагымдуу эмгектеринин таанылышы, дегенди айтты. Колледж "Жүрөк, жогорку сапат, инновация, мыктылык" деген девизине ылайык Орто Азияга көбүрөөк мыкты медицина адистерин даярдаштырары келеді.',
    category: 'Колледж жаңылыктары',
    coverImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
    date: '2024-02-28',
    author: 'Борбордук маалымат идарасы',
    views: 986
  },
  {
    id: '3',
    title: 'CMSCде 12-Орто Азия медицина билим берүүсүнүн эл аралык симпозиуму ийгиликтүү өттү',
    summary: '28 өлкөнүн 300дөн ашык медицина билим берүү эксперти Бишкекте жыйналып, "пандемиядан кийинки доорундагы медицина билим берүүсүнүн инновациясы" темасы боюнча чатты талкуу өткөрдү.',
    content: '12-Орто Азия медицина билим берүүсүнүн эл аралык симпозиуму жакында Централдык Эл аралык Медицина Колледжинде ийгиликтүү өттү. Бул симпозиум "пандемиядан кийинки доорундагы медицина билим берүүсүнүн инновациясы" темасы өттү, 28 өлкөнүн 300дөн ашык медицина билим берүү эксперти, илимпоздор жана клиникалык дарыгерлер катышты.\n\nСимпозиум ичинде 12 негизги лекция, 36 бөлүк залдык доклад жана 6 семинар өткөрүлдү. Катышуучулар медицина билим берүүсүнүн моделинин инновациясы, онлайн-оффлайн окутуунун бириктирилиши, клиникалык практика окутуусунун реформасы, медицина студенттеринин кесиптик этикасын даярдоо жагында чатты талкуу жана талкуулар өткөрдү.\n\nКонференция "Бишкек медицина билим берүүсү декларациясын" жарыклап, дүйнөнүн медицина мектептерине эл аралык кызматташтырууну күчөтүүнү, медицина билим берүүсүнүн сапатын биргелешкен жогорулатууну, келечектеги дене сактоо талаптарына ылайыктуу жогорку сапаттагы медицина адистерин даярдоону чакырат.',
    category: 'Академиялык иш-чаралар',
    coverImage: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80',
    date: '2024-02-10',
    author: 'Академиялык алмашуу борбору',
    views: 1523
  },
  {
    id: '4',
    title: 'CMSC жалпы медицина адистиги WFME эл аралык аккредитациясын алды',
    summary: 'Централдык Эл аралык Медицина Колледжинин жалпы медицина адистиги расмий түрдө WFME эл аралык аккредитациясын алды, бул колледждин медицина билим берүүсүнүн сапаты эл аралык алдыңкы деңгээлге жеткендигин белгилейт.',
    content: 'Катаал эл аралык баалоо процессиден кийин, Централдык Эл аралык Медицина Колледжинин (CMSC) жалпы медицина адистиги расмий түрдө Дүйнөлүк медицина билим берүү федерациясынын (WFME) эл аралык аккредитациясын алды. Бул CMSC Орто Азияда бул аккредитацияга ээ биринчи медицина мектептеринен бири болду.\n\nWFME аккредитациясы дүйнөлүк медицина билим берүүсүндөгү эң авторитеттуу сертификаттама системаларынын бири. Аккредитация стандарты медицина билим берүүсүнүн бардык жагын камтыйт, ошондой эле билим берүү идеясы, курстар системаcы, мугалимдер тобу, окутуу ресурстары, клиникалык практика, студенттерди баалоо, сапатты башкаруу ж.б.\n\nWFME аккредитациясын алгандан кийин, CMSC жалпы медицина бүтүрүүчүлөрү кеңири эл аралык таанылыш алуу менен, дүйнөнүн ар жагында медицина ишин жүргүзүүгө жана көбүрөөк окууга мүмкүнчүлүк алышат. Ошондой эле, колледждин эл аралык таанымал медицина мектептери менен тереңдемиш кызматташуусуна негиз салынат.',
    category: 'Окутуу сапаты',
    coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    date: '2024-01-20',
    author: 'Окутуу идарасы',
    views: 2156
  },
  {
    id: '5',
    title: 'CMSC заманбап дене сактоо талаптарына ылайыктуу медицина техникасы адистиктерин кошду',
    summary: 'Заманбап дене сактоо ишинин өнүгүү талаптарына ылайык, колледж 2024-жылдын кузундун семестрине медицина текшерүү техникасы жана медицина сүрөт техникасы эки жаңы бакалаврдык адистикти кошот.',
    content: 'Заманбап дене сактоо ишинин медицина техникасы кадрларына болгон талабына ылайык, Централдык Эл аралык Медицина Колледжи Кыргызстан Билим министрлигинин макулу менен 2024-жылдын кузундун семестрине медицина текшерүү техникасы жана медицина сүрөт техникасы эки жаңы бакалаврдык адистикти кошот.\n\nМедицина текшерүү техникасы адистиги заманбап медицина текшерүүсүнүн негизги теорияларына жана техникасына ээ, оорукана, кан борбору, ден-соолук коргоо борбору ж.б. ишканаларда медицина текшерүү ишин жүргүзө алган жогорку сапаттагы техникалык адистерди даярдайт. Медицина сүрөт техникасы адистиги медицина сүрөт техникасынын негизги теорияларына жана операция жөндөмүнө ээ адистерди даярдайт.\n\nКолледж заманбап жабдыктарга ээ медицина текшерүү үйрөтүү борборун жана медицина сүрөт үйрөтүү борборун курдук, автоматташтырылган биохимиялык анализатор, кан клеткаларын анализатор, КТ симулятору, DR сандык рентген аппараты ж.б. заманбап окутуу жабдыктары менен жабдырылды, жаңы адистиктердин кадрларын даярдоосунун негизги камсыз кылуусун камсыз кылды.',
    category: 'Адистиктерди иштеп чыгуу',
    coverImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
    date: '2024-01-08',
    author: 'Кабыл алуу идарасы',
    views: 1834
  },
  {
    id: '6',
    title: 'CMSC студенттери эл аралык медицина студенттери клиникалык дағдылар байкоосунда жакшы натыйжага жетишти',
    summary: '8-эл аралык медицина студенттери клиникалык дағдылар байкоосунда CMSC командасы катуу клиникалык негизги дағдылары жана мыкты командалык ишти жөнүндө экинчи орунду алды.',
    content: '8-эл аралык медицина студенттери клиникалык дағдылар байкоосу жакында Алматыда өттү, Орто Азия жана жанындагы өлкөлөрдүн 16 медицина мектептеринин командалары катышты. Централдык Эл аралык Медицина Колледжинин (CMSC) 6 жалпы медицина студентинен турган командасы мыкты иштеди жана экинчи орунду алды.\n\nБул байкоодо ички оорулар, хирургия, гинекология жана акушерство, балдар оорулары, тез жардам ж.б. бир нече станция бар, медицина студенттеринин клиникалык негизги дағдыларын, клиникалык ой жөндөмүн жана командалык ишти толугу менен баалайт. CMSC студенттери байкоодо катуу клиникалык негизги дағдыларын жана жакшы кесиптик этикасын көрсөттү, соттоолук эксперттердин бирдей жакшы бааларына ээ болду.\n\nКоманда жетекчиси жакшы натыйжа колледждин узак убакыттан бери клиникалык практика окутуусуна көңүл бурганынан жана тутап салганынан келип чыкканын айтты. Колледж клиникалык практика окутуусун күчөтүп, студенттердин клиникалык дағдыларын түзүлүп жогорулата турган.',
    category: 'Студенттердин жетишкендиктери',
    coverImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
    date: '2023-12-15',
    author: 'Студенттер иши идарасы',
    views: 1672
  }
];

// ── 俄语 ──
const NEWS_RU: INews[] = [
  {
    id: '1',
    title: 'CMSC подписал соглашение о сотрудничестве с ВОЗ для развития общественного здоровья в Центральной Азии',
    summary: 'Центральный Международный Медицинский Колледж и Европейское региональное бюро ВОЗ подписали меморандум о сотрудничестве в области подготовки кадров общественного здоровья и исследований по профилактике заболеваний.',
    content: 'Недавно Центральный Международный Медицинский Колледж (CMSC) и Европейское региональное бюро Всемирной организации здравоохранения (ВОЗ) официально подписали меморандум о взаимопонимании в Бишкеке. Согласно соглашению, стороны будут осуществлять глубокое сотрудничество в области подготовки кадров общественного здоровья, исследований по профилактике инфекционных заболеваний и развития системы здравоохранения.\n\nПрофессор Тааха аль Сафар, ректор CMSC, заявил, что это сотрудничество дополнительно повысит учебный и исследовательский потенциал колледжа в области общественного здоровья и подготовит больше высококвалифицированных специалистов общественного здоровья для Центральной Азии. Представитель ВОЗ высоко оценил достижения CMSC в медицинском образовании.\n\nПроекты сотрудничества включают: совместную программу магистратуры по общественному здоровью, обучение технологиям мониторинга инфекционных заболеваний и повышение квалификации первичного медицинского персонала. Первая партия проектов официально стартует этой осенью.',
    category: 'Международное сотрудничество',
    coverImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    date: '2024-03-15',
    author: 'Отдел международного сотрудничества',
    views: 1247
  },
  {
    id: '2',
    title: 'CMSC признан отличным медицинским колледжем года Минобразования Кыргызстана',
    summary: 'По итогам годовой оценки Минобразования Кыргызстана CMSC получил звание «Отличный медицинский колледж года» за высокое качество обучения и особенности международного образования.',
    content: 'Минобразования Кыргызстана недавно объявило результаты годовой оценки высших учебных заведений за 2023 год. Центральный Международный Медицинский Колледж (CMSC) вошёл в число лучших медицинских школ страны и получил звание «Отличный медицинский колледж года».\n\nЭкспертная группа высоко оценила CMSC по качеству обучения, профессорско-преподавательскому составу, уровню научных исследований и степени интернационализации. Особо отмечены выдающиеся достижения колледжа в международной аккредитации медицинского образования, многоязычном обучении и подготовке клинической практики студентов.\n\nПрофессор Тааха аль Сафар, ректор, заявил, что эта честь — признание усилий всех преподавателей и студентов. Колледж будет продолжать следовать девизу «Сострадание, мастерство, инновации, превосходство», чтобы готовить больше отличных медицинских специалистов для Центральной Азии.',
    category: 'Новости колледжа',
    coverImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
    date: '2024-02-28',
    author: 'Отдел по связям с общественностью',
    views: 986
  },
  {
    id: '3',
    title: '12-й Центральноазиатский международный симпозиум по медицинскому образованию успешно прошёл в CMSC',
    summary: 'Более 300 экспертов по медицинскому образованию из 28 стран собрались в Бишкеке для обсуждения темы «Инновации медицинского образования в постпандемическую эпоху».',
    content: '12-й Центральноазиатский международный симпозиум по медицинскому образованию успешно прошёл в Центральном Международном Медицинском Колледже. Тема симпозиума — «Инновации медицинского образования в постпандемическую эпоху» — привлекла более 300 экспертов, учёных и клиницистов из 28 стран.\n\nВ ходе симпозиума прошло 12 пленарных докладов, 36 секционных выступлений и 6 мастер-классов. Участники провели глубокое обсуждение инноваций модели медицинского образования, интеграции онлайн- и офлайн-обучения, реформы клинической практики и профессиональной этики студентов-медиков.\n\nКонференция опубликовала «Бишкекскую декларацию по медицинскому образованию», призывающую медицинские школы всего мира укреплять международное сотрудничество, совместно повышать качество медицинского образования и готовить высококвалифицированных медицинских специалистов, отвечающих потребностям здравоохранения будущего.',
    category: 'Научные мероприятия',
    coverImage: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80',
    date: '2024-02-10',
    author: 'Центр академического обмена',
    views: 1523
  },
  {
    id: '4',
    title: 'Программа «Лечебное дело» CMSC получила международную аккредитацию WFME',
    summary: 'Программа «Лечебное дело» Центрального Международного Медицинского Колледжа официально получила международную аккредитацию WFME, что означает достижение качества медицинского образования международного передового уровня.',
    content: 'После строгой международной процедуры оценки программа «Лечебное дело» Центрального Международного Медицинского Колледжа (CMSC) официально получила международную аккредитацию Всемирной федерации медицинского образования (WFME). Это делает CMSC одной из немногих медицинских школ Центральной Азии с такой аккредитацией.\n\nАккредитация WFME — одна из самых авторитетных систем сертификации в глобальном медицинском образовании. Стандарты охватывают все аспекты медицинского образования: образовательную философию, учебную программу, профессорско-преподавательский состав, учебные ресурсы, клиническую практику, оценку студентов и управление качеством.\n\nПосле получения аккредитации WFME выпускники программы «Лечебное дело» CMSC получат более широкое международное признание, что облегчит медицинскую практику и дальнейшее обучение по всему миру. Это также закладывает основу для более глубокого сотрудничества с известными международными медицинскими школами.',
    category: 'Качество обучения',
    coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    date: '2024-01-20',
    author: 'Учебный отдел',
    views: 2156
  },
  {
    id: '5',
    title: 'CMSC добавляет программы медицинской техники в ответ на потребности современного здравоохранения',
    summary: 'В ответ на потребности развития современного здравоохранения колледж добавит две новые бакалаврские программы: «Медицинская лабораторная техника» и «Медицинская визуальная техника» осенью 2024 года.',
    content: 'В ответ на спрос на специалистов по медицинской технике в современном здравоохранении Центральный Международный Медицинский Колледж получил разрешение Минобразования Кыргызстана на добавление двух новых бакалаврских программ: «Медицинская лабораторная техника» и «Медицинская визуальная техника», начиная с осени 2024 года.\n\nПрограмма «Медицинская лабораторная техника» готовит высококвалифицированных технических специалистов с современными теориями и навыками медицинских лабораторных исследований, способных работать в больницах, станциях переливания крови и центрах гигиены и эпидемиологии. Программа «Медицинская визуальная техника» готовит специалистов с теориями и практическими навыками медицинской визуализации.\n\nКолледж построил современные учебные центры медицинской лаборатории и медицинской визуализации, оснащённые автоматическими биохимическими анализаторами, гематологическими анализаторами, КТ-симуляторами и цифровыми рентгеновскими аппаратами, обеспечивая надёжную поддержку для новых программ.',
    category: 'Развитие программ',
    coverImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
    date: '2024-01-08',
    author: 'Приёмная комиссия',
    views: 1834
  },
  {
    id: '6',
    title: 'Студенты CMSC достигли отличных результатов на международном конкурсе клинических навыков',
    summary: 'На 8-м международном конкурсе клинических навыков студентов-медиков команда CMSC завоевала второе место благодаря прочным клиническим навыкам и отличной командной работе.',
    content: '8-й международный конкурс клинических навыков студентов-медиков недавно прошёл в Алматы, в нём участвовали команды из 16 медицинских школ Центральной Азии и соседних стран. Команда CMSC из 6 студентов специальности «Лечебное дело» выступила отлично и завоевала второе место.\n\nКонкурс включал несколько станций по терапии, хирургии, акушерству и гинекологии, педиатрии и неотложной помощи, всесторонне оценивая базовые клинические навыки, клиническое мышление и командную работу студентов-медиков. Студенты CMSC продемонстрировали прочные клинические основы и хорошую профессиональную этику, получив единодушную высокую оценку судей.\n\nРуководитель команды заявил, что отличные результаты обусловлены долгосрочным вниманием и постоянными инвестициями колледжа в клиническую практику. Колледж будет продолжать укреплять клиническую практику и постоянно повышать уровень клинических навыков студентов.',
    category: 'Достижения студентов',
    coverImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
    date: '2023-12-15',
    author: 'Отдел по работе со студентами',
    views: 1672
  }
];

// ── Exports ──
export const MOCK_NEWS: Record<Language, INews[]> = {
  zh: NEWS_ZH,
  en: NEWS_EN,
  ky: NEWS_KY,
  ru: NEWS_RU,
};

export function useNews(): INews[] {
  return useLocalizedData(MOCK_NEWS);
}

export function getNewsById(language: Language, id: string): INews | undefined {
  return getLocalizedData(MOCK_NEWS, language).find((n) => n.id === id);
}

export function useNewsById(id: string): INews | undefined {
  const all = useLocalizedData(MOCK_NEWS);
  return all.find((n) => n.id === id);
}
