import { useFormik } from 'formik';

const Login = () => {
  const formik = useFormik({
    initialValues: { 
        email: '', 
        password: '' 
    },
    onSubmit: (values) => {
      console.log('Form Submitted', values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div style={{margin: '5px', display: 'flex', flexDirection:'row', gap:'10px'}}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...formik.getFieldProps('email')}
          required
        />
      </div>
      <div style={{margin: '5px', display: 'flex', flexDirection:'row', gap:'10px'}}>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          {...formik.getFieldProps('password')}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
