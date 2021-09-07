import { ROUTE_BUTTON } from './routeNames';
import ButtonScreen from './ButtonScreen';

export default {
    navigator: {
        type: 'stack',
        items: {
            [ROUTE_BUTTON]: {
                options: {
                    title: 'Кнопки',
                },
                component: ButtonScreen,
            },
        },
    },
};
