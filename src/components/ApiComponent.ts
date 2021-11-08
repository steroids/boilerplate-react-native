import ApiComponentBase, { IApiSendConfig } from '@steroidsjs/core/components/ApiComponent';

export default class ApiComponent extends ApiComponentBase {}

export const createMethod = <IRequest, IResponse = null>(
    config: IApiSendConfig,
) => (
        api: any,
        params?: IRequest | Record<string, unknown> | null,
        options?: Record<string, unknown>,
    ): Promise<IResponse> => api.send({
        ...config,
        params,
        options,
    });
