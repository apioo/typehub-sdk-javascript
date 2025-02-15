/**
 * IssueTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {TagAbstract, HttpRequest} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {CommentCollection} from "./CommentCollection";
import {CommentCreate} from "./CommentCreate";
import {Issue} from "./Issue";
import {IssueCollection} from "./IssueCollection";
import {IssueCreate} from "./IssueCreate";
import {Message} from "./Message";
import {MessageException} from "./MessageException";
import {Passthru} from "./Passthru";

export class IssueTag extends TagAbstract {
    /**
     * Reacts to a comment
     *
     * @returns {Promise<Message>}
     * @throws {MessageException}
     * @throws {ClientException}
     */
    public async reactComment(user: string, document: string, id: string, comment: string, reaction: string, payload: Passthru): Promise<Message> {
        const url = this.parser.url('/document/:user/:document/issue/:id/comment/:comment/:reaction', {
            'user': user,
            'document': document,
            'id': id,
            'comment': comment,
            'reaction': reaction,
        });

        let request: HttpRequest = {
            url: url,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            params: this.parser.query({
            }, [
            ]),
            data: payload
        };

        const response = await this.httpClient.request(request);
        if (response.ok) {
            return await response.json() as Message;
        }

        const statusCode = response.status;
        if (statusCode === 400) {
            throw new MessageException(await response.json() as Message);
        }

        if (statusCode === 404) {
            throw new MessageException(await response.json() as Message);
        }

        if (statusCode === 500) {
            throw new MessageException(await response.json() as Message);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }
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

        let request: HttpRequest = {
            url: url,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            params: this.parser.query({
            }, [
            ]),
            data: payload
        };

        const response = await this.httpClient.request(request);
        if (response.ok) {
            return await response.json() as Message;
        }

        const statusCode = response.status;
        if (statusCode === 400) {
            throw new MessageException(await response.json() as Message);
        }

        if (statusCode === 404) {
            throw new MessageException(await response.json() as Message);
        }

        if (statusCode === 500) {
            throw new MessageException(await response.json() as Message);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
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

        let request: HttpRequest = {
            url: url,
            method: 'GET',
            headers: {
            },
            params: this.parser.query({
                'startIndex': startIndex,
                'count': count,
                'search': search,
            }, [
            ]),
        };

        const response = await this.httpClient.request(request);
        if (response.ok) {
            return await response.json() as CommentCollection;
        }

        const statusCode = response.status;
        if (statusCode === 400) {
            throw new MessageException(await response.json() as Message);
        }

        if (statusCode === 404) {
            throw new MessageException(await response.json() as Message);
        }

        if (statusCode === 500) {
            throw new MessageException(await response.json() as Message);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
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

        let request: HttpRequest = {
            url: url,
            method: 'DELETE',
            headers: {
            },
            params: this.parser.query({
            }, [
            ]),
        };

        const response = await this.httpClient.request(request);
        if (response.ok) {
            return await response.json() as Message;
        }

        const statusCode = response.status;
        if (statusCode === 400) {
            throw new MessageException(await response.json() as Message);
        }

        if (statusCode === 404) {
            throw new MessageException(await response.json() as Message);
        }

        if (statusCode === 500) {
            throw new MessageException(await response.json() as Message);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }
    /**
     * Creates a new issue
     *
     * @returns {Promise<Message>}
     * @throws {MessageException}
     * @throws {ClientException}
     */
    public async create(user: string, document: string, payload: IssueCreate): Promise<Message> {
        const url = this.parser.url('/document/:user/:document/issue', {
            'user': user,
            'document': document,
        });

        let request: HttpRequest = {
            url: url,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            params: this.parser.query({
            }, [
            ]),
            data: payload
        };

        const response = await this.httpClient.request(request);
        if (response.ok) {
            return await response.json() as Message;
        }

        const statusCode = response.status;
        if (statusCode === 400) {
            throw new MessageException(await response.json() as Message);
        }

        if (statusCode === 404) {
            throw new MessageException(await response.json() as Message);
        }

        if (statusCode === 500) {
            throw new MessageException(await response.json() as Message);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
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

        let request: HttpRequest = {
            url: url,
            method: 'GET',
            headers: {
            },
            params: this.parser.query({
            }, [
            ]),
        };

        const response = await this.httpClient.request(request);
        if (response.ok) {
            return await response.json() as Issue;
        }

        const statusCode = response.status;
        if (statusCode === 400) {
            throw new MessageException(await response.json() as Message);
        }

        if (statusCode === 404) {
            throw new MessageException(await response.json() as Message);
        }

        if (statusCode === 500) {
            throw new MessageException(await response.json() as Message);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }
    /**
     * Returns all issues
     *
     * @returns {Promise<IssueCollection>}
     * @throws {MessageException}
     * @throws {ClientException}
     */
    public async getAll(user: string, document: string, status?: number, startIndex?: number, count?: number, search?: string): Promise<IssueCollection> {
        const url = this.parser.url('/document/:user/:document/issue', {
            'user': user,
            'document': document,
        });

        let request: HttpRequest = {
            url: url,
            method: 'GET',
            headers: {
            },
            params: this.parser.query({
                'status': status,
                'startIndex': startIndex,
                'count': count,
                'search': search,
            }, [
            ]),
        };

        const response = await this.httpClient.request(request);
        if (response.ok) {
            return await response.json() as IssueCollection;
        }

        const statusCode = response.status;
        if (statusCode === 400) {
            throw new MessageException(await response.json() as Message);
        }

        if (statusCode === 404) {
            throw new MessageException(await response.json() as Message);
        }

        if (statusCode === 500) {
            throw new MessageException(await response.json() as Message);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }



}
