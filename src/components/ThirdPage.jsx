const ThirdPage = () => {
  const handleButtonClick = () => {
    showComingSoon();
  };

  return (
    <div className="page__three">
      <div className="page__three-main font-montserrat">
        <p className="bear">Get your bear now</p>
        <h2 className="font-archive">medoria playbox</h2>
        <button onClick={handleButtonClick}>subscribe</button>
        <p>⋔⟒⎅⍜⍀⟟⏃ ⌿⌰⏃⊬⏚⍜⌖</p>
      </div>
    </div>
  );
};

export default ThirdPage;
