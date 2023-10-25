import AnimatedTextWord from "./AnimatedTextWord";

const SecondPage = () => {
  return (
    <div className="page__two max-[600px]:bg-slate-900 max-[600px]:bg-opacity-40 max-[600px]:text-white   transition-all duration-150">
      <div className="page__two-main font-montserrat">
        <p className="cryptic">
          <AnimatedTextWord text={"☊⍜⎅⟒⌖ ⚌"} />
        </p>
        <h2 className="skin font-archive ">
          <AnimatedTextWord text={"different skins,"} />
        </h2>
        <h2 className="story font-archive ">
          <AnimatedTextWord text={"different story"} />
        </h2>
        <p>
          <AnimatedTextWord text={"Each bear has a different story"} />
        </p>
        <p className="artificial pt-4">
          <AnimatedTextWord text={"234^783= Artificial Organics"} />
        </p>
      </div>
    </div>
  );
};

export default SecondPage;
