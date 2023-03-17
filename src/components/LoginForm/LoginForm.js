import { Button, CustomCheckbox } from 'components';
import React, { useState } from 'react';
import css from './LoginForm.module.css';
import { AiOutlineEye } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/user/operations';
//import checkSvg from '../../img/sprite.svg'

export const LoginForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();

  const handleCheck = () => setIsChecked(!isChecked);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logInUser({
        email: form.elements.userEmail.value,
        password: form.elements.userPassword.value,
      })
    );
    form.reset();
  };
  return (
    <div className={css.Form_wrapper}>
      <form id="form-login" className={css.Login_Form} onSubmit={handleSubmit}>
        <div className={css.User_Box}>
          <input
            type="email"
            name="userEmail"
            id="user-email"
            className={css.Input}
            placeholder="Enter your email here"
          />

          <div className={css.Form_Error}></div>
        </div>
        <div className={css.User_Box}>
          <input
            type="password"
            name="userPassword"
            required
            id="user-password"
            className={css.Input}
            placeholder="Enter your password here"
          />
          <AiOutlineEye className={css.Password_icon} size={30} />
          <div className={css.Form_Error}></div>
        </div>

        <div className={css.Checkbox_login}>
          <CustomCheckbox
            id="checkbox"
            onChange={handleCheck}
            isChecked={isChecked}
          >
            Remember me
          </CustomCheckbox>
        </div>

        <Button type="submit" disabled={false}>
          Sign in
        </Button>
      </form>
      <div className={css.Forgot_pass}>Forgot password?</div>
      <div className={css.Create_acc}>
        Don’t have an acount yet?
        <NavLink to="/register" className={css.Create_desr}>
          Create your account
        </NavLink>
      </div>
    </div>
  );
};
