"use client";
import {
  Title,
  Text,
  Anchor,
  AppShell,
  Burger,
  Flex,
  Image,
  Card,
  SimpleGrid,
  Container,
  rem,
  useMantineTheme,
  Group,
  Badge,
  Button,
  UnstyledButton,
  MantineProvider,
  useComputedColorScheme,
  useMantineColorScheme,
  Affix,
  Transition,
  BackgroundImage,
  Switch,
  AppShellHeader,
  ActionIcon,
  Avatar,
  Modal,
  Code
} from '@mantine/core';

import { Spotlight } from '@mantine/spotlight';
import { useDisclosure } from '@mantine/hooks';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import classes from './Welcome.module.css';
import { useWindowScroll } from '@mantine/hooks';
import { IconArrowUp, IconHome, IconDashboard, IconFileText, IconSearch, IconSun, IconMoonStars } from '@tabler/icons-react';
import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react';
import classes1 from './MobileNavbar.module.css';
import '@mantine/spotlight/styles.css';
import { FaSun, FaMoon, FaGuilded, FaLink } from 'react-icons/fa';
import { IoMdPulse } from 'react-icons/io'
import { FaNewspaper, FaXTwitter } from "react-icons/fa6";
import { IoSunny } from "react-icons/io5";
import { FaInfoCircle } from 'react-icons/fa';
const icon = <IconSearch size={14} />

export function Welcome() {
  // Hook to control the color 
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();
  const [scroll, scrollTo] = useWindowScroll();
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light');
  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? 'light' : 'dark');
  }

  return (
    <MantineProvider defaultColorScheme="dark">
      <AppShell header={{ height: 70 }} padding="md">
        <AppShell.Header>
          <Group justify="space-between" style={{ flex: 1 }}>
            <IoMdPulse
              color='#EAD5FF'
            size={65}
              radius="md"
              h={70}
              w={70}
              />

            <Group ml="xl" gap={9} visibleFrom="sm" mr={40}>
            </Group>
          </Group>
        </AppShell.Header>
      </AppShell>
      <Title className={classes.title} ta="center" mt={160}>
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: '#EAD5FF', to: '#EAD5FF' }}
        >
          Pulse
        </Text>
      </Title>
      <Group justify='center'>
        <Text className={classes.textLeft} c="dimmed" ta="center" mr={60} size="lg" maw={580} mt="xl">
          Pulse is a moderation & utility bot designed to view things more “moderately”. It help’s with taking care of things without a breeze!{' '}
        </Text>
      </Group>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftSection={<IconArrowUp style={{ width: rem(16), height: rem(16) }} />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
              variant='default'
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </MantineProvider>
  );
}