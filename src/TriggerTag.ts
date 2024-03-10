/**
 * TriggerTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {Message} from "./Message";
import {MessageException} from "./MessageException";
import {Passthru} from "./Passthru";
import {Trigger} from "./Trigger";
import {TriggerCollection} from "./TriggerCollection";
import {TriggerCreate} from "./TriggerCreate";

export class TriggerTag extends TagAbstract {
    /**
     * Executes a trigger
     *
     * @returns {Promise<Message>}
     * @throws {MessageExceptionException}
     * @throws {ClientException}
     */
    public async execute(user: string, document: string, id: string, payload: Passthru): Promise<Message> {
        const url = this.parser.url('/document/:user/:document/trigger/:id/execute', {
            'user': user,
            'document': document,
            'id': id,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'POST',
            params: this.parser.query({
            }, [
            ]),
            data: payload
        };

        try {
            const response = await this.httpClient.request<Message>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    case 400:
                        throw new MessageException(error.response.data);
                    case 404:
                        throw new MessageException(error.response.data);
                    case 500:
                        throw new MessageException(error.response.data);
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }

    /**
     * Removes a trigger
     *
     * @returns {Promise<Message>}
     * @throws {MessageExceptionException}
     * @throws {ClientException}
     */
    public async delete(user: string, document: string, id: string): Promise<Message> {
        const url = this.parser.url('/document/:user/:document/trigger/:id', {
            'user': user,
            'document': document,
            'id': id,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'DELETE',
            params: this.parser.query({
            }, [
            ]),
        };

        try {
            const response = await this.httpClient.request<Message>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    case 400:
                        throw new MessageException(error.response.data);
                    case 404:
                        throw new MessageException(error.response.data);
                    case 500:
                        throw new MessageException(error.response.data);
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }

    /**
     * Creates a new trigger
     *
     * @returns {Promise<Message>}
     * @throws {MessageExceptionException}
     * @throws {ClientException}
     */
    public async create(user: string, document: string, payload: TriggerCreate): Promise<Message> {
        const url = this.parser.url('/document/:user/:document/trigger', {
            'user': user,
            'document': document,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'POST',
            params: this.parser.query({
            }, [
            ]),
            data: payload
        };

        try {
            const response = await this.httpClient.request<Message>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    case 400:
                        throw new MessageException(error.response.data);
                    case 404:
                        throw new MessageException(error.response.data);
                    case 500:
                        throw new MessageException(error.response.data);
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }

    /**
     * Returns a trigger
     *
     * @returns {Promise<Trigger>}
     * @throws {MessageExceptionException}
     * @throws {ClientException}
     */
    public async get(user: string, document: string, id: string): Promise<Trigger> {
        const url = this.parser.url('/document/:user/:document/trigger/:id', {
            'user': user,
            'document': document,
            'id': id,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
            }, [
            ]),
        };

        try {
            const response = await this.httpClient.request<Trigger>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    case 400:
                        throw new MessageException(error.response.data);
                    case 404:
                        throw new MessageException(error.response.data);
                    case 500:
                        throw new MessageException(error.response.data);
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }

    /**
     * Returns all configured triggers
     *
     * @returns {Promise<TriggerCollection>}
     * @throws {MessageExceptionException}
     * @throws {ClientException}
     */
    public async getAll(user: string, document: string, startIndex?: number, count?: number, search?: string): Promise<TriggerCollection> {
        const url = this.parser.url('/document/:user/:document/trigger', {
            'user': user,
            'document': document,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
                'startIndex': startIndex,
                'count': count,
                'search': search,
            }, [
            ]),
        };

        try {
            const response = await this.httpClient.request<TriggerCollection>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    case 400:
                        throw new MessageException(error.response.data);
                    case 404:
                        throw new MessageException(error.response.data);
                    case 500:
                        throw new MessageException(error.response.data);
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }


}
