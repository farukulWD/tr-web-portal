import { FormControl, FormItem, FormMessage } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import React from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";

type FormInputProps = {
  name: string;
  isMulti?: boolean;
  label: string;
  placeholder?: string;
  className?: string;
  readonly?: boolean;
  rest?: any;
  options: { value: string; label: string }[];
  selectClass: string;
};

function TrSelect({
  name,
  isMulti,
  label,
  placeholder,
  className,
  readonly,
  options,
  selectClass,
  ...rest
}: FormInputProps) {
  return (
    <div>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => {
          return (
            <FormItem className={cn(`${className}`)}>
              <FormControl>
                <div>
                  <Select
                    placeholder={placeholder}
                    className={cn(
                      `${
                        error?.message
                          ? "focus:border-red focus:!shadow-[0px_0px_5px] focus:!shadow-red"
                          : `focus:border-primary focus:!shadow-[0px_0px_5px] focus:!shadow-primary ${selectClass}`
                      }`
                    )}
                    isDisabled={readonly}
                    isMulti={isMulti}
                    id={label}
                    options={options}
                    onChange={(selectedOption: any) => {
                      field.onChange(
                        isMulti
                          ? selectedOption.map((option: any) => option.value)
                          : selectedOption?.value
                      );
                    }}
                    value={
                      isMulti
                        ? options.filter((option) =>
                            field.value?.includes(option.value)
                          )
                        : options.find((option) => option.value === field.value)
                    }
                    name={field.name}
                    ref={field.ref}
                    onBlur={field.onBlur}
                    {...rest}
                  />
                </div>
              </FormControl>
              {error && (
                <FormMessage className="text-red-500">
                  {error?.message}
                </FormMessage>
              )}
            </FormItem>
          );
        }}
      />
    </div>
  );
}

export default TrSelect;
