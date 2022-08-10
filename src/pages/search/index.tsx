import React from "react";
import Filters from "./Filters";
import styles from "./Search.module.scss";

const Search = () => {
    return (
        <div className="container">
            <div className={styles["search-container"]}>
                <div className={styles["filters"]}>
                    <Filters />
                </div>
                <div className={styles["villas"]}>villa</div>
            </div>
        </div>
    );
};

export default Search;
