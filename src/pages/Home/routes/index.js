import React from 'react';
import { connect } from 'dva';
import styles from './index.scss';

function Home(props) {
    const { text } = props;
    return (
        <div className={styles.home}>
            <div className={styles.homeText}>
                <h1>欢迎来到xxx pizza店</h1>
                <h2>这里有美味的pizza</h2>
                <p>{text}</p>
            </div>
        </div>
    )
};

export default connect(({ home }) => ({ ...home }))(Home);
