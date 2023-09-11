import CardHeader from '../CardHeader';

function Card({ post }) {
  return (
    <div className="w-[400px] h-[600px] border-gray-200 rounded-lg shadow">
      <CardHeader userName={post.username} name={post.name} />
    </div>
  );
}

export default Card;
