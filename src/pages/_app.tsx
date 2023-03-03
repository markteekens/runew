import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";
import "../styles/bootstrap.min.css";
import "../styles/color.css";
import "../styles/fontawesome.min.css";
import "../styles/jquery.fancybox.min.css";
import "../styles/responsive.css";
import "../styles/style.css";
import "../styles/swiper.css";
const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
