import { AiOutlineEye, AiOutlineComment, AiOutlineHeart } from 'react-icons/ai';
import { IoShareOutline } from 'react-icons/io5';

function CardDetails() {
  return (
    <div className="w-full flex items-center justify-between px-2">
      <div className="flex items-center gap-1">
        <span>1</span>
        <AiOutlineHeart className="w-6 h-6" />
      </div>

      <div className="flex items-center gap-1">
        <span>1</span>
        <AiOutlineComment className="w-6 h-6" />
      </div>

      <div className="flex items-center gap-1">
        <span>0</span>
        <IoShareOutline className="w-6 h-6" />
      </div>

      <div className="flex items-center gap-1">
        <span>14</span>
        <AiOutlineEye className="w-6 h-6" />
      </div>
    </div>
  );
}

export default CardDetails;
