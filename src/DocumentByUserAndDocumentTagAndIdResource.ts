/**
 * DocumentByUserAndDocumentTagAndIdResource automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Tag} from "./Tag";

export default class DocumentByUserAndDocumentTagAndIdResource extends ResourceAbstract {
    private url: string;

    private user: string;
    private document: string;
    private id: string;

    public constructor(user: string, document: string, id: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.user = user;
        this.document = document;
        this.id = id;

        this.url = baseUrl + "/document/"+user+"/"+document+"/tag/"+id+"";
    }

    /**
     * Returns a tag
     *
     * @returns {Promise<AxiosResponse<Tag>>}
     */
    public async getDocumentUserDocumentTagId(): Promise<AxiosResponse<Tag>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<Tag>(this.url, params);
    }

}
