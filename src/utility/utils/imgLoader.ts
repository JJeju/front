// utils/imgLoader.ts

export const imgLoader = ({
  src,
  width,
  quality
}: {
  src: string;
  width: number;
  quality?: number;
}): string => {
  return `${src}?w=${width}&q=${quality || 75}`;
};
