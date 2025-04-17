import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

const mockArticles = [
  {
    "source": {
      "id": "wired",
      "name": "Wired"
    },
    "author": "Julian Chokkattu",
    "title": "Google Pixel 9a Review: Still the Best Smartphone",
    "description": "It might not look like a classic Pixel phone anymore, but this Android is still the best smartphone bargain.",
    "url": "https://www.wired.com/review/google-pixel-9a/",
    "urlToImage": "https://media.wired.com/photos/67f718945c48f9cdda473588/191:100/w_1280,c_limit/Google's-Pixel-9a_042025_Lede.jpg",
    "publishedAt": "2025-04-10T13:00:00Z",
    "content": "Google is employing the same top-end Tensor G4 processor as the Pixel 9 series, though you get only 8 gigabytes of RAM versus 12 on the Pixel 9 and 16 on the Pixel 9 Pro. For the most part, performan… [+2862 chars]"
  },
  {
    "source": {
      "id": "the-verge",
      "name": "The Verge"
    },
    "author": "David Pierce",
    "title": "Light Phone III review: everything in moderation",
    "description": "What are the essential features of a smartphone? Thatâs not a rhetorical question, and itâs actually a useful exercise: if I were to take away everything but the things you truly need on your phone, what would those things be? And how might you interact w…",
    "url": "https://www.theverge.com/reviews/637178/light-phone-iii-review-minimalist-smartphone",
    "urlToImage": "https://platform.theverge.com/wp-content/uploads/sites/2/2025/03/Light-Phone-III-hero.jpg?quality=90&strip=all&crop=0%2C10.579334928726%2C100%2C78.841330142548&w=1200",
    "publishedAt": "2025-03-27T15:03:46Z",
    "content": "Light Phone III review: everything in moderation\r\nIts a much better, more powerful, still extremely minimalist smartphone. Light is getting close to nailing the formula.\r\nLight Phone III review: ever… [+10520 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Gizmodo.com"
    },
    "author": "Kyle Barr",
    "title": "Alienware Area-51 Review: It Would Be My Forever Case if It Didn’t Look so Dated",
    "description": "The Alienware Area-51 is built to be customizable, but in this review I learned it's not the kind of case that makes me excited for PC gaming.",
    "url": "https://gizmodo.com/alienware-area-51-review-it-would-be-my-forever-case-if-it-didnt-look-so-dated-2000588290",
    "urlToImage": "https://gizmodo.com/app/uploads/2025/04/Alienware-Area-51-PC-Hero.jpg",
    "publishedAt": "2025-04-12T13:00:17Z",
    "content": "There was a time, even if it was just a few years ago, when an Alienware device looked like nothing else on the market. Now, in 2025, Alienwares Area-51 desktop is built to compete on ease and custom… [+7501 chars]"
  },
  {
    "source": {
      "id": "the-verge",
      "name": "The Verge"
    },
    "author": "Allison Johnson",
    "title": "Google Pixel 9A review: a midrange phone done right",
    "description": "The A-series Pixels have been very good over the past few years. And in the Pixel 9A, Google has taken a good midrange phone and made it great. Itâs $499, which feels just right for what you get in the 9A. Spend a bit more for the Pixel 9, and youâll get …",
    "url": "https://www.theverge.com/phone-review/646135/google-pixel-9a-review-a-midrange-phone-done-right",
    "urlToImage": "https://platform.theverge.com/wp-content/uploads/sites/2/2025/04/257690_Google_Pixel_9A_AJohnson_0003.jpg?quality=90&strip=all&crop=0%2C10.752607989199%2C100%2C78.494784021602&w=1200",
    "publishedAt": "2025-04-10T13:01:31Z",
    "content": "The A-series Pixels have been very good over the past few years. And in the Pixel 9A, Google has taken a good midrange phone and made it great.\r\nIts $499, which feels just right for what you get in t… [+7508 chars]"
  },
  {
    "source": {
      "id": "the-verge",
      "name": "The Verge"
    },
    "author": "Cameron Faulkner",
    "title": "The Meta Quest 3S just got its first discount",
    "description": "Due to the fluctuating tariff situation, a lot of people are seriously mulling over tech purchases they might otherwise be content to put off for a while. And it makes sense. While I don’t endorse panic buying, your reasons for buying now are more justified b…",
    "url": "https://www.theverge.com/tech/647954/meta-quest-3s-ps5-sale-deals",
    "urlToImage": "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/25639432/247283_Quest_3S_VPavic_0059.jpg?quality=90&strip=all&crop=0%2C10.732984293194%2C100%2C78.534031413613&w=1200",
    "publishedAt": "2025-04-14T14:36:35Z",
    "content": "As tech prices fluctuate, its refreshing to see some hardware deals.\r\nAs tech prices fluctuate, its refreshing to see some hardware deals.\r\nDue to the fluctuating tariff situation, a lot of people ar… [+2554 chars]"
  },
  {
    "source": {
      "id": "the-verge",
      "name": "The Verge"
    },
    "author": "Kristen Radtke",
    "title": "The beautiful, retro tech of two theatrical sound designers",
    "description": "When asked what they do for work, creative couple Jessie Char and Maxwell Neely-Cohen should probably just say âyes.â True professional multihyphenates, Charâs gig history includes stints as a UI/UX designer, conference organizer, concert cellist, and A…",
    "url": "https://www.theverge.com/tech/631922/sound-design-interview-hardware-music-home",
    "urlToImage": "https://platform.theverge.com/wp-content/uploads/sites/2/2025/03/257554_Art_club_Jessie_and_Max_AKrales_0809.jpg?quality=90&strip=all&crop=0%2C10.732984293194%2C100%2C78.534031413613&w=1200",
    "publishedAt": "2025-03-20T14:00:11Z",
    "content": "When asked what they do for work, creative couple Jessie Char and Maxwell Neely-Cohen should probably just say yes. True professional multihyphenates, Chars gig history includes stints as a UI/UX des… [+11062 chars]"
  },
  {
    "source": {
      "id": "wired",
      "name": "Wired"
    },
    "author": "Jason Kehe",
    "title": "RISC Architecture Really Did Change Everything",
    "description": "“RISC architecture is gonna change everything.” Those absurdly geeky, incredibly prophetic words were spoken 30 years ago. Today, they’re somehow truer than ever.",
    "url": "https://www.wired.com/story/angelina-jolie-was-right-about-risc-architecture/",
    "urlToImage": "https://media.wired.com/photos/67c9f7476315473d1caec5db/191:100/w_1280,c_limit/RISC-web-opener.jpg",
    "publishedAt": "2025-03-25T10:00:00Z",
    "content": "Yes. Weve been here before. A second war of the architectures.\r\nIn Hackers, a group of RISC- obsessed teens must stop a goateed villain from capsizing a fleet of oil tankers with a computer virus. Pi… [+3711 chars]"
  },
  // เพิ่มข่าวอื่น ๆ ได้ที่นี่
];

export default function CpuNewsPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // จำลองการโหลดข้อมูล
    setTimeout(() => {
      setArticles(mockArticles);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Latest Review Hardware
      </Typography>
      <Grid container spacing={2}>
        {loading ? (
          [...Array(6)].map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card><CardContent>Loading...</CardContent></Card>
            </Grid>
          ))
        ) : (
          articles.map((article, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                {article.urlToImage && (
                  <CardMedia
                    component="img"
                    height="140"
                    image={article.urlToImage}
                    alt={article.title}
                  />
                )}
                <CardContent>
                  <Typography variant="h6">{article.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {article.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
}