import DashNav from "@/components/DashNav";
import DashSideBar from "@/components/DashSideBar";

export default function DashLayout
({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" ">
        <div className="  flex justify-between">

     <div className="hidden    md:block w-[20%] sm:bg-red-100 md:bg-yellow-400 lg:bg-green-300">
  <DashSideBar/>
</div>
        <main className="  z-10 sm:w-full w-full   ">
         <nav className=" w-full z-100">
          
            <DashNav/>
         </nav>
          


        <div className="  sm:w-[100%] md:w-[100%]  w-[100%]  ">
         {children}
        </div>

         </main>
        
        </div>
        
        
      </body>
    </html>
  );
}
