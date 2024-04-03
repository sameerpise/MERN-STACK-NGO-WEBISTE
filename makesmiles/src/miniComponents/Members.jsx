import React from "react";

const Members = () => {
  const members = [
    {
      id: 1,
      image: "/m1.jpg",
      title: "Alexa",
      doneta:"$12311"
    },
    {
      id: 2,
      image: "/m2.jpg",
      title: "Jhon",
      doneta:"$12311"
    },
    {
      id: 3,
      image: "/m4.jpg",
      title: "Michael",
      doneta:"$12311"
    },
    {
      id: 4,
      image: "/m4.jpg",
      title: "Rober",
      doneta:"$12311"
    },
    {
      id: 5,
      image: "/m5.jpg",
      title: "Siri",
      doneta:"$12311"
    },
    {
      id: 6,
      image: "/m6.jpg",
      title: "Tobey",
      doneta:"$12311"
    },
    {
      id: 7,
      image: "/m7.jpg",
      title: "Jhon Wick",
      doneta:"$12311"
    },
  ];
  return (
    <>
      <section className="members">
        <div className="container">
          <div className="heading_section" data-aos="fade-left" data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="">
            <h2 className="heading">❤Peopple With Golden Hearts ❤</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              accusamus aspernatur hic laboriosam blanditiis atque error eius
              dolorem fuga harum?
            </p>
          </div>
          <div className="members_container">
            {members.map((element) => (
              <div className="card" key={element.id} data-aos="fade-left" data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="">
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
                <h5> Doneted Amount <br></br><span>{element.doneta}</span></h5>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Members;
