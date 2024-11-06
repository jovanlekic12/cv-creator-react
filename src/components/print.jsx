import ReactDOM from "react-dom";
import { IoPrint } from "react-icons/io5";
import { TbArrowBackUp } from "react-icons/tb";

function Print({ className, setIsOverlayOpened, reactToPrintFn }) {
  return ReactDOM.createPortal(
    <div className={className}>
      <button className="print__btn" onClick={reactToPrintFn}>
        <IoPrint />
        Print
      </button>
      <button className="back__btn" onClick={() => setIsOverlayOpened(false)}>
        <TbArrowBackUp />
        Back
      </button>
    </div>,
    document.body
  );
}

export default Print;
