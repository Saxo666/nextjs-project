"use client";

import * as React from 'react';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import { NAVIGATION } from './navigation';
import { demoTheme } from './theme';

import HomePage from './pages/HomePage';
import CpuNewsPage from './pages/CpuNewsPage';
import GpuNewsPage from './pages/GpuNewsPage';
import StorageNewsPage from './pages/StorageNewsPage';
import ReviewsPage from './pages/ReviewsPage';

function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);
  return React.useMemo(() => ({
    pathname,
    searchParams: new URLSearchParams(),
    navigate: (path) => setPathname(String(path)),
  }), [pathname]);
}

function PageContent({ pathname }) {
  switch (pathname) {
    case '/home': return <HomePage />;
    case '/cpu': return <CpuNewsPage />;
    case '/gpu': return <GpuNewsPage />;
    case '/storage': return <StorageNewsPage />;
    case '/reviews': return <ReviewsPage />;
    default: return <div style={{ padding: 20 }}>Page not found</div>;
  }
}

export default function DashboardLayoutHardware(props) {
  const router = useDemoRouter('/home');
  const { window } = props;
  const demoWindow = window ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
      branding={{
        logo: <img src="images.png" alt="Hardware News" style={{ height: 32 }} />,
        title: 'Hardware News',
      }}
    >
      <DashboardLayout>
        <PageContainer>
          <PageContent pathname={router.pathname} />
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}