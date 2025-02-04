import React, { useState } from "react";
import styles from "./TopMatches.module.css";
import { useNavigate, useLocation } from "react-router-dom";

function TopMatches() {
  const userType = localStorage.getItem("userType");
  const navigate = useNavigate();
  const location = useLocation();
  const { sportData } = location.state || {};
  const tournaments = sportData.tournaments;
  const matches = sportData.matches;
  const [isOpen, setIsOpen] = useState({});
  const [activeTab, setActiveTab] = useState(null); // начальное значение зависит от текущей страницы

  const handleMatchClick = (tournament) => {
    const tournamentMatches = matches.filter(
      (match) => match.tournament_id === tournament.id
    );

    navigate("/voting", {
      state: {
        tournament: tournament,
        matches: tournamentMatches,
      },
    });
  };
  const toggleOpen = (tournamentId) => {
    setIsOpen((prev) => ({
      ...prev,
      [tournamentId]: !prev[tournamentId], // Переключаем состояние конкретного турнира
    }));
  };
  console.log(sportData);

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.topBar}>
          <div className={styles.backArrow}>
            <img src="arrow.png" alt="#" onClick={() => navigate("/")} />
            <h1>BroDonate</h1>
          </div>
          <div className={styles.iconsContainer}>
            <img
              src="Notification.png"
              alt=""
              className={styles.notification}
              onClick={() => {
                navigate("/Notifications");
              }}
            />
            <img
              src="search.png"
              alt=""
              className={styles.search}
              onClick={() => navigate("/Saerch")}
            />
          </div>
        </div>{" "}
        <h2>Топовые события</h2>
        {tournaments.map((tournament) => (
          <div key={tournament.id}>
            <div className={styles.competitions}>
              <div className={styles.competitionsText}>
                <p>{tournament.discipline_name}</p>
                <p>{tournament.name}</p>
              </div>
              <img
                src={isOpen[tournament.id] ? "up.png" : "down.png"}
                alt=""
                onClick={() => toggleOpen(tournament.id)}
                style={{ cursor: "pointer" }}
              />
            </div>
            {isOpen[tournament.id] && (
              <div
                onClick={() => handleMatchClick(tournament)}
                style={{ cursor: "pointer" }}
                className={styles.dropdownContents}
              >
                {matches
                  .filter((match) => match.tournament_id === tournament.id)
                  .map((match) => (
                    <div key={match.id} className={styles.dropdownContent}>
                      <div className={styles.timeDate}>
                        <p>{match.match_date}</p>
                      </div>
                      <div className={styles.fightersNames}>
                        <div className={styles.fighterName}>
                          <img
                            className={styles.Avatar}
                            src={
                              match.fighter1_photo
                                ? match.fighter1_photo
                                : "Avatar.png"
                            }
                            alt=""
                          />
                          <p className={styles.name}>{match.competitor_1}</p>{" "}
                        </div>
                        <div className={styles.fighterName}>
                          <img
                            className={styles.Avatar}
                            src={
                              match.fighter2_photo
                                ? match.fighter2_photo
                                : "Avatar.png"
                            }
                            alt=""
                          />
                          <p className={styles.name}>{match.competitor_2}</p>{" "}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className={styles.bottomNav}>
        <div
          className={styles.catalogItem}
          onClick={() => {
            navigate("/");
            setActiveTab("catalog");
          }}
        >
          <img
            src={
              activeTab === "catalog"
                ? "ui-checks-grid-black.png"
                : "ui-checks-grid.png"
            }
            alt=""
            className={styles.catalogImage}
          />
          <p
            className={`${styles.catalogText} ${
              activeTab === "catalog" ? styles.activeText : ""
            }`}
          >
            Главная
          </p>
        </div>

        <div
          className={styles.catalogItem}
          onClick={() => {
            navigate("/alltournaments");
            setActiveTab("tournaments");
          }}
        >
          <img
            src={
              activeTab === "tournaments"
                ? "lightning-charge-black.png"
                : "lightning-charge.png"
            }
            alt=""
            className={styles.catalogImage}
          />
          <p
            className={`${styles.catalogText} ${
              activeTab === "tournaments" ? styles.activeText : ""
            }`}
          >
            Турниры
          </p>
        </div>

        <div
          className={styles.catalogItem}
          onClick={() => {
            navigate("/Referal");
            setActiveTab("referrals");
          }}
        >
          <img
            src={activeTab === "referrals" ? "gift-black.png" : "gift.png"}
            alt=""
            className={styles.catalogImage}
          />
          <p
            className={`${styles.catalogText} ${
              activeTab === "referrals" ? styles.activeText : ""
            }`}
          >
            Рефералы
          </p>
        </div>

        <div
          className={styles.catalogItem}
          onClick={() => {
            if (userType === "fan") {
              navigate("/profileuser");
            } else {
              navigate("/profilefighter");
            }
            setActiveTab("profile");
          }}
        >
          <img
            src={activeTab === "profile" ? "person-black.png" : "person.png"}
            alt=""
            className={styles.catalogImage}
          />
          <p
            className={`${styles.catalogText} ${
              activeTab === "profile" ? styles.activeText : ""
            }`}
          >
            Профиль
          </p>
        </div>
      </div>
    </div>
  );
}

export default TopMatches;
