

import { AppBar , Toolbar , Typography, styled} from '@mui/material'
import editor from '../images/editor.png'

const Container = styled(AppBar)`
background: #060606;
height: 9vh;
`


const Header = () => {

    return (
        <Container position='static'>
            <Toolbar>
            <img src={editor}  alt="logo" style= {{width: 40  }} />&nbsp; &nbsp;
            <Typography variant='h4'>
                Mirror Pad
            </Typography>
            </Toolbar>
        </Container>
    );
}

export default Header;