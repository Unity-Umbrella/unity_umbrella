import {CollegeApiServices} from "../collegeApiServices";
import {College} from "../../domain/models/college";
import {dummyCollege, dummyCollege1} from "./userAPI";

export class CollegeAPI implements CollegeApiServices {
    fetchUniqueColleges(): College[] {
        return [];
    }
}

export class DummyCollegeAPI implements CollegeApiServices {
    fetchUniqueColleges(): College[] {
        return [dummyCollege, dummyCollege1];
    }
}