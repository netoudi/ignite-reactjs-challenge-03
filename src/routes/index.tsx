import { Route, Routes } from 'react-router-dom';
import { Home } from '@app/pages/Home';
import { Post } from '@app/pages/Post';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post" element={<Post />} />
    </Routes>
  );
}
