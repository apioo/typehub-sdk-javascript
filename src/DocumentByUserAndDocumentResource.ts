/**
 * DocumentByUserAndDocumentResource automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Document} from "./Document";
import {DocumentUpdate} from "./DocumentUpdate";
import {Message} from "./Message";

export default class DocumentByUserAndDocumentResource extends ResourceAbstract {
    private url: string;

    private user: string;
    private document: string;

    public constructor(user: string, document: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.user = user;
        this.document = document;

        this.url = baseUrl + "/document/"+user+"/"+document+"";
    }

    /**
     * Returns a document
     *
     * @returns {Promise<AxiosResponse<Document>>}
     */
    public async getDocumentUserDocument(): Promise<AxiosResponse<Document>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<Document>(this.url, params);
    }

    /**
     * Updates a document
     *
     * @param {DocumentUpdate} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async putDocumentUserDocument(data: DocumentUpdate): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'PUT',
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * Removes a document
     *
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async deleteDocumentUserDocument(): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'DELETE',
        };

        return this.httpClient.delete(this.url, params);
    }

}
