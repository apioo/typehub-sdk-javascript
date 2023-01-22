/**
 * DocumentByUserAndDocumentIssueAndIdResource automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Issue} from "./Issue";
import {Message} from "./Message";

export default class DocumentByUserAndDocumentIssueAndIdResource extends ResourceAbstract {
    private url: string;

    private user: string;
    private document: string;
    private id: string;

    public constructor(user: string, document: string, id: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.user = user;
        this.document = document;
        this.id = id;

        this.url = baseUrl + "/document/"+user+"/"+document+"/issue/"+id+"";
    }

    /**
     * Returns an issue
     *
     * @returns {Promise<AxiosResponse<Issue>>}
     */
    public async getDocumentUserDocumentIssueId(): Promise<AxiosResponse<Issue>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<Issue>(this.url, params);
    }

    /**
     * Removes an issue
     *
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async deleteDocumentUserDocumentIssueId(): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'DELETE',
        };

        return this.httpClient.delete(this.url, params);
    }

}