// EXPORTS: useLocalizedData, getLocalizedData
import { useTranslation } from '@/i18n/I18nContext';
import { DEFAULT_LANGUAGE, type Language } from '@/i18n/translations';

/**
 * 根据当前语言从多语言数据对象中获取对应的数据
 * @param data 多语言数据对象 Record<Language, T>
 * @param language 当前语言
 * @returns 对应语言的数据，如果不存在则返回默认语言的数据
 */
export function getLocalizedData<T>(
  data: Record<Language, T>,
  language: Language
): T {
  return data[language] ?? data[DEFAULT_LANGUAGE];
}

/**
 * Hook 版本：根据当前语言从多语言数据对象中获取对应的数据
 * @param data 多语言数据对象 Record<Language, T>
 * @returns 对应语言的数据
 */
export function useLocalizedData<T>(data: Record<Language, T>): T {
  const { language } = useTranslation();
  return getLocalizedData(data, language);
}
