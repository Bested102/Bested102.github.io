import { useEffect, useRef } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  let x = window.matchMedia("(max-width: 767px)");
  const header = useRef(0);
  const nav = useRef(0);
  const sections = ["home", "about", "projects", "contact"];

  useEffect(() => {
    function myFunction(x) {
      let menuItem = document.querySelectorAll(".nav li");
      if (x.matches) {
        document.body.prepend(nav.current);
        nav.current.classList.add("hide-mobile");
        menuItem.forEach(
          (e, i) =>
            (e.onclick = () => {
              closeMobile();
              scroll(sections[i]);
            })
        );
        document.querySelector(".nav svg").onclick = closeMobile;
        document.body.addEventListener("click", (e) => {
          if (
            e.target === document.body &&
            nav.current.classList.contains("show-mobile")
          ) {
            closeMobile();
          }
        });
      } else {
        document.querySelector("#theme-toggle").before(nav.current);
        nav.current.classList.remove("show-mobile");
        nav.current.classList.remove("hide-mobile");

        menuItem.forEach((e) => (e.onclick = () => {}));
      }
    }
    myFunction(x);
    x.addEventListener("change", myFunction);
    toggleSticky();
    window.addEventListener("scroll", toggleSticky);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [x]);

  function showMobile() {
    nav.current.classList.remove("hide-mobile");
    nav.current.classList.add("show-mobile");
  }

  function closeMobile() {
    nav.current.classList.remove("show-mobile");
    nav.current.classList.add("hide-mobile");
  }

  function toggleSticky() {
    header.current.classList.toggle(
      "sticky",
      window.scrollY > header.current.offsetHeight / 2
    );
  }

  function scroll(e) {
    var scrollDiv = document.getElementById(e).offsetTop - 65;
    window.scrollTo({ top: scrollDiv, behavior: "smooth" });
  }

  return (
    <header ref={header}>
      <div className="container hidden-up">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1.3em"
          viewBox="0 0 512 512"
          onClick={showMobile}
          className="theme-change"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
        <h1 className="logo">Omar.dev</h1>
        <ul className="nav" ref={nav}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.1em"
            viewBox="0 0 384 512"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
          {sections.map((e) => {
            return (
              <li key={e}>
                <a onClick={() => scroll(e)}>
                  {e.charAt(0).toUpperCase() + e.slice(1)}
                </a>
              </li>
            );
          })}
        </ul>
        <ThemeToggle />
      </div>
    </header>
  );
}
