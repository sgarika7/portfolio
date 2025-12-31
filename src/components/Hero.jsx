export default function Hero({ data, typed }) {
  return (
    <section className="hero" id="about">
      <div className="wrap heroGrid">

        {/* LEFT */}
        <div className="heroLeft">
          <h1 className="heroTitle">
            Hi, I’m <span className="accentName">{data.name}</span>
          </h1>

          <div className="roleRow">
            <span className="roleBig">{typed}</span>
            <span className="cursor">|</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="heroRightMinimal">
          <div className="heroInfo">

            <p className="heroIntro heroIntroRight">
              I am an entry level software and ML engineer who likes building practical systems, from data pipelines to backend and ML workflows. I focus on clean, readable code and learning how real production systems work.
            </p>


          </div>
        </div>

      </div>
    </section>
  );
}
