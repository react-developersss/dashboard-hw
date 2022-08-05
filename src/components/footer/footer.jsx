import "./footer.scss";
import React, { Component } from 'react';
import {footerIcon} from "../../assets/images/index";
import {faker} from "@faker-js/faker";

function Footer({dashboard}) {
    return (
      <div className = "avatar">
        <img className = "avatar-img" src={faker.internet.avatar()} alt="" />
        <div className={dashboard ? "hide " : "content"}>
        <div className="avatar-info">
          <h3 className="avatar-name">{faker.name.firstName("male")}</h3>
          <p className="avatar-mail">{faker.random.numeric(4) + faker.lorem.word(3) + "@gmail.com"}</p>
        </div>
        {footerIcon}
        </div>
      </div>
    )
}

export default Footer
