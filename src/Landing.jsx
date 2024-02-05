import { useState } from 'react';
import { Box } from '@mui/material'
import Search from './Search';
import Player from './Player';

export default function Landing() {
  const [searchValue, setSearchValue] = useState('');
  
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
      <h1>Music Player</h1>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <Player />
    </Box>
  );
}
