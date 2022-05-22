import React from 'react';
import {Header} from "../Header/Header";
import {GlobalStyles} from "../styles/Global";
import {Content} from "../Content/Content";

export const AccountOverview = ({data}) => {

    return (
        <>
            <GlobalStyles/>
            <Header supportContact={data.supportContact}/>
            <Content data={data.salesOverview}/>
        </>
    )
}

export default AccountOverview;