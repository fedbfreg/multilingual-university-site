# City Modern School of Computing (CMSC) - 需求拆解文档

## 产品概述

- **产品类型**: 高等院校官方网站
- **场景类型**: <scene_type>prototype-app</scene_type>
- **目标用户**: 潜在学生及家长、在校师生、合作企业、社会公众
- **核心价值**: 全面展示 CMSC 的学术实力、校园文化与招生信息，建立专业可信的数字化形象
- **界面语言**: 中文
- **主题偏好**: 浅色
- **导航模式**: 路径导航
- **导航布局**: Topbar（消费者前台，面向公众的品牌展示型网站）

---

## 页面结构总览

> **说明**：此表为页面生成的唯一数据源，包含所有页面（一级+二级）

| 页面名称 | 文件名 | 路由 | 页面类型 | 入口来源 |
|---------|-------|------|---------|---------|
| 首页 | `HomePage.tsx` | `/` | 一级 | 导航 |
| 学校概况 | `AboutPage.tsx` | `/about` | 一级 | 导航 |
| 院系设置 | `DepartmentsPage.tsx` | `/departments` | 一级 | 导航 |
| 院系详情 | `DepartmentDetailPage.tsx` | `/departments/:id` | 二级 | 院系设置页 → 院系卡片点击 |
| 师资力量 | `FacultyPage.tsx` | `/faculty` | 一级 | 导航 |
| 教师详情 | `FacultyDetailPage.tsx` | `/faculty/:id` | 二级 | 师资力量页 → 教师卡片点击 |
| 招生就业 | `AdmissionsPage.tsx` | `/admissions` | 一级 | 导航 |
| 校园生活 | `CampusLifePage.tsx` | `/campus-life` | 一级 | 导航 |
| 新闻动态 | `NewsPage.tsx` | `/news` | 一级 | 导航 |
| 新闻详情 | `NewsDetailPage.tsx` | `/news/:id` | 二级 | 新闻动态页 → 新闻卡片点击 |
| 联系我们 | `ContactPage.tsx` | `/contact` | 一级 | 导航 |

---

## 页面布局建议

> **说明**：官网为品牌展示型，以内容叙事为主，非工具类应用。各页面布局建议如下：

- **首页**: 全宽滚动布局（Full-width Scroll），视觉重心在 Hero 区，自上而下依次为 Hero → 校训 → 通知/新闻 → 校园风采 → 数据亮点 → 页脚
- **学校概况**: 单栏内容布局，视觉重心在文字内容，穿插校园风光图片形成节奏
- **院系设置**: 卡片网格布局（Grid），视觉重心在院系卡片，点击进入详情
- **院系详情**: 单栏内容布局，顶部院系 Banner → 介绍 → 专业方向 → 师资关联
- **师资力量**: 卡片网格布局，视觉重心在教师头像与简介卡片
- **教师详情**: 左右分栏布局（桌面端），左侧教师照片/基本信息，右侧详细介绍与研究成果
- **招生就业**: Tab 分区布局，招生简章 / 专业介绍 / 就业指导 / 校企合作 四个 Tab 切换
- **校园生活**: 图文混排布局，活动/社团/设施/住宿 四个 Section 依次排列
- **新闻动态**: 列表布局，左侧新闻列表，右侧分类筛选 + 热门新闻
- **新闻详情**: 单栏文章布局，标题 → 元信息 → 正文 → 相关新闻
- **联系我们**: 左右分栏布局，左侧联系信息 + 在线留言表单，右侧地图

---

## 导航配置

- **导航布局**: Topbar（顶部固定，透明→实色滚动切换）
- **导航项**（仅一级页面）:

| 导航文字 | 路由 | 图标(可选) |
|---------|------|-----------|
| 首页 | `/` | Home |
| 学校概况 | `/about` | Info |
| 院系设置 | `/departments` | Building |
| 师资力量 | `/faculty` | Users |
| 招生就业 | `/admissions` | GraduationCap |
| 校园生活 | `/campus-life` | Heart |
| 新闻动态 | `/news` | Newspaper |
| 联系我们 | `/contact` | Phone |

