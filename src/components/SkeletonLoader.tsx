interface SkeletonLoaderProps {
  count: number;
}

export default function SkeletonLoader({ count }: SkeletonLoaderProps) {
    return (
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="bg-gray-200 animate-pulse h-48 rounded-lg" />
        ))}
      </div>
    );
  }
  