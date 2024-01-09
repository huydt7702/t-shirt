import { Outlet } from 'react-router-dom';
import Header from 'src/components/Header';
import TopBar from 'src/components/TopBar';
import NavBar from '../NavBar';
import Footer from '../Footer';

export default function Layout() {
  return (
    <div>
      <div>
        <TopBar />
        <Header />
        <NavBar />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