---

## 数据来源声明

| 数据/操作 | 来源类型 | 实现要求 | mock 兜底 |
|---|---|---|---|
| 首页 Hero 轮播图 | demo-mock | src/data/home.ts 中定义 heroSlides 数组 | ✅ 本身就是 mock |
| 校训展示 | demo-mock | src/data/home.ts 中定义 motto 对象 | ✅ 本身就是 mock |
| 重要通知列表 | demo-mock | src/data/home.ts 中定义 notices 数组 | ✅ 本身就是 mock |
| 新闻动态列表 | demo-mock | src/data/news.ts 中定义 newsList 数组，含分类字段 | ✅ 本身就是 mock |
| 校园风采图片 | demo-mock | src/data/home.ts 中定义 gallery 数组 | ✅ 本身就是 mock |
| 学校概况内容 | demo-mock | src/data/about.ts 中定义学校简介、历史沿革、办学理念等文本 | ✅ 本身就是 mock |
| 领导团队 | demo-mock | src/data/about.ts 中定义 leadership 数组 | ✅ 本身就是 mock |
| 院系列表与详情 | demo-mock | src/data/departments.ts 中定义 departments 数组，含 id/name/description/programs 等 | ✅ 本身就是 mock |
| 师资力量列表与详情 | demo-mock | src/data/faculty.ts 中定义 facultyList 数组，含 id/name/title/photo/bio 等 | ✅ 本身就是 mock |
| 招生简章内容 | demo-mock | src/data/admissions.ts 中定义 admissionGuide 对象 | ✅ 本身就是 mock |
| 专业介绍 | demo-mock | src/data/admissions.ts 中定义 programs 数组 | ✅ 本身就是 mock |
| 就业指导信息 | demo-mock | src/data/admissions.ts 中定义 careerGuide 对象 | ✅ 本身就是 mock |
| 校企合作企业 | demo-mock | src/data/admissions.ts 中定义 partners 数组 | ✅ 本身就是 mock |
| 学生活动 | demo-mock | src/data/campus.ts 中定义 activities 数组 | ✅ 本身就是 mock |
| 社团组织 | demo-mock | src/data/campus.ts 中定义 clubs 数组 | ✅ 本身就是 mock |
| 校园设施 | demo-mock | src/data/campus.ts 中定义 facilities 数组 | ✅ 本身就是 mock |
| 住宿餐饮 | demo-mock | src/data/campus.ts 中定义 accommodation 对象 | ✅ 本身就是 mock |
| 联系信息 | demo-mock | src/data/contact.ts 中定义 contactInfo 对象 | ✅ 本身就是 mock |
| 在线留言提交 | local-persist | localStorage 存储留言记录，key=`__cmsc_contact_messages`，提交后 toast 反馈 | 无 |

---

## 功能列表

> **说明**：每个页面/区块的功能点，供页面生成使用

- **页面**: 首页 (`/`)
  - **页面目标**: 建立学校第一印象，引导访客深入了解
  - **功能点**:
    - **Hero 轮播区**: 全宽轮播展示学校形象图（3-4 张），含学校名称与标语叠加层，支持自动播放与手动切换
    - **校训展示**: 居中大字展示校训，配合简短愿景描述
    - **重要通知**: 横向滚动或列表展示 3-5 条最新通知，每条可点击查看详情
    - **新闻动态**: 展示最新 4-6 条新闻卡片（含封面图、标题、日期、摘要），点击跳转新闻详情页
    - **校园风采**: 图片网格展示校园风光/活动照片（6-8 张），支持灯箱放大查看
    - **数据亮点**: 展示学校关键数字（建校年份、院系数、在校生数、合作企业数等），数字滚动动画
    - **快速入口**: 底部放置招生简章、院系设置、联系我们等快捷按钮

