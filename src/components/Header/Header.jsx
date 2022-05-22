import {HeaderStyled, Nav} from "../styles/Header.styled";
import {Container} from "../styles/Container.styled";
import {Contact} from "../Contact/Contact";
import {Text} from "../styles/Text.styled";


export const Header = ({supportContact}) => {


    return (
        <HeaderStyled>
            <Container>
                <Nav>
                    <Text color={"#3F3C3D"} as={"h2"}>Account Overview</Text>
                    <Contact
                        email={supportContact.email || "support@feefo.com"}
                        phone={supportContact.phone || "020 3362 4208"}
                        name={supportContact.name || "Support"}/>
                </Nav>
            </Container>
        </HeaderStyled>
    )
}