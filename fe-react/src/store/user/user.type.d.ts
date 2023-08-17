export interface User {
  id: number;
  name: string;
  email: string;
  address: string;
  phoneNumber: string;
  cellphoneNumber: string;
}

export interface UserLogin {
  email: string;
  password: string;
}
