import { Input, Textarea } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";

interface TInputProps {
  variant?: "flat" | "bordered" | "faded" | "underlined";
  required?: boolean;
  size?: "sm" | "md" | "lg";
  type?: string;
  label?: string;
  name: string;
  className?: string;
  errorMessage?: string;
  placeholder?: string;
}

const FoundXTextArea = ({
  variant = "bordered",
  required = false,
  size = "md",
  type = "string",
  label,
  name,
  placeholder,
  ...restProps
}: TInputProps) => {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  return (
    <Textarea
      {...register(name)}
      label={label}
      variant={variant}
      placeholder={placeholder}
      disableAnimation
      disableAutosize
      required={required}
      isInvalid={!!errors[name]}
      {...restProps}
    />
  );
};

export default FoundXTextArea;