- **页面**: 学校概况 (`/about`)
  - **页面目标**: 全面介绍学校背景、理念与实力
  - **功能点**:
    - **学校简介**: 图文混排介绍学校定位、特色与成就
    - **历史沿革**: 时间轴组件展示 2005 年至今的关键里程碑事件
    - **办学理念**: 卡片式展示办学使命、愿景、核心价值观
    - **领导团队**: 网格展示校领导（校长、副校长等），含照片、姓名、职务、简介
    - **校园风光**: 图片画廊展示校园建筑与环境，支持分类筛选（教学楼/图书馆/体育场等）

- **页面**: 院系设置 (`/departments`)
  - **页面目标**: 展示各学院信息，引导访客了解专业方向
  - **功能点**:
    - **院系卡片网格**: 展示 5 个学院卡片（计算机科学与技术学院、软件工程学院、人工智能学院、数据科学学院、网络空间安全学院），每张卡片含图标、名称、简介、专业数量
    - **院系筛选**: 顶部可选标签筛选（全部/工学/理学）
    - **院系详情入口**: 点击卡片跳转院系详情页 `/departments/:id`

- **页面**: 院系详情 (`/departments/:id`)
  - **页面目标**: 深入展示单个学院的详细信息
  - **功能点**:
    - **院系 Banner**: 顶部展示学院名称、标语
    - **学院介绍**: 详细介绍学院历史、特色、研究方向
    - **专业方向列表**: 展示该学院下设的本科/硕士专业，含学位类型、学制
    - **关联师资**: 展示该学院部分教授头像与姓名，点击跳转教师详情

- **页面**: 师资力量 (`/faculty`)
  - **页面目标**: 展示优秀教师团队，体现学术实力
  - **功能点**:
    - **教师卡片网格**: 展示教师列表（8-12 位），每张卡片含头像、姓名、职称、研究方向、简介摘要
    - **分类筛选**: 按学院或职称（教授/副教授/讲师）筛选
    - **教师详情入口**: 点击卡片跳转教师详情页 `/faculty/:id`

- **页面**: 教师详情 (`/faculty/:id`)
  - **页面目标**: 展示教师完整学术背景与成果
  - **功能点**:
    - **教师基本信息**: 头像、姓名、职称、所属学院、联系方式
    - **个人简介**: 详细学术背景、研究方向
    - **研究成果**: 列表展示代表性论文、项目、获奖
    - **返回列表**: 面包屑导航返回师资力量页

- **页面**: 招生就业 (`/admissions`)
  - **页面目标**: 为潜在学生和企业提供招生与就业信息
  - **功能点**:
    - **Tab 切换**: 招生简章 / 专业介绍 / 就业指导 / 校企合作 四个 Tab
    - **招生简章 Tab**: 展示招生政策、报名条件、录取流程、重要日期
    - **专业介绍 Tab**: 列表展示各专业详细信息（培养目标、课程设置、就业方向）
    - **就业指导 Tab**: 展示就业服务内容、职业规划资源、就业数据统计
    - **校企合作 Tab**: Logo 墙展示合作企业，附合作项目简介

- **页面**: 校园生活 (`/campus-life`)
  - **页面目标**: 展示丰富多彩的校园文化与生活环境
  - **功能点**:
    - **学生活动**: 图文卡片展示近期校园活动（文化节、科技竞赛、运动会等）
    - **社团组织**: 网格展示学生社团（编程社、机器人社、AI 俱乐部等），含社团名称、Logo、简介
    - **校园设施**: 图片 + 文字介绍图书馆、实验室、体育馆、创客空间等
    - **住宿餐饮**: 展示宿舍环境、食堂菜品图片与介绍

