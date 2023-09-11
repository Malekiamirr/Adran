function CardHeader({ userName, name }) {
  return (
    <div className="w-full px-8 py-4">
      <h3>{userName}</h3>
      <p>{name}</p>
    </div>
  );
}

export default CardHeader;
