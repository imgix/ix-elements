import { i18n } from './utils';
import { getPlayerVersion } from './helpers';
import type { DevlogOptions } from './types';

const prefix = `[ix-player ${getPlayerVersion()}]`;

export function log(...args: any[]) {
  console.log(prefix, ...args);
}

export function warn(...args: any[]) {
  console.warn(prefix, ...args);
}

export function error(...args: any[]) {
  console.error(prefix, ...args);
}

export function devlog(opts: DevlogOptions) {
  let message = opts.message ?? '';
  if (opts.file) {
    const githubErrorsBase = 'https://github.com/imgix/ix-elements/blob/main/errors/';
    message += ` ${i18n(`Read more: `)}\n${githubErrorsBase}${opts.file}`;
  }
  warn(message);
}
