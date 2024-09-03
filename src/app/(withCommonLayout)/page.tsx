import Flashsale from '@/Components/UI/Homepage/Flashsale';
import HeroSection from '@/Components/UI/Homepage/HeroSection';
import MostPopular from '@/Components/UI/Homepage/MostPopular';
import TopCategories from '@/Components/UI/Homepage/TopCategories';
import {Box} from '@mui/material';

export default function Home() {
  return (
   <Box><HeroSection></HeroSection>
   <Flashsale></Flashsale>
   <TopCategories></TopCategories>
   <MostPopular></MostPopular></Box>
  )
}
