import Header from "@/components/header/Header";

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      {children}
    </div>
  );
}

export default Layout;
