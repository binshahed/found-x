"use client";

import FoundXForm from "@/src/components/form/FoundXForm";
import FoundXInput from "@/src/components/form/FoundXInput";
import Container from "@/src/components/UI/Container";
import { Button } from "@nextui-org/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginValidationSchema } from "@/src/schemas/login.schema";
import { FieldValues, SubmitHandler } from "react-hook-form";

const Login = () => {
  const handleSubmit: SubmitHandler<FieldValues> = (formData) => {
    console.log(formData);
  };
  return (
    <Container>
      <div className="h-[calc(100vh-88px)] flex w-full justify-center align-middle items-center">
        <div className="w-full md:w-3/6 lg:w-3/6 dark:bg-gray-900 bg-gray-100 p-10 rounded-[10px] shadow-lg">
          <h1 className=" mx-auto text- text-4xl font-thin">
            Hello <br /> <span className="font-bold">Welcome</span>
          </h1>
          <FoundXForm
            onSubmit={handleSubmit}
            resolver={zodResolver(loginValidationSchema)}
          >
            <FoundXInput
              className="my-4"
              label="Email"
              name="email"
              type="email"
              errorMessage="Please enter your email address"
            />
            <FoundXInput
              className="my- 4"
              label="Password"
              name="password"
              type="password"
              errorMessage="Please enter your password"
            />
            <Button variant="solid" className="w-full my-4" type="submit">
              Login
            </Button>
          </FoundXForm>
        </div>
      </div>
    </Container>
  );
};

export default Login;
