/**
 * DocumentByUserAndDocumentPullRequestResource automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {AppModelCollectionQuery} from "./AppModelCollectionQuery";
import {PullRequestCollection} from "./PullRequestCollection";
import {PullRequestCreate} from "./PullRequestCreate";
import {Message} from "./Message";

export default class DocumentByUserAndDocumentPullRequestResource extends ResourceAbstract {
    private url: string;

    private user: string;
    private document: string;

    public constructor(user: string, document: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.user = user;
        this.document = document;

        this.url = baseUrl + "/document/"+user+"/"+document+"/pull_request";
    }

    /**
     * Returns all pull requests
     *
     * @param {AppModelCollectionQuery} query
     * @returns {Promise<AxiosResponse<PullRequestCollection>>}
     */
    public async getDocumentUserDocumentPullRequest(query?: AppModelCollectionQuery): Promise<AxiosResponse<PullRequestCollection>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            params: query,
        };

        return this.httpClient.get<PullRequestCollection>(this.url, params);
    }

    /**
     * Creates a new pull request
     *
     * @param {PullRequestCreate} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async postDocumentUserDocumentPullRequest(data: PullRequestCreate): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'POST',
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
