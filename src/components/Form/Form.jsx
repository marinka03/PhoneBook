import { useLocation } from 'react-router-dom';
import style from './Form.module.css';
import Btn from 'components/Btn';

function Form({ handleSubmit, title }) {
  const { pathname } = useLocation();
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>{title}</h1>
      <form className={style.form} onSubmit={handleSubmit}>
        {pathname === '/register' && (
          <>
            <label htmlFor="inputName"></label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              id="inputName"
              className={style.input}
            />
          </>
        )}

        <label htmlFor="inputEmail"></label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          id="inputEmail"
          className={style.input}
        />

        <label htmlFor="inputPassword"></label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          id="inputPassword"
          className={style.input}
        />
        <Btn title={title}/>
      </form>
    </div>
  );
}

export default Form;
