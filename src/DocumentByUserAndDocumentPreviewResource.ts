/**
 * DocumentByUserAndDocumentPreviewResource automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {AppModelVersionQuery} from "./AppModelVersionQuery";
import {DocumentPreview} from "./DocumentPreview";
import {Passthru} from "./Passthru";

export default class DocumentByUserAndDocumentPreviewResource extends ResourceAbstract {
    private url: string;

    private user: string;
    private document: string;

    public constructor(user: string, document: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.user = user;
        this.document = document;

        this.url = baseUrl + "/document/"+user+"/"+document+"/preview";
    }

    /**
     * Generates a preview
     *
     * @param {AppModelVersionQuery} query
     * @returns {Promise<AxiosResponse<DocumentPreview>>}
     */
    public async getDocumentUserDocumentPreview(query?: AppModelVersionQuery): Promise<AxiosResponse<DocumentPreview>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            params: query,
        };

        return this.httpClient.get<DocumentPreview>(this.url, params);
    }

    /**
     * Generates a preview
     *
     * @param {Passthru} data
     * @returns {Promise<AxiosResponse<DocumentPreview>>}
     */
    public async postDocumentUserDocumentPreview(data: Passthru): Promise<AxiosResponse<DocumentPreview>> {
        let params: AxiosRequestConfig = {
            method: 'POST',
        };

        return this.httpClient.post<DocumentPreview>(this.url, data, params);
    }

}
