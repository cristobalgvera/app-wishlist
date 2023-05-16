export type Product = {
  id: number;
  checked: boolean;
  name: string;
  description: string;
  imageUrl: string;
  checkedAt?: Date;
  checkedBy?: string;
};
