import {
    FIRST_BOTTOM_TAB_ROUTE,
    ROOT_ROUTE,
    SECOND_BOTTOM_TAB_ROUTE,
    THIRD_BOTTOM_TAB_ROUTE,
    FIRST_TOP_TAB_ROUTE,
    SECOND_TOP_TAB_ROUTE,
} from './routeNames';

import MockScreen from '../shared/MockScreen';

export default {
    navigator: {
        type: 'stack',
        items: {
            [ROOT_ROUTE]: {
                options: {
                    headerShown: false,
                },
                navigator: {
                    type: 'tab',
                    items: {
                        [FIRST_BOTTOM_TAB_ROUTE]: {
                            navigator: {
                                type: 'topTab',
                                items: {
                                    [FIRST_TOP_TAB_ROUTE]: {
                                        component: MockScreen,
                                    },
                                    [SECOND_TOP_TAB_ROUTE]: {
                                        component: MockScreen,
                                    },
                                },
                            },
                        },
                        [SECOND_BOTTOM_TAB_ROUTE]: {
                            component: MockScreen,
                        },
                        [THIRD_BOTTOM_TAB_ROUTE]: {
                            component: MockScreen,
                        },
                    },
                },
            },
        },
    },
};
