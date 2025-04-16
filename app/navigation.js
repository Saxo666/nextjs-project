import MemoryIcon from '@mui/icons-material/Memory';
import StorageIcon from '@mui/icons-material/Storage';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import ReviewsIcon from '@mui/icons-material/RateReview';

export const NAVIGATION = [
  { kind: 'header', title: 'Hardware News' },
  { segment: 'home', title: 'Home', icon: <DeveloperBoardIcon /> },
  { segment: 'cpu', title: 'CPU News', icon: <MemoryIcon /> },
  { segment: 'gpu', title: 'GPU News', icon: <DeveloperBoardIcon /> },
  { segment: 'storage', title: 'Storage News', icon: <StorageIcon /> },
  { segment: 'reviews', title: 'Reviews', icon: <ReviewsIcon /> },
];