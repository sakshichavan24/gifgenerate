
import Gifs from "./components/Gifs";
import Tags from "./components/Tags";


export default function App() {

  

  return(
   <div className="w-full h-screen flex flex-col bg-white relative">
    <h1 className="bg-slate-400 text-3xl font-bold text-center py-3 mt-9 w-[1280px] mx-auto rounded-xl">Ramdom Gifs</h1>
     <div className="big-div flex flex-col w-full item-center gap-y-5 mt-8 ">
      <Gifs></Gifs>
      <Tags></Tags>
     </div>
   </div>
  );
}
