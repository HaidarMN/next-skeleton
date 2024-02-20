const Spinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-black/50">
      <div className="h-20 w-20 animate-spin rounded-full border-4 border-gray-300 border-t-slate-950"></div>
    </div>
  );
};

export default Spinner;
