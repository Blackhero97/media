import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home(props) {
  const [active, setActive] = useState(null);
  const [btn, setbtns] = useState([
    {
      id: 1,
      btnName: "All",
    },
    {
      id: 2,
      btnName: "Movies",
    },
    {
      id: 3,
      btnName: "TV Shows",
    },
  ]);
  const ActiveBtn = (id) => {
    if (active == id) {
      return setActive(null);
    }

    setActive(id);
  };
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://008f807c29681449.mokky.dev/movies")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return (
    <>
      <main className="container top">
        <div className="main-text-box">
          <h2 className="title">Black Cinema Films </h2>
          <p>
            Bu sayt orqali siz mening tanlovim bo'lgan filmlar va tvshows lar
            haqida ma`lumot olishingiz va qaysi ishonchi saytdan ko'rishingiz
            mumkinligini yoritib boraman. Maqsadim foydasiz filmlar ko'rib
            qimmatli vaqtingizni saqlab qolish 😉
          </p>
          {props.search}
        </div>
        <div className="main-filter-box">
          {btn &&
            btn.map((e, id) => {
              return (
                <button
                  className={active == id ? "active" : ""}
                  onClick={() => ActiveBtn(id)}
                  key={id}
                >
                  {e.btnName}
                </button>
              );
            })}
        </div>
        <div className="main-data-box">
          {data &&
            data
              .filter((e) => e.title.includes(props.value))
              .map((e, id) => {
                return (
                  <div key={id} className="main-card">
                    <Link to={`/movieitem/${e.id}`}>
                      <div className="main-card-img-box">
                        <div className="rating-box">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M9.15327 2.33999L10.3266 4.68666C10.4866 5.01333 10.9133 5.32666 11.2733 5.38666L13.3999 5.73999C14.7599 5.96666 15.0799 6.95333 14.0999 7.92666L12.4466 9.57999C12.1666 9.85999 12.0133 10.4 12.0999 10.7867L12.5733 12.8333C12.9466 14.4533 12.0866 15.08 10.6533 14.2333L8.65994 13.0533C8.29994 12.84 7.70661 12.84 7.33994 13.0533L5.34661 14.2333C3.91994 15.08 3.05327 14.4467 3.42661 12.8333L3.89994 10.7867C3.98661 10.4 3.83327 9.85999 3.55327 9.57999L1.89994 7.92666C0.926606 6.95333 1.23994 5.96666 2.59994 5.73999L4.72661 5.38666C5.07994 5.32666 5.50661 5.01333 5.66661 4.68666L6.83994 2.33999C7.47994 1.06666 8.51994 1.06666 9.15327 2.33999Z"
                              stroke="#FFAD49"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <span>{e.rating}</span>
                        </div>
                        <img src={e.img} alt="" />
                      </div>
                      <h4>{e.title}</h4>
                    </Link>
                  </div>
                );
              })}
        </div>
      </main>
    </>
  );
}

export default Home;
