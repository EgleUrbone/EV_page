import css from './Paslaugos.module.css';


export default function Paslaugos() {
  return (
    <section id='paslaugos' className={css.paslaugos}>
      <h2 className={css.mainTitle}>paslaugos</h2>
      <ul className={css.list}>
        <li className={css.listItem}>
          <img className={css.icon} src='/img/form-field-multiline-svgrepo-com.svg' alt='multiline icon' />
          <h3 className={css.headline}>Turinio kūrimas</h3>
          <p className={css.text}>
            Straipsnių kūrimas, reklaminių žinučių, produktų aprašymų
            formavimas, kt.
          </p>
        </li>
        <li className={css.listItem}>
          <img className={css.icon} src='/img/group-svgrepo-com.svg' alt='group icon' />
          <h3 className={css.headline}>
            Socialinių tinklų paskyrų administravimas
          </h3>
          <p className={css.text}>
            Turinio sudarymas, vizualų maketavimas, pasiūlymų generavimas,
            rezultatų analizė ir pateikimas
          </p>
        </li>
        <li className={css.listItem}>
          <img className={css.icon} src='/img/preserve-svgrepo-com.svg' alt='icon' />
          <h3 className={css.headline}>Maketavimo / video kūrimo paslaugos</h3>
          <p className={css.text}>
            Web baneriai, reklaminiai baneriai, vizitinės kortelės, plakatai,
            skrajutės, brošiūros, gif&apos;ai, MP4 formato vaizdinė medžiaga
            Facebook ir GDN kanalų reklamai
          </p>
        </li>
        <li className={css.listItem}>
          <img className={css.icon} src='/img/brush-mark-svgrepo-com.svg' alt='brush icon' />
          <h3 className={css.headline}>Grafinis dizainas</h3>
          <p className={css.text}>
            Tai vizualinė komunikacija naudojant spalvas, formą, tekstą ir kitus elementus,
            siekiant pritraukti dėmesį, perduoti žinutę arba sukurti estetiškai
            patrauklų vaizdą. Logotipų, ikonėlių, web svetainių dizainas.
          </p>
        </li>
        <li className={css.listItem}>
          <img className={css.icon} src='/img/unselected-svgrepo-com.svg' alt='retouching icon' />
          <h3 className={css.headline}>Nuotraukų retušavimo paslaugos</h3>
          <p className={css.text}>
            Spalvų korekcija, smulkių detalių šalinimas, odos netobulumų
            tvarkymas
          </p>
        </li>
        <li className={css.listItem}>
          <img
            className={css.icon}
            src='/img/email-address-svgrepo-com.svg'
            alt='icon'
          />
          <h3 className={css.headline}>Naujienlaiškių kūrimas</h3>
          <p className={css.text}>
            Esant poreikiui paskyros sukūrimas, naujienlaiškių formavimas ir
            siuntimas, rezultatų analizė ir pateikimas
          </p>
        </li>
      </ul>
    </section>
  );
}
