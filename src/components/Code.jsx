import {useContext, useEffect} from "react";

import Editor from "./Editor"

import {Box, styled} from '@mui/material'

import { DataContext } from "../context/DataProvider";

const Container = styled(Box)`
display: flex;
background-color: #060606;
height: 60vh;`



const Code = () => {

    const {html, setHtml, css, setCss, js, setJs} = useContext(DataContext);

useEffect(() => {
    const code = JSON.parse(localStorage.getItem("html"))

    if (code && code.length > 0) {
      setHtml(code)
    }
     // eslint-disable-next-line
  },[])


  useEffect(() => {
    localStorage.setItem("html", JSON.stringify(html))
  }, [html])


useEffect(() => {
    const code = JSON.parse(localStorage.getItem("css"))

    if (code && code.length > 0) {
      setCss(code)
    }
     // eslint-disable-next-line
  },[])

  
  useEffect(() => {
    localStorage.setItem("css", JSON.stringify(css))
  }, [css])

useEffect(() => {
    const code = JSON.parse(localStorage.getItem("js"))

    if (code && code.length > 0) {
      setJs(code)
    }
     // eslint-disable-next-line
  },[])

  useEffect(() => {
    localStorage.setItem("js", JSON.stringify(js))
  }, [js])




    return(
        <Container>
            <Editor 
            heading="HTML"
            icon="/"
            color= "#FF3C41"
            value={html}
            onChange={setHtml}
            />
            <Editor 
            heading="CSS"
            icon="*"
            color="#0EBEFF"
            value={css}
            onChange={setCss}
            />
            <Editor 
            heading="JavaScript"
            icon="()"
            color="#FCD000"
            value={js}
            onChange={setJs}
            />
        </Container>
    )
}

export default Code;