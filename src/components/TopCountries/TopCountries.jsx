import React, { useState } from "react";
import styles from "./TopCountries.module.css";
import { useNavigate, useLocation } from "react-router-dom";

function TopCountries() {
  const userType = localStorage.getItem("userType");
  const [isGridView, setIsGridView] = useState(false);

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(null); // начальное значение зависит от текущей страницы

  const location = useLocation();
  const { fighters, fightersVoted } = location.state || {};
  const { users, sortedUsers, countryVotes } = location.state || {};
  console.log(sortedUsers);

  console.log(fighters);
  //   console.log(activeSection);
  const handleFighterClick = (fighter) => {
    navigate("/StatsFighterFan", {
      state: {
        fighterData: fighter,
      },
    });
  };
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
        </div>
        <h2>Топ стран по голосованию</h2>
        <div className={styles.objects}>
          {countryVotes.map((country, index) => (
            <div key={country.country} className={styles.countryItem}>
              {" "}
              <p className={styles.index}>{index + 1}</p>
              <div className={styles.countryInfo}>
                <img
                  src={`/${country.country.toLowerCase()}.png`}
                  alt={country.country}
                  className={styles.flag}
                />
                <span className={styles.text}>{country.country}</span>
              </div>
              <span className={styles.text}>{country.total_votes}</span>
            </div>
          ))}
        </div>
        <h2>Топ бойцов по сборам</h2>
<img 
  src={isGridView ? "grid-view.png" : "scroll-view.png"}
  className={styles.toggleView}
  onClick={() => setIsGridView(!isGridView)}
/>        <div className={`${styles.objects} ${isGridView ? styles.grid : styles.scroll}`}>
          {fighters.map((fighter, index) => (
            <div
              key={fighter.id}
              className={styles.fighterItem}
              onClick={() => handleFighterClick(fighter)}
            >
              <p className={styles.index}>{index + 1}</p>
              <div className={styles.fighterAbout}>
                <img
                  src={
                    fighter.photo_url ? `${fighter.photo_url}` : "Avatar.png"
                  }
                  alt={fighter.name}
                />
                <p className={styles.text}>
                  {fighter.name} {fighter.surname[0]}.
                </p>
                <p className={styles.textGrey}>{fighter.discipline}</p>
              </div>

              <p className={styles.money}>{fighter.donat_now} ₽</p>
            </div>
          ))}
        </div>

        <h2>Топ бойцов по голосованию</h2>
        <div className={styles.objects}>
          {fightersVoted.map((fighter, index) => (
            <div
              key={fighter.id}
              className={styles.fighterItem}
              onClick={() => handleFighterClick(fighter)}
            >
              {" "}
              <p className={styles.index}>{index + 1}</p>
              <div className={styles.fighterAbout}>
                <img
                  src={
                    fighter.photo_url ? `${fighter.photo_url}` : "Avatar.png"
                  }
                  alt={fighter.name}
                />
                <p className={styles.text}>
                  {fighter.name} {fighter.surname[0]}.
                </p>
                <p className={styles.textGrey}>{fighter.discipline}</p>
              </div>
              <p className={styles.money}>
                <>{fighter.vote_fan}</>
              </p>
            </div>
          ))}
        </div>
        <h2>Топ фанатов по донатам</h2>
        <div className={styles.objects}>
          {users.map((user, index) => (
            <div key={user.id} className={styles.userItem}>
              {" "}
              <p className={styles.index}>{index + 1}</p>
              <div className={styles.userAbout}>
                <img
                  src={user.photo_url ? `${user.photo_url}` : "Avatar.png"}
                  alt={user.name}
                />
                <p className={styles.text}>{user.name}</p>
                <p className={styles.textGrey}>{user.country}</p>
              </div>
              <p className={styles.money}>{user.total_donations} ₽</p>
            </div>
          ))}
        </div>
        <h2>Топ фанатов по голосам</h2>
        <div className={styles.objects}>
          {sortedUsers.map((user, index) => (
            <div key={user.id} className={styles.userItem}>
              {" "}
              <p className={styles.index}>{index + 1}</p>
              <div className={styles.userAbout}>
                <img
                  src={user.photo_url ? `${user.photo_url}` : "Avatar.png"}
                  alt={user.name}
                />
                <p className={styles.text}>{user.name}</p>
                <p className={styles.textGrey}>{user.country}</p>
                {/* <p className={styles.textGrey}>{user.country}</p> */}
              </div>
              <p className={styles.money}>{user.total_votes}</p>
            </div>
          ))}
        </div>
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

export default TopCountries;
