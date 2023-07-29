/**
 * PullRequestTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {CommentCollection} from "./CommentCollection";
import {CommentCreate} from "./CommentCreate";
import {Message} from "./Message";
import {MessageException} from "./MessageException";
import {Passthru} from "./Passthru";
import {PullRequest} from "./PullRequest";
import {PullRequestCollection} from "./PullRequestCollection";
import {PullRequestCreate} from "./PullRequestCreate";

export class PullRequestTag extends TagAbstract {
    /**
     * Creates a new issue comment
     *
     * @returns {Promise<Message>}
     * @throws {MessageException}
     * @throws {ClientException}
     */
    public async createComment(user: string, document: string, id: string, payload: CommentCreate): Promise<Message> {
        const url = this.parser.url('/document/:user/:document/pull_request/:id/comment', {
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
     * Shows all pull request comments
     *
     * @returns {Promise<CommentCollection>}
     * @throws {MessageException}
     * @throws {ClientException}
     */
    public async getAllComments(user: string, document: string, id: string, startIndex?: number, count?: number, search?: string): Promise<CommentCollection> {
        const url = this.parser.url('/document/:user/:document/pull_request/:id/comment', {
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
     * Removes a pull request
     *
     * @returns {Promise<Message>}
     * @throws {MessageException}
     * @throws {ClientException}
     */
    public async delete(user: string, document: string, id: string): Promise<Message> {
        const url = this.parser.url('/document/:user/:document/pull_request/:id', {
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
     * Merges a pull request
     *
     * @returns {Promise<Message>}
     * @throws {MessageException}
     * @throws {ClientException}
     */
    public async update(user: string, document: string, id: string, payload: Passthru): Promise<Message> {
        const url = this.parser.url('/document/:user/:document/pull_request/:id', {
            'user': user,
            'document': document,
            'id': id,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'PUT',
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
     * Creates a new pull request
     *
     * @returns {Promise<Message>}
     * @throws {MessageException}
     * @throws {ClientException}
     */
    public async create(user: string, document: string, payload: PullRequestCreate): Promise<Message> {
        const url = this.parser.url('/document/:user/:document/pull_request', {
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
     * Returns an pull request
     *
     * @returns {Promise<PullRequest>}
     * @throws {MessageException}
     * @throws {ClientException}
     */
    public async get(user: string, document: string, id: string): Promise<PullRequest> {
        const url = this.parser.url('/document/:user/:document/pull_request/:id', {
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
            const response = await this.httpClient.request<PullRequest>(params);
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
     * @returns {Promise<PullRequestCollection>}
     * @throws {MessageException}
     * @throws {ClientException}
     */
    public async getAll(user: string, document: string, startIndex?: number, count?: number, search?: string): Promise<PullRequestCollection> {
        const url = this.parser.url('/document/:user/:document/pull_request', {
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
            const response = await this.httpClient.request<PullRequestCollection>(params);
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