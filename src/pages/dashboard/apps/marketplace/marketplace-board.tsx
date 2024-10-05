import { Flex, FlexProps, ScrollArea } from '@mantine/core';

type MarketplaceBoardProps = Pick<FlexProps, 'children' | 'gap'>;

export function MarketplaceBoard({ children, gap = 'md' }: MarketplaceBoardProps) {
  return (
    <ScrollArea>
      <Flex gap={gap} align="flex-start">
        {children}
      </Flex>
    </ScrollArea>
  );
}
