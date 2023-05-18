import {Auth0Provider} from "@auth0/auth0-react";
import {useNavigate} from "react-router-dom";

export const Auth0ProviderWithNavigate = ({children}) => {
    //const navigate = useNavigate();

    const domain = process.env.REACT_APP_AUTH0_DOMAIN;
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
    const redirectUri = process.env.REACT_APP_AUTH0_CALLBACK_URL;
    const audience = process.env.REACT_APP_AUTH0_AUDIENCE;
    // const domain = "dev-hgvijhy2yvfu851u.us.auth0.com" // de facu
    // const clientId = "3XRCIiIQfgVmhs81sGhwcQ8woKJDzAGu" // de facu

    console.log(clientId);
    const onRedirectCallback = (appState) => {
        /* eslint-disable */
        history.push(
            appState && appState.targetUrl
                ? appState.targetUrl
                : window.location.pathname
        );
    };

    if (!(domain && clientId && redirectUri && audience)) {
        return null;
    }
    return (
        <Auth0Provider
            domain={domain}
            clientId={"wfnJlEwz5vgNbmbMrT0LeIM20IgcNGc2"}
            authorizationParams={{
                audience: audience,
                redirect_uri: redirectUri,
            }}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    );
    /*    return (
            <Auth0Provider
                domain={domain}
                clientId={clientId}
                authorizationParams={{
                    redirect_uri: redirectUri,
                }}
                onRedirectCallback={onRedirectCallback}
            >
                {children}
            </Auth0Provider>
        );*/
};