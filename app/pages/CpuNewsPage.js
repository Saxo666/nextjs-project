import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

const mockArticles = [
  {
    title: "Intel เปิดตัว CPU 14th Gen รุ่นใหม่ ไม่มี E-Core แบบเงียบๆ",
    description: "ล่าสุดนี้ทางบริษัทก็ได้เปิดตัว Processor ใน Lineup ของ Gen 14 เพิ่มเติมอย่างเงียบๆ โดยรุ่นใหม่นี้ก็น่าสนใจเหมือนกันครับ จุดเด่นของมันเลยก็คือ ไม่มี E-Core",
    image_url: "https://www.overclockzone.com/_admin/covercontent/10016-1721627072.jpg",
    source_url: "https://www.overclockzone.com/Intel-Silently-introduces-14th-gen-cpu-without-ecore"
  },
  {
    title: "เปิดตัว Intel® Core™ Ultra (ซีรีส์ 2)",
    description: "เดสก์ท็อปโปรเซสเซอร์ Intel® Core™ Ultra (ซีรีส์ 2) คือสุดยอดแพลตฟอร์มสำหรับเดสก์ท็อปและเวิร์กสเตชั่นระดับเริ่มต้น ซึ่งออกแบบทางวิศวกรรมมาเพื่อปลดล็อกระดับใหม่ของประสิทธิภาพอันอัจฉริยะสำหรับงานในแต่ละวันที่ต้องการประสิทธิภาพสูง",
    image_url: "https://intelcorp.scene7.com/is/image/intelcorp/badges-core-ultra-processor-family-5-7-9-center:1920-1080?wid=480&hei=270&fmt=webp-alpha",
    source_url: "https://www.thailand.intel.com/content/www/th/th/products/docs/processors/core-ultra/core-ultra-desktop-processors-series-2-brief.html"
  },
  {
    title: "เทคโนโลยี AMD 3D V-Cache™",
    description: "นวัตกรรมเทคโนโลยีการซ้อน 3 มิติเพื่อเปิดใช้งานโปรเซสเซอร์เกมมิ่งที่เร็วที่สุดในโลก¹ – AMD Ryzen™ 9000X3D Series – และโปรเซสเซอร์เซิร์ฟเวอร์ที่มีประสิทธิภาพสูงสุดในโลกสําหรับการประมวลผลทางเทคนิค² – โปรเซสเซอร์ AMD EPYC 9684X",
    image_url: "https://www.amd.com/content/dam/amd/en/images/backgrounds/products/2463180-amd-3d-vcache-banner.jpg",
    source_url: "https://www.amd.com/en/products/processors/technologies/3d-v-cache.html"
  },
  // เพิ่มข่าวได้เรื่อย ๆ
];

export default function CpuNewsPage() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Latest CPU News
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
