import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import i18nConfig from '@/i18nConfig';

// This is a helper function that initializes the i18n instance and loads the translations, to be used in server component.
export default async function initTranslations(
  locale: string, // This is the locale that you want to load.
  namespaces: string[], // This is an array of namespaces that you want to load.
  i18nInstance?: any, // This is an optional parameter that allows you to pass an existing
  resources?: any // This is an optional parameter that allows you to pass translations directly to the function.
) {
  i18nInstance = i18nInstance || createInstance();

  i18nInstance.use(initReactI18next);

  // If resources are not passed, load them from the filesystem.
  if (!resources) {
    i18nInstance.use(
      resourcesToBackend(
        (language: any, namespace: any) =>
          import(`@/locales/${language}/${namespace}.json`)
      )
    );
  }

  // Initialize the i18n instance.
  await i18nInstance.init({
    lng: locale,
    resources,
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
    defaultNS: namespaces[0],
    fallbackNS: namespaces[0],
    ns: namespaces,
    preload: resources ? [] : i18nConfig.locales
  });

  // Return the i18n instance and the resources.
  return {
    i18n: i18nInstance,
    resources: i18nInstance.services.resourceStore.data,
    t: i18nInstance.t
  };
}
