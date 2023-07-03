import Link from "next/link";
const Playbox = () => {
  return (
    <div className="fn_cs_about">
      <div className="left_part">
        <div className="img">
            <video
              autoPlay
              loop
              src="/img/box.mp4"
              muted
              playsInline
            />
        </div>
      </div>
      <div className="right_part">
        <div className="right_in">
          <h3 className="fn__maintitle font-['Archive']">
            Medoria Playbox
            <p className="fn__maintitle">⋔⟒⎅⍜⍀⟟⏃ ⌿⌰⏃⊬⏚⍜⌖</p>
          </h3>
          <div className="fn_cs_divider">
            <div className="divider">
              <span />
              <span />
            </div>
          </div>
          <div className="desc">
            <p>
              Medoria PlayboxThe Medoria playbox is your access to true
              ownership and the way you choose to express yourself in this post
              apocalyptic universe taken over by Artificial intelligence.
            </p>
            <p>
              You’ll be entitled to a skin for your Medorian bear that can be
              traded on OpenSea or used in game.
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
        <a href={"#"} className="self-center">
          <button
            className=" max-md:p-3  max-xl:p-3 xl:p-5
              max-md:text-xs text-3xl font-archive z-10 xl:w-[20vw] max-md:w-[40vw] md:w-[30vw] test hover:scale-105 mb-8 ease-in duration-300 text-white"
          >
            artifact<br/>(coming soon!)
          </button>
        </a>
      </div>
    </div>
  );
};
export default Playbox;
