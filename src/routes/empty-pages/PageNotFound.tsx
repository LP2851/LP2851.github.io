import PageContent from "../../containers/page-content/PageContent";
import {Link} from "react-router-dom"
import styles from "../RouteWrapper.module.css";
import SimpleCard from "../../components/card/SimpleCard";

const PageNotFound = () => {
    return <PageContent>
        <div className={styles.pageNotFound}>
            <h1>404: Page Not Found</h1>
            <SimpleCard width="200px">
                <div className={`${styles.returnLinkCardContent}`}>
                    <Link className={styles.returnLink} to="/">Return to Home Page</Link>
                </div>
            </SimpleCard>
        </div>
    </PageContent>
}

export default PageNotFound;