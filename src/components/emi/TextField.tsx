import { TextFieldProps } from "@/types";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

function TextField({
  label,
  name,
  unit,
  value,
  error,
  placeholder,
  onChange,
  onBlur,
}: TextFieldProps) {
  return (
    <div className="sm:col-span-2 ">
      {label && <Label htmlFor={name}>{label}</Label>}
      <div className="relative">
        <Input
          type="text"
          name={name}
          id={name}
          value={value || ""}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
        />
        <div className="absolute inset-y-0 right-5 flex items-center">
          {unit}
        </div>
      </div>
      {error && <p className="text-xs text-red-700 mt-1">{error}</p>}
    </div>
  );
}

export default TextField;
