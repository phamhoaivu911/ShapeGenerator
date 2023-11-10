export type Position = {
  x: number;
  y: number;
};
export type ShapeProps = {
  position: Position;
};
export type TabBarIconProps = {
  color: string;
};
export type FetchInput = {
  onSuccess: (result: string) => void;
  onError: (error: Error) => void;
};
