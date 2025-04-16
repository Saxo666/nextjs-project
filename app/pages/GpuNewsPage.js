import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

const mockArticles = [
  {
    title: "COLORFUL เปิดตัวการ์ดจอใหม่ล่าสุด NVIDIA RTX 40 Loong Edition Series",
    description: "บริษัท Colorful Technology จำกัด แบรนด์ชั้นนำด้านส่วนประกอบพีซี แล็ปท็อป  เปิดตัวกราฟิกการ์ด iGame GeForce RTX 40 Loong Edition Series ซึ่งได้รับแรงบันดาลใจจากปีนักษัตรปีมะโรง ",
    image_url: "https://www.ryt9.com/img/files/20240129/iq9ecfcef6261c3a6b2b39e11a576b6d07.jpg",
    source_url: "https://www.ryt9.com/s/prg/3488822"
  },
  {
    title: "กราฟิกการ์ดและแล็ปท็อป GeForce RTX 50 Series ใหม่ที่ขับเคลื่อนโดย NVIDIA Blackwell นําความสามารถในการเรนเดอร์ AI และ Neural ที่พลิกโฉมเกมมาสู่เกมเมอร์และครีเอเตอร์",
    description: "ขับเคลื่อนด้วยสถาปัตยกรรม NVIDIA Blackwell RTX กราฟิกการ์ด GeForce RTX 50 Series และแล็ปท็อป GeForce RTX 50 Series เร่งอัตราเฟรมได้ถึง 8 เท่าโดยใช้ NVIDIA DLSS 4 พร้อม Multi Frame Generation ลดเวลาแฝงได้ถึง 75% โดยใช้ NVIDIA Reflex 2 เปิดใช้งานความเที่ยงตรงของกราฟิกในระดับต่อไปสําหรับเกมเมอร์และครีเอเตอร์ด้วย NVIDIA RTX Neural Shaders และอื่น ๆ อีกมากมาย",
    image_url: "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/news/rtx-50-series-graphics-cards-gpu-laptop-announcements/geforce-rtx-5090-key-visual.jpg",
    source_url: "https://www.nvidia.com/en-us/geforce/news/rtx-50-series-graphics-cards-gpu-laptop-announcements/"
  },
  {
    title: "RTX 5000 Series เปิดตัวแล้ว เช็กราคาการ์ดจอ RTX 5090 และรุ่นอื่น ๆ ได้ที่นี่",
    description: "NVIDIA เปิดตัวการ์ดจอซีรีส์ใหม่ล่าสุด GeForce RTX 5000 Series (หรือ RTX 50 Series) อย่างเป็นทางการ มาพร้อมสถาปัตยกรรม NVIDIA Blackwell กับเทคโนโลยีหน่วยความจำ GDDR7 และ DLSS 4.0 ที่ช่วยให้ประมวลผลกราฟิกได้มีประสิทธิภาพมากขึ้น",
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhIxhW8qSErUXQNlthuw7VCcFjXiuy8L8awA&s",
    source_url: "https://tech.kapook.com/view287790.html"
  },
  // เพิ่มข่าวได้เรื่อย ๆ
];

export default function CpuNewsPage() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Latest GPU News
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
