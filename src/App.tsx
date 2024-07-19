import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box } from './component/Box.styled';
import { Card } from './component/Card.styled';
import { Img } from './component/Img.styled';
import { Paragraph, Text, Title } from './component/Text.styled';
import { MainBtn } from './component/Button.styled';

function App() {
  return (
    <div className="App">
      <Box>
        <Card>
          <Img src='https://s3-alpha-sig.figma.com/img/295b/9b3e/0cbd17e4381497547009ce81acc4eee3?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QmvkNuMcoTep3Fjf897ZjIre81-fBaPYODpMr9jurgNGt-IxAT-qOcpznLTH21q3ZF7ZxJ7HsTG9WZbpt~UaeXBpvHewrGhZxX7vyStkUzCBadiFZeQigtDQUClb7dILv6eSz5n6baKBDaB5jEGNHkXZuunHUPXzpkgH9jJDQIfTK63rCuMSK3U5RywKlCFG11rSVJYFifLydgvJqQxf64iOX4nH9IAj9n0JunIgNg7Iq~e5B64b4QbmAGMtMyCBCLx780-efN-JNy-vpC7v48gKcjluOmVvrb66dPvY7U4HQ5EUCEC9wxjghFEgb4FOoT1STq4YHlmatcIGuPuI8w__' />
          <Text>
            <Title>Headline</Title>
            <Paragraph>
              Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut.
              Sit molestie ornare in venen.
            </Paragraph>
          </Text>
          <MainBtn btnType={'primary'}>See more</MainBtn>
          <MainBtn btnType={'outlined'}>Save</MainBtn>
        </Card>
      </Box>
    </div>
  );
}

export default App;
