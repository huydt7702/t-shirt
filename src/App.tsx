import { useIsFetching, useIsMutating } from '@tanstack/react-query';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import routes from './routes';

export default function App() {
  const isMutating = useIsMutating();
  const isFetching = useIsFetching();
  return (
    <Suspense fallback={<LoadingScreen />}>
      {isFetching + isMutating !== 0 && <LoadingScreen />}
      <RouterProvider router={routes} />
    </Suspense>
  );
}
