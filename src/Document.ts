/**
 * Document automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {User} from "./User";
import {Document} from "./Document";
export interface Document {
    id?: number
    user?: User
    source?: Document
    status?: number
    stars?: number
    name?: string
    description?: string
    spec?: any
    updateDate?: string
    insertDate?: string
}