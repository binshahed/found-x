"use client";

import FoundXForm from "@/src/components/form/FoundXForm";
import FoundXInput from "@/src/components/form/FoundXInput";
import Container from "@/src/components/UI/Container";
import { Button } from "@nextui-org/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerValidationSchema } from "@/src/schemas/login.schema";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { registerUser } from "@/src/services/authService";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { Spinner } from "@nextui-org/spinner";

const Register = () => {
  const {
    mutate: handleRegister,
    data,
    isPending,
    isSuccess
  } = useMutation({
    mutationKey: ["register_user"],
    mutationFn: (userData: TUserData) => registerUser(userData),
    onSuccess: (data) => toast.success("User Registration Success"),
    onError: (error) => {
      console.log(error);

      toast.error(error.message);
    }
  });

  const handleSubmit = async (formData: TUserData) => {
    formData.profilePhoto = "https://rb.gy/kouhhq";
    handleRegister(formData);
  };

  if (isPending) {
  }

  return (
    <>
      {isPending && (
        <div className="h-screen bg-black/10 inset-0 z-[999] fixed backdrop-blur-sm flex mx-auto justify-center">
          <Spinner size="lg" />
        </div>
      )}
      <Container>
        <div className="h-[calc(100vh-88px)] flex w-full justify-center align-middle items-center">
          <div className="w-full md:w-3/6 lg:w-3/6 dark:bg-gray-900 bg-gray-100 p-10 rounded-[10px] shadow-lg">
            <h1 className=" mx-auto text- text-4xl font-thin">
              Hello <br /> <span className="font-bold">Welcome</span>
            </h1>
            <FoundXForm
              onSubmit={handleSubmit}
              resolver={zodResolver(registerValidationSchema)}
            >
              <FoundXInput
                className="my-4"
                label="Name"
                name="name"
                type="text"
                errorMessage="Please enter your name"
              />
              <FoundXInput
                className="my-4"
                label="Email"
                name="email"
                type="email"
                errorMessage="Please enter your email address"
              />
              <FoundXInput
                className="my-4"
                label="Mobile No"
                name="mobileNumber"
                type="text"
                errorMessage="Please enter your Mobile Number"
              />
              <FoundXInput
                className="my- 4"
                label="Password"
                name="password"
                type="password"
                errorMessage="Please enter your password"
              />
              <Button
                isLoading={isPending}
                variant="solid"
                className="w-full my-4"
                type="submit"
              >
                Sign Up
              </Button>
            </FoundXForm>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Register;
