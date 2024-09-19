import { Container, Loader, Stack, Text } from '@mantine/core';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import ErrorBox from '../../components/error-box';

import { useTranslation } from 'react-i18next';
import { getUser } from '../../api/account';

const HomeAccount = () => {
    const { t } = useTranslation();

    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const userInfo = await getUser();

                if (userInfo.error || [401, 500].includes(userInfo.statusCode)) {
                    setError(userInfo.error ? userInfo.error : 'Not logged in');

                    return;
                }

                setUser(userInfo.user);

                setIsLoading(false);
                setError(null);
            } catch (err) {
                setError(err);
            }
        })();
    }, []);

    if (!user?.username && !isLoading) {
        return <Navigate replace to="/signin" />;
    }

    if (!user?.username && !error) {
        return (
            <Container>
                <Loader color="teal" variant="bars" />
            </Container>
        );
    }

    if (error) {
        return (
            <Stack>
                <ErrorBox message={error} />
            </Stack>
        );
    }

    const firstTimeMessage =
        'If this is the first time you sign in on this user account, you should go to Account settings and update your password.';
    return (
        <Stack>
            {user?.generated && (
                <ErrorBox message={firstTimeMessage} title={'Update your password'} />
            )}

            <Text size="sm">
                Hi, <strong>{user.username}</strong>
            </Text>

            <Text size="sm">
                We are glad you logged in. Here is the list of features signed in users get:
                <ul>
                    <li>Upload files</li>
                    <li>Expiration time of 14 and 28 days for secrets</li>
                    <li>List and delete your secrets</li>
                </ul>
                More features are coming! Thanks for joining SilentSpeaker.org!
                <span role="img" aria-label="celebration icon">
                    🎉 🎉 🎉 🎉
                </span>
            </Text>
        </Stack>
    );
};

export default HomeAccount;
