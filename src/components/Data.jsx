import { useContext } from "react";

import Edits from "./Edits";

import { Box, styled } from '@mui/material';

import { DataContext } from "../context/DataProvider";

const Container = styled(Box)`
    display: flex;
    background-color: #060606;
    height : 50vh;

`

const Data =() => {

    const { html, setHtml, css, setCss, js, setJs} = useContext(DataContext);

    return(
        <Container>
          <Edits
            heading = "HTML"
            icon="/"
            color="#FF3C41"
            value={html}
            onChange = {setHtml}
          />
          <Edits
             heading = "CSS"
             icon="*"
             color="#0EBEFF"
             value={css}
             onChange = {setCss}
          />
          <Edits
             heading = "JavaScript"
             icon="()"
             color="#FCD000"
             value={js}
             onChange = {setJs}
          />
          
        </Container>
    )
}

export default Data;