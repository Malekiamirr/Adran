import CardButton from '../CardButton';
import CardDetails from '../CardDetails';
import CardHeader from '../CardHeader';
import CardImage from '../CardImage';

function Card({ post, handleDeletePost }) {
  return (
    <div className="w-[400px] h-max border-gray-200 rounded-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] transition-all duration-300 hover:-translate-y-1">
      <CardHeader userName={post.username} name={post.name} />
      <CardImage />
      <CardDetails timestamp={post.timestamp} text={post.text} />
      <CardButton id={post.id} handleDeletePost={handleDeletePost} />
    </div>
  );
}

export default Card;
