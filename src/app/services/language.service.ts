import { Injectable } from '@angular/core';
import { Language } from '../shared/models/language';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  languages: Language[] = [];

  private LanguageList = new BehaviorSubject<Language[]>([]);
  languageList$ = this.LanguageList.asObservable();

  constructor(
    /* private translate: TranslateService, */
  ) {
   /*  this.initialLanguage(); */
 /*    translate.setDefaultLang('en');
    const currentLang = this.getCurrentLang();
    if (currentLang) {
      translate.use(currentLang.uniqueSeoCode);
      this.changeDirection(currentLang.dir);
    
    } else {
      translate.use('en');
      this.changeDirection('ltr');
      localStorage.setItem('language', 'en');
      this.setLangInHtmlAttr('en');
    } */


  }
/*   getCurrentLang(): Language {
    const currentLangUniCode = localStorage.getItem('language')
    let currentLang: Language = this.getDefaultLang();

    if (currentLangUniCode) {
      for (const item of this.languages) {
        if (item.uniqueSeoCode === currentLangUniCode) {
          currentLang = item;
          break;
        }
      }
    }
    return currentLang
  } */

 /*  changeDirection(dir: string): void {
    if (!dir) { dir = 'rtl'; }
    if (dir === 'rtl') {
      document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
      document.getElementsByTagName('body')[0].setAttribute('dir', 'rtl');
    } else {
      document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr');
      document.getElementsByTagName('body')[0].setAttribute('dir', 'ltr');
    }
  } */

/*   private getDefaultLang() {
    let defaultLang: Language = {
      id: 1,
      lang: 'en',
      name: 'English',
      dir: 'ltr',
      flagImageFileName: 'us.svg',
      uniqueSeoCode: 'en'
    }
    return defaultLang
  }
  private initialLanguage() {
    this.languages = [{
      id: 1,
      lang: 'en',
      name: 'English',
      dir: 'ltr',
      flagImageFileName: 'us.svg',
      uniqueSeoCode: 'en'
    },
    {
      id: 2,
      lang: 'ar',
      name: 'العربی',
      dir: 'rtl',
      flagImageFileName: 'ae.svg',
      uniqueSeoCode: 'ar'
    },

    ];
    this.LanguageList.next(this.languages);
  } */

 /*  private setLangInHtmlAttr(lang: string): void {
    document.getElementsByTagName('html')[0].setAttribute('lang', lang);
  } */

/*   setLanguage(lang: Language): void {
    if (lang &&
        lang.uniqueSeoCode !== this.getCurrentLang().uniqueSeoCode
    ) {

        localStorage.setItem('language', lang.uniqueSeoCode);
        location.reload();
    }
} */

}
