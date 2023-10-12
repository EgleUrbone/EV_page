import css from './Paslaugos.module.css';

export default function Paslaugos() {
  return (
    <section>
      <h2 className={css.mainTitle}>paslaugos</h2>
      <ul className={css.list}>
        <li className={css.listItem}>
          <img src='/img/money-check.png' alt='icon' />
          <h3 className={css.headline}>Turinio kūrimas</h3>
          <p className={css.text}>
            straipsnių kūrimas, reklaminių žinučių, pruoduktų aprašymų
            formavimas, kt.
          </p>
        </li>
        <li className={css.listItem}>
          <img src='/img/handshake.png' alt='icon' />
          <h3 className={css.headline}>
            Socialinių tinklų paskyrų administravimas
          </h3>
          <p className={css.text}>
            turinio sudarymas, vizualų maketavimas, pasiūlymų generavimas,
            rezultatų analizė ir pateikimas
          </p>
        </li>
        <li className={css.listItem}>
          <img src='/img/pencil-ruler.png' alt='icon' />
          <h3 className={css.headline}>
            Maketavimo / dizaino / video kūrimo paslaugos
          </h3>
          <p className={css.text}>
            web baneriai, reklaminiai baneriai, gif&apos;ai, MP4 formato
            vaizdinė medžiaga Facebook ir GDN kanalų reklamai
          </p>
        </li>
        <li className={css.listItem}>
          <img src='/img/envelope-open-text.png' alt='icon' />
          <h3 className={css.headline}>Naujienlaiškių kūrimas</h3>
          <p className={css.text}>
            esant poreikiui paskyros sukūrimas, naujienlaiškių formavimas ir
            siuntimas, rezultatų analizė ir pateikimas
          </p>
        </li>
      </ul>
    </section>
  );
}
