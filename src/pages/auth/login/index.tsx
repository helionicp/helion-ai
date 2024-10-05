import { Button, Divider, Group, Stack, Text, Title } from '@mantine/core';
import { PiXLogoDuotone as XIcon, PiGoogleLogoDuotone as GoogleIcon } from 'react-icons/pi';

import { routes } from './../../../routes';
import { UnderlineShape } from './../../../components/underline-shape';
import { Page } from './../../../components/page';
import { LoginForm } from './login-form';

export default function LoginPage() {
  return (
    <Page title="Login">
      <Stack gap="xl">
        <Stack>
          <Title order={2}>
            Welcome back! Please{' '}
            <Text fz="inherit" fw="inherit" component="span" pos="relative">
              Sign in
              <UnderlineShape
                c="blue"
                left="0"
                pos="absolute"
                h="0.625rem"
                bottom="-1rem"
                w="7rem"
              />
            </Text>{' '}
            to continue.
          </Title>
          <Text fz="sm" c="dimmed">
            By signing up, you will gain access to exclusive content, special offers, and be the
            first to hear about exciting news and updates.
          </Text>
        </Stack>

        <Group grow>
          <Button leftSection={<XIcon size="1rem" />} variant="outline" color="gray">
            Login with X
          </Button>
          <Button leftSection={<GoogleIcon size="1rem" />} variant="outline" color="gray">
            Login with Google
          </Button>
        </Group>

        <Divider label="OR" labelPosition="center" />

        <LoginForm />
      </Stack>
    </Page>
  );
}
