import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import 'tw-elements';
import Cards from "../components/Cards";


export default function Home() {
  return (
    <div>
       
      <Layout>
        <Navbar />
        <main>
          <Cards/>
        </main>
        <Footer />

      </Layout>

      </div>

  )
}
