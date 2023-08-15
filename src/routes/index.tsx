import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from '@app/layouts/DefaultLayout';
import { Home } from '@app/pages/Home';
import { Post } from '@app/pages/Post';

export function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
      </Route>
    </Routes>
  );
}
