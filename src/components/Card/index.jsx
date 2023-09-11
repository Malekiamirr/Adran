import CardButton from '../CardButton';
import CardDetails from '../CardDetails';
import CardHeader from '../CardHeader';
import CardImage from '../CardImage';

function Card({ post }) {
  return (
    <div className="w-[400px] h-max border-gray-200 rounded-lg shadow">
      <CardHeader userName={post.username} name={post.name} />
      <CardImage />
      <CardDetails timestamp={post.timestamp} text={post.text} />
      <CardButton id={post.id} />
    </div>
  );
}

export default Card;
