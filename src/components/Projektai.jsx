import css from './Projektai.module.css';

export default function Projektai() {
  return (
    <section id='projektai' className={css.projektai}>
      <img className={css.primg} src="/img/projektai.png" alt="projektai" />
      <ul className={css.list}>
        <li className={css.listItem}></li>
        <li className={css.listItem}></li>
        <li className={css.listItem}></li>
      </ul>
    </section>
  )
}
