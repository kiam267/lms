import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth';

export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [show, setShow] = useState(false);
  const { storeToken } = useAuth();
  const [fatchError] = useState({ isError: false, msg: '' });
  const navigate = useNavigate();
  const errorData = fatchError.isError;
  const handelChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const handelSubmiit = async e => {
    e.preventDefault();
    // eslint-disable-next-line no-undef
    // const serverKey = process.env.SERVER_LINK;
    axios
      .post('http://localhost:8080/api/auth/login', user)
      .then(res => {
        navigate('/');
        storeToken(res.data.token);
      })
      .catch(err => console.log(err));
  };

  return (
    <form
      className="max-w-sm mx-auto text-start border border-amber-100 border-spacing-x-20 p-5 mt-5 w-96 rounded-sm"
      onSubmit={handelSubmiit}
    >
      <div className="m-5">
        {errorData && (
          <p className="mt-2 text-sm font-bold text-red-600 dark:text-red-500 bg-red-300 p-3 rounded-lg text-center ">
            <span className="font-medium ">Oops!</span> {fatchError.msg}
          </p>
        )}
      </div>
   
      <div className="mb-5 ">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your Email
        </label>
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@flowbite.com"
          name="email"
          required
          value={user.email}
          onChange={handelChange}
        />
      </div>
     
      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your password
        </label>
        <input
          type={show ? 'text' : 'password'}
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="password"
          required
          placeholder="********"
          value={user.password}
          onChange={handelChange}
        />
        <fieldset>
          <div className="flex items-center mb-4 mt-5">
            <input
              id="checkbox-1"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={e => setShow(e.target.checked)}
            />{' '}
            <label
              htmlFor="checkbox-1"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              password {show ? 'hide' : 'show'}
            </label>
          </div>
        </fieldset>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
}
