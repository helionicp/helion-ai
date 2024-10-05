import { DndContext } from '@dnd-kit/core';
import { faker } from '@faker-js/faker';

import { createMany } from '../../../../utilities/factory';
import { randomInt } from '../../../../utilities/number';
import { generateId } from '../../../../utilities/uid';
import { MarketplaceBoard } from './marketplace-board';
import { MarketplaceCard } from './marketplace-card';
import { MarketplaceColumn } from './marketplace-column';

const titles = ['Todo', 'In progress', 'Read to test', 'Review', 'Done'];

const data = createMany(titles.length, (i) => ({
  id: generateId(),
  title: titles[i],
  cards: createMany(randomInt({ min: 2, max: 5 }), () => ({
    id: generateId(),
    priority: faker.helpers.arrayElement(['low', 'normal', 'high'] as const),
    tags: createMany(randomInt({ min: 1, max: 5 }), () => ({
      id: generateId(),
      label: faker.helpers.arrayElement(['mobile', 'backend', 'frontend']),
      color: faker.internet.color(),
    })),
    commentsCount: randomInt({ min: 0, max: 50 }),
    attachmentsCount: randomInt({ min: 0, max: 5 }),
    assignees: createMany(randomInt({ min: 3, max: 6 }), () => ({
      id: generateId(),
      displayName: faker.person.fullName(),
      avatarUrl: `https://i.pravatar.cc/300?u=${faker.internet.email()}`,
    })),
    title: faker.lorem.sentence({ min: 1, max: 4 }),
    description: faker.lorem.paragraph(),
  })),
}));

export function Marketplace() {
  return (
    <DndContext>
      <MarketplaceBoard>
        {data.map((column) => (
          <MarketplaceColumn key={column.id} id={column.id} title={column.title}>
            {column.cards.map((card) => (
              <MarketplaceCard
                key={card.id}
                id={card.id}
                title={card.title}
                description={card.description}
                assignees={card.assignees}
                tags={card.tags}
                priority={card.priority}
                commentsCount={card.commentsCount}
                attachmentsCount={card.attachmentsCount}
              />
            ))}
          </MarketplaceColumn>
        ))}
      </MarketplaceBoard>
    </DndContext>
  );
}
