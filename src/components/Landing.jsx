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
          <h1 className="hidden-left" style={{ transitionDuration: "1.3s" }}>
            <div className="wrapper">Hi there, I&apos;m Omar</div>
          </h1>
          <p className="hidden-left" style={{ transitionDuration: "1.5s" }}>
            <div className="wrapper">
              A Junior Front-end web developer based in Al Sharqia, Egypt.
            </div>
          </p>
        </div>
        <div className="skills">
          <h2 className="hidden-left" style={{ transitionDelay: ".6s" }}>
            <div className="wrapper">skills</div>
          </h2>
          <ul>
            {skills.map((e, i) => {
              return (
                <li
                  className="hidden-left"
                  key={e}
                  style={{ transitionDelay: `${0.8 + 0.2 * i}s` }}
                >
                  <div className="wrapper">
                    <img
                      src={e}
                      alt={e.substring(
                        e.lastIndexOf("/") + 1,
                        e.lastIndexOf(".")
                      )}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
