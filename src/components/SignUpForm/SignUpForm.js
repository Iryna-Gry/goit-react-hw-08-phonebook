import React, { useState } from 'react';
import css from './SignUpForm.module.css';
import { Button, CustomCheckbox } from 'components';
import { useDispatch } from 'react-redux';
import { AiOutlineEye } from 'react-icons/ai';
import { RiEyeCloseLine } from 'react-icons/ri';
import { signUpUser } from 'redux/user/operations';

export const SignUpForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => setShowPassword(!showPassword);

  const handleCheck = () => setIsChecked(!isChecked);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form);
    dispatch(
      signUpUser({
        name: form.elements.username.value,
        email: form.elements.userEmail.value,
        password: form.elements.userPassword.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.Form_wrapper}>
      <form
        id="form-signup"
        className={css.SignUp_Form}
        onSubmit={handleSubmit}
      >
        <div className={css.User_Box}>
          <input
            type="text"
            name="username"
            id="user-name"
            className={css.Input}
            placeholder="Login"
          />

          <div className={css.Form_Error}></div>
        </div>

        <div className={css.User_Box}>
          <input
            type="email"
            name="userEmail"
            id="user-email"
            placeholder="Email"
            className={css.Input}
          />

          <div className={css.Form_Error}></div>
        </div>

        <div className={css.User_Box}>
          <input
            type={showPassword ? 'text' : 'password'}
            name="userPassword"
            required
            id="user-password"
            className={css.Input}
            placeholder="Password"
          />

          <button
            type="button"
            onClick={handleTogglePassword}
            className={css.Password_icon}
          >
            {showPassword ? (
              <RiEyeCloseLine size={30} />
            ) : (
              <AiOutlineEye size={30} />
            )}
          </button>
          <div className={css.Form_Error}></div>
        </div>

        <div className={css.Checkbox_signUp}>
          <CustomCheckbox
            id="signUpCheckbox"
            onChange={handleCheck}
            isChecked={isChecked}
          >
            <div className={css.Privacy_desr}>
              I agree to
              <span>Terms and conditions</span>
            </div>
          </CustomCheckbox>
        </div>

        <Button type="submit" colorType="button--blue">
          Sign Up
        </Button>
      </form>
    </div>
  );
};
