import { Button } from 'components';
import React, { useState } from 'react';
import css from './LoginForm.module.css';
import { AiOutlineEye } from 'react-icons/ai';
import { RiEyeCloseLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/user/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => setShowPassword(!showPassword);

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
            placeholder="Email"
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
