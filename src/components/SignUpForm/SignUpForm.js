import React, { useState } from 'react';
import css from './SignUpForm.module.css';
import { Button, CustomCheckbox } from 'components';
import { useDispatch } from 'react-redux';
import { AiOutlineEye } from 'react-icons/ai';
import { signUpUser } from 'redux/user/operations';

export const SignUpForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();

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
            placeholder="First name"
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
            type="password"
            name="userPassword"
            id="user-password"
            placeholder="Password"
            className={css.Input}
          />
          <AiOutlineEye className={css.Password_icon} size={30} />

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