- **页面**: 新闻动态 (`/news`)
  - **页面目标**: 集中展示学校新闻与学术活动
  - **功能点**:
    - **新闻列表**: 左侧主列表展示新闻（含封面图、标题、日期、分类标签、摘要），支持分页
    - **分类筛选**: 右侧边栏按分类筛选（学校新闻/学术讲座/重要活动）
    - **热门新闻**: 右侧边栏展示热门新闻排行
    - **新闻详情入口**: 点击列表项跳转新闻详情页 `/news/:id`

- **页面**: 新闻详情 (`/news/:id`)
  - **页面目标**: 完整阅读单篇新闻内容
  - **功能点**:
    - **文章内容**: 标题、发布日期、分类标签、正文（富文本）
    - **相关新闻**: 底部推荐 3 篇相关新闻卡片
    - **返回列表**: 面包屑导航返回新闻动态页

- **页面**: 联系我们 (`/contact`)
  - **页面目标**: 提供联系渠道与地理位置信息
  - **功能点**:
    - **联系信息**: 展示学校地址、电话、邮箱、工作时间
    - **地图展示**: 嵌入地图组件展示学校位置（使用静态地图占位）
    - **在线留言表单**: 姓名、邮箱、主题、留言内容输入框，提交后 toast 提示并存储到 localStorage
    - **社交媒体链接**: 展示微信公众号、微博、B站等图标链接

---

## 数据共享配置

| 存储键名 | 数据说明 | 使用页面 |
|---------|---------|---------|
| `__cmsc_contact_messages` | 在线留言记录，类型为 `IContactMessage[]` | 联系我们页 |

