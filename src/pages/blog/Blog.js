import BlogPostSummary from '../../components/blog-post-summary/BlogPostSummary';
import styles from './Blog.module.css';

const posts = [
    {
      title: 'Taylor Swift: The Evolution of a Pop Icon',
      date: '2024-06-24T14:48:00.000Z',
      image: 'https://images.unsplash.com/photo-1593642634367-d91a135587b5',
      summary: 'Explore the journey of Taylor Swift from her country roots to becoming a global pop sensation. Discover the key moments and albums that shaped her career.'
    },
    {
      title: 'Taylor Swift’s Impact on the Music Industry',
      date: '2024-06-23T14:48:00.000Z',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
      summary: 'A deep dive into Taylor Swift’s influence on the music industry, including her advocacy for artist rights and her groundbreaking album releases.'
    },
    {
      title: 'Top 10 Taylor Swift Songs of All Time',
      date: '2024-06-22T14:48:00.000Z',
      image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f',
      summary: 'A curated list of the top 10 songs by Taylor Swift that have defined her career and resonated with fans around the world.'
    }
  ];

function Blog() {
    return (
        <div className={styles.container}>
            <BlogPostSummary posts={posts} />
        </div>
    );
}

export default Blog;