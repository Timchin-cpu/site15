import React, { useEffect, useState } from "react";
import styles from "./Achievements.module.css";
import { useNavigate } from "react-router-dom";

function Achievements() {
  const navigate = useNavigate();
  const userType = localStorage.getItem("userType");
  const userId = localStorage.getItem("userId");
  console.log(userId);
  const [activeTab, setActiveTab] = useState(null); // начальное значение зависит от текущей страницы

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.topBar}>
          <div className={styles.backArrow}>
            <img src="arrow.png" alt="#" onClick={() => navigate(-1)} />
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

        <div
          className={styles.mainAchievement}
          onClick={() => {
            navigate("/allAchievements");
          }}
        >
          <div className={styles.abotMainAchievement}>
            <h2>Золотой наставник</h2>
            <p className={styles.aboutText}>
              Ваш вес в сообществе огромен, вы задаёте тон поддержки
            </p>
          </div>
          <div className={styles.starCounts}>
            <img src="Star icon.png" alt="" />
            <h2>15/20</h2>
          </div>
        </div>
        <h2>Все достижения</h2>
        <div className={styles.allAchievements}>
          <div className={styles.Achievements}>
            <p className={styles.aboutText}>Скаут перспектив</p>
            <img
              className={styles.achievementImg}
              src="boxer-beginner (1) 1.png"
              alt=""
            />
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{
                  width: `${(15 / 20) * 100}%`, // Example: 15 out of 20 donations
                }}
              />
            </div>
            <div className={styles.stars}>
              <img src="Star icon.png" alt="" />
              <img src="Star icon.png" alt="" />
              <img src="Star icon.png" alt="" />
            </div>
            <p className={styles.task}>Отправить 20 донатов разным бойцам</p>
          </div>
          <div className={styles.Achievements}>
            <p className={styles.aboutText}>Верный союзник</p>
            <img
              className={styles.achievementImg}
              src="-boxer-master 1.png"
              alt=""
            />
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{
                  width: `${(15 / 20) * 100}%`, // Example: 15 out of 20 donations
                }}
              />
            </div>
            <div className={styles.stars}>
              <img src="Star icon.png" alt="" />
              <img src="Star icon.png" alt="" />
              <img src="Star icon.png" alt="" />
            </div>
            <p className={styles.task}>Отправить 5 донатов одному бойцу</p>
          </div>
          <div className={styles.Achievements}>
            <p className={styles.aboutText}>Большая ставка</p>
            <img
              className={styles.achievementImg}
              src="-benefactor (1) 1.png"
              alt=""
            />
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{
                  width: `${(15 / 20) * 100}%`, // Example: 15 out of 20 donations
                }}
              />
            </div>
            <div className={styles.stars}>
              <img src="Star icon.png" alt="" />
              <img src="Star icon.png" alt="" />
              <img src="Star icon.png" alt="" />
            </div>
            <p className={styles.task}>
              Отправить донат со ставкой 5000 и более
            </p>
          </div>
          <div className={styles.Achievements}>
            <p className={styles.aboutText}>Голос справедливости</p>
            <img
              className={styles.achievementImg}
              src="-voting-man 1.png"
              alt=""
            />
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{
                  width: `${(15 / 20) * 100}%`, // Example: 15 out of 20 donations
                }}
              />
            </div>
            <div className={styles.stars}>
              <img src="Star icon.png" alt="" />
              <img src="Star icon.png" alt="" />
              <img src="Star icon.png" alt="" />
            </div>
            <p className={styles.task}>Повысить рейтинг любому бойцу 15 раз</p>
          </div>
          <div className={styles.Achievements}>
            <p className={styles.aboutText}>Справедливость восторжествует</p>
            <img className={styles.achievementImg} src="fighter.png" alt="" />
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{
                  width: `${(15 / 20) * 100}%`, // Example: 15 out of 20 donations
                }}
              />
            </div>
            <div className={styles.stars}>
              <img src="Star icon.png" alt="" />
              <img src="Star icon.png" alt="" />
              <img src="Star icon.png" alt="" />
            </div>
            <p className={styles.task}>
              Снизить рейтинг выбранному бойцу 1 раз
            </p>
          </div>
          <div className={styles.Achievements}>
            <p className={styles.aboutText}>Эпический фанат</p>
            <img
              className={styles.achievementImg}
              src="boxer-beginner.png"
              alt=""
            />
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{
                  width: `${(15 / 20) * 100}%`, // Example: 15 out of 20 donations
                }}
              />
            </div>
            <div className={styles.stars}>
              <img src="Star icon.png" alt="" />
              <img src="Star icon.png" alt="" />
              <img src="Star icon.png" alt="" />
            </div>
            <p className={styles.task}>Стать лидером топа фанатом 2 раза</p>
          </div>
          <div className={styles.Achievements}>
            <p className={styles.aboutText}>Совет турнира</p>
            <img
              className={styles.achievementImg}
              src="-boxing-referee (1) 1.png"
              alt=""
            />
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{
                  width: `${(15 / 20) * 100}%`, // Example: 15 out of 20 donations
                }}
              />
            </div>
            <div className={styles.stars}>
              <img src="Star icon.png" alt="" />
              <img src="Star icon.png" alt="" />
              <img src="Star icon.png" alt="" />
            </div>
            <p className={styles.task}>
              Проголосовать за все категории турнира 1 раз
            </p>
          </div>
          <div className={styles.Achievements}>
            <p className={styles.aboutText}>Внимательный рефери</p>
            <img
              className={styles.achievementImg}
              src="-boxing-referee 1.png"
              alt=""
            />
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{
                  width: `${(15 / 20) * 100}%`, // Example: 15 out of 20 donations
                }}
              />
            </div>
            <div className={styles.stars}>
              <img src="Star icon.png" alt="" />
              <img src="Star icon.png" alt="" />
              <img src="Star icon.png" alt="" />
            </div>
            <p className={styles.task}>Участвовать в 10 голосованиях</p>
          </div>
          <div className={styles.Achievements}>
            <p className={styles.aboutText}>Выдающийся благотворитель</p>
            <img
              className={styles.achievementImg}
              src="-benefactor.png"
              alt=""
            />
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{
                  width: `${(15 / 20) * 100}%`, // Example: 15 out of 20 donations
                }}
              />
            </div>
            <div className={styles.stars}>
              <img src="Star icon.png" alt="" />
              <img src="Star icon.png" alt="" />
              <img src="Star icon.png" alt="" />
            </div>
            <p className={styles.task}>Отправить 50 донатов любым бойцам</p>
          </div>
          <div className={styles.Achievements}>
            <p className={styles.aboutText}>Единомышленники</p>
            <img
              className={styles.achievementImg}
              src="2-fighter 1.png"
              alt=""
            />
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{
                  width: `${(15 / 20) * 100}%`, // Example: 15 out of 20 donations
                }}
              />
            </div>
            <div className={styles.stars}>
              <img src="Star icon.png" alt="" />
              <img src="Star icon.png" alt="" />
              <img src="Star icon.png" alt="" />
            </div>
            <p className={styles.task}>Пригласить 10 фанатов</p>
          </div>
          <div className={styles.Achievements}>
            <p className={styles.aboutText}>Менеджер легенд</p>
            <img className={styles.achievementImg} src="image 12.png" alt="" />
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{
                  width: `${(15 / 20) * 100}%`, // Example: 15 out of 20 donations
                }}
              />
            </div>
            <div className={styles.stars}>
              <img src="Star icon.png" alt="" />
              <img src="Star icon.png" alt="" />
              <img src="Star icon.png" alt="" />
            </div>
            <p className={styles.task}>Пригласить</p>
          </div>
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

export default Achievements;
