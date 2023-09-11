function CardButton({ id }) {
  return (
    <div className="mt-8 border-t py-4 flex items-center justify-center">
      <button
        type="button"
        className="px-3 py-1 border border-[#ee3838] transition-all duration-300 text-[#ee3838] rounded hover:bg-[#ee3838] hover:text-white"
      >
        حذف پست
      </button>
    </div>
  );
}

export default CardButton;
