import FloatingNav from "./FloatingNav";

const Layout = ({ children }) => {
  return (
    <>
      <FloatingNav />
      <main>{children}</main>
    </>
  );
};

export default Layout;
