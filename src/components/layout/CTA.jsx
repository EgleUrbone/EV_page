import css from './CTA.module.css';

export default function CTA() {
  return (
    <div className={css.cta}>
      <div className={css.textCont}>
        <h1 className={css.mainLine}>
          Įgyvendinkime jūsų viziją kurdami kartu. Vizijas verčiame realybe..
        </h1>
        <button className={css.btn}>Susisiekime</button>
      </div>
    </div>
  );
}
