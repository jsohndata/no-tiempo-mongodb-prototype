import Header from "./Header";
import NavMenu from "./NavMenu";
import Footer from "./Footer";

export default function AppLayout( {children} ) {

  return (
    <>
      <Header />
      <NavMenu />
      {children /* children is the content of the page */} 
      <Footer />
    </>
  )
}