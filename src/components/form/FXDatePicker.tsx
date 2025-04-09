import { Controller } from "react-hook-form";
import { DatePicker } from "@heroui/react";

import { IInput } from "@/src/types";

interface IProps extends IInput {}

// !this is not working properly right now

export default function FXDatePicker({
  label,
  name,
  variant = "bordered",
}: IProps) {
  return (
    <Controller
      name={name}
      render={({ field: { value, ...fields } }) => (
        <DatePicker
          className="min-w-full sm:min-w-[225px]"
          label={label}
          variant={variant}
          {...fields}
        />
      )}
    />
  );
}
