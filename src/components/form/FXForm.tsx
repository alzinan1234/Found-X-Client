import React from "react";
import { FormProvider, useForm } from "react-hook-form";

const FXForm = ({ children, onSubmit, defaultValues, resolver }) => {
  const formConfig = {};

  if (!!defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  if (!!resolver) {
    formConfig["resolver"] = defaultValues;
  }
  const methods = useForm();
  const submitHandler = methods.handleSubmit;
  return (
    <FormProvider {...methods}>
      <form onSubmit={submitHandler(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default FXForm;
