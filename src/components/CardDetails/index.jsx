import { AiOutlineEye, AiOutlineComment, AiOutlineHeart } from 'react-icons/ai';
import { IoShareOutline } from 'react-icons/io5';
import convertToPersianNumber from '../../utils/convertToPersianNumber';
import convertToPersianTime from '../../utils/convertToPersianTime';

function CardDetails({ text, timestamp }) {
  return (
    <div>
      <div className="w-full flex items-center justify-between p-2">
        <div className="flex hover:cursor-pointer items-center gap-1">
          <span>{convertToPersianNumber(1)}</span>
          <AiOutlineHeart className="w-6 h-6" />
        </div>

        <div className="flex hover:cursor-pointer items-center gap-1">
          <span>{convertToPersianNumber(1)}</span>
          <AiOutlineComment className="w-6 h-6" />
        </div>

        <div className="flex hover:cursor-pointer items-center gap-1">
          <span>{convertToPersianNumber(0)}</span>
          <IoShareOutline className="w-6 h-6" />
        </div>

        <div className="flex hover:cursor-pointer items-center gap-1">
          <span>{convertToPersianNumber(14)}</span>
          <AiOutlineEye className="w-6 h-6" />
        </div>
      </div>

      {/* time and text card */}
      <div className="flex flex-col text-left gap-2 mt-1 px-2 text-sm">
        <p className=" text-[#9C9D98]">{convertToPersianTime(timestamp)}</p>

        <p className="text-[#7e7e7e]">{text}</p>
      </div>
    </div>
  );
}

export default CardDetails;
