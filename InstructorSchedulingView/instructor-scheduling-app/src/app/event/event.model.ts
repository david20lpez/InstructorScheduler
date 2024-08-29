import { Instructor } from "../instructor/instructor.model";

export class TrainerEvent {
    event_id?: number;
    event_name?: string;
    description?: string;
    start_date?: Date;
    end_date?: Date;
    trainer_id?: string
}
