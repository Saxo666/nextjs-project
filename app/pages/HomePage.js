import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

const mockArticles = [
  {
    source: { id: null, name: 'Hackaday' },
    author: 'Lewin Day',
    title: 'A SNES CPU Replacement Via FPGA',
    description:
      'Let’s say you had a SNES with a busted CPU. What would you do? Your SNES would be through! That is, unless, you had a replacement based on an FPGA...',
    url: 'https://hackaday.com/2025/03/31/a-snes-cpu-replacement-via-fpga/',
    urlToImage:
      'https://hackaday.com/wp-content/uploads/2025/03/IMG_20250119_215958-1-e1743418814923.jpg',
    publishedAt: '2025-03-31T15:30:00Z',
    content: 'Let’s say you had a SNES with a busted CPU. What would you do?...',
  },
  {
    "source": {
      "id": "the-verge",
      "name": "The Verge"
    },
    "author": "David Pierce",
    "title": "The base iPad is finally being left behind",
    "description": "I can tell you the entire story of the 11th-generation iPad by explaining the results of one benchmarking test. Itâs called Geekbench, and itâs a cross-platform tool that simulates a bunch of real-world activities to give each device a score that roughly …",
    "url": "https://www.theverge.com/apple/636335/ipad-2025-11th-generation-review",
    "urlToImage": "https://platform.theverge.com/wp-content/uploads/sites/2/2025/03/iPad-2025-front.jpg?quality=90&strip=all&crop=0%2C10.806933475316%2C100%2C78.386133049368&w=1200",
    "publishedAt": "2025-03-26T14:59:01Z",
    "content": "There are still no bad iPads. But for the first time in a while, theres one Im not sure is going to hold up.\r\nThere are still no bad iPads. But for the first time in a while, theres one Im not sure i… [+5756 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "CNET"
    },
    "author": "David Murphy",
    "title": "Asus Vivobook S15 Review: Old-School OLED Laptop Powered by Modern AI CPU",
    "description": "The widescreen, 15.6-inch display is a throwback but delivers solid performance as does the unit's Snapdragon X Elite processor.",
    "url": "https://www.cnet.com/tech/computing/asus-vivobook-s15-review-old-school-oled-laptop-powered-by-modern-ai-cpu/",
    "urlToImage": "https://www.cnet.com/a/img/resize/1605ac4dc0939106a4ab33a7c9189b1907536770/hub/2025/04/08/d8f53efc-eae3-462a-a44b-da083858ed3e/asus-vivobook-s15-rgb.jpg?auto=webp&fit=crop&height=675&width=1200",
    "publishedAt": "2025-04-10T12:00:20Z",
    "content": "It's foolish to buy a new laptop because of AI right now. You're sure to be disappointed by the suite of AI features on even the latest laptops if that's what's driving your purchase. Plus, nearly an… [+16470 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Gizmodo.com"
    },
    "author": "Mike Fazioli",
    "title": "Apple Is Going Nuts, This 2024 MacBook Air Is Down to a Record-Low Price on Amazon",
    "description": "The 13-Inch model of one of Apple's best laptops is back to its all-time-lowest price thanks to this Amazon \"Big Spring\" sale.",
    "url": "https://gizmodo.com/apple-is-going-nuts-this-2024-macbook-air-is-down-to-a-record-low-price-on-amazon-2000580787",
    "urlToImage": "https://gizmodo.com/app/uploads/2025/03/MacBook-Air-M3-2024.jpg",
    "publishedAt": "2025-03-26T11:25:36Z",
    "content": "When Apple deals bringing their best laptops down to all-time-low prices start dropping, you know it’s a special event. That’s what’s happening right now during Amazon’s Big Spring Sale, as the 2024 … [+2575 chars]"
  },
  {
    "source": {
      "id": "the-verge",
      "name": "The Verge"
    },
    "author": "Antonio G. Di Benedetto",
    "title": "I’m still testing the new Razer Blade 16 and I have mixed feelings",
    "description": "The Razer Blade 16 is designed to be the gaming-focused alternative to the MacBook Pro, and Iâm always here for that. I love a gaming laptop that still looks and feels like a somewhat normal laptop, and the new Blade returns to a thinner and lighter chassis…",
    "url": "https://www.theverge.com/tech/638930/razer-blade-16-2025-rtx-5090-gaming-laptop-impressions-price",
    "urlToImage": "https://platform.theverge.com/wp-content/uploads/sites/2/2025/03/257655_Razer_Blade_16_laptop_2025_5090_ADiBenedetto_0009.jpg?quality=90&strip=all&crop=0%2C10.732984293194%2C100%2C78.534031413613&w=1200",
    "publishedAt": "2025-03-29T06:33:01Z",
    "content": "The Razer Blade 16 is designed to be the gaming-focused alternative to the MacBook Pro, and Im always here for that. I love a gaming laptop that still looks and feels like a somewhat normal laptop, a… [+4337 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Laptop Mag"
    },
    "author": "Madeline Ricchiuto",
    "title": "Intel's Arrow Lake HX gaming CPU is putting the MacBook Pro M4 Pro through its paces",
    "description": "Intel's most powerful mobile CPU has arrived. How does Intel's Core Ultra 200HX series stack up? Let's break it down.",
    "url": "https://www.laptopmag.com/laptops/gaming-laptops-pcs/intels-arrow-lake-hx-gaming-cpu-is-putting-the-macbook-pro-m4-pro-through-its-paces",
    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/8mznded4WfoFXWvcSe2QpQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/laptopmag_536/d80251620f5a4df03a726b5e5f541004",
    "publishedAt": "2025-03-28T13:00:00Z",
    "content": "When you buy through links on our articles, Future and its syndication partners may earn a commission.\r\nCredit: Laptop Mag/Rami Tabari\r\nIntel's most powerful mobile CPU has arrived: the Intel Core Ul… [+6876 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Hipertextual"
    },
    "author": "José María López",
    "title": "Comprar un PC con ARM en 2025: ¿tiene sentido hacerlo?",
    "description": "Cuando vas a comprar un ordenador, es muy probable que su procesador o CPU sea de dos fabricantes, Intel o AMD. Ambas compañías controlan la práctica totalidad del mercado de microprocesadores. Pero es algo que podría cambiar en los próximos años. Por un lado…",
    "url": "http://hipertextual.com/2025/04/comprar-pc-arm-a-favor-en-contra",
    "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2025/02/ARM.jpg",
    "publishedAt": "2025-04-07T09:27:23Z",
    "content": "Cuando vas a comprar un ordenador, es muy probable que su procesador o CPU sea de dos fabricantes, Intel o AMD. Ambas compañías controlan la práctica totalidad del mercado de microprocesadores. Pero … [+7631 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Gizmodo.com"
    },
    "author": "Sherri L Smith",
    "title": "Razer Blade 16 Review: A Toasty Powerhouse",
    "description": "It can get real warm, but this is a lean, mean gaming machine. The Razer Blade 16 is hopped up on AI-boosted components that serve up big performances on all fronts.",
    "url": "https://gizmodo.com/razer-blade-16-review-a-toasty-powerhouse-2000581998",
    "urlToImage": "https://gizmodo.com/app/uploads/2025/03/razer-blade-16-2025-hero.jpg",
    "publishedAt": "2025-03-28T19:15:04Z",
    "content": "Im having a love/hate relationship with the Razer Blade 16 right now. Theres so much to love about this system. Its got two of the most powerful mobile components on the block with an AMD Strix Point… [+6470 chars]"
  },
  {
    "source": {
      "id": "wired",
      "name": "Wired"
    },
    "author": "Brad Bourque",
    "title": "The Best RAM for Your PC (2025)",
    "description": "Building a new computer or looking to upgrade your memory? Here are our favorite options right now.",
    "url": "https://www.wired.com/gallery/best-ram/",
    "urlToImage": "https://media.wired.com/photos/67d4a67710fdd78ab5444c92/191:100/w_2580,c_limit/Best%20RAM%20for%20Your%20PC%20Abstract%20Background%20032025%20SOURCE%20Corsair_Crucial_GSkill.jpg",
    "publishedAt": "2025-03-16T13:03:00Z",
    "content": "DDR4 vs DDR5\r\nThere are currently two standards on the market, and there probably will continue to be for a while as DDR4 phases out. Chances are, if youre upgrading an older system, youll need DDR4 … [+2592 chars]"
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
        Welcome to Hardware News
      </Typography>
      <Grid container spacing={2}>
        {loading ? (
          [...Array(6)].map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardContent>Loading...</CardContent>
              </Card>
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
