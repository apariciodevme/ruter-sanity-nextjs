import Image from "next/image";
import SearchBox from "./components/SearchBox";
import Stack from "./components/Stack";
import Card from "./components/Card";
import CardInverted from "./components/CardInverted";
import { client } from '@/sanity/client';
import { SanityDocument } from 'next-sanity';


const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]{_id, title, slug, "img": mainImage.asset->url, "body": pt::text(body), btnText}`;

const options = { next: { revalidate: 30 } };





export default async function Home() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <div className="flex flex-col">
      <SearchBox />
      <Stack />


      {posts.map((post) => (
        <Card key={post._id} title={post.title} text={post.body} img={post.img} btnText={post.btnText} />
      ))}



      {/*
      
      
      
      
      
            <Card title="Night-time metro from Saturday-Sunday" text="From November 16thto December 28th, you can take the metro, night to sunday on lines 2 and 3." img="/1.jpg" btnText="More information" />
      
            <Card title="Large overview of Christmas events" text="How to get to the Christmas markets without a car" img="/2.jpg" btnText="Get travel advice" />
      
      
            <CardInverted text="The work on the metro continues" title="Stortinget station is closed until December 2nd" img="/3.jpg" btnText="More information" />
      
      
            <CardInverted text="New rules from July 1st" title="Free public transport for asylum seekers" img="/4.jpg" btnText="More information" />
      
      
            <CardInverted text="Winter is right around the corner" title="We have made these improvements" img="/5.jpg" btnText="More information" />

      
            
      */}




    </div>
  );
}
