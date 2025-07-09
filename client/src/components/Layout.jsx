
// --- src/components/Layout.jsx ---
import Navbar from './navBar';

const Layout = ({ children }) => (
  <div>
    <Navbar />
    <main className="p-4">{children}</main>
  </div>
);

export default Layout;

