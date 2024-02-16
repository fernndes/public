import { AuthenticationError } from "@/domain/errors"
import { AccessToken } from "@/domain/models"

export interface FacebookAuthentication {
    perform: (token: FacebookAuthentication.Params) => Promise<FacebookAuthentication.Result>
}

namespace FacebookAuthentication {
    export type Params = {
        token: string
    }

    export type Result = AccessToken | AuthenticationError
}