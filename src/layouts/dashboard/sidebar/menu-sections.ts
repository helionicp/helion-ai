import { ElementType } from 'react';
import {
  PiSquaresFourDuotone,
  PiChartLineUpDuotone,
  PiStarDuotone,
  PiShieldCheckDuotone,
  PiUserPlusDuotone,
  PiLockKeyDuotone,
  PiChatCenteredDotsDuotone,
  PiTableDuotone,
  PiKanbanDuotone,
  PiUsersDuotone,
  PiMarkerCircleDuotone,
} from 'react-icons/pi';

import { routes } from './../../../routes/paths';

interface MenuItem {
  header: string;
  section: {
    name: string;
    href: string;
    icon: ElementType;
    dropdownItems?: {
      name: string;
      href: string;
      badge?: string;
    }[];
  }[];
}

export const menu: MenuItem[] = [
  {
    header: 'Overview',
    section: [
      {
        name: 'Welcome',
        href: routes.dashboard.home,
        icon: PiStarDuotone,
      },
    ],
  },

  {
    header: 'Apps',
    section: [
      {
        name: 'Marketplace',
        href: routes.dashboard.apps.marketplace,
        icon: PiMarkerCircleDuotone,
      },
      {
        name: 'Chat',
        href: routes.dashboard.apps.chat,
        icon: PiChatCenteredDotsDuotone,
      },
    ],
  },

  {
    header: 'Management',
    section: [
      {
        name: 'Customers',
        icon: PiUsersDuotone,
        href: routes.dashboard.management.customers.root,
        dropdownItems: [
          {
            name: 'List',
            href: routes.dashboard.management.customers.list,
          },
        ],
      },
    ],
  },
];
