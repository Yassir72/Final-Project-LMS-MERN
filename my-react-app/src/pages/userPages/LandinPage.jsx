import NavPage from "@/widgets/layout/navbarPages";
import FooterPages from "@/widgets/layout/footerPages";
import Landing  from "@/widgets/landing-page/landingPage";


export function LandinPage() {


   return (
      <>
      <NavPage />
         <div className="min-h-screen bg-gray-100 flex items-center justify-center">
           <Landing/>
         </div>
      <FooterPages />
      </>
   );
}

export default LandinPage;
