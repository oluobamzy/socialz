import ActionBar from './ActionBar';
import Footer from './Footer';
import Nav from './Nav';
import ProductsCard from './Productscard';
const Welcome = () => {
      return (
        <div>
          <Nav />
          <ActionBar />
          <ProductsCard />
          <Footer />
        </div>
      );
};
export default Welcome;