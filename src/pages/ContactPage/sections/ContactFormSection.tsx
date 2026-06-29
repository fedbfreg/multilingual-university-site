import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useTranslation } from '@/i18n/I18nContext';

export default function ContactFormSection() {
  const { t } = useTranslation();

  return (
    <section className="w-full">
      <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          {t('contact.formTitle')}
        </h2>
        <p className="text-muted-foreground mb-6">
          {t('contact.formDescription')}
        </p>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="space-y-5"
        >
          {/* Web3Forms 配置字段 */}
          <input type="hidden" name="access_key" value="c73bc7c2-e316-4e86-b97a-abdc73e88488" />
          <input type="hidden" name="subject" value="CMSC 网站留言" />
          <input type="hidden" name="from_name" value="CMSC 官网联系表单" />
          <input type="hidden" name="redirect" value="https://multilingual-university-site.pages.dev/contact?success=true" />
          <input type="hidden" name="template" value="table" />

          {/* 姓名 + 邮箱 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="contact-name">
                {t('contact.formName')} <span className="text-destructive">*</span>
              </Label>
              <Input
                id="contact-name"
                name="name"
                type="text"
                placeholder={t('contact.formNamePlaceholder')}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-email">
                {t('contact.formEmail')} <span className="text-destructive">*</span>
              </Label>
              <Input
                id="contact-email"
                name="email"
                type="email"
                placeholder={t('contact.formEmailPlaceholder')}
                required
              />
            </div>
          </div>

          {/* 电话 + 主题 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="contact-phone">
                {t('contact.formPhone')}
              </Label>
              <Input
                id="contact-phone"
                name="phone"
                type="tel"
                placeholder={t('contact.formPhonePlaceholder')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-subject">
                {t('contact.formSubject')} <span className="text-destructive">*</span>
              </Label>
              <Input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder={t('contact.formSubjectPlaceholder')}
                required
              />
            </div>
          </div>

          {/* 留言内容 */}
          <div className="space-y-2">
            <Label htmlFor="contact-message">
              {t('contact.formMessage')} <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="contact-message"
              name="message"
              placeholder={t('contact.formMessagePlaceholder')}
              rows={5}
              required
            />
          </div>

          {/* 提交按钮 */}
          <Button
            type="submit"
            className="w-full sm:w-auto"
          >
            <Send className="size-4 mr-2" />
            {t('contact.formSubmit')}
          </Button>

          {/* 提示文字 */}
          <p className="text-xs text-muted-foreground">
            {t('contact.formPrivacyNote') || '提交即表示您同意我们的隐私政策。'}
          </p>
        </form>
      </div>
    </section>
  );
}
