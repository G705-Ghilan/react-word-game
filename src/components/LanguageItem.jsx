export default function LanguageItem({ language, disabled }) {
  return (
    <div className="language-relative">
      <div
        className="language-container"
        style={{
          backgroundColor: language.color,
          color: language.textColor,
          opacity: disabled ? 0.2 : 1,
        }}
      >
        <p className="label-bold">{language.name}</p>
      </div>

      <p
        className="label-bold overlay-text"
        style={{ opacity: disabled ? "1" : "0" }}
      >
        💀
      </p>
    </div>
  );
}
