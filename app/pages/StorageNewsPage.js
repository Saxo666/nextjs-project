import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

const mockArticles = [
  {
    title: "Samsung เปิดตัว SSD 990 Pro รุ่นใหม่ เร็วขึ้น 55%",
    description: "Samsung เปิดตัว SSD NVMe Gen4 รุ่นใหม่ที่ใช้เทคโนโลยี V-NAND รุ่นล่าสุด พร้อมการระบายความร้อนที่ดีขึ้น...",
    image_url: "https://geekawhat.com/wp-content/uploads/2023/09/Samsung-990-Pro-4TB-Feature-Image.jpg",
    source_url: "https://www.samsung.com/th/memory-storage/nvme-ssd/990-pro-1tb-nvme-pcie-gen-4-mz-v9p1t0bw/"
  },
  {
    title: "WD Black SN850X ขึ้นแท่น SSD ที่เร็วที่สุดแห่งปี",
    description: "WD อัปเกรดไลน์อัพ SSD Black ด้วยรุ่น SN850X ที่ออกแบบมาสำหรับเกมเมอร์โดยเฉพาะ...",
    image_url: "https://ae01.alicdn.com/kf/Scf04aaf84e724758b707dc43c00e64e1J.jpg",
    source_url: "https://www.tomshardware.com/reviews/wd-black-sn850x-ssd-review-back-in-black/3"
  },
  {
    title: "Kingston เปิดตัว M.2 SSD ราคาประหยัดสำหรับมือใหม่",
    description: "Kingston A2000 เป็น SSD M.2 NVMe ที่ราคาจับต้องได้ แต่อัดแน่นด้วยประสิทธิภาพ...",
    image_url: "https://i.ytimg.com/vi/2JlBt9PzW4Q/sddefault.jpg",
    source_url: "https://notebookspec.com/web/491702-review-ssd-kingston-a2000-pcie-1tb"
  },
  // เพิ่มข่าวได้เรื่อย ๆ
];

export default function CpuNewsPage() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Latest Storage News
      </Typography>
      <Grid container spacing={2}>
        {mockArticles.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              {article.image_url && (
                <CardMedia
                  component="img"
                  height="140"
                  image={article.image_url}
                  alt={article.title}
                />
              )}
              <CardContent>
                <Typography variant="h6">{article.title}</Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {article.description}
                </Typography>
                <Typography variant="body2" color="primary">
                  <a href={article.source_url} target="_blank" rel="noopener noreferrer">
                    อ่านต่อ
                  </a>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
