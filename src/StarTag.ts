/**
 * StarTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {TagAbstract, HttpRequest} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {DocumentCollection} from "./DocumentCollection";
import {Message} from "./Message";
import {MessageException} from "./MessageException";

export class StarTag extends TagAbstract {
    /**
     * Returns all stared documents for the current user
     *
     * @returns {Promise<DocumentCollection>}
     * @throws {MessageException}
     * @throws {ClientException}
     */
    public async getAll(startIndex?: number, count?: number, search?: string): Promise<DocumentCollection> {
        const url = this.parser.url('/star', {
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
            return await response.json() as DocumentCollection;
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
