import React from "react";
import "./CommunitySkillbox.css";
import CommunityCarousel from "./CommunityCarousel";
import SkillBoxCard from "./SkillBoxCard";

const CommunitySkillbox = () => {
  return (
    <div className="skill-wrapper">
      <div className="img-skill-box">
        <img
          src="https://static.tildacdn.com/tild3062-3139-4165-b135-616235373834/Frame_1321315887-3.png"
          alt=""
        />
      </div>

      <div className="skill-second-box">
        <p>
          Skillbox — не просто онлайн-курсы. <br /> Это большое и дружное
          сообщество <br />
          специалистов, которые растут и развиваются <br /> на платформе. Вместе
          они:
        </p>
        <div className="tiny-icon-box">
          <div className="tiny-icon-things">
            <img
              src="https://static.tildacdn.com/tild6436-3638-4737-a136-303862303131/done_circle.svg"
              alt=""
            />

            <p style={{ marginLeft: "15px" }}>
              <strong>Делают крутые проекты для конкурсов</strong>
            </p>
          </div>

          <div className="tiny-icon-things">
            <img
              src="https://static.tildacdn.com/tild6436-3638-4737-a136-303862303131/done_circle.svg"
              alt=""
            />

            <p style={{ marginLeft: "15px" }}>
              <strong>Участвуют в хакатонах и дизайн-спринтах</strong>
            </p>
          </div>

          <div className="tiny-icon-things">
            <img
              src="https://static.tildacdn.com/tild6436-3638-4737-a136-303862303131/done_circle.svg"
              alt=""
            />

            <p style={{ marginLeft: "15px" }}>
              <strong>
                Находят вдохновение, поддержку, партнеров и коллег
              </strong>
            </p>
          </div>

          <div className="tiny-icon-things">
            <img
              src="https://static.tildacdn.com/tild6436-3638-4737-a136-303862303131/done_circle.svg"
              alt=""
            />

            <p style={{ marginLeft: "15px" }}>
              <strong>И даже строят свой первый бизнес</strong>
            </p>
          </div>
        </div>
      </div>

      <CommunityCarousel />

      <div className="skill-li" style={{ display: "flex" }}>
        <li>
          <strong>Нас 233 500 человек</strong>
        </li>

        <li>
          <strong>7 тематических сообществ</strong>
        </li>

        <li>
          <strong>7 коворкингов</strong>
        </li>

        <li>
          <strong>10+ совместных проектов в месяц</strong>
        </li>
      </div>
      <div className="skill-third-box">
        <h1>Достижения участников сообщества</h1>

        <p>
          Во время курсов вы сможете объединиться с другими <br />{" "}
          пользователями, поучаствовать в творческих конкурсах, <br /> выполнить
          проект для стажировки и найти работодателей, <br />
          которые оценят ваши умения по достоинству.
        </p>
      </div>

      <div className="card-skill-box">
        <h2>
          Вместе с покупкой курсов вы получаете доступ к обширной экосистеме
          Skillbox
        </h2>

        <div style={{ display: "flex", flexWrap: "wrap", paddingLeft: "5%" }}>
          <SkillBoxCard
            className="skill-boxes"
            text="Коворкинги в городахSkillbox Челлендж"
            image="https://static.tildacdn.com/tild3465-3337-4934-b134-313936356230/Rectangle_6505-2.png"
            photo="https://static.tildacdn.com/tild3561-6537-4833-b030-396661333162/Rectangle_6510-2.png"
          />
          <SkillBoxCard
            className="skill-boxes"
            text="Чаты в телеграм"
            image="https://static.tildacdn.com/tild3836-6563-4334-b136-633737663461/Frame_1321315929-2.png"
            photo="https://static.tildacdn.com/tild3561-6537-4833-b030-396661333162/Rectangle_6510-2.png"
          />
          <SkillBoxCard
            className="skill-boxes"
            text="Чаты в телеграм"
            image="https://thumb.tildacdn.com/tild3863-6163-4364-b839-646533383933/-/cover/202x202/center/center/-/format/webp/Frame_1321315412-2.png"
            photo="https://static.tildacdn.com/tild3561-6537-4833-b030-396661333162/Rectangle_6510-2.png"
          />

          <SkillBoxCard
            className="skill-boxes"
            text="Чаты в телеграм"
            image="https://static.tildacdn.com/tild3463-3935-4239-a234-306538336439/Group_1077242088.svg"
            photo="https://static.tildacdn.com/tild3234-3461-4238-a435-393530383564/Group_1077242084.svg"
          />

          <SkillBoxCard
            className="skill-boxes"
            text="Чаты в телеграм"
            image="https://thumb.tildacdn.com/tild6464-6362-4238-b032-393930303736/-/cover/202x202/center/center/-/format/webp/Frame_1321315929-1-2.png"
            photo="https://static.tildacdn.com/tild3234-3461-4238-a435-393530383564/Group_1077242084.svg"
          />

          <SkillBoxCard
            className="skill-boxes"
            text="Чаты в телеграм"
            image="https://thumb.tildacdn.com/tild3563-3062-4261-a661-653437386335/-/cover/202x202/center/center/-/format/webp/Frame_1321315673.png"
            photo="https://static.tildacdn.com/tild3234-3461-4238-a435-393530383564/Group_1077242084.svg"
          />
        </div>
      </div>

      <div className="skill-end-box">
        <h2>Офлайн-мероприятия</h2>
        <p>
          Пользователи Skillbox общаются не только в онлайне. Они <br />{" "}
          встречаются на офлайн-воркшопах, защищают итоговые <br /> проекты
          вместе с экспертами и другими участниками, ездят <br /> в буткемпы и
          узнают новое в лекториях.
        </p>
      </div>
      <img
        style={{ width: "100%" }}
        src="https://thumb.tildacdn.com/tild3034-3264-4338-b065-643030343737/-/format/webp/DSCF3724_1-2.png"
        alt=""
      />
    </div>
  );
};

export default CommunitySkillbox;
