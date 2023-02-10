import Nav from "./page-Components/nav";

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
};

export default Layout;
