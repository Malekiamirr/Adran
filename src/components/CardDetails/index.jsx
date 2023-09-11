import { AiOutlineEye, AiOutlineComment, AiOutlineHeart } from 'react-icons/ai';
import { IoShareOutline } from 'react-icons/io5';
import convertToPersianNumber from '../../utils/convertToPersianNumber';

function CardDetails({ text, timestamp }) {
  return (
    <div>
      <div className="w-full flex items-center justify-between p-2">
        <div className="flex items-center gap-1">
          <span>{convertToPersianNumber(1)}</span>
          <AiOutlineHeart className="w-6 h-6" />
        </div>

        <div className="flex items-center gap-1">
          <span>{convertToPersianNumber(1)}</span>
          <AiOutlineComment className="w-6 h-6" />
        </div>

        <div className="flex items-center gap-1">
          <span>{convertToPersianNumber(0)}</span>
          <IoShareOutline className="w-6 h-6" />
        </div>

        <div className="flex items-center gap-1">
          <span>{convertToPersianNumber(14)}</span>
          <AiOutlineEye className="w-6 h-6" />
        </div>
      </div>

      {/* time */}
    </div>
  );
}

export default CardDetails;
