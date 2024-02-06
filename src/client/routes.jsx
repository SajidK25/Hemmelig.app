import { lazy } from 'react';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import ApplicationShell from './app-shell.jsx';

const Home = lazy(() => import('./routes/home'));
const Secret = lazy(() => import('./routes/secret'));
const PublicSecrets = lazy(() => import('./routes/public'));
const Privacy = lazy(() => import('./routes/privacy'));
const SignIn = lazy(() => import('./routes/signin'));
const SignUp = lazy(() => import('./routes/signup'));
const SignOut = lazy(() => import('./routes/signout'));
const Account = lazy(() => import('./routes/account'));
const Terms = lazy(() => import('./routes/terms'));

const Secrets = lazy(() => import('./routes/account/secrets'));
const Settings = lazy(() => import('./routes/account/settings'));
const Users = lazy(() => import('./routes/account/users'));
const UserAccount = lazy(() => import('./routes/account/account'));

// loader: https://reactrouter.com/en/main/route/loader
const appRouter = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="*" element={<div style={{ width: '100%', height: '100%' }}></div>} />
            <Route path="/" element={<ApplicationShell />}>
                <Route index element={<Home />} />
                <Route path="secret/:encryptionKey/:secretId" element={<Secret />} />
                <Route path="secret/:secretId" element={<Secret />} />
                <Route
                    element={<PublicSecrets />}
                    path="public"
                    loader={async () => {
                        const { getPublicSecrets } = await import('./api/secret');

                        return await getPublicSecrets();
                    }}
                />
                <Route
                    element={<PublicSecrets />}
                    path="public/:username"
                    loader={async ({ params }) => {
                        const { getPublicSecrets } = await import('./api/secret');

                        return await getPublicSecrets(params?.username);
                    }}
                />
            </Route>
        </>
    )
);

export default appRouter;
