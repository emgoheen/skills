// As of zone.js 0.13.1, the following import is required for `spyOn` to continue to work in unit tests (see https://github.com/angular/angular/issues/50756)
import 'zone.js/plugins/zone-legacy';
import 'jest-preset-angular/setup-jest';
import '@testing-library/jest-dom';
import { TextEncoder } from 'util';

global.TextEncoder = TextEncoder;
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

getTestBed().resetTestEnvironment();
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
  { teardown: { destroyAfterEach: false } },
);
