import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/portfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
} from "../../data";

export const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured",
      key : "feature",
    },
    {
      id: "web",
      title: "Web App",
      key : "web app",
    },
    {
      id: "design",
      title: "UI Design",
      key : "ui design",
    },
    {
      id: "mobile",
      title: "Mobile UIs",
      key : "mobile ui",
    },
  ];
  useEffect(() => {
    //using seitch cases

    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]); //whenever dependency changes it will run useEffect

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item, index) => (
          <PortfolioList
          key={index}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d, index) => (

          <div className="item" key={index}>
            <img src={d.img}alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
