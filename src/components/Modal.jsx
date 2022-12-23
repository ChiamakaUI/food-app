import { MdCancel } from "react-icons/md";
const Modal = (props) => {
  return (
    <div className="fixed z-[1000] top-0 left-0 w-full h-full overflow-y-auto overflow-x-hidden	bg-black-overlay">
      <div className="w-[70%] bg-[#181818] my-[10%] mx-auto shadow-xl h-[900px] flex flex-col max-w-[1008px] max-[520px]:w-[95%]">
        <MdCancel
          className="text-5xl text-white absolute top-28 right-44 cursor-pointer z-[1000]"
          onClick={() => props.closeFunc(false)}
        />
        <div className="w-full h-[50%] text-white">
          {props.children}
        </div>
      </div>


    </div>
  )
}

export default Modal