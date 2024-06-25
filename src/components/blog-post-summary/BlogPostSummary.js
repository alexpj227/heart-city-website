import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
} from '@mui/material';

const BlogPostSummary = ({ posts }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
      <Grid container spacing={2} direction="column" sx={{ maxWidth: 500 }}>
        {posts.map((post, index) => (
          <Grid item key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={post.image}
                alt={post.title}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {new Date(post.date).toLocaleDateString()}
                </Typography>
                <Typography variant="body2" component="p">
                  {post.summary}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

BlogPostSummary.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      summary: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BlogPostSummary;
