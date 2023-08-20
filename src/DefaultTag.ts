/**
 * DefaultTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {About} from "./About";
import {DocumentPreview} from "./DocumentPreview";
import {Message} from "./Message";
import {MessageException} from "./MessageException";

export class DefaultTag extends TagAbstract {
    /**
     * Shows a preview
     *
     * @returns {Promise<DocumentPreview>}
     * @throws {MessageException}
     * @throws {ClientException}
     */
    public async showPreview(user: string, document: string, version?: string): Promise<DocumentPreview> {
        const url = this.parser.url('/document/:user/:document/preview', {
            'user': user,
            'document': document,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
                'version': version,
            }),
        };

        try {
            const response = await this.httpClient.request<DocumentPreview>(params);
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
     * @returns {Promise<About>}
     * @throws {ClientException}
     */
    public async getAbout(): Promise<About> {
        const url = this.parser.url('/', {
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
            }),
        };

        try {
            const response = await this.httpClient.request<About>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }


}
