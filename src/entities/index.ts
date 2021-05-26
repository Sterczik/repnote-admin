export interface IContactMessage {
  id: number;
  name: string;
  email: string;
  message: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
}

export interface IToken {
  id: number;
  user_id: number;
  admin_id: number;
  token: string;
  user: IUser;
}

export interface IExerciseCategory {
  id: number;
  name: string;
}

export interface ITrainingCategory {
  id: number;
  name: string;
}

export interface ITraining {
  id: number;
  name: string;
  user: IUser;
}