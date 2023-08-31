import Head from "next/head";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import "../styles/globals.css";

// import "@rainbow-me/rainbowkit/styles.css";
// import {
//   getDefaultWallets,
//   RainbowKitProvider,
//   connectorsForWallets,
//   Theme,
// } from "@rainbow-me/rainbowkit";
// import { argentWallet, trustWallet } from "@rainbow-me/rainbowkit/wallets";
// import { configureChains, createClient, WagmiConfig } from "wagmi";
// import { mainnet, polygon, optimism, arbitrum, Chain } from "wagmi/chains";
// import { infuraProvider } from "wagmi/providers/infura";
// import { publicProvider } from "wagmi/providers/public";

// const myCustomTheme = (Theme) = {
//   blurs: {
//     modalOverlay: '...',
//   },
//   colors: {
//     accentColor: '...',
//     accentColorForeground: '...',
//     actionButtonBorder: '...',
//     actionButtonBorderMobile: '...',
//     actionButtonSecondaryBackground: '...',
//     closeButton: '...',
//     closeButtonBackground: '...',
//     connectButtonBackground: '...',
//     connectButtonBackgroundError: '...',
//     connectButtonInnerBackground: '...',
//     connectButtonText: '...',
//     connectButtonTextError: '...',
//     connectionIndicator: '...',
//     downloadBottomCardBackground: '...',
//     downloadTopCardBackground: '...',
//     error: '...',
//     generalBorder: '...',
//     generalBorderDim: '...',
//     menuItemBackground: '...',
//     modalBackdrop: '...',
//     modalBackground: '...',
//     modalBorder: '...',
//     modalText: '...',
//     modalTextDim: '...',
//     modalTextSecondary: '...',
//     profileAction: '...',
//     profileActionHover: '...',
//     profileForeground: '...',
//     selectedOptionBorder: '...',
//     standby: '...',
//   },
//   fonts: {
//     body: '...',
//   },
//   radii: {
//     actionButton: '...',
//     connectButton: '...',
//     menuButton: '...',
//     modal: '...',
//     modalMobile: '...',
//   },
//   shadows: {
//     connectButton: '...',
//     dialog: '...',
//     profileDetailsAction: '...',
//     selectedOption: '...',
//     selectedWallet: '...',
//     walletLogo: '...',
//   },
// };

const demoAppInfo = {
  appName: "Medorii",
};
// const { chains, provider } = configureChains(
//   [mainnet, polygon, optimism, arbitrum],
//   [publicProvider()]
// );

// const { connectors } = getDefaultWallets({
//   appName: "My RainbowKit App",
//   chains,
// });

// const wagmiClient = createClient({
//   autoConnect: true,
//   connectors,
//   provider,
// });

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <link rel="icon" type="image/x-icon" href="/img/logo4.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        {/* !Google Fonts */}
        {/* Styles */}
        <link
          type="text/css"
          rel="stylesheet"
          href="/css/plugins.css?ver=4.1"
        />
        <link type="text/css" rel="stylesheet" href="/css/style.css?ver=4.1" />
      </Head>
      {/* <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider
          // theme={myCustomTheme}
          appInfo={demoAppInfo}
        chains={chains} 
        >*/}

      <Component {...pageProps} />

      {/* </RainbowKitProvider>
      </WagmiConfig> */}
    </Provider>
  );
}

export default MyApp;
