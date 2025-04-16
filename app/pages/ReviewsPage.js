import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

export default function CpuNewsPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch(
          'https://newsapi.org/v2/everything?q=hardware+review&apiKey=1d8572692e104ab08dcc37988a544e04'
        );
        const data = await response.json();
        setArticles(data.articles.slice(0, 6)); // เอาแค่ 6 ข่าว
      } catch (error) {
        console.error('Error fetching CPU news:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
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