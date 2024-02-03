import { AppShell, Footer, Group, Header, Text, useMantineTheme } from '@mantine/core';
import { Outlet } from 'react-router-dom';

import { useMediaQuery } from '@mantine/hooks';
import { useTranslation } from 'react-i18next';

import HeaderContent from './components/header';

const ApplicationShell = () => {
    const { t } = useTranslation();
    const isMobile = useMediaQuery('(max-width: 768px)');
    const theme = useMantineTheme();

    return (
        <AppShell
            styles={{
                main: {
                    background: theme.colors.dark[8],
                },
            }}
            navbarOffsetBreakpoint="sm"
            footer={
                <Footer
                    height={45}
                    p="xs"
                    sx={(theme) => ({
                        backgroundColor: theme.colors.dark[8],
                    })}
                >
                    <Group position="center" spacing="xs">
                        <Text
                            weight="bold"
                            className="radial-text-gradient"
                            align="center"
                            size="h2"
                        >
                            Powered by OnionGangster®2k24
                        </Text>
                    </Group>
                </Footer>
            }
            header={
                <Header
                    height={90}
                    style={{ zIndex: 100 }}
                    p="xs"
                    sx={(theme) => ({
                        backgroundColor: theme.colors.dark[8],
                    })}
                >
                    <HeaderContent />
                </Header>
            }
        >
            <Outlet />
        </AppShell>
    );
};

export default ApplicationShell;
