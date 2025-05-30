export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-8 h-8 border-2 border-spring border-t-transparent rounded-full animate-spin"></div>
        <p className="text-mist text-sm">Loading...</p>
      </div>
    </div>
  );
}
