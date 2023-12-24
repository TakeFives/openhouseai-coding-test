import { ICommunity } from "../../../types/Community";

function Community({ name, imgUrl, averagePrice }: ICommunity) {
  return (
    <div className="section__item">
      <h2>{name}</h2>
      <img src={imgUrl} alt={`${name} Image`} className="section__image" />
      <p>Average Price: ${averagePrice?.toFixed(2)}</p>
    </div>
  );
}

export default Community;