```ts
interface IContactMessage {
  /** 留言唯一标识 */
  id: string;
  /** 留言者姓名 */
  name: string;
  /** 留言者邮箱 */
  email: string;
  /** 留言主题 */
  subject: string;
  /** 留言内容 */
  message: string;
  /** 提交时间 */
  submittedAt: string;
}

-------

<scene_type>prototype-app</scene_type>

# UI 设计指南

## 1. 设计推导依据

- **参考意图**: Free Direction —— 无参考材料，从学校品牌语义与高等教育官网场景自主建立视觉系统
- **核心情绪 / 应用类型**: 高等计算机教育机构的专业权威感与面向未来的创新活力 —— 内容站 + 品牌形象
- **独特记忆点**: 代码网格底纹与精密排版构成的"数字学术殿堂"气质 —— 蓝色不是企业蓝，而是深空探索蓝，配合极简白空间传递理性与前瞻

## 2. Art Direction

- **方向名**: Digital Academic · 数字学术
- **Design Style**: Swiss Minimalist 瑞士极简 + 微科技装饰 —— 高等教育的秩序感与计算机学科的精密感结合；大面积留白承载学术权威，局部代码网格、数据线条和几何装饰暗示计算基因
- **DNA 参数**: 圆角 subtle（`rounded-md`）/ 阴影 subtle（`shadow-sm`，卡片微浮）/ 间距 spacious（`gap-6`/`p-8`）/ 字体方向 无衬线为主，标题可引入几何感 / 装饰手法 代码网格底纹、细线分隔、数据点阵装饰
- **应用类型**: Content + Brand —— 多页内容站，信息层级清晰，Hero 区品牌展示，内页以阅读舒适度优先

## 3. Color System

**色彩关系**: 深空蓝主色 + 同色极浅学术底 + 纯白卡片承载面 + 暖灰辅助文字
**配色设计理由**: primary 用于 CTA、当前导航、关键标题锚点和品牌识别，传递科技深度与信任；bg 使用极浅蓝灰而非纯白，模拟学术纸张的微暖质感；text 保持高对比深灰，确保长文阅读舒适；accent 用于卡片 hover、菜单选中态和轻量反馈，不抢夺 primary 权重
**主色推导**: 蓝色系是用户明确要求，但避免通用企业蓝（`hsl(222 88% 51%)`）；选择更深邃的靛蓝（`hsl(226 70% 42%)`），色相偏紫微冷，暗示深度计算与探索精神，同时与纯白背景形成清晰对比
**使用比例**: 60% 中性（bg/card/border）/ 30% 辅助（accent/textMuted）/ 10% primary（CTA、导航激活、品牌锚点）

| 角色 | CSS 变量 | Tailwind Class | HSL 值 | 设计说明 |
|---|---|---|---|---|
| bg | `--background` | `bg-background` | hsl(220 20% 97%) | 极浅蓝灰学术底，模拟纸张微暖 |
| card | `--card` | `bg-card` | hsl(0 0% 100%) | 纯白卡片，与 bg 形成层次 |
| text | `--foreground` | `text-foreground` | hsl(220 15% 15%) | 深灰标题与正文，高对比可读 |
| textMuted | `--muted-foreground` | `text-muted-foreground` | hsl(220 10% 45%) | 辅助说明、日期、元信息 |
| primary | `--primary` | `bg-primary` / `text-primary` | hsl(226 70% 42%) | 深空靛蓝，CTA、导航激活、品牌锚点 |
| primaryForeground | `--primary-foreground` | `text-primary-foreground` | hsl(0 0% 100%) | primary 上的白色文字 |
| accent | `--accent` | `bg-accent` | hsl(226 30% 94%) | 极浅蓝底，hover/focus/选中态 |
| accentForeground | `--accent-foreground` | `text-accent-foreground` | hsl(226 50% 35%) | accent 上的文字，权重低于 primary |
| border | `--border` | `border-border` | hsl(220 12% 88%) | 细线分隔，卡片与输入框边界 |

**语义色提示**:
- 成功：`bg-success: hsl(150 55% 94%)` / `border-success: hsl(150 50% 75%)` / `text-success: hsl(150 60% 30%)` —— 录取通知、提交成功
- 警告：`bg-warning: hsl(38 80% 94%)` / `border-warning: hsl(38 70% 75%)` / `text-warning: hsl(38 75% 35%)` —— 重要通知、截止提醒
- 错误：`bg-destructive: hsl(0 55% 94%)` / `border-destructive: hsl(0 50% 75%)` / `text-destructive: hsl(0 60% 35%)` —— 表单错误
- 语义色饱和度与 primary（S=70%）对齐，不刺眼不跳脱

## 4. 字体与节奏

- **font-display**: Noto Sans SC —— 中文标题清晰有力，几何感与学术气质匹配
- **font-body**: Inter —— 西文正文与数字，与 Noto Sans SC 搭配和谐，阅读舒适
- **字号**: H1 text-5xl ~ text-6xl；H2 text-2xl ~ text-3xl；body text-base；muted text-sm
- **圆角**: subtle（`rounded-md`）—— 卡片、按钮、输入框统一微圆角，保持学术正式感，不过度柔和

## 5. 全局布局契约

- **Reference Layout Use**: 按需求结构推导 —— 首页 Hero → 校训 → 通知/新闻 → 校园风采；内页标准内容流
- **Page / Section Order**: 与需求文档 8 个页面 1:1 对齐；首页按叙事顺序：Hero 品牌形象 → 校训金句 → 重要通知卡片 → 新闻动态网格 → 校园风采画廊
- **Standard Content Zone**: `max-w-6xl`（1280px）+ `mx-auto` —— 适合多列内容、新闻网格、院系卡片布局，同时保持正文阅读行长
- **Shell / Frame Alignment**: 内容容器与顶部导航同宽，共享 max-w-6xl 约束
- **Padding & Rhythm**: `px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20`，section 间距 16-20
- **Full-bleed Zones**: Hero 区背景全宽，内部文字和 CTA 受 max-w-6xl 约束；校园风光画廊可全宽轮播
- **Local Narrowing**: 学校概况正文、招生简章详情、联系表单在统一容器内收窄至 `max-w-3xl`（768px），优化阅读体验
- **Overflow Strategy**: 院系对比表、师资列表使用 `overflow-x-auto`；不放大全局 max-w
- **Flexibility Boundary**: 允许移动端 padding 缩至 `px-4`、卡片内边距微调、网格列数响应式变化；全局 max-w、圆角系统、主色和阴影语言保持一致

## 6. 视觉与动效

- **装饰**: 代码网格底纹（Hero 背景局部）、细线几何分隔、数据点阵装饰（section 标题旁）
- **阴影/边界**: 轻阴影（`shadow-sm`），卡片微浮于 bg 之上；border 用于卡片边界和输入框
- **动效**: 精致 —— Hero 标题逐行淡入、卡片 hover 微升（`translateY(-2px)` + 阴影加深）、导航下划线滑动、页面切换 fade；不抢学术严肃性

## 7. 组件原则

- 按钮、表单、菜单、卡片必须有 Default / Hover / Active / Focus / Disabled 状态
- Primary 按钮使用 `bg-primary text-primary-foreground`，承担 CTA（报名、查看详情、提交留言）
- Secondary/Outline 使用 `border-border text-foreground`，hover 时 `bg-accent`
- 导航当前页使用 primary 下划线或背景标记，菜单项 hover 使用 accent
- 加载态使用 Skeleton（`bg-accent`），空状态使用图标 + textMuted 说明文字，延续学术克制感

## 8. Image Direction

- **Image Role**: Hero 背景图（首页）、校园风光画廊（学校概况）、院系配图（院系设置）、教授肖像（师资力量）、学生活动场景（校园生活）
- **Image Art Direction**: 
  - Hero：深空蓝渐变叠加现代校园建筑剪影，光线从左上角射入，玻璃幕墙反射冷蓝光，前景留白承载标题文字；构图稳定对称，传递学术殿堂的庄严与未来感
  - 校园风光：暖调自然光下的校园实景风格，绿植与建筑交错，浅景深突出主体，避免过度 HDR
  - 院系配图：抽象数据可视化与计算设备特写，暗调背景 + 霓虹蓝数据线条，强调科技深度
  - 教授肖像：柔和侧光、浅色背景、半身构图，表情自然专业，统一暖灰调
  - 学生活动：自然光抓拍，真实互动场景，避免摆拍感，色调温暖
- **Image Prompt Keywords**: modern university campus architecture at blue hour, glass facade reflection, academic building silhouette, warm natural light, shallow depth of field, professional portrait with soft side lighting, abstract data visualization with neon blue lines, computing lab close-up, candid student activity scene
- **Image Avoidance**: 通用商务素材图库感（握手、假笑学生、白板前摆拍）、过度 HDR 饱和风景、无主题抽象渐变图、AI 生成感明显的人物（手指异常、表情僵硬）、与计算机学科无关的通用校园素材

## 9. Anti-patterns

- **Split personality**: 首页 Hero 深空蓝，内页退回默认灰白；全站共享 bg/card/primary 色板
- **Phantom tokens**: 编造 `--sidebar`、`--tooltip` 等未定义变量；只使用已定义 9 个基础色角色
- **Default SaaS drift**: 回到通用蓝按钮（`hsl(222 88% 51%)`）和无意义卡片堆叠；用深空靛蓝和学术排版塑造界面
- **Invisible interaction**: 导航 hover、卡片点击、表单 focus 有视觉反馈，但 focus-visible 丢失；所有交互元素必须有键盘可见状态
- **Mono-hue tyranny**: primary 铺满导航、按钮、图标、链接、标签；按 60-30-10 把 primary 收回到 CTA 与品牌锚点，导航当前页用 primary 下划线而非满背景，图标用 text-foreground
- **Status color drift**: 成功绿饱和度过高（S>70%），与克制 primary 不协调；语义色饱和度与 primary（S=70%）对齐 ±15%
- **Over-decorated academic**: 过度使用校徽、绶带、橄榄枝等传统学术符号；用代码网格、数据线条、几何分隔替代，保持现代计算机学院定位