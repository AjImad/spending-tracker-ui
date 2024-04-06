import {i18nRouter} from 'next-i18n-router';
import i18nConfig from './i18nConfig';

export function middleware(request: any) {
    console.log('middleware: ', i18nRouter(request, i18nConfig));
    return i18nRouter(request, i18nConfig);
}

export const config = {
    matcher: '/((?!api|static|.*\\..*|_next).*)',
}