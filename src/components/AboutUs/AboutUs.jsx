import React from "react";
import ReactPlayer from "react-player";
import "./AboutUs.css";
import aboutUs from "../images/aboutUs.png";
import aboutUsCard from "../images/aboutUs_card.png";
import Carousel from "./Carousel";

const AboutUs = () => {
  return (
    <main class="company_page">
      <header class="about_us_container">
        <h1 class="about_us_title">О НАС</h1>
        <p class="about_us_desc">
          Миссия Skillbox — дать возможность каждому быть актуальным и
          востребованным специалистом прямо сейчас. Вне зависимости от возраста
          и географии.
        </p>
      </header>
      <section>
        <div class="player_box">
          <ReactPlayer
            className="player1"
            width="80%"
            controls
            url="https://youtu.be/LX9Y_3NRpVs"
          />
        </div>

        <div class="company-info">
          <div>
            <p class="company-info_desc">
              Мы предлагаем большой выбор курсов для профессионального и
              личностного развития.
            </p>
          </div>
          <div class="company_info_blog">
            <ul class="company-info_list">
              <li class="company-info_item">
                <b class="copmany-info_subtitle">787</b>
                Курсов
              </li>
              <li class="company-info_item">
                <b class="copmany-info_subtitle">578</b>Кураторов
              </li>
              <li class="company-info_item">
                <b class="copmany-info_subtitle">652094</b>Пользователя
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div class="company_blog">
        <h2 class="company_blog_header">
          787 курсов по востребованным направлениям. Найдите то, что подходит
          именно вам.
        </h2>
        <div class="company-blog1">
          <div class="black_box">
            <h2 class="black_box_text">Как устроена платформа Skillbox</h2>
          </div>
          <div class="white_box">
            <p class="large-content">
              Круглосуточный доступ к личному кабинету
            </p>
            <p class="small-comtent">Смотрите видео онлайн в удобное время</p>
          </div>
          <div class="white_box">
            <p class="large-content">Курсы обновляются регулярно</p>
            <p class="small-comtent">
              Получаете знания, которые отвечают требованиям рынка труда
            </p>
          </div>
          <div class="white_box">
            <p class="large-content">
              Проверочные тесты и практические задания
            </p>
            <p class="small-comtent">
              Закрепляете теорию на практике и получаете обратную связь
            </p>
          </div>
          <div class="white_box">
            <p class="large-content">Кураторы — признанные профессионалы</p>
            <p class="small-comtent">
              Делятся опытом в решении бизнес‑задач и необходимыми инструментами
            </p>
          </div>
          <div class="black_box">
            <img
              class="img_blue"
              width={500}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMSL8r3qCI1uC4iRXMWNtS2CEnOW6Jxx8hU0WiiPkHeeF8PvclT6NAt3vW-CCXcsFfJ4c&usqp=CAU"
              alt=""
            />
          </div>
          <div class="white_box_bottom">
            <p class="large_content_bottom">
              Проекты от реальных заказчиков — партнёров Skillbox
            </p>
            <p class="small_content_bottom">
              Выполняете задания от крупных брендов: Сбербанка, «Газпромбанка»,
              «Мираторга», «Мегафона» и других.
            </p>
            <img class="white_box_img" src={aboutUs} alt="" />
          </div>
        </div>
        <div class="company-blog_bottom">
          <div class="company-blog_bottom__left">
            <h2 class="company-blog_bottom_header">
              С 2019 года мы помогли сменить работу 7000+ пользователям
            </h2>
            <p class="company-blog_bottom_content">
              Сотрудники Центра карьеры проводят консультации для пользователей
              платформы. Помогают им составить резюме, найти работу и пройти
              собеседование.
            </p>
          </div>
          <div class="company-blog_bottom__right">
            <img class="company-blog_bottom__img" src={aboutUsCard} alt="" />
          </div>
        </div>
      </div>
      <div class="carousel_box">
        <h2 class="carousel_box_header">
          Лекторий Skillbox — открытая площадка для выступлений, воркшопов и
          других ивентов
        </h2>
        <Carousel />
      </div>
    </main>
  );
};

export default AboutUs;
