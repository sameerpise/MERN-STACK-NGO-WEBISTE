import React from "react";

const Qualities = () => {
  const qualities = [
    {
      id: 1,
      image: "/pexels-rdne-stock-project-6646949.jpg",
      title: "COMMUNITY DEVELOPMENT",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis culpa odio numquam ill laudantium nobis non illum cupiditate vero possimus quod quia nam, unde, labore suscipit obcaecati minus voluptates, autem velit.Facere numquam cum modi, molestiae eius libero mollitia aut!",
    },
    {
      id: 2,
      image: "/pexels-rdne-stock-project-6646967.jpg",
      title: "TRANSPARENCY",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis culpa odio numquam ill laudantium nobis non illum cupiditate vero possimus quod quia nam, unde, labore suscipit obcaecati minus voluptates, autem velit.Facere numquam cum modi, molestiae eius libero mollitia aut!",
    },
    {
      id: 3,
      image: "/DOnation.jpg",
      title: "IMPACT MEASUREMENT",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis culpa odio numquam ill laudantium nobis non illum cupiditate vero possimus quod quia nam, unde, labore suscipit obcaecati minus voluptates, autem velit.Facere numquam cum modi, molestiae eius libero mollitia aut!",
    },
  ];
  return (
    <>
      <div className="qualities">
        <h2>Our Campigines</h2>
        <div className="container">
          {qualities.map((elememt) => {
            return (
              <div className="card" key={elememt.id} data-aos="fade-left" data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="">
                <div className="img-wrapper">
                  <img src={elememt.image} alt={elememt.title} />
                </div>
                <div className="content">
                  <p className="title">{elememt.title}</p>
                  <p className="description">{elememt.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Qualities;
