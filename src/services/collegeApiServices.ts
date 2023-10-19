import {College} from "../domain/models/college";

export interface CollegeApiServices {
    fetchUniqueColleges(): College[]
}