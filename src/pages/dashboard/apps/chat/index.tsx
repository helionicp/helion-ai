import { PiChatCenteredDotsDuotone as ChatIcon } from 'react-icons/pi';

import { Page } from './../../../../components/page';
import { PageHeader } from './../../../../components/page-header';
import { routes } from './../../../../routes';

const breadcrumbs = [
  { label: 'Dashboard', href: routes.dashboard.root },
  { label: 'Apps', href: routes.dashboard.apps.root },
  { label: 'Chat' },
];

export default function ChatPage() {
  return (
    <Page title="Chat">
      <PageHeader
        title={['Chat ', <ChatIcon key="chat" color="var(--mantine-color-blue-6)" />]}
        breadcrumbs={breadcrumbs}
      />

      {/* Add your chat component here */}
      <div>Chat content goes here</div>
    </Page>
  );
}
