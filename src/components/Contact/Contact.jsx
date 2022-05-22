import {Flex, SupportNameBox} from "../styles/Flex.styled";
import {Text} from "../styles/Text.styled";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

export const Contact = ({email, phone, name}) => {

    return (<div>
            <Text color={"grey"} fontWeight={"bold"}>YOUR FEEFO SUPPORT CONTACT</Text>

            <Flex minWidth={"400px"}>
                <SupportNameBox>{name.charAt(0)}</SupportNameBox>
                <Flex>
                    <div>
                        <Text fontWeight={"bold"} as={"h3"} margin={"5px 0"} color={"#555555"}> {name}</Text>
                        <div>
                            <FontAwesomeIcon color={"#555555"} icon={faEnvelope}/>
                            <Text color={"#555555"} margin={"0 20px 0 5px"}>{email}</Text>
                            <Text color={"#555555"}>{phone}</Text>
                        </div>
                    </div>
                </Flex>
            </Flex>

        </div>

    )
}