import Image from "next/image";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
} from "@/components/ui/select";
import { buttonVariants } from "@/components/ui/button";
import { Language } from "@/types";
import { cn } from "@/lib/utils";
import { Languages } from "@/components/constants/Langues";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";
import { useState } from "react";

interface LanguageSwitcherProps {
  //   lang: string;
  //   setLang: (lang: string) => void;
  isMobile: boolean;
}

const LanguageSwitcher = ({
  //   lang,
  //   setLang,
  isMobile,
}: LanguageSwitcherProps) => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const currentLang = Languages.find(
    (language) => language.locale === currentLocale
  );

  const [lang, setLang] = useState(currentLang?.icon);

  const router = useRouter();
  const currentPathname = usePathname();

  const CustomOption = ({ country, icon }: Language) => (
    <div className="flex justify-center items-center space-x-3">
      <Image src={icon} alt={currentLang?.country!} width={25} height={25} />
      <span className="text-muted-foreground">{country}</span>
    </div>
  );

  const handleChangeLanguage = (lang: string) => {
    const newLocale = Languages.find(
      (language) => language.icon === lang
    )?.locale;

    // redirect to the new locale path
    if (currentLocale === i18nConfig.defaultLocale) {
      setLang(lang);
      router.push("/" + newLocale + currentPathname);
    } else {
      setLang(lang);
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <Select value={lang} onValueChange={handleChangeLanguage}>
      <SelectTrigger
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "p-0 border-none focus-visible:ring-offset-0 focus-visible:ring-0  bg-transparent hover:bg-muted/70"
        )}
      >
        {isMobile ? (
          <SelectValue>
            <Image src={lang!} alt="United Kingdom" width={30} height={30} />
          </SelectValue>
        ) : (
          <SelectValue
            placeholder={
              <CustomOption
                country={currentLang?.country}
                icon={currentLang?.icon!}
              />
            }
            className="border-none focus:ring-transparent"
          />
        )}
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {Languages.map((language) => (
            <SelectItem
              key={language.country}
              value={language.icon}
              aria-checked={false}
            >
              <CustomOption {...language} />
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitcher;
