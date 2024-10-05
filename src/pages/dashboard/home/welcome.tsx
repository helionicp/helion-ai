import { Title, Text, Group, Button, Stack, Avatar, Card, SimpleGrid } from '@mantine/core';
import { PiRocketLaunch, PiChatCircleDots, PiMagnifyingGlass } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { routes } from './../../../routes/paths';
import classes from './welcome.module.css';
import { AnimatedLogo } from './animated-logo';

export function Welcome() {
  return (
    <div className={classes.wrapper}>
      <AnimatedLogo className={classes.logo} />
      <Stack align="center" mt="xl">
        <Title className={classes.title} ta="center">
          Find{' '}
          <Text inherit variant="gradient" component="span" gradient={{ from: 'blue', to: 'cyan' }}>
            AI Agents
          </Text>{' '}
          to collaborate with
        </Title>
        <Text c="dimmed" ta="center" size="xl" maw={580} mx="auto" mt="xl">
          Discover, trade, and collaborate on cutting-edge AI models and services. Join the future of artificial intelligence today!
        </Text>
        
        <Group mt={50}>
          <Button
            component={Link}
            to={routes.dashboard.apps.marketplace}
            size="lg"
            leftSection={<PiRocketLaunch size="1.2rem" />}
          >
            Explore AI Agents
          </Button>
          <Button
            component={Link}
            to="/video"
            variant="light"
            size="lg"
            leftSection={<PiChatCircleDots size="1.2rem" />}
          >
            See how it works
          </Button>
        </Group>

        <SimpleGrid cols={3} spacing="lg" mt={50}>
          {featuredAgents.map((agent) => (
            <AgentCard key={agent.id} {...agent} />
          ))}
        </SimpleGrid>
      </Stack>
    </div>
  );
}

interface AgentCardProps {
  id: string;
  name: string;
  avatar: string;
  location: string;
  followers: number;
  category: string;
  price: number;
}

function AgentCard({ name, avatar, location, followers, category, price }: AgentCardProps) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Avatar src={avatar} size={120} mx="auto" mt="md" />
      </Card.Section>

      <Text ta="center" fw={500} mt="md">
        {name}
      </Text>
      <Text ta="center" size="sm" c="dimmed">
        {location}
      </Text>

      <Group mt="md" justify="space-between">
        <Text size="sm">{followers} Followers</Text>
        <Text size="sm" c="blue">
          {category}
        </Text>
      </Group>

      <Text ta="center" fw={500} size="lg" mt="md">
        ${price}
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md">
        Send message
      </Button>
    </Card>
  );
}

const featuredAgents: AgentCardProps[] = [
  {
    id: '1',
    name: 'AI Assistant Pro',
    avatar: 'https://example.com/avatar1.jpg',
    location: 'Global',
    followers: 870000,
    category: 'Productivity',
    price: 5200,
  },
  {
    id: '2',
    name: 'DataBot Analyzer',
    avatar: 'https://example.com/avatar2.jpg',
    location: 'Worldwide',
    followers: 440000,
    category: 'Data Analysis',
    price: 2400,
  },
  {
    id: '3',
    name: 'CreativeAI Designer',
    avatar: 'https://example.com/avatar3.jpg',
    location: 'International',
    followers: 315000,
    category: 'Design',
    price: 2150,
  },
];
