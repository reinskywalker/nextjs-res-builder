import { MdOutlinePictureAsPdf, MdPictureAsPdf } from "react-icons/md";

const WinPrint = () => {

const print = () => {
    window.print();
    };

return (
    <button
        aria-label="Export"
        className="exclude-print fixed bottom-5 right-10 font-bold rounded-full bg-white text-blue-600 shadow-lg border-2 border-white"
        onClick={print}
      >
       <MdOutlinePictureAsPdf className="w-10 h-10" title="Export"/>
      </button>
    );
};

export default WinPrint;