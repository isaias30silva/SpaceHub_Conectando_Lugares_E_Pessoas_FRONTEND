export interface RegisterUserDTO {
  name: string;
  email: string;
  password: string;
  role: "HOST" | "GUEST";
}

export async function registerUser(
  data: RegisterUserDTO
) {
  console.log(data);
}