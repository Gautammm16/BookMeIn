import React from 'react'
import Navbar from '../../components/NavBar/Navbar';
import SubNavBar from '../../components/SubNavBar/SubNavBar';
import Banner from '../../components/Banner/Banner';
import RecommendedMovieCard from '../../components/Cards/js/RecommendedMovieCard';
import LiveEvent from '../../components/Cards/js/LiveEvent';
import Premiere from '../../components/Cards/js/Premiere';
import MusicStudio from '../../components/Cards/js/MusicStudio';
import OutdoorEvent from '../../components/Cards/js/OutdoorEvent';
import LaughterTherapy from '../../components/Cards/js/LaughterTherapy';
import PopularEvent from '../../components/Cards/js/PopularEvent';
import LatestPlay from '../../components/Cards/js/LatestPlay';
import TopGame from '../../components/Cards/js/TopGame';

function Bms() {
  return (
    <div>
       <Navbar/>
      <SubNavBar/>
      <Banner />
      <RecommendedMovieCard />
      <LiveEvent />
      <Premiere />
      <MusicStudio />
      <OutdoorEvent />
      <LaughterTherapy />
      <PopularEvent />
      <LatestPlay />
      <TopGame />
    </div>
  )
}

export default Bms
