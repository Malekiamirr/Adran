function CardHeader({ userName, name }) {
  return (
    <div className="w-full px-8 py-4 flex items-center gap-4 border-b border-b-gray-100">
      <img
        src="/src/assets/profile.jpg"
        alt="user profile"
        className="w-16 h-16 object-cover object-top rounded-full border-2 border-gray-200 hover:cursor-pointer transition-all duration-300"
      />
      <div className="flex flex-col items-start justify-between gap-2">
        <h3 className="font-medium text-sm">{userName}</h3>
        <p className="text-slate-500 text-sm">{name}</p>
      </div>
    </div>
  );
}

export default CardHeader;
