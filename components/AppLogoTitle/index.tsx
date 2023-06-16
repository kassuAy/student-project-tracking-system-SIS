import react from 'react'
import {
    AppTitle,
    Container,
    LogoImage
} from './AppLogoTitleElements'
// import LogoImgSrc from '../../public/assets/images'

type Props = {}

const AppLogoTitle = (props: Props) => {
    return (
        <Container href="/">
            {/* <AppTitle>Login To SPTS </AppTitle> */}
            {/* <LogoImage 
                src=
                width={30}
                height={30}
                alt="logo"
            /> */}
        </Container>
    )
}

export default AppLogoTitle