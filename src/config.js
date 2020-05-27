/**
 * Add your config changes here.
 * @module config
 * @example
 * export const settings = {
 *   ...defaultSettings,
 *   port: 4300,
 *   listBlockTypes: {
 *     ...defaultSettings.listBlockTypes,
 *     'my-list-item',
 *   }
 * }
 */

import {
  settings as defaultSettings,
  views as defaultViews,
  widgets as defaultWidgets,
  blocks as defaultBlocks,
} from '@plone/volto/config';

import { PersonView, PresentationView, TrainingView } from '@package/components';

export const settings = {
  ...defaultSettings,
};

export const views = {
  ...defaultViews,
  contentTypesViews: {
    training_class: TrainingView,
    ...defaultViews.contentTypesViews,
    person: PersonView,
    presentation: PresentationView
  },
};

export const widgets = {
  ...defaultWidgets,
};

export const blocks = {
  ...defaultBlocks,
};
