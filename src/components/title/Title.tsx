import "./title.scss";

const Title = ({ text }: { text: string }) => {
  return <h2 className="main-title">{text}</h2>;
};

export default Title;
