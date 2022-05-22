import {Flex} from "../../styles/Flex.styled";
import {Card} from "../../Card/Card";
import {Text} from "../../styles/Text.styled";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle, faUpload} from "@fortawesome/free-solid-svg-icons";
import ReactTooltip from "react-tooltip";

export const Sales = ({uploads, added, lastUpdate}) => {

    const getDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
    }
    return (
        <Card borderBottom={"1px solid #C2BEBE"}>
            <Flex>
                <Flex>
                    <FontAwesomeIcon color={"#3EB0EB"} icon={faUpload}/>
                    <Text as={"h3"} fontWeight={"bold"} margin={"0 0 0 10px"}>Sales</Text>
                </Flex>
                <FontAwesomeIcon
                    data-tip="React-tooltip"
                    color={"#B7B2B3"} icon={faInfoCircle}>
                </FontAwesomeIcon>
                <ReactTooltip place="left" type="dark" effect="solid">
                    <span>Last update: {getDate(lastUpdate)}</span>
                </ReactTooltip>
            </Flex>
            <Flex margin={"20px 0 0 0"} className={"result-data"}>
                <span>You had&nbsp;</span>
                <span><strong>{uploads || 0} uploads </strong></span>
                <span>&nbsp; and &nbsp;</span>
                <span><strong>{added || 0}</strong> lines</span>
                <span>&nbsp;added.</span>
            </Flex>
        </Card>
    )
}