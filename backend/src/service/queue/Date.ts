class AppointmentDate extends Date {
    constructor(dateString: string, id: number) {
        super(dateString);
        this.id = id;
    }

    id: number;
}

