export const Book = (props) => {
  const { img, title, author, url, children, number } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>
        <a href={url}>{title}</a>
      </h2>
      <h4>{author}</h4>
      {children}
      <span className="number">{`# ${number + 1}`}</span>
    </article>
  );
};
