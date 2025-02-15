/**
 * MetaTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {TagAbstract, HttpRequest} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {SystemAbout} from "./SystemAbout";

export class MetaTag extends TagAbstract {
    /**
     * @returns {Promise<SystemAbout>}
     * @throws {ClientException}
     */
    public async getAbout(): Promise<SystemAbout> {
        const url = this.parser.url('/', {
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
            return await response.json() as SystemAbout;
        }

        const statusCode = response.status;
        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }



}
