// EXPORTS: IContactInfo, IContactForm, MOCK_CONTACT, useContactInfo, useContactForm
import type { Language } from '@/i18n/translations';
import { getLocalizedData, useLocalizedData } from './index';

export interface IContactInfo {
  address: string;
  addressSub: string;
  phone: string;
  phoneSub: string;
  rectorPhone: string;
  rectorPhoneSub: string;
  email: string;
  emailSub: string;
  workingHours: string;
  workingHoursSub: string;
  mapLocation: { lat: number; lng: number };
}

export interface IContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// ── 中文 ──
const CONTACT_INFO_ZH: IContactInfo = {
  address: '吉尔吉斯共和国 比什凯克市 卡拉萨耶夫街54号',
  addressSub: '中央国际医学院 主校区',
  phone: '+996 (3222) 52559',
  phoneSub: '工作日 8:30-17:30',
  rectorPhone: '+996 (312) 46-18258',
  rectorPhoneSub: '校长办公室',
  email: 'info@cmsc.edu.kg',
  emailSub: '我们将在24小时内回复',
  workingHours: '周一至周五 8:30-17:30',
  workingHoursSub: '法定节假日除外',
  mapLocation: { lat: 42.8746, lng: 74.5698 }
};

// ── 英文 ──
const CONTACT_INFO_EN: IContactInfo = {
  address: '54 Karasaeva Street, Bishkek, Kyrgyz Republic',
  addressSub: 'Central International Medical College - Main Campus',
  phone: '+996 (3222) 52559',
  phoneSub: 'Weekdays 8:30-17:30',
  rectorPhone: '+996 (312) 46-18258',
  rectorPhoneSub: 'Rector\'s Office',
  email: 'info@cmsc.edu.kg',
  emailSub: 'We reply within 24 hours',
  workingHours: 'Mon-Fri 8:30-17:30',
  workingHoursSub: 'Except public holidays',
  mapLocation: { lat: 42.8746, lng: 74.5698 }
};

// ── 吉尔吉斯语 ──
const CONTACT_INFO_KY: IContactInfo = {
  address: 'Карасаев көчөсү, 54, Бишкек, Кыргыз Республикасы',
  addressSub: 'Централдык Эл аралык Медицина Колледжи - Негизги кампус',
  phone: '+996 (3222) 52559',
  phoneSub: 'Иш күндөрү 8:30-17:30',
  rectorPhone: '+996 (312) 46-18258',
  rectorPhoneSub: 'Ректордук бөлмө',
  email: 'info@cmsc.edu.kg',
  emailSub: '24 сааттын ичинде жооп беребиз',
  workingHours: 'Дүйшөмбү-Жума 8:30-17:30',
  workingHoursSub: 'Майрам күндөрүнөн тышкары',
  mapLocation: { lat: 42.8746, lng: 74.5698 }
};

// ── 俄语 ──
const CONTACT_INFO_RU: IContactInfo = {
  address: 'ул. Карасаева, 54, Бишкек, Кыргызская Республика',
  addressSub: 'Центральный Международный Медицинский Колледж - Главный кампус',
  phone: '+996 (3222) 52559',
  phoneSub: 'Будние дни 8:30-17:30',
  rectorPhone: '+996 (312) 46-18258',
  rectorPhoneSub: 'Приёмная ректора',
  email: 'info@cmsc.edu.kg',
  emailSub: 'Отвечаем в течение 24 часов',
  workingHours: 'Пн-Пт 8:30-17:30',
  workingHoursSub: 'Кроме праздничных дней',
  mapLocation: { lat: 42.8746, lng: 74.5698 }
};

// ── Exports ──
export const MOCK_CONTACT: Record<Language, IContactInfo> = {
  zh: CONTACT_INFO_ZH,
  en: CONTACT_INFO_EN,
  ky: CONTACT_INFO_KY,
  ru: CONTACT_INFO_RU,
};

export function useContactInfo(): IContactInfo {
  return useLocalizedData(MOCK_CONTACT);
}

export function getContactInfo(language: Language): IContactInfo {
  return getLocalizedData(MOCK_CONTACT, language);
}
