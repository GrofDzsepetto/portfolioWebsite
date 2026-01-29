import "../styles/Home.css";
import ProfileImage from "../assets/images/main.jpg";

import "../i18n";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <section className="home">
      <div className="home-container">
        <div className="home-image">
          <img src={ProfileImage} alt="Home" />
        </div>

        <div className="home-content">
          <div className="home-header">
            <img className="home-avatar" src={ProfileImage} alt="Profile" />
            <h1>{t("home_title")}</h1>
          </div>

          <div className="home-cards">
            <div className="home-card">
              <h3>{t("home_experience_title")}</h3>
              <p>{t("home_experience")}</p>
            </div>

            <div className="home-card">
              <h3>{t("home_aimaster_title")}</h3>
              <p>{t("home_aimaster")}</p>
            </div>

            <div className="home-card">
              <h3>{t("home_degree_title")}</h3>
              <p>{t("home_degree")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
