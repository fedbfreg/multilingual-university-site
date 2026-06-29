import { useState, type FormEvent } from 'react';
import { toast } from 'sonner';
import { scopedStorage } from '@lark-apaas/client-toolkit-lite';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send } from 'lucide-react';
import { useTranslation } from '@/i18n/I18nContext';

interface IContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  submittedAt: string;
}

const STORAGE_KEY = '__cmsc_contact_messages';

function loadMessages(): IContactMessage[] {
  try {
    const raw = scopedStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as IContactMessage[];
  } catch {
    return [];
  }
}

function saveMessages(messages: IContactMessage[]) {
  scopedStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
}

export default function ContactFormSection() {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      toast.error(t('contact.formValidationError'));
      return;
    }

    setSubmitting(true);

    const newMessage: IContactMessage = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
      submittedAt: new Date().toISOString(),
    };

    try {
      const existing = loadMessages();
      saveMessages([newMessage, ...existing]);
      toast.success(t('contact.formSuccess'));
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch {
      toast.error(t('contact.formError'));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="w-full py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* 左侧提示信息 */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              {t('contact.formTitle')}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t('contact.formDescription')}
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 size-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-xs text-primary font-semibold">1</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {t('contact.formStep1')}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 size-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-xs text-primary font-semibold">2</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {t('contact.formStep2')}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 size-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-xs text-primary font-semibold">3</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {t('contact.formStep3')}
                </p>
              </div>
            </div>
          </div>

          {/* 右侧表单 */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="lg:col-span-3 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="contact-name">
                  {t('contact.formName')} <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('contact.formEmailPlaceholder')}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-subject">
                {t('contact.formSubject')} <span className="text-destructive">*</span>
              </Label>
              <Input
                id="contact-subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder={t('contact.formSubjectPlaceholder')}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-message">
                {t('contact.formMessage')} <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="contact-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t('contact.formMessagePlaceholder')}
                rows={5}
                required
              />
            </div>

            <Button
              type="submit"
              disabled={submitting}
              className="w-full sm:w-auto"
            >
              {submitting ? (
                <>
                  <span className="mr-2">{t('contact.formSubmitting')}</span>
                </>
              ) : (
                <>
                  <Send className="size-4 mr-2" />
                  {t('contact.formSubmit')}
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
