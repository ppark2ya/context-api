import React, { Fragment } from 'react';
import Header from 'Components/Header';
import Flex from 'styled-flex-component';
import Notification from 'Components/Notification';
import Store from 'store';

const AppPresenter = () => {
    return (
        <Fragment>
            <Header />
            <Flex alignCenter full column>
                {/* Consumer의 children으로는 Function이 들어가야한다 */}
                <Store.Consumer>
                    {store => {
                        return Object.keys(store.notifications).map(key => (
                            <Notification
                                key={store.notifications[key].id}
                                id={store.notifications[key].id}
                                text={store.notifications[key].text}
                                seen={store.notifications[key].seen}
                            />
                        ));
                    }}
                </Store.Consumer>
            </Flex>
        </Fragment>
    );
};

export default AppPresenter;