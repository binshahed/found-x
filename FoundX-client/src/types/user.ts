type TUserData = {
  name: string;
  email: string;
  mobileNumber: string;
  role?: "ADMIN" | "USER";
  status?: "ACTIVE" | "INACTIVE";
  password?: string;
  profilePhoto?: string;
};
