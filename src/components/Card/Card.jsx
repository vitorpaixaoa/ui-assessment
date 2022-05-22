import {StyledCard} from "../styles/Card.stylized";


export const Card = (props) => {

    return (
        <StyledCard
            border={props.border}
            borderLeft={props.borderLeft}
            borderBottom={props.borderBottom}
            flexDirection={props.flexDirection}>
            {props.children}
        </StyledCard>
    )
}