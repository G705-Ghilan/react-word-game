export default function HeaderNote(prob) {
  if (prob.hide === true) {
    return <div className="header-note"></div>;
  }

  return (
    <div className={"header-note " + (prob.style ? prob.style : undefined)}>
      {prob.title ? <h3 className="title-large ">{prob.title}</h3> : undefined}
      {prob.subtitle ? (
        <p className="body-large">{prob.subtitle}</p>
      ) : undefined}
    </div>
  );
}
