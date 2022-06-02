export interface User {
  id: number;
  nombre_user: string;
  apellidos: string;
  email: string;
  image_user: string;
  salario: number;
  telefono: string;
  equipo_id: number;
  password: string;
  role_id: number;
  id_jugador?:           number;
  numero?:       number;
  nacionalidad?: string;
  estado?:       string;
  fec_nac?:      Date;
  min_jugados?:  null;
  position_id?:  number;
  user_id?:      number;
  created_at?:   Date;
  updated_at?:   Date;
}
