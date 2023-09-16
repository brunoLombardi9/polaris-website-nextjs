import Navbar from "@/components/Navbar";
import "../app/globals.css";
import Footer from "@/components/Footer";
import WhatsappIcon from "@/components/WhatsappIcon";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-darkGray flex flex-col min-h-[100vh]">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <WhatsappIcon number={process.env.NEXT_PUBLIC_CLIENT_NUM} />
    </div>
  );
}

export default MyApp;
