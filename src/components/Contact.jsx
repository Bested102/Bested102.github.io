import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  const copyContent = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h1>Contact</h1>
        <div className="content">
          <div
            className="box hidden-left"
            onClick={()=> copyContent("omar101.business@gmail.com")}
            title="Copy to clipboard"
          >
            <div className="circle">
              <FontAwesomeIcon icon={faEnvelope} className="icon"/>
            </div>
            <div className="info">
              <h3>Mail</h3>
              <p>omar101.business@gmail.com</p>
            </div>
          </div>
          <div
          style={{transitionDelay:".3s"}}
            className="box hidden-left"
            onClick={()=> copyContent("bested.")}
            title="Copy to clipboard"
          >
            <div className="circle">
              <FontAwesomeIcon icon={faDiscord} className="icon"/>
            </div>
            <div className="info">
              <h3>Discord</h3>
              <p>&quot;bested.&quot;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
