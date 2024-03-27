class AppointmentDate extends Date {
    constructor(dateString: string, id: number) {
        super(dateString);
        this.id = id;
    }

    id: number;
}

interface HashTable<T> {
    [key: number]: T;
}