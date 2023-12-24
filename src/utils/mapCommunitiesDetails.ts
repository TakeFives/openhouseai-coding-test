import { ICommunity } from "../types/Community";
import { IHome } from "../types/Home";

export const mapCommunitiesDetails = (communities: ICommunity[], homes: IHome[]) => communities.map((community) => {
  const homesInCommunity = homes.filter((home) => home.communityId === community.id);
  const averagePrice = homesInCommunity.reduce((sum, home) => sum + home.price, 0) / homesInCommunity.length;

  return {
    ...community,
    averagePrice
  };
});