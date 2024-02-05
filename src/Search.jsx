import { Box, TextField } from '@mui/material'

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <>
      <TextField 
          fullWidth 
          id="outlined-basic" 
          label="Enter an Artist Name" 
          variant="outlined" 
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}  
          sx={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.87)',
            marginBottom: '10px',
            borderRadius: '5px' }}
        />
    </>
  )
}

export default Search