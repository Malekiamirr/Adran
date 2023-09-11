import CardDetails from '../CardDetails';
import CardHeader from '../CardHeader';
import CardImage from '../CardImage';

function Card({ post }) {
  return (
    <div className="w-[400px] h-[600px] border-gray-200 rounded-lg shadow">
      <CardHeader userName={post.username} name={post.name} />
      <CardImage />
      <CardDetails />
    </div>
  );
}

export default Card;
