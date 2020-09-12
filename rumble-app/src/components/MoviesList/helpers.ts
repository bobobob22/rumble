interface GetOrderProps {
  index: number;
  pos: number;
  numItems: number;
}

export const getOrder = ({ index, pos, numItems }: GetOrderProps) => {
  return index - pos < 0 ? numItems - Math.abs(index - pos) : index - pos;
};

export const NEXT = 'NEXT';
export const PREV = 'PREV';
