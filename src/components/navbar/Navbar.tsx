import React from 'react';
import SnapifyLogo from '@components/branding/SnapifyLogo';
import { Box, Container, Flex, HStack, Spacer, Stack } from '@chakra-ui/react';
import { NavbarThemeToggler } from './NavbarThemeToggler';
import { UserSignInButton } from './user/UserSignInButton';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <Box as='nav' boxShadow='2xl'>
      <Container maxWidth='4xl'>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <SnapifyLogo size='xl' />

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={4}>
              {/* User */}
              <HStack>
                <UserSignInButton />
              </HStack>
              <NavbarThemeToggler />
            </Stack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
