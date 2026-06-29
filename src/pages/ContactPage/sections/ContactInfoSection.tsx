import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from '@/i18n/I18nContext';

export default function ContactInfoSection() {
  const { t } = useTranslation();

  const CONTACT_ITEMS = [
    {
      icon: MapPin,
      label: t('contact.addressLabel'),
      value: t('contact.address'),
      subValue: t('contact.addressSub'),
    },
    {
      icon: Phone,
      label: t('contact.phoneLabel'),
      value: t('contact.phone'),
      subValue: t('contact.phoneSub'),
    },
    {
      icon: Mail,
      label: t('contact.emailLabel'),
      value: t('contact.email'),
      subValue: t('contact.emailSub'),
    },
    {
      icon: Clock,
      label: t('contact.workingHoursLabel'),
      value: t('contact.workingHours'),
      subValue: t('contact.workingHoursSub'),
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground">{t('contact.title')}</h2>
      <div className="space-y-3">
        {CONTACT_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.label} className="border-border/60">
              <CardContent className="flex items-start gap-4 p-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="size-5 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-foreground">
                    {item.value}
                  </p>
                  {item.subValue && (
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {item.subValue}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
