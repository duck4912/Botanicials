import { Route, Routes } from "react-router";
import Layout from "./layout/layout";
import CollectionPage from "./pages/collection-page";
import DashboardPage from "./pages/dashboard-page";
import ForumPage from "./pages/forum-page";
import HomePage from "./pages/home-page";
import LoginPage from "./pages/login-page";
import PlantPage from "./pages/plant-page";
import PlantsPage from "./pages/plants-page";
import PostPage from "./pages/post-page";
import WishlistPage from "./pages/wishlist-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="plants" element={<PlantsPage />} />
        <Route path="plants/:plantId" element={<PlantPage />} />
        <Route path="forum" element={<ForumPage />} />
        <Route path="forum/:postId" element={<PostPage />} />
        <Route path="wishlist" element={<WishlistPage />} />
        <Route path="collection" element={<CollectionPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
