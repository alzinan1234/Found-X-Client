import { Select, SelectItem } from "@heroui/react";
import React from "react";

import { IInput } from "@/src/types";
import { useFormContext } from "react-hook-form";

interface IProps extends IInput {
  options: { key: string; label: string }[];
}

const FXSelect = ({ options, name, label }: IProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <Select {...register(name)} className="max-w-xs" label={label}>
        {options.map((option) => (
          <SelectItem key={option.key}>{option.label}</SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default FXSelect;
