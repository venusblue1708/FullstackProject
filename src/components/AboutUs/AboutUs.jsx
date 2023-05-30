import React from "react";
import ReactPlayer from "react-player";
import "./AboutUs.css";
import aboutUs from "../images/aboutUs.png";
import aboutUsCard from "../images/aboutUs_card.png";
import Carousel from "./Carousel";

const AboutUs = () => {
  return (
    <main className="company_page">
      <header className="about_us_container">
        <h1 className="about_us_title">О НАС</h1>
        <p className="about_us_desc">
          Миссия Skillbox — дать возможность каждому быть актуальным и
          востребованным специалистом прямо сейчас. Вне зависимости от возраста
          и географии.
        </p>
      </header>
      <section>
        <div className="player_box">
          <ReactPlayer
            className="player1"
            width="80%"
            controls
            url="https://youtu.be/LX9Y_3NRpVs"
          />
        </div>

        <div className="company-info">
          <div>
            <p className="company-info_desc">
              Мы предлагаем большой выбор курсов для профессионального и
              личностного развития.
            </p>
          </div>
          <div>
            <ul className="company-info_list">
              <li className="company-info_item">
                <b className="copmany-info_subtitle">787</b>
                Курсов
              </li>
              <li className="company-info_item">
                <b className="copmany-info_subtitle">578</b>Кураторов
              </li>
              <li className="company-info_item">
                <b className="copmany-info_subtitle">652094</b>Пользователя
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="company_blog">
        <h2 className="company_blog_header">
          787 курсов по востребованным направлениям. Найдите то, что подходит
          именно вам.
        </h2>
        <div className="company-blog1">
          <div className="black_box">
            <h2>Как устроена платформа Skillbox</h2>
          </div>
          <div className="white_box">
            <p className="large-content">
              Круглосуточный доступ к личному кабинету
            </p>
            <p className="small-comtent">
              Смотрите видео онлайн в удобное время
            </p>
          </div>
          <div className="white_box">
            <p className="large-content">Курсы обновляются регулярно</p>
            <p className="small-comtent">
              Получаете знания, которые отвечают требованиям рынка труда
            </p>
          </div>
          <div className="white_box">
            <p className="large-content">
              Проверочные тесты и практические задания
            </p>
            <p className="small-comtent">
              Закрепляете теорию на практике и получаете обратную связь
            </p>
          </div>
          <div className="white_box">
            <p className="large-content">Кураторы — признанные профессионалы</p>
            <p className="small-comtent">
              Делятся опытом в решении бизнес‑задач и необходимыми инструментами
            </p>
          </div>
          <div className="black_box">
            <img
              className="img_blue"
              width={500}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMSL8r3qCI1uC4iRXMWNtS2CEnOW6Jxx8hU0WiiPkHeeF8PvclT6NAt3vW-CCXcsFfJ4c&usqp=CAU"
              alt=""
            />
          </div>
          <div className="white_box_bottom">
            <p className="large_content_bottom">
              Проекты от реальных заказчиков — партнёров Skillbox
            </p>
            <p className="small_content_bottom">
              Выполняете задания от крупных брендов: Сбербанка, «Газпромбанка»,
              «Мираторга», «Мегафона» и других.
            </p>
            <img className="white_box_img" src={aboutUs} alt="" />
          </div>
        </div>
        <div className="company-blog_bottom">
          <div className="company-blog_bottom__left">
            <h2 className="company-blog_bottom_header">
              С 2019 года мы помогли сменить работу 7000+ пользователям
            </h2>
            <p className="company-blog_bottom_content">
              Сотрудники Центра карьеры проводят консультации для пользователей
              платформы. Помогают им составить резюме, найти работу и пройти
              собеседование.
            </p>
          </div>
          <div className="company-blog_bottom__right">
            <img
              className="company-blog_bottom__img"
              src={aboutUsCard}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="carousel_box">
        <h2 className="carousel_box_header">
          Лекторий Skillbox — открытая площадка для выступлений, воркшопов и
          других ивентов
        </h2>
        <Carousel />
      </div>
    </main>
  );
};

export default AboutUs;
