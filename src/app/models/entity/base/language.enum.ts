import {titlecase} from "../../../utils/string.util";

export enum Language {
  ENGLISH = "en",
  FRENCH = "fr",
  GERMAN = "de"
}

export const languageOptions = Object.keys(Language).map(k => {
  return {name: titlecase(k), value: k}
});
