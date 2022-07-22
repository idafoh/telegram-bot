import type { PassportElementErrorDataField } from './passport-element-error-data-field.js';
import type { PassportElementErrorFile } from './passport-element-error-file.js';
import type { PassportElementErrorFiles } from './passport-element-error-files.js';
import type { PassportElementErrorFrontSide } from './passport-element-error-front-side.js';
import type { PassportElementErrorReverseSide } from './passport-element-error-reverse-side.js';
import type { PassportElementErrorSelfie } from './passport-element-error-selfie.js';
import type { PassportElementErrorTranslationFile } from './passport-element-error-translation-file.js';
import type { PassportElementErrorTranslationFiles } from './passport-element-error-translation-files.js';
import type { PassportElementErrorUnspecified } from './passport-element-error-unspecified.js';

export type PassportElementError =
  | PassportElementErrorDataField
  | PassportElementErrorFrontSide
  | PassportElementErrorReverseSide
  | PassportElementErrorSelfie
  | PassportElementErrorFile
  | PassportElementErrorFiles
  | PassportElementErrorTranslationFile
  | PassportElementErrorTranslationFiles
  | PassportElementErrorUnspecified;
