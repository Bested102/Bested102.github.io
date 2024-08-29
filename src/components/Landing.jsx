const skills = [
  "/images/html.svg",
  "/images/css.svg",
  "/images/javascript.svg",
  "/images/react.svg",
  "/images/vue.svg",
  "/images/scss.svg",
];
export default function Landing() {
  return (
    <section className="landing">
      <div className="container">
        <div className="info">
          <h1 className="hidden-left">Hi there, I&apos;m Omar</h1>
          <p className="hidden-left">
            A Junior Front-end web developer based in Al Sharqia, Egypt.
          </p>
        </div>
        <div className="skills">
          <h2 className="hidden-left">skills</h2>
          <ul>
            {skills.map((e) => {
              return (
                <li key={e}>
                  <img src={e} alt="" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
