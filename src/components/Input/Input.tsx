import React, { forwardRef } from "react";
import * as S from "./Styles";

type InputProps = React.ComponentProps<"input"> & {
  label: string;
  size?: number;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, type, name, placeholder, size, ...rest }, ref) => {
    return (
      <div>
        <label htmlFor={label} style={{ fontSize: size + "px" }}>
          {label}
        </label>
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
