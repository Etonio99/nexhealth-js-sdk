import { PatientsResource } from "./patients.js";

import type { RequestFunction } from "../../types/common.js";

export class V2Resources {
    readonly patients: PatientsResource;

    constructor(request: RequestFunction) {
        this.patients = new PatientsResource(request);
    }
}
