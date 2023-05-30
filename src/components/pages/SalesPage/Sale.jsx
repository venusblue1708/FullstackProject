import React from "react";
import "./Sale.css";
const Sale = () => {
  return (
    <div>
      <div className="sale_img">
        <div>
          <h2 className="sale_header">
            Весеннее
            <br /> потепление - скидки <br /> до 50%
          </h2>
          <p className="sale_content">
            Интенсивная практика, поддержка кураторов <br /> и гарантированное
            трудоустройство
          </p>
        </div>
        <img
          className="img"
          width={600}
          src="https://248006.selcdn.ru/MainSite/63210c73-957f-44d2-90d0-1a7e6838d423/c/ggzsxibz-desktop-webp.webp"
          alt="img"
        />
      </div>
      <div></div>
    </div>
  );
};

export default Sale;
