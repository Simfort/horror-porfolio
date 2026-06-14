export default function ImageItem({
  path,
  index,
}: {
  path: string;
  index: number;
}) {
  return (
    <img
      loading="lazy"
      src={path}
      className={`  hover:scale-120 transition-[scale] duration-200 max-w-100 shadow-2xl  `}
    />
  );
}
