import axios from 'axios';

const token = "DjMwyRLoMC0OmoPtfLQ-DY_yNGREOGzpkVCUtbOguQZebP5eYFNarMaOYnIc2HZJzai-UWXyNkD9nQlyRsXbLCtE53TQSo3G2FcwfFCeeoVt2p5-ehNN5DP7ucebYXYx"

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer ${token}` 
  }
});
