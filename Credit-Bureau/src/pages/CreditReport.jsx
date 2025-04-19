import React from "react";
import "./styles/credit-report.css";

const CreditReport = () => {
        return ( <
                div className = "report-container" >
                <
                header className = "report-header" >
                <
                h1 > Credit Report < /h1> <
                div className = "report-info" >
                <
                div >
                <
                p > < strong > From: < /strong> 10/
                10 / 2023 d < /p> <
                p > < strong > Until: < /strong> 11/
                08 / 2023 < /p> <
                /div> <
                div >
                <
                p > < strong > Customer Number: < /strong> 1536457</p >
                <
                p > < strong > Customer Name: < /strong> Jane Doe</p >
                <
                /div> <
                div >
                <
                p > < strong > Phone Number: < /strong> (123) 345 6789</p >
                <
                p > < strong > Address: < /strong> 256 Lexington, Tennessee</p >
                <
                /div> <
                /div> <
                /header>

                <
                section className = "credit-summary" >
                <
                h2 > Credit Summary < /h2> <
                p className = "description" >
                Your Equinox Credit Summary contains information in your credit file that is crucial in determining your credit standing.Lenders view positively the individuals with a range of credit accounts that have a record of on - time payments. <
                /p>

                <
                table className = "summary-table" >
                <
                thead >
                <
                tr >
                <
                th > Account Type < /th> <
                th > Total Number < /th> <
                th > Balance < /th> <
                th > Credit Limit < /th> <
                th > Status < /th> <
                th > Monthly Payment Amount < /th> <
                th > Accounts With Balance < /th> <
                /tr> <
                /thead> <
                tbody >
                <
                tr >
                <
                td > Mortgage < /td> <
                td > 1 < /td> <
                td > $123, 021 < /td> <
                td > $113, 021 < /td> <
                td > Open, Never Late < /td> <
                td > $3753 < /td> <
                td > 1 < /td> <
                /tr> <
                tr >
                <
                td > Credit Installments < /td> <
                td > 3 < /td> <
                td > $26, 643 < /td> <
                td > $23, 578 < /td> <
                td > Open, Never Late < /td> <
                td > $350 < /td> <
                td > 3 < /td> <
                /tr> <
                tr >
                <
                td > Car Loans < /td> <
                td > 1 < /td> <
                td > $15, 750 < /td> <
                td > $11, 256 < /td> <
                td > Open, Never Late < /td> <
                td > $200 < /td> <
                td > 1 < /td> <
                /tr> <
                tr className = "total-row" >
                <
                td > Total < /td> <
                td > 5 < /td> <
                td > $165, 414 < /td> <
                td > $147, 855 < /td> <
                td > Open, Never Late < /td> <
                td > $4303 < /td> <
                td > 5 < /td> <
                /tr> <
                /tbody> <
                /table> <
                /section>

                <
                section className = "account-details" >
                <
                div className = "debt-chart" >
                <
                h3 > Debt By Account Type < /h3> <
                div className = "bars" >
                <
                div className = "bar mortgage" > 20 < /div> <
                div className = "bar credit" > 60 < /div> <
                div className = "bar car" > 20 < /div> <
                /div> <
                div className = "labels" >
                <
                span > Mortgage < /span> <
                span > Credit Installments < /span> <
                span > Car Loans < /span> <
                /div> <
                /div>

                <
                div className = "account-age" >
                <
                h3 > Account Age < /h3> <
                p > < strong > Length of Credit History: < /strong> 10 Years, 11 Months</p >
                <
                p > < strong > Average Account Age: < /strong> 7 years, 2 months</p >
                <
                p > < strong > Oldest Account: < /strong> CAPITAL BANK USA (Opened 12/
                14 / 2012) < /p> <
            p > < strong > Most Recent Account: < /strong> BELLS FARGO (Opened 05/
        08 / 2019) < /p> <
    /div> <
    /section>

<
section className = "inquiries" >
    <
    h2 > Inquiries and Requests For Credit History < /h2> <
    p > Numerous inquiries on your credit report might make you appear risky to lenders.Only seek new credit when you truly need it. < /p> <
    p > < strong > Inquiries in the last 24 months: < /strong></p >
    <
    ul >
    <
    li > ABC Mortgage Services– 01 / 24 / 2022 < /li> <
    li > Blue Hill Lending Co.–05 / 21 / 2023 < /li> <
    /ul> <
    /section>

<
footer className = "report-footer" >
    <
    p > 134 Greenwood Street, Arlington, CA 43792 < /p> <
    p > info @www.Equinox.com < /p> <
    p > +1 671 - 205 - 1649 < /p> <
    p > www.equinox.com < /p> <
    /footer> <
    /div>
);
};

export default CreditReport;