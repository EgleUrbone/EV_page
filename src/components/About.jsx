import css from './About.module.css';

export default function About() {
  return (
    <section id='apie' className={css.aboutCont}>
      <img className={css.aboutHeadLine} src="/img/apiemus.png" alt="apie mus" />
      <p className={css.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cumque repudiandae eos accusamus ab accusantium quaerat, recusandae magni reiciendis quo, et inventore voluptate corrupti hic excepturi rerum? Aliquam, corporis exercitationem! Assumenda aspernatur modi saepe enim quae atque vitae optio officiis distinctio ipsum, non neque dignissimos deleniti impedit voluptatem nisi ad!</p>
    </section>
  )
}
