import CardComponent from "../components/card/Card";
import PageContent from "../containers/page-content/PageContent";
import {memo} from "react";
import GridView from '../components/grid-view/GridView'

const HomePage = () => {
    return <PageContent>
        <>
            <GridView cols={2}>
                <CardComponent isDefaultCard cardSettings={{title: "Test", content: "Ahhhh"}} width={"100px"}/>
                <CardComponent isDefaultCard cardSettings={{title: "Test", content: "Ahhhh"}} width={"100px"}/>
                <CardComponent isDefaultCard cardSettings={{title: "Test", content: "Ahhhh"}} width={"100px"}/>
                <CardComponent isDefaultCard cardSettings={{title: "Test", content: "Ahhhh"}} width={"100px"}/>
                <CardComponent isDefaultCard cardSettings={{title: "Test", content: "Ahhhh"}} width={"100px"}/>
                <CardComponent isDefaultCard cardSettings={{title: "Test", content: "Ahhhh"}} width={"100px"}/>
                <CardComponent isDefaultCard cardSettings={{title: "Test", content: "Ahhhh"}} width={"100px"}/>
                <CardComponent isDefaultCard cardSettings={{title: "Test", content: "Ahhhh"}} width={"100px"}/>
                <CardComponent isDefaultCard cardSettings={{title: "Test", content: "Ahhhh"}} width={"100px"}/>
                <CardComponent isDefaultCard cardSettings={{title: "Test", content: "Ahhhh"}} width={"100px"}/>
            </GridView>
        </>
    </PageContent>
}

export default memo(HomePage);