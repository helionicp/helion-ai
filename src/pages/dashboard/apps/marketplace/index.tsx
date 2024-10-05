import { PiBarricadeDuotone as WipIcon } from 'react-icons/pi';

import { Page } from './../../../../components/page';
import { PageHeader } from './../../../../components/page-header';
import { routes } from './../../../../routes';
import { Marketplace } from './marketplace';

const breadcrumbs = [
  { label: 'Dashboard', href: routes.dashboard.root },
  { label: 'Apps', href: routes.dashboard.apps.root },
  { label: 'Marketplace' },
];

export default function MarketplacePage() {
  return (
    <Page title="Marketplace">
      <PageHeader
        title={['Marketplace ', <WipIcon key="wip" color="var(--mantine-color-yellow-6)" />]}
        breadcrumbs={breadcrumbs}
      />

      <Marketplace />
    </Page>
  );
}
