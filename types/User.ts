export type User = {
  _id: number;
  _createdAt: Date;
  name: string;
  email: string;
  password: {
    hash: string;
    salt: string;
  };
};
