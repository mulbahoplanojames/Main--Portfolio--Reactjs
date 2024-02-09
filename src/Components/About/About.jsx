import Styles from "/src/Components/About/About.module.css";
import Button from "../../UI/ButtonsM/Button";
import ViewCard from "../ViewCard/ViewCard";
import "animate.css";

const About = () => {
  return (
    <>
      <div id={Styles.about}>
        <div className={Styles.about_wripper}>
          <div
            className={`${Styles.about_content} ${Styles.about_content_one}`}
          >
            <p className={Styles.key_title}>- NICE TO MEET YOU</p>
            <h2 className={Styles.name}>Oplano James Mulbah</h2>
            <p className={Styles.position}>
              Web <span className={Styles.aminate}>Developer</span>
            </p>
            <Button />
          </div>
          <div
            className={`${Styles.about_content} ${Styles.about_content_two}`}
          >
            <p className={`${Styles.details} ${Styles.details_one}`}>
              Hello there! My name is Oplano James Mulbah. I am a web developer
              & Software Engineer, and I&apos;m very passionate and dedicated to
              my work.
            </p>
            <p className={Styles.details}>
              With +6 months experience as a professional a wed developer, I
              have acquired the skills and knowledge necessary to make your
              project a success. I enjoy every step of the design process, from
              discussion and collaboration.
            </p>
          </div>
        </div>

        <div className={Styles.view_card_wripper}>
          <ViewCard
            number={"6"}
            description={"MONTHS OF EXPERIENCE"}
            className="one"
          />
          <ViewCard number={"10+"} description={"PROJECTS COMPLECTED"} />
          <ViewCard number={"1"} description={"HAPPY CLIENT"} />
        </div>
      </div>
    </>
  );
};

export default About;
