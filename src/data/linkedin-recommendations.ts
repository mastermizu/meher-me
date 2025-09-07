export interface Recommendation {
  name: string;
  position: string;
  quote: string;
  profileImage?: string;
  url?: string;
}

const recommendations: Recommendation[] = [
  {
    name: "Dirk Roberts",
    position: "CMO at Reservoir Marketing",
    quote: "Meherul and I have worked together for the last couple years. He is hard-working, knowledgeable, and always eager to learn and expand his skill set. It has been a pleasure to conduct business with him and build a relationship that transcends the scope of online marketing.",
    profileImage: "/lovable-uploads/e5902a73-5420-4501-b6d9-eb8cc7fbf14b.png",
  },
  {
    name: "Alexander Sutton, MBA",
    position: "CEO | Financial Advisor at Odyssey Capital",
    quote: "It is always a pleasure to collaborate with Meherul! He is a reliable partner of ours and we get excited when we find opportunities to work with him and his team!",
    profileImage: "/lovable-uploads/4a16575b-f09e-4813-ae85-b1db7d43961a.png",
  },
  {
    name: "Vincent Scholl",
    position: "Sales and Marketing",
    quote: "I highly recommend Meherul. He's very detailed and on top of the ball. Never makes mistakes. Always makes himself available.",
    profileImage: "/lovable-uploads/c0034933-ddd8-42bb-a23e-2789a36e2fd2.png",
  },
  {
    name: "Yasser Aqlan",
    position: "IT Manager | Odoo Implementer | Consultant",
    quote: "It is my pleasure to recommend Meherul, his performance working as an Affiliate Manager for cpaera.com. As proved that he will be a valuable addition to any company. I have known Meherul for three years in my capacity as CEO at Era Network Corp. Company. Meherul worked for me on various positions in network, and based on his work, I would rank him as one of the best affiliate manager we have ever had.",
    profileImage: "/lovable-uploads/289e311b-fffd-4b47-8e99-c3c860da8671.png",
  },
];

export default recommendations;
