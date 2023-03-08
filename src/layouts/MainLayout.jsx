import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const MainLayout = ({ children }) => {
  return (
    <main className="max-w-screen-2xl mx-auto w-screen h-screen overflow-x-hidden relative">
      <Navbar />
      <div className="font-jost">{children}</div>
      <Footer />
    </main>
  );
};

export default MainLayout;
