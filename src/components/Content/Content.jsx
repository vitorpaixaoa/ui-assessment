import {ContentBox} from "../styles/Flex.styled";
import {Sales} from "./Sales/Sales";
import {Percentage} from "./Percentage/Percentage";


export const Content = ({data}) => {

    return (
        <ContentBox>
            <Sales uploads={data.uploads} added={data.linesAttempted} lastUpdate={data.lastUploadDate}/>
            <Percentage data={data}/>
        </ContentBox>
    )
}