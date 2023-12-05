import AnimatedTextWord from "../components/AnimatedTextWord";

const Playbox = () => {
  return (
    <div className="fn_cs_about max-[600px]:flex-col  max-[600px]:py-10 transition-all duration-150 max-[600px]:p-5">
      <div className="left_part ">
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
      <div className="w-[2vw]"></div>
      <div className="right_part max-sm:p-0 px-20 font-semibold max-[600px]:text-white max-[600px]:bg-slate-900 max-[600px]:bg-opacity-40  py-12 max-[600px]:p-5 max-[600px]:rounded-3xl">
        <div className="right_in font-montserrat max-[600px]:pt-10">
          <h3 className="fn__maintitle font-archive text-center">
            Medoria Playbox
            <p className="medorii__text text-center">
              <AnimatedTextWord text={"⋔⟒⎅⍜⍀⟟⏃ ⌿⌰⏃⊬⏚⍜⌖"} />
            </p>
          </h3>
          <div className="fn_cs_divider">
            <div className="divider ">
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
        <a href={"#"} className="flex w-full justify-center max-[600px]:pb-10">
          <button
            className=" max-md:p-3  max-xl:p-3 xl:p-5
              max-md:text-xs text-3xl font-archive z-10  test hover:scale-105 ease-in duration-300 "
          >
            artifact
            <br />
            (coming soon!)
          </button>
        </a>
      </div>
    </div>
  );
};
export default Playbox;
