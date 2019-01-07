import { BasePage } from '../pages/basePage';

const pages: { [key: string]: BasePage; } = {};

export function getPage<T extends BasePage>(pageClazz: { new(): T }): T {
  if (!pages[pageClazz.toString()]) {
    const page = new pageClazz();
    pages[pageClazz.toString()] = page;
  }
  return pages[pageClazz.toString()] as T;
}
