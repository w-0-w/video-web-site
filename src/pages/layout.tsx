import { useState } from 'react';
import { Outlet, useLocation } from 'ice';
import { Shell, ConfigProvider } from '@alifd/next';
import store from '@/store';
// import logo from '@/assets/logo.png';
// import logo from '@/assets/logo.jpg';
import Footer from '@/components/Footer';
// import HeaderAvatar from '@/components/HeaderAvatar';
// import Notice from '@/components/Notice';
// import GlobalSearch from '@/components/GlobalSearch';
// import Logo from '@/components/Logo';
import { Logo } from '@/components/Biz/Logo';

interface IGetDevice {
  (width: number): 'phone' | 'tablet' | 'desktop';
}
const getDevice: IGetDevice = (width) => {
  const isPhone =
    typeof navigator !== 'undefined' &&
    navigator &&
    navigator.userAgent.match(/phone/gi);

  if (width < 680 || isPhone) {
    return 'phone';
  } else if (width < 1280 && width > 680) {
    return 'tablet';
  } else {
    return 'desktop';
  }
};

export default function Layout() {
  const location = useLocation();
  const [device, setDevice] = useState(getDevice(NaN));

  if (typeof window !== 'undefined') {
    window.addEventListener('optimizedResize', (e) => {
      const deviceWidth =
        (e && e.target && (e.target as Window).innerWidth) || NaN;
      setDevice(getDevice(deviceWidth));
    });
  }

  const [userState] = store.useModel('user');

  if (['/login'].includes(location.pathname)) {
    return <Outlet />;
  }

  return (
    <ConfigProvider device={device}>
      <Shell
        style={{
          minHeight: '100vh',
        }}
        type="dark"
        fixedHeader={false}
      >
        <Shell.Branding>
          {/* <Logo
            image={logo}
            text="Video Site"
          /> */}
          <Logo />
        </Shell.Branding>
        {/* <Shell.Navigation
          direction="hoz"
          style={{
            marginRight: 10,
          }}
        >
          <GlobalSearch />
        </Shell.Navigation>
        <Shell.Action>
          <Notice />
          <HeaderAvatar
            name={userState.currentUser.name}
            avatar={userState.currentUser.avatar}
          />
        </Shell.Action> */}
        {/* <Shell.Navigation>
          <PageNav />
        </Shell.Navigation> */}
        <Shell.Content>
          <div
            style={{
              width: '100%',
              margin: '0 auto',
            }}
          >
            <Outlet />
          </div>
        </Shell.Content>
        <Shell.Footer>
          <Footer />
        </Shell.Footer>
      </Shell>
    </ConfigProvider>
  );
}
