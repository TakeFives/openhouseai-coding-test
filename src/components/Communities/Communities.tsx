import { useEffect, useState } from "react";
import { ICommunity } from "../../types/Community";
import { IHome } from "../../types/Home";
import { mapCommunitiesDetails } from "../../utils/mapCommunitiesDetails";
import Community from "./Community/Community";

function Communities() {
  const [communities, setCommunities] = useState<ICommunity[]>([]);
  const [homes, setHomes] = useState<IHome[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [communitiesResponse, homesResponse] = await Promise.all([
          fetch('https://storage.googleapis.com/openhouse-ai-fe-coding-test/communities.json',),
          fetch('https://storage.googleapis.com/openhouse-ai-fe-coding-test/homes.json',)
        ]);

        const communitiesData = await communitiesResponse.json();
        const homesData = await homesResponse.json();

        const parsedCommunitiesData = JSON.parse(communitiesData);
        const parsedHomesData = JSON.parse(homesData);

        setCommunities(parsedCommunitiesData);
        setHomes(parsedHomesData);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
 
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const data = mapCommunitiesDetails(communities, homes);

  return (
    <section className="section">
      <h1 className="section__heading">Communities:</h1>
      <div className="section__content">
        {data.map((community: ICommunity) => (
          <Community key={community.id} {...community} />
        ))}
      </div>
    </section>
  );
}

export default Communities;
