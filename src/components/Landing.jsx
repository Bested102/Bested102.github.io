const skills = [
  "/images/html.svg",
  "/images/css.svg",
  "/images/javascript.svg",
  "/images/react.svg",
  "/images/vue.svg",
  "/images/scss.svg",
];
export default function Landing() {
  function changeTransition(dur = 1, del = 0) {
    return `opacity ${dur}s ${del}s , filter ${dur}s ${del}s , transform ${dur}s ${del}s`;
  }
  return (
    <section className="landing" id="home">
      <div className="container">
        <div className="info">
          <h1
            className="hidden-left"
            style={{ transition: changeTransition(1.3) }}
          >
            Hi there, I&apos;m Omar
          </h1>
          <p
            className="hidden-left"
            style={{ transition: changeTransition(1.5) }}
          >
            A Junior Front-end web developer based in Al Sharqia, Egypt.
          </p>
        </div>
        <div className="skills">
          <h2
            className="hidden-left theme-change"
            style={{ transition: changeTransition(1, 0.6) }}
          >
            skills
          </h2>
          <ul>
            {skills.map((e, i) => {
              return (
                <li
                  className="hidden-left theme-change"
                  key={e}
                  style={{ transition: changeTransition(1, 0.8 + 0.2 * i) }}
                >
                  <img
                    src={e}
                    alt={e.substring(
                      e.lastIndexOf("/") + 1,
                      e.lastIndexOf(".")
                    )}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
