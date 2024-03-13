import Landingcards from '@/Components/Landingcards';
import "./globals.css";
const page = () => {
  return (
    <>
      <h1 className="text-white font-bold flex m-6 text-2xl justify-center text-center align-middle">
        One stop solution for all the medical needs.
      </h1>
      <Landingcards />
    </>
  );
}

export default page
