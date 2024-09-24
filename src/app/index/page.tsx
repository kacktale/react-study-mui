import { Button, Stack, Typography } from '@mui/material';
import { useState } from 'react';

export default function IndexPage() {
  const[count,SetCount] = useState(0);

  function handleButtonClick(){
    SetCount(prev=>prev+1);
  }

  return (
    <Stack>
      <Typography>Index Page</Typography>
      <Typography variant='h1'>{count}</Typography>
      <Button onClick={handleButtonClick}>Count</Button>
    </Stack>
  );
}
