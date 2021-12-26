export interface UserData {
  id: number;
  username: string;
  password: string;
}


export interface UserIsLoggedData {
  id: number;
  userId: number;
  username: string;
  password: string;
  userislogged: boolean;
}
