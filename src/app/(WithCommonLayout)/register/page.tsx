"use client";

// import { useUserRegistration } from "@/src/hooks/auth.hook";

// import { registerUser } from "@/src/services/AuthService";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@heroui/button";
// import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
// import { useEffect } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

import registerValidationSchema from "@/src/schemas/register.schema";
import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import { useUserRegistration } from "@/src/hooks/auth.hook";
import Loading from "@/src/components/ui/Loading";

export default function RegisterPage() {
  const { mutate: handleUserRegistration, isPending } = useUserRegistration();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const userData = {
      ...data,
      profilePhoto:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    };

    console.log("Inside form user data: ", userData);

    handleUserRegistration(userData);
  };

  return (
    <>
      {isPending && <Loading />}
      <div className="flex h-[calc(100vh-100px)] flex-col items-center justify-center">
        <h3 className="my-2 text-xl font-bold">Register with FoundX</h3>
        <p className="mb-4">Help Lost Items Find Their Way Home</p>
        <div className="w-[35%]">
          <FXForm
            //! Only for development

            defaultValues={{
              name: "Al Zinan",
              email: "alZinan314@gmail.com",
              mobileNumber: "01788499970",
              password: "123456",
            }}
            resolver={zodResolver(registerValidationSchema)}
            onSubmit={onSubmit}
          >
            <div className="py-3">
              <FXInput label="Name" name="name" size="sm" />
            </div>
            <div className="py-3">
              <FXInput label="Email" name="email" size="sm" />
            </div>
            <div className="py-3">
              <FXInput label="Mobile Number" name="mobileNumber" size="sm" />
            </div>
            <div className="py-3">
              <FXInput
                label="Password"
                name="password"
                size="sm"
                type="password"
              />
            </div>

            <Button
              className="my-3 w-full rounded-md bg-default-900 text-default"
              size="lg"
              type="submit"
            >
              Registration
            </Button>
          </FXForm>
          <div className="text-center">
            Already have an account ? <Link href={"/login"}>Login</Link>
          </div>
        </div>
      </div>
    </>
  );
}
