import { createMethod } from '../components/ApiComponent';

interface IRequestInit {
    [key: string]: any,
}

interface IResponseInit {
    [key: string]: any,
}

export default {
    init: createMethod<IRequestInit, IResponseInit>({
        method: 'post',
        url: '/init',
    }),
};
