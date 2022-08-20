import * as React from 'react';
import Container from '@mui/material/Container';
import GiftTable from '../GiftTable';
import Box from '@mui/material/Box';



function GiftcardPage() {

  return (
    <Container className="giftTable">
        <Box sx={{ m: 5}} />
        <GiftTable></GiftTable>
    </Container>
  );
};
export default GiftcardPage;