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
    ...defaultViews.contentTypesViews,
    person: PersonView,
    presentation: PresentationView,
    training_class: TrainingView,
  },
};

export const widgets = {
  ...defaultWidgets,
};

import { AboutViewBlock, AboutEditBlock } from '@package/components';
import { CallforSponsorsViewBlock, CallforSponsorsEditBlock } from '@package/components';
import { CountdownViewBlock, CountdownEditBlock } from '@package/components';
import { PartyViewBlock, PartyEditBlock } from '@package/components';
import { ScheduleViewBlock, ScheduleEditBlock } from '@package/components';
import { SponsorsViewBlock, SponsorsEditBlock } from '@package/components';
import { VenueViewBlock, VenueEditBlock } from '@package/components';
import heroSVG from '@plone/volto/icons/hero.svg';

export const blocks = {
  ...defaultBlocks,
  blocksConfig: {
    ...defaultBlocks.blocksConfig,
    about: {
      id: 'about',
      title: 'About',
      icon: heroSVG,
      group: 'common',
      view: AboutViewBlock,
      edit: AboutEditBlock,
      restricted: false,
      mostUsed: false,
      blockHasOwnFocusManagement: true,
      sidebarTab: 0,
      security: {
        addPermission: [],
        view: [],
      },
    },
    callforsponsors: {
      id: 'callforsponsors',
      title: 'Call for sponsors',
      icon: heroSVG,
      group: 'common',
      view: CallforSponsorsViewBlock,
      edit: CallforSponsorsEditBlock,
      restricted: false,
      mostUsed: false,
      blockHasOwnFocusManagement: true,
      sidebarTab: 0,
      security: {
        addPermission: [],
        view: [],
      },
    },
    countdown: {
      id: 'countdown',
      title: 'Countdown',
      icon: heroSVG,
      group: 'common',
      view: CountdownViewBlock,
      edit: CountdownEditBlock,
      restricted: false,
      mostUsed: false,
      blockHasOwnFocusManagement: true,
      sidebarTab: 0,
      security: {
        addPermission: [],
        view: [],
      },
    },
    party: {
      id: 'party',
      title: 'Party',
      icon: heroSVG,
      group: 'common',
      view: PartyViewBlock,
      edit: PartyEditBlock,
      restricted: false,
      mostUsed: false,
      blockHasOwnFocusManagement: true,
      sidebarTab: 0,
      security: {
        addPermission: [],
        view: [],
      },
    },
    schedule: {
      id: 'schedule',
      title: 'Schedule',
      icon: heroSVG,
      group: 'common',
      view: ScheduleViewBlock,
      edit: ScheduleEditBlock,
      restricted: false,
      mostUsed: false,
      blockHasOwnFocusManagement: true,
      sidebarTab: 0,
      security: {
        addPermission: [],
        view: [],
      },
    },
    sponsors: {
      id: 'sponsors',
      title: 'Sponsors',
      icon: heroSVG,
      group: 'common',
      view: SponsorsViewBlock,
      edit: SponsorsEditBlock,
      restricted: false,
      mostUsed: false,
      blockHasOwnFocusManagement: true,
      sidebarTab: 0,
      security: {
        addPermission: [],
        view: [],
      },
    },
    venue: {
      id: 'venue',
      title: 'Venue',
      icon: heroSVG,
      group: 'common',
      view: VenueViewBlock,
      edit: VenueEditBlock,
      restricted: false,
      mostUsed: false,
      blockHasOwnFocusManagement: true,
      sidebarTab: 0,
      security: {
        addPermission: [],
        view: [],
      },
    },
  },
};
