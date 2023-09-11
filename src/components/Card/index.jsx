import CardButton from '../CardButton';
import CardDetails from '../CardDetails';
import CardHeader from '../CardHeader';
import CardImage from '../CardImage';

function Card({ post, handleDeletePost }) {
  return (
    <div className="w-[400px] h-max border-gray-200 rounded-lg shadow-card hover:shadow-card-lg transition-all duration-200 hover:-translate-y-1">
      <CardHeader userName={post.username} name={post.name} />
      <CardImage />
      <CardDetails timestamp={post.timestamp} text={post.text} />
      <CardButton id={post.id} handleDeletePost={handleDeletePost} />
    </div>
  );
}

export default Card;
