/**
 * IssueTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {CommentCollection} from "./CommentCollection";
import {CommentCreate} from "./CommentCreate";
import {Issue} from "./Issue";
import {IssueCollection} from "./IssueCollection";
import {Message} from "./Message";
import {MessageException} from "./MessageException";

export class IssueTag extends TagAbstract {
    /**
     * Creates a new issue comment
     *
     * @returns {Promise<Message>}
     * @throws {MessageException}
     * @throws {ClientException}
     */
    public async createComment(user: string, document: string, id: string, payload: CommentCreate): Promise<Message> {
        const url = this.parser.url('/document/:user/:document/issue/:id/comment', {
            'user': user,
            'document': document,
            'id': id,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'POST',
            params: this.parser.query({
            }),
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
     * Shows all issue comments
     *
     * @returns {Promise<CommentCollection>}
     * @throws {MessageException}
     * @throws {ClientException}
     */
    public async getAllComments(user: string, document: string, id: string, startIndex?: number, count?: number, search?: string): Promise<CommentCollection> {
        const url = this.parser.url('/document/:user/:document/issue/:id/comment', {
            'user': user,
            'document': document,
            'id': id,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
                'startIndex': startIndex,
                'count': count,
                'search': search,
            }),
        };

        try {
            const response = await this.httpClient.request<CommentCollection>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
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
     * Removes an issue
     *
     * @returns {Promise<Message>}
     * @throws {MessageException}
     * @throws {ClientException}
     */
    public async delete(user: string, document: string, id: string): Promise<Message> {
        const url = this.parser.url('/document/:user/:document/issue/:id', {
            'user': user,
            'document': document,
            'id': id,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'DELETE',
            params: this.parser.query({
            }),
        };

        try {
            const response = await this.httpClient.request<Message>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
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
     * Creates a new issue
     *
     * @returns {Promise<Message>}
     * @throws {MessageException}
     * @throws {ClientException}
     */
    public async create(user: string, document: string, payload: IssueCollection): Promise<Message> {
        const url = this.parser.url('/document/:user/:document/issue', {
            'user': user,
            'document': document,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'POST',
            params: this.parser.query({
            }),
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
     * Returns an issue
     *
     * @returns {Promise<Issue>}
     * @throws {MessageException}
     * @throws {ClientException}
     */
    public async get(user: string, document: string, id: string): Promise<Issue> {
        const url = this.parser.url('/document/:user/:document/issue/:id', {
            'user': user,
            'document': document,
            'id': id,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
            }),
        };

        try {
            const response = await this.httpClient.request<Issue>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
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
     * Returns all issues
     *
     * @returns {Promise<IssueCollection>}
     * @throws {MessageException}
     * @throws {ClientException}
     */
    public async getAll(user: string, document: string, startIndex?: number, count?: number, search?: string): Promise<IssueCollection> {
        const url = this.parser.url('/document/:user/:document/issue', {
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
            }),
        };

        try {
            const response = await this.httpClient.request<IssueCollection>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
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
