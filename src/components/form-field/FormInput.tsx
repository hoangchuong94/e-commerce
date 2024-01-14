import { useState, useRef, useEffect } from "react";
import classnames from "classnames/bind";
import styles from "./formInput.module.scss";
import { BiSolidShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";
import { FormInputProps } from "@/type/type";

const cx = classnames.bind(styles);

const FormInput = function (props: FormInputProps) {
  const { id, name, type, errorMessage, onChange, ...propsInput } = props;
  const myRef = useRef<HTMLInputElement | null>(null);
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (myRef.current) {
      myRef.current.setAttribute("type", showPassword ? "text" : "password");
    }
  }, [showPassword]);

  const handleShowPassword = () => {
    console.log(type);
    setShowPassword((pre) => !pre);
  };

  return (
    <>
      <label htmlFor={name} className={cx("label")}>
        <input
          id={name}
          className={cx("input", focused ? "focused" : "")}
          name={name}
          type={showPassword ? "text" : type}
          onChange={onChange}
          onBlur={() => setFocused(true)}
          autoComplete={type === "password" ? "current-password" : "off"}
          {...propsInput}
          ref={myRef}
        />
        {type === "password" && (
          <p className={cx("showHidePassword")} onClick={handleShowPassword}>
            {showPassword ? <BiSolidHide /> : <BiSolidShow />}
          </p>
        )}
        <span>{errorMessage}</span>
      </label>
    </>
  );
};

export default FormInput;
