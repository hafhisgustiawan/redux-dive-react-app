import { useFormik } from 'formik';
import { object, string } from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../store/index';

import classes from './Auth.module.css';

const initialValues = {
  email: '',
  password: '',
};

const Auth = () => {
  const dispatch = useDispatch();

  const submitHandler = () => {
    dispatch(login());
  };

  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues,
    onSubmit: submitHandler,
    validationSchema: object({
      email: string()
        .required('Please enter your email')
        .email('Please enter a valid email'),
      password: string()
        .min(6, 'Must be at least 6 character')
        .required('Please enter your password')
        .matches(/^(?=.*[a-z])/, ' Must Contain One Lowercase Character')
        .matches(/^(?=.*[A-Z])/, '  Must Contain One Uppercase Character')
        .matches(/^(?=.*[0-9])/, '  Must Contain One Number Character')
        .matches(
          /^(?=.*[!@#\$%\^&\*])/,
          '  Must Contain  One Special Case Character'
        ),
    }),
  });

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleSubmit}>
          <div
            className={`${classes.control} ${errors.email && classes.invalid}`}
          >
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && (
              <p className={classes['error-text']}>{errors.email}</p>
            )}
          </div>
          <div
            className={`${classes.control} ${
              errors.password && classes.invalid
            }`}
          >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && (
              <p className={classes['error-text']}>{errors.password}</p>
            )}
          </div>
          <button type="submit" disabled={Object.keys(errors).length !== 0}>
            Login
          </button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
