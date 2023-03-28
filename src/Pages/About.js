import { Images } from "../Components/ImagesList";

export const AboutNav = () => {
  return (
    <div className="container">
      <div className="about">
        <div>
          <img id="main_pics" src={Images.sec2x1_pics} alt="main_pics" />
        </div>
        <div className="row mt-lg-5 g-lg-0  ">
          <div className="col-lg-6 col-md-12 p-3">
            <p className="text-start" id="about-sentence">
              The Nativity of Mary Chorale is a group of dedicated singers who
              share a common love for music and a deep devotion to Mary, the
              mother of Jesus. The chorale has since become a beloved part of
              the community enchanting audiences with their angelic voices and
              heartfelt performances. As its name suggests, the Nativity of Mary
              Chorale takes inspiration from the story of Mary's birth, life,
              and faith. Through music, the group aims to honor Mary's virtues
              of humility, purity, and compassion, as well as her role as the
              mother of Christ. Their repertoire includes a wide range of choral
              pieces, from traditional hymns to contemporary arrangements, all
              of which express the chorale's commitment to excellence and faith.
              Under the guidance of their conductor Vincent Baquiro, the
              Nativity of Mary Chorale has grown and skill over the years.
              Members of the chorale come from diverse backgrounds, ages, and
              professions, but they all share a common passion for music and a
              desire to share it with others. The chorale practices regularly,
              refining their techniques and harmonies, and performing at various
              events such as Daygon Contest.
            </p>
            <div className="row g-3">
              <div className="col-6">
                <img
                  className="img-fluid"
                  src={Images.sec2x2_pics}
                  alt="sec1x13_pics"
                />
              </div>
              <div className="col-6">
                <img
                  className="img-fluid"
                  src={Images.sec2x2_pics}
                  alt="sec1x17_pics"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 p-3">
            <p className="text-start" id="about-sentence">
              Apart from their musical performances, the Nativity of Mary
              Chorale is also involved in various charitable and community
              activities. They often sing at church services, retreats, and
              other religious gatherings, as well as at hospitals, nursing
              homes, and schools. Through their music, the chorale aims to
              spread joy, comfort, and hope to those who need it the most. Being
              part of the Nativity of Mary Chorale is more than just singing;
              it's a community of friendship, support, and spiritual growth.
              Members of the chorale often describe their experience as a source
              of inspiration and encouragement, as they bond over their shared
              faith and love of music. Whether you're an experienced singer or a
              novice, the chorale welcomes anyone who wants to join their
              mission of spreading harmony and devotion. In conclusion, the
              Nativity of Mary Chorale is more than just a choral group; it's a
              testament to the power of music and faith to unite people and
              inspire them to do good. If you want to experience the joy and
              beauty of choral singing, as well as deepen your connection to
              Mary and the Church, the Nativity of Mary Chorale is the perfect
              community for you.
            </p>
            <div className="row g-3">
              <div className="col-6">
                <img
                  className="img-fluid"
                  src={Images.sec2x3_pics}
                  alt="sec1x15_pics"
                />
              </div>
              <div className="col-6">
                <img
                  className="img-fluid"
                  src={Images.sec2x4_pics}
                  alt="sec1x16_pics"
                />
              </div>
            </div>
          </div>
        </div>
        <h1 className="music_title my-lg-6 my-9">MUSIC FOR ALL OCCASIONS</h1>
        <div className="row  mb-8">
          <div className="row mb-lg-10 mb-3 mx-0 p-0">
            <img src={Images.sec2x6_pics} alt="sec2x6_pics" />
          </div>
          <div className="row mb-lg-10 mb-3 mx-0 p-0">
            <img src={Images.sec2x7_pics} alt="sec2x7_pics" />
          </div>
          <div className="row mx-0 p-0">
            <img src={Images.sec2x8_pics} alt="sec2x8_pics" />
          </div>
        </div>
        <div className="master-wrapper text-start my-lg-6 my-7">
          <div className="master-item-1">
            <div className="ms-images">
              <img src={Images.sec2x9_pics} alt="sec2x9_pics" />
            </div>
          </div>
          <div className="master-item-2 ">
            <div>
              <h1 className="mb-2 px-0">Vincent Baquiro</h1>
              <p>
                A skilled programmer and a dedicated musician. With a passion
                for both technology and music, he has honed his abilities in
                both fields, using his technical expertise to enhance his
                musical performances and create innovative software solutions.
                With a strong work ethic and a commitment to excellence, Vincent
                strives to excel in both of his passions and make a meaningful
                impact in his industries.
              </p>
            </div>
          </div>
        </div>

        <div className="church-wrapper text-start">
          <div className="church-item-1 ">
            <div>
              <h1 className="mb-2 px-0">Nativity of Mary Parish</h1>
              <p>
                The Nativity of Mary Parish is a welcoming Catholic church
                located in Canduman, Mandaue City. The parish is known for its
                beautiful architecture, inspiring liturgies, and active
                community of faithful. One of the highlights of the parish is
                its renowned Nativity of Mary Chorale, a talented group of
                singers who share their love of music and devotion to Mary
                through their performances. The parish offers a range of
                services and activities for all ages, including daily masses,
                sacraments, religious education programs, and outreach
                ministries. With its warm and inclusive atmosphere, the Nativity
                of Mary Parish is a beloved spiritual home for many in the
                community.
              </p>
            </div>
          </div>
          <div className="church-item-2">
            <div className="ch-images">
              <img className="" src={Images.sec2x10_pics} alt="sec2x10_pics" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
