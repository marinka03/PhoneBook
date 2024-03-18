import style from './Btn.module.css';

function Btn({ title }) {
  return (
    <>
      <button className={style.btn}>{title}</button>
    </>
  );
}

export default Btn;
