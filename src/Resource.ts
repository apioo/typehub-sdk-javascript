/**
 * Resource automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {About} from "./About";

export default class Resource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "";
    }

    /**
     * @returns {Promise<AxiosResponse<About>>}
     */
    public async systemActionGetAbout(): Promise<AxiosResponse<About>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<About>(this.url, params);
    }

}
