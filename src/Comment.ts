/**
 * Comment automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {User} from "./User";
import {CommentReactions} from "./CommentReactions";

export interface Comment {
    id?: number
    user?: User
    status?: number
    reaction?: CommentReactions
    comment?: string
    updateDate?: string
    insertDate?: string
}

