import AnimatedTextWord from "../components/AnimatedTextWord";

const Playbox = () => {
  return (
    <div className="fn_cs_about transition-all duration-150">
      <div className="left_part">
        <div className="img">
          <video
            autoPlay
            loop
            src="/img/box.mp4"
            muted
            playsInline
            className="rounded-3xl"
          />
        </div>
      </div>
      <div className="right_part max-sm:p-0 px-20 py-12 flex flex-col">
        <div className="right_in font-montserrat font-semibold">
          <h3 className="fn__maintitle font-archive">
            Medoria Playbox
            <p className="medorii__text">
              <AnimatedTextWord text={"⋔⟒⎅⍜⍀⟟⏃ ⌿⌰⏃⊬⏚⍜⌖"} />
            </p>
          </h3>
          <div className="fn_cs_divider">
            <div className="divider">
              <span />
              <span />
            </div>
          </div>
          <div className="desc">
            <p>
              <AnimatedTextWord
                text={
                  "Medoria PlayboxThe Medoria playbox is your access to true ownership and the way you choose to express yourself in this post   apocalyptic universe taken over by Artificial intelligence."
                }
              />
            </p>
            <p>
              <AnimatedTextWord
                text={
                  "You’ll be entitled to a skin for your Medorian bear that can be traded on OpenSea or used in game."
                }
              />
            </p>
          </div>
          {/* <a
              href="https://discord.com/"
              className="medorii_fn_button"
              target="_blank"
              rel="noreferrer"
            >
              <span>Find us On Discord</span>
            </a> */}
        </div>
        <button
          className="test artifact__button max-md:p-3  max-xl:p-3 xl:p-5
              max-md:text-xs text-2xl font-archive xl:w-[20vw] md:w-[30vw] hover:scale-105 ease-in  duration-300 text-black cursor-pointer self-center"
        >
          <a
            href={"#"}
            className="text-2xl decoration-transparent text-black flex flex-col"
          >
            artifact
            <span className="text-lg">(coming soon!)</span>
          </a>
        </button>
      </div>
    </div>
  );
};
export default Playbox;
