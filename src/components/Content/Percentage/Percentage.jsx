import {Flex} from "../../styles/Flex.styled";
import {Card} from "../../Card/Card";
import {PercentageTextNumber, PercentageTextTitle} from "../../styles/Text.styled";

export const calculatePercentage = (value, total) => {
    return (100 * value / total).toFixed(1)
}
export const Percentage = ({data}) => {
    return (
        <Flex flex={"1"} width={"100%"}>
            <Card>
                <Flex flexDirection={"column"} alignItems={"normal"}>
                    <PercentageTextNumber>
                        {calculatePercentage(data.successfulUploads ?? 0, data.uploads ?? 0)}%
                    </PercentageTextNumber>
                    <PercentageTextTitle>
                        UPLOAD SUCCESS
                    </PercentageTextTitle>
                </Flex>
            </Card>
            <Card borderLeft={"1px solid #C2BEBE"}>
                <Flex flexDirection={"column"} alignItems={"normal"}>
                    <PercentageTextNumber>
                        {calculatePercentage(data.linesSaved ?? 0, data.linesAttempted ?? 0)}%
                    </PercentageTextNumber>
                    <PercentageTextTitle>
                        LINES SAVED
                    </PercentageTextTitle>
                </Flex>
            </Card>
        </Flex>
    )
}