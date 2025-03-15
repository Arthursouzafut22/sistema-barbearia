import React, { forwardRef } from "react";
import * as S from "./Styles";

type InputProps = React.ComponentProps<"input"> & {
  label: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, type, name, placeholder, ...rest }, ref) => {
    return (
      <div>
        <label htmlFor={label}>{label}</label>
          <S.Input
            ref={ref}
            type={type}
            id={name}
            name={name}
            placeholder={placeholder}
            {...rest}
          />
      </div>
    );
  }
);

Input.displayName = "input";

export default Input;
